# Plug-In

A beépülő modulok `.i18n/conf.yml` -ban konfigurálhatók, például:

```yml
addon:
  - i18n.addon/toc
```

## Hivatalos Beépülő Modul

* `i18n.addon/toc` : index
  `json` -es címtárindex létrehozása `TOC` alapján, alapértelmezés szerint engedélyezve

* `i18n.addon/mouse` Egér :

## Fájlnév-Egyezmény

A beépülő modulok mindegyike `npm` csomag.

A fenti `i18n.addon/toc` -nak megfelelő csomag [https://www.npmjs.com/package/@i18n.addon/toc](https://www.npmjs.com/package/@i18n.addon/toc)

A bővítmény alapértelmezés szerint a legújabb verziót használja, és hetente ellenőrzi a frissítéseket.

Ha javítani szeretnéd a verziót, írhatsz `i18n.addon/toc@0.1.3` .

A `i18n.site` fordítási parancssor telepíti a beépülő csomag konvenciós fájlját, majd végrehajtja azt.

A megállapodás szerinti fájlnevek a következők

### htmIndex.js

`htmIndex.js` adnak be az `.i18n/htm/index.js` végéig.

Ahol `__CONF__` helyére az aktuális konfiguráció neve kerül (például `dev` vagy `ol` ).

### afterTran.js

A fordítás befejezése után kerül meghívásra, és a bevitt paraméterek a következők.

* `lang_li` : , az első nyelv a forrásnyelv
* `changed` Módosított :
* `root` Projekt :

A visszatérési érték egy szótár, mint pl

```json
{
  file:{
    //  path: txt, for example :
    // "_.json": "[]"
  }
}
```

`file` a kimeneti fájlok listája, `path` a fájl elérési útja és `txt` a fájl tartalma.

## Beépített Funkciók

A beépített `js` futásidő a [boa](https://github.com/boa-dev/boa) másodlagos fejlesztésén alapul, és a beépített funkciók a következők :

* `wPath(path, txt)` : fájlba
* `rTxt(path)` : olvasása
* `rBin(path)` : fájl olvasása
* `rDir(dirpath)` : el a könyvtárat, a visszatérési érték egy tömb : könyvtárlista, fájllista

## Fejlesztési Útmutató

A plug-in fejlesztés referencia lehet [https://github.com/i18n-site/addon](https://github.com/i18n-site/addon)