# MarkDown-muotokieliopin sopimukset

## Ankkuripisteet

Perinteisessä `MarkDown`-muodossa ankkuripisteet perustuvat tekstisisältöön, mutta monikielisissä tilanteissa tämä lähestymistapa ei ole käytettävissä.

`i18n.site`-sopimuksen mukainen ankkuripisteratkaisu on lisätä `MarkDown`-muotoon tekstiä, kuten `<a rel=id href="#xxx" id="xxx"></a>`, manuaalisesti luodakseen paikannusankkurin.

`<a rel=id href="#xxx" id="xxx"></a>`, tässä `rel=id` määrittää ankkuripisteen sivuston tyylin, korvaa `xxx` omalla ankkurisi englanninkielisellä lyhenteellä.

Ankkuripisteet lisätään yleensä otsikoihin, kuten:

```md
### <a rel=id href="#i18" id="i18"></a>i18 : MarkDown Command Line Translation Tool
```

Näyttöresultti on seuraava:

<img src="//p.3ti.site/1721381136.avif" width="350">

## Kirjoita `HTML` `MarkDown`-muodossa

`pug`-koodiin voidaan upottaa `HTML`.

`<pre>`-elementin sisältöä ei käännetä.

Yhdistämällä nämä kaksi seikkaa on helppo kirjoittaa `HTML` `MarkDown`-muodossa ja saavuttaa erilaisia näyttötehosteita.

Voit viitata toteutukseen osoitteessa [github.com/i18n-site/md/en/README.md](https://raw.githubusercontent.com/i18n-site/md/main/en/README.md), koodi on seuraava:

```html
<h1 style="display:flex;justify-content:space-between">i18n.site ⋅ International Solutions<img src="//p.3ti.site/logo.svg" style="user-select:none;margin-top:-1px;width:42px"></h1>
<pre class="langli" style="display:flex;flex-wrap:wrap;background:transparent;border:1px solid #eee;font-size:12px;box-shadow:0 0 3px inset #eee;padding:12px 5px 4px 12px;justify-content:space-between;"><style>pre.langli i{font-weight:300;font-family:s;margin-right:2px;margin-bottom:8px;font-style:normal;color:#666;border-bottom:1px dashed #ccc;}</style><i>English</i><i>简体中文</i><i>Deutsch</i> … …</pre>
```

Huomaa, että `<pre>`-elementissä on myös määritelty `<style>`.