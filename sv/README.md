<h1 style="display:flex;justify-content:space-between">i18n.site Internationella lösningar<img src="//p.3ti.site/logo.svg" style="user-select:none;margin-top:-1px;width:42px"></h1>

Kommandorad Markdown Yaml översättningsverktyg, hjälper dig att bygga en internationell dokumentwebbplats som stöder [hundratals språk](/i18/LANG_CODE) ...

<pre class="langli" style="display:flex;flex-wrap:wrap;background:transparent;border:1px solid #eee;font-size:12px;box-shadow:0 0 3px inset #eee;padding:12px 5px 4px 12px;justify-content:space-between;"><style>pre.langli i{font-weight:300;font-family:s;margin-right:2px;margin-bottom:8px;font-style:normal;color:#666;border-bottom:1px dashed #ccc;}</style><i>English</i><i>简体中文</i><i>Deutsch</i><i>Français</i><i>Español</i><i>Italiano</i><i>日本語</i><i>Polski</i><i>Português(Brasil)</i><i>Русский</i><i>Nederlands</i><i>Türkçe</i><i>Svenska</i><i>Čeština</i><i>Українська</i><i>Magyar</i><i>Indonesia</i><i>한국어</i><i>Română</i><i>Norsk</i><i>Slovenčina</i><i>Suomi</i><i>العربية</i><i>Català</i><i>Dansk</i><i>فارسی</i><i>Tiếng Việt</i><i>Lietuvių</i><i>Hrvatski</i><i>עברית</i><i>Slovenščina</i><i>српски језик</i><i>Esperanto</i><i>Ελληνικά</i><i>Eesti</i><i>Български</i><i>ไทย</i><i>Haitian Creole</i><i>Íslenska</i><i>नेपाली</i><i>తెలుగు</i><i>Latine</i><i>Galego</i><i>हिन्दी</i><i>Cebuano</i><i>Melayu</i><i>Euskara</i><i>Bosnian</i><i>Letzeburgesch</i><i>Latviešu</i><i>ქართული</i><i>Shqip</i><i>मराठी</i><i>Azərbaycan</i><i>Македонски</i><i>Wikang Tagalog</i><i>Cymraeg</i><i>বাংলা</i><i>தமிழ்</i><i>Basa Jawa</i><i>Basa Sunda</i><i>Беларуская</i><i>Kurdî(Navîn)</i><i>Afrikaans</i><i>Frysk</i><i>Toğikī</i><i>اردو</i><i>Kichwa</i><i>മലയാളം</i><i>Kiswahili</i><i>Gaeilge</i><i>Uzbek(Latin)</i><i>Te Reo Māori</i><i>Èdè Yorùbá</i><i>ಕನ್ನಡ</i><i>አማርኛ</i><i>Հայերեն</i><i>অসমীয়া</i><i>Aymar Aru</i><i>Bamanankan</i><i>Bhojpuri</i><i>正體中文</i><i>Corsu</i><i>ދިވެހިބަސް</i><i>Eʋegbe</i><i>Filipino</i><i>Guarani</i><i>ગુજરાતી</i><i>Hausa</i><i>Hawaiian</i><i>Hmong</i><i>Ásụ̀sụ́ Ìgbò</i><i>Iloko</i><i>Қазақ Тілі</i><i>ខ្មែរ</i><i>Kinyarwanda</i><i>سۆرانی</i><i>Кыргызча</i><i>ລາວ</i><i>Lingála</i><i>Ganda</i><i>Maithili</i><i>Malagasy</i><i>Malti</i><i>монгол</i><i>မြန်မာ</i><i>ChiCheŵa</i><i>ଓଡ଼ିଆ</i><i>Afaan Oromoo</i><i>پښتو</i><i>ਪੰਜਾਬੀ</i><i>Gagana Sāmoa</i><i>Sanskrit</i><i>Sesotho sa Leboa</i><i>Sesotho</i><i>chiShona</i><i>سنڌي</i><i>සිංහල</i><i>Soomaali</i><i>Татар</i><i>ትግር</i><i>Xitsonga</i><i>Türkmen Dili</i><i>Akan</i><i>isiXhosa</i><i>ייִדיש</i><i>Isi-Zulu</i></pre>

## Förord

Internet har eliminerat avståndet i det fysiska rummet, men språkskillnader hindrar fortfarande mänsklig enhet.

Även om webbläsaren har inbyggd översättning kan sökmotorer fortfarande inte söka på olika språk.

Genom sociala medier och mejl är människor vana vid att fokusera på informationskällor på sitt eget modersmål.

Med informationsexplosion och global marknad, för att konkurrera om knapp uppmärksamhet, **är stöd för flera språk en grundläggande färdighet** .

Även om det är ett personligt projekt med öppen källkod som vill påverka en bredare publik bör det göra ett internationellt teknikval från början.

## <a rel=id href="#project" id="project"></a> Projektintroduktion

Den här webbplatsen tillhandahåller för närvarande två kommandoradsverktyg med öppen källkod:

* [i18 : MarkDown Kommandoradsöversättningsverktyg](/i18/feature)
* [i18n.site : Flerspråkig statisk webbplatsgenerator](/i18n.site)

### <a rel=id href="#i18" id="i18"></a> i18: MarkDown kommandoradsöversättningsverktyg

Ett kommandoradsverktyg ( [källkod](https://github.com/i18n-site/rust/tree/main/i18) ) som översätter `Markdown` och `YAML` till flera språk.

Kan perfekt behålla formatet `Markdown` . Kan identifiera filändringar och endast översätta ändrade filer.

Översättningen är redigerbar.

Ändra originaltexten och maskinöversätt den igen, de manuella ändringarna av översättningen kommer inte att skrivas över (om detta stycke i originaltexten inte har ändrats).

Du kan använda de mest välbekanta verktygen för att redigera `Markdown` (men du kan inte lägga till eller ta bort stycken), och använda det mest välbekanta sättet att göra versionskontroll.

En kodbas kan skapas som en öppen källkod för språkfiler, och med hjälp av `Pull Request` processer kan globala användare delta i den kontinuerliga optimeringen av översättningar. Sömlös [github](//github.com) och andra gemenskaper med öppen källkod.

> [!TIP]
> Vi omfamnar UNIX-filosofin "allt är en fil" och kan hantera översättningar till hundratals språk utan att introducera komplexa och krångliga företagslösningar.

[→ För användningsinstruktioner, läs projektdokumentationen](/i18) .

## Maskinöversättning Av Bästa Kvalitet

Vi har utvecklat en ny generation av översättningsteknik som kombinerar de tekniska fördelarna med traditionella maskinöversättningsmodeller och stora språkmodeller för att göra översättningar korrekta, smidiga och eleganta.

Blindtester visar att vår översättningskvalitet är betydligt bättre jämfört med liknande tjänster.

För att uppnå samma kvalitet är mängden manuell redigering som krävs av Google Translate och `ChatGPT` `2.67` gånger respektive `3.15` gånger så stor som vår.

#### <a rel=id href="#price" id="price"></a> Extremt konkurrenskraftiga priser

|                                                                                   | USD/miljon ord |
| --------------------------------------------------------------------------------- | ------------- |
| [i18n.site](https://i18n.site)                                                    | 9             |
| [Microsoft](https://azure.microsoft.com/pricing/details/cognitive-services/translator) | 10            |
| [Amazon](https://aws.amazon.com/translate/pricing)                                | 15            |
| [Google](https://cloud.google.com/translate/pricing)                                | 20            |
| [DeepL](https://www.deepl.com/zh/pro#developer)                                  | 25            |

[➤ Klicka här för att auktorisera och automatiskt i18n.site github Library](https://github.com/login/oauth/authorize?client_id=Ov23liuGAmK0plc9FgB3&amp;scope=user:email,user:follow,public_repo) och **få bonus $50** .

Obs: Antalet fakturerbara tecken = [antalet unicode](https://en.wikipedia.org/wiki/Unicode) i källfilen × antalet språk i översättningen

### i18n.site: Multi-Language Static site Generator

Kommandoradsverktyg ( [källkod](https://github.com/i18n-site/rust/tree/main/i18n-site) ) för att generera statiska webbplatser på flera språk.

Rent statisk, optimerad för läsupplevelse, integrerad med översättningen av [i18](#i18) det är det bästa valet för att bygga en projektdokumentsajt.

Det underliggande front-end-ramverket antar en komplett plug-in-arkitektur, vilket är lätt för sekundär utveckling. Om nödvändigt kan back-end-funktioner integreras.

Denna webbplats är utvecklad utifrån detta ramverk och inkluderar användar-, betalnings- och andra funktioner ( [källkod](/i18n.site/c/src) ) En detaljerad handledning kommer att skrivas senare.

[→ För användningsinstruktioner, läs projektdokumentationen](/i18n.site) .

## Hålla Kontakten

<button onclick="mailsub()">Klicka på det här e-postmeddelandet för att prenumerera på produktuppdateringar</button> och <button onclick="webpush()">aktivera webbläsar-push</button> . Vi kommer att meddela dig när produktuppdateringar görs.

/ [i18n-site.bsky.social](https://bsky.app/profile/i18n-site.bsky.social) följa våra sociala konton [X.COM: @i18nSite](https://x.com/i18nSite)

Om du stöter på problem [→ vänligen posta i användarforumet](https://groups.google.com/u/1/g/i18n) .

## Om Oss

> De sa: Kom, bygg ett torn som når himlen och gör människosläktet känd.
>
> HERREN såg detta och sade: "Alla människor har samma språk och ras. Nu när detta har fullbordats kommer allt att ske."
>
> Sedan kom det, vilket gjorde att människor inte kunde förstå varandras språk och spreds på olika platser.

<p style="text-align:right">──Bibel·Första Mosebok</p>

Vi vill bygga ett internet utan isolering av språkkommunikation.
Vi hoppas att hela mänskligheten kommer att mötas med en gemensam dröm.

Markdown översättning och dokumentation webbplatser är bara början.
Synkronisera innehållsinlägg till sociala medier;
Stöd tvåspråkiga kommentarer och chattrum;
Ett flerspråkigt biljettsystem som kan betala ut belöningar;
En försäljningsmarknad för internationella front-end-komponenter;
Det finns mycket mer vi vill göra.

Vi tror på öppen källkod och älskar att dela,
Välkommen att skapa en gränslös framtid tillsammans.

> [!NOTE]
> Vi ser fram emot att träffa likasinnade i det stora folkhavet.
> Vi söker volontärer för att delta i utvecklingen av öppen källkod och korrekturläsning av översatta texter.
> Om du är intresserad, vänligen [→ Klicka här för att fylla i din profil](https://ggl.link/i18n) och gå sedan med i [e-postlistan](https://groups.google.com/u/2/g/i18n-site) för kommunikation.