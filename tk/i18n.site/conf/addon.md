# Plugin

Plug-insleri `.i18n/conf.yml` -da düzüp bolýar, meselem:

```yml
addon:
  - i18n.addon/toc
```

## Resmi Plugin

* `i18n.addon/toc` Directory indeks :
  Düzgüne görä açyk `TOC` a esaslanan `json` katalog indeksini dörediň

* Syçanjygyň : `i18n.addon/mouse`

## Faýlyň Ady Konwensiýasy

Plug-insleriň hemmesi `npm` paket.

Aboveokardaky `i18n.addon/toc` a gabat gelýän paket [https://www.npmjs.com/package/@i18n.addon/toc](https://www.npmjs.com/package/@i18n.addon/toc)

Plagin iň soňky wersiýasyny adaty ýagdaýda ulanýar we her hepde täzelenmeleri barlaýar.

Wersiýasyny düzetmek isleseňiz `i18n.addon/toc@0.1.3` ýazyp bilersiňiz.

Terjime buýruk setiri `i18n.site` plugin paketiniň konwensiýa faýlyny gurar we soňra ýerine ýetirer.

Ylalaşylan faýl atlary aşakdaky ýaly

### htmIndex.js

`htmIndex.js` `.i18n/htm/index.js` iň soňuna sanjym ediler.

Bu ýerde `__CONF__` häzirki konfigurasiýanyň ady bilen çalşyrylar (meselem `dev` ýa-da `ol` ).

### afterTran.js

Terjime gutarandan soň çagyrylar we geçen parametrler aşakdaky ýaly.

* `lang_li` Dil sanawy : ilkinji dil çeşme dili
* `changed` Üýtgedilen faýllar :
* `root` Taslama kök katalogy :

Yza gaýtaryş gymmaty ýaly sözlükdir

```json
{
  file:{
    //  path: txt, for example :
    // "_.json": "[]"
  }
}
```

`file` çykyş faýl sanawy, `path` faýl ýoly, `txt` faýl mazmuny.

## Gurlan Funksiýalar

Gurlan `js` iş wagty ikinji derejeli ösüşe esaslanýar [boa](https://github.com/boa-dev/boa) gurlan funksiýalar aşakdaky ýaly :

* `wPath(path, txt)` Faýl ýazyň :
* `rTxt(path)` okaň Tekst faýlyny okaň :
* `rBin(path)` ikilik faýly okaň :
* `rDir(dirpath)` okaň : katalogy okaň, gaýtarma bahasy : massiw sanawy, faýl sanawy

## Ösüş Gollanmasy

Plug-yň ösüşi salgylanma bolup biler [https://github.com/i18n-site/addon](https://github.com/i18n-site/addon)