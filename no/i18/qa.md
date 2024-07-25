# Vanlig Problem

## Legge Til Eller Slette Linjer I Oversettelsen, Noe Som Resulterer I Forvirring I Oversettelsen

Husk **at antall linjer i oversettelsen må samsvare med linjene i originalteksten** .

Det vil si at når du manuelt justerer oversettelsen, **ikke legg til eller slett linjer i oversettelsen** , ellers vil kartleggingsforholdet mellom oversettelsen og originalteksten bli uordnet.

Hvis du ved et uhell legger til eller sletter en linje, og forårsaker forvirring, må du gjenopprette oversettelsen til versjonen før endringen, kjøre oversettelsen `i18` og hurtigbufre den riktige tilordningen.

Tilordningen mellom oversettelsen og den opprinnelige teksten er bundet til tokenet. Opprett en ny token i [i18n.site/token](//i18n.site/token) `.i18h/hash` og oversett igjen for å fjerne den forvirrende tilordningen (men dette vil føre til at alle manuelle justeringer av oversettelsen går tapt).

## `YAML` : Forhindre `HTML` Av Lenken Konverteres Til `Markdown`

Verdien av `YAML` vil bli behandlet som `MarkDown` for oversettelse.

Noen ganger er konverteringen av `HTML` `MarkDown` ikke det vi ønsker, for eksempel at `<a href="/">Home</a>` blir konvertert til `[Home](/)` .

Legg til et annet attributt enn `href` til `a` -taggen, for eksempel `<a class="A" href="/">Home</a>` , for å unngå denne konverteringen.

## `./I18n/Hash` Følgende Filer Er I Konflikt

Slett de motstridende filene og kjør Translate på nytt `i18`
