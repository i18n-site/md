# Ategyn

Gellir ffurfweddu ategion yn `.i18n/conf.yml` , megis:

```yml
addon:
  - i18n.addon/toc
```

## Ategyn Swyddogol

* `i18n.addon/toc` : mynegai cyfeiriadol
  Cynhyrchu mynegai cyfeiriadur o `json` yn seiliedig ar `TOC` , wedi'i alluogi yn ddiofyn

* `i18n.addon/mouse` : effeithiau llygoden

## Confensiwn Enw Ffeil

Mae ategion i gyd yn `npm` pecyn.

Y pecyn sy'n cyfateb i `i18n.addon/toc` uchod yw [https://www.npmjs.com/package/@i18n.addon/toc](https://www.npmjs.com/package/@i18n.addon/toc)

Mae'r ategyn yn defnyddio'r fersiwn ddiweddaraf yn ddiofyn ac yn gwirio am ddiweddariadau bob wythnos.

Os ydych chi am drwsio'r fersiwn, gallwch chi ysgrifennu `i18n.addon/toc@0.1.3` .

Bydd llinell orchymyn cyfieithu `i18n.site` yn gosod ffeil confensiwn y pecyn plug-in ac yna'n ei weithredu.

Mae'r enwau ffeiliau y cytunwyd arnynt fel a ganlyn

### htmIndex.js

Bydd `htmIndex.js` yn cael ei chwistrellu hyd at ddiwedd `.i18n/htm/index.js` .

Lle bydd `__CONF__` yn cael ei ddisodli gan enw'r ffurfwedd gyfredol (fel `dev` neu `ol` ).

### afterTran.js

Fe'i gelwir ar ôl i'r cyfieithiad gael ei gwblhau, ac mae'r paramedrau a basiwyd i mewn fel a ganlyn.

* `lang_li` : Rhestr iaith, yr iaith gyntaf yw'r iaith ffynhonnell
* `changed` : Ffeiliau wedi'u haddasu
* `root` : Cyfeiriadur gwraidd y prosiect

Mae'r gwerth dychwelyd yn eiriadur, fel

```json
{
  file:{
    //  path: txt, for example :
    // "_.json": "[]"
  }
}
```

`file` yw'r rhestr ffeiliau allbwn, `path` yw'r llwybr ffeil, a `txt` yw cynnwys y ffeil.

## Swyddogaethau Adeiledig

Mae'r amser rhedeg `js` adeiledig yn seiliedig ar ddatblygiad eilaidd [boa](https://github.com/boa-dev/boa) ac mae'r swyddogaethau adeiledig fel a ganlyn :

* `wPath(path, txt)` : Ysgrifennwch i ffeil
* `rTxt(path)` : Darllen ffeil testun
* `rBin(path)` : Darllenwch y ffeil ddeuaidd
* `rDir(dirpath)` : Darllenwch y cyfeiriadur, y gwerth dychwelyd yw rhestr : arae, rhestr ffeiliau

## Canllaw Datblygu

Gall datblygiad plug-in fod yn gyfeiriad [https://github.com/i18n-site/addon](https://github.com/i18n-site/addon)