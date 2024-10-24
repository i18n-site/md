# i18n.site MarkDown 撰寫約定

## 錨點

傳統`MarkDown`的錨點基于文本內容來生成，在多語言的情況下，此方案不可行。

`i18n.site`約定的錨點方案是，在`MarkDown`中插入類似`<a rel=id href="#xxx" id="xxx"></a>`的文本，來手動創建定位錨點。

`<a rel=id href="#xxx" id="xxx"></a>`，這里`rel=id`定義了錨點的頁面樣式，`xxx`請替換為你實際的錨點英文縮寫。

錨點通常加在標題里，如:

```md
### <a rel=id href="#i18" id="i18"></a>i18 : MarkDown Command Line Translation Tool
```

顯示效果如下:

<img src="//p.3ti.site/1721381136.avif" width="350">

## 在`MarkDown`中寫`HTML`

`pug`代碼中可以嵌入`HTML`。

`<pre>`元素中的內容不會被翻譯。

結合這兩點，可以很方便的在`MarkDown`中寫`HTML`，來實現各種顯示效果。

可以參考 [github.com/i18n-site/md/en/README.md](https://raw.githubusercontent.com/i18n-site/md/main/en/README.md) 中的實現，代碼如下:

```html
<h1 style="display:flex;justify-content:space-between">i18n.site ⋅ International Solutions<img src="//p.3ti.site/logo.svg" style="user-select:none;margin-top:-1px;width:42px"></h1>
<pre class="langli" style="display:flex;flex-wrap:wrap;background:transparent;border:1px solid #eee;font-size:12px;box-shadow:0 0 3px inset #eee;padding:12px 5px 4px 12px;justify-content:space-between;"><style>pre.langli i{font-weight:300;font-family:s;margin-right:2px;margin-bottom:8px;font-style:normal;color:#666;border-bottom:1px dashed #ccc;}</style><i>English</i><i>簡體中文</i><i>Deutsch</i> … …</pre>
```

注意，上文`<pre>`中還定義了`<style>`。


## 圖片/視頻/鏈接的多語言

`MarkDown`中轉為`HTML`之后，`src`和`href`屬性中的`$LANG`會被替換成当前[語言代碼](/i18/LANG_CODE)。

借此變量，即可實現圖片/視頻/鏈接的多語言化。