module.exports = [
	"/wiki/frame/",
	{
		title: "Rails",
		collapsable: true,
		children:[
			"/wiki/frame/Rails/Rails sprockets 任意文件读取漏洞 CVE-2018-3760",
			"/wiki/frame/Rails/Rails Accept 任意文件读取漏洞 CVE-2019-5418",
		]
	},
	{
		title: "jQuery",
		collapsable: true,
		children:[
			"/wiki/frame/jQuery/jQuery XSS漏洞 CVE-2020-11022",
		]
	},
	{
		title: "Laravel",
		collapsable: true,
		children:[
			"/wiki/frame/Laravel/Laravel Debug模式 _ignition 远程代码执行漏洞 CVE-2021-3129",
			"/wiki/frame/Laravel/Laravel env 配置文件泄露 CVE-2017-16894",
			"/wiki/frame/Laravel/Laravel Filemanager插件 download 任意文件读取漏洞 CVE-2022-40734",
		]
	},
	{
		title: "PHPUnit",
		collapsable: true,
		children:[
			"/wiki/frame/PHPUnit/PHPUnit eval-stdin.php 远程命令执行漏洞 CVE-2017-9841",
		]
	},
	{
		title: "ThinkPHP",
		collapsable: true,
		children:[
			"/wiki/frame/ThinkPHP/ThinkPHP LoadLangPack lang 任意文件包含漏洞",
		]
	},
	{
		title: "MotionEye",
		collapsable: true,
		children:[
			"/wiki/frame/MotionEye/MotionEye 视频监控组件 list 信息泄漏洞 CVE-2022-25568",
		]
	},
	{
		title: "SpringBoot",
		collapsable: true,
		children:[
			"/wiki/frame/SpringBoot/Spring Cloud Gateway表达式注入 远程命令执行漏洞 CVE-2022-22947",
			"/wiki/frame/SpringBoot/Spring Cloud Function SPEL 远程命令执行漏洞",
			"/wiki/frame/SpringBoot/Spring Core JDK9+ Spring4Shell远程命令执行漏洞",
		]
	},
];
