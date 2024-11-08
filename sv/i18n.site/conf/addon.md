# Plug-In

Insticksprogram kan konfigureras i `.i18n/conf.yml` , till exempel:

```yml
addon:
  - i18n.addon/toc
```

## Officiell Plug-In

* `i18n.addon/toc` : Katalogindex
  Generera katalogindex på `json` baserat på `TOC` , aktiverat som standard

* `i18n.addon/mouse` : Museffekter

## Filnamnskonvention

Plug-ins är alla `npm` paket.

Paketet som motsvarar `i18n.addon/toc` ovan är [https://www.npmjs.com/package/@i18n.addon/toc](https://www.npmjs.com/package/@i18n.addon/toc)

Plugin-programmet använder den senaste versionen som standard och söker efter uppdateringar varje vecka.

Om du vill fixa versionen kan du skriva `i18n.addon/toc@0.1.3` .

Översättningskommandorad `i18n.site` kommer att installera konventionsfilen för plugin-paketet och sedan köra den.

De överenskomna filnamnen är följande

### htmIndex.js

`htmIndex.js` kommer att injiceras till slutet av `.i18n/htm/index.js` .

Där `__CONF__` kommer att ersättas med namnet på den aktuella konfigurationen (som `dev` eller `ol` ).

### afterTran.js

Den kommer att anropas efter att översättningen är klar, och parametrarna som skickas in är som följer.

* `lang_li` : Språklista, det första språket är källspråket
* `changed` : Ändrade filer
* `root` : Projektets rotkatalog

Returvärdet är en ordbok, som t.ex

```json
{
  file:{
    //  path: txt, for example :
    // "_.json": "[]"
  }
}
```

`file` är utdatafillistan, `path` är filsökvägen och `txt` är filinnehållet.

## Inbyggda Funktioner

Den inbyggda `js` körtiden är baserad på sekundär utveckling av [boa](https://github.com/boa-dev/boa) och de inbyggda funktionerna är som följer :

* `wPath(path, txt)` : Skriv till fil
* `rTxt(path)` : Läs textfil
* `rBin(path)` : Läs binär fil
* `rDir(dirpath)` : Läs katalogen, returvärdet är en array : , fillista

## Utvecklingsguide

Plug-in utveckling kan vara en referens [https://github.com/i18n-site/addon](https://github.com/i18n-site/addon)