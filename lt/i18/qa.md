# Dažna Problema

## Vertimo Eilučių Pridėjimas Arba Ištrynimas, Dėl Kurio Vertimas Gali Būti Painus

Atminkite, **kad vertimo eilučių skaičius turi atitikti originalo teksto eilutes** .

Tai reiškia, kad rankiniu būdu koreguodami vertimą **nepridėkite ir neištrinkite vertimo eilučių** , kitaip bus sutrikęs vertimo ir originalaus teksto atvaizdavimo ryšys.

Jei netyčia pridėjote ar ištrinate eilutę, sukeldami painiavą, atkurkite vertimą į versiją, kuri buvo prieš modifikaciją, paleiskite vertimą `i18` ir iš naujo įrašykite teisingą susiejimą.

Vertimo ir originalaus teksto atvaizdas susietas su prieigos raktu. Sukurkite naują prieigos raktą [i18n.site/token](//i18n.site/token) ištrinkite `.i18h/hash` ir išverskite dar kartą, kad išvalytumėte painų susiejimą (tačiau bus prarasti visi neautomatiniai vertimo koregavimai).

## `YAML` : Neleisti Nuorodos `HTML` Konvertuoti Į `Markdown`

Vertė `YAML` bus traktuojama kaip `MarkDown` .

Kartais `HTML` → `MarkDown` konvertavimas nėra tai, ko norime, pavyzdžiui, `<a href="/">Home</a>` konvertuojamas į `[Home](/)` .

Pridėkite bet kokį atributą, išskyrus `href` prie `a` , pvz., `<a class="A" href="/">Home</a>` , kad išvengtumėte šios konversijos.

## `./I18n/Hash` Failai Nesuderinami

Ištrinkite nesuderinamus failus ir paleiskite iš naujo `i18`
