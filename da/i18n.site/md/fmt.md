# i18n.site MarkDown Skrivekonvention

## Ankerpunkt

Traditionelle `MarkDown` ankerpunkter genereres baseret på tekstindhold. I tilfælde af flersproget er denne løsning ikke mulig.

Ankerpunktsløsningen aftalt med `i18n.site` er at indsætte tekst svarende til `<a rel=id href="#xxx" id="xxx"></a>` i `MarkDown` for manuelt at oprette positioneringsankerpunktet.

`<a rel=id href="#xxx" id="xxx"></a>` , her definerer `rel=id` sidestilen for ankerpunktet. Erstat venligst `xxx` med din faktiske engelske ankerforkortelse.

Ankre føjes normalt til titlen, såsom:

```md
### <a rel=id href="#i18" id="i18"></a>i18 : MarkDown Command Line Translation Tool
```

Displayeffekten er som følger:

<img src="//p.3ti.site/1721381136.avif" width="350">

## Skriv `HTML` Ud Af `MarkDown`

`HTML` kan indlejres i `pug` kode.

Indhold i `<pre>` elementer vil ikke blive oversat.

Ved at kombinere disse to punkter kan du nemt skrive `HTML` i `MarkDown` for at opnå forskellige visningseffekter.

[Klik her for i18n.site Sprogkodelisten på hjemmesiden HTML er skrevet](//raw.githubusercontent.com/i18n-site/md/main/zh/README.md) , og koden er som følger :

```html
<h1 style="display:flex;justify-content:space-between">i18n.site ⋅ International Solutions<img src="//p.3ti.site/logo.svg" style="user-select:none;margin-top:-1px;width:42px"></h1>
<pre class="langli" style="display:flex;flex-wrap:wrap;background:transparent;border:1px solid #eee;font-size:12px;box-shadow:0 0 3px inset #eee;padding:12px 5px 4px 12px;justify-content:space-between;"><style>pre.langli i{font-weight:300;font-family:s;margin-right:2px;margin-bottom:8px;font-style:normal;color:#666;border-bottom:1px dashed #ccc;}</style><i>English</i><i>简体中文</i><i>Deutsch</i> … …</pre>
```

Bemærk, at `<style>` også er defineret i `<pre>` ovenfor.