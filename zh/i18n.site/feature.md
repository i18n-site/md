# 产品特色

## 集成了`i18`翻译

程序内置了`i18`翻译，具体用法见[➔`i18`文档](/i18)。

## 自动匹配浏览器语言

网站默认语言将自动匹配浏览器的语言。

用户手动切换语言后，将记住用户的选择。

相关代码: [github.com/i18n-site/18x/src/lang.coffee](https://github.com/i18n-site/18x/blob/main/src/lang.coffee)。

## 移动端适配

在手机端同样有完美的阅读体验。

<img src="//p.3ti.site/1721379497.avif" width="350px">

## <a rel=id href="#ha" id="ha"></a> 前端高可用

`i18n.site`默认会发布站点内容到`npmjs.com`，借助 [jsdelivr.com](//jsdelivr.com) 、[unpkg.com](//unpkg.com) 等多个`CDN`加载在`npm`上的内容。

在此基础上，添加了中国大陆的镜像源，让中国用户也能稳定访问，实现了**前端高可用**。

原理是：借助 [`service worker`](https://developer.mozilla.org/docs/Web/API/Service_Worker_API) 拦截请求，请求失败在其他`CDN`上重试，并自适应地启用响应最快的源站作为默认加载源。

相关代码: [github.com/18x/serviceWorker](https://github.com/i18n-site/18x/tree/main/serviceWorker)。

## 单页应用，极速加载

网站采用了单页应用的架构，切换页面时无刷新，极速加载。

## 为阅读体验而优化

### 精心设计的样式

> 简约之美，在本站网页设计中得到了完美的诠释。
> 它摒弃了多余的装饰，以最纯粹的形式呈现内容。
> 就像一首优美的诗，虽短小，却触动人心。

<p style="text-align:right">── I18N.SITE 作者</p>

[➔ 点此查看样式一览](/i18n.site/md/styl)。

### 多语言`RSS`订阅

![](//p.3ti.site/1725541085.avif)

上图为使用 [inoreader.com](//inoreader.com) 订阅`i18n.site`的多语言`RSS`。

### 加载在线字体，支持中文

网页默认启用了 [阿里妈妈双轴可变方圆体](https://www.iconfont.cn/fonts/detail?cnid=pOvFIr086ADR)，[MiSans](https://hyperos.mi.com/font/zh/download/) 等在线字体，统一不同平台用户的阅读体验。

同时，为了提高加载速度，按字频统计对字体进行了切片。

相关代码: [github.com/i18n-site/font](https://github.com/i18n-site/font)。

### 顶部导航自动隐藏

向下滚动，顶部导航会自动隐藏。

向上滚动，隐藏的导航会再次显示。

当鼠标不移动时，会淡出。

导航栏右上角更有全屏按钮，打造沉浸式的文档阅读体验。

### 大纲同步高亮当前章节

当年滚动右侧内容时，左侧大纲会同步地高亮当前阅读章节。

## 酷炫细节

### 鼠标特效

把鼠标悬浮到顶部导航右侧的按钮上，可以看到酷炫特效。

### `404`的小幽灵

`404`页面有一只可爱悬浮小幽灵，眼睛会随着鼠标移动，[➔ 点此查看](/404)，

## 代码开源

[代码开源](/i18n.site/c/src)，如有兴趣参与开发，欢迎在 [邮件列表](//groups.google.com/u/2/g/i18n-site) 自我介绍。

有不少重要不紧急的小需求，开发团队将根据您所擅长的技术来分派练手任务，并分派需求的同时完善开发文档。
