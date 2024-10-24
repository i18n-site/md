<h1 style="display:flex;justify-content:space-between">i18n.site ⋅ Internationale oplossingen<img src="//p.3ti.site/logo.svg" style="user-select:none;margin-top:-1px;width:42px"></h1>

Command-line Markdown- en Yaml-vertaalhulpmiddel, helpt u een internationale documentensite te bouwen, ondersteunt [honderden talen](/i18/LANG_CODE) ..

<pre class="langli" style="display:flex;flex-wrap:wrap;background:transparent;border:1px solid #eee;font-size:12px;box-shadow:0 0 3px inset #eee;padding:12px 5px 4px 12px;justify-content:space-between;"><style>pre.langli i{font-weight:300;font-family:s;margin-right:2px;margin-bottom:8px;font-style:normal;color:#666;border-bottom:1px dashed #ccc;}</style><i>English</i><i>简体中文</i><i>Deutsch</i><i>Français</i><i>Español</i><i>Italiano</i><i>日本語</i><i>Polski</i><i>Português(Brasil)</i><i>Русский</i><i>Nederlands</i><i>Türkçe</i><i>Svenska</i><i>Čeština</i><i>Українська</i><i>Magyar</i><i>Indonesia</i><i>한국어</i><i>Română</i><i>Norsk</i><i>Slovenčina</i><i>Suomi</i><i>العربية</i><i>Català</i><i>Dansk</i><i>فارسی</i><i>Tiếng Việt</i><i>Lietuvių</i><i>Hrvatski</i><i>עברית</i><i>Slovenščina</i><i>српски језик</i><i>Esperanto</i><i>Ελληνικά</i><i>Eesti</i><i>Български</i><i>ไทย</i><i>Haitian Creole</i><i>Íslenska</i><i>नेपाली</i><i>తెలుగు</i><i>Latine</i><i>Galego</i><i>हिन्दी</i><i>Cebuano</i><i>Melayu</i><i>Euskara</i><i>Bosnian</i><i>Letzeburgesch</i><i>Latviešu</i><i>ქართული</i><i>Shqip</i><i>मराठी</i><i>Azərbaycan</i><i>Македонски</i><i>Wikang Tagalog</i><i>Cymraeg</i><i>বাংলা</i><i>தமிழ்</i><i>Basa Jawa</i><i>Basa Sunda</i><i>Беларуская</i><i>Kurdî(Navîn)</i><i>Afrikaans</i><i>Frysk</i><i>Toğikī</i><i>اردو</i><i>Kichwa</i><i>മലയാളം</i><i>Kiswahili</i><i>Gaeilge</i><i>Uzbek(Latin)</i><i>Te Reo Māori</i><i>Èdè Yorùbá</i><i>ಕನ್ನಡ</i><i>አማርኛ</i><i>Հայերեն</i><i>অসমীয়া</i><i>Aymar Aru</i><i>Bamanankan</i><i>Bhojpuri</i><i>正體中文</i><i>Corsu</i><i>ދިވެހިބަސް</i><i>Eʋegbe</i><i>Filipino</i><i>Guarani</i><i>ગુજરાતી</i><i>Hausa</i><i>Hawaiian</i><i>Hmong</i><i>Ásụ̀sụ́ Ìgbò</i><i>Iloko</i><i>Қазақ Тілі</i><i>ខ្មែរ</i><i>Kinyarwanda</i><i>سۆرانی</i><i>Кыргызча</i><i>ລາວ</i><i>Lingála</i><i>Ganda</i><i>Maithili</i><i>Malagasy</i><i>Malti</i><i>монгол</i><i>မြန်မာ</i><i>ChiCheŵa</i><i>ଓଡ଼ିଆ</i><i>Afaan Oromoo</i><i>پښتو</i><i>ਪੰਜਾਬੀ</i><i>Gagana Sāmoa</i><i>Sanskrit</i><i>Sesotho sa Leboa</i><i>Sesotho</i><i>chiShona</i><i>سنڌي</i><i>සිංහල</i><i>Soomaali</i><i>Татар</i><i>ትግር</i><i>Xitsonga</i><i>Türkmen Dili</i><i>Akan</i><i>isiXhosa</i><i>ייִדיש</i><i>Isi-Zulu</i></pre>

## Inleiding

Het internet heeft de fysieke afstand tussen mensen doen verdwijnen, maar taalverschillen blijven een barrière voor menselijke eenheid.

hoewel browsers ingebouwde vertaalfuncties hebben, kunnen zoekmachines nog steeds niet in meerdere talen zoeken.

Sociale media, e-mail; mensen zijn gewend om zich te concentreren op informatie in hun moedertaal.

In een tijd van informatie-uitbarsting en een wereldwijde markt, **het ondersteunen van meerdere talen is een fundamentele vaardigheid** om de schaarse aandacht te trekken.

Drinkt u een persoonlijk open source-project dat een breder publiek wil bereiken, moet u vanaf het begin een geschikte internationale technologiekeuze maken.

## <a rel=id href="#project" id="project"></a> Projectbeschrijving

Deze website biedt momenteel twee open source command-line tools:

* [i18 : MarkDown Command-line Vertaalhulpmiddel](/i18/feature)
* [i18n.site : Meertalige Statische Websitegenerator](/i18n.site)

### <a rel=id href="#i18" id="i18"></a> i18: MarkDown Command-line Vertaalhulpmiddel

Een command-line tool ( [broncode](https://github.com/i18n-site/rust/tree/main/i18) ) dat `Markdown` en `YAML` in meerdere talen vertaalt.

Behoudt het `Markdown`-formaat perfect. Herkent bestandswijzigingen en vertaalt alleen de aangepaste bestanden.

De vertaling is bewerkbaar.

Als de oorspronkelijke tekst wordt aangepast en opnieuw machinaal wordt vertaald, zullen handmatige wijzigingen in de vertaling niet worden overschreven (tenzij de betreffende paragraaf in de oorspronkelijke tekst is gewijzigd).

> [!TIP]
> Wij omarmen de `UNIX`-filosofie "Alles is een bestand" en kunnen vertalingen in honderden talen beheren zonder complexe, zware enterpriseproducten te gebruiken.
> Gebruik uw vertrouwde hulpmiddelen om `Markdown`-vertalingen te bewerken (maar voeg geen alinea's toe of verwijder er) en uw vertrouwde methoden voor versiebeheer toe te passen.
> Er kan een code-repository worden aangemaakt voor taalbestanden als open source, en met `Pull Request`-processen kunnen wereldwijde gebruikers bijdragen aan de voortdurende verbetering van vertalingen. Naadloze integratie met [GitHub](//github.com) en andere open source-gemeenschappen.

[→ Gebruiksaanwijzing, raadpleeg de projectdocumentatie](/i18).

## De beste machinevertaalkwaliteit

We hebben een nieuwe generatie vertaaltechnologie ontwikkeld die de voordelen van traditionele machinevertaalmodellen en grote taalmodellen integreert, waardoor vertalingen accuraat, vloeiend en elegant zijn.

Blind tests tonen aan dat onze vertaalkwaliteit aanzienlijk beter is dan die van vergelijkbare diensten.

Om dezelfde kwaliteit te bereiken, is de hoeveelheid handmatige bewerking die Google Translate en `ChatGPT` vereisen respectievelijk `2.67` keer en `3.15` keer zo groot als die van ons.

#### <a rel=id href="#price" id="price"></a> Zeer concurrerende prijzen

|                                                                                   | USD/miljoen woorden |
| --------------------------------------------------------------------------------- | ------------- |
| [i18n.site](https://i18n.site)                                                    | 9             |
| [Microsoft](https://azure.microsoft.com/pricing/details/cognitive-services/translator) | 10            |
| [Amazon](https://aws.amazon.com/translate/pricing)                                | 15            |
| [Google](https://cloud.google.com/translate/pricing)                                | 20            |
| [DeepL](https://www.deepl.com/zh/pro#developer)                                  | 25            |

[Klik hier om de github te autoriseren en automatisch i18n.site te volgen](https://github.com/login/oauth/authorize?client_id=Ov23liuGAmK0plc9FgB3&scope=user:email,user:follow,public_repo), **en een bonus van $50 te ontvangen**.

Let op: Het aantal factureerbare karakters = het aantal [Unicode](https://en.wikipedia.org/wiki/Unicode) in de bronbestanden × het aantal talen in de vertaling

### i18n.site: Meertalige Statische Websitegenerator

Een command-line tool ( [broncode](https://github.com/i18n-site/rust/tree/main/i18n-site) ) voor het genereren van meertalige statische websites.

Puur statisch, geoptimaliseerd voor leesbaarheid, geïntegreerd met [i18](#i18) voor vertaling, de ultieme keuze voor het bouwen van projectdocumentatiesites.

Het onderliggende front-end framework maakt gebruik van een volledige plug-in-architectuur, is gemakkelijk aan te passen en kan desgewenst back-end functionaliteiten integreren.

Deze site is ontwikkeld op basis van dit framework en bevat gebruikers-, betalings- en andere functionaliteiten ( [broncode](/i18n.site/src) ); een gedetailleerde handleiding zal later worden gepubliceerd.

[→ Gebruiksaanwijzing, raadpleeg de projectdocumentatie](/i18n.site).

## Blijf in contact

<button onclick="mailsub()">Klik hier om je te abonneren op productupdates via e-mail</button> en <button onclick="webpush()">schakel browserpushmeldingen in</button>, we zullen je op de hoogte stellen bij productupdates.

Ook welkom om onze sociale accounts te volgen [X.COM: @i18nSite](https://x.com/i18nSite) / [i18n-site.bsky.social](https://bsky.app/profile/i18n-site.bsky.social).

Als je problemen hebt, [→ plaats dan een bericht op het gebruikersforum](https://groups.google.com/u/1/g/i18n).

## Over Ons

> Ze zeiden: "Kom, bouw een toren die tot de hemel reikt, en maak de mensheid beroemd."
>
> De Heer zag dit en zei: "De mensen hebben dezelfde taal en hetzelfde bloed. Nu dit is bereikt, zal niets onmogelijk zijn."
>
> Daarna verspreidden de mensen zich over de aarde, omdat ze elkaars taal niet meer konden verstaan.

<p style="text-align:right">— Bijbel, Genesis</p>

Wij willen een internet zonder taalbarrières.
Wij hopen dat de hele mensheid samenkomt door een gemeenschappelijke droom.

De vertaling en documentatie van Markdown zijn pas het begin.
Synchroniseer inhoud naar sociale media;
Ondersteun tweetalige opmerkingen en chatrooms;
Een meertalig ticketsysteem dat beloningen uitkeert;
Een markt voor internationale front-end componenten;
Er is nog zoveel meer dat we willen doen.

Wij geloven in open source en houden van delen,
Welkom om samen een grenzeloze toekomst te creëren.

> [!NOTE]
> Wij kijken ernaar uit om gelijkgestemde mensen te ontmoeten in de immense menselijke samenleving.
> We zoeken vrijwilligers die willen bijdragen aan de ontwikkeling van open source-code en het proeflezen van vertaalde teksten.
> Als je geïnteresseerd bent, [→ Klik hier om je profiel in te vullen](https://ggl.link/i18n) en meld je vervolgens aan voor [de mailinglijst](https://groups.google.com/u/2/g/i18n-site) voor communicatie.