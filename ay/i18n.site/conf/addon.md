# Ukax Mä Plugin Ukhamawa

Plug-ins ukax `.i18n/conf.yml` ukan wakicht’atäspawa, sañäni:

```yml
addon:
  - i18n.addon/toc
```

## Plug-in Oficial Ukax Uñt’ayatawa

* `i18n.addon/toc` :
  `json` ukat `TOC` ukarjam directorio índice luraña, ukax default ukarjam ch’amanchatawa

* `i18n.addon/mouse` :

## Archivo Suti Convención Ukaxa

Plug-ins ukax taqpach `npm` paquetes ukanakawa.

Uka paquete correspondiente `i18n.addon/toc` ukax akhamawa [https://www.npmjs.com/package/@i18n.addon/toc](https://www.npmjs.com/package/@i18n.addon/toc)

Plugin ukax qhipa versión ukampiw apnaqasi ukatx sapa semanaw machaq uñstawinak uñakipi.

Uka versión askichañ munsta ukhaxa, `i18n.addon/toc@0.1.3` qillqt’asma.

Jaqukipaña kamachi `i18n.site` ukaxa convención archivo ukawa plugin package ukaru uskuta ukatxa phuqhañapawa.

Amtawi arsuwi sutinakaxa akhamawa

### htmIndex.js

`htmIndex.js` ukax `.i18n/htm/index.js` tukuykamaw inyectatäni.

Kawkhantix `__CONF__` ukax jichha configuración ukan sutipampiw turkata (kunjamatix `dev` jan ukax `ol` ).

### afterTran.js

Jaqukipaña tukuyatatxa jawsatäni, ukatxa parámetros ukanakaxa pasatäki ukanakaxa akhamawa.

* `lang_li` :
* `changed` :
* `root` : Proyecto saphi uñt’ayawi

Kutt’ayañax mä aru pirwawa, sañäni

```json
{
  file:{
    //  path: txt, for example :
    // "_.json": "[]"
  }
}
```

`file` ukax mistuwi arsuwi lista, `path` ukax arsuwi thakhi, ukatx `txt` ukax arsuwi chimpu.

## Uñstayata Lurawinakampi

Uka `js` apnaqañ pachax secundario desarrollo ukarjam luratawa [boa](https://github.com/boa-dev/boa) ukatx lurat lurawinakax akhamawa :

* `wPath(path, txt)` :
* `rTxt(path)` : Uñakipt’añataki qillqata
* `rBin(path)` : Uñakipt’aña binario archiwu
* `rDir(dirpath)` : :

## Desarrollo Guía Uka Tuqita

Plug-in ukan lurawipax mä referencia ukhamäspawa [https://github.com/i18n-site/addon](https://github.com/i18n-site/addon)