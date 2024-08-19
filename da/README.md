<h1 style="display:flex;justify-content:space-between">i18n.site Internationale løsninger <img src="//p.3ti.site/logo.svg" style="user-select:none;margin-top:-1px;width:42px"></h1>

Kommandolinje Markdown, Yaml-oversættelsesværktøj, hjælper dig med at bygge et internationalt dokumentationswebsted, der understøtter [hundredvis af sprog](/i18/LANG_CODE) ..

<pre class="langli" style="display:flex;flex-wrap:wrap;background:transparent;border:1px solid #eee;font-size:12px;box-shadow:0 0 3px inset #eee;padding:12px 5px 4px 12px;justify-content:space-between;"><style>pre.langli i{font-weight:300;font-family:s;margin-right:2px;margin-bottom:8px;font-style:normal;color:#666;border-bottom:1px dashed #ccc;}</style><i>English</i><i>简体中文</i><i>Deutsch</i><i>Français</i><i>Español</i><i>Italiano</i><i>日本語</i><i>Polski</i><i>Português(Brasil)</i><i>Русский</i><i>Nederlands</i><i>Türkçe</i><i>Svenska</i><i>Čeština</i><i>Українська</i><i>Magyar</i><i>Indonesia</i><i>한국어</i><i>Română</i><i>Norsk</i><i>Slovenčina</i><i>Suomi</i><i>العربية</i><i>Català</i><i>Dansk</i><i>فارسی</i><i>Tiếng Việt</i><i>Lietuvių</i><i>Hrvatski</i><i>עברית</i><i>Slovenščina</i><i>српски језик</i><i>Esperanto</i><i>Ελληνικά</i><i>Eesti</i><i>Български</i><i>ไทย</i><i>Haitian Creole</i><i>Íslenska</i><i>नेपाली</i><i>తెలుగు</i><i>Latine</i><i>Galego</i><i>हिन्दी</i><i>Cebuano</i><i>Melayu</i><i>Euskara</i><i>Bosnian</i><i>Letzeburgesch</i><i>Latviešu</i><i>ქართული</i><i>Shqip</i><i>मराठी</i><i>Azərbaycan</i><i>Македонски</i><i>Wikang Tagalog</i><i>Cymraeg</i><i>বাংলা</i><i>தமிழ்</i><i>Basa Jawa</i><i>Basa Sunda</i><i>Беларуская</i><i>Kurdî(Navîn)</i><i>Afrikaans</i><i>Frysk</i><i>Toğikī</i><i>اردو</i><i>Kichwa</i><i>മലയാളം</i><i>Kiswahili</i><i>Gaeilge</i><i>Uzbek(Latin)</i><i>Te Reo Māori</i><i>Èdè Yorùbá</i><i>ಕನ್ನಡ</i><i>አማርኛ</i><i>Հայերեն</i><i>অসমীয়া</i><i>Aymar Aru</i><i>Bamanankan</i><i>Bhojpuri</i><i>正體中文</i><i>Corsu</i><i>ދިވެހިބަސް</i><i>Eʋegbe</i><i>Filipino</i><i>Guarani</i><i>ગુજરાતી</i><i>Hausa</i><i>Hawaiian</i><i>Hmong</i><i>Ásụ̀sụ́ Ìgbò</i><i>Iloko</i><i>Қазақ Тілі</i><i>ខ្មែរ</i><i>Kinyarwanda</i><i>سۆرانی</i><i>Кыргызча</i><i>ລາວ</i><i>Lingála</i><i>Ganda</i><i>Maithili</i><i>Malagasy</i><i>Malti</i><i>монгол</i><i>မြန်မာ</i><i>ChiCheŵa</i><i>ଓଡ଼ିଆ</i><i>Afaan Oromoo</i><i>پښتو</i><i>ਪੰਜਾਬੀ</i><i>Gagana Sāmoa</i><i>Sanskrit</i><i>Sesotho sa Leboa</i><i>Sesotho</i><i>chiShona</i><i>سنڌي</i><i>සිංහල</i><i>Soomaali</i><i>Татар</i><i>ትግር</i><i>Xitsonga</i><i>Türkmen Dili</i><i>Akan</i><i>isiXhosa</i><i>ייִדיש</i><i>Isi-Zulu</i></pre>

## Forord

Internet har elimineret den fysiske afstand, men sprogbarrierer forbliver en hindring for menneskelig enhed.

Selvom browsere har indbygget oversættelse, kan søgemaskiner stadig ikke keres på tværs af sprog.

Sociale medier, e-mail – folk er vant til at fokusere på information på deres modersmål.

Med informationseksplosion og globalt marked, for at konkurrere om knap opmærksomhed, **er understøttelse af flere sprog en grundlæggende evne**.

Selv små open source-projekter, der ønsker at nå et bredere publikum, bør fra starten vælge internationaliseringsvenlig teknologi.

## <a rel=id href="#project" id="project"></a> Projektbeskrivelse

Dette websted tilbyder i øjeblikket to open source kommandolinjeværktøjer:

* [i18: MarkDown kommandolinje-oversættelsesværktøj](/i18/feature)
* [i18n.site: Flersproget statisk webstedsgenerator](/i18n.site)

### <a rel=id href="#i18" id="i18"></a> i18: MarkDown kommandolinje oversættelsesværktøj

Et kommandolinjeværktøj ( [kildekode](https://github.com/i18n-site/rust/tree/main/i18) ), der oversætter `Markdown` og `YAML` til flere sprog.

Kan bevare `Markdown`-formatet fejlfrit. Kan genkende ændringer i filer og kun oversætte de ændrede dele.

Oversættelsen kan redigeres.

Rediger den originale tekst og maskinoversæt den igen; de manuelle ændringer af oversættelsen vil ikke blive overskrevet (hvis den oprindelige tekst ikke er ændret).

Vi abonnerer på filosofien " `UNIX`: Alt er en fil" og kan håndtere oversættelser til hundredvis af sprog uden komplekse virksomhedsløsninger.

Du kan redigere `Markdown` med dine foretrukne værktøjer (uden at tilføje eller fjerne afsnit) og bruge din foretrukne versionskontrol.

En kodebase for sprogfiler kan oprettes som open source, og ved hjælp af `Pull Request`-processer kan globale brugere bidrage til løbende forbedringer af oversættelserne. Problemfri integration med [GitHub](//github.com) og andre open source-fællesskaber.

[→ Brugervejledning, se projektdokumentationen](/i18).

## Den bedste maskinoversættelseskvalitet

Vi har udviklet en ny generation af oversættelsesteknologi, der kombinerer traditionelle maskinoversættelsesmodeller og store sprogmodeller for at skabe præcise, glatte og elegante oversættelser.

Blindtestresultater viser, at vores oversættelseskvalitet er væsentligt bedre sammenlignet med lignende tjenester.

For at opnå samme kvalitet kræver Google Translate og `ChatGPT` henholdsvis `2.67` og `3.15` gange så meget manuel redigering som vores løsning.

#### <a rel=id href="#price" id="price"></a> Meget konkurrencedygtige priser

|                                                                                   | USD/million ord |
| --------------------------------------------------------------------------------- | ------------- |
| [i18n.site](https://i18n.site)                                                    | 9             |
| [Microsoft](https://azure.microsoft.com/pricing/details/cognitive-services/translator) | 10            |
| [Amazon](https://aws.amazon.com/translate/pricing)                                | 15            |
| [Google](https://cloud.google.com/translate/pricing)                                | 20            |
| [DeepL](https://www.deepl.com/zh/pro#developer)                                  | 25            |

[Klik her for at godkende og automatisk i18n.site 's github](https://github.com/login/oauth/authorize?client_id=Ov23liuGAmK0plc9FgB3&amp;scope=user:email,user:follow,public_repo) og **modtage bonus $50** .

Bemærk: Fakturerbare tegn = kildefilens [unicode-tegn](https://en.wikipedia.org/wiki/Unicode) × antallet af oversættelsessprog

### i18n.site: Flersproget statisk webstedsgenerator

Kommandolinjeværktøj ( [kildekode](https://github.com/i18n-site/rust/tree/main/i18n-site) ) til at generere flersprogede statiske websteder.

Pure static, optimeret til læseoplevelse, integreret med [i18](#i18) oversættelse, ideel til at bygge projektets dokumentationswebsted.

Bruger en fuld plugin-arkitektur i den underliggende front-end-ramme, nem at udvide. Kan integreres med back-end-funktioner efter behov.

Dette websted er udviklet baseret på denne ramme og inkluderer bruger- og betalingsfunktioner ( [kildekode](/i18n.site/src) ); en detaljeret vejledning vil følge senere.

[→ Brugervejledning, se projektdokumentationen](/i18n.site).

## Hold kontakten

<button onclick="mailsub()">Klik her for at abonnere på produktupdates via e-mail</button> og <button onclick="webpush()">aktiver browser-push</button>. Vi vil informere dig, når der er produktupdates.

Følg også vores sociale konti [X.COM: @i18nSite](https://x.com/i18nSite) / [i18n-site.bsky.social](https://bsky.app/profile/i18n-site.bsky.social).

Hvis du oplever problemer, [→ skriv i brugerforummet](https://groups.google.com/u/1/g/i18n).

## OM OS

> De sagde: "Kom, lad os bygge et tårn, der når til himlen, og gør menneskeheden kendt."
>
> Gud så det og sagde: "Menneskeheden har samme sprog og race. Nu kan alt ske."
>
> Derfor spredte han menneskeheden, så de ikke kunne forstå hinandens sprog og blev spredt over hele jorden.

<p style="text-align:right">── Bibel, Første Mosebog</p>

Vi drømmer om et internet uden sprogbarrierer.
Vi håber, at hele menneskeheden kan mødes om fælles drømme.

Markdown-oversættelse og dokumentationswebsteder er kun begyndelsen.
Synkroniser indhold til sociale medier;
Støt tosprogede kommentarer og chatrum;
et flersproget system til opgaver med mulighed for belønninger;
et marked for internationale front-end komponenter;
Der er meget mere, vi vil opnå.

Vi ser frem til at møde ligesindede i dette store menneskehav.
Vi søger frivillige til at deltage i udviklingen af开源 kode og korrekturlæsning af oversatte tekster.
Hvis du er interesseret, så [→ Klik her for at udfylde din profil](https://ggl.link/i18n) og tilmeld dig [mailinglisten](https://groups.google.com/u/2/g/i18n-site) for kommunikation.

Vi tror på open source og deling,
Velkommen til at skabe en grænseløs fremtid sammen.