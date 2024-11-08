# 安装 & 预览

## 安装

```sh
bash <(curl -sS https://i.i18n.site) i18n.site
```

## 配置令牌

`i18n.site`内嵌了`i18`翻译工具，请先[点此参考`i18`的文档配置访问令牌](/i18/use)。

## 演示项目

让我们从演示项目开始，学习如何使用`i18n.site`。

我们先克隆演示仓库，运行命令如下：

```
git clone https://github.com/i18n-site/demo.i18n.site.git md
git clone https://github.com/i18n-site/demo.i18n.site.docker.git docker
```

中国大陆用户可以：

```
git clone https://atomgit.com/i18n/demo.i18n.site.git md
git clone https://atomgit.com/i18n/demo.i18n.site.docker.git docker
```

`demo.i18n.site`代码库克隆的目录名请务必为`md`，方便配合`docker`实现本地预览。

### 翻译

首先，进入`md`目录运行`i18n.site`，会翻译`en`到`zh`。

<img src="https://p.3ti.site/1721114619.avif" style="width:350px">

运行后，会生成译文和缓存文件，请记得在`md`目录下`git add . `，把它们添加到版本库。

### 本地预览

安装并启动`docker`（`MAC`用户建议用 [orbstack](https://orbstack.dev) 作为`docker`的运行时 ）。

然后，进入`docker`目录运行`./up.sh`，然后访问 [https://127.0.0.1](https://127.0.0.1) 即可在本地预览。

<img src="//p.3ti.site/1721104238.avif" style="width:360px">