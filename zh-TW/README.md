<h1 style="justify-content:space-between">3Ti.Site · 思緒無疆 <img src="//i-01.eu.org/i18n/logo.svg" style="margin-top:-1px;width:42px"></h1>

3Ti.Site，多語言的靜態站點生成器，能將 Markdown 自動翻譯為 [一百多種不同的語言](https://github.com/i18n-site/node/blob/main/lang/src/index.js) 。

<img src="//i-01.eu.org/i18n/lang.webp" alt="" />

也許會有人想問，現在瀏覽器都自帶翻譯功能了，做網站國際化是不是多此一舉？

我想說，**只有做了全站國際化，才能支持多語種的站內全文搜索和搜索引擎優化** 。

## 序

《聖經·創世紀》:

> 古人語言未分，築通天高塔，達上帝之門，揚人族威名。
>
> 神曰，人自成一族，同文同種，築塔僅為序章，今欲為皆可成，將無所敬畏矣。
>
> 遂，神降臨，使眾人分散各地，言語不通。
>
> 自此，人類難以溝通，紛爭不斷，世間再無通天塔。

科幻小說《三體》（ 中文發音：`3Ti` ）虛構異星文明，通過電磁波交流，無語言壁壘，科技昌盛。

我希望創造一個工具，使地球之民如三體之人，交流不被語言所束，全人類再次聯合起來。

## 使用教程

## 功能簡介

### 保留 Markdown 格式

### 修改譯文

修改譯文後需要重新運行 `./i18n.sh` 更新緩存。

### 翻譯註釋

翻譯註釋，需要在 \``` 之後表明語言， 比如 ` ```rust` 。

目前支持 rust,c,cpp,java,js,coffee,python,bash 的註釋翻譯。

編輯 [tran_md/src/comment.coffee](https://github.com/i18n-site/node/blob/main/tran_md/src/comment.coffee) 可添加更多語言註釋的翻譯支持。

### 配置代理

設置如下的環境變量，可以讓谷歌翻譯的 API 調用走代理。

```bash
export https_proxy=http://127.0.0.1:7890
```

### 變量嵌入

```
test: 测试变量<br 0>嵌入
```

### 清空緩存

```bash
rm -rf .i18n/.cache
```
