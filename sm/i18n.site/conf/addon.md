# Sulu I Totonu

E mafai ona faʻapipiʻi faʻapipiʻi i `.i18n/conf.yml` , e pei o:

```yml
addon:
  - i18n.addon/toc
```

## Fa'apipi'i Aloa'ia

* `i18n.addon/toc` :
  Fa'atupu fa'asino igoa o `json` fa'atatau i `TOC` , fa'aaga e ala i le fa'aletonu

* `i18n.addon/mouse` :

## Fonotaga Igoa Faila

Plug-ins e `npm` uma afifi.

O le afifi e fetaui ma `i18n.addon/toc` i luga o le [https://www.npmjs.com/package/@i18n.addon/toc](https://www.npmjs.com/package/@i18n.addon/toc)

O lo'o fa'aogaina e le fa'apipi'i le fa'asologa fou e ala i le fa'aletonu ma siaki mo fa'afouga i vaiaso ta'itasi.

Afai e te manaʻo e faʻaleleia le faʻasologa, e mafai ona e tusia `i18n.addon/toc@0.1.3` .

Fa'aliliuga laina fa'atonuga `i18n.site` o le a fa'apipi'i le faila fa'asalalauga o le afifi fa'apipi'i ona fa'atino lea.

O igoa faila ua malilie iai e fa'apea

### htmIndex.js

`htmIndex.js` o le a tui i le faaiuga o `.i18n/htm/index.js` .

O fea o le a suia ai `__CONF__` i le igoa o le faatulagaga o loʻo iai nei (pei o `dev` poʻo `ol` ).

### afterTran.js

O le a vala'au pe a mae'a le fa'aliliuga, ma o tapula'a e pasia i totonu e fa'apea.

* `lang_li` : Lisi gagana, o le gagana muamua o le gagana puna
* `changed` :
* `root` :

Ole tau fa'afo'i ole lomifefiloi, pei ole

```json
{
  file:{
    //  path: txt, for example :
    // "_.json": "[]"
  }
}
```

`file` o le lisi o faila faila, `path` o le ala faila, ma `txt` o le faila faila.

## Galuega Faufale

O le taimi faʻatulagaina `js` e : i luga o le atinaʻe lona lua o le [boa](https://github.com/boa-dev/boa)

* `wPath(path, txt)` : Tusi i faila
* `rTxt(path)` : Faitau faila faila
* `rBin(path)` : Faitau faila faila
* `rDir(dirpath)` : Faitau le lisi, o le tau toe faafoi o se lisi : lisi, lisi faila

## Taiala Atina'e

O le faʻapipiʻiina o faʻapipiʻi e mafai ona avea ma faʻamatalaga [https://github.com/i18n-site/addon](https://github.com/i18n-site/addon)