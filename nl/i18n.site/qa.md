# Veelgestelde Vragen

## Per ongeluk verwijderd `.i18n/v` , waardoor het `npm`-pakket niet kan worden gepubliceerd

De historische versies van het `npm`-pakket worden opgeslagen in `.i18n/v/ol/v.hash`.

Als je per ongeluk `.i18n/v/ol` verwijdert, kan het `npm`-pakket niet worden vrijgegeven.

Zoek op dit moment eerst het versienummer van de laatste releaseversie van uw project in [npmjs.com](//npmjs.com) bijvoorbeeld `0.1.9` .

Raadpleeg vervolgens de onderstaande `bash`-commando's om het bestand aan te maken.

```bash
mkdir -p .i18n/v/ol
echo @0.1.9 > .i18n/v/ol/v.hash
```

Let op: het repareren op deze manier resulteert in het verlies van de bestandsgeschiedenis, waardoor een incrementele update bij de volgende uitgave onmogelijk is; alle inhoud zal opnieuw worden gecompileerd en geüpload.