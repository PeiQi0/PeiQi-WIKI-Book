# Go-fastdfs GetClientIp 未授权访问漏洞

## 漏洞描述

Go-fastdfs GetClientIp方法存在XFF头绕过漏洞，攻击者通过漏洞可以未授权调用接口，获取配置文件等敏感信息

## 漏洞影响

<a-checkbox checked>Go-fastdfs  </a-checkbox></br>

## 网络测绘

<a-checkbox checked>"go-fastdfs" </a-checkbox></br>

## 漏洞复现

主页面

![img](../../../.vuepress/public/img/1680944897657-800f832f-0834-4ac3-bf45-bd1f208326a4-20230415101718568.png)

调用读取配置接口，返回 ip 不允许访问

```plain
/group1/reload?action=get
```

![img](../../../.vuepress/public/img/1680947487576-fe109286-5b54-4719-8a6c-97d0bab0195e.png)

追踪错误信息代码

![img](../../../.vuepress/public/img/1680947601766-4ef44fa9-6daf-429f-b744-b8c9816f705f.png)

![img](../../../.vuepress/public/img/1680947698319-f074adce-1bb0-4d6c-892f-75a9e97499fc.png)

跟一下 GetClientIp方法，这里会从 X-Forwarded-For 等参数获取值

![img](../../../.vuepress/public/img/1680947727700-28338520-a44b-4dc0-aaea-d8472455cae9.png)

回到调用的起点，验证方法为调用 IsPeer 参数

![img](../../../.vuepress/public/img/1680956299322-f59b1eb3-ec47-4c26-8e65-ea899bb4fce1.png)

![img](../../../.vuepress/public/img/1680956399670-9e08c9e2-187c-48ad-9cd9-2fafd245061d.png)

这里主要是验证获取到的值是否为配置中的 AdminIps

![img](../../../.vuepress/public/img/1680956485885-f8063692-42e2-4287-80fa-9513fcac3d99.png)

在配置文件 cfg.json 中 admin_ips 默认为 127.0.0.1 (可被爆破)

![img](../../../.vuepress/public/img/1680956563169-0313e611-f10e-4104-9ce2-893ed316ebc9.png)

所以通过设置 X-Forwarded-For 就可以绕过接口调用限制，执行修改配置文件等操作，验证POC

```plain
/group1/reload?action=get

X-Forwarded-For: 127.0.0.1
```

![img](../../../.vuepress/public/img/1680956654166-f02b3f8a-e474-4749-8290-7e6890d937dd.png)