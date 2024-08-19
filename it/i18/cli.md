# Spiegazione Dettagliata dei Parametri della Riga di Comando

## `-p` per Pulizia dei File

`-p` o `--purge` rimuoveranno i file presenti nelle directory di traduzione ma non nelle directory della lingua sorgente.

Poiché scrivere documenti spesso comporta variazioni nei nomi dei file Markdown, portando a una presenza di molti vecchi file abbandonati nelle directory di traduzione.

Utilizzando questo parametro, è possibile pulire i file che dovrebbero essere eliminati nelle directory di altre lingue.

## `-d` per Specificare la Directory di Traduzione

La directory di traduzione predefinita è quella in cui si trova il file corrente.

`-d` o `--workdir` possono essere utilizzati per specificare la directory di traduzione, ad esempio:

```
i18 -d ~/i18n/md
```

## `-h` per Visualizzare l'Aiuto

`-h` o `--help` per visualizzare l'aiuto della riga di comando.