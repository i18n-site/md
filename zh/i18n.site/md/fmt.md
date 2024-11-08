# i18n.site MarkDown 撰写约定

## 锚点

传统`MarkDown`的锚点基于文本内容来生成，在多语言的情况下，此方案不可行。

`i18n.site`约定的锚点方案是，在`MarkDown`中插入类似`<a rel=id href="#xxx" id="xxx"></a>`的文本，来手动创建定位锚点。

`<a rel=id href="#xxx" id="xxx"></a>`，这里`rel=id`定义了锚点的页面样式，`xxx`请替换为你实际的锚点英文缩写。

锚点通常加在标题里，如:

```md
### <a rel=id href="#i18" id="i18"></a>i18 : MarkDown Command Line Translation Tool
```

显示效果如下:

<img src="//p.3ti.site/1721381136.avif" width="350">

## 在`MarkDown`中写`HTML`

`pug`代码中可以嵌入`HTML`。

`<pre>`元素中的内容不会被翻译。

结合这两点，可以很方便的在`MarkDown`中写`HTML`，来实现各种显示效果。

[点此参考 i18n.site 首页的语言代码列表 HTML 编写](//raw.githubusercontent.com/i18n-site/md/main/zh/README.md)，代码如下:

```html
<h1 style="display:flex;justify-content:space-between">i18n.site ⋅ International Solutions<img src="//p.3ti.site/logo.svg" style="user-select:none;margin-top:-1px;width:42px"></h1>
<pre class="langli" style="display:flex;flex-wrap:wrap;background:transparent;border:1px solid #eee;font-size:12px;box-shadow:0 0 3px inset #eee;padding:12px 5px 4px 12px;justify-content:space-between;"><style>pre.langli i{font-weight:300;font-family:s;margin-right:2px;margin-bottom:8px;font-style:normal;color:#666;border-bottom:1px dashed #ccc;}</style><i>English</i><i>简体中文</i><i>Deutsch</i> … …</pre>
```

注意，上文`<pre>`中还定义了`<style>`。