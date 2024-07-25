# Različica Projekta

Za primer vzemite demo projekt:

`en/demo2/v` je številka trenutne različice projekta, ki bo prikazana desno od imena projekta v obrisu stranske vrstice.

<img src="https://p.3ti.site/1721290486.avif" width="320px">

`en/` je koda jezika, ki ustreza `.i18n/conf.yml` konfiguriranemu izvornemu jeziku prevoda.

Če vaš izvorni jezik ni angleščina, je treba datoteko `v` postaviti v imenik projekta vašega izvornega jezika. 

Možnost brskanja po zgodovinskih različicah dokumentov je v razvoju.

Priporočljivo je, da spremenite številko različice dokumenta samo ob izdaji večjih posodobitev (kot je `v1` , `v2` ), da preprečite natrpanje strani, ki jih indeksirajo iskalniki, zaradi preveč številk različice.

## Uporabite Prazne Datoteke `v` , Da Razdelite Indekse Datotek Za Različne Projekte

V predstavitvenem projektu lahko poleg `en/demo2/v` vidite tudi, da je vsebina imenikov `en/blog` in `en/demo1` prazna `v` datoteke.

Prazno `v` ne bo prikazano v orisu stranske vrstice, vendar dokler datoteka `v` obstaja, bo ustvarjen neodvisen indeks za datoteke v imeniku in podimenikih.

Z razdelitvijo indeksov različnih projektov se lahko izognete počasnemu dostopu, ki ga povzroča nalaganje indeksa vseh datotek na celotnem spletnem mestu hkrati.

Na primer, v predstavitvenem projektu : ustrezna indeksna [https://unpkg.com/i18n.site/en/blog.json](https://unpkg.com/i18n.site/en/blog.json) `blog`

