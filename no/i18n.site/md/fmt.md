# i18n.site MarkDown Skrivekonvensjon

## Ankerpunkt

Tradisjonelle `MarkDown` ankerpunkter genereres basert på tekstinnhold. Ved flerspråklig er denne løsningen ikke mulig.

Ankerpunktsløsningen som er enig med `i18n.site` er å sette inn tekst som ligner `<a rel=id href="#xxx" id="xxx"></a>` i `MarkDown` for å manuelt lage posisjoneringsankerpunktet.

`<a rel=id href="#xxx" id="xxx"></a>` , her definerer `rel=id` sidestilen til ankerpunktet. Erstatt `xxx` med den faktiske engelske forkortelsen for anker.

Ankere legges vanligvis til tittelen, for eksempel:

```md
### <a rel=id href="#i18" id="i18"></a>i18 : MarkDown Command Line Translation Tool
```

Visningseffekten er som følger:

<img src="//p.3ti.site/1721381136.avif" width="350">

## Skriv `HTML` Av `MarkDown`

`HTML` kan bygges inn i `pug` -kode.

Innhold i `<pre>` elementer vil ikke bli oversatt.

Ved å kombinere disse to punktene kan du enkelt skrive `HTML` av `MarkDown` for å oppnå ulike visningseffekter.

[Klikk her for i18n.site Språkkodelisten på hjemmesiden HTML er skrevet](//raw.githubusercontent.com/i18n-site/md/main/zh/README.md) , og koden er som følger :

```html
<h1 style="display:flex;justify-content:space-between">i18n.site ⋅ International Solutions<img src="//p.3ti.site/logo.svg" style="user-select:none;margin-top:-1px;width:42px"></h1>
<pre class="langli" style="display:flex;flex-wrap:wrap;background:transparent;border:1px solid #eee;font-size:12px;box-shadow:0 0 3px inset #eee;padding:12px 5px 4px 12px;justify-content:space-between;"><style>pre.langli i{font-weight:300;font-family:s;margin-right:2px;margin-bottom:8px;font-style:normal;color:#666;border-bottom:1px dashed #ccc;}</style><i>English</i><i>简体中文</i><i>Deutsch</i> … …</pre>
```

Merk at `<style>` også er definert i `<pre>` ovenfor.