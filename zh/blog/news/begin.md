---

brief: |
  目前，实现了两个开源的命令行工具: i18（MarkDown 命令行翻译工具）和 i18n.site（多语言静态文档站生成器）

---


# i18n.site · MarkDown 翻译、建站工具，上线了 !

经过大半年的开发，[https://i18n.site](//i18n.site) 上线了。

目前，实现了两个开源的命令行工具:

* `i18`: MarkDown 命令行翻译工具
* `i18n.site`: 多语言静态文档站生成器，**为阅读体验而优化**

翻译，能完美保持`Markdown`的格式。能识别文件修改，只译有改动的文件。

译文可编辑；修改原文，再次机器翻译时，不会覆盖译文的人工修改(如果原文此段未修改)。

[➤ 点此授权自动关注 i18n.site 的 github 开源代码库](https://github.com/login/oauth/authorize?client_id=Ov23liuGAmK0plc9FgB3&scope=user:email,user:follow,public_repo), **可获赠金 $50**。

## 源起

互联网时代，全球都是市场，多语言、本地化是基本功。

现有的翻译管理工具都太重量级了，对于依赖`git`管理版本的程序员们来说，还是喜欢命令行。

于是，我开发了翻译工具`i18`，并在翻译工具的基础上，构建了多语言静态站生成器`i18n.site`。

![](https://p.3ti.site/1723777556.avif)

这只是开始，想做的还有很多。

比如，把静态文档站和社交媒体、邮件订阅打通，当发布更新时可以及时触达用户。

比如，多语言可嵌入任意网页的论坛、工单系统，让用户可以无障碍交流。

## 开源

前端、后端、命令行的[代码都开源](https://i18n.site/i18n.site/c/src)（翻译模型暂不开源）。

用到的技术栈如下:

前端 [svelte](https://svelte.dev)、[stylus](https://stylus-lang.com)、[pug](https://github.com/pugjs/pug)、[vite](https://github.com/vitejs/vite)

命令行、后端基于 rust 开发。

后端 [axum](https://github.com/tokio-rs/axum)、[tower-http](https://github.com/tower-rs/tower-http/releases)。

命令行 [嵌入式js引擎 boa_engine](https://docs.rs/boa_engine)、[嵌入式数据库 fjall](https://github.com/fjall-rs/fjall)。

服务器VPS [contabo](https://my.contabo.com)

数据库 [kvrocks](https://kvrocks.apache.org)、[mariadb](https://mariadb.org)。

邮件发送自建SMTP [chasquid](https://github.com/albertito/chasquid)。

## 联系我们

新产品上线，问题在所难免。

欢迎通过谷歌论坛联系我们: [groups.google.com/u/2/g/i18n-site](https://groups.google.com/u/2/g/i18n-site)
