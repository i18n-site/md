<h1 style="justify-content:space-between">3Ti.Site · 思绪无疆 <img src="//i-01.eu.org/i18n/logo.svg" style="width:42px;margin-top:-1px"></h1>

3Ti.Site，多语言的静态站点生成器，能将 Markdown 自动翻译为 [一百多种不同的语言](https://github.com/i18n-site/node/blob/main/lang/src/index.js) 。

![](//i-01.eu.org/i18n/lang.webp)

也许会有人想问，现在浏览器都自带翻译功能了，做网站国际化是不是多此一举？

我想说，**只有做了全站国际化，才能支持多语种的站内全文搜索和搜索引擎优化** 。

## 序

《圣经·创世纪》:

> 古人语言未分，天生骄傲，欲筑高塔，塔顶通天。
>
> 神不悦人之傲慢，遂使众生分散各地，言语不通。
>
> 自此，人类难以沟通，纷争不断，世间再无通天塔。

科幻小说《三体》（ 中文发音：`3Ti` ）虚构异星文明，通过电磁波交流，无语言壁垒，科技昌盛。

我希望借助此工具，使地球之民如三体之人，交流不被语言所束，全人类再次联合起来。

## 使用教程

## 功能简介

### 保留 Markdown 格式

### 修改译文

修改译文后需要重新运行 `./i18n.sh` 更新缓存。

### 翻译注释

翻译注释，需要在 \``` 之后表明语言， 比如 ` ```rust ` 。

目前支持 rust,c,cpp,java,js,coffee,python,bash 的注释翻译。

编辑 [tran_md/src/comment.coffee](https://github.com/i18n-site/node/blob/main/tran_md/src/comment.coffee) 可添加更多语言注释的翻译支持。

### 配置代理

设置如下的环境变量，可以让谷歌翻译的 API 调用走代理。

```bash
export https_proxy=http://127.0.0.1:7890
```

### 变量嵌入

```
test: 测试变量<br 0>嵌入
```

### 清空缓存

```bash
rm -rf .i18n/.cache
```
