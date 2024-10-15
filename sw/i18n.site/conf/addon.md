# Programu-Jalizi

Programu-jalizi zinaweza kusanidiwa katika `.i18n/conf.yml` , kama vile:

```yml
addon:
  - i18n.addon/toc
```

## Programu-Jalizi Rasmi

* `i18n.addon/toc` :
  Tengeneza faharasa ya saraka ya `json` kulingana na `TOC` , iliyowezeshwa na chaguo-msingi

* `i18n.addon/mouse` : Madhara ya panya

## Mkusanyiko Wa Jina La Faili

Programu-jalizi zote ni vifurushi `npm` .

Kifurushi kinacholingana na `i18n.addon/toc` hapo juu ni [https://www.npmjs.com/package/@i18n.addon/toc](https://www.npmjs.com/package/@i18n.addon/toc)

Programu-jalizi hutumia toleo jipya zaidi kwa chaguo-msingi na hukagua masasisho kila wiki.

Ikiwa unataka kurekebisha toleo, unaweza kuandika `i18n.addon/toc@0.1.3` .

Mstari wa amri ya tafsiri `i18n.site` itasakinisha faili ya kusanyiko ya kifurushi cha programu-jalizi na kisha kuitekeleza.

Majina ya faili yaliyokubaliwa ni kama ifuatavyo

### htmIndex.js

`htmIndex.js` itadungwa hadi mwisho wa `.i18n/htm/index.js` .

Ambapo `__CONF__` itabadilishwa na jina la usanidi wa sasa (kama vile `dev` au `ol` ).

### afterTran.js

Itaitwa baada ya tafsiri kukamilika, na vigezo vilivyopitishwa ni kama ifuatavyo.

* `lang_li` : Orodha ya lugha, lugha ya kwanza ni lugha chanzi
* `changed` : zilizobadilishwa
* `root` : Saraka ya mizizi ya mradi

Thamani ya kurudi ni kamusi, kama vile

```json
{
  file:{
    //  path: txt, for example :
    // "_.json": "[]"
  }
}
```

`file` ndio orodha ya faili za pato, `path` ndio njia ya faili, na `txt` ndio yaliyomo kwenye faili.

## Kazi Zilizojengwa Ndani

Muda wa kukimbia `js` unatokana na ukuzaji wa pili wa [boa](https://github.com/boa-dev/boa) na vitendaji vilivyojumuishwa ni kama ifuatavyo :

* `wPath(path, txt)` :
* `rTxt(path)` : faili ya maandishi
* `rBin(path)` : faili ya binary
* `rDir(dirpath)` : Soma saraka, thamani ya kurudi ni safu : orodha, orodha ya faili

## Mwongozo Wa Maendeleo

Ukuzaji wa programu-jalizi inaweza kuwa rejeleo [https://github.com/i18n-site/addon](https://github.com/i18n-site/addon)