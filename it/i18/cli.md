# Spiegazione Dettagliata dei Parametri della Riga di Comando

## `-p` Pulizia dei File

`-p` o `--purge` rimuoveranno i file presenti nelle directory delle traduzioni ma non più esistenti nella directory della lingua sorgente.

Poiché scrivere documenti spesso comporta variazioni nei nomi dei file Markdown, portando a un accumulo di vecchi file inutilizzati nelle directory delle traduzioni.

Utilizzando questo parametro, è possibile pulire i file che dovrebbero essere eliminati nelle directory delle altre lingue.

## `-d` Specifica la Directory di Traduzione

La directory di traduzione predefinita è quella in cui si trova il file corrente.

`-d` o `--workdir` possono essere utilizzati per specificare la directory di traduzione, ad esempio:

```
i18 -d ~/i18n/md
```

## `-h` Visualizza l'Help

`-h` o `--help` per visualizzare l'aiuto della riga di comando.