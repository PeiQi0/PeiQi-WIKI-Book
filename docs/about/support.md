---
title: 支持项目
---

# 支持项目

## 关于开源

<a-alert type="success" message="我认为开源才是最好的交流方式，所以文库的文章，代码都是公开可以任意下载的。希望能帮助到不管是一线红队，还是刚入门的安全小白，让大家都有一个可以公开交流，查找资料的地方。在文库开放后，我几乎将所有的闲暇时间都用在了文库的搭建上。现在的文库与之前的Gitbook版本相比，无论是阅读感受还是用户交互，都得到了更大的提升，希望大家可以通过提出建设性意见或者赞助项目来给予我更多更新的动力～" description="" showIcon>
</a-alert>
<br/>

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

<br/>

## 赞助项目

<a-alert type="success" message="对一直支持项目的师傅表示感谢啦，就好像偶尔给忙碌更新的我买杯奶茶～" description="" showIcon>
</a-alert>
<br/>

<template>
  <div>
    <a-tabs default-active-key="1">
      <a-tab-pane key="1" tab="微信">
        <img width="200" src="../.vuepress/public/img/image-20220312215630481.png" />
      </a-tab-pane>
      <a-tab-pane key="2" tab="支付宝" force-render>
        <img width="200" src="../.vuepress/public/img/image-20220312215341083.png" />
      </a-tab-pane>
      <a-tab-pane key="3" tab="知识星球">
       <img width="300" src="../.vuepress/public/img/image-20220312215812422.png" />
      </a-tab-pane>
      <a-tab-pane key="4" tab="以太坊">
       <img width="400" src="../.vuepress/public/img/image-20220312215201874.png" />
      </a-tab-pane>
      <a-tab-pane key="5" tab="我没钱">
        <p>那就点击Star，给文库一个小星星吧✨</p>
        <img width="200" src="../.vuepress/public/img/image-20220312220155893.png" />
      </a-tab-pane>
    </a-tabs>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  },
  methods: {
    callback(key) {
      console.log(key);
    },
  },
};
</script>

<br/>
<a-alert type="success" message="总共收到的赞助～" description="" showIcon>
</a-alert>
<br/>

<template>
  <a-row :gutter="16">
    <a-col :span="12">
      <a-statistic title="RMB" :value="560" class="demo-class">
        <template #suffix>
          <a-icon type="fire" />
        </template>
      </a-statistic>
    </a-col>
  </a-row>
</template>


[![Stargazers over time](https://starchart.cc/PeiQi0/PeiQi-WIKI-Book.svg)](https://starchart.cc/PeiQi0/PeiQi-WIKI-Book)
