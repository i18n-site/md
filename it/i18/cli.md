# Spiegazione Dettagliata Dei Parametri Della Riga Di Comando

## `-P` Pulisci I File

`-p` Oppure `--purge` pulirà i file che esistono in ciascuna directory di traduzione ma non esistono nella directory della lingua di origine.

Perché quando si scrivono documenti, i nomi dei file Markdown vengono spesso modificati, con il risultato che nella directory di traduzione ci sono molti file vecchi e abbandonati.

Utilizzare questo parametro per pulire i file che dovrebbero essere eliminati nelle directory di altre lingue.

## `-D` Specificare La Directory Di Traduzione

Per impostazione predefinita, la directory tradotta è la directory in cui si trova il file corrente.

`-d` Oppure `--workdir` può specificare la directory di traduzione, ad esempio:

```
i18 -d ~/i18n/md
```

## Visualizza La `-H`

`-h` Oppure `--help` È possibile visualizzare la guida della riga di comando.