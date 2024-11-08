# Produkto Savybės

`i18` yra vertimo komandų eilutės įrankis Markdown & Yaml

## Gali Puikiai Išlaikyti Markdown Formatą

Palaiko Markdown lentelių vertimą nepažeidžiant formato, neverčia žodžių matematinėse formulėse ar nuorodose.

`MarkDown` Markdown HTML HTML `<pre>` `<code>`

## Gali Atpažinti Matematines Formules Ir Praleisti Vertimą

Matematinės formulės atpažįstamos ir vertimas praleidžiamas.

Norėdami sužinoti, kaip parašyti matematines formules, skaitykite [" Github Apie matematinių išraiškų rašymą"](https://docs.github.com/get-started/writing-on-github/working-with-advanced-formatting/writing-mathematical-expressions#about-writing-mathematical-expressions) .

## Galimybė Išversti Komentarus Kodo Fragmentais

Įdėtasis kodas ir kodo fragmentai nėra verčiami, tačiau komentarai kode gali būti išversti.

Vertimo komentaruose reikia nurodyti kalbą po ` ``` ` , pvz : ` ```rust ` .

Šiuo metu jis palaiko anotacijų vertimą `toml` , `yaml` , `json5` , `go` , `rust` , `c` , `cpp` , `java` , `js` , `coffee` , `python` , `bash` , `php` [ir kitomis kalbomis](https://github.com/i18n-site/rust/blob/main/getc/src/style.rs#L14) .

Jei norite išversti visus ne angliškus kode esančius simbolius, kodo segmentą pažymėkite ` ```i18n ` .

Jei jums reikiamos programavimo kalbos nėra, [susisiekite su mumis](https://groups.google.com/g/i18n-site) .

## Komandinė Eilutė Draugiška

Yra daug [sunkių įrankių](https://www.capterra.com/translation-management-software) vertimo dokumentams tvarkyti.

Programuotojams, kurie yra susipažinę su `git` , `vim` ir `vscode` , naudojant šiuos įrankius dokumentams redaguoti ir tvarkyti versijas, neabejotinai padidės mokymosi išlaidos.

`KISS` ( `Keep It Simple, Stupid` ) Iš principo tikinčiųjų įmonės lygio sprendimai yra sudėtingi, neefektyvūs ir sunkiai naudojami.

Vertimas turėtų būti atliekamas įvedus komandas ir užbaigiant vienu paspaudimu. Neturėtų būti sudėtingų aplinkos priklausomybių.

Nepridėkite objektų, nebent tai būtina.

## Jokių Pakeitimų, Jokio Vertimo

Taip pat yra keletas komandinės eilutės vertimo įrankių, pvz. [translate-shell](https://github.com/soimort/translate-shell)

Tačiau jie nepalaiko failų modifikacijų identifikavimo ir verčia tik pakeistus failus, kad sumažintų išlaidas ir padidintų efektyvumą.

## Vertimą Galima Redaguoti, O Mašininis Vertimas Neperrašys Esamų Pakeitimų.

Vertimas yra redaguojamas.

Pakeiskite originalų tekstą ir dar kartą išverskite jį mašininiu būdu, rankiniai vertimo pakeitimai nebus perrašyti (jei ši originalaus teksto pastraipa nebuvo pakeista).

## Geriausios Kokybės Mašininis Vertimas

Sukūrėme naujos kartos vertimo technologiją, kuri sujungia tradicinių mašininio vertimo modelių ir didelių kalbų modelių techninius pranašumus, kad vertimai būtų tikslūs, sklandūs ir elegantiški.

Aklieji testai rodo, kad mūsų vertimo kokybė yra žymiai geresnė, palyginti su panašiomis paslaugomis.

Norint pasiekti tą pačią kokybę, rankinio redagavimo skaičius, kurio reikalauja „Google“ vertėjas ir `ChatGPT` yra atitinkamai `2.67` ir `3.15` kartus didesnis nei mūsų.

## <a rel=id href="#price" id="price"></a> Itin konkurencinga kaina

|                                                                                   | USD/milijonas žodžių |
| --------------------------------------------------------------------------------- | ------------- |
| [i18n.site](https://i18n.site)                                                    | 9             |
| [Microsoft](https://azure.microsoft.com/pricing/details/cognitive-services/translator) | 10            |
| [Amazon](https://aws.amazon.com/translate/pricing)                                | 15            |
| [Google](https://cloud.google.com/translate/pricing)                                | 20            |
| [DeepL](https://www.deepl.com/zh/pro#developer)                                  | 25            |

[➤ Spustelėkite čia, kad patvirtintumėte ir automatiškai i18n.site github biblioteką](https://github.com/login/oauth/authorize?client_id=Ov23liuGAmK0plc9FgB3&amp;scope=user:email,user:follow,public_repo) ir **gautumėte premiją $50** !

Pastaba: apmokestinamų simbolių skaičius = [unicode skaičius](https://en.wikipedia.org/wiki/Unicode) šaltinio faile × kalbų skaičius vertime

## Vertimo Palaikymas `YAML`

Įrankis verčia tik žodyno reikšmes `YAML` , o ne žodyno klavišus.

Remdamiesi `YAML` vertimu, galite lengvai sukurti tarptautinius sprendimus įvairioms programavimo kalboms.

## Palaikykite Vertimo `HOGO` Antraštės Konfigūraciją

Palaiko statinio [HOGO](https://github.com/gohugoio/hugo) tipo antraštės konfigūraciją ir verčia tik laukus `title` , `summary` , `brief` ir `description` .

## Neverskite Kintamųjų Pavadinimų

`Markdown` naudojamas kaip el. pašto šablonas, `YAML` naudojamas kaip kalbos failo konfigūracija ir bus kintamų parametrų (pvz.: gautas įkrovimas `${amount}` ).

Kintamųjų pavadinimai, tokie kaip `${varname}` nebus laikomi vertimais į anglų kalbą.

## Vertimų Optimizavimas Kinijai, Japonijai Ir Korėjai

### Išvertus Į Anglų Kalbą, Pirmoji Pavadinimo Raidė Automatiškai Rašoma Didžiąja.

Kinijoje, Japonijoje ir Korėjoje didžiųjų ir mažųjų raidžių nėra, tačiau angliškų pavadinimų taisyklė yra pirmoji raidė rašyti didžiosiomis raidėmis.

`i18` gali atpažinti pavadinimą iš `MarkDown` ir automatiškai rašo didžiąją pirmąją raidę, kai verčiama į kalbą, kurioje skiriamos didžiosios ir mažosios raidės.

Pavyzdžiui, `为阅读体验而优化` bus išverstas į `Optimized for Reading Experience` .

### Anglų Kalbos Terminai Kinų, Japonų, Korėjiečių Ir Kinų Kalbomis Nėra Verčiami

Kinijos, Japonijos ir Korėjos dokumentuose dažnai yra daug angliškų terminų.

Kinų, japonų ir korėjiečių kalbų mašininis vertimas tapo ne anglų kalba, o terminai dažnai verčiami kartu, pavyzdžiui, šis kinų kalbos sakinys:

`Falcon 得分超 Llama ？Hugging Face 排名引发争议`

Jei naudojate Google arba DeepL, jie abu neteisingai išverčia angliškus terminus, kurie turėtų likti originalūs (pavyzdžiui, japonų ir prancūzų kalbos).

### Google Vertėjas

`ファルコンがラマを上回る？ハグ顔ランキングが論争を巻き起こす` į japonų kalbą :

![](//p.3ti.site/1720199391.avif)

`Le faucon surpasse le lama ? Le classement Hugging Face suscite la polémique` į prancūzų kalbą :

`Falcon` išverstas kaip `faucon` , o `Llama` – kaip `lama` . Kaip daiktavardžiai, jie neturėtų būti verčiami.

![](//p.3ti.site/1720199451.avif)

### DeepL Vertimas

`ファルコンがラマに勝利、ハグ顔ランキングが物議を醸す` į japonų kalbą :

![](//p.3ti.site/1720199550.avif)

DeepL `... `

`Un faucon marque un point sur un lama... Le classement des visages étreints suscite la controverse. `

![](//p.3ti.site/1720199603.avif)

### i18n.svetainės Vertimas

`i18` vertimas atpažins angliškus terminus kinų, japonų ir korėjiečių dokumentuose ir paliks terminus nepažeistus.

Pavyzdžiui, aukščiau pateiktas vertimo į japonų kalbą rezultatas yra:

`Falcon のスコアが Llama よりも高かったですか ? Hugging Face ランキングが論争を引き起こす`

Prancūziškas vertimas yra:

`Falcon a obtenu un score supérieur à Llama ? Hugging Face Le classement suscite la controverse`

Tik tada, kai tarp angliško žodžio ir teksto kinų, japonų ir korėjiečių kalbomis yra tarpas arba anglų kalbos ilgis yra didesnis nei 1, žodis bus laikomas terminu.

Pavyzdžiui: `C罗` bus išverstas kaip `Cristiano Ronaldo` .

## Galima Derinti Su Daugiau Nei `i18n.site` Kalbų Kuriant Svetainę

`i18` yra integruotas į kelių kalbų svetainių kūrimo komandinės eilutės įrankį [`i18n.site`](/i18n.site) .

Daugiau informacijos rasite [`i18n.site`](/i18n.site) dokumentacijoje.

## Kodas Atviro Kodo

Klientas yra visiškai atviras, o serverio dalis yra atvirojo 90 . [Spustelėkite čia, kad pamatytumėte šaltinio kodą](/i18n.site/c/src) .

Ieškome savanorių, kurie dalyvautų atvirojo kodo kūrime ir išverstų tekstų korektūroje.

Jei susidomėjote, prašome [→ Spustelėkite čia, kad užpildytumėte savo profilį](https://ggl.link/i18n) ir prisijunkite prie [adresatų sąrašo,](https://groups.google.com/u/2/g/i18n-site) kad galėtumėte bendrauti.

## Palaikyti Ryšį

<button onclick="mailsub()">Spustelėkite šį el. laišką, kad užsiprenumeruotumėte produkto naujinius</button> ir <button onclick="webpush()">įgalintumėte naršyklės siuntimą</button> .

Taip pat kviečiame sekti mūsų / [i18n-site.bsky.social](https://bsky.app/profile/i18n-site.bsky.social) [X.COM: @i18nSite](https://x.com/i18nSite)