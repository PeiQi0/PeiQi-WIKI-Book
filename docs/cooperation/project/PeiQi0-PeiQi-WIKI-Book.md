---
title: PeiQi0/PeiQi-WIKI-Book
---

<template>
  <div style="background-color: #F5F5F5; padding: 24px;">
    <a-page-header
      :ghost="false"
      title="PeiQi0/PeiQi-WIKI-Book"
      sub-title="面向网络安全从业者的知识文库"
      @back="() => $router.go(-1)"
    >
      <template>
      <a-comment>
        <a slot="author">PeiQi</a>
        <a-avatar
          slot="avatar"
          src="/img/home.svg"
          alt="PeiQi"
        />
        <p slot="content">
          PeiQi文库是一个面对网络安全从业者的知识库，涉及漏洞研究，代码审计，CTF夺旗，红蓝对抗等多个安全方向，用于解决安全信息不聚合，安全资料不易找的难题。帮助网络安全从业者共同构建安全的互联网，快速验证并及时修复相关漏洞，为甲方等提出安全建设意见。
        </p>
        </a-tooltip>
      </a-comment>
    </template>
      <template slot="extra">
        <a-button href="https://github.com/PeiQi0/PeiQi-WIKI-Book" key="1" type="primary">
          Github
        </a-button>
      </template>
      <a-descriptions size="small" :column="4">
        <a-descriptions-item label="项目创作者">
          <a>PeiQi</a>
        </a-descriptions-item>
        <a-descriptions-item label="安全方向">
          <a>安全知识聚合</a>
        </a-descriptions-item>
        <a-descriptions-item label="创建时间">
          <a>2020-11-21</a>
        </a-descriptions-item>
        <a-descriptions-item label="作者寄语">
          感谢大家支持，点一个小星星🌟啦～
        </a-descriptions-item>
      </a-descriptions>
    </a-page-header>
  </div>
</template>

<style>
tr:last-child td {
  padding-bottom: 0;
}
</style>


![image-20220312092624209](../../.vuepress/public/img/image-20220312092624209.png)

