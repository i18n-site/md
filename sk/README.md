<h1 style="display:flex;justify-content:space-between">i18n.site Medzinárodné riešenia<img src="//p.3ti.site/logo.svg" style="user-select:none;margin-top:-1px;width:42px"></h1>

Príkazový riadok Markdown Yaml tool, vám pomôže vytvoriť medzinárodnú stránku dokumentov, ktorá podporuje [stovky jazykov](/i18/LANG_CODE) ...

<pre class="langli" style="display:flex;flex-wrap:wrap;background:transparent;border:1px solid #eee;font-size:12px;box-shadow:0 0 3px inset #eee;padding:12px 5px 4px 12px;justify-content:space-between;"><style>pre.langli i{font-weight:300;font-family:s;margin-right:2px;margin-bottom:8px;font-style:normal;color:#666;border-bottom:1px dashed #ccc;}</style><i>English</i><i>简体中文</i><i>Deutsch</i><i>Français</i><i>Español</i><i>Italiano</i><i>日本語</i><i>Polski</i><i>Português(Brasil)</i><i>Русский</i><i>Nederlands</i><i>Türkçe</i><i>Svenska</i><i>Čeština</i><i>Українська</i><i>Magyar</i><i>Indonesia</i><i>한국어</i><i>Română</i><i>Norsk</i><i>Slovenčina</i><i>Suomi</i><i>العربية</i><i>Català</i><i>Dansk</i><i>فارسی</i><i>Tiếng Việt</i><i>Lietuvių</i><i>Hrvatski</i><i>עברית</i><i>Slovenščina</i><i>српски језик</i><i>Esperanto</i><i>Ελληνικά</i><i>Eesti</i><i>Български</i><i>ไทย</i><i>Haitian Creole</i><i>Íslenska</i><i>नेपाली</i><i>తెలుగు</i><i>Latine</i><i>Galego</i><i>हिन्दी</i><i>Cebuano</i><i>Melayu</i><i>Euskara</i><i>Bosnian</i><i>Letzeburgesch</i><i>Latviešu</i><i>ქართული</i><i>Shqip</i><i>मराठी</i><i>Azərbaycan</i><i>Македонски</i><i>Wikang Tagalog</i><i>Cymraeg</i><i>বাংলা</i><i>தமிழ்</i><i>Basa Jawa</i><i>Basa Sunda</i><i>Беларуская</i><i>Kurdî(Navîn)</i><i>Afrikaans</i><i>Frysk</i><i>Toğikī</i><i>اردو</i><i>Kichwa</i><i>മലയാളം</i><i>Kiswahili</i><i>Gaeilge</i><i>Uzbek(Latin)</i><i>Te Reo Māori</i><i>Èdè Yorùbá</i><i>ಕನ್ನಡ</i><i>አማርኛ</i><i>Հայերեն</i><i>অসমীয়া</i><i>Aymar Aru</i><i>Bamanankan</i><i>Bhojpuri</i><i>正體中文</i><i>Corsu</i><i>ދިވެހިބަސް</i><i>Eʋegbe</i><i>Filipino</i><i>Guarani</i><i>ગુજરાતી</i><i>Hausa</i><i>Hawaiian</i><i>Hmong</i><i>Ásụ̀sụ́ Ìgbò</i><i>Iloko</i><i>Қазақ Тілі</i><i>ខ្មែរ</i><i>Kinyarwanda</i><i>سۆرانی</i><i>Кыргызча</i><i>ລາວ</i><i>Lingála</i><i>Ganda</i><i>Maithili</i><i>Malagasy</i><i>Malti</i><i>монгол</i><i>မြန်မာ</i><i>ChiCheŵa</i><i>ଓଡ଼ିଆ</i><i>Afaan Oromoo</i><i>پښتو</i><i>ਪੰਜਾਬੀ</i><i>Gagana Sāmoa</i><i>Sanskrit</i><i>Sesotho sa Leboa</i><i>Sesotho</i><i>chiShona</i><i>سنڌي</i><i>සිංහල</i><i>Soomaali</i><i>Татар</i><i>ትግር</i><i>Xitsonga</i><i>Türkmen Dili</i><i>Akan</i><i>isiXhosa</i><i>ייִדיש</i><i>Isi-Zulu</i></pre>

## Predslov

Internet odstránil vzdialenosť vo fyzickom priestore, ale jazykové rozdiely stále bránia ľudskej jednote.

Aj keď má prehliadač vstavaný preklad, vyhľadávacie nástroje stále nedokážu vyhľadávať v rôznych jazykoch.

Prostredníctvom sociálnych sietí a e-mailu sú ľudia zvyknutí zameriavať sa na informačné zdroje vo svojom materinskom jazyku.

S informačnou explóziou a globálnym trhom **je podpora viacerých jazykov základnou zručnosťou** , aby sme mohli súťažiť o obmedzenú pozornosť.

Aj keď ide o osobný open source projekt, ktorý chce ovplyvniť širšie publikum, mal by od začiatku robiť medzinárodný výber technológií.

## <a rel=id href="#project" id="project"></a> Predstavenie projektu

Táto stránka v súčasnosti poskytuje dva nástroje príkazového riadka s otvoreným zdrojom:

* [Nástroj na preklad i18 : MarkDown riadku](/i18/feature)
* [i18n.site : generátor statických webových stránok](/i18n.site)

### <a rel=id href="#i18" id="i18"></a> i18: Nástroj na preklad príkazového riadka MarkDown

Nástroj príkazového riadka ( [zdrojový kód](https://github.com/i18n-site/rust/tree/main/i18) ), ktorý prekladá `Markdown` a `YAML` do viacerých jazykov.

Dokáže dokonale udržiavať formát `Markdown` . Dokáže identifikovať úpravy súborov a prekladať iba zmenené súbory.

Preklad je upraviteľný.

Upravte pôvodný text a znova ho strojovo preložte, ručné úpravy prekladu sa neprepíšu (ak tento odsek pôvodného textu nebol upravený).

Na úpravu `Markdown` môžete použiť najznámejšie nástroje (ale nemôžete pridávať ani odstraňovať odseky) a používať najznámejší spôsob kontroly verzií.

Kódová základňa môže byť vytvorená ako open source pre jazykové súbory a pomocou `Pull Request` procesov sa môžu globálni používatelia podieľať na priebežnej optimalizácii prekladov. Bezproblémové pripojenie [github](//github.com) ďalšie komunity s otvoreným zdrojom.

> [!TIP]
> Prijímame filozofiu UNIX „všetko je súbor“ a dokážeme spravovať preklady do stoviek jazykov bez zavádzania zložitých a ťažkopádnych podnikových riešení.

[→ Návod na použitie si prečítajte v projektovej dokumentácii](/i18) .

## Najkvalitnejší Strojový Preklad

Vyvinuli sme novú generáciu prekladateľskej technológie, ktorá spája technické výhody tradičných modelov strojového prekladu a veľkých jazykových modelov, vďaka čomu sú preklady presné, hladké a elegantné.

Slepé testy ukazujú, že naša kvalita prekladov je výrazne lepšia v porovnaní s podobnými službami.

Na dosiahnutie rovnakej kvality je množstvo manuálnych úprav požadovaných službou Google Translate a `ChatGPT` `2.67` -krát a `3.15` -krát väčšie ako u nás.

#### <a rel=id href="#price" id="price"></a> Mimoriadne konkurenčné ceny

|                                                                                   | USD/milión slov |
| --------------------------------------------------------------------------------- | ------------- |
| [i18n.site](https://i18n.site)                                                    | 9             |
| [Microsoft](https://azure.microsoft.com/pricing/details/cognitive-services/translator) | 10            |
| [Amazon](https://aws.amazon.com/translate/pricing)                                | 15            |
| [Google](https://cloud.google.com/translate/pricing)                                | 20            |
| [DeepL](https://www.deepl.com/zh/pro#developer)                                  | 25            |

[➤ Kliknite sem, ak chcete autorizovať a automaticky i18n.site knižnicu github](https://github.com/login/oauth/authorize?client_id=Ov23liuGAmK0plc9FgB3&amp;scope=user:email,user:follow,public_repo) a **získať bonus $50** .

Poznámka: Počet účtovateľných znakov = [počet unicode](https://en.wikipedia.org/wiki/Unicode) v zdrojovom súbore × počet jazykov v preklade

### i18n.site: Viacjazyčný Generátor Statických Stránok

Nástroj príkazového riadka ( [zdrojový kód](https://github.com/i18n-site/rust/tree/main/i18n-site) ) na generovanie viacjazyčných statických stránok.

Čisto statické, optimalizované na čítanie, integrované s prekladom [i18](#i18) je tou najlepšou voľbou na vytvorenie stránky projektových dokumentov.

Základný front-end framework využíva plnú plug-in architektúru, ktorá je jednoduchá pre sekundárny vývoj V prípade potreby je možné integrovať back-end funkcie.

Táto webová stránka je vyvinutá na základe tohto rámca a obsahuje používateľské, platobné a ďalšie funkcie ( [zdrojový kód](/i18n.site/c/src) ).

[→ Návod na použitie si prečítajte v projektovej dokumentácii](/i18n.site) .

## Zostať v Kontakte

<button onclick="mailsub()">Kliknutím na tento e-mail sa prihlásite na odber aktualizácií produktu</button> a <button onclick="webpush()">povolíte push prehliadača</button> . Upozorníme vás, keď budú aktualizácie produktu vykonané.

Vitajte aj na / [i18n-site.bsky.social](https://bsky.app/profile/i18n-site.bsky.social) účtoch [X.COM: @i18nSite](https://x.com/i18nSite)

Ak narazíte na problémy [→ uverejnite príspevok v užívateľskom fóre](https://groups.google.com/u/1/g/i18n) .

## O Nás

> Povedali: Poďte, postavte vežu, ktorá siaha až do neba a preslávte ľudskú rasu.
>
> PÁN to videl a povedal: "Všetky ľudské bytosti majú rovnaký jazyk a rasu. Teraz, keď sa to stalo, všetko bude vykonané."
>
> Potom to prišlo, kvôli čomu ľudia nedokázali porozumieť jazyku toho druhého a rozptýlili sa na rôznych miestach.

<p style="text-align:right">──Biblia·Genesis</p>

Chceme vybudovať internet bez izolácie jazykovej komunikácie.
Dúfame, že sa celé ľudstvo spojí so spoločným snom.

Stránky prekladov a dokumentácie Markdown sú len začiatok.
Synchronizujte uverejňovanie obsahu na sociálnych médiách;
Podpora dvojjazyčných komentárov a diskusných miestností;
Viacjazyčný systém lístkov, ktorý môže vyplácať odmeny;
Predajný trh pre medzinárodné front-end komponenty;
Je toho oveľa viac, čo chceme urobiť.

Veríme v open source a milujeme zdieľanie,
Vitajte pri vytváraní spoločnej budúcnosti bez hraníc.

> [!NOTE]
> Tešíme sa na stretnutie s podobne zmýšľajúcimi ľuďmi v šírom mori ľudí.
> Hľadáme dobrovoľníkov, ktorí by sa podieľali na vývoji open source kódu a korektúrach preložených textov.
> Ak máte záujem, prosím [→ Kliknite sem, vyplňte svoj profil](https://ggl.link/i18n) a potom sa pridajte do [zoznamu adresátov](https://groups.google.com/u/2/g/i18n-site) pre komunikáciu.