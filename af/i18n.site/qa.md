# Algemene Probleem

## Per Ongeluk Uitgevee `.i18n/V` Wat Veroorsaak Dat Die `Npm` Pakket Nie Gepubliseer Word Nie

Die historiese weergawe van `npm` pakketvrystelling is gestoor in `.i18n/v/ol/v.hash`

As jy per ongeluk `.i18n/v/ol` sal die `npm` pakket nie gepubliseer word nie.

Soek nou eers die weergawenommer van die laaste weergawe van jou projek in [npmjs.com](//npmjs.com) byvoorbeeld `0.1.9`

Verwys dan na die `bash` Skep lêer hieronder.

```bash
mkdir -p .i18n/v/ol
echo @0.1.9 > .i18n/v/ol/v.hash
```

Let daarop dat herstel op hierdie manier die lêergeskiedenis sal verloor, wat dit onmoontlik maak om die volgende vrystelling inkrementeel op te dateer, en alle inhoud sal een keer herverpak en opgelaai word.

