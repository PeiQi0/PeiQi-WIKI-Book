---
title: awake1t/PortBrute
---

<template>
  <div style="background-color: #F5F5F5; padding: 24px;">
    <a-page-header
      :ghost="false"
      title="awake1t/PortBrute"
      sub-title="一款跨平台小巧的端口爆破工具"
      @back="() => $router.go(-1)"
    >
      <template>
      <a-comment>
        <a slot="author">awake1t</a>
        <a-avatar
          slot="avatar"
          src="/img/portbu.svg"
          alt="PortBrute"
        />
        <p slot="content">
         PortBrute是golang开发的一款跨平台小巧的端口爆破工具，支持爆破FTP/SSH/SMB/MSSQL/MYSQL/POSTGRESQL/MONGOD，工具内置常用字典，也可以根据目标导入自己生成的字典进行扫描。目前支持使用于Windows/MAC/Linux中，可以通过使用PortBrute工具快速扫描薄弱资产，在各种环境中找到突破口，帮助渗透测试人员在攻防行动中更快的搜索到存在弱口令的资产，减少信息收集和渗透测试所花费的时间。
        </p>
        </a-tooltip>
      </a-comment>
    </template>
      <template slot="extra">
        <a-button href="https://github.com/awake1t/PortBrute" key="1" type="primary">
          Github
        </a-button>
      </template>
      <a-descriptions size="small" :column="4">
        <a-descriptions-item label="项目创作者">
          <a>awake1t</a>
        </a-descriptions-item>
        <a-descriptions-item label="安全方向">
          <a>弱口令爆破</a>
        </a-descriptions-item>
        <a-descriptions-item label="创建时间">
          <a>2020-11-21</a>
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


<center class="half">
    <img src="../../.vuepress/public/img/image-20220328232150970.png" width="100%"/><img src="../../.vuepress/public/img/image-20220328231709540.png" width="100%"/>
</center>


