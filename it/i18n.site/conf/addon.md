# Plugin

È possibile configurare i plugin in `.i18n/conf.yml`, come ad esempio:

```yml
addon:
  - i18n.addon/toc
```

## Plugin ufficiali

* `i18n.addon/toc` : Indice del sommario
  Genera un indice di sommario in `json` basato sul `TOC`, abilitato per impostazione predefinita

* `i18n.addon/mouse`: Effetti del mouse

## Convenzione dei nomi dei file

I plugin sono tutti pacchetti `npm`.

Il pacchetto corrispondente a `i18n.addon/toc` è [https://www.npmjs.com/package/@i18n.addon/toc](https://www.npmjs.com/package/@i18n.addon/toc).

Il plugin utilizza la versione più recente per impostazione predefinita e verifica gli aggiornamenti ogni settimana.

Se si desidera fissare una versione, è possibile scrivere `i18n.addon/toc@0.1.3`.

Il comando di traduzione `i18n.site` installerà i file convenzionali del pacchetto plugin e poi eseguirà.

I nomi dei file convenzionali sono i seguenti:

### htmIndex.js

`htmIndex.js` verrà iniettato alla fine di `.i18n/htm/index.js`.

DOIove `__CONF__` verrà sostituito con il nome della configurazione corrente (ad esempio `dev` o `ol`).

### afterTran.js

verrà chiamato dopo che la traduzione è stata completata, con i seguenti parametri.

* `lang_li`: elenco delle lingue, la prima lingua è la lingua di partenza
* `changed`: file modificati
* `root`: directory radice del progetto

Il valore di ritorno è un dizionario, come ad esempio:

```json
{
  file:{
    //  path: txt, for example :
    // "_.json": "[]"
  }
}
```

`file` è l'elenco dei file in output, `path` è il percorso del file, `txt` è il contenuto del file.

## Funzioni integrate

Il runtime `js` integrato è basato su una二次开发 di [boa](https://github.com/boa-dev/boa), e le funzioni incorporate sono come segue:

* `wPath(path, txt)`: scrive nel file
* `rTxt(path)`: legge il file di testo
* `rBin(path)`: legge il file binario
* `rDir(dirpath)`: legge la directory, restituendo un array: elenco delle directory, elenco dei file

## Guida per lo sviluppo

Lo sviluppo dei plugin può fare riferimento a [https://github.com/i18n-site/addon](https://github.com/i18n-site/addon)