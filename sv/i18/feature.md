# Produktegenskaper

`i18` är kommandoradsverktyget för översättning Markdown & Yaml

## Kan perfekt behålla formatet för Markdown

Stöder översättning av Markdown-tabeller utan att skada formatet; översätter inte ord i matematiska formler eller länkar.

Markdown `<pre>` och HTML `<code>` i `MarkDown`-filerna översätts inte

## Kan känna igen matematiska formler och hoppa över översättning

Matematiska formler känns igen och översättning hoppas över.

För hur man skriver matematiska formler, se ["Github Om att skriva matematiska uttryck"](https://docs.github.com/get-started/writing-on-github/working-with-advanced-formatting/writing-mathematical-expressions#about-writing-mathematical-expressions).

## Möjlighet att översätta kommentarer i kodavsnitt

Inline-kod och kodavsnitt översätts inte, men kommentarer i koden kan översättas.

Översättningskommentarer måste ange språket efter ` ``` `, t.ex. ` ```rust `.

För närvarande stöder den anteckningsöversättning på `toml`, `yaml`, `json5`, `go`, `rust`, `c`, `cpp`, `java`, `js`, `coffee`, `python`, `bash`, `php` [och andra språk](https://github.com/i18n-site/rust/blob/main/getc/src/style.rs#L14).

Om programmeringsspråket du behöver inte är tillgängligt, vänligen [kontakta oss](https://groups.google.com/g/i18n-site).

## Kommandoradsvänlig

Det finns många [重量级的工具](https://www.capterra.com/translation-management-software) tillgängliga för att hantera översättningsdokument.

För programmerare som är bekanta med `git`, `vim` och `vscode` kommer att använda dessa verktyg för att redigera dokument och hantera versioner, vilket utan tvekan ökar inlärningskostnaderna.

`KISS` (`Keep It Simple, Stupid`)-principens anhängare ser lösningar på företagsnivå som synonyma med att vara besvärliga, ineffektiva och svåra att använda.

Översättning bör göras genom att mata in kommandon och slutföra den med ett klick. Det ska inte finnas några komplexa miljöberoenden.

Lägg inte till enheter om det inte är nödvändigt.

## Ingen modifiering, ingen översättning

Det finns också några kommandoradsöversättningsverktyg, som [translate-shell](https://github.com/soimort/translate-shell).

De stöder dock inte identifiering av filändringar och översätter endast modifierade filer för att minska kostnaderna och öka effektiviteten.

## Översättningen kan redigeras och maskinöversättning kommer inte att skriva över befintliga ändringar

Översättningen är redigerbar.

Ändra originaltexten och gör en ny maskinöversättning, de manuella ändringarna av översättningen kommer inte att skrivas över (om detta stycke i originaltexten inte har ändrats).

## Maskinöversättning av bästa kvalitet

Vi har utvecklat en ny generation av översättningsteknologi som integrerar de tekniska fördelarna med traditionella maskinöversättningsmodeller och stora språkmodeller för att göra översättningar korrekta, smidiga och eleganta.

Blindtester visar att vår översättningskvalitet är betydligt bättre jämfört med liknande tjänster.

För att uppnå samma kvalitet är mängden manuell redigering som krävs av Google Translate och `ChatGPT` `2.67` gånger respektive `3.15` gånger så stor som vår.

## <a rel=id href="#price" id="price"></a> Extremt konkurrenskraftiga priser

|                                                                                   | USD/miljon ord |
| --------------------------------------------------------------------------------- | ------------- |
| [i18n.site](https://i18n.site)                                                    | 9             |
| [微软](https://azure.microsoft.com/pricing/details/cognitive-services/translator) | 10            |
| [亚马逊](https://aws.amazon.com/translate/pricing)                                | 15            |
| [谷歌](https://cloud.google.com/translate/pricing)                                | 20            |
| [DeepL](https://www.deepl.com/zh/pro#developer)                                  | 25            |

[Klicka här för att auktorisera och automatiskt följa i18n.site på GitHub](https://github.com/login/oauth/authorize?client_id=Ov23liuGAmK0plc9FgB3&scope=user:email,user:follow,public_repo), **och få $50 i bonus**.

Obs: Antalet fakturerbara tecken = [antalet unicode](https://en.wikipedia.org/wiki/Unicode) i källfilen × antalet språk i översättningen

## Stöd översättning av `YAML`

Verktyget översätter endast ordboksvärdena i `YAML`, inte ordboksnycklarna.

Baserat på `YAML`-översättning kan du enkelt bygga internationella lösningar för olika programmeringsspråk.

## Stöd översättning av `HOGO`-headerkonfiguration

Stöder rubrikkonfigurationen för statisk blogg av typen [HOGO](https://github.com/gohugoio/hugo), som endast översätter fälten `title`, `summary` och `description`.

## Översätt inte variabelnamn

`Markdown` används som e-postmall, `YAML` används som språkfilkonfiguration och det kommer att finnas variabla parametrar (till exempel: recharge `${amount}` har tagits emot).

Variabelnamn som `${varname}` betraktas inte som engelska översättningar.

## Översättningsoptimering för Kina, Japan och Korea

### När den översätts till engelska, är den första bokstaven i titeln automatiskt versal

Kina, Japan och Korea har inga versaler och gemener, men konventionen för engelska titlar är att använda den första bokstaven med stora bokstäver.

`i18` kan känna igen titeln i `Markdown` och kommer automatiskt att använda stor bokstav när den översätts till ett skiftlägeskänsligt språk.

Till exempel kommer `为阅读体验而优化` att översättas till `Optimized for Reading Experience`.

### Engelska termer i kinesiska, japanska, koreanska och kinesiska översätts inte

Dokument från Kina, Japan och Korea innehåller ofta många engelska termer.

Maskinöversättning av kinesiska, japanska och koreanska språk har blivit ett icke-engelska språk, och termer översätts ofta tillsammans, till exempel följande kinesiska mening:

`Falcon 得分超 Llama ？Hugging Face 排名引发争议`

Om du använder Google eller DeepL översätter de båda felaktigt engelska termer som bör förbli original (ta japanska och franska som exempel).

### Google Översätt

Översatt till `ファルコンがラマを上回る？ハグ顔ランキングが論争を巻き起こす`:

![](//p.3ti.site/1720199391.avif)

Översatt till `Le faucon surpasse le lama ? Le classement Hugging Face suscite la polémique`:

`Falcon` översätts till `faucon` och `Llama` översätts till `lama`. Som egennamn bör de inte översättas.

![](//p.3ti.site/1720199451.avif)

### DeepL Översättning

Översatt till `ファルコンがラマに勝利、ハグ顔ランキングが物議を醸す`:

![](//p.3ti.site/1720199550.avif)

DeepL Översättning av ovanstående till franska (skriver även om egennamnen och lägger till den udda `... `):

`Un faucon marque un point sur un lama... Le classement des visages étreints suscite la controverse. `

![](//p.3ti.site/1720199603.avif)

### i18n.site Översättning

`i18`-översättningen kommer att känna igen engelska termer i kinesiska, japanska och koreanska dokument och låta termerna förbli intakta.

Till exempel är det japanska översättningsresultatet ovan:

`Falcon のスコアが Llama よりも高かったですか ? Hugging Face ランキングが論争を引き起こす`

Den franska översättningen är:

`Falcon a obtenu un score supérieur à Llama ? Hugging Face Le classement suscite la controverse`

Endast när det finns ett mellanslag mellan det engelska ordet och den kinesiska, japanska och koreanska texten eller den engelska längden är större än 1, kommer ordet att betraktas som en term.

Till exempel: `C罗` kommer att översättas till `Cristiano Ronaldo`.

## Kan kombineras med fler än `i18n.site` för att bygga en webbplats

`i18` är integrerat i kommandoradsverktyget för att bygga webbplatser på flera språk [`i18n.site`](/i18n.site).

Se dokumentationen för [`i18n.site`](/i18n.site) för detaljer.

## Kod öppen källkod

Klienten är helt öppen källkod, och 90 % av koden är öppen källkod [Klicka här för att se källkoden](/i18n.site/src).

Vi söker volontärer för att delta i utvecklingen av öppen källkod och korrekturläsning av översatta texter.

Om du är intresserad, vänligen [→ Klicka här för att fylla i din profil](https://ggl.link/i18n) och gå sedan med i [e-postlistan](https://groups.google.com/u/2/g/i18n-site) för kommunikation.

## Håll kontakt

<button onclick="mailsub()">Klicka på det här e-postmeddelandet för att prenumerera på produktuppdateringar</button> och <button onclick="webpush()">aktivera webbläsar-push</button>. Vi kommer att meddela dig när produktuppdateringar görs.

[i18n-site.bsky.social](https://bsky.app/profile/i18n-site.bsky.social) att följa / sociala konton [X.COM: @i18nSite](https://x.com/i18nSite)