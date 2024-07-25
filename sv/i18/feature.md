# Produktfunktioner

`i18` är ett kommandoradsverktyg för att översätta Markdown & Yaml

## Kan Perfekt Behålla Formatet För Markdown

Stöder översättning av Markdown-tabeller utan att skada formatet; översätter inte ord i matematiska formler eller länkar.

Stöder översättning av Markdown i HTML `<pre>` HTML `MarkDown` och innehåll i `<code>` -taggar översätts inte

## Kan Känna Igen Matematiska Formler Och Hoppa Över Översättning

Matematiska formler känns igen och översättning hoppas över.

För hur man skriver matematiska formler, se [" Github Om att skriva matematiska uttryck"](https://docs.github.com/get-started/writing-on-github/working-with-advanced-formatting/writing-mathematical-expressions#about-writing-mathematical-expressions) .

## Möjlighet Att Översätta Kommentarer I Kodavsnitt

Inline-kod och kodavsnitt översätts inte, men kommentarer i koden kan översättas.

Översättningskommentarer måste ange språket efter ` ``` ` till exempel ` ```rust ` :

Stöder för närvarande översättning av kommentarer `toml` , `yaml` , `json5` , `go` `rust` , `c` , `cpp` , `java` `js` `coffee` , `python` , `bash` , `php` [och andra språk](https://github.com/i18n-site/rust/blob/main/getc/src/style.rs#L14) .

Om programmeringsspråket du behöver inte är tillgängligt, vänligen [kontakta oss](https://groups.google.com/g/i18n-site) .

## Kommandoradsvänlig

Det finns många [tunga verktyg](https://www.capterra.com/translation-management-software) tillgängliga för att hantera översättningsdokument.

För programmerare som är bekanta med `git` `vim` , `vscode` , kommer att använda dessa verktyg för att redigera dokument och hantera versioner utan tvekan öka inlärningskostnaden.

`KISS` ( `Keep It Simple, Stupid` ) Bland de som tror på principen är lösningar på företagsnivå synonymt med att vara besvärliga, ineffektiva och svåra att använda.

Översättning bör göras genom att mata in kommandon och slutföra den med ett klick. Det bör inte finnas några komplexa miljöberoenden.

Lägg inte till enheter om det inte är nödvändigt.

## Ingen Modifiering, Ingen Översättning

Det finns också några kommandoradsöversättningsverktyg, som [translate-shell](https://github.com/soimort/translate-shell)

De stöder dock inte identifiering av filändringar och översätter endast modifierade filer för att minska kostnaderna och öka effektiviteten.

## Översättningen Kan Redigeras Och Maskinöversättning Kommer Inte Att Skriva Över Befintliga Ändringar.

Översättningen är redigerbar.

Ändra originaltexten och maskinöversätt den igen, de manuella ändringarna av översättningen kommer inte att skrivas över (om detta stycke i originaltexten inte har ändrats).

## Xindayas Översättning Av Hög Kvalitet

Vi har utvecklat en ny generation av översättningsteknik som integrerar de tekniska fördelarna med traditionella maskinöversättningsmodeller och stora språkmodeller för att göra översättningar korrekta, smidiga och eleganta.

Blindtester visar att vår översättningskvalitet är betydligt bättre jämfört med liknande tjänster.

För att uppnå samma kvalitet `ChatGPT` mängden manuell redigering som krävs av Google Översätt `2.67` gånger respektive `3.15` gånger vår.

## <a rel=id href="#price" id="price"></a> Extremt konkurrenskraftiga priser

|                                                                                   | USD/miljon ord |
| --------------------------------------------------------------------------------- | ------------- |
| [i18n.site](https://i18n.site)                                                    | 9             |
| [Microsoft](https://azure.microsoft.com/pricing/details/cognitive-services/translator) | 10            |
| [Amazon](https://aws.amazon.com/translate/pricing)                                | 15            |
| [Google](https://cloud.google.com/translate/pricing)                                | 20            |
| [DeepL](https://www.deepl.com/zh/pro#developer)                                  | 25            |

Obs: Antalet fakturerbara tecken = [antalet unicode](https://en.wikipedia.org/wiki/Unicode) i källfilen × antalet språk i översättningen

## Stöd Översättning `YAML`

Verktyget översätter bara ordboksvärdena till `YAML` inte ordboksnycklarna.

Baserat `YAML` översättning kan du enkelt bygga internationella lösningar för olika programmeringsspråk.

## Stöd Översättning `HOGO`

[HOGO](https://github.com/gohugoio/hugo) rubrikkonfigurationen av statisk blogg, endast `title` , `summary` och `description` översätts.

## Översätt Inte Variabelnamn

`Markdown` Används som en e-postmall, `YAML` som en språkfilkonfiguration, kommer det att finnas variabla parametrar (till exempel: recharge `${amount}` har tagits emot).

Denna typ av variabelnamn kommer inte att betraktas som engelsk översättning `${varname}`

## Översättningsoptimering För Kina, Japan Och Korea

### När Den Översätts Till Engelska, Är Den Första Bokstaven I Titeln Automatiskt Versal.

Kina, Japan och Korea har inga versaler eller gemener, men engelska titlar använder vanligtvis den första bokstaven med stora bokstäver.

`i18` kan känna igen titlar i `MarkDown` och kommer automatiskt att använda stor bokstav när den översätts till ett skiftlägeskänsligt språk.

Till `为阅读体验而优化` kommer att översättas som `Optimized for Reading Experience` .

### Engelska Termer På Kinesiska, Japanska, Koreanska Och Kinesiska Översätts Inte

Dokument från Kina, Japan och Korea innehåller ofta många engelska termer.

Maskinöversättning av kinesiska, japanska och koreanska språk har blivit ett icke-engelska språk, och termer översätts ofta tillsammans, till exempel följande kinesiska mening:

`Falcon 得分超 Llama ？Hugging Face 排名引发争议`

Om du använder Google eller DeepL översätter de båda felaktigt engelska termer som bör förbli original (ta japanska och franska som exempel).

### Google Översätt

Översatt till `ファルコンがラマを上回る？ハグ顔ランキングが論争を巻き起こす` :

<img alt="" src="//p.3ti.site/1720199391.avif">

Översatt till `Le faucon surpasse le lama ? Le classement Hugging Face suscite la polémique` :

`Falcon` översätts som `faucon` och `Llama` översätts som `lama` . Som egennamn bör de inte översättas.

<img alt="" src="//p.3ti.site/1720199451.avif">

### DeepL Översättning

Översatt till `ファルコンがラマに勝利、ハグ顔ランキングが物議を醸す` :

<img alt="" src="//p.3ti.site/1720199550.avif">

DeepL Översättning av ovanstående till franska (skriver även om de rätta namnen och lägger till det udda `... ` ):

`Un faucon marque un point sur un lama... Le classement des visages étreints suscite la controverse. `

<img alt="" src="//p.3ti.site/1720199603.avif">

### i18n.site Översättning

`i18` s översättning känner igen engelska termer i kinesiska, japanska och koreanska dokument och lämnar termerna intakta.

Till exempel är det japanska översättningsresultatet ovan:

`Falcon のスコアが Llama よりも高かったですか ? Hugging Face ランキングが論争を引き起こす`

Den franska översättningen är:

`Falcon a obtenu un score supérieur à Llama ? Hugging Face Le classement suscite la controverse`

Endast när det finns ett mellanslag mellan det engelska ordet och den kinesiska, japanska och koreanska texten eller den engelska längden är större än 1, kommer ordet att betraktas som en term.

Till exempel: `C罗` kommer att översättas som `Cristiano Ronaldo` .

## Kan Kombineras `i18n.site` Flera Språk

`i18` Är integrerat i kommandoradsverktyget för flerspråkig webbplatsbyggnad [`i18n.site`](/i18n.site) .

Se dokumentationen för [`i18n.site`](/i18n.site)

## Kod Öppen Källkod

Klienten är helt öppen källkod, och 90 % av koden är öppen källkod [Klicka här för att se källkoden](/i18n.site/src) .

Vi söker volontärer för att delta i utvecklingen av öppen källkod och korrekturläsning av översatta texter.

Om du är intresserad, vänligen [→ Klicka här för att fylla i din profil](https://ggl.link/i18n) och gå sedan med i [e-postlistan](https://groups.google.com/u/2/g/i18n-site) för kommunikation.

## Hålla Kontakten

<button onclick="mailsub()">Klicka på det här e-postmeddelandet för att prenumerera på produktuppdateringar</button> och <button onclick="webpush()">aktivera webbläsar-push</button> . Vi kommer att meddela dig när produktuppdateringar görs.

[i18n-site.bsky.social](https://bsky.app/profile/i18n-site.bsky.social) att följa / sociala konton [X.COM: @i18nSite](https://x.com/i18nSite)
