module.exports = [
	"/wiki/system/",
    {
		title: "Linux",
		collapsable: true,
		children:[
			"/wiki/system/Linux/Linux openvswitch权限提升漏洞 CVE-2022-2639",
            "/wiki/system/Linux/Linux Polkit权限提升漏洞 CVE-2021-4034",
			"/wiki/system/Linux/Linux sudo权限提升漏洞 CVE-2021-3156",
			"/wiki/system/Linux/Linux kernel权限提升漏洞 CVE-2021-3493",
			"/wiki/system/Linux/Linux DirtyPipe权限提升漏洞 CVE-2022-0847",
			"/wiki/system/Linux/Linux eBPF权限提升漏洞 CVE-2022-23222",
		]
	},
	{
		title: "Windows",
		collapsable: true,
		children:[
			"/wiki/system/Windows/Windows Win32k 内核提权漏洞 CVE-2022-21882",
			"/wiki/system/Windows/Windows Win32k 本地提权漏洞 CVE-2021-1732",
			"/wiki/system/Windows/Windows SMB远程代码执行漏洞 CVE-2020-0796",
			"/wiki/system/Windows/Windows CryptoAPI欺骗漏洞 CVE-2020-0601",
		]
	}
];