# Plugin

In `.i18n/conf.yml` è possibile configurare i plugin, come ad esempio:

```yml
addon:
  - i18n.addon/toc
```

## Plugin ufficiali

* `i18n.addon/toc` : Indice del sommario
  Genera un indice del sommario in `json` in base al `TOC`, abilitato per impostazione predefinita

* `i18n.addon/mouse`: Effetti del mouse

## Convenzione dei nomi dei file

Tutti i plugin sono pacchetti `npm`.

Il pacchetto corrispondente a `i18n.addon/toc` è [https://www.npmjs.com/package/@i18n.addon/toc](https://www.npmjs.com/package/@i18n.addon/toc).

Il plugin utilizza la versione più recente per impostazione predefinita e verifica gli aggiornamenti ogni settimana.

Se si desidera fissare una versione, si può scrivere `i18n.addon/toc@0.1.3`.

Il comando di traduzione `i18n.site` installerà i file convenzionali del pacchetto plugin e poi li eseguirà.

I nomi dei file convenzionali sono i seguenti

### htmIndex.js

`htmIndex.js` verrà iniettato alla fine di `.i18n/htm/index.js`.

Dove `__CONF__` sarà sostituito con il nome della configurazione corrente (ad esempio `dev` o `ol`).

### afterTran.js

Verrà chiamato dopo che la traduzione è completata, con i seguenti parametri.

* `lang_li`: Elenco delle lingue, la prima lingua è la lingua di partenza
* `changed`: File modificati
* `root`: Directory radice del progetto

Il valore restituito è un dizionario, come

```json
{
  file:{
    //  path: txt, for example :
    // "_.json": "[]"
  }
}
```

`file` per l'elenco dei file in output, `path` per il percorso del file e `txt` per il contenuto del file.

## Funzioni integrate

Il runtime `js` integrato è basato su uno sviluppo secondario di [boa](https://github.com/boa-dev/boa) e le funzioni integrate sono le seguenti:

* `wPath(path, txt)`: Scrive su file
* `rTxt(path)`: Legge il file di testo
* `rBin(path)`: Legge il file binario
* `rDir(dirpath)`: Legge la directory, restituendo un array: elenco delle directory, elenco dei file

## Guida per lo sviluppo

Lo sviluppo dei plugin può fare riferimento a [https://github.com/i18n-site/addon](https://github.com/i18n-site/addon)