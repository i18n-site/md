# Ofte stilte spørsmål

## Oversettelse av linjer som legges til eller slettes, noe som fører til forvirring i teksten

Husk **at antall linjer i oversettelsen må samsvare med linjene i originalteksten**.

Det vil si at når du manuelt justerer oversettelsen, **ikke legg til eller slett linjer**.

Hvis du ved et uhell legger til eller sletter linjer, og dette forårsaker forvirring, gjenopprett oversettelsen til versjonen før endring og kjør `i18` på nytt for å oppdatere riktig kartlegging.

Kartleggingen mellom oversettelsen og originalteksten er bundet til tokenet. Opprett et nytt token på [i18n.site/token](//i18n.site/token), slett `.i18h/hash`, og oversett igjen for å fjerne feilkartlegging (men dette vil også slette alle manuelle justeringer).

## `YAML` : Hvordan Unngå at Lenke `HTML` Konverteres Til `Markdown`

En verdi på `YAML` behandles som `MarkDown` for oversettelse.

Noen ganger er konverteringen fra `HTML` → `MarkDown` ikke det vi ønsker, for eksempel at `<a href="/">Home</a>` blir konvertert til `[Home](/)` .

Legg til et hvilket som helst attributt annet enn `href` i `a`-taggen, som `<a class="A" href="/">Home</a>`, for å unngå denne konverteringen.

## Filkonflikter under `./i18n/hash`

Slett de konflikterende filene og kjør `i18`-oversettelsen på nytt.