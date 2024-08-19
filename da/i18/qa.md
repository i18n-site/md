# Faq

## Tilføj eller slet linjer i oversættelsen, hvilket resulterer i en forvirret oversættelse

Husk, **oversættelsens linjenumre skal matche originaltekstens linjenumre**.

Det betyder, når du manuelt justerer oversættelsen, **må du ikke tilføje eller slette linjer**; ellers vil oversættelsens og originaltekstens korrespondance blive forvirret.

Hvis du ved et uheld tilføjer eller sletter en linje, hvilket forårsager forvirring, skal du gendanne oversættelsen til den tidligere version, køre `i18` oversættelsen igen og genoprette den korrekte kortlægning.

Oversættelsens og originaltekstens kortlægning er bundet til tokenet. Opret et nyt token på [i18n.site/token](//i18n.site/token), slet `.i18h/hash`, og oversæt igen for at rydde op i den forvirrede kortlægning (men dette vil medføre, at alle manuelle justeringer af oversættelsen går tabt).

## `YAML` : Sådan Undgår Du at Link `HTML` Konverteres Til `Markdown`

En værdi på `YAML` behandles som `MarkDown` for oversættelse.

Nogle gange er konverteringen fra `HTML` → `MarkDown` ikke, hvad vi ønsker, såsom at `<a href="/">Home</a>` konverteres til `[Home](/)` .

Tilføj en vilkårlig anden egenskab end `href` til `a`-tagget, f.eks. `<a class="A" href="/">Home</a>`, for at undgå denne konvertering.

## `./i18n/hash`-filkonflikter

Slet de konflikterende filer og kør `i18` oversættelsen igen.