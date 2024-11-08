# i18n.site MarkDownin Kirjoituskäytäntö

## Ankkuripiste

Perinteiset `MarkDown` ankkuripisteet luodaan tekstisisällön perusteella. Monikielisessä tapauksessa tämä ratkaisu ei ole mahdollinen.

`i18n.site` kanssa sovittu ankkuripisteratkaisu on lisätä tekstiä, joka on samanlainen kuin `<a rel=id href="#xxx" id="xxx"></a>` in `MarkDown` , jotta paikannusankkuripiste luodaan manuaalisesti.

`<a rel=id href="#xxx" id="xxx"></a>` , tässä `rel=id` määrittää ankkuripisteen sivutyylin, korvaa `xxx` todellisella ankkurien englanninkielisellä lyhenteelläsi.

Otsikkoon lisätään yleensä ankkureita, kuten:

```md
### <a rel=id href="#i18" id="i18"></a>i18 : MarkDown Command Line Translation Tool
```

Näytön vaikutus on seuraava:

<img src="//p.3ti.site/1721381136.avif" width="350">

## Kirjoita `HTML` in `MarkDown`

`HTML` voidaan upottaa `pug` koodiin.

`<pre>` elementin sisältöä ei käännetä.

Yhdistämällä nämä kaksi pistettä voit helposti kirjoittaa `HTML` : `MarkDown` saadaksesi erilaisia näyttötehosteita.

[Napsauta tästä saadaksesi tietoa Kielikoodiluettelosta kotisivulla HTML on i18n.site](//raw.githubusercontent.com/i18n-site/md/main/zh/README.md) ja koodi on seuraava :

```html
<h1 style="display:flex;justify-content:space-between">i18n.site ⋅ International Solutions<img src="//p.3ti.site/logo.svg" style="user-select:none;margin-top:-1px;width:42px"></h1>
<pre class="langli" style="display:flex;flex-wrap:wrap;background:transparent;border:1px solid #eee;font-size:12px;box-shadow:0 0 3px inset #eee;padding:12px 5px 4px 12px;justify-content:space-between;"><style>pre.langli i{font-weight:300;font-family:s;margin-right:2px;margin-bottom:8px;font-style:normal;color:#666;border-bottom:1px dashed #ccc;}</style><i>English</i><i>简体中文</i><i>Deutsch</i> … …</pre>
```

Huomaa, että `<style>` on myös määritelty yllä kohdassa `<pre>` .