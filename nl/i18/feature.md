# Producteigenschappen

`i18` een opdrachtregelprogramma voor het vertalen Markdown & Yaml

## Kan Het Formaat Van Markdown Perfect Behouden

Ondersteunt de vertaling van Markdown-tabellen zonder het formaat te beschadigen; vertaalt geen woorden in wiskundige formules of koppelingen.

Ondersteunt de vertaling van Markdown in HTML HTML `MarkDown` `<pre>` inhoud in `<code>` -tags wordt niet vertaald

## Kan Wiskundige Formules Herkennen en Vertalingen Overslaan

Wiskundige formules worden herkend en de vertaling wordt overgeslagen.

Voor het schrijven van wiskundige formules raadpleegt u [" Github Over het schrijven van wiskundige uitdrukkingen"](https://docs.github.com/get-started/writing-on-github/working-with-advanced-formatting/writing-mathematical-expressions#about-writing-mathematical-expressions) .

## Mogelijkheid Om Opmerkingen in Codefragmenten Te Vertalen

Inline code en codefragmenten worden niet vertaald, maar opmerkingen in de code kunnen wel worden vertaald.

Bij vertalingen moet de taal na ` ``` ` worden vermeld, ` ```rust ` :

Ondersteunt momenteel de vertaling van opmerkingen `toml` , `yaml` , `json5` , `go` `php` `rust` , `c` , `cpp` , `java` `js` `coffee` , `python` , `bash` [en andere talen](https://github.com/i18n-site/rust/blob/main/getc/src/style.rs#L14) .

Mocht de door u gewenste programmeertaal niet beschikbaar zijn, neem dan [contact met ons op](https://groups.google.com/g/i18n-site) .

## Commandoregelvriendelijk

Er zijn veel [krachtige tools](https://www.capterra.com/translation-management-software) beschikbaar voor het beheren van vertaaldocumenten.

Voor programmeurs die bekend zijn met `git` , `vim` , `vscode` zal het gebruik van deze tools om documenten te bewerken en versies te beheren ongetwijfeld de leerkosten verhogen.

( `Keep It Simple, Stupid` ) Onder degenen die in dit principe geloven, staan oplossingen op ondernemingsniveau synoniem voor omslachtig, inefficiënt en moeilijk `KISS` gebruiken.

De vertaling moet worden uitgevoerd door opdrachten in te voeren en deze met één klik te voltooien. Er mogen geen complexe omgevingsafhankelijkheden zijn.

Voeg geen entiteiten toe, tenzij dit noodzakelijk is.

## Geen Wijziging, Geen Vertaling

Er zijn ook enkele vertaalhulpmiddelen voor de opdrachtregel, zoals [translate-shell](https://github.com/soimort/translate-shell)

Ze ondersteunen echter niet het identificeren van bestandswijzigingen en vertalen alleen gewijzigde bestanden om de kosten te verlagen en de efficiëntie te verhogen.

## De Vertaling Kan Worden Bewerkt en De Automatische Vertaling Zal Bestaande Wijzigingen Niet Overschrijven.

De vertaling is bewerkbaar.

Pas de originele tekst aan en vertaal deze opnieuw machinaal. De handmatige wijzigingen aan de vertaling worden niet overschreven (als deze paragraaf van de originele tekst niet is gewijzigd).

## De Hoogwaardige Vertaling Van Xindaya

We hebben een nieuwe generatie vertaaltechnologie ontwikkeld die de technische voordelen van traditionele automatische vertaalmodellen en grote taalmodellen integreert om vertalingen accuraat, soepel en elegant te maken.

Uit blinde tests blijkt dat onze vertaalkwaliteit aanzienlijk beter is in vergelijking met vergelijkbare diensten.

Om dezelfde kwaliteit `2.67` bereiken, is de hoeveelheid handmatige bewerking vereist door `3.15` Google Translate en `ChatGPT`

## <a rel=id href="#price" id="price"></a> Uiterst concurrerende prijzen

|                                                                                   | USD/miljoen woorden |
| --------------------------------------------------------------------------------- | ------------- |
| [i18n.site](https://i18n.site)                                                    | 9             |
| [Microsoft](https://azure.microsoft.com/pricing/details/cognitive-services/translator) | 10            |
| [Amazone](https://aws.amazon.com/translate/pricing)                                | 15            |
| [Googlen](https://cloud.google.com/translate/pricing)                                | 20            |
| [DeepL](https://www.deepl.com/zh/pro#developer)                                  | 25            |

Let op: Het aantal factureerbare karakters = [het aantal unicode](https://en.wikipedia.org/wiki/Unicode) in het bronbestand × het aantal talen in de vertaling

## Ondersteuning Vertaling `YAML`

De tool vertaalt alleen de woordenboekwaarden in `YAML` niet de woordenboeksleutels.

Op basis van `YAML` Translation kunt u eenvoudig internationale oplossingen bouwen voor verschillende programmeertalen.

## Ondersteuning Van Vertaling `HOGO`

Ondersteunt de headerconfiguratie van statische blogs van het type [HOGO](https://github.com/gohugoio/hugo) , alleen de velden `title` , `summary` en `description` worden vertaald.

## Vertaal Geen Namen Van Variabelen

`Markdown` Gebruikt als e-mailsjabloon, `YAML` als taalbestandsconfiguratie, er zullen variabele parameters zijn (bijvoorbeeld: er is `${amount}` ontvangen).

Dit soort variabelenaam wordt `${varname}` beschouwd als een Engelse vertaling.

## Vertaaloptimalisatie Voor China, Japan en Korea

### Bij Vertaling Naar Het Engels Wordt De Eerste Letter Van De Titel Automatisch Met Een Hoofdletter Geschreven.

China, Japan en Korea hebben geen hoofdletters of kleine letters, maar Engelse titels gebruiken doorgaans de eerste letter met een hoofdletter.

`i18` kan titels in `MarkDown` herkennen en zal automatisch de eerste letter in hoofdletters schrijven bij het vertalen naar een hoofdlettergevoelige taal.

`为阅读体验而优化` wordt bijvoorbeeld vertaald als `Optimized for Reading Experience` .

### Engelse Termen in Het Chinees, Japans, Koreaans en Chinees Zijn Niet Vertaald

Documenten uit China, Japan en Korea bevatten vaak veel Engelse termen.

Machinevertaling van Chinese, Japanse en Koreaanse talen is een niet-Engelse taal geworden en termen worden vaak samen vertaald, zoals de volgende Chinese zin:

`Falcon 得分超 Llama ？Hugging Face 排名引发争议`

Als je Google of DeepL gebruikt, vertalen ze allebei Engelse termen die origineel moeten blijven (neem Japans en Frans als voorbeeld).

### Google Vertalen

Vertaald in `ファルコンがラマを上回る？ハグ顔ランキングが論争を巻き起こす` :

<img alt="" src="//p.3ti.site/1720199391.avif">

Vertaald in `Le faucon surpasse le lama ? Le classement Hugging Face suscite la polémique` :

`Falcon` vertaald als `faucon` en `Llama` wordt vertaald als `lama` . Als eigennamen mogen ze niet vertaald worden.

<img alt="" src="//p.3ti.site/1720199451.avif">

### DeepL-Vertaling

Vertaald in `ファルコンがラマに勝利、ハグ顔ランキングが物議を醸す` :

<img alt="" src="//p.3ti.site/1720199550.avif">

DeepL van het bovenstaande in het Frans (ook de eigennamen herschrijven en er een paar toevoegen `... ` ):

`Un faucon marque un point sur un lama... Le classement des visages étreints suscite la controverse. `

<img alt="" src="//p.3ti.site/1720199603.avif">

### i18n.site Vertaling

`i18` 's vertaling herkent Engelse termen in Chinese, Japanse en Koreaanse documenten en laat de termen intact.

Het bovenstaande Japanse vertaalresultaat is bijvoorbeeld:

`Falcon のスコアが Llama よりも高かったですか ? Hugging Face ランキングが論争を引き起こす`

De Franse vertaling is:

`Falcon a obtenu un score supérieur à Llama ? Hugging Face Le classement suscite la controverse`

Alleen als er een spatie zit tussen het Engelse woord en de Chinese, Japanse en Koreaanse tekst of als de Engelse lengte groter is dan 1, wordt het woord als term beschouwd.

Bijvoorbeeld: `C罗` wordt vertaald als `Cristiano Ronaldo` .

## Kan Gecombineerd Worden `i18n.site` Meertalige Website Bouwen

Is geïntegreerd in het opdrachtregelprogramma voor het bouwen van meertalige websites [`i18n.site`](/i18n.site) `i18`

Zie de documentatie van [`i18n.site`](/i18n.site) voor details.

## Codeer Open Source

De client is volledig open source en de 90 % van de code is open source. [Klik hier om de broncode te bekijken](/i18n.site/src) .

We zijn op zoek naar vrijwilligers die willen deelnemen aan de ontwikkeling van open source-code en het proeflezen van vertaalde teksten.

Als u geïnteresseerd bent, kunt u [→ Klik hier om uw profiel in te vullen](https://ggl.link/i18n) en u vervolgens aan te melden [voor de mailinglijst](https://groups.google.com/u/2/g/i18n-site) voor communicatie.

## Contact Houden

<button onclick="mailsub()">Klik op deze e-mail om u te abonneren op productupdates</button> en <button onclick="webpush()">browserpush in te schakelen</button> . We stellen u op de hoogte wanneer er productupdates zijn.

Ook welkom om onze sociale accounts / [i18n-site.bsky.social](https://bsky.app/profile/i18n-site.bsky.social) te volgen [X.COM: @i18nSite](https://x.com/i18nSite)
