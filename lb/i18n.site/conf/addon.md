# Astiechen

Plug-ins kënnen an `.i18n/conf.yml` konfiguréiert ginn, sou wéi:

```yml
addon:
  - i18n.addon/toc
```

## Offiziell Plug-In

* `i18n.addon/toc` : Verzeechnes Index
  Generéiere Verzeechnes Index vun `json` baséiert op `TOC` , par défaut aktivéiert

* `i18n.addon/mouse` : Maus Effekter

## Dateinumm Konventioun

Plug-ins sinn all `npm` Packagen.

De Package entsprécht `i18n.addon/toc` uewen ass [https://www.npmjs.com/package/@i18n.addon/toc](https://www.npmjs.com/package/@i18n.addon/toc)

De Plugin benotzt déi lescht Versioun par défaut a kontrolléiert wöchentlech fir Updates.

Wann Dir d'Versioun fixéiere wëllt, kënnt Dir `i18n.addon/toc@0.1.3` schreiwen.

Iwwersetzung Kommandozeil `i18n.site` wäert d'Konventiounsdatei vum Plug-In Package installéieren an dann ausféieren.

Déi ausgemaach Dateinumm sinn wéi follegt

### htmIndex.js

`htmIndex.js` gëtt op d'Enn vun `.i18n/htm/index.js` injizéiert.

Wou `__CONF__` gëtt mam Numm vun der aktueller Konfiguratioun ersat (wéi `dev` oder `ol` ).

### afterTran.js

Et gëtt genannt nodeems d'Iwwersetzung ofgeschloss ass, an d'Parameteren déi erakomm sinn sinn wéi follegt.

* `lang_li` : Lëscht, déi éischt Sprooch ass d'Quellsprooch
* `changed` : Dateien
* `root` :

De Retourwäert ass e Wierderbuch, wéi z

```json
{
  file:{
    //  path: txt, for example :
    // "_.json": "[]"
  }
}
```

`file` ass d'Ausgabdateilëscht, `path` ass de Dateiwee, an `txt` ass den Inhalt vum Fichier.

## Gebaut-an Funktiounen

Déi agebaute `js` Runtime baséiert op sekundärer Entwécklung vun [boa](https://github.com/boa-dev/boa) an déi agebaute Funktiounen sinn wéi follegt :

* `wPath(path, txt)` schreiwen :
* `rTxt(path)` liesen :
* `rBin(path)` : Liest binär Datei
* `rDir(dirpath)` : Liest de Verzeechnes, de Retourwäert ass eng Array : Verzeechneslëscht, Dateilëscht

## Entwécklung Guide

Plug-in Entwécklung kann eng Referenz sinn [https://github.com/i18n-site/addon](https://github.com/i18n-site/addon)