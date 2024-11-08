# Plug-In

Ang mga plug-in mahimong ma-configure sa `.i18n/conf.yml` , sama sa:

```yml
addon:
  - i18n.addon/toc
```

## Opisyal Nga Plug-In

* `i18n.addon/toc` :
  Paghimo og indeks sa direktoryo nga `json` base sa `TOC` , gipalihok pinaagi sa default

* `i18n.addon/mouse` : Mga epekto sa mouse

## Kombensyon Sa Ngalan Sa File

Ang mga plug-in kay `npm` nga pakete.

Ang pakete nga katumbas sa `i18n.addon/toc` sa ibabaw mao ang [https://www.npmjs.com/package/@i18n.addon/toc](https://www.npmjs.com/package/@i18n.addon/toc)

Ang plugin naggamit sa pinakabag-o nga bersyon sa default ug nagsusi sa mga update kada semana.

Kung gusto nimo ayohon ang bersyon, mahimo nimong isulat ang `i18n.addon/toc@0.1.3` .

Ang translation command line `i18n.site` mag-install sa convention file sa plug-in package ug dayon ipatuman kini.

Ang gikasabutan nga mga ngalan sa file mao ang mosunod

### htmIndex.js

`htmIndex.js` ma-injected hangtod sa katapusan sa `.i18n/htm/index.js` .

Diin `__CONF__` ilisan sa ngalan sa kasamtangang configuration (sama sa `dev` o `ol` ).

### afterTran.js

Tawgon kini human makompleto ang paghubad, ug ang mga parameter nga gipasa mao ang mosunod.

* `lang_li` : Listahan sa pinulongan, ang unang pinulongan mao ang tinubdan nga pinulongan
* `changed` : Gibag-o nga mga file
* `root` : Direktoryo sa gamut sa proyekto

Ang bili sa pagbalik usa ka diksyonaryo, sama sa

```json
{
  file:{
    //  path: txt, for example :
    // "_.json": "[]"
  }
}
```

`file` ang lista sa output file, `path` ang agianan sa file, ug ang `txt` ang sulud sa file.

## Built-in Nga Mga Gimbuhaton

Ang built-in nga `js` runtime : sa secondary development sa [boa](https://github.com/boa-dev/boa)

* `wPath(path, txt)` : Pagsulat sa file
* `rTxt(path)` : Basaha ang text file
* `rBin(path)` : Basaha ang binary file
* `rDir(dirpath)` : Basaha ang direktoryo, ang kantidad sa pagbalik usa ka lista sa : , lista sa file

## Giya Sa Pag-Uswag

Ang pag-uswag sa plug-in mahimong usa ka pakisayran [https://github.com/i18n-site/addon](https://github.com/i18n-site/addon)