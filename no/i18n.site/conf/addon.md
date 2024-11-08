# Plug-In

Plug-ins kan konfigureres i `.i18n/conf.yml` , for eksempel:

```yml
addon:
  - i18n.addon/toc
```

## Offisiell Plug-In

* `i18n.addon/toc` : Katalogindeks
  Generer katalogindeks på `json` basert på `TOC` , aktivert som standard

* `i18n.addon/mouse` : Museffekter

## Filnavnkonvensjon

Plug-ins er alle `npm` pakker.

Pakken som tilsvarer `i18n.addon/toc` ovenfor er [https://www.npmjs.com/package/@i18n.addon/toc](https://www.npmjs.com/package/@i18n.addon/toc)

Programtillegget bruker den nyeste versjonen som standard og ser etter oppdateringer ukentlig.

Hvis du vil fikse versjonen, kan du skrive `i18n.addon/toc@0.1.3` .

Oversettelseskommandolinje `i18n.site` vil installere konvensjonsfilen til plugin-pakken og deretter kjøre den.

De avtalte filnavnene er som følger

### htmIndex.js

`htmIndex.js` vil bli injisert til slutten av `.i18n/htm/index.js` .

Hvor `__CONF__` vil bli erstattet med navnet på gjeldende konfigurasjon (som `dev` eller `ol` ).

### afterTran.js

Den vil bli kalt opp etter at oversettelsen er fullført, og parameterne som sendes inn er som følger.

* `lang_li` : Språkliste, førstespråket er kildespråket
* `changed` : Modifiserte filer
* `root` : Prosjektrotkatalog

Returverdien er en ordbok, som f.eks

```json
{
  file:{
    //  path: txt, for example :
    // "_.json": "[]"
  }
}
```

`file` er utdatafillisten, `path` er filbanen og `txt` er filinnholdet.

## Innebygde Funksjoner

Den innebygde `js` kjøretiden er basert på sekundær utvikling av [boa](https://github.com/boa-dev/boa) og de innebygde funksjonene er som følger :

* `wPath(path, txt)` : Skriv til fil
* `rTxt(path)` : Les tekstfil
* `rBin(path)` : Les binær fil
* `rDir(dirpath)` : Les katalogen, returverdien er en array : , filliste

## Utviklingsguide

Plug-in utvikling kan være en referanse [https://github.com/i18n-site/addon](https://github.com/i18n-site/addon)