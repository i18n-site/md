# Spiegazione Dettagliata Dei Parametri Della Riga Di Comando

## `-p` File

`-p` o `--purge` cancelleranno i file che esistono in ciascuna directory di traduzione ma non esistono nella directory della lingua di origine.

Perché quando si scrivono documenti, i nomi dei file Markdown vengono spesso modificati, il che porta a molti file vecchi e abbandonati nella directory di traduzione.

Utilizzare questo parametro per pulire i file che dovrebbero essere eliminati nelle directory di altre lingue.

## `-d` Specifica La Directory Di Traduzione

Per impostazione predefinita, la directory tradotta è la directory in cui si trova il file corrente.

`-d` o `--workdir` possono specificare la directory di traduzione, come ad esempio:

```
i18 -d ~/i18n/md
```

## `-h` Visualizza La Guida

`-h` o `--help` per visualizzare la guida della riga di comando.