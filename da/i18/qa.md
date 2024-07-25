# Almindeligt Problem

## Tilføjelse Eller Sletning Af Linjer I Oversættelsen, Hvilket Resulterer I Forvirring I Oversættelsen

Husk, **at antallet af linjer i oversættelsen skal svare til linjerne i den originale tekst** .

Det vil sige, når du manuelt justerer oversættelsen, **skal du ikke tilføje eller slette linjer i oversættelsen** , ellers vil kortlægningsforholdet mellem oversættelsen og den originale tekst blive uorden.

Hvis du ved et uheld tilføjer eller sletter en linje, hvilket forårsager forvirring, skal du gendanne oversættelsen til versionen før ændringen, køre oversættelsen `i18` og cache den korrekte kortlægning igen.

Kortlægningen mellem oversættelsen og den originale tekst er bundet til tokenet. Opret et nyt token i [i18n.site/token](//i18n.site/token) `.i18h/hash` og oversæt igen for at rydde den forvirrende mapping (men dette vil medføre, at alle manuelle justeringer af oversættelsen går tabt).

## `YAML` : Forhindrer Du Linkets `HTML` I at Blive Konverteret Til `Markdown`

Værdien af `YAML` vil blive behandlet som `MarkDown` for oversættelse.

Nogle gange er konverteringen af `HTML` `MarkDown` ikke, hvad vi ønsker, såsom at `<a href="/">Home</a>` bliver konverteret til `[Home](/)` .

Tilføj enhver anden attribut end `href` til `a` , såsom `<a class="A" href="/">Home</a>` , for at undgå denne konvertering.

## `./I18n/Hash` Følgende Filer Er I Konflikt

Slet de modstridende filer og kør Oversæt igen `i18`
