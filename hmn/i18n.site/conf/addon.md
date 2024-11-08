# Ntsaws-Hauv

Plug-ins tuaj yeem teeb tsa hauv `.i18n/conf.yml` , xws li:

```yml
addon:
  - i18n.addon/toc
```

## Official Plug-In

* `i18n.addon/toc` : . . . . . . . . . . . . . . . .
  Tsim cov ntawv qhia kev ntsuas ntawm `json` raws li `TOC` , ua haujlwm los ntawm lub neej ntawd

* `i18n.addon/mouse` : Mouse effect

## Cov Ntaub Ntawv Npe Convention

Plug-ins yog tag nrho `npm` pob.

Cov pob sib xws rau `i18n.addon/toc` saum toj no yog [https://www.npmjs.com/package/@i18n.addon/toc](https://www.npmjs.com/package/@i18n.addon/toc)

Lub plugin siv qhov tseeb version los ntawm lub neej ntawd thiab kuaj xyuas qhov hloov tshiab txhua lub lim tiam.

Yog tias koj xav kho qhov version, koj tuaj yeem sau `i18n.addon/toc@0.1.3` .

Kev txhais lus hais kom ua kab `i18n.site` yuav teeb tsa cov ntaub ntawv sib tham ntawm lub pob plug-in thiab ua tiav nws.

Cov npe ntawm cov ntaub ntawv pom zoo yog raws li hauv qab no

### htmIndex.js

`htmIndex.js` yuav txhaj mus rau qhov kawg ntawm `.i18n/htm/index.js` .

Qhov twg `__CONF__` yuav raug hloov nrog lub npe ntawm qhov kev teeb tsa tam sim no (xws li `dev` lossis `ol` ).

### afterTran.js

Nws yuav raug hu tom qab kev txhais lus tiav, thiab cov tsis tau dhau los yog raws li hauv qab no.

* `lang_li` : Daim ntawv teev lus, thawj hom lus yog hom lus
* `changed` : Hloov cov ntaub ntawv
* `root` : Project root directory

Tus nqi rov qab yog phau ntawv txhais lus, xws li

```json
{
  file:{
    //  path: txt, for example :
    // "_.json": "[]"
  }
}
```

`file` yog cov ntaub ntawv tso zis, `path` yog cov ntaub ntawv txoj kev, thiab `txt` yog cov ntsiab lus ntawm cov ntaub ntawv.

## Built-in Muaj Nuj Nqi

Lub sijhawm ua haujlwm hauv `js` yog raws li kev txhim kho theem nrab ntawm [boa](https://github.com/boa-dev/boa) thiab cov haujlwm ua haujlwm tau ua raws li hauv qab no :

* `wPath(path, txt)` : Sau ua ntaub ntawv
* `rTxt(path)` : Nyeem cov ntaub ntawv
* `rBin(path)` : Nyeem cov ntaub ntawv binary
* `rDir(dirpath)` : Nyeem cov npe, tus nqi rov qab yog ib qho array : list, file list

## Phau Ntawv Qhia Kev Txhim Kho

Plug-in txoj kev loj hlob tuaj yeem siv tau [https://github.com/i18n-site/addon](https://github.com/i18n-site/addon)