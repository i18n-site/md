# Različica Projekta

Za primer vzemite demo projekt:

`en/demo2/v` je trenutna številka različice projekta, ki bo prikazana desno od imena projekta v orisu stranske vrstice.

<img src="https://p.3ti.site/1721290486.avif" width="320px">

Tukaj je `en/` jezikovna koda, ki ustreza izvornemu jeziku prevoda, ki ga konfigurira `.i18n/conf.yml` .

Če vaš izvorni jezik ni angleščina, je treba datoteko `v` postaviti v projektni imenik vašega izvornega jezika.

Možnost brskanja po zgodovinskih različicah dokumentov je v razvoju.

Priporočljivo je, da spremenite številko različice dokumenta le, ko so izdane večje posodobitve (kot je `v1` , `v2` ), da preprečite, da bi preveč številk različice povzročilo nered na straneh, ki jih indeksirajo iskalniki.

## Uporabite Prazne Datoteke `v` , Da Razdelite Indekse Datotek Različnih Projektov

V predstavitvenem projektu lahko poleg `en/demo2/v` vidite tudi, da so prazne datoteke `v` v imenikih `en/blog` in `en/demo1` .

Prazna `v` ne bo prikazana v orisu stranske vrstice, a dokler obstaja datoteka `v` , bo ustvarjen neodvisen indeks za datoteke v imeniku in podimenikih.

Z razdelitvijo indeksov različnih projektov se lahko izognete počasnemu dostopu, ki ga povzroča nalaganje indeksa vseh datotek na celotnem spletnem mestu hkrati.

Na primer, indeksna datoteka, ki ustreza `blog` v predstavitvenem projektu, je [https://unpkg.com/i18n.site/en/blog.json](https://unpkg.com/i18n.site/en/blog.json) :