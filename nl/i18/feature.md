# Producteigenschappen

`i18` is het opdrachtregelprogramma voor vertaling Markdown & YAML.

## Kan het formaat van Markdown perfect behouden

Ondersteunt de vertaling van Markdown-tabellen zonder het formaat te beschadigen; vertaalt geen woorden in wiskundige formules of koppelingen.

Ondersteunt de vertaling van mixed HTML Markdown , de inhoud van de tags `<pre>` en `<code>` van HTML ingebed in `MarkDown` wordt niet vertaald

## Kan wiskundige formules herkennen en deze overlaten

Wiskundige formules worden herkend en worden overgeslagen.

Voor het opstellen van wiskundige formules, raadpleeg [Github Over het schrijven van wiskundige uitdrukkingen](https://docs.github.com/get-started/writing-on-github/working-with-advanced-formatting/writing-mathematical-expressions#about-writing-mathematical-expressions).

## Mogelijkheid om opmerkingen in codefragmenten te vertalen

Inline code en codefragmenten worden niet vertaald, maar opmerkingen in de code kunnen wel worden vertaald.

Bij vertalingsopmerkingen moet de taal na ` ``` ` worden aangegeven, bijvoorbeeld: ` ```rust `.

Momenteel ondersteunt het annotatievertaling in `toml` , `yaml` , `json5` , `go` , `rust` , `c` , `cpp` , `java` , `js` , `coffee` , `python` , `bash` , `php` [en andere talen](https://github.com/i18n-site/rust/blob/main/getc/src/style.rs#L14) .

Mocht de door u benodigde programmeertaal niet beschikbaar zijn, neem dan [contact met ons op](https://groups.google.com/g/i18n-site).

## Commandoregelvriendelijk

Er zijn veel [krachtige tools](https://www.capterra.com/translation-management-software) beschikbaar voor het beheren van vertaaldocumenten.

Voor programmeurs die bekend zijn met `git`, `vim` en `vscode`, zal het gebruik van deze tools om documenten te bewerken en versies te beheren ongetwijfeld de leerkosten verhogen.

`KISS` (`Keep It Simple, Stupid`)-principiegelovigen zien oplossingen op ondernemingsniveau als synoniem voor omslachtig, inefficiënt en moeilijk te gebruiken.

De vertaling moet worden uitgevoerd door opdrachten in te voeren en deze met één klik te voltooien; er mogen geen complexe omgevingsafhankelijkheden zijn.

Voeg geen entiteiten toe, tenzij dit noodzakelijk is.

## Geen wijziging, geen vertaling

Er zijn ook enkele opdrachtregelvertaaltools, zoals [translate-shell](https://github.com/soimort/translate-shell).

Ze ondersteunen echter niet het identificeren van bestandswijzigingen en vertalen alleen gewijzigde bestanden om de kosten te verlagen en de efficiëntie te verhogen.

## De vertaling kan worden bewerkt en de automatische vertaling zal bestaande wijzigingen niet overschrijven

De vertaling is bewerkbaar.

Wijzig de originele tekst en vertaal deze opnieuw machinaal. De handmatige wijzigingen aan de vertaling zullen niet worden overschreven (als deze paragraaf van de originele tekst niet is gewijzigd).

## De beste kwaliteit van machinevertaling

We hebben een nieuwe generatie vertaaltechnologie ontwikkeld die de technische voordelen van traditionele automatische vertaalmodellen en grote taalmodellen integreert om vertalingen accuraat, soepel en elegant te maken.

Uit blinde tests blijkt dat onze vertaalkwaliteit aanzienlijk beter is in vergelijking met vergelijkbare diensten.

Om dezelfde kwaliteit te bereiken, is de hoeveelheid handmatige bewerking die Google Translate en `ChatGPT` vereist respectievelijk `2.67` keer en `3.15` keer zo groot als die van ons.

## <a rel=id href="#price" id="price"></a> Uiterst concurrerende prijzen

|                                                                                   | USD/miljoen woorden |
| --------------------------------------------------------------------------------- | ------------- |
| [i18n.site](https://i18n.site)                                                    | 9             |
| [Microsoft](https://azure.microsoft.com/pricing/details/cognitive-services/translator) | 10            |
| [Amazon](https://aws.amazon.com/translate/pricing)                                | 15            |
| [Google](https://cloud.google.com/translate/pricing)                                | 20            |
| [DeepL](https://www.deepl.com/zh/pro#developer)                                  | 25            |

[Klik hier om de github te autoriseren en automatisch te i18n.site](https://github.com/login/oauth/authorize?client_id=Ov23liuGAmK0plc9FgB3&amp;scope=user:email,user:follow,public_repo) en **bonus $50 te ontvangen** .

Let op: Het aantal factureerbare karakters = [het aantal unicode](https://en.wikipedia.org/wiki/Unicode) in het bronbestand × het aantal talen in de vertaling

## Ondersteuning Vertaling `YAML`

De tool vertaalt alleen de woordenboekwaarden in `YAML` , niet de woordenboeksleutels.

Op basis van `YAML` vertalingen bouwt u eenvoudig internationale oplossingen voor diverse programmeertalen.

## Ondersteuning Van Vertaling `HOGO` Headerconfiguratie

Ondersteunt de headerconfiguratie van het type [HOGO](https://github.com/gohugoio/hugo) statische blog, waarbij alleen de velden `title`, `summary` en `description` worden vertaald.

## Vertaal geen variabelennamen

`Markdown` wordt gebruikt voor e-mailsjablonen, `YAML` als taalbestandsconfiguratie, en er zullen variabele parameters zijn (bijvoorbeeld: opwaardering `${amount}` is ontvangen).

Variabelenamen zoals `${varname}` worden niet beschouwd als Engelse vertalingen.

## Vertaaloptimalisatie voor China, Japan en Korea

### Bij Vertaling Naar Het Engels Wordt De Eerste Letter Van De Titel Automatisch Met Een Hoofdletter Geschreven

China, Japan en Korea hebben geen hoofdletters en kleine letters, maar de conventie voor Engelse titels is om de eerste letter met een hoofdletter te schrijven.

`i18` kan de titel in `Markdown` herkennen en zal de eerste letter automatisch in een hoofdletter schrijven bij het vertalen naar een hoofdlettergevoelige taal.

`为阅读体验而优化` wordt bijvoorbeeld vertaald naar `Optimized for Reading Experience`.

### Engelse termen in het Chinees, Japans, Koreaans en Chinees worden niet vertaald

Documenten uit China, Japan en Korea bevatten vaak veel Engelse termen.

Machinevertaling van Chinese, Japanse en Koreaanse talen is een niet-Engelse taal geworden en termen worden vaak samen vertaald, zoals de volgende Chinese zin:

`Falcon 得分超 Llama ？Hugging Face 排名引发争议`

Als je Google of DeepL gebruikt, vertalen ze allebei onjuiste Engelse termen die origineel zouden moeten blijven (neem Japans en Frans als voorbeeld).

### Google Vertalen

Vertaald in `ファルコンがラマを上回る？ハグ顔ランキングが論争を巻き起こす` Japans :

![](//p.3ti.site/1720199391.avif)

Vertaald in `Le faucon surpasse le lama ? Le classement Hugging Face suscite la polémique` Frans :

`Falcon` wordt vertaald als `faucon` en `Llama` wordt vertaald als `lama`. Als eigennamen mogen ze niet worden vertaald.

![](//p.3ti.site/1720199451.avif)

### DeepL Vertaling

Vertaald in `ファルコンがラマに勝利、ハグ顔ランキングが物議を醸す` Japans :

![](//p.3ti.site/1720199550.avif)

Vertaling van het bovenstaande in het Frans (ook de eigennamen herschrijven en de oneven `... ` toevoegen) DeepL

`Un faucon marque un point sur un lama... Le classement des visages étreints suscite la controverse. `

![](//p.3ti.site/1720199603.avif)

### i18n.site Vertaling

De vertaling van `i18` herkent Engelse termen in Chinese, Japanse en Koreaanse documenten en laat de termen intact.

Het bovenstaande Japanse vertaalresultaat is bijvoorbeeld:

`Falcon のスコアが Llama よりも高かったですか ? Hugging Face ランキングが論争を引き起こす`

De Franse vertaling is:

`Falcon a obtenu un score supérieur à Llama ? Hugging Face Le classement suscite la controverse`

Alleen als er een spatie zit tussen het Engelse woord en de Chinese, Japanse en Koreaanse tekst of als de Engelse lengte groter is dan 1, wordt het woord als term beschouwd.

Bijvoorbeeld: `C罗` wordt vertaald als `Cristiano Ronaldo`.

## Kan worden gecombineerd met meertalige websites van `i18n.site`

`i18` is geïntegreerd in de meertalige opdrachtregeltool voor het bouwen van websites [`i18n.site`](/i18n.site).

Zie de documentatie van [`i18n.site`](/i18n.site) voor details.

## Codeer open source

De client is volledig open source en 90% van de code is open source. [Klik hier om de broncode te bekijken](/i18n.site/src).

We zijn op zoek naar vrijwilligers die willen deelnemen aan de ontwikkeling van open source-code en het proeflezen van vertaalde teksten.

Als u geïnteresseerd bent, kunt u [→ Klik hier om uw profiel in te vullen](https://ggl.link/i18n) en u vervolgens aanmelden [voor de mailinglijst](https://groups.google.com/u/2/g/i18n-site) voor communicatie.

## Blijf in contact

<button onclick="mailsub()">Klik op deze e-mail om u te abonneren op productupdates</button> en <button onclick="webpush()">browserpush in te schakelen</button>. We stellen u op de hoogte wanneer er productupdates zijn.

Ook welkom om onze sociale accounts [X.COM: @i18nSite](https://x.com/i18nSite) / [i18n-site.bsky.social](https://bsky.app/profile/i18n-site.bsky.social) te volgen.