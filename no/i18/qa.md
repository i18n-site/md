# Frequente spørsmål

## Å legge til eller slette linjer i oversettelsen kan føre til forvirring i teksten

Husk at **antall linjer i oversettelsen må samsvare med linjene i originalteksten**.

Det betyr at når du manuelt justerer oversettelsen, **ikke legg til eller slett linjer**, ellers vil oversettelsens og originaltekstens korrespondanse bli forstyrret.

Hvis du ved et uhell legger til eller sletter en linje, og dette forårsaker forvirring, må du gjenopprette oversettelsen til versjonen før endring og kjøre `i18`-oversettelsen på nytt for å oppdatere riktig korrespondanse.

Oversettelsens korrespondanse med originalteksten er knyttet til tokenet. Opprett et nytt token på [i18n.site/token](//i18n.site/token), slett `.i18h/hash`, og oversett igjen for å fjerne forvirrende korrespondanser (men dette vil også slette alle manuelle justeringer av oversettelsen).

## `YAML`: Hvordan unngå at lenker i `HTML` blir konvertert til `Markdown`

`YAML`-verdier blir behandlet som `Markdown` når de oversettes.

Noen ganger er konverteringen fra `HTML` til `Markdown` ikke ønsket, for eksempel når `<a href="/">Home</a>` blir til `[Home](/)`.

Legg til et hvilket som helst attributt annet enn `href` i `a`-taggen, som `<a class="A" href="/">Home</a>`, for å unngå denne konverteringen.

## `./i18n/hash`-filkonflikter nedenfor

Slett de konflikterende filene og kjør `i18`-oversettelsen på nytt.