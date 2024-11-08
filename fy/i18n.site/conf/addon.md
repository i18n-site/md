# Ynstekke

Plug-ins kinne wurde ynsteld yn `.i18n/conf.yml` , lykas:

```yml
addon:
  - i18n.addon/toc
```

## Offisjele Plug-In

* `i18n.addon/toc` : Directory yndeks
  Generearje mapyndeks fan `json` basearre op `TOC` , standert ynskeakele

* `i18n.addon/mouse` : Mûs-effekten

## Bestânsnammekonvinsje

Plug-ins binne allegear `npm` pakketten.

It pakket dat oerienkomt mei `i18n.addon/toc` hjirboppe is [https://www.npmjs.com/package/@i18n.addon/toc](https://www.npmjs.com/package/@i18n.addon/toc)

De plugin brûkt standert de lêste ferzje en kontrolearret alle wiken op updates.

As jo de ferzje reparearje wolle, kinne jo `i18n.addon/toc@0.1.3` skriuwe.

Oersetting kommandorigel `i18n.site` sil it konvinsjebestân fan it plug-in-pakket ynstallearje en it dan útfiere.

De oerienkommen triemnammen binne as folget

### htmIndex.js

`htmIndex.js` sil ynjeksje wurde oan 'e ein fan `.i18n/htm/index.js` .

Wêr `__CONF__` wurdt ferfongen troch de namme fan de aktuele konfiguraasje (lykas `dev` of `ol` ).

### afterTran.js

It sil neamd wurde neidat de oersetting is foltôge, en de parameters dy't trochjûn binne binne as folget.

* `lang_li` : Taallist, de earste taal is de boarnetaal
* `changed` :
* `root` :

De weromwearde is in wurdboek, lykas

```json
{
  file:{
    //  path: txt, for example :
    // "_.json": "[]"
  }
}
```

`file` is de útfiertriemlist, `path` is it bestânpaad, en `txt` is de bestânynhâld.

## Ynboude Funksjes

De ynboude `js` runtime is basearre op sekundêre ûntwikkeling fan [boa](https://github.com/boa-dev/boa) en de ynboude funksjes binne as folget :

* `wPath(path, txt)` : Skriuw nei triem
* `rTxt(path)` : Lês tekstbestân
* `rBin(path)` : Lês binêre triem
* `rDir(dirpath)` : Lês de map, de weromkommende wearde is in array : , triemlist

## Untwikkelingsgids

Plug-in-ûntwikkeling kin in referinsje wêze [https://github.com/i18n-site/addon](https://github.com/i18n-site/addon)