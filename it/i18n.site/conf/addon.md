# Collegare

I plug-in possono essere configurati in `.i18n/conf.yml` , come ad esempio:

```yml
addon:
  - i18n.addon/toc
```

## Plug-in Ufficiale

* `i18n.addon/toc` : Indice della rubrica
  Genera un indice di directory pari `json` in base a `TOC` , abilitato per impostazione predefinita

* `i18n.addon/mouse` : Effetti del mouse

## Convenzione Sui Nomi Dei File

I plug-in sono tutti pacchetti `npm` .

Il pacchetto corrispondente a `i18n.addon/toc` sopra è [https://www.npmjs.com/package/@i18n.addon/toc](https://www.npmjs.com/package/@i18n.addon/toc)

Il plugin utilizza la versione più recente per impostazione predefinita e controlla gli aggiornamenti settimanalmente.

Se vuoi correggere la versione, puoi scrivere `i18n.addon/toc@0.1.3` .

La riga di comando di traduzione `i18n.site` installerà il file convenzione del pacchetto plug-in e quindi lo eseguirà.

I nomi dei file concordati sono i seguenti

### htmIndex.js

`htmIndex.js` verrà iniettato alla fine di `.i18n/htm/index.js` .

Dove `__CONF__` verrà sostituito con il nome della configurazione corrente (come `dev` o `ol` ).

### afterTran.js

Verrà chiamato una volta completata la traduzione e i parametri passati sono i seguenti.

* `lang_li` : Elenco lingue, la prima lingua è la lingua di partenza
* `changed` : File modificati
* `root` : Directory principale del progetto

Il valore restituito è un dizionario, come

```json
{
  file:{
    //  path: txt, for example :
    // "_.json": "[]"
  }
}
```

`file` è l'elenco dei file di output, `path` è il percorso del file e `txt` è il contenuto del file.

## Funzioni Integrate

Il runtime `js` integrato si basa sullo sviluppo secondario di [boa](https://github.com/boa-dev/boa) e le funzioni integrate sono le seguenti :

* `wPath(path, txt)` : Scrivi su file
* `rTxt(path)` : Leggi il file di testo
* `rBin(path)` : Leggi il file binario
* `rDir(dirpath)` : Leggi la directory, il valore restituito è un array : , elenco di file

## Guida Allo Sviluppo

Lo sviluppo di plug-in può essere un riferimento [https://github.com/i18n-site/addon](https://github.com/i18n-site/addon)