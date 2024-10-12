# Plug-in Nisqa

Plug-ins nisqakunaqa `.i18n/conf.yml` nisqapim wakichisqa kanman, ahinataq:

```yml
addon:
  - i18n.addon/toc
```

## Plug-in Oficial Nisqa

* `i18n.addon/toc` :
  `TOC` kaqpi sayasqa `json` kaqpa willañiqip indisninta paqarichiy, ñawpaqmanta atichisqa

* `i18n.addon/mouse` :

## Archivo Suti Convención

Plug-ins nisqakunaqa llapan `npm` paquetekunam.

Hawa `i18n.addon/toc` nisqaman tupaq paqueteqa [https://www.npmjs.com/package/@i18n.addon/toc](https://www.npmjs.com/package/@i18n.addon/toc)

Pluginqa qhipa kaq laya ñawpaqmanta llamk'achin chaymanta sapa semana musuqyachiykunata qhawan.

Laya allichayta munaspaqa `i18n.addon/toc@0.1.3` qillqawaq.

Tikray kamachiy chiru `i18n.site` churanqa convención willañiqita plugin paquete kaqmanta chaymanta ruwanqa.

Rimasqa willañiqi sutikunaqa kayhinam

### htmIndex.js

`htmIndex.js` `.i18n/htm/index.js` tukukuykama inyectasqa kanqa.

Maypichus `__CONF__` kunan wakichisqa sutiwan tikrasqa kanqa ( `dev` icha `ol` hina ).

### afterTran.js

Chaytaqa waqyakunqa tikray tukusqaña kaptin, chaymanta chayman pasasqa parámetros nisqakunaqa kayhinam.

* `lang_li` :
* `changed` : Hukchasqa willañiqikuna
* `root` : Proyecto saphi qillqana mayt'u

Kutichiy chaniqa simi pirwa, ahinataq

```json
{
  file:{
    //  path: txt, for example :
    // "_.json": "[]"
  }
}
```

`file` lluqsisqa willañiqi lista, `path` willañiqi ñan, `txt` willañiqip kaqnin.

## Wasichasqa Ruwaykuna

`js` purichiy pachaqa iskay kaq wiñachiypi sayasqa kachkan [boa](https://github.com/boa-dev/boa) chaymanta ruwasqa ruwanakuna kayhina :

* `wPath(path, txt)` : Archivoman qillqay
* `rTxt(path)` : Qillqasqa willañiqita ñawiriy
* `rBin(path)` : Iskayniyuq willañiqita ñawiriy
* `rDir(dirpath)` : Willañiqita ñawiriy, kutichiy chanin huk matriz : lista, willañiqi lista

## Wiñariymanta Guía

Plug-in wiñachiyqa huk referencia kanman [https://github.com/i18n-site/addon](https://github.com/i18n-site/addon)