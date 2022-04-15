# MongoDB 27017端口

## 关于

<a-checkbox checked>MongoDB服务安装后，默认未开启权限验证。如果服务监听在0.0.0.0，则可远程无需授权访问数据库。</a-checkbox></br>

<a-checkbox checked>3.0之前版本的MongoDB,默认监听在0.0.0.0，3.0及之后版本默认监听在127.0.0.1。</a-checkbox></br>

<a-checkbox checked>3.0之前版本，如未添加用户管理员账号及数据库账号，使用--auth参数启动时，在本地通过127.0.0.1仍可无需账号密码登陆访问数据库，远程访问则提示需认证；</a-checkbox></br>

<a-checkbox checked>3.0及之后版本，使用--auth参数启动后，无账号则本地和远程均无任何数据库访问权限。</a-checkbox></br>



## 攻击方法

可以直接使用 Navicat 工具连接即可

![img](../../../.vuepress/public/img/1629277527151-100e0a48-ef9d-4914-99cb-5a0335cdb676.png)

在FOFA搜索引擎中，当出现未授权的请况将会显示如下图

![img](../../../.vuepress/public/img/1629277624323-64524666-b1fa-4a68-9864-1c38ad3f0790.png)