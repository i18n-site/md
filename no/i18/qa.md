# Frequente spørsmål

## Å legge til eller slette linjer i oversettelsen kan føre til forvirring

Husk at **antall linjer i oversettelsen må være identisk med originaltekstens linjer**

Det betyr at når du manuelt justerer oversettelsen, **ikke legg til eller slett linjer**, ellers vil oversettelsens og originaltekstens korrespondanse bli forstyrret

Hvis du ved et uhell legger til eller sletter en linje, og dette forårsaker forvirring, gjenopprett oversettelsen til versjonen før endring og kjør `i18` oversettelsen på nytt for å oppdatere riktig korrespondanse

Oversettelsens korrespondanse er bundet til tokenet. Opprett et nytt token på [i18n.site/token](//i18n.site/token), slett `.i18h/hash`, og oversett på nytt for å fjerne forvirret korrespondanse (men dette vil også slette alle manuelle justeringer)

## `YAML`: Hvordan unngå at lenker i `HTML` blir konvertert til `Markdown`

`YAML`-verdier behandles som `Markdown` for oversettelse

Noen ganger er ikke konverteringen fra `HTML` til `Markdown` ønsket, for eksempel `<a href="/">Home</a>` blir til `[Home](/)`

Legg til et hvilket som helst attributt annet enn `href` i `a`-taggen, som `<a class="A" href="/">Home</a>`, for å unngå denne konverteringen

## `./i18n/hash`-filkonflikter

Slett de konflikterende filene og kjør `i18`-oversettelsen på nytt