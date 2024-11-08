# Faq

## Slettet Ved Et Uheld `.i18n/v` , Hvilket Medførte, at Pakke `npm` Ikke Blev Offentliggjort

Den historiske version frigivet af pakke `npm` er gemt i `.i18n/v/ol/v.hash` .

Hvis du ved et uheld sletter `.i18n/v/ol` frigives pakke `npm` ikke.

På dette tidspunkt skal du først finde versionsnummeret på den sidste udgivelsesversion af dit projekt i [npmjs.com](//npmjs.com) for eksempel `0.1.9` .

Se derefter `bash` nedenfor for at oprette filen.

```bash
mkdir -p .i18n/v/ol
echo @0.1.9 > .i18n/v/ol/v.hash
```

Bemærk, at reparation på denne måde vil miste filhistorikken, hvilket gør det umuligt at opdatere den næste udgivelse trinvist, og alt indhold vil blive ompakket og uploadet én gang.