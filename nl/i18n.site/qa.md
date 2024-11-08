# Veelgestelde Vragen

## Per Ongeluk Verwijderd `.i18n/v` , Waardoor Pakket `npm` Niet Kan Worden Gepubliceerd

De historische versie uitgegeven door pakket `npm` wordt opgeslagen in `.i18n/v/ol/v.hash` .

Als u per ongeluk `.i18n/v/ol` wordt pakket `npm` niet vrijgegeven.

Zoek op dit moment eerst het versienummer van de laatste releaseversie van uw project in [npmjs.com](//npmjs.com) bijvoorbeeld `0.1.9` .

Raadpleeg vervolgens `bash` hieronder om het bestand aan te maken.

```bash
mkdir -p .i18n/v/ol
echo @0.1.9 > .i18n/v/ol/v.hash
```

Houd er rekening mee dat bij het op deze manier repareren de bestandsgeschiedenis verloren gaat, waardoor het onmogelijk wordt om de volgende release stapsgewijs bij te werken, en dat alle inhoud één keer opnieuw wordt verpakt en geüpload.