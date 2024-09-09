# Insticksmodul

Insticksmoduler kan konfigureras i `.i18n/conf.yml`, till exempel:

```yml
addon:
  - i18n.addon/toc
```

## Officiella insticksmoduler

* `i18n.addon/toc` : Katalogindex
  Generera katalogindex i `json` format baserat på `TOC`, aktiverat som standard

* `i18n.addon/mouse` : Museffekter

## Filnamnkonventioner

Insticksmoduler är alla `npm`-paket.

Det paket som motsvarar `i18n.addon/toc` ovan är [https://www.npmjs.com/package/@i18n.addon/toc](https://www.npmjs.com/package/@i18n.addon/toc).

Insticksmoduler använder som standard den senaste versionen och kontrollerar efter uppdateringar varje vecka.

om du vill låsa versionen kan du skriva `i18n.addon/toc@0.1.3`.

Översättningskommandot `i18n.site` installerar plugin-paketets konventionella filer och kör sedan dessa.

Dessa konventionella filnamn är följande:

### htmIndex.js

`htmIndex.js` kommer att infogas i slutet av `.i18n/htm/index.js`.

Där `__CONF__` kommer att ersättas med det aktuella konfigurationsnamnet (t.ex. `dev` eller `ol`).

### afterTran.js

Denna funktion anropas efter att översättningen är klar, och de skickade parametrarna är följande.

* `lang_li` : Språklista, där det första språket är källspråket
* `changed` : Ändrade filer
* `root` : Projektets rotkatalog

Returvärdet är en ordbok, till exempel:

```json
{
  file:{
    //  path: txt, for example :
    // "_.json": "[]"
  }
}
```

`file` är listan över utmatningsfiler, `path` är filvägen och `txt` är filinnehållet.

## Inbyggda funktioner

Den inbyggda `js`-motorn är utvecklad baserat på en二次utveckling av [boa](https://github.com/boa-dev/boa), och de inbyggda funktionerna är följande:

* `wPath(path, txt)` : Skriv till fil
* `rTxt(path)` : Läs textfil
* `rBin(path)` : Läs binärfil
* `rDir(dirpath)` : Läs katalog, returvärdet är en array: katalog列表, fillista

## Utvärderingsguide

Plugin-utveckling kan följa [https://github.com/i18n-site/addon](https://github.com/i18n-site/addon)