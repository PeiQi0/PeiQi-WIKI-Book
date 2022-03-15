---
title: 情报交流
---

# 情报交流

<br/>

<template>
  <div>
    <a-progress :percent="30" />
    <a-progress :percent="50" status="active" />
    <a-progress :percent="70" status="exception" />
    <a-progress :percent="100" />
  </div>
</template>



<br/>
<template>
      <a-comment>
        <a slot="author">PeiQi</a>
        <a-avatar
          slot="avatar"
          src="/img/home.svg"
          alt="PeiQi"
        />
        <p slot="content">
          情报交流模块仅仅允许漏洞情报信息交流，当有公开的POC/EXP或分析分章出现时，可以在这里分享你的发现，文库会优先更新这里出现的真实漏洞情报
          发送格式: [漏洞名称] 漏洞参考链接
        </p>
        </a-tooltip>
      </a-comment>
</template>

<Vssue />  