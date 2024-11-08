# Faq

## Slettet `.i18n/v` Ved Et Uhell, Noe Som Førte Til at Pakke `npm` Ikke Ble Publisert

Den historiske versjonen utgitt av pakke `npm` er lagret i `.i18n/v/ol/v.hash` .

Hvis du ved et uhell sletter `.i18n/v/ol` vil ikke pakke `npm` bli utgitt.

På dette tidspunktet finner du først versjonsnummeret til den siste utgivelsesversjonen av prosjektet ditt i [npmjs.com](//npmjs.com) for eksempel `0.1.9` .

Se deretter `bash` nedenfor for å lage filen.

```bash
mkdir -p .i18n/v/ol
echo @0.1.9 > .i18n/v/ol/v.hash
```

Vær oppmerksom på at reparasjon på denne måten vil miste filhistorikken, noe som gjør det umulig å trinnvis oppdatere neste utgivelse, og alt innhold vil bli pakket om og lastet opp én gang.