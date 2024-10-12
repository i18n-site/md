# Veelgestelde Vragen

## Per ongeluk `.i18n/v` verwijderd, waardoor de `npm`-package niet kan worden gepubliceerd

In `.i18n/v/ol/v.hash` wordt de geschiedenis van de gepubliceerde versies van de `npm`-package opgeslagen.

Als je per ongeluk `.i18n/v/ol` verwijdert, kan de `npm`-package niet worden gepubliceerd.

Zoek op dit moment eerst het versienummer van de laatste releaseversie van uw project in [npmjs.com](//npmjs.com) bijvoorbeeld `0.1.9` .

Vervolgens kun je de onderstaande `bash`-opdracht raadplegen om een bestand aan te maken.

```bash
mkdir -p .i18n/v/ol
echo @0.1.9 > .i18n/v/ol/v.hash
```

Let op: het op deze manier herstellen resulteert in het verlies van de bestandsgeschiedenis, waardoor een incrementele update bij de volgende uitgave niet mogelijk is; alle inhoud zal opnieuw worden gecompileerd en geüpload.