# Faq

## Legge Til Eller Slette Linjer I Oversettelsen, Noe Som Resulterer I Forvirring I Oversettelsen

> [!WARN]
> Husk at **antall linjer i oversettelsen må samsvare med linjene i originalteksten** .
> Det vil si at når du manuelt justerer oversettelsen, **ikke legg til eller slett linjer i oversettelsen** , ellers vil kartleggingsforholdet mellom oversettelsen og originalteksten bli uordnet.

Hvis du ved et uhell legger til eller sletter en linje, og forårsaker forvirring, må du gjenopprette oversettelsen til versjonen før endring, kjør `i18` oversettelse på nytt, og cache den riktige kartleggingen på nytt.

Tilordningen mellom oversettelsen og den opprinnelige teksten er bundet til tokenet Opprett et nytt token i [i18n.site/token](//i18n.site/token) slett `.i18h/hash` og oversett igjen for å fjerne den forvirrende mappingen (men dette vil føre til at alle manuelle justeringer av oversettelsen går tapt).

## `YAML` : Slik Unngår Du at Lenke `HTML` Konverteres Til `Markdown`

En verdi på `YAML` behandles som `MarkDown` for oversettelse.

Noen ganger er konverteringen fra `HTML` → `MarkDown` ikke det vi ønsker, for eksempel at `<a href="/">Home</a>` blir konvertert til `[Home](/)` .

Hvis du legger til et annet attributt enn `href` i `a` -taggen, for eksempel `<a class="A" href="/">Home</a>` , kan du unngå denne konverteringen.

## `./i18n/hash` Filkonflikter Nedenfor

Slett de motstridende filene og kjør `i18` -oversettelsen på nytt.