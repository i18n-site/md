# MarkDown-formatkonventioner

## Ankerpunkter

De traditionelle `MarkDown`-ankerpunkter genereres baseret på tekstindhold, men denne løsning er ikke anvendelig i flersprogede sammenhænge.

`i18n.site`'s aftalte ankerpunktsløsning er at indsætte tekst som `<a rel=id href="#xxx" id="xxx"></a>` i `MarkDown` for manuelt at oprette定位锚点.

`<a rel=id href="#xxx" id="xxx"></a>`, hvor `rel=id` definerer ankerpunktets sidestil. Erstat `xxx` med din faktiske engelske ankerforkortelse.

Ankerpunkter tilføjes normalt til overskrifter, såsom:

```md
### <a rel=id href="#i18" id="i18"></a>i18 : MarkDown Command Line Translation Tool
```

Visningseffekten er som følger:

<img src="//p.3ti.site/1721381136.avif" width="350">

## Skriv `HTML` i `MarkDown`

`pug`-kode kan indeholde `HTML`.

Indholdet i `<pre>`-elementer bliver ikke oversat.

Ved at kombinere disse to aspekter kan man nemt skrive `HTML` i `MarkDown` for at opnå forskellige visningseffekter.

Du kan se implementeringen i [github.com/i18n-site/md/en/README.md](https://raw.githubusercontent.com/i18n-site/md/main/en/README.md), koden er som følger:

```html
<h1 style="display:flex;justify-content:space-between">i18n.site ⋅ International Solutions<img src="//p.3ti.site/logo.svg" style="user-select:none;margin-top:-1px;width:42px"></h1>
<pre class="langli" style="display:flex;flex-wrap:wrap;background:transparent;border:1px solid #eee;font-size:12px;box-shadow:0 0 3px inset #eee;padding:12px 5px 4px 12px;justify-content:space-between;"><style>pre.langli i{font-weight:300;font-family:s;margin-right:2px;margin-bottom:8px;font-style:normal;color:#666;border-bottom:1px dashed #ccc;}</style><i>English</i><i>简体中文</i><i>Deutsch</i> … …</pre>
```

Bemærk, at der også er defineret `<style>` i `<pre>` ovenfor.