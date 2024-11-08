# i18n.site MarkDown Գրավոր Կոնվենցիա

## Խարիսխի Կետ

Ավանդական `MarkDown` խարիսխ կետերը ստեղծվում են տեքստի բովանդակության հիման վրա, բազմալեզու դեպքում այս լուծումն իրագործելի չէ:

`i18n.site` հետ համաձայնեցված խարիսխի կետի լուծումը `<a rel=id href="#xxx" id="xxx"></a>` ը `MarkDown` -ում նման տեքստի տեղադրումն է՝ ձեռքով ստեղծելու դիրքավորման խարիսխի կետը:

`<a rel=id href="#xxx" id="xxx"></a>` , այստեղ `rel=id` սահմանում է խարիսխի կետի էջի ոճը, խնդրում ենք փոխարինել `xxx` ձեր իրական խարիսխ անգլերեն հապավումով:

Վերնագրին սովորաբար ավելացվում են խարիսխներ, ինչպիսիք են.

```md
### <a rel=id href="#i18" id="i18"></a>i18 : MarkDown Command Line Translation Tool
```

Ցուցադրման էֆեկտը հետևյալն է.

<img src="//p.3ti.site/1721381136.avif" width="350">

## Գրել `HTML` `MarkDown` -Ում

`HTML` կարող է ներառվել `pug` կոդի մեջ:

`<pre>` տարրի բովանդակությունը չի թարգմանվի:

Համատեղելով այս երկու կետերը՝ դուք հեշտությամբ կարող եք գրել `HTML` `MarkDown` -ում՝ տարբեր ցուցադրական էֆեկտների հասնելու համար:

[Կտտացրեք այստեղ i18n.site ստանալու համար Գլխավոր էջի HTML կոդերի ցանկը գրված է](//raw.githubusercontent.com/i18n-site/md/main/zh/README.md) , իսկ կոդը հետևյալն է :

```html
<h1 style="display:flex;justify-content:space-between">i18n.site ⋅ International Solutions<img src="//p.3ti.site/logo.svg" style="user-select:none;margin-top:-1px;width:42px"></h1>
<pre class="langli" style="display:flex;flex-wrap:wrap;background:transparent;border:1px solid #eee;font-size:12px;box-shadow:0 0 3px inset #eee;padding:12px 5px 4px 12px;justify-content:space-between;"><style>pre.langli i{font-weight:300;font-family:s;margin-right:2px;margin-bottom:8px;font-style:normal;color:#666;border-bottom:1px dashed #ccc;}</style><i>English</i><i>简体中文</i><i>Deutsch</i> … …</pre>
```

Նկատի ունեցեք, որ `<style>` նույնպես սահմանված է վերը նշված `<pre>` -ում: