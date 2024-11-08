# Plug-In

Plug-ins kan konfigureres i `.i18n/conf.yml` , såsom:

```yml
addon:
  - i18n.addon/toc
```

## Officielt Plug-In

* `i18n.addon/toc` : Directory indeks
  Generer biblioteksindeks på `json` baseret på `TOC` , aktiveret som standard

* `i18n.addon/mouse` : Museffekter

## Filnavnekonvention

Plug-ins er alle `npm` pakker.

Pakken svarende til `i18n.addon/toc` ovenfor er [https://www.npmjs.com/package/@i18n.addon/toc](https://www.npmjs.com/package/@i18n.addon/toc)

Pluginnet bruger som standard den nyeste version og tjekker for opdateringer ugentligt.

Hvis du vil rette versionen, kan du skrive `i18n.addon/toc@0.1.3` .

Oversættelseskommandolinje `i18n.site` vil installere konventionsfilen for plug-in-pakken og derefter udføre den.

De aftalte filnavne er som følger

### htmIndex.js

`htmIndex.js` vil blive injiceret til slutningen af `.i18n/htm/index.js` .

Hvor `__CONF__` vil blive erstattet med navnet på den aktuelle konfiguration (såsom `dev` eller `ol` ).

### afterTran.js

Det vil blive kaldt, når oversættelsen er fuldført, og de indgivne parametre er som følger.

* `lang_li` : Sprogliste, det første sprog er kildesproget
* `changed` : Ændrede filer
* `root` : Projektets rodmappe

Returværdien er en ordbog, som f.eks

```json
{
  file:{
    //  path: txt, for example :
    // "_.json": "[]"
  }
}
```

`file` er outputfillisten, `path` er filstien, og `txt` er filindholdet.

## Indbyggede Funktioner

Den indbyggede `js` runtime er baseret på sekundær udvikling af [boa](https://github.com/boa-dev/boa) og de indbyggede funktioner er som følger :

* `wPath(path, txt)` : Skriv til fil
* `rTxt(path)` : Læs tekstfil
* `rBin(path)` : Læs binær fil
* `rDir(dirpath)` : Læs biblioteket, returværdien er en matrix : , filliste

## Udviklingsvejledning

Plug-in udvikling kan være en reference [https://github.com/i18n-site/addon](https://github.com/i18n-site/addon)