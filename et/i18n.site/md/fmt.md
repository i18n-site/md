# i18n.site MarkDowni Kirjutamise Tava

## Kinnituspunkt

Traditsioonilised `MarkDown` kinnituspunktid genereeritakse teksti sisu põhjal. Mitmekeelse puhul pole see lahendus teostatav.

Ankurpunkti lahendus, mis on kokku lepitud `i18n.site` on sisestada teksti, mis sarnaneb `<a rel=id href="#xxx" id="xxx"></a>` in `MarkDown` et luua positsioneerimisankurpunkt käsitsi.

`<a rel=id href="#xxx" id="xxx"></a>` , siin `rel=id` määratleb ankurpunkti lehekülje stiili, palun asendage `xxx` oma tegeliku ankru ingliskeelse lühendiga.

Pealkirjale lisatakse tavaliselt ankrud, näiteks:

```md
### <a rel=id href="#i18" id="i18"></a>i18 : MarkDown Command Line Translation Tool
```

Ekraani efekt on järgmine:

<img src="//p.3ti.site/1721381136.avif" width="350">

## Kirjuta `HTML` in `MarkDown`

`HTML` saab manustada `pug` koodi.

`<pre>` elemendi sisu ei tõlgita.

Neid kahte punkti kombineerides saate erinevate kuvaefektide saavutamiseks hõlpsasti kirjutada `HTML` : `MarkDown` .

[i18n.site klõpsake siin Keelekoodide loend avalehel HTML on kirjutatud](//raw.githubusercontent.com/i18n-site/md/main/zh/README.md) ja kood on järgmine :

```html
<h1 style="display:flex;justify-content:space-between">i18n.site ⋅ International Solutions<img src="//p.3ti.site/logo.svg" style="user-select:none;margin-top:-1px;width:42px"></h1>
<pre class="langli" style="display:flex;flex-wrap:wrap;background:transparent;border:1px solid #eee;font-size:12px;box-shadow:0 0 3px inset #eee;padding:12px 5px 4px 12px;justify-content:space-between;"><style>pre.langli i{font-weight:300;font-family:s;margin-right:2px;margin-bottom:8px;font-style:normal;color:#666;border-bottom:1px dashed #ccc;}</style><i>English</i><i>简体中文</i><i>Deutsch</i> … …</pre>
```

Pange tähele, et `<style>` on defineeritud ka ülaltoodud `<pre>` s.