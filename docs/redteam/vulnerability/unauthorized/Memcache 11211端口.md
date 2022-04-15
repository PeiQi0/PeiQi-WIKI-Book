# Memcache 11211端口

## 关于

<a-checkbox checked>Memcached是一套分布式的高速缓存系统。它以Key-Value（键值对）形式将数据存储在内存中</a-checkbox></br>

<a-checkbox checked>由于memcached安全设计缺陷，客户端连接memcached服务器后 无需认证就 可读取、修改服务器缓存内容。</a-checkbox></br>



## 攻击方法

使用nc连接目标

```bash
nc xxx.xxx.xxx.xxx 11211
```

![img](../../../.vuepress/public/img/1629282465066-16edc9ec-baa6-4516-97d7-cec48fda2362.png)

在FOFA搜索引擎中，当出现未授权的请况将会显示如下图

![img](../../../.vuepress/public/img/1629282437513-18421004-85e4-4488-8db7-f606bf470cce.png)