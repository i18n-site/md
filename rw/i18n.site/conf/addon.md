# Gucomeka

Amacomeka arashobora gushyirwaho muri `.i18n/conf.yml` , nka:

```yml
addon:
  - i18n.addon/toc
```

## Gucomeka Kumugaragaro

* `i18n.addon/toc` Indangantego y'Ubuyobozi :
  Kora ububiko bwububiko bwa `json` bushingiye kuri `TOC` , bushobojwe nibisanzwe

* `i18n.addon/mouse` z'imbeba :

## Izina Rya Dosiye

Amacomeka yose ni paki `npm` .

Ipaki ihuye na `i18n.addon/toc` hejuru [https://www.npmjs.com/package/@i18n.addon/toc](https://www.npmjs.com/package/@i18n.addon/toc)

Gucomeka ikoresha verisiyo iheruka kubisanzwe kandi igenzura ibishya buri cyumweru.

Niba ushaka gukosora verisiyo, urashobora kwandika `i18n.addon/toc@0.1.3` .

Ubusobanuro bwumurongo wumurongo `i18n.site` uzashyiraho dosiye yamasezerano ya plug-in hanyuma hanyuma uyikorere.

Amazina ya dosiye yemeranijwe ni aya akurikira

### htmIndex.js

`htmIndex.js` bazaterwa inshinge kurangiza `.i18n/htm/index.js` .

Aho `__CONF__` izasimburwa nizina ryiboneza ryubu (nka `dev` cyangwa `ol` ).

### afterTran.js

Bizahamagarwa nyuma yubusobanuro burangiye, kandi ibipimo byanyuzemo nibi bikurikira.

* `lang_li` : Urutonde, ururimi rwambere nururimi rwinkomoko
* `changed` Yahinduwe dosiye :
* `root` Umushinga Ububiko bwumushinga :

Garuka agaciro ni inkoranyamagambo, nka

```json
{
  file:{
    //  path: txt, for example :
    // "_.json": "[]"
  }
}
```

`file` ni ibisohoka dosiye urutonde, `path` ninzira ya dosiye, naho `txt` nibiri muri dosiye.

## Ibikorwa Byubatswe

Byubatswe muri `js` runtime ishingiye kumajyambere ya kabiri ya [boa](https://github.com/boa-dev/boa) kandi ibikorwa byubatswe nibi bikurikira :

* `wPath(path, txt)` Andika dosiye :
* `rTxt(path)` : dosiye
* `rBin(path)` Soma Soma dosiye ya binary :
* `rDir(dirpath)` : Soma ububiko, agaciro kagaruka ni urutonde : , urutonde rwa dosiye

## Igitabo Cyiterambere

Amacomeka yiterambere arashobora kuba reference [https://github.com/i18n-site/addon](https://github.com/i18n-site/addon)