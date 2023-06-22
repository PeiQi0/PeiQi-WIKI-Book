---
home: true
heroImage: /img/home.svg
actionBtn:
  text: 开始使用🍃
  link: /about/
  type: primary
  ghost: true
  size: large
preactionBtn:
  text: 支持项目🍃
  link: /about/support
  type: primary
  ghost: true
  size: large
features:
- title: 实用
  details: 收录互联网中各类文章
- title: 详细
  details: 全面的修复及验证方法
- title: 开源
  details: 每个人都可以自由搭建

head: [
    ['link', { rel: 'icon', href: '/img/home.svg' }],
    ['meta', { name: 'referrer', content: 'never' }],
    ['meta', { name: 'keywords', content: '知识库,漏洞复现,PeiQi文库,代码审计,渗透测试' }],
    ['meta', { name: 'description', content: '如今漏洞的各种复现文章已经填满了互联网，但是每次去尝试漏洞复现时，总会纠结于环境搭建，POC和漏洞原理上。由于这些因素，通常都需要翻阅很多很多的文章才能理解这个漏洞，于是，便萌生了把环境搭建，POC，漏洞原理全部集合在一个文库的想法，PeiQI WiKi-POC文库便由此而来🐣' }],
  ]
---

</br>
</br>
<a-alert type="info" message="提示" description="由于传播、利用此文所提供的信息而造成的任何直接或者间接的后果及损失，均由使用者本人负责，文章作者不为此承担任何责任。PeiQi文库 拥有对此文章的修改和解释权如欲转载或传播此文章，必须保证此文章的完整性，包括版权声明等全部内容。未经作者允许，不得任意修改或者增减此文章内容，不得以任何方式将其用于商业目的。" showIcon>
</a-alert>

</br>
</br>

<template>
  <a-steps>
    <a-step status="finish" title="Login Github">
      <a-icon slot="icon" type="github" />
    </a-step>
    <a-step status="finish" title="Star">
      <a-icon slot="icon" type="star" />
    </a-step>
    <a-step status="process" title="Reading">
      <a-icon slot="icon" type="loading" />
    </a-step>
    <a-step status="wait" title="Thank">
      <a-icon slot="icon" type="smile-o" />
    </a-step>
  </a-steps>
</template>