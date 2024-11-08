# Duk

## Vertimo Eilučių Pridėjimas Arba Ištrynimas, Dėl Kurio Vertimas Gali Būti Painus

> [!WARN]
> Atminkite, **kad vertimo eilučių skaičius turi atitikti originalo teksto eilutes** .
> Tai reiškia, kad rankiniu būdu koreguodami vertimą **nepridėkite ir neištrinkite vertimo eilučių** , kitaip bus sutrikęs vertimo ir originalaus teksto atvaizdavimo ryšys.

Jei netyčia pridėjote ar ištrinate eilutę, sukeldami painiavą, prieš modifikuodami atkurkite vertimo versiją, dar kartą paleiskite `i18` vertimą ir iš naujo įrašykite teisingą atvaizdavimą.

Vertimo ir originalaus teksto atvaizdas susietas su prieigos raktu. Sukurkite naują prieigos raktą [i18n.site/token](//i18n.site/token) ištrinkite `.i18h/hash` ir išverskite dar kartą, kad išvalytumėte painų susiejimą (tačiau bus prarasti visi neautomatiniai vertimo koregavimai).

## `YAML` Kaip Išvengti : Kad `HTML` Nuoroda Nebūtų Konvertuojama Į `Markdown`

Vertimo vertė `YAML` laikoma `MarkDown` .

Kartais konvertavimas iš `HTML` → `MarkDown` nėra toks, kokio norime, pavyzdžiui, `<a href="/">Home</a>` paverčiamas į `[Home](/)` .

Prie `a` žymos pridėjus bet kokį atributą, išskyrus `href` , pvz., `<a class="A" href="/">Home</a>` , galima išvengti šios konversijos.

## `./i18n/hash` Failų Konfliktų Žemiau

Ištrinkite nesuderinamus failus ir iš naujo paleiskite `i18` vertimą.