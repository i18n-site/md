# Gereelde Vrae

## Per Ongeluk `.i18n/v` Uitgevee, Wat Veroorsaak Dat Pakket `npm` Nie Gepubliseer Word Nie

Die historiese weergawe wat deur pakket `npm` vrygestel is, word in `.i18n/v/ol/v.hash` gestoor.

As jy per ongeluk `.i18n/v/ol` sal pakket `npm` nie vrygestel word nie.

Soek nou eers die weergawenommer van die laaste vrystellingweergawe van jou projek in [npmjs.com](//npmjs.com) byvoorbeeld `0.1.9` .

Verwys dan na `bash` hieronder om die lêer te skep.

```bash
mkdir -p .i18n/v/ol
echo @0.1.9 > .i18n/v/ol/v.hash
```

Let daarop dat herstel op hierdie manier die lêergeskiedenis sal verloor, wat dit onmoontlik maak om die volgende vrystelling inkrementeel op te dateer, en alle inhoud sal een keer herverpak en opgelaai word.