# Veelgestelde Vragen

## Per ongeluk `.i18n/v` verwijderd, waardoor de `npm`-package niet kan worden gepubliceerd

In `.i18n/v/ol/v.hash` wordt de geschiedenis van de gepubliceerde versies van de `npm`-package opgeslagen.

Als u per ongeluk `.i18n/v/ol` verwijdert, kan de `npm`-package niet worden gepubliceerd.

In dit geval zoekt u eerst het versienummer van de laatste uitgebrachte versie van uw project op [npmjs.com](//npmjs.com), bijvoorbeeld `0.1.9`.

Vervolgens verwijst u naar het onderstaande `bash` om een bestand aan te maken.

```bash
mkdir -p .i18n/v/ol
echo @0.1.9 > .i18n/v/ol/v.hash
```

Let op: het repareren op deze manier resulteert in het verlies van de bestandsgeschiedenis, waardoor een incrementele update bij de volgende uitgave onmogelijk is; alle inhoud wordt opnieuw verpakt en geüpload.