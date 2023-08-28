 

![PeiQi-WIKI-Book](https://socialify.git.ci/PeiQi0/PeiQi-WIKI-Book/image?description=1&font=KoHo&forks=1&issues=1&language=1&owner=1&pattern=Circuit%20Board&pulls=1&stargazers=1&theme=Light)

## 0x01 关于文库

PeiQi文库是一个面对网络安全从业者的知识库，涉及漏洞研究，代码审计，CTF夺旗，红蓝对抗等多个安全方向，用于解决安全信息不聚合，安全资料不易找的难题。帮助网络安全从业者共同构建安全的互联网，快速验证并及时修复相关漏洞，为甲方等提出安全建设意见。

![image-20220316001218391](docs/.vuepress/public/img/image-20220316001218391.png)

## 0x02 使用须知 & 关注公众号

由于传播、利用此文所提供的信息而造成的任何直接或者间接的后果及损失，均由使用者本人负责，文章作者不为此承担任何责任。文库内容中部分攻防技巧等只允许在目标授权的情况下进行使用，大部分文章来自各大安全社区，个人博客，如有侵权请立即联系公众号进行删除。若不同意以上警告信息请立即退出使用

![image-20220316000944651](docs/.vuepress/public/img/image-20220316000944651.png)

## 0x03 快速搭建

Yarn源码搭建 (个人二次扩展，需要编译环境)

```sh
git clone https://github.com/PeiQi0/PeiQi-WIKI-Book.git
cd PeiQi-WIKI-Book
yarn add vuepress-theme-antdocs -d
yarn install
yarn run dev
```

Html源码搭建 (无需编译环境，使用编译好的Html文件直接部署)

```sh
git clone https://github.com/PeiQi0/PeiQi-WIKI-Book.git (Github,国外较快)
git clone https://gitee.com/peiqi0/PeiQi-WIKI-Book.git (Gitee,国内较快)
cd PeiQi-WIKI-Book/docs/.vuepress/dist
mv * 你的服务器Web目录
```

Docker搭建 (只需要Dokcer环境，快速搭建在各个环境中，定时同步Gitee自动更新)

```sh
docker search peiqipeiqi
docker pull peiqipeiqi/peiqi_wiki:220420
docker run -t -d -p 65534:80 --name "PeiQi_Wiki" peiqipeiqi/peiqi_wiki:220420
User/Pass: peiqi:peiqi (手动更新:进入Docker执行命令，/usr/share/nginx/html/synchronous.sh)
```

![image-20220316001010091](docs/.vuepress/public/img/image-20220316001010091.png)

## 0x04 关于开源

我认为开源才是最好的交流方式，所以文库的文章，代码都是公开可以任意下载的。希望能帮助到不管是一线红队，还是刚入门的安全小白，让大家都有一个可以公开交流，查找资料的地方。在文库开放后，我几乎将所有的闲暇时间都用在了文库的搭建上。现在的文库与之前的Gitbook版本相比，无论是阅读感受还是用户交互，都得到了更大的提升，希望大家可以通过提出建设性意见或者赞助项目来给予我更多更新的动力～

![image-20220316001026684](docs/.vuepress/public/img/image-20220316001026684.png)

## 0x05 文库动态 & 建议反馈 & 友情链接

![image-20220316001110750](docs/.vuepress/public/img/image-20220316001110750.png)

![image-20220316001308942](docs/.vuepress/public/img/image-20220316001308942.png)

![image-20220316001141835](docs/.vuepress/public/img/image-20220316001141835.png)
