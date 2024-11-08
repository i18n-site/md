# Connector

Els connectors es poden configurar en `.i18n/conf.yml` , com ara:

```yml
addon:
  - i18n.addon/toc
```

## Connector Oficial

* `i18n.addon/toc` : Índex del directori
  Genereu un índex de directoris d' `json` basat en `TOC` , activat per defecte

* `i18n.addon/mouse` : Efectes del ratolí

## Convenció De Nom De Fitxer

Els connectors són tots `npm` paquets.

El paquet corresponent al `i18n.addon/toc` anterior és [https://www.npmjs.com/package/@i18n.addon/toc](https://www.npmjs.com/package/@i18n.addon/toc)

El connector utilitza la darrera versió de manera predeterminada i comprova si hi ha actualitzacions setmanals.

Si voleu arreglar la versió, podeu escriure `i18n.addon/toc@0.1.3` .

La línia d'ordres de traducció `i18n.site` instal·larà el fitxer de convencions del paquet de connectors i després l'executarà.

Els noms de fitxer acordats són els següents

### htmIndex.js

`htmIndex.js` s'injectarà fins al final de `.i18n/htm/index.js` .

On `__CONF__` es substituirà pel nom de la configuració actual (com ara `dev` o `ol` ).

### afterTran.js

Es cridarà un cop s'hagi completat la traducció i els paràmetres passats són els següents.

* `lang_li` Llista d' : , el primer idioma és l'idioma d'origen
* `changed` : Fitxers modificats
* `root` Directori arrel : projecte

El valor de retorn és un diccionari, com ara

```json
{
  file:{
    //  path: txt, for example :
    // "_.json": "[]"
  }
}
```

`file` és la llista de fitxers de sortida, `path` és la ruta del fitxer i `txt` és el contingut del fitxer.

## Funcions Integrades

El temps d'execució `js` integrat es basa en el desenvolupament secundari de [boa](https://github.com/boa-dev/boa) i les funcions integrades són les següents :

* `wPath(path, txt)` : Escriu al fitxer
* `rTxt(path)` : Llegir el fitxer de text
* `rBin(path)` : Llegir fitxer binari
* `rDir(dirpath)` Llegiu el directori, el valor : retorn és una llista : , llista de fitxers

## Guia De Desenvolupament

El desenvolupament de connectors pot ser una referència [https://github.com/i18n-site/addon](https://github.com/i18n-site/addon)