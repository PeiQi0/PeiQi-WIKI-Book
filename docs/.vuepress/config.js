module.exports = {
  title: 'PeiQi文库',
  theme: 'antdocs',
  description: '面向网络安全从业者的知识文库',
  // 注入到当前页面的 HTML <head> 中的标签
  head: [
    ['link', { rel: 'icon', href: '/img/home.svg' }], // 增加一个自定义的 favicon(网页标签的图标)
  ],
  markdown: {
    lineNumbers: true // 代码块显示行号
  },
  plugins: {
    '@vssue/vuepress-plugin-vssue': {
      // 设置 `platform` 而不是 `api`
      platform: 'github',

      // 其他的 Vssue 配置
      owner: 'PeiQi0',
      repo: 'Wiki-Book-Talk',
      clientId: '0df327771daf7fce68df',
      clientSecret: '8cba9a84153c8b0cf30926244624665f987f8148',
      autoCreateIssue:true,
    },
    'one-click-copy': {},
    'reading-progress':{},
  },
  themeConfig: {
    sidebarDepth: 2,
    backToTop: true,
    smoothScroll: true,
    nav: require('./config/nav'),
    sidebar: require('./config/sidebar'),
    sidebarDepth: 0,
    lastUpdated: '上次更新',
    logo: '/img/home.svg',
    repo: 'https://github.com/PeiQi0/PeiQi-WIKI-Book',
    editLinks: true,
    ads:{
      style: 3, 
      title: '赞助商', 
      btnText: '成为赞助商',
      msgTitle: '成为赞助商',
      msgText: '品牌推广、活动推广、招聘推广、社区合作等需求。欢迎通过公众号联系我们，成为赞助商～',
      msgOkText: '确定',
    },
  }
};
