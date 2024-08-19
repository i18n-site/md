# Domande Frequenti

## Eliminazione accidentale di `.i18n/v`, che impedisce la pubblicazione del pacchetto `npm`

In `.i18n/v/ol/v.hash` sono conservate le versioni storiche dei rilasci del pacchetto `npm`.

Se elimini accidentalmente `.i18n/v/ol`, non potrai pubblicare il pacchetto `npm`.

A questo punto, innanzitutto individua il numero di versione della tua ultima versione di progetto su [npmjs.com](//npmjs.com), ad esempio `0.1.9`.

Successivamente, segui il seguente `bash` per creare il file.

```bash
mkdir -p .i18n/v/ol
echo @0.1.9 > .i18n/v/ol/v.hash
```

Nota che riparare in questo modo comporterà la perdita della cronologia dei file, rendendo impossibile un aggiornamento incrementale alla prossima versione; tutto il contenuto将被重新打包并上传 nuovamente.