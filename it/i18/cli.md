# Spiegazione Dettagliata dei Parametri della Riga di Comando

## `-p` per pulizia dei file

`-p` o `--purge` rimuoveranno i file presenti nelle directory delle traduzioni ma non nella directory della lingua sorgente.

Poiché scrivere documenti spesso comporta variazioni nei nomi dei file Markdown, portando a una presenza di molti vecchi file abbandonati nelle directory delle traduzioni.

Utilizzando questo parametro, è possibile rimuovere i file che dovrebbero essere eliminati nelle directory delle altre lingue.

## `-d` per specificare la directory di traduzione

La directory di traduzione predefinita è quella in cui si trova il file corrente.

`-d` o `--workdir` possono essere utilizzati per specificare la directory di traduzione, ad esempio:

```
i18 -d ~/i18n/md
```

## `-h` per visualizzare l'aiuto

`-h` o `--help` per visualizzare l'aiuto della riga di comando.