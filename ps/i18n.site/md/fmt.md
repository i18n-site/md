# د مارک ډاون فارمیټ کنوانسیون

## د لنگر نقطه

`MarkDown` لنگرونه د متن منځپانګې پر بنسټ جوړ شوي، دا حل ممکن نه دی.

موافقه شوې اینکر حل دا دی `i18n.site` په لاسي ډول د موقعیت لنگر رامینځته کولو لپاره `<a rel=id href="#xxx" id="xxx"></a>` in `MarkDown` ته ورته متن داخل کړئ.

`<a rel=id href="#xxx" id="xxx"></a>` دلته `rel=id` د لنگر ټکي د پاڼې سټایل تعریفوي، مهرباني وکړئ `xxx` د خپل اصلي لنگر انګلیسي لنډیز سره بدل کړئ.

اینکرونه معمولا په سرلیک کې اضافه کیږي، لکه:

```md
### <a rel=id href="#i18" id="i18"></a>i18 : MarkDown Command Line Translation Tool
```

د ښودلو اغیز په لاندې ډول دی:

<img src="//p.3ti.site/1721381136.avif" width="350">

## `HTML` `MarkDown`

`pug` په کوډ کې `HTML` پرځای کیدی شي.

`<pre>` عنصر دننه مواد به ژباړل نشي.

د دې دوه ټکو سره یوځای کول ، تاسو کولی شئ په اسانۍ `MarkDown` د مختلف ښودنې اغیزو ترلاسه کولو لپاره `HTML` .

تاسو کولی شئ په کې پلي کولو ته مراجعه وکړئ [github.com/i18n-site/md/en/README.md](https://raw.githubusercontent.com/i18n-site/md/main/en/README.md) کوډ په لاندې ډول دی :

```html
<h1 style="display:flex;justify-content:space-between">i18n.site ⋅ International Solutions<img src="//p.3ti.site/logo.svg" style="user-select:none;margin-top:-1px;width:42px"></h1>
<pre class="langli" style="display:flex;flex-wrap:wrap;background:transparent;border:1px solid #eee;font-size:12px;box-shadow:0 0 3px inset #eee;padding:12px 5px 4px 12px;justify-content:space-between;"><style>pre.langli i{font-weight:300;font-family:s;margin-right:2px;margin-bottom:8px;font-style:normal;color:#666;border-bottom:1px dashed #ccc;}</style><i>English</i><i>简体中文</i><i>Deutsch</i> … …</pre>
```

په یاد ولرئ چې `<style>` `<pre>` پورته کې هم تعریف شوی.
