# Plug-In

Plugin-ak `.i18n/conf.yml` -n konfigura daitezke, hala nola:

```yml
addon:
  - i18n.addon/toc
```

## Plugin Ofiziala

* `i18n.addon/toc` : Direktorioaren indizea
  Sortu direktorio-indizea `TOC` `json` n oinarrituta, lehenespenez gaituta

* `i18n.addon/mouse` : Saguaren efektuak

## Fitxategi-Izenen Konbentzioa

Pluginak `npm` pakete dira.

Goiko `i18n.addon/toc` -ri dagokion paketea [https://www.npmjs.com/package/@i18n.addon/toc](https://www.npmjs.com/package/@i18n.addon/toc)

Pluginak lehenespenez azken bertsioa erabiltzen du eta astero eguneratzeak egiaztatzen ditu.

Bertsioa konpondu nahi baduzu, `i18n.addon/toc@0.1.3` idatz dezakezu.

Itzulpen-komando-lerroak `i18n.site` plug-in paketearen konbentzio-fitxategia instalatuko du eta gero exekutatu egingo du.

Hitzartutako fitxategien izenak hauek dira

### htmIndex.js

`htmIndex.js` injektatuko da `.i18n/htm/index.js` amaierara arte.

Non `__CONF__` uneko konfigurazioaren izenarekin ordezkatuko da (adibidez, `dev` edo `ol` ).

### afterTran.js

Itzulpena amaitu ondoren deituko da, eta igarotzen diren parametroak hauek dira.

* `lang_li` : Hizkuntzen zerrenda, lehen hizkuntza iturri hizkuntza da
* `changed` : Fitxategiak aldatuak
* `root` : Proiektuaren root direktorioa

Itzultzeko balioa hiztegi bat da, adibidez

```json
{
  file:{
    //  path: txt, for example :
    // "_.json": "[]"
  }
}
```

`file` irteerako fitxategien zerrenda da, `path` fitxategiaren bidea eta `txt` fitxategiaren edukia.

## Integratutako Funtzioak

Eraikitako `js` exekuzio-denbora bigarren mailako garapenean oinarritzen da [boa](https://github.com/boa-dev/boa) eta barneko funtzioak hauek dira :

* `wPath(path, txt)` : Idatzi fitxategira
* `rTxt(path)` : Irakurri testu-fitxategia
* `rBin(path)` : Irakurri fitxategi bitarra
* `rDir(dirpath)` : Irakurri direktorioa, itzulera balioa : zerrenda bat da, fitxategien zerrenda

## Garapen Gida

Plug-inen garapena erreferentzia izan daiteke [https://github.com/i18n-site/addon](https://github.com/i18n-site/addon)