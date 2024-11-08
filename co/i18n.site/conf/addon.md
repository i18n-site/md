# Cunnettà Si

I plug-in ponu esse cunfigurati in `.i18n/conf.yml` , cum'è:

```yml
addon:
  - i18n.addon/toc
```

## Plugin Ufficiale

* `i18n.addon/toc` : Indice di annuariu
  Generate l'indice di repertoriu di `json` basatu annantu à `TOC` , attivatu per difettu

* `i18n.addon/mouse` : Effetti di u mouse

## Cunvenzione Di Nome Di File

I plug-in sò tutti i pacchetti `npm` .

U pacchettu chì currisponde à `i18n.addon/toc` sopra hè [https://www.npmjs.com/package/@i18n.addon/toc](https://www.npmjs.com/package/@i18n.addon/toc)

U plugin usa l'ultima versione per difettu è verifica l'aghjurnamenti settimanali.

Se vulete riparà a versione, pudete scrive `i18n.addon/toc@0.1.3` .

A linea di cummanda di traduzzione `i18n.site` installerà u schedariu di cunvenzione di u pacchettu plug-in è poi eseguisce.

I nomi di i schedari accunsentiti sò i seguenti

### htmIndex.js

`htmIndex.js` serà injected à a fine di `.i18n/htm/index.js` .

Induve `__CONF__` serà rimpiazzatu cù u nome di a cunfigurazione attuale (cum'è `dev` o `ol` ).

### afterTran.js

Serà chjamatu dopu chì a traduzzione hè finita, è i paràmetri passati sò i seguenti.

* `lang_li` Lista di : , a prima lingua hè a lingua fonte
* `changed` : File mudificati
* `root` : U cartulare di u prughjettu

U valore di ritornu hè un dizziunariu, cum'è

```json
{
  file:{
    //  path: txt, for example :
    // "_.json": "[]"
  }
}
```

`file` hè a lista di u schedariu di output, `path` hè a strada di u schedariu, è `txt` hè u cuntenutu di u schedariu.

## Funzioni Integrate

U runtime `js` integratu hè basatu annantu à u sviluppu secundariu [boa](https://github.com/boa-dev/boa) è e funzioni integrate sò i seguenti :

* `wPath(path, txt)` : Scrivite in u schedariu
* `rTxt(path)` : Leghjite u schedariu di testu
* `rBin(path)` : Leghjite u schedariu binariu
* `rDir(dirpath)` : Leghjite u cartulare, u valore di ritornu hè un array : list, file list

## Guida Di Sviluppu

U sviluppu di plug-in pò esse un riferimentu [https://github.com/i18n-site/addon](https://github.com/i18n-site/addon)