# Beépülő modul

A `.i18n/conf.yml` fájlban konfigurálhatók a beépülő modulok, például:

```yml
addon:
  - i18n.addon/toc
```

## Hivatalos beépülő modulok

* `i18n.addon/toc` : tartalomjegyzék
  `json` formátumú tartalomjegyzék létrehozása a `TOC` alapján, alapértelmezés szerint engedélyezve

* `i18n.addon/mouse` : egér effektek

## Fájlnév-szabványok

A beépülő modulok minden egyike egy `npm` csomag.

A fenti `i18n.addon/toc` megfelelő csomag: [https://www.npmjs.com/package/@i18n.addon/toc](https://www.npmjs.com/package/@i18n.addon/toc)

A beépülő modulok alapértelmezésben a legújabb verziót használják, és hetente frissítéseket ellenőriznek.

Ha fix verziót szeretnél használni, akkor írd `i18n.addon/toc@0.1.3` formátumban.

A `i18n.site` parancssor fordítási parancs telepíti a bővítmény csomag konvenciós fájlját, majd végrehajtja azt.

A megállapodás szerinti fájlnevek a következők

### htmIndex.js

`htmIndex.js` beillesztése az `.i18n/htm/index.js` végére.

Ahol `__CONF__` helyére az aktuális konfiguráció neve kerül (például `dev` vagy `ol`).

### afterTran.js

A fordítás befejezése után kerül meghívásra, és a kapott paraméterek a következők.

* `lang_li` : nyelv lista, az első nyelv a forrásnyelv
* `changed` : módosított fájlok
* `root` : projekt gyökérmappája

A visszatérési érték egy szótár, például

```json
{
  file:{
    //  path: txt, for example :
    // "_.json": "[]"
  }
}
```

`file` a kimeneti fájlok listája, `path` a fájl útvonala, `txt` a fájl tartalma.

## Beépített függvények

A beépített `js` futót idő a [boa](https://github.com/boa-dev/boa) alapján másodlagos fejlesztéssel készült, és a beépített függvények a következők:

* `wPath(path, txt)` : fájl írás
* `rTxt(path)` : szöveges fájl olvasás
* `rBin(path)` : bináris fájl olvasás
* `rDir(dirpath)` : könyvtár olvasás, visszatérési érték egy tömb: könyvtárak listája, fájlok listája

## Fejlesztési útmutató

A bővítményfejlesztéshez hivatkozhat [https://github.com/i18n-site/addon](https://github.com/i18n-site/addon)