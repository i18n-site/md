# i18n.site MarkDown Taron Rubutu

## Makiyin Anga

Ana samar da maki na al'ada `MarkDown` dangane da abun ciki na rubutu A cikin yanayi na yare da yawa, wannan maganin ba zai yuwu ba.

Maganin ma'anar anga da aka yarda da `i18n.site` shine saka rubutu kama da `<a rel=id href="#xxx" id="xxx"></a>` a cikin `MarkDown` don ƙirƙirar wurin anka na da hannu.

`<a rel=id href="#xxx" id="xxx"></a>` , anan `rel=id` yana bayyana salon shafi na ma'anar anga, da fatan za a maye gurbin `xxx` tare da ainihin gajartar ku ta Turanci.

Yawancin lokaci ana ƙara anchors zuwa taken, kamar:

```md
### <a rel=id href="#i18" id="i18"></a>i18 : MarkDown Command Line Translation Tool
```

Tasirin nuni shine kamar haka:

<img src="//p.3ti.site/1721381136.avif" width="350">

## Rubuta `HTML` in `MarkDown`

Ana iya saka `HTML` a cikin `pug` code.

Ba za a fassara abun ciki a cikin abubuwa `<pre>` ba.

Hada waɗannan maki biyu, zaku iya rubuta `HTML` cikin `MarkDown` cikin sauƙi don cimma tasirin nuni iri-iri.

Kuna iya komawa ga aiwatarwa a cikin [github.com/i18n-site/md/en/README.md](https://raw.githubusercontent.com/i18n-site/md/main/en/README.md) lambar kamar haka :

```html
<h1 style="display:flex;justify-content:space-between">i18n.site ⋅ International Solutions<img src="//p.3ti.site/logo.svg" style="user-select:none;margin-top:-1px;width:42px"></h1>
<pre class="langli" style="display:flex;flex-wrap:wrap;background:transparent;border:1px solid #eee;font-size:12px;box-shadow:0 0 3px inset #eee;padding:12px 5px 4px 12px;justify-content:space-between;"><style>pre.langli i{font-weight:300;font-family:s;margin-right:2px;margin-bottom:8px;font-style:normal;color:#666;border-bottom:1px dashed #ccc;}</style><i>English</i><i>简体中文</i><i>Deutsch</i> … …</pre>
```

Lura cewa `<style>` kuma an bayyana shi a cikin `<pre>` na sama.


## Hotuna/Bidiyo/Hanyoyi a Cikin Yaruka Da Yawa

Bayan an canza `MarkDown` zuwa `HTML` , `$LANG` a cikin halayen `src` da `href` za a maye gurbinsu da [lambar yare](/i18/LANG_CODE) na yanzu.

Tare da wannan m, za ka iya cimma multilingualization na hotuna / bidiyo / links.