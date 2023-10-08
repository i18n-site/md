# I18N.SITE · 語言無國界 <img Src="//ok0.pw/5l" Style="float:right;width:42px;margin-Top:6px">

I18N.SITE，支持自動翻譯成 [一百多種不同的語言](https://github.com/i18n-site/node/blob/main/lang/src/index.js) 的靜態站點生成器。

<img src="http://s-cd-3653-i18n-img.oss.dogecdn.com/i18n.lang.webp" alt="" />

也許會有人想問，現在瀏覽器都自帶翻譯功能了，做網站國際化是不是多此一舉？

我想說，**只有做了全站國際化，才能支持多語種的站內全文搜索和搜索引擎優化** 。

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
```bash
export https_proxy=http://127.0.0.1:7890
```

### 變量嵌入

```
test: 测试变量<br 0>嵌入
```

### 清空緩存

```bash
```bash
rm -rf .i18n/.cache
```
