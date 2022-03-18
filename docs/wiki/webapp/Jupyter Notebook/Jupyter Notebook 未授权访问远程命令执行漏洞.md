# Jupyter Notebook 未授权访问远程命令执行漏洞

## 漏洞描述

Jupyter Notebook（此前被称为 IPython notebook）是一个交互式笔记本，支持运行 40 多种编程语言。

如果管理员未为Jupyter Notebook配置密码，将导致未授权访问漏洞，游客可在其中创建一个console并执行任意Python代码和命令。

## 漏洞影响

<a-checkbox checked>Jupyter Notebook</a-checkbox></br>

## 网络测绘

<a-checkbox checked>app="Jupyter-Notebook" && body="Terminal"</a-checkbox></br>

## 漏洞复现

访问目标, 点击 Terminal 打开命令行界面



![img](../../../.vuepress/public/img/ju-1.png)



执行命令并反弹shell



![img](../../../.vuepress/public/img/ju-2.png)