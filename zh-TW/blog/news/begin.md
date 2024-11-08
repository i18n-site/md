---

brief: |
  目前，實現了兩個開源的命令行工具: i18（MarkDown 命令行翻譯工具）和 i18n.site（多語言靜態文檔站生成器）

---


# i18n.site · MarkDown 翻譯、建站工具，上线了 !

經過大半年的開发，[https://i18n.site](//i18n.site) 上线了。

目前，實現了兩個開源的命令行工具:

* `i18`: MarkDown 命令行翻譯工具
* `i18n.site`: 多語言靜態文檔站生成器，**為閱讀體驗而優化**

翻譯，能完美保持`Markdown`的格式。能識别文件修改，只譯有改動的文件。

譯文可編輯；修改原文，再次機器翻譯時，不會覆蓋譯文的人工修改(如果原文此段未修改)。

[➤ 點此授權自動關注 i18n.site 的 github 開源代碼庫](https://github.com/login/oauth/authorize?client_id=Ov23liuGAmK0plc9FgB3&scope=user:email,user:follow,public_repo), **可获贈金 $50**。

## 源起

互聯網時代，全球都是市場，多語言、本地化是基本功。

現有的翻譯管理工具都太重量級了，對于依賴`git`管理版本的程序員們來說，還是喜歡命令行。

于是，我開发了翻譯工具`i18`，并在翻譯工具的基礎上，構建了多語言靜態站生成器`i18n.site`。

![](https://p.3ti.site/1723777556.avif)

這只是開始，想做的還有很多。

比如，把靜態文檔站和社交媒體、郵件訂閱打通，当发布更新時可以及時觸達用戶。

比如，多語言可嵌入任意網頁的論坛、工單系統，讓用戶可以無障礙交流。

## 開源

前端、后端、命令行的[代碼都開源](https://i18n.site/i18n.site/c/src)（翻譯模型暫不開源）。

用到的技術棧如下:

前端 [svelte](https://svelte.dev)、[stylus](https://stylus-lang.com)、[pug](https://github.com/pugjs/pug)、[vite](https://github.com/vitejs/vite)

命令行、后端基于 rust 開发。

后端 [axum](https://github.com/tokio-rs/axum)、[tower-http](https://github.com/tower-rs/tower-http/releases)。

命令行 [嵌入式js引擎 boa_engine](https://docs.rs/boa_engine)、[嵌入式數據庫 fjall](https://github.com/fjall-rs/fjall)。

服務器VPS [contabo](https://my.contabo.com)

數據庫 [kvrocks](https://kvrocks.apache.org)、[mariadb](https://mariadb.org)。

郵件发送自建SMTP [chasquid](https://github.com/albertito/chasquid)。

## 聯系我們

新產品上线，問題在所難免。

歡迎通過谷歌論坛聯系我們: [groups.google.com/u/2/g/i18n-site](https://groups.google.com/u/2/g/i18n-site)