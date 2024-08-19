# Faq

## Uheldigvis slettet `.i18n/v`, hvilket forhindrede `npm`-pakken i at blive publiceret

`.i18n/v/ol/v.hash` indeholder historikken for `npm`-pakkeudgivelser.

Hvis du ved et uheld sletter `.i18n/v/ol`, vil `npm`-pakken ikke kunne publiceres.

På dette tidspunkt skal du først finde versionsnummeret for den seneste udgivelsesversion af dit projekt på [npmjs.com](//npmjs.com), for eksempel `0.1.9`.

Soeg derefter nedenstående `bash` for at oprette filen.

```bash
mkdir -p .i18n/v/ol
echo @0.1.9 > .i18n/v/ol/v.hash
```

Bemærk, at denne reparation vil medføre tab af filhistorik, hvilket gør det umuligt at foretage trinvis opdatering ved næste udgivelse, og al indhold vil blive genpakket og uploadet én gang.