# Pulagi-Mu

Mapulagini amatha kukhazikitsidwa mu `.i18n/conf.yml` , monga:

```yml
addon:
  - i18n.addon/toc
```

## Pulagi Yovomerezeka

* `i18n.addon/toc` :
  Pangani chilolezo cha `json` kutengera `TOC` , chothandizidwa mwachisawawa

* `i18n.addon/mouse` : zotsatira

## Msonkhano Wa Dzina Lafayilo

Mapulagini onse ndi mapaketi `npm` .

Phukusi lolingana ndi `i18n.addon/toc` pamwambapa ndi [https://www.npmjs.com/package/@i18n.addon/toc](https://www.npmjs.com/package/@i18n.addon/toc)

Pulogalamu yowonjezera imagwiritsa ntchito mtundu waposachedwa mwachisawawa ndikuwunika zosintha sabata iliyonse.

Ngati mukufuna kukonza Baibulo, mukhoza kulemba `i18n.addon/toc@0.1.3` .

Mzere wamalamulo womasulira `i18n.site` udzakhazikitsa fayilo ya msonkhano wa pulagi-mu phukusi ndikuchita.

Mafayilo omwe adagwirizana nawo ndi awa

### htmIndex.js

`htmIndex.js` idzabayidwa mpaka kumapeto kwa `.i18n/htm/index.js` .

Kumene `__CONF__` idzasinthidwa ndi dzina la kasinthidwe kamakono (monga `dev` kapena `ol` ).

### afterTran.js

Idzatchedwa kumasulira kumalizidwa, ndipo magawo omwe adutsamo ndi awa.

* `lang_li` :
* `changed` : osinthidwa
* `root` :

Mtengo wobwezera ndi mtanthauzira mawu, monga

```json
{
  file:{
    //  path: txt, for example :
    // "_.json": "[]"
  }
}
```

`file` ndiye mndandanda wamafayilo otulutsa, `path` ndiye njira yamafayilo, ndipo `txt` ndizomwe zili mufayilo.

## Ntchito Zomangidwa

Kuthamangitsidwa kwa `js` kumatengera chitukuko chachiwiri cha [boa](https://github.com/boa-dev/boa) ndipo ntchito zomangidwa ndi izi :

* `wPath(path, txt)` :
* `rTxt(path)` :
* `rBin(path)` : fayilo ya binary
* `rDir(dirpath)` : chikwatu, mtengo wobwerera ndi mndandanda wa : , mndandanda wamafayilo

## Chitukuko Guide

Kukula kwa plug-in kungakhale kolozera [https://github.com/i18n-site/addon](https://github.com/i18n-site/addon)