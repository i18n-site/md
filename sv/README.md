<h1 style="display:flex;justify-content:space-between">i18n.site ⋅ Internationella lösningar <img src="//p.3ti.site/logo.svg" style="user-select:none;margin-top:-1px;width:42px"></h1>

Kommandorads Markdown- och YAML-översättningsverktyg, hjälper dig att skapa en internationell dokumentwebbplats som stöder [hundratals språk](/i18/LANG_CODE) …

<pre class="langli" style="display:flex;flex-wrap:wrap;background:transparent;border:1px solid #eee;font-size:12px;box-shadow:0 0 3px inset #eee;padding:12px 5px 4px 12px;justify-content:space-between;"><style>pre.langli i{font-weight:300;font-family:s;margin-right:2px;margin-bottom:8px;font-style:normal;color:#666;border-bottom:1px dashed #ccc;}</style><i>English</i><i>简体中文</i><i>Deutsch</i><i>Français</i><i>Español</i><i>Italiano</i><i>日本語</i><i>Polski</i><i>Português(Brasil)</i><i>Русский</i><i>Nederlands</i><i>Türkçe</i><i>Svenska</i><i>Čeština</i><i>Українська</i><i>Magyar</i><i>Indonesia</i><i>한국어</i><i>Română</i><i>Norsk</i><i>Slovenčina</i><i>Suomi</i><i>العربية</i><i>Català</i><i>Dansk</i><i>فارسی</i><i>Tiếng Việt</i><i>Lietuvių</i><i>Hrvatski</i><i>עברית</i><i>Slovenščina</i><i>српски језик</i><i>Esperanto</i><i>Ελληνικά</i><i>Eesti</i><i>Български</i><i>ไทย</i><i>Haitian Creole</i><i>Íslenska</i><i>नेपाली</i><i>తెలుగు</i><i>Latine</i><i>Galego</i><i>हिन्दी</i><i>Cebuano</i><i>Melayu</i><i>Euskara</i><i>Bosnian</i><i>Letzeburgesch</i><i>Latviešu</i><i>ქართული</i><i>Shqip</i><i>मराठी</i><i>Azərbaycan</i><i>Македонски</i><i>Wikang Tagalog</i><i>Cymraeg</i><i>বাংলা</i><i>தமிழ்</i><i>Basa Jawa</i><i>Basa Sunda</i><i>Беларуская</i><i>Kurdî(Navîn)</i><i>Afrikaans</i><i>Frysk</i><i>Toğikī</i><i>اردو</i><i>Kichwa</i><i>മലയാളം</i><i>Kiswahili</i><i>Gaeilge</i><i>Uzbek(Latin)</i><i>Te Reo Māori</i><i>Èdè Yorùbá</i><i>ಕನ್ನಡ</i><i>አማርኛ</i><i>Հայերեն</i><i>অসমীয়া</i><i>Aymar Aru</i><i>Bamanankan</i><i>Bhojpuri</i><i>正體中文</i><i>Corsu</i><i>ދިވެހިބަސް</i><i>Eʋegbe</i><i>Filipino</i><i>Guarani</i><i>ગુજરાતી</i><i>Hausa</i><i>Hawaiian</i><i>Hmong</i><i>Ásụ̀sụ́ Ìgbò</i><i>Iloko</i><i>Қазақ Тілі</i><i>ខ្មែរ</i><i>Kinyarwanda</i><i>سۆرانی</i><i>Кыргызча</i><i>ລາວ</i><i>Lingála</i><i>Ganda</i><i>Maithili</i><i>Malagasy</i><i>Malti</i><i>монгол</i><i>မြန်မာ</i><i>ChiCheŵa</i><i>ଓଡ଼ିଆ</i><i>Afaan Oromoo</i><i>پښتو</i><i>ਪੰਜਾਬੀ</i><i>Gagana Sāmoa</i><i>Sanskrit</i><i>Sesotho sa Leboa</i><i>Sesotho</i><i>chiShona</i><i>سنڌي</i><i>සිංහල</i><i>Soomaali</i><i>Татар</i><i>ትግር</i><i>Xitsonga</i><i>Türkmen Dili</i><i>Akan</i><i>isiXhosa</i><i>ייִדיש</i><i>Isi-Zulu</i></pre>

## Inledning

Internet har suddat ut fysiska avstånd, men språkliga skillnader fortsätter att hämma mänsklig enhet.

Trots att webbläsare har inbyggd översättning kan sökmotorer fortfarande inte utföra språköverskridande sökningar.

Sociala medier, e-post – människor tenderar att fokusera på information på sitt modersmål.

I en värld av informationsexplosion och global marknad, för att fångar uppmärksamhet, **att stödja flera språk är en grundläggande färdighet**.

Även för personliga öppna källkodprojekt som vill nå en bredare publik, bör en internationell teknisk val görs från början.

## <a rel=id href="#project" id="project"></a> Projektöversikt

Denna webbplats erbjuder för närvarande två öppna källkodskommandoradsverktyg:

* [i18 : MarkDown-kommandoradsöversättningsverktyg](/i18/feature)
* [i18n.site : Flerspråkig statisk webbplatsgenerator](/i18n.site)

### <a rel=id href="#i18" id="i18"></a> i18: MarkDown-kommandoradsöversättningsverktyg

Ett kommandoradsverktyg ( [källkod](https://github.com/i18n-site/rust/tree/main/i18) ) som översätter `Markdown` och `YAML` till flera språk.

Kan perfekt behålla `Markdown`-formatet. Kan identifiera filändringar och endast översätta ändrade filer.

Översättningen är redigerbar.

Ändra originaltexten och gör en ny maskinöversättning, de manuella ändringarna av översättningen kommer inte att skrivas över (om detta stycke i originaltexten inte har ändrats).

Vi följer `UNIX`-filosofin "Allt är en fil" och kan hantera översättningar till hundratals språk utan att behöva komplexa företagslösningar.

Du kan använda dina mest bekanta verktyg för att redigera `Markdown`-översättningar (men inte lägga till eller ta bort stycken) och använda din favoritmetod för versionskontroll.

Du kan skapa en kodbank för språkfiler som öppen källkod och med hjälp av `Pull Request`-processer låta globala användare delta i kontinuerlig översättningsförbättring. Sömlös integration med [github](//github.com) och andra öppna källkodsgemenskaper.

[→ Användarguide, läs projektets dokumentation](/i18).

## Maskinöversättning av bästa kvalitet

Vi har utvecklat en ny generation av översättningsteknologi som integrerar de tekniska fördelarna med traditionella maskinöversättningsmodeller och stora språkmodeller för att göra översättningar korrekta, smidiga och eleganta.

Blindtester visar att vår översättningskvalitet är betydligt bättre jämfört med liknande tjänster.

För att uppnå samma kvalitet är mängden manuell redigering som krävs av Google Translate och `ChatGPT` `2.67` gånger respektive `3.15` gånger så stor som vår.

#### <a rel=id href="#price" id="price"></a> Extremt konkurrenskraftiga priser

|                                                                                   | USD/miljon ord |
| --------------------------------------------------------------------------------- | ------------- |
| [i18n.site](https://i18n.site)                                                    | 9             |
| [微软](https://azure.microsoft.com/pricing/details/cognitive-services/translator) | 10            |
| [亚马逊](https://aws.amazon.com/translate/pricing)                                | 15            |
| [谷歌](https://cloud.google.com/translate/pricing)                                | 20            |
| [DeepL](https://www.deepl.com/zh/pro#developer)                                  | 25            |

[Klicka här för att auktorisera och automatiskt följa i18n.site på GitHub](https://github.com/login/oauth/authorize?client_id=Ov23liuGAmK0plc9FgB3&scope=user:email,user:follow,public_repo), **och få $50 i bonus**.

Obs: Antalet fakturerbara tecken = [antalet unicode](https://en.wikipedia.org/wiki/Unicode) i källfilen × antalet språk i översättningen

### i18n.site: Flerspråkig statisk webbplatsgenerator

Kommandoradsverktyg ( [källkod](https://github.com/i18n-site/rust/tree/main/i18n-site) ) för att generera flerspråkiga statiska webbplatser.

Pure static, optimerad för läsning, integrerad med [i18](#i18) översättning, det är det perfekta valet för att bygga projektets dokumentationssajt.

Det underliggande front-end-ramverket använder en helt plugin-baserad arkitektur, vilket är enkelt för sekundär utveckling. Om det behövs kan bak-end-funktioner integreras.

Denna webbplats är utvecklad baserat på detta ramverk och inkluderar användar- och betalningsfunktioner ( [källkod](/i18n.site/src) ), en detaljerad handledning kommer att skrivas senare.

[→ Användarguide, läs projektets dokumentation](/i18n.site).

## Håll kontakt

<button onclick="mailsub()">Klicka på det här e-postmeddelandet för att prenumerera på produktuppdateringar</button> och <button onclick="webpush()">aktivera webbläsar-push</button>. Vi kommer att meddela dig när produktuppdateringar görs.

[i18n-site.bsky.social](https://bsky.app/profile/i18n-site.bsky.social) att följa / sociala konton [X.COM: @i18nSite](https://x.com/i18nSite)

Om du stöter på problem, [→ skriv en post i användarforumet](https://groups.google.com/u/1/g/i18n).

## OM OSS

> De sa: "Kom, bygg ett torn som når himlen och gör människosläktet känt."
>
> HERREN såg detta och sade: "Människosläktet har samma språk och ras. Nu när detta är färdigt, kommer allt att kunna göras."
>
> Då kom han ner och gjorde så att människor inte kunde förstå varandras språk och spred dem över hela världen.

<p style="text-align:right">── Bibelns Första Mosebok</p>

Vi vill skapa ett internet utan språkbarriärer.
Vi hoppas att hela mänskligheten kan enas kring gemensamma drömmar.

Markdown-översättning och dokumentationswebbplatser är bara början.
Synkronisera innehåll publicerat på sociala medier;
Stöd för tvåspråkiga kommentarer och chattrum;
Ett flerspråkigt ärendehanteringssystem med belöningar;
En marknadsplats för internationella front-end-komponenter;
Det finns mycket mer vi vill göra.

Vi ser fram emot att träffa likasinnade människor i den stora mänskliga skaran.
Vi söker volontärer för att delta i utvecklingen av öppen källkod och korrekturläsning av översatta texter.
Om du är intresserad, vänligen [→ Klicka här för att fylla i din profil](https://ggl.link/i18n) och gå sedan med i [e-postlistan](https://groups.google.com/u/2/g/i18n-site) för kommunikation.

Vi tror på öppen källkod och älskar att dela med oss
Välkommen att tillsammans skapa en framtid utan gränser.