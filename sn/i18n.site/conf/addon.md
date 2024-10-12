# Plug-In

Plug-ins inogona kugadzirwa `.i18n/conf.yml` , senge:

```yml
addon:
  - i18n.addon/toc
```

## Official Plug-In

* `i18n.addon/toc` :
  Gadzira dhairekitori index ye `json` zvichibva pane `TOC` , inogoneswa neiyo default

* `i18n.addon/mouse` :

## Faili Zita Regungano

Plug-ins ese ari `npm` mapakeji.

Iyo pasuru inoenderana `i18n.addon/toc` pamusoro ndeye [https://www.npmjs.com/package/@i18n.addon/toc](https://www.npmjs.com/package/@i18n.addon/toc)

Iyo plugin inoshandisa yazvino vhezheni nekukasira uye inotarisa kune inogadziridza vhiki nevhiki.

Kana iwe uchida kugadzirisa shanduro, unogona kunyora `i18n.addon/toc@0.1.3` .

Dudziro yekuraira mutsara `i18n.site` ichaisa iyo gungano faira replug-in package uye wobva wariita.

Mazita efaira akabvumirana ndeaya anotevera

### htmIndex.js

`htmIndex.js` ichabaiwa kusvika pakupera `.i18n/htm/index.js` .

Iko `__CONF__` ichatsiviwa nezita rezvigadziriso zvazvino (senge `dev` kana `ol` ).

### afterTran.js

Ichadaidzwa mushure mekunge shanduro yapera, uye maparameter akapfuudzwa ndeaya anotevera.

* `lang_li` :
* `changed` :
* `root` :

Iko kukosha kwekudzoka iduramazwi, sekuti

```json
{
  file:{
    //  path: txt, for example :
    // "_.json": "[]"
  }
}
```

`file` ndiyo yakabuda faira runyorwa, `path` ndiyo nzira yefaira, uye `txt` ndiyo yemukati yefaira.

## Yakavakwa-Mukati Mabasa

Iyo yakavakirwa-mukati `js` nguva yekumhanya yakavakirwa pakuvandudzwa kwechipiri [boa](https://github.com/boa-dev/boa) uye mabasa akavakirwa-mukati ndeaya anotevera :

* `wPath(path, txt)` :
* `rTxt(path)` :
* `rBin(path)` Verenga : faira
* `rDir(dirpath)` Verenga dhairekitori : kukosha kwekudzoka ndeye : runyorwa, faira runyorwa

## Development Guide

Plug-in kuvandudza inogona kuva referensi [https://github.com/i18n-site/addon](https://github.com/i18n-site/addon)