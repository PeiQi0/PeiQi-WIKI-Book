---
title: 个人扩展
---

# 个人扩展

## 文库主题

文库采用的是 `VuePressz主题：AntDocs`，在此感谢作者优秀的开源项目🌟

![image-20220312115845201](../.vuepress/public/img/image-20220312115845201.png)

## 本地搭建

<a-alert type="success" message="文库支持多种快捷的方式在本地搭建随时查阅文库，项目图片均为本地化，推荐Docker或内网搭建，不推荐公网服务器部署" description="" showIcon>
</a-alert>
<br/>

<a-checkbox checked>Yarn源码搭建 (个人二次扩展，需要编译环境)</a-checkbox></br>

```shell
git clone https://github.com/PeiQi0/PeiQi-WIKI-Book.git
cd PeiQi-WIKI-Book
yarn add vuepress-theme-antdocs -d
yarn install
yarn run dev
```

<a-checkbox checked>Html源码搭建 (无需编译环境，使用编译好的Html文件直接部署)</a-checkbox></br>

```shell
git clone https://github.com/PeiQi0/PeiQi-WIKI-Book.git
cd PeiQi-WIKI-Book/docs/.vuepress/dist
mv * 你的服务器Web目录
```

<a-checkbox checked>Docker搭建 (只需要Dokcer环境，快速搭建在各个环境中)</a-checkbox></br>

```shell
docker search peiqipeiqi
docker pull peiqipeiqi/peiqi_wiki:220320
docker run -t -d -p 65534:80 --name "PeiQi_Wiki" peiqipeiqi/peiqi_wiki:220320
User/Pass: peiqi:peiqi
```

<a-alert type="success" message="如果想要内部更新交流，需要打开插件添加评论插件密钥，生成方法见插件文档" description="" showIcon>
</a-alert>
<br/>

![image-20220312125219622](../.vuepress/public/img/image-20220312125219622.png)

## 扩展使用

本地使用并更新个人知识库之前需要了解` VuePress基本语法`，以及` Ant Design of Vue 组件`的使用

<div class="pic-plus" align="left">
  <img width="150" src="https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg" />
  <span>+</span>
  <img width="160" src="https://qn.antdv.com/vue.png" />
</div>



<br/>

<a-alert type="success" message="文库目录大致分为下列图示，其中文章存放目录为 wiki(漏洞相关), ctf (CTF模块), redteam(红蓝对抗)，其他文件为介绍文档" description="" showIcon>
</a-alert>
<br/>

![image-20220312120618163](../.vuepress/public/img/image-20220312120618163.png)

<br/>

<a-alert type="success" message="颜色主题延续了之前Gitbook蓝色主题风格，你可以通过修改文件配置来配置自己喜欢的主题" description="" showIcon>
</a-alert>
<br/>

![image-20220312121213398](../.vuepress/public/img/image-20220312121213398.png)

<br/>

<a-alert type="success" message="文章添加请遵循 VuePress 的规范，在 sidebar_contents.js 文件中添加文件名，docs/.vuepress/config 目录下的文件中添加目录或侧边栏" description="" showIcon>
</a-alert>
<br/>

![image-20220312121239000](../.vuepress/public/img/image-20220312121239000.png)