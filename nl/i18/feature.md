# Producteigenschappen

`i18` is een opdrachtregeltool voor het vertalen van Markdown & Yaml.

## Kan het formaat van Markdown perfect behouden

Ondersteunt de vertaling van Markdown-tabellen zonder het formaat te beschadigen; vertaalt geen woorden in wiskundige formules of links.

Ondersteunt de vertaling van mixed HTML Markdown , de inhoud in tags `<pre>` en `<code>` ingebed in HTML `MarkDown` wordt niet vertaald

## Kan wiskundige formules herkennen en de vertaling overslaan

Wiskundige formules worden herkend en de vertaling wordt overgeslagen.

De schrijfwijze van wiskundige formules is te raadplegen in ["Github Over het schrijven van wiskundige uitdrukkingen"](https://docs.github.com/get-started/writing-on-github/working-with-advanced-formatting/writing-mathematical-expressions#about-writing-mathematical-expressions).

## Vertaling van opmerkingen in codefragmenten is mogelijk

Inline code en codefragmenten worden niet vertaald, maar opmerkingen in de code wel.

Vertaling van opmerkingen vereist de vermelding van de taal na ` ``` `, bijvoorbeeld: ` ```rust `.

Momenteel wordt ondersteuning geboden voor vertaling van opmerkingen in `toml`, `yaml`, `json5`, `go`, `rust`, `c`, `cpp`, `java`, `js`, `coffee`, `python`, `bash`, `php` [en andere talen](https://github.com/i18n-site/rust/blob/main/getc/src/style.rs#L14).

Als de door u gewenste programmeertaal niet wordt ondersteund, neem dan [contact met ons op](https://groups.google.com/g/i18n-site).

## Vriendelijk voor de opdrachtregel

Er zijn veel [krachtige tools](https://www.capterra.com/translation-management-software) beschikbaar voor het beheren van vertaaldocumenten.

Voor programmeurs die bekend zijn met `git`, `vim`, `vscode` is het gebruik van deze tools voor het bewerken van documenten en versies beheren ongetwijfeld kostbaar in termen van leercurve.

Voor aanhangers van het `KISS`-principe (`Keep It Simple, Stupid`) zijn enterprise-oplossingen synoniem voor omslachtig, inefficiënt en moeilijk te gebruiken.

Vertaling zou moeten bestaan uit het ingeven van opdrachten en het voltooien met één klik, zonder complexe omgevingsafhankelijkheden.

Geen toevoeging van entiteiten zonder noodzaak.

## Geen wijziging, geen vertaling

Er zijn ook andere opdrachtregelvertaaltools, zoals [translate-shell](https://github.com/soimort/translate-shell).

Deze tools ondersteunen echter niet het identificeren van bestandswijzigingen en vertalen alleen gewijzigde bestanden om kosten te besparen en efficiëntie te verhogen.

## De vertaling kan worden bewerkt en de automatische vertaling zal bestaande wijzigingen niet overschrijven

De vertaling is bewerkbaar.

Als de oorspronkelijke tekst wordt aangepast en opnieuw machinaal wordt vertaald, zullen handmatige wijzigingen in de vertaling niet worden overschreven (tenzij de betreffende paragraaf in de oorspronkelijke tekst is gewijzigd).

## De beste machinevertaalkwaliteit

We hebben een nieuwe generatie vertaaltechnologie ontwikkeld die de voordelen van traditionele machinevertaalmodellen en grote taalmodellen integreert, waardoor vertalingen accuraat, vloeiend en elegant zijn.

Blind tests tonen aan dat onze vertaalkwaliteit aanzienlijk beter is dan die van vergelijkbare diensten.

Om dezelfde kwaliteit te bereiken, is de hoeveelheid handmatige bewerking die Google Translate en `ChatGPT` vereisen respectievelijk `2.67` keer en `3.15` keer zo groot als die van ons.

## <a rel=id href="#price" id="price"></a> Zeer concurrerende prijzen

|                                                                                   | USD/miljoen woorden |
| --------------------------------------------------------------------------------- | ------------- |
| [i18n.site](https://i18n.site)                                                    | 9             |
| [Microsoft](https://azure.microsoft.com/pricing/details/cognitive-services/translator) | 10            |
| [Amazon](https://aws.amazon.com/translate/pricing)                                | 15            |
| [Google](https://cloud.google.com/translate/pricing)                                | 20            |
| [DeepL](https://www.deepl.com/zh/pro#developer)                                  | 25            |

[Klik hier om de github te autoriseren en automatisch i18n.site te volgen](https://github.com/login/oauth/authorize?client_id=Ov23liuGAmK0plc9FgB3&scope=user:email,user:follow,public_repo), **en een bonus van $50 te ontvangen**.

Let op: Het aantal factureerbare karakters = het aantal [Unicode](https://en.wikipedia.org/wiki/Unicode) in de bronbestanden × het aantal talen in de vertaling

## Ondersteuning voor vertaling van `YAML`

De tool vertaalt alleen de waarden van dictionaries in `YAML`, niet de sleutels.

Based on `YAML`-vertalingen kunt u eenvoudig internationale oplossingen bouwen voor verschillende programmeertalen.

## Ondersteuning voor vertaling van `HUGO`-headerconfiguratie

Ondersteunt de vertaling van de headerconfiguratie van [HUGO](https://github.com/gohugoio/hugo)-statische blogs, met name de velden `title`, `summary`, `brief` en `description`.

## Vertaling van variabelennamen niet ondersteund

`Markdown` wordt gebruikt als e-mailsjabloon, `YAML` als configuratiebestand voor de taal, en er zullen variabelen zijn (bijvoorbeeld: `${amount}` is ontvangen).

`${varname}`-achtige variabelenamen worden niet als Engelse woorden vertaald.

## Optimalisatie van vertaling voor China, Japan en Korea

### Bij vertaling naar Engels wordt de eerste letter van de titel automatisch met een hoofdletter geschreven

China, Japan en Korea hebben geen hoofdletters of kleine letters, maar Engelse titels gebruiken doorgaans de eerste letter met een hoofdletter.

`i18` kan de titels in `Markdown` herkennen en zal automatisch de eerste letter van elk woord capitalize bij het vertalen naar een hoofdlettergevoelige taal.

Bijvoorbeeld, `为阅读体验而优化` wordt vertaald naar `Optimized for Reading Experience`.

### Engelse termen in Chinese, Japanse en Koreaanse documenten worden niet vertaald

Chinese, Japanse en Koreaanse documenten bevatten vaak veel Engelse termen.

Bij machinevertaling van Chinese, Japanse en Koreaanse talen is het vaak zo dat ook termen worden meegenomen in de vertaling, zoals in de volgende Chinese zin:

`Falcon 得分超 Llama ？Hugging Face 排名引发争议`

Als je Google of DeepL gebruikt, vertalen ze allebei onjuist Engelse termen die eigenlijk onveranderd zouden moeten blijven (neem Japans en Frans als voorbeeld).

### Google Translate

Vertaald naar Japans: `ファルコンがラマを上回る？ハグ顔ランキングが論争を巻き起こす`

![](//p.3ti.site/1720199391.avif)

Vertaald naar Frans: `Le faucon surpasse le lama ? Le classement Hugging Face suscite la polémique`

`Falcon` wordt vertaald als `faucon` en `Llama` als `lama`. Als eigennamen mogen ze niet worden vertaald.

![](//p.3ti.site/1720199451.avif)

### DeepL Translate

Vertaald naar Japans: `ファルコンがラマに勝利、ハグ顔ランキングが物議を醸す`

![](//p.3ti.site/1720199550.avif)

Vertaald naar Frans (en ook de eigennamen herschrijven en de vreemde `...` toevoegen):

`Un faucon marque un point sur un lama... Le classement des visages étreints suscite la controverse. `

![](//p.3ti.site/1720199603.avif)

### i18n.site Translate

De vertaling van `i18` herkent Engelse termen in Chinese, Japanse en Koreaanse documenten en laat de termen onveranderd.

Bijvoorbeeld, het Japanse vertaalresultaat is:

`Falcon のスコアが Llama よりも高かったですか ? Hugging Face ランキングが論争を引き起こす`

De Franse vertaling is:

`Falcon a obtenu un score supérieur à Llama ? Hugging Face Le classement suscite la controverse`

Alleen als er een spatie tussen het Engelse woord en de Chinese, Japanse of Koreaanse tekst zit, of als de Engelse lengte groter is dan 1, wordt het woord als term beschouwd.

Bijvoorbeeld: `C罗` wordt vertaald als `Cristiano Ronaldo`.

## Kan worden gecombineerd met `i18n.site` voor het bouwen van meertalige websites

`i18` is geïntegreerd in de opdrachtregeltool voor het bouwen van meertalige websites, [`i18n.site`](/i18n.site).

Zie de documentatie van [`i18n.site`](/i18n.site) voor meer details.

## Open source code

De client is volledig open source en 90% van de servercode is open source. [Klik hier om de broncode te bekijken](/i18n.site/src).

We zoeken vrijwilligers die willen bijdragen aan de ontwikkeling van open source-code en het proeflezen van vertaalde teksten.

Als je geïnteresseerd bent, [→ Klik hier om je profiel in te vullen](https://ggl.link/i18n) en meld je vervolgens aan voor [de mailinglijst](https://groups.google.com/u/2/g/i18n-site) voor communicatie.

## Blijf in contact

<button onclick="mailsub()">Klik hier om je te abonneren op productupdates via e-mail</button> en <button onclick="webpush()">schakel browserpushmeldingen in</button>, we zullen je op de hoogte stellen bij productupdates.

Ook welkom om onze sociale accounts te volgen [X.COM: @i18nSite](https://x.com/i18nSite) / [i18n-site.bsky.social](https://bsky.app/profile/i18n-site.bsky.social).