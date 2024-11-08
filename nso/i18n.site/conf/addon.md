# Polaka-Ka Gare

Di-plug-in di ka beakanywa ka `.i18n/conf.yml` , go swana le:

```yml
addon:
  - i18n.addon/toc
```

## Semmušo Plug-In

* `i18n.addon/toc` : Tšhupetšo ya tšhupetšo
  Hlagiša tšhupamabaka ya tšhupetšo ya `json` yeo e theilwego go `TOC` , e kgontšhitšwe ka go ikemela

* `i18n.addon/mouse` : Ditlamorago tša toeba

## Kopano Ya Leina La Faele

Plug-ins ke diphuthelwana ka moka `npm` .

Sephuthelwana seo se sepelelanago le `i18n.addon/toc` ka godimo ke [https://www.npmjs.com/package/@i18n.addon/toc](https://www.npmjs.com/package/@i18n.addon/toc)

Plugin e šomiša phetolelo ya moragorago ka go ikemela gomme e hlahloba diapdeite beke le beke.

Ge o nyaka go lokiša phetolelo, o ka ngwala `i18n.addon/toc@0.1.3` .

Mola wa taelo ya phetolelo `i18n.site` o tla tsenya faele ya kopano ya sephuthelwana sa polaka gomme wa e phethagatša.

Maina a difaele ao go dumelelanwego ka ona ke a a latelago

### htmIndex.js

`htmIndex.js` e tla hlabja go fihla mafelelong a `.i18n/htm/index.js` .

Moo `__CONF__` e tla tšeelwa legato ke leina la peakanyo ya bjale (go swana le `dev` goba `ol` ).

### afterTran.js

E tla bitšwa ka morago ga ge phetolelo e phethilwe, gomme ditekanyetšo tšeo di fetišitšwego ke tše di latelago.

* `lang_li` Lenaneo la polelo, polelo : mathomo ke polelo ya mothopo
* `changed` : Difaele tše di fetotšwego
* `root` : Projeke ya modu wa tšhupetšo

Boleng bja go boela morago ke pukuntšu, go swana le

```json
{
  file:{
    //  path: txt, for example :
    // "_.json": "[]"
  }
}
```

`file` ke lenaneo la faele ya ditšweletšwa, `path` ke tsela ya faele, gomme `txt` ke dikagare tša faele.

## Mešomo Yeo E Agetšwego Ka Gare

Nako ya go sepela `js` yeo e agetšwego ka gare : theilwe godimo ga tlhabollo ya bobedi ya [boa](https://github.com/boa-dev/boa)

* `wPath(path, txt)` : Ngwala go faele
* `rTxt(path)` : Bala faele ya sengwalwa
* `rBin(path)` : Bala faele ya binary
* `rDir(dirpath)` : Bala tšhupetšo, boleng bja go boela morago ke lenaneo la lenaneo la : , lenaneo la faele

## Tlhahlo Ya Tlhabollo

Plug-ka ntshetsopele e ka ba tshupiso [https://github.com/i18n-site/addon](https://github.com/i18n-site/addon)