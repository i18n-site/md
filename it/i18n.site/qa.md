# Domande Frequenti

## Eliminato Accidentalmente `.i18n/v` , Causando La Mancata Pubblicazione Del Pacchetto `npm`

La versione storica rilasciata dal pacchetto `npm` viene salvata in `.i18n/v/ol/v.hash` .

Se elimini accidentalmente `.i18n/v/ol` il pacchetto `npm` non verrà rilasciato.

A questo punto, trova innanzitutto il numero di versione dell'ultima versione del tuo progetto in [npmjs.com](//npmjs.com) ad esempio `0.1.9` .

Quindi fare riferimento a `bash` di seguito per creare il file.

```bash
mkdir -p .i18n/v/ol
echo @0.1.9 > .i18n/v/ol/v.hash
```

Tieni presente che la riparazione in questo modo perderà la cronologia dei file, rendendo impossibile l'aggiornamento incrementale della versione successiva e tutto il contenuto verrà riconfezionato e caricato una volta.