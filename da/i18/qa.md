# Faq

## Tilføjelse Eller Sletning Af Linjer I Oversættelsen, Hvilket Resulterer I Forvirring I Oversættelsen

> [!WARN]
> Husk, **at antallet af linjer i oversættelsen skal svare til linjerne i den originale tekst** .
> Det vil sige, når du manuelt justerer oversættelsen, **skal du ikke tilføje eller slette linjer i oversættelsen** , ellers vil kortlægningsforholdet mellem oversættelsen og den originale tekst blive uorden.

Hvis du ved et uheld tilføjer eller sletter en linje, hvilket forårsager forvirring, skal du gendanne oversættelsen til versionen før ændring, køre `i18` oversættelse igen og cache den korrekte kortlægning igen.

Kortlægningen mellem oversættelsen og den originale tekst er bundet til tokenet Opret et nyt token i [i18n.site/token](//i18n.site/token) slet `.i18h/hash` , og oversæt igen for at rydde den forvirrende mapping (men dette vil medføre, at alle manuelle justeringer af oversættelsen går tabt).

## `YAML` : Sådan Undgår Du at Link `HTML` Bliver Konverteret Til `Markdown`

En værdi på `YAML` behandles som `MarkDown` for oversættelse.

Nogle gange er konverteringen fra `HTML` → `MarkDown` ikke, hvad vi ønsker, såsom at `<a href="/">Home</a>` konverteres til `[Home](/)` .

Tilføjelse af en hvilken som helst anden attribut end `href` til `a` tagget, såsom `<a class="A" href="/">Home</a>` , kan undgå denne konvertering.

## `./i18n/hash` Fil Konflikter Nedenfor

Slet de modstridende filer, og kør `i18` oversættelsen igen.