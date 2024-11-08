# Inprop

Inproppe kan in `.i18n/conf.yml` gekonfigureer word, soos:

```yml
addon:
  - i18n.addon/toc
```

## Amptelike Inprop

* `i18n.addon/toc` : Gidsindeks
  Genereer gidsindeks van `json` gebaseer op `TOC` , by verstek geaktiveer

* `i18n.addon/mouse` : Muis-effekte

## Lêernaamkonvensie

Inproppe is almal `npm` pakkette.

Die pakket wat ooreenstem met `i18n.addon/toc` hierbo is [https://www.npmjs.com/package/@i18n.addon/toc](https://www.npmjs.com/package/@i18n.addon/toc)

Die inprop gebruik by verstek die nuutste weergawe en kyk weekliks vir opdaterings.

As jy die weergawe wil regmaak, kan jy `i18n.addon/toc@0.1.3` skryf.

Vertaling opdragreël `i18n.site` sal die konvensielêer van die inproppakket installeer en dit dan uitvoer.

Die ooreengekome lêername is soos volg

### htmIndex.js

`htmIndex.js` sal tot die einde van `.i18n/htm/index.js` ingespuit word.

Waar `__CONF__` vervang sal word met die naam van die huidige konfigurasie (soos `dev` of `ol` ).

### afterTran.js

Dit sal opgeroep word nadat die vertaling voltooi is, en die parameters wat ingegee is, is soos volg.

* `lang_li` : Taallys, die eerste taal is die brontaal
* `changed` : Gewysigde lêers
* `root` : Projek wortelgids

Die terugkeerwaarde is 'n woordeboek, soos

```json
{
  file:{
    //  path: txt, for example :
    // "_.json": "[]"
  }
}
```

`file` is die uitvoerlêerlys, `path` is die lêerpad en `txt` is die lêerinhoud.

## Ingeboude Funksies

Die ingeboude `js` looptyd is gebaseer op sekondêre ontwikkeling van [boa](https://github.com/boa-dev/boa) en die ingeboude funksies is soos volg :

* `wPath(path, txt)` : Skryf na lêer
* `rTxt(path)` : Lees tekslêer
* `rBin(path)` : Lees binêre lêer
* `rDir(dirpath)` : Lees die gids, die terugkeerwaarde is 'n skikking : , lêerlys

## Ontwikkelingsgids

Inprop-ontwikkeling kan 'n verwysing wees [https://github.com/i18n-site/addon](https://github.com/i18n-site/addon)