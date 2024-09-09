# Programtillegg

Programtillegg kan konfigureres i `.i18n/conf.yml`, som for eksempel:

```yml
addon:
  - i18n.addon/toc
```

## Offisielle programtillegg

* `i18n.addon/toc` : Katalogindeks
  Generer `json`-katalogindeks basert på `TOC`, standardaktivert

* `i18n.addon/mouse` : Museeffekter

## Filnavnkonvensjoner

Programtillegg er alle `npm`-pakker.

Pakken som tilsvarer `i18n.addon/toc` ovenfor er [https://www.npmjs.com/package/@i18n.addon/toc](https://www.npmjs.com/package/@i18n.addon/toc).

Programtillegget bruker som standard den nyeste versjonen, og sjekker for oppdateringer ukentlig.

Hvis du ønsker å fastsette en versjon, kan du skrive `i18n.addon/toc@0.1.3`.

Oversettelseskommandoen `i18n.site` installerer konvensjonsfilen for plugin-pakken og kjører deretter.

De avtalte filnavnene er som følger:

### htmIndex.js

`htmIndex.js` vil bli injisert til slutten av `.i18n/htm/index.js`.

Hvor `__CONF__` vil bli erstattet med navnet på den nåværende konfigurasjonen (f.eks. `dev` eller `ol`).

### afterTran.js

Dette vil bli kalt etter fullført oversettelse, med følgende parametere:

* `lang_li` : Språkliste, hvor det første språket er kildespråket
* `changed` : Endrede filer
* `root` : Prosjektets rotmappe

Returverdien er en ordbok, for eksempel:

```json
{
  file:{
    //  path: txt, for example :
    // "_.json": "[]"
  }
}
```

`file` er listen over output-filer, `path` er filbanen og `txt` er filinnholdet.

## Innebygde funksjoner

Den innebygde `js`-kjørestiden er basert på videreutvikling av [boa](https://github.com/boa-dev/boa), og de innebygde funksjonene er som følger:

* `wPath(path, txt)` : Skriv til fil
* `rTxt(path)` : Les tekstfil
* `rBin(path)` : Les binær fil
* `rDir(dirpath)` : Les katalog, returnerer en array: katalogliste, filliste

## Utviklingsveiledning

Plugin-utvikling kan referere til [https://github.com/i18n-site/addon](https://github.com/i18n-site/addon)