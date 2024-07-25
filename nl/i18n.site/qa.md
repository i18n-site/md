# Vaak Voorkomend Probleem

## Per Ongeluk Verwijderd `.i18n/V` , Waardoor Het Pakket `Npm` Niet Kon Worden Gepubliceerd

Historische versie van `npm` pakketrelease is opgeslagen in `.i18n/v/ol/v.hash`

Als u per ongeluk `.i18n/v/ol` wordt het `npm` -pakket niet gepubliceerd.

Zoek op dit moment eerst het versienummer van de laatste releaseversie van uw project in [npmjs.com](//npmjs.com) `0.1.9`

Raadpleeg vervolgens het onderstaande `bash` Create-bestand.

```bash
mkdir -p .i18n/v/ol
echo @0.1.9 > .i18n/v/ol/v.hash
```

Houd er rekening mee dat bij het op deze manier repareren de bestandsgeschiedenis verloren gaat, waardoor het onmogelijk wordt om de volgende release stapsgewijs bij te werken, en dat alle inhoud één keer opnieuw wordt verpakt en geüpload.

