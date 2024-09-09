# Plugin

Plugins kan konfigureres i `.i18n/conf.yml`, såsom:

```yml
addon:
  - i18n.addon/toc
```

## Officielle plugins

* `i18n.addon/toc` : Katalogindeks
  Generer katalogindeks i `json` baseret på `TOC`, som standard aktiveret

* `i18n.addon/mouse`: Museeffekter

## Filnavngivenhed

Plugins er alle `npm`-pakker.

Den pakke, der svarer til `i18n.addon/toc` ovenfor, er [https://www.npmjs.com/package/@i18n.addon/toc](https://www.npmjs.com/package/@i18n.addon/toc).

Plugins bruger som standard den nyeste version og tjekker for opdateringer ugentligt.

Hvis du vil fastsætte en version, kan du skrive `i18n.addon/toc@0.1.3`.

Oversættelseskommandoen `i18n.site` installerer konventionelle filer for plugin-pakken og udfører derefter.

Konventionelle filnavne er som følger

### htmIndex.js

`htmIndex.js` vil blive indsat i slutningen af `.i18n/htm/index.js`.

Hvor `__CONF__` vil blive erstattet med navnet på den aktuelle konfiguration (f.eks. `dev` eller `ol`).

### afterTran.js

Dette vil blive kaldt efter oversættelsen er fuldført, og de indsendte parametre er som følger.

* `lang_li`: Sprogliste, hvor det første sprog er kildesproget
* `changed`: Ændrede filer
* `root`: Projektets rodmappe

Returværdien er en ordbog, f.eks

```json
{
  file:{
    //  path: txt, for example :
    // "_.json": "[]"
  }
}
```

`file` er listen over outputfiler, `path` er filsti, og `txt` er filindholdet.

## Indbyggede funktioner

Den indlejrede `js`-runtime er udviklet på basis af en二次udvikling af [boa](https://github.com/boa-dev/boa), og de indbyggede funktioner er som følger:

* `wPath(path, txt)`: Skriv til fil
* `rTxt(path)`: Læs tekstfil
* `rBin(path)`: Læs binær fil
* `rDir(dirpath)`: Læs mappe, returværdien er en array: liste over mapper, liste over filer

## Udviklingsvejledning

Plugin-udvikling kan referere til [https://github.com/i18n-site/addon](https://github.com/i18n-site/addon)