# Zásuvný Modul

Doplnky je možné nakonfigurovať v `.i18n/conf.yml` , ako napríklad:

```yml
addon:
  - i18n.addon/toc
```

## Oficiálny Plug-In

* `i18n.addon/toc` :
  Generovať index adresára `json` na základe `TOC` , predvolene povolené

* `i18n.addon/mouse` : myši

## Konvencia Názvov Súborov

Všetky doplnky sú `npm` balíkov.

Balík zodpovedajúci `i18n.addon/toc` vyššie je [https://www.npmjs.com/package/@i18n.addon/toc](https://www.npmjs.com/package/@i18n.addon/toc)

Doplnok štandardne používa najnovšiu verziu a týždenne kontroluje aktualizácie.

Ak chcete opraviť verziu, môžete napísať `i18n.addon/toc@0.1.3` .

Príkazový riadok prekladu `i18n.site` nainštaluje súbor konvencií balíka zásuvného modulu a potom ho spustí.

Dohodnuté názvy súborov sú nasledovné

### htmIndex.js

`htmIndex.js` sa vstrekne do konca `.i18n/htm/index.js` .

Kde `__CONF__` bude nahradené názvom aktuálnej konfigurácie (napríklad `dev` alebo `ol` ).

### afterTran.js

Zavolá sa po dokončení prekladu a zadané parametre sú nasledovné.

* `lang_li` Zoznam : , prvý jazyk je zdrojový jazyk
* `changed` : súborov
* `root` :

Návratovou hodnotou je slovník, ako napr

```json
{
  file:{
    //  path: txt, for example :
    // "_.json": "[]"
  }
}
```

`file` je zoznam výstupných súborov, `path` je cesta k súboru a `txt` je obsah súboru.

## Vstavané Funkcie

Vstavané `js` runtime je založené na sekundárnom vývoji [boa](https://github.com/boa-dev/boa) a vstavané funkcie sú nasledovné :

* `wPath(path, txt)` :
* `rTxt(path)` : si textový súbor
* `rBin(path)` čítať binárny :
* `rDir(dirpath)` Prečítajte si adresár : návratová hodnota je pole : adresárov, zoznam súborov

## Sprievodca Vývojom

Referenciou môže byť vývoj plug-inov [https://github.com/i18n-site/addon](https://github.com/i18n-site/addon)