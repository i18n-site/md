# Plugin

I plugin possono essere configurati nel file `.i18n/conf.yml`, come ad esempio:

```yml
addon:
  - i18n.addon/toc
```

## Plugin ufficiali

* `i18n.addon/toc`: indice dei contenuti
  Genera un indice del sommario in `json` in base al `TOC`, abilitato per impostazione predefinita

* `i18n.addon/mouse`: Effetti del mouse

## Convenzione dei nomi dei file

I plugin sono tutti pacchetti `npm`.

Il pacchetto corrispondente a `i18n.addon/toc` sopra è [https://www.npmjs.com/package/@i18n.addon/toc](https://www.npmjs.com/package/@i18n.addon/toc)

Il plugin utilizza la versione più recente per impostazione predefinita e verifica gli aggiornamenti ogni settimana.

Se si desidera specificare una versione fissa, è possibile scrivere `i18n.addon/toc@0.1.3`.

Il comando di traduzione `i18n.site` installerà i file convenzionali del pacchetto plugin e poi lo eseguirà.

I nomi dei file convenzionali sono i seguenti

### htmIndex.js

`htmIndex.js` verrà integrato alla fine di `.i18n/htm/index.js`.

In cui `__CONF__` verrà sostituito con il nome della configurazione corrente (ad esempio `dev` o `ol`).

### afterTran.js

Verrà chiamato dopo che la traduzione è completata, con i seguenti parametri.

* `lang_li`: elenco delle lingue, con la prima lingua che è la lingua di origine
* `changed`: file modificati
* `root`: directory radice del progetto

Il valore restituito è un dizionario, come

```json
{
  file:{
    //  path: txt, for example :
    // "_.json": "[]"
  }
}
```

`file` è l'elenco dei file in uscita, `path` è il percorso del file e `txt` è il contenuto del file.

## Funzioni integrate

Il runtime `js` integrato si basa sullo sviluppo secondario di [boa](https://github.com/boa-dev/boa) e le funzioni integrate sono le seguenti :

* `wPath(path, txt)`: scrive nel file
* `rTxt(path)`: legge il file di testo
* `rBin(path)`: legge il file binario
* `rDir(dirpath)`: Legge la directory, il valore restituito è un array: elenco delle directory, elenco dei file

## Guida per lo sviluppo

Lo sviluppo dei plugin può fare riferimento a [https://github.com/i18n-site/addon](https://github.com/i18n-site/addon)