module.exports = [
	"/wiki/serverapp/",
    {
		title: "Git",
		collapsable: true,
		children:[
            "/wiki/serverapp/Git/Git-LFS 远程命令执行漏洞 CVE-2020-27955",
		]
	},
	{
		title: "Redis",
		collapsable: true,
		children:[
			"/wiki/serverapp/Redis/Redis 小于5.0.5 主从复制远程命令执行漏洞",
			"/wiki/serverapp/Redis/Redis Lua 沙箱绕过 远程命令执行 CVE-2022-0543",
		]
	},
	{
		title: "MinIO",
		collapsable: true,
		children:[
			"/wiki/serverapp/MinIO/MinIO SSRF漏洞 CVE-2021-21287",
			"/wiki/serverapp/MinIO/MinIO verify 敏感信息泄漏漏洞 CVE-2023-28432",
		]
	},
	{
		title: "QEMU",
		collapsable: true,
		children:[
			"/wiki/serverapp/QEMU/QEMU 虚拟机逃逸漏洞 CVE-2020-14364",
		]
	},
	{
		title: "向日葵",
		collapsable: true,
		children:[
			"/wiki/serverapp/向日葵/向日葵 check 远程命令执行漏洞 CNVD-2022-10270",
		]
	},
	{
		title: "NVIDIA",
		collapsable: true,
		children:[
			"/wiki/serverapp/NVIDIA/NVIDIA GPU显示驱动程序 信息泄露 CVE-2021-1056",
		]
	},
	{
		title: "Chrome",
		collapsable: true,
		children:[
			"/wiki/serverapp/Chrome/Chrome 浏览器未开启沙箱 远程命令执行漏洞",
		]
	},
	{
		title: "VMware",
		collapsable: true,
		children:[
			"/wiki/serverapp/VMware/VMware vRealize Operations Manager SSRF漏洞 CVE-2021-21975",
			"/wiki/serverapp/VMware/VMware vCenter vid 任意文件读取漏洞",
			"/wiki/serverapp/VMware/VMware Workspace ONE Access SSTI漏洞 CVE-2022-22954",
		]
	},
	{
		title: "Openssl",
		collapsable: true,
		children:[
			"/wiki/serverapp/Openssl/OpenSSL 心脏滴血漏洞 CVE-2014-0160",
		]
	},
	{
		title: "Saltstack",
		collapsable: true,
		children:[
			"/wiki/serverapp/Saltstack/Saltstack 远程命令执行漏洞 CVE-2020-11651-11652",
			"/wiki/serverapp/Saltstack/SaltStack 未授权访问命令执行漏洞 CVE-2020-16846-25592",
		]
	},
	{
		title: "Openssh",
		collapsable: true,
		children:[
			"/wiki/serverapp/Openssh/OpenSSH 命令注入漏洞 CVE-2020-15778",
		]
	},
	{
		title: "WordPress",
		collapsable: true,
		children:[
			"/wiki/serverapp/WordPress/WordPress All-in-One Video Gallery video.php 任意文件读取漏洞 CVE-2022-2633",
			"/wiki/serverapp/WordPress/WordPress 3DPrint Lite 3dprint-lite-functions.php 任意文件上传漏洞",
			"/wiki/serverapp/WordPress/WordPress Duplicator duplicator.php 任意文件读取漏洞 CVE-2020-11738",
			"/wiki/serverapp/WordPress/WordPress Redux Framework class-redux-helpers.php 敏感信息泄漏漏洞 CVE-2021-38314",
			"/wiki/serverapp/WordPress/WordPress Welcart e-Commerce progress-check.php 任意文件读取漏洞 CVE-2022-41840",
			"/wiki/serverapp/WordPress/WordPress Simple File List ee-downloader.php 任意文件读取漏洞 CVE-2022-1119",
		]
	},
	{
		title: "ClickHouse",
		collapsable: true,
		children:[
			"/wiki/serverapp/ClickHouse/ClickHouse API 数据库接口未授权访问漏洞",
		]
	},
	{
		title: "VoIPmonitor",
		collapsable: true,
		children:[
			"/wiki/serverapp/VoIPmonitor/VoIPmonitor 远程命令执行漏洞 CVE-2021-30461",
		]
	},
	{
		title: "Microsoft Exchange",
		collapsable: true,
		children:[
			"/wiki/serverapp/Microsoft Exchange/Microsoft Exchange autodiscover.json 反射型XSS CVE-2021-41349",
			"/wiki/serverapp/Microsoft Exchange/Microsoft Exchange SSRF漏洞 CVE-2021-26885",
		]
	},
];