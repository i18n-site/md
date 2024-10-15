# MarkDown-formateringskonvensjoner

## Ankerpunkt

Tradisjonelle `MarkDown`-ankerpunkter genereres basert på tekstinnhold, men denne løsningen er ikke anvendbar i flerspråkssammenhenger.

`i18n.site`-konvensjonen for ankerpunkter innebærer å sette inn tekst som `<a rel=id href="#xxx" id="xxx"></a>` i `MarkDown` for å manuelt opprette posisjoneringsanker.

`<a rel=id href="#xxx" id="xxx"></a>`, hvor `rel=id` definerer ankerets sidestil. Erstatt `xxx` med din faktiske engelske ankerforklaring.

Ankere plasseres vanligvis i titler, for eksempel:

```md
### <a rel=id href="#i18" id="i18"></a>i18 : MarkDown Command Line Translation Tool
```

Visningseffekten er som følger:

<img src="//p.3ti.site/1721381136.avif" width="350">

## Skrive `HTML` i `MarkDown`

`pug`-kode kan inneholde `HTML`.

Innhold i `<pre>`-elementer blir ikke oversatt.

Ved å kombinere disse to punktene kan man enkelt skrive `HTML` i `MarkDown` for å oppnå ulike visningseffekter.

Man kan se implementeringen i [github.com/i18n-site/md/en/README.md](https://raw.githubusercontent.com/i18n-site/md/main/en/README.md), koden er som følger:

```html
<h1 style="display:flex;justify-content:space-between">i18n.site ⋅ International Solutions<img src="//p.3ti.site/logo.svg" style="user-select:none;margin-top:-1px;width:42px"></h1>
<pre class="langli" style="display:flex;flex-wrap:wrap;background:transparent;border:1px solid #eee;font-size:12px;box-shadow:0 0 3px inset #eee;padding:12px 5px 4px 12px;justify-content:space-between;"><style>pre.langli i{font-weight:300;font-family:s;margin-right:2px;margin-bottom:8px;font-style:normal;color:#666;border-bottom:1px dashed #ccc;}</style><i>English</i><i>简体中文</i><i>Deutsch</i> … …</pre>
```

Merk at det også er definert `<style>` i `<pre>` over.