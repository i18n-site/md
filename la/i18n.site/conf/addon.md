# Obturaculum-In-

Plug-ins configurari possunt in `.i18n/conf.yml` , ut:

```yml
addon:
  - i18n.addon/toc
```

## Officialis Obturaculum-In

* `i18n.addon/toc` :
  Index generalis indicis de `json` fundatur in `TOC` , per defaltam

* `i18n.addon/mouse` :

## File Name Conventione

Plug-ins omnes `npm` fasciculi sunt.

Sarcina `i18n.addon/toc` superius respondens [https://www.npmjs.com/package/@i18n.addon/toc](https://www.npmjs.com/package/@i18n.addon/toc)

Pluginum recentissima versione utitur per defaltam et compescit pro updates hebdomadali.

Si versionem figere vis, scribere potes `i18n.addon/toc@0.1.3` .

Translatione imperium in linea `i18n.site` instituet tabellam conventionem de obturaculis in involucro ac deinde illud exequentibus.

Constat file nomina haec sunt

### htmIndex.js

`htmIndex.js` injicietur ad finem `.i18n/htm/index.js` .

Ubi `__CONF__` restituetur nomine configurationis currentis (ut `dev` vel `ol` ).

### afterTran.js

Translatio post expletam vocabitur, ac parametri ita sunt.

* `lang_li` :
* `changed` :
* `root` :

Valor dictionarii reditus est, ut

```json
{
  file:{
    //  path: txt, for example :
    // "_.json": "[]"
  }
}
```

`file` est indicem fasciculi output, `path` fasciculi semita, et `txt` tabella contentum est.

## Constructum-in Munera

Constructum in `js` runtime fundatur in secunda [boa](https://github.com/boa-dev/boa) et functionibus constructum sunt :

* `wPath(path, txt)` :
* `rTxt(path)` :
* `rBin(path)` :
* `rDir(dirpath)` : :

## Progressio Guide

Plug-in evolutione referri potest [https://github.com/i18n-site/addon](https://github.com/i18n-site/addon)