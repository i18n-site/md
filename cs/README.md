<h1 style="display:flex;justify-content:space-between">i18n.site Mezinárodní řešení<img src="//p.3ti.site/logo.svg" style="user-select:none;margin-top:-1px;width:42px"></h1>

Příkazový řádek Markdown Yaml nástroj, vám pomůže vytvořit mezinárodní dokumentový web s podporou [stovek jazyků](/i18/LANG_CODE) ...

<pre class="langli" style="display:flex;flex-wrap:wrap;background:transparent;border:1px solid #eee;font-size:12px;box-shadow:0 0 3px inset #eee;padding:12px 5px 4px 12px;justify-content:space-between;"><style>pre.langli i{font-weight:300;font-family:s;margin-right:2px;margin-bottom:8px;font-style:normal;color:#666;border-bottom:1px dashed #ccc;}</style><i>English</i><i>简体中文</i><i>Deutsch</i><i>Français</i><i>Español</i><i>Italiano</i><i>日本語</i><i>Polski</i><i>Português(Brasil)</i><i>Русский</i><i>Nederlands</i><i>Türkçe</i><i>Svenska</i><i>Čeština</i><i>Українська</i><i>Magyar</i><i>Indonesia</i><i>한국어</i><i>Română</i><i>Norsk</i><i>Slovenčina</i><i>Suomi</i><i>العربية</i><i>Català</i><i>Dansk</i><i>فارسی</i><i>Tiếng Việt</i><i>Lietuvių</i><i>Hrvatski</i><i>עברית</i><i>Slovenščina</i><i>српски језик</i><i>Esperanto</i><i>Ελληνικά</i><i>Eesti</i><i>Български</i><i>ไทย</i><i>Haitian Creole</i><i>Íslenska</i><i>नेपाली</i><i>తెలుగు</i><i>Latine</i><i>Galego</i><i>हिन्दी</i><i>Cebuano</i><i>Melayu</i><i>Euskara</i><i>Bosnian</i><i>Letzeburgesch</i><i>Latviešu</i><i>ქართული</i><i>Shqip</i><i>मराठी</i><i>Azərbaycan</i><i>Македонски</i><i>Wikang Tagalog</i><i>Cymraeg</i><i>বাংলা</i><i>தமிழ்</i><i>Basa Jawa</i><i>Basa Sunda</i><i>Беларуская</i><i>Kurdî(Navîn)</i><i>Afrikaans</i><i>Frysk</i><i>Toğikī</i><i>اردو</i><i>Kichwa</i><i>മലയാളം</i><i>Kiswahili</i><i>Gaeilge</i><i>Uzbek(Latin)</i><i>Te Reo Māori</i><i>Èdè Yorùbá</i><i>ಕನ್ನಡ</i><i>አማርኛ</i><i>Հայերեն</i><i>অসমীয়া</i><i>Aymar Aru</i><i>Bamanankan</i><i>Bhojpuri</i><i>正體中文</i><i>Corsu</i><i>ދިވެހިބަސް</i><i>Eʋegbe</i><i>Filipino</i><i>Guarani</i><i>ગુજરાતી</i><i>Hausa</i><i>Hawaiian</i><i>Hmong</i><i>Ásụ̀sụ́ Ìgbò</i><i>Iloko</i><i>Қазақ Тілі</i><i>ខ្មែរ</i><i>Kinyarwanda</i><i>سۆرانی</i><i>Кыргызча</i><i>ລາວ</i><i>Lingála</i><i>Ganda</i><i>Maithili</i><i>Malagasy</i><i>Malti</i><i>монгол</i><i>မြန်မာ</i><i>ChiCheŵa</i><i>ଓଡ଼ିଆ</i><i>Afaan Oromoo</i><i>پښتو</i><i>ਪੰਜਾਬੀ</i><i>Gagana Sāmoa</i><i>Sanskrit</i><i>Sesotho sa Leboa</i><i>Sesotho</i><i>chiShona</i><i>سنڌي</i><i>සිංහල</i><i>Soomaali</i><i>Татар</i><i>ትግር</i><i>Xitsonga</i><i>Türkmen Dili</i><i>Akan</i><i>isiXhosa</i><i>ייִדיש</i><i>Isi-Zulu</i></pre>

## Předmluva

Internet odstranil vzdálenost ve fyzickém prostoru, ale jazykové rozdíly stále brání lidské jednotě.

Přestože má prohlížeč vestavěný překlad, vyhledávače stále neumí dotazovat napříč jazyky.

Prostřednictvím sociálních sítí a e-mailu jsou lidé zvyklí zaměřovat se na informační zdroje ve svém mateřském jazyce.

S informační explozí a globálním trhem **je podpora více jazyků základní dovedností** , abychom mohli soutěžit o vzácnou pozornost.

I když se jedná o osobní open source projekt, který chce ovlivnit širší publikum, měl by od začátku vybírat mezinárodní technologie.

## <a rel=id href="#project" id="project"></a> Představení projektu

Tento web v současné době poskytuje dva nástroje příkazového řádku s otevřeným zdrojovým kódem:

* [Nástroj pro překlad i18 : MarkDown řádku](/i18/feature)
* [i18n.site : generátor statických webových stránek](/i18n.site)

### <a rel=id href="#i18" id="i18"></a> i18: Nástroj pro překlad příkazového řádku MarkDown

Nástroj příkazového řádku ( [zdrojový kód](https://github.com/i18n-site/rust/tree/main/i18) ), který překládá `Markdown` a `YAML` do více jazyků.

Dokáže perfektně udržovat formát `Markdown` . Dokáže identifikovat úpravy souborů a překládat pouze změněné soubory.

Překlad je upravitelný.

Upravte původní text a znovu jej strojově přeložte, ruční úpravy překladu nebudou přepsány (pokud tento odstavec původního textu nebyl upraven).

K úpravě `Markdown` můžete použít nejznámější nástroje (ale nemůžete přidávat ani mazat odstavce) a používat nejznámější způsob správy verzí.

Jako open source pro jazykové soubory lze vytvořit kódovou základnu a pomocí `Pull Request` procesů se mohou globální uživatelé podílet na průběžné optimalizaci překladů. Bezproblémové připojení [github](//github.com) další open source komunity.

> [!TIP]
> Přijímáme unixovou filozofii „všechno je soubor“ a dokážeme spravovat překlady do stovek jazyků, aniž bychom zaváděli složitá a těžkopádná podniková řešení.

[→ Pokyny k použití naleznete v projektové dokumentaci](/i18) .

## Nejkvalitnější Strojový Překlad

Vyvinuli jsme novou generaci překladatelské technologie, která kombinuje technické výhody tradičních modelů strojového překladu a velkých jazykových modelů, aby překlady byly přesné, hladké a elegantní.

Slepé testy ukazují, že naše kvalita překladu je výrazně lepší ve srovnání s podobnými službami.

Abychom dosáhli stejné kvality, množství ručních úprav vyžadovaných Překladačem Google a `ChatGPT` je `2.67` a `3.15` větší než u nás.

#### <a rel=id href="#price" id="price"></a> Extrémně konkurenční ceny

|                                                                                   | USD/milion slov |
| --------------------------------------------------------------------------------- | ------------- |
| [i18n.site](https://i18n.site)                                                    | 9             |
| [Microsoft](https://azure.microsoft.com/pricing/details/cognitive-services/translator) | 10            |
| [Amazonka](https://aws.amazon.com/translate/pricing)                                | 15            |
| [Google](https://cloud.google.com/translate/pricing)                                | 20            |
| [DeepL](https://www.deepl.com/zh/pro#developer)                                  | 25            |

[➤ Klikněte zde pro autorizaci a automatické i18n.site knihovny github](https://github.com/login/oauth/authorize?client_id=Ov23liuGAmK0plc9FgB3&amp;scope=user:email,user:follow,public_repo) a **získejte bonus $50** .

Poznámka: Počet zúčtovatelných znaků = [počet unicode](https://en.wikipedia.org/wiki/Unicode) ve zdrojovém souboru × počet jazyků v překladu

### i18n.site: Vícejazyčný Generátor Statických Stránek

Nástroj příkazového řádku ( [zdrojový kód](https://github.com/i18n-site/rust/tree/main/i18n-site) ) pro generování vícejazyčných statických stránek.

Čistě statický, optimalizovaný pro čtení, integrovaný s překladem [i18](#i18) je tou nejlepší volbou pro vytvoření stránky projektových dokumentů.

Základní front-end framework využívá plnou plug-in architekturu, což je snadné pro sekundární vývoj V případě potřeby lze integrovat back-end funkce.

Tento web je vytvořen na základě tohoto rámce a obsahuje uživatelské, platební a další funkce ( [zdrojový kód](/i18n.site/c/src) ).

[→ Pokyny k použití naleznete v projektové dokumentaci](/i18n.site) .

## Zůstat v Kontaktu

<button onclick="mailsub()">Kliknutím na tento e-mail se přihlaste k odběru aktualizací produktu</button> a <button onclick="webpush()">povolte push prohlížeče</button> . O provedení aktualizací produktu vás budeme informovat.

/ vítáme naše sociální [i18n-site.bsky.social](https://bsky.app/profile/i18n-site.bsky.social) [X.COM: @i18nSite](https://x.com/i18nSite)

Pokud narazíte na problémy [→ napište prosím do uživatelského fóra](https://groups.google.com/u/1/g/i18n) .

## O Nás

> Řekli: Pojďte, postavte věž, která dosáhne nebe a proslavte lidskou rasu.
>
> PÁN to viděl a řekl: "Všechny lidské bytosti mají stejný jazyk a rasu. Nyní, když je toto dosaženo, bude vše hotovo."
>
> Pak to přišlo, kvůli čemuž lidské bytosti nemohly rozumět jazyku toho druhého a rozptýlily se na různá místa.

<p style="text-align:right">──Bible·Genesis</p>

Chceme vybudovat internet bez izolace jazykové komunikace.
Doufáme, že se celé lidstvo sejde se společným snem.

Stránky překladů a dokumentace Markdown jsou jen začátek.
Synchronizujte odesílání obsahu na sociální média;
Podporujte dvojjazyčné komentáře a chatovací místnosti;
Vícejazyčný systém vstupenek, který může vyplácet odměny;
Prodejní trh pro mezinárodní front-end komponenty;
Je toho mnohem víc, co chceme udělat.

Věříme v open source a milujeme sdílení,
Vítejte, abyste společně vytvořili budoucnost bez hranic.

> [!NOTE]
> Těšíme se na setkání s podobně smýšlejícími lidmi v obrovském moři lidí.
> Hledáme dobrovolníky, kteří by se podíleli na vývoji open source kódu a korekturách přeložených textů.
> Máte-li zájem, prosím [→ Klikněte sem, vyplňte svůj profil](https://ggl.link/i18n) a poté se připojte [k mailing listu](https://groups.google.com/u/2/g/i18n-site) pro komunikaci.