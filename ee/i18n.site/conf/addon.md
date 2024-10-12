# Plug-in Ƒe Kpeɖeŋutɔ

Woateŋu aɖo plug-ins ɖe `.i18n/conf.yml` me, abe:

```yml
addon:
  - i18n.addon/toc
```

## Plug-in Si Dziɖuɖua Ɖo

* `i18n.addon/toc` :
  Wɔ nyatakakadzraɖoƒe ƒe xexlẽdzesi si nye `json` si wotu ɖe `TOC` dzi, si wowɔe le gɔmedzedzea me

* `i18n.addon/mouse` :

## Fail Ŋkɔ Ƒe Takpekpe

Plug-ins katã nye `npm` packages.

Akpa si sɔ kple `i18n.addon/toc` si le etame enye [https://www.npmjs.com/package/@i18n.addon/toc](https://www.npmjs.com/package/@i18n.addon/toc)

Plugin la zãa eƒe tɔtrɔ yeyetɔ le gɔmedzedzea me eye wòléa ŋku ɖe yeyewo ŋu kwasiɖa sia kwasiɖa.

Ne èdi be yeaɖɔ tɔtrɔa ɖo la, àte ŋu aŋlɔ `i18n.addon/toc@0.1.3` .

Gbegɔmeɖeɖe ƒe sedede fli `i18n.site` aɖo plug-in package ƒe convention file eye emegbe wòawɔe.

Fail ŋkɔ siwo dzi wolɔ̃ ɖo lae nye esiawo

### htmIndex.js

`htmIndex.js` ado ɖe `.i18n/htm/index.js` ƒe nuwuwu.

Afisi woatsɔ ɖoɖowɔɖi si li fifia ƒe ŋkɔ aɖɔli `__CONF__` (abe `dev` alo `ol` ene ).

### afterTran.js

Woayɔe ne wowu gbegɔmeɖeɖea nu, eye parameter siwo wotsɔ yi eme la le ale.

* `lang_li` : Gbegbɔgblɔ ƒe xexlẽdzesi, gbe gbãtɔe nye gbe si woɖe tso eme
* `changed` :
* `root` : Project ƒe ke ƒe agbalẽdzraɖoƒe

Gbugbɔgadzɔ ƒe asixɔxɔ nye nyagɔmeɖegbalẽ, abe

```json
{
  file:{
    //  path: txt, for example :
    // "_.json": "[]"
  }
}
```

`file` nye faɛl ƒe xexlẽdzesi si woɖe tso eme, `path` nye faɛl ƒe mɔ, eye `txt` nye faɛl ƒe emenyawo.

## Dɔwɔwɔ Siwo Wotu Ɖe Eme

`js` ƒe duƒuƒu ƒe ɣeyiɣi si wotu : eme la nɔ te ɖe evelia ƒe ŋgɔyiyi dzi le [boa](https://github.com/boa-dev/boa)

* `wPath(path, txt)` : Ŋlɔ nu ɖe faɛl me
* `rTxt(path)` : Xlẽ nuŋɔŋlɔ ƒe faɛl
* `rBin(path)` : Xlẽ binary faɛl
* `rDir(dirpath)` : Xlẽ agbalẽdzraɖoƒea, tɔtrɔgbɔ ƒe asixɔxɔ nye array : list, file list

## Ŋgɔyiyi Ƒe Mɔfiame

Plug-in ƒe ŋgɔyiyi ate ŋu anye nufiame [https://github.com/i18n-site/addon](https://github.com/i18n-site/addon)