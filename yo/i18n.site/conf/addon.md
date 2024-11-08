# Plug-In

Plug-ins le jẹ tunto ni `.i18n/conf.yml` , gẹgẹbi:

```yml
addon:
  - i18n.addon/toc
```

## Plug-in Osise

* `i18n.addon/toc` :
  Ṣe ina atọka liana ti `json` da lori `TOC` , ṣiṣẹ nipasẹ aiyipada

* `i18n.addon/mouse` :

## Apejọ Orukọ Faili

Plug-ins jẹ gbogbo awọn idii `npm` .

Package ti o baamu `i18n.addon/toc` loke ni [https://www.npmjs.com/package/@i18n.addon/toc](https://www.npmjs.com/package/@i18n.addon/toc)

Ohun itanna naa nlo ẹya tuntun nipasẹ aiyipada ati ṣayẹwo fun awọn imudojuiwọn ni ọsẹ kọọkan.

Ti o ba fẹ ṣatunṣe ẹya naa, o le kọ `i18n.addon/toc@0.1.3` .

Laini pipaṣẹ itumọ `i18n.site` yoo fi faili apejọ ti package plug-in sori ẹrọ ati lẹhinna ṣiṣẹ.

Awọn orukọ faili ti o gba ni atẹle

### htmIndex.js

`htmIndex.js` yoo wa ni itasi si opin `.i18n/htm/index.js` .

Nibo `__CONF__` yoo rọpo pẹlu orukọ ti iṣeto lọwọlọwọ (bii `dev` tabi `ol` ).

### afterTran.js

Yoo pe ni lẹhin ti itumọ ti pari, ati awọn paramita ti o kọja ni atẹle yii.

* `lang_li` : Akojọ ede, ede akọkọ ni ede orisun
* `changed` : faili ti a yipada
* `root` : root Project

Iye ipadabọ jẹ iwe-itumọ, gẹgẹbi

```json
{
  file:{
    //  path: txt, for example :
    // "_.json": "[]"
  }
}
```

`file` jẹ atokọ faili ti o wujade, `path` ni ọna faili, ati `txt` jẹ akoonu faili.

## -Itumọ Ti Ni Awọn Iṣẹ

Akoko asiko `js` ti a ṣe sinu da lori idagbasoke atẹle ti [boa](https://github.com/boa-dev/boa) ati awọn iṣẹ ti a ṣe sinu rẹ jẹ atẹle :

* `wPath(path, txt)` : si faili
* `rTxt(path)` Ka faili :
* `rBin(path)` Ka faili :
* `rDir(dirpath)` : Ka iwe ilana naa, iye ipadabọ jẹ atokọ : , atokọ faili

## Itọsọna Idagbasoke

Idagbasoke plug-in le jẹ itọkasi [https://github.com/i18n-site/addon](https://github.com/i18n-site/addon)