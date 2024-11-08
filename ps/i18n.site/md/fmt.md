# i18n.site د مارک ډاون لیکلو کنوانسیون

## د لنگر نقطه

دودیز `MarkDown` اینکر ټکي د متن مینځپانګې پراساس رامینځته کیږي ، د څو ژبو په حالت کې ، دا حل ممکن ندي.

د اینکر پوائنټ حل چې `i18n.site` سره موافقه شوی `<a rel=id href="#xxx" id="xxx"></a>` په `MarkDown` کې ورته متن دننه کول دي ترڅو په لاسي ډول د موقعیت لنگر نقطه رامینځته کړي.

`<a rel=id href="#xxx" id="xxx"></a>` ، دلته `rel=id` د لنگر نقطې د پاڼې سټایل تعریفوي، مهرباني وکړئ `xxx` د خپل اصلي لنگر انګلیسي لنډیز سره بدل کړئ.

اینکرونه معمولا په سرلیک کې اضافه کیږي، لکه:

```md
### <a rel=id href="#i18" id="i18"></a>i18 : MarkDown Command Line Translation Tool
```

د ښودلو اغیز په لاندې ډول دی:

<img src="//p.3ti.site/1721381136.avif" width="350">

## په `MarkDown` کې `HTML` ولیکئ

`HTML` په `pug` کوډ کې ځای پرځای کیدی شي.

په `<pre>` عناصرو کې مینځپانګه به ژباړل نشي.

د دې دوه ټکو ترکیب کول ، تاسو کولی شئ په اسانۍ سره په `MarkDown` کې `HTML` ولیکئ ترڅو د مختلف ښودنې اغیزې ترلاسه کړئ.

[د HTML لپاره دلته کلیک i18n.site](//raw.githubusercontent.com/i18n-site/md/main/zh/README.md) :

```html
<h1 style="display:flex;justify-content:space-between">i18n.site ⋅ International Solutions<img src="//p.3ti.site/logo.svg" style="user-select:none;margin-top:-1px;width:42px"></h1>
<pre class="langli" style="display:flex;flex-wrap:wrap;background:transparent;border:1px solid #eee;font-size:12px;box-shadow:0 0 3px inset #eee;padding:12px 5px 4px 12px;justify-content:space-between;"><style>pre.langli i{font-weight:300;font-family:s;margin-right:2px;margin-bottom:8px;font-style:normal;color:#666;border-bottom:1px dashed #ccc;}</style><i>English</i><i>简体中文</i><i>Deutsch</i> … …</pre>
```

په یاد ولرئ چې `<style>` په پورته `<pre>` کې هم تعریف شوی.