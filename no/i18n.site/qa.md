# Vanlig Problem

## Slettet Ved Et Uhell `.i18n/V` Noe Som Førte Til at `Npm` -Pakken Ikke Ble Publisert

Den historiske versjonen av `npm` pakkeutgivelse er lagret i `.i18n/v/ol/v.hash`

Hvis du ved et uhell sletter `.i18n/v/ol` vil ikke `npm` -pakken bli publisert.

På dette tidspunktet finner du først versjonsnummeret til den siste utgivelsesversjonen av prosjektet ditt i for eksempel [npmjs.com](//npmjs.com) `0.1.9`

Se deretter `bash` Opprett filen nedenfor.

```bash
mkdir -p .i18n/v/ol
echo @0.1.9 > .i18n/v/ol/v.hash
```

Vær oppmerksom på at reparasjon på denne måten vil miste filhistorikken, noe som gjør det umulig å trinnvis oppdatere neste utgivelse, og alt innhold vil bli pakket om og lastet opp én gang.

