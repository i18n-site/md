# Ofte stilte spørsmål

## Uaktsomt slettet `.i18n/v`, noe som førte til at `npm`-pakken ikke kunne publiseres

`.i18n/v/ol/v.hash` inneholder historikken for publisering av `npm`-pakken.

Hvis du ved et uhell sletter `.i18n/v/ol`, vil `npm`-pakken ikke kunne publiseres.

På dette tidspunktet finner du først versjonsnummeret til den siste publiserte versjonen av prosjektet ditt på [npmjs.com](//npmjs.com), for eksempel `0.1.9`.

Soek deretter til `bash`-skriptet nedenfor for å opprette filen.

```bash
mkdir -p .i18n/v/ol
echo @0.1.9 > .i18n/v/ol/v.hash
```

Merke seg at denne reparasjonsmetoden vil føre til tap av filhistorikk, noe som gjør det umulig å utføre inkrementelle oppdateringer ved neste publisering, og alt innhold vil bli pakket og lastet opp på nytt.