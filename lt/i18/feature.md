# Prekės Savybės

`i18` yra komandų eilutės įrankis Markdown & Yaml

## Gali Puikiai Išlaikyti Markdown Formatą

Palaiko Markdown lentelių vertimą nepažeidžiant formato, neverčia žodžių matematinėse formulėse ar nuorodose.

Palaiko Markdown vertimą į HTML `<pre>` HTML į `MarkDown` ir `<code>` žymos nėra verčiamos

## Gali Atpažinti Matematines Formules Ir Praleisti Vertimą

Matematinės formulės atpažįstamos ir vertimas praleidžiamas.

Norėdami sužinoti, kaip parašyti matematines formules, skaitykite [" Github Apie matematinių išraiškų rašymą"](https://docs.github.com/get-started/writing-on-github/working-with-advanced-formatting/writing-mathematical-expressions#about-writing-mathematical-expressions) .

## Galimybė Išversti Komentarus Kodo Fragmentais

Įdėtasis kodas ir kodo fragmentai nėra verčiami, tačiau komentarai kode gali būti išversti.

Vertimo komentaruose reikia nurodyti kalbą ` ``` ` pvz., ` ```rust ` :

Šiuo metu palaikomas komentarų vertimas `toml` , `yaml` , `json5` , `go` , `rust` , `c` , `cpp` , `java` `js` `coffee` `python` , `bash` , `php` [ir kitas kalbas](https://github.com/i18n-site/rust/blob/main/getc/src/style.rs#L14) .

Jei jums reikiamos programavimo kalbos nėra, [susisiekite su mumis](https://groups.google.com/g/i18n-site) .

## Komandinė Eilutė Draugiška

Yra daug [sunkių įrankių](https://www.capterra.com/translation-management-software) vertimo dokumentams tvarkyti.

Programuotojams, kurie yra susipažinę su `git` `vim` , `vscode` , naudojant šiuos įrankius dokumentams redaguoti ir tvarkyti versijas, neabejotinai padidės mokymosi išlaidos.

`KISS` `Keep It Simple, Stupid`

Vertimas turėtų būti atliekamas įvedus komandas ir užbaigiant vienu paspaudimu. Neturėtų būti sudėtingų aplinkos priklausomybių.

Nepridėkite objektų, nebent tai būtina.

## Jokių Pakeitimų, Jokio Vertimo

Taip pat yra keletas komandinės eilutės vertimo įrankių, pvz [translate-shell](https://github.com/soimort/translate-shell)

Tačiau jie nepalaiko failų modifikacijų identifikavimo ir verčia tik pakeistus failus, kad sumažintų išlaidas ir padidintų efektyvumą.

## Vertimą Galima Redaguoti, O Mašininis Vertimas Neperrašys Esamų Pakeitimų.

Vertimas yra redaguojamas.

Pakeiskite originalų tekstą ir dar kartą išverskite jį mašininiu būdu, rankiniai vertimo pakeitimai nebus perrašyti (jei ši originalaus teksto pastraipa nebuvo pakeista).

## „Xindaya“ Aukštos Kokybės Vertimas

Sukūrėme naujos kartos vertimo technologiją, kuri sujungia tradicinių mašininio vertimo modelių ir didelių kalbų modelių techninius pranašumus, kad vertimai būtų tikslūs, sklandūs ir elegantiški.

Aklieji testai rodo, kad mūsų vertimo kokybė yra žymiai geresnė, palyginti su panašiomis paslaugomis.

Kad būtų pasiekta tokia pati kokybė, „Google“ vertėjo ir `ChatGPT` redagavimo rankiniu būdu reikia atitinkamai `2.67` ir `3.15` kartų.

## <a rel=id href="#price" id="price"></a> Itin konkurencinga kaina

|                                                                                   | USD/milijonas žodžių |
| --------------------------------------------------------------------------------- | ------------- |
| [i18n.site](https://i18n.site)                                                    | 9             |
| [Microsoft](https://azure.microsoft.com/pricing/details/cognitive-services/translator) | 10            |
| [Amazon](https://aws.amazon.com/translate/pricing)                                | 15            |
| [Google](https://cloud.google.com/translate/pricing)                                | 20            |
| [DeepL](https://www.deepl.com/zh/pro#developer)                                  | 25            |

Pastaba: apmokestinamų simbolių skaičius = [unicode skaičius](https://en.wikipedia.org/wiki/Unicode) šaltinio faile × kalbų skaičius vertime

## Palaikykite Vertimą `YAML`

Įrankis verčia tik žodyno reikšmes `YAML` o ne žodyno raktus.

Remdamiesi `YAML` , galite lengvai kurti tarptautinius sprendimus įvairioms programavimo kalboms.

## Palaikykite Vertimą `HOGO`

Palaiko [HOGO](https://github.com/gohugoio/hugo) tinklaraščio antraštės konfigūraciją, verčiami `title` , `summary` ir `description` laukai.

## Neverskite Kintamųjų Pavadinimų

`Markdown` `YAML` `${amount}`

`${varname}` kintamojo pavadinimas nebus laikomas vertimu į anglų kalbą.

## Vertimų Optimizavimas Kinijai, Japonijai Ir Korėjai

### Išvertus Į Anglų Kalbą, Pirmoji Pavadinimo Raidė Automatiškai Rašoma Didžiąja.

Kinija, Japonija ir Korėja neturi didžiųjų ir mažųjų raidžių, tačiau anglų kalbos pavadinimuose pirmoji raidė paprastai rašoma didžiosiomis raidėmis.

`i18` gali atpažinti pavadinimus `MarkDown` ir automatiškai rašo pirmąją raidę, kai verčiama į didžiąsias ir mažąsias raides.

Pavyzdžiui `为阅读体验而优化` bus išverstas kaip `Optimized for Reading Experience` .

### Anglų Kalbos Terminai Kinų, Japonų, Korėjiečių Ir Kinų Kalbomis Nėra Verčiami

Kinijos, Japonijos ir Korėjos dokumentuose dažnai yra daug angliškų terminų.

Kinų, japonų ir korėjiečių kalbų mašininis vertimas tapo ne anglų kalba, o terminai dažnai verčiami kartu, pavyzdžiui, šis kinų kalbos sakinys:

`Falcon 得分超 Llama ？Hugging Face 排名引发争议`

Jei naudojate Google arba DeepL, jie abu neteisingai išverčia angliškus terminus, kurie turėtų likti originalūs (pavyzdžiui, japonų ir prancūzų kalbos).

### Google Vertėjas

Išversta į `ファルコンがラマを上回る？ハグ顔ランキングが論争を巻き起こす` :

<img alt="" src="//p.3ti.site/1720199391.avif">

Išversta į `Le faucon surpasse le lama ? Le classement Hugging Face suscite la polémique` :

`Falcon` verčiamas kaip `faucon` , o `Llama` verčiamas kaip `lama` . Kaip daiktavardžiai, jie neturėtų būti verčiami.

<img alt="" src="//p.3ti.site/1720199451.avif">

### DeepL Vertimas

Išversta į `ファルコンがラマに勝利、ハグ顔ランキングが物議を醸す` :

<img alt="" src="//p.3ti.site/1720199550.avif">

DeepL `... `

`Un faucon marque un point sur un lama... Le classement des visages étreints suscite la controverse. `

<img alt="" src="//p.3ti.site/1720199603.avif">

### i18n.svetainės Vertimas

`i18`

Pavyzdžiui, aukščiau pateiktas vertimo į japonų kalbą rezultatas:

`Falcon のスコアが Llama よりも高かったですか ? Hugging Face ランキングが論争を引き起こす`

Prancūziškas vertimas yra:

`Falcon a obtenu un score supérieur à Llama ? Hugging Face Le classement suscite la controverse`

Tik tada, kai tarp angliško žodžio ir teksto kinų, japonų ir korėjiečių kalbomis yra tarpas arba anglų kalbos ilgis yra didesnis nei 1, žodis bus laikomas terminu.

Pavyzdžiui: `C罗` bus išverstas kaip `Cristiano Ronaldo` .

## Galima `i18n.site` Kelių Kalbų Svetainės Kūrimą

`i18` į komandinės eilutės įrankį, skirtą kelių kalbų svetainei kurti [`i18n.site`](/i18n.site)

Daugiau informacijos rasite dokumentuose [`i18n.site`](/i18n.site)

## Kodas Atviro Kodo

Klientas yra visiškai atviras, o serverio dalis yra atvirojo kodo 90 [Spustelėkite čia, kad pamatytumėte šaltinio kodą](/i18n.site/src) .

Ieškome savanorių, kurie dalyvautų atvirojo kodo kūrime ir išverstų tekstų korektūroje.

Jei susidomėjote, prašome [→ Spustelėkite čia, kad užpildytumėte savo profilį](https://ggl.link/i18n) ir prisijunkite prie [adresatų sąrašo,](https://groups.google.com/u/2/g/i18n-site) kad galėtumėte bendrauti.

## Palaikyti Ryšį

<button onclick="mailsub()">Spustelėkite šį el. laišką, kad užsiprenumeruotumėte produkto naujinius</button> ir <button onclick="webpush()">įgalintumėte naršyklės siuntimą</button> .

/ pat kviečiame sekti mūsų socialines [i18n-site.bsky.social](https://bsky.app/profile/i18n-site.bsky.social) [X.COM: @i18nSite](https://x.com/i18nSite)
