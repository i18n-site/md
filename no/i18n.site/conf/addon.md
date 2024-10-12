# Plugin

Plugin-moduler kan konfigureres i `.i18n/conf.yml`, som for eksempel:

```yml
addon:
  - i18n.addon/toc
```

## Offisielle plugin-moduler

* `i18n.addon/toc`: Katalogindeks
  Genererer katalogindeks i `json` basert på `TOC`, standardaktivert

* `i18n.addon/mouse`: Museeffekter

## Filnavnkonvensjoner

Plugins er alle `npm`-pakker.

Pakken som tilsvarer `i18n.addon/toc` er [https://www.npmjs.com/package/@i18n.addon/toc](https://www.npmjs.com/package/@i18n.addon/toc).

Plugins bruker som standard den nyeste versjonen, og sjekker for oppdateringer ukentlig.

Hvis du ønsker å låse fast en versjon, kan du skrive `i18n.addon/toc@0.1.3`.

Oversettelseskommandoen `i18n.site` installerer plugin-pakkens avtalefiler og kjører deretter dem.

Avtalte filnavn er som følger:

### htmIndex.js

`htmIndex.js` vil bli injisert til slutten av `.i18n/htm/index.js`.

Der `__CONF__` vil bli erstattet med navnet på den nåværende konfigurasjonen (f.eks. `dev` eller `ol`).

### afterTran.js

Den vil bli kalt etter at oversettelsen er fullført, med følgende parametere:

* `lang_li`: Språkliste, hvor det første språket er kildespråket
* `changed`: Endrede filer
* `root`: Prosjektets rotmappe

Returverdien er en ordbok, for eksempel:

```json
{
  file:{
    //  path: txt, for example :
    // "_.json": "[]"
  }
}
```

`file` er listen over utdatafiler, `path` er filbanen og `txt` er filinnholdet.

## Innebygde funksjoner

Innebygde `js`-kjøretider er basert på二次开发 av [boa](https://github.com/boa-dev/boa), og innebygde funksjoner inkluderer:

* `wPath(path, txt)`: Skriv til fil
* `rTxt(path)`: Les tekstfil
* `rBin(path)`: Les binær fil
* `rDir(dirpath)`: Les katalog, returverdien er en array: katalogliste, filliste

## Utviklingsveiledning

Plugin-utvikling kan referere til [https://github.com/i18n-site/addon](https://github.com/i18n-site/addon)