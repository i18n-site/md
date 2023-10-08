# I18N.SITE · 文件無國界<img Src="//ok0.pw/5l" Style="float:right;width:42px;margin-Top:6px">

I18N.SITE，支援自動翻譯成[133 種不同的語言](https://github.com/i18n-site/node/blob/main/lang/src/index.js)的靜態站點產生器。

<img src="https://i-01.eu.org/2023/09/O0Tee_m.webp" alt="" />

也許有人想問，現在瀏覽器都自備翻譯功能了，做網站國際化是不是多此一舉？

我想說，**只有做了全站國際化，才能支援多語種的站內全文搜尋和搜尋引擎優化**。

## 使用教程

## 功能簡介

### 保留Markdown 格式

### 修改譯文

修改譯文後需要重新運行`./i18n.sh`更新快取。

### 翻譯註釋

翻譯註釋，需要在\``` 之後表明語言， 例如` ```rust` 。

目前支援rust,c,cpp,java,js,coffee,python,bash 的註解翻譯。

編輯[tran_md/src/comment.coffee](https://github.com/i18n-site/node/blob/main/tran_md/src/comment.coffee)可新增更多語言註釋的翻譯支援。

### 配置代理

設定如下的環境變量，可以讓Google翻譯的API 呼叫走代理。

```bash
```bash
export https_proxy=http://127.0.0.1:7890
```

### 變數嵌入

```
test: 测试变量<br 0>嵌入
```

### 清空快取

```bash
```bash
rm -rf .i18n/.cache
```
