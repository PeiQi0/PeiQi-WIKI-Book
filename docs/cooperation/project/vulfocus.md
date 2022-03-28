---
title: Fofapro/Vulfocus
---

<template>
  <div style="background-color: #F5F5F5; padding: 24px;">
    <a-page-header
      :ghost="false"
      title="Fofapro/Vulfocus"
      sub-title="通过网络拓扑编排，构建大规模高真实度模拟环境"
      @back="() => $router.go(-1)"
    >
      <template>
      <a-comment>
        <a slot="author">Vulfocus</a>
        <a-avatar
          slot="avatar"
          src="/img/fofavul.ico"
          alt="Vulfocus"
        />
        <p slot="content">
          Vulfocus漏洞分析验证平台汇聚多种类型漏洞，包含系统、数据库、中间件、web应用的多种类型，可快速启动漏洞环境实例。同时通过网络拓扑编排，构建大规模高真实度模拟环境，开展以实战能力为导向的综合性实操演练活动的专业平台，以满足用户在人才培养、实战演练、评估测试、技术研究等场景应用。
        </p>
        </a-tooltip>
      </a-comment>
    </template>
      <template slot="extra">
        <a-button href="https://github.com/fofapro/vulfocus" key="1" type="primary">
          Github
        </a-button>
      </template>
      <a-descriptions size="small" :column="4">
        <a-descriptions-item label="项目创作者">
          <a>Vulfocus</a>
        </a-descriptions-item>
        <a-descriptions-item label="安全方向">
          <a>漏洞威胁分析</a>
        </a-descriptions-item>
        <a-descriptions-item label="创建时间">
          <a>2020-04-22</a>
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




<br/>

![image-20220328175634489](../../.vuepress/public/img/image-20220328175634489.png)

<br/>

![image-20220328175728660](../../.vuepress/public/img/image-20220328175728660.png)
