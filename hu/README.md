<h1 style="display:flex;justify-content:space-between">i18n.site Nemzetközi megoldások<img src="//p.3ti.site/logo.svg" style="user-select:none;margin-top:-1px;width:42px"></h1>

Parancssor alapon működő Markdown és YAML fordítóeszköz, segít egy nemzetközi dokumentumoldal létrehozásában, amely [több száz nyelvet](/i18/LANG_CODE) támogat..

<pre class="langli" style="display:flex;flex-wrap:wrap;background:transparent;border:1px solid #eee;font-size:12px;box-shadow:0 0 3px inset #eee;padding:12px 5px 4px 12px;justify-content:space-between;"><style>pre.langli i{font-weight:300;font-family:s;margin-right:2px;margin-bottom:8px;font-style:normal;color:#666;border-bottom:1px dashed #ccc;}</style><i>English</i><i>简体中文</i><i>Deutsch</i><i>Français</i><i>Español</i><i>Italiano</i><i>日本語</i><i>Polski</i><i>Português(Brasil)</i><i>Русский</i><i>Nederlands</i><i>Türkçe</i><i>Svenska</i><i>Čeština</i><i>Українська</i><i>Magyar</i><i>Indonesia</i><i>한국어</i><i>Română</i><i>Norsk</i><i>Slovenčina</i><i>Suomi</i><i>العربية</i><i>Català</i><i>Dansk</i><i>فارسی</i><i>Tiếng Việt</i><i>Lietuvių</i><i>Hrvatski</i><i>עברית</i><i>Slovenščina</i><i>српски језик</i><i>Esperanto</i><i>Ελληνικά</i><i>Eesti</i><i>Български</i><i>ไทย</i><i>Haitian Creole</i><i>Íslenska</i><i>नेपाली</i><i>తెలుగు</i><i>Latine</i><i>Galego</i><i>हिन्दी</i><i>Cebuano</i><i>Melayu</i><i>Euskara</i><i>Bosnian</i><i>Letzeburgesch</i><i>Latviešu</i><i>ქართული</i><i>Shqip</i><i>मराठी</i><i>Azərbaycan</i><i>Македонски</i><i>Wikang Tagalog</i><i>Cymraeg</i><i>বাংলা</i><i>தமிழ்</i><i>Basa Jawa</i><i>Basa Sunda</i><i>Беларуская</i><i>Kurdî(Navîn)</i><i>Afrikaans</i><i>Frysk</i><i>Toğikī</i><i>اردو</i><i>Kichwa</i><i>മലയാളം</i><i>Kiswahili</i><i>Gaeilge</i><i>Uzbek(Latin)</i><i>Te Reo Māori</i><i>Èdè Yorùbá</i><i>ಕನ್ನಡ</i><i>አማርኛ</i><i>Հայերեն</i><i>অসমীয়া</i><i>Aymar Aru</i><i>Bamanankan</i><i>Bhojpuri</i><i>正體中文</i><i>Corsu</i><i>ދިވެހިބަސް</i><i>Eʋegbe</i><i>Filipino</i><i>Guarani</i><i>ગુજરાતી</i><i>Hausa</i><i>Hawaiian</i><i>Hmong</i><i>Ásụ̀sụ́ Ìgbò</i><i>Iloko</i><i>Қазақ Тілі</i><i>ខ្មែរ</i><i>Kinyarwanda</i><i>سۆرانی</i><i>Кыргызча</i><i>ລາວ</i><i>Lingála</i><i>Ganda</i><i>Maithili</i><i>Malagasy</i><i>Malti</i><i>монгол</i><i>မြန်မာ</i><i>ChiCheŵa</i><i>ଓଡ଼ିଆ</i><i>Afaan Oromoo</i><i>پښتو</i><i>ਪੰਜਾਬੀ</i><i>Gagana Sāmoa</i><i>Sanskrit</i><i>Sesotho sa Leboa</i><i>Sesotho</i><i>chiShona</i><i>سنڌي</i><i>සිංහල</i><i>Soomaali</i><i>Татар</i><i>ትግር</i><i>Xitsonga</i><i>Türkmen Dili</i><i>Akan</i><i>isiXhosa</i><i>ייִדיש</i><i>Isi-Zulu</i></pre>

## Előszó

Az internet megszüntette a fizikai távolságokat, de a nyelvi különbségek továbbra is akadályozzák az emberi egységet.

Bár a böngészők beépített fordítással rendelkeznek, a keresőmotorok még mindig nem képesek több nyelven keresni.

A közösségi média és az e-mail használata során az emberek szoktak saját anyanyelvükön keresni információforrásokat.

Az információrobbanás és a globális piac miatt a figyelemért való versengés során **a többnyelvűség alapvető képesség**.

Még egy személyes nyílt forráskódú projekt esetében is, amely szélesebb közönséget szeretne elérni, érdemes már a kezdetektől nemzetközi technológiai megoldásokat választani.

## <a rel=id href="#project" id="project"></a> Projekt bemutatkozás

Ez a webhely jelenleg két nyílt forráskódú parancssori eszközt kínál:

* [i18 : MarkDown fordító eszköz](/i18/feature)
* [i18n.site : statikus weboldal generátor](/i18n.site)

### <a rel=id href="#i18" id="i18"></a> i18: MarkDown parancssori fordítóeszköz

Parancssori eszköz, amely `Markdown` és `YAML` formázatú fájlokat fordít több nyelvre ( [forráskód](https://github.com/i18n-site/rust/tree/main/i18) ).

Tökéletesen megőrzi a `Markdown` formázást. Azonosítja a fájl módosításait, és csak a megváltozott fájlokat fordítja le.

A fordítás szerkeszthető.

Amennyiben az eredeti szöveget módosítják, és újra gépi fordítást végeznek, a kézi szerkesztések nem kerülnek felülírásra (ha az eredeti szöveg ezen bekezdését nem módosították).

Az `UNIX` filozófiáját követve "Mindent fájlként kezelünk", több száz nyelv fordítását is kezelhetjük anélkül, hogy bonyolult, nehézkes vállalati szintű megoldásokat vezetnénk be.

Használhatja a legismertebb eszközöket a `Markdown` szerkesztéséhez (de nem adhat hozzá és nem törölhet bekezdéseket), és használja a legismertebb módszert a verziószabályozáshoz.

Nyílt forráskódú nyelvi fájlokhoz kódbázis hozható létre, és a `Pull Request` folyamat segítségével a globális felhasználók is részt vehetnek a fordítások folyamatos optimalizálásában. Zökkenőmentesen integrálható [github](//github.com) és más nyílt forráskódú közösségekkel.

[→ Használati útmutatóért olvassa el a projekt dokumentációját](/i18) .

## A legjobb minőségű gépi fordítás

Új generációs fordítási technológiát fejlesztettünk ki, amely ötvözi a hagyományos gépi fordítási modelleket és a nagy nyelvi modellek előnyeit, hogy a fordítások pontosak, gördülékenyek és elegánsak legyenek.

A vaktesztek azt mutatják, hogy a fordítási minőségünk lényegesen jobb a hasonló szolgáltatásokhoz képest.

Ugyanezen minőség elérése érdekében a Google Fordító által igényelt kézi szerkesztés mennyisége `2.67` szerese `ChatGPT` illetve `3.15` szorosa a miénknek.

#### <a rel=id href="#price" id="price"></a> Rendkívül versenyképes árazás

|                                                                                   | USD/millió szó |
| --------------------------------------------------------------------------------- | ------------- |
| [i18n.site](https://i18n.site)                                                    | 9             |
| [Microsoft](https://azure.microsoft.com/pricing/details/cognitive-services/translator) | 10            |
| [Amazon](https://aws.amazon.com/translate/pricing)                                | 15            |
| [Google](https://cloud.google.com/translate/pricing)                                | 20            |
| [DeepL](https://www.deepl.com/zh/pro#developer)                                  | 25            |

[Kattintson ide, hogy engedélyezze és automatikusan i18n.site github](https://github.com/login/oauth/authorize?client_id=Ov23liuGAmK0plc9FgB3&amp;scope=user:email,user:follow,public_repo) és **bónusz $50 kapjon** .

Megjegyzés: A számlázható karakterek száma = [a Unicode karakterek száma](https://en.wikipedia.org/wiki/Unicode) a forrásfájlban × a fordított nyelvek száma

### i18n.site: Többnyelvű statikus webhelygenerátor

Parancssor alapon működő eszköz többnyelvű statikus webhelyek létrehozásához ( [forráskód](https://github.com/i18n-site/rust/tree/main/i18n-site) ).

Tisztán statikus, az olvasási élményre optimalizálva, integrálva az [i18](#i18) fordítással, ez a legjobb választás projektdokumentum-oldal létrehozásához.

Az alapul szolgáló előtér-keretrendszer teljes beépülő architektúráját alkalmazza, amely könnyen továbbfejleszthető, és szükség esetén a háttérfunkciók is integrálhatók.

Ez a webhely ezen keretrendszeren alapul, és tartalmazza a felhasználói, fizetési és egyéb funkciókat ( [forráskód](/i18n.site/src) ).

[→ Használati útmutatóért olvassa el a projekt dokumentációját](/i18n.site) .

## Tartsa a kapcsolatot

Kérjük, kattintson <button onclick="mailsub()">ide</button> az e-mailre a termékfrissítések feliratkozáshoz, és <button onclick="webpush()">ide</button> a böngésző push értesítések engedélyezéséhez. Értesítést küldünk a termékfrissítésekről.

[i18n-site.bsky.social](https://bsky.app/profile/i18n-site.bsky.social) közösségi fiókjainkat / [X.COM: @i18nSite](https://x.com/i18nSite)

Ha problémákat tapasztal [→ kérjük, tegye közzé a felhasználói fórumban](https://groups.google.com/u/1/g/i18n) .

## Rólunk

> Azt mondták: Gyere, építs egy tornyot, amely az égig ér, és tedd híressé az emberiséget.
>
> Az ÚR látta ezt, és így szólt: "Minden emberi lénynek ugyanaz a nyelve és ugyanaz a fajtája. Most, hogy ez megtörtént, minden megtörténhet."
>
> Aztán jött, és az emberi lények képtelenek voltak megérteni egymás nyelvét, és szétszóródtak különböző helyeken.

<p style="text-align:right">──Biblia·Genesis</p>

Internetet akarunk építeni a nyelvi kommunikáció elszigeteltsége nélkül.
Reméljük, hogy az egész emberiség összefog egy közös álommal.

A Markdown fordítás és a dokumentációs oldalak csak a kezdetet jelentik.
Szinkronizálja a tartalom közzétételét a közösségi médiában;
Támogatja a kétnyelvű megjegyzéseket és a csevegőszobákat;
Többnyelvű jegyrendszer, amellyel jutalmakat lehet fizetni;
A nemzetközi front-end komponensek értékesítési piaca;
Sokkal többet szeretnénk tenni.

Várjuk, hogy találkozzunk hasonló gondolkodású emberekkel az emberek hatalmas tengerében.
Önkénteseket keresünk nyílt forráskód fejlesztésében és lefordított szövegek lektorálásában.
Ha felkeltettük érdeklődését, kérjük [→ Kattintson ide a profil kitöltéséhez](https://ggl.link/i18n) , majd csatlakozzon [a levelezési listához](https://groups.google.com/u/2/g/i18n-site) .

Hiszünk a nyílt forráskódban és a szeretet megosztásában,
Üdvözöljük, hogy együtt teremtsünk határok nélküli jövőt.