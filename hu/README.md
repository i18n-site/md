<h1 style="display:flex;justify-content:space-between">i18n.site Nemzetközi megoldások<img src="//p.3ti.site/logo.svg" style="user-select:none;margin-top:-1px;width:42px"></h1>

Parancssor Markdown Yaml fordítóeszköz, segít egy nemzetközi dokumentumoldal felépítésében, [amely több száz nyelvet](/i18/LANG_CODE) támogat...

<pre class="langli" style="display:flex;flex-wrap:wrap;background:transparent;border:1px solid #eee;font-size:12px;box-shadow:0 0 3px inset #eee;padding:12px 5px 4px 12px;justify-content:space-between;"><style>pre.langli i{font-weight:300;font-family:s;margin-right:2px;margin-bottom:8px;font-style:normal;color:#666;border-bottom:1px dashed #ccc;}</style><i>English</i><i>简体中文</i><i>Deutsch</i><i>Français</i><i>Español</i><i>Italiano</i><i>日本語</i><i>Polski</i><i>Português(Brasil)</i><i>Русский</i><i>Nederlands</i><i>Türkçe</i><i>Svenska</i><i>Čeština</i><i>Українська</i><i>Magyar</i><i>Indonesia</i><i>한국어</i><i>Română</i><i>Norsk</i><i>Slovenčina</i><i>Suomi</i><i>العربية</i><i>Català</i><i>Dansk</i><i>فارسی</i><i>Tiếng Việt</i><i>Lietuvių</i><i>Hrvatski</i><i>עברית</i><i>Slovenščina</i><i>српски језик</i><i>Esperanto</i><i>Ελληνικά</i><i>Eesti</i><i>Български</i><i>ไทย</i><i>Haitian Creole</i><i>Íslenska</i><i>नेपाली</i><i>తెలుగు</i><i>Latine</i><i>Galego</i><i>हिन्दी</i><i>Cebuano</i><i>Melayu</i><i>Euskara</i><i>Bosnian</i><i>Letzeburgesch</i><i>Latviešu</i><i>ქართული</i><i>Shqip</i><i>मराठी</i><i>Azərbaycan</i><i>Македонски</i><i>Wikang Tagalog</i><i>Cymraeg</i><i>বাংলা</i><i>தமிழ்</i><i>Basa Jawa</i><i>Basa Sunda</i><i>Беларуская</i><i>Kurdî(Navîn)</i><i>Afrikaans</i><i>Frysk</i><i>Toğikī</i><i>اردو</i><i>Kichwa</i><i>മലയാളം</i><i>Kiswahili</i><i>Gaeilge</i><i>Uzbek(Latin)</i><i>Te Reo Māori</i><i>Èdè Yorùbá</i><i>ಕನ್ನಡ</i><i>አማርኛ</i><i>Հայերեն</i><i>অসমীয়া</i><i>Aymar Aru</i><i>Bamanankan</i><i>Bhojpuri</i><i>正體中文</i><i>Corsu</i><i>ދިވެހިބަސް</i><i>Eʋegbe</i><i>Filipino</i><i>Guarani</i><i>ગુજરાતી</i><i>Hausa</i><i>Hawaiian</i><i>Hmong</i><i>Ásụ̀sụ́ Ìgbò</i><i>Iloko</i><i>Қазақ Тілі</i><i>ខ្មែរ</i><i>Kinyarwanda</i><i>سۆرانی</i><i>Кыргызча</i><i>ລາວ</i><i>Lingála</i><i>Ganda</i><i>Maithili</i><i>Malagasy</i><i>Malti</i><i>монгол</i><i>မြန်မာ</i><i>ChiCheŵa</i><i>ଓଡ଼ିଆ</i><i>Afaan Oromoo</i><i>پښتو</i><i>ਪੰਜਾਬੀ</i><i>Gagana Sāmoa</i><i>Sanskrit</i><i>Sesotho sa Leboa</i><i>Sesotho</i><i>chiShona</i><i>سنڌي</i><i>සිංහල</i><i>Soomaali</i><i>Татар</i><i>ትግር</i><i>Xitsonga</i><i>Türkmen Dili</i><i>Akan</i><i>isiXhosa</i><i>ייִדיש</i><i>Isi-Zulu</i></pre>

## Előszó

Az internet megszüntette a távolságot a fizikai térben, de a nyelvi különbségek továbbra is akadályozzák az emberi egységet.

Bár a böngésző beépített fordítással rendelkezik, a keresőmotorok továbbra sem tudnak több nyelven lekérdezni.

A közösségi médián és az e-mailen keresztül az emberek hozzászoktak ahhoz, hogy saját anyanyelvükön koncentráljanak az információforrásokra.

Az információrobbanás és a globális piac miatt a szűkös figyelemért való versengés érdekében **a több nyelv támogatása alapvető készség** .

Még akkor is, ha egy személyes nyílt forráskódú projektről van szó, amely szélesebb közönségre akar hatni, kezdettől fogva nemzetközi technológiai válogatást kell végeznie.

## <a rel=id href="#project" id="project"></a> Projekt bemutatása

Ez a webhely jelenleg két nyílt forráskódú parancssori eszközt kínál:

* [i18 : MarkDown fordító eszköz](/i18/feature)
* [i18n.site : statikus weboldal generátor](/i18n.site)

### <a rel=id href="#i18" id="i18"></a> i18: MarkDown parancssori fordítóeszköz

Parancssori eszköz ( [forráskód](https://github.com/i18n-site/rust/tree/main/i18) ), amely lefordítja `Markdown` és `YAML` több nyelvre.

Tökéletesen képes fenntartani a `Markdown` formátumot. Képes azonosítani a fájlmódosításokat, és csak a megváltozott fájlokat lefordítani.

A fordítás szerkeszthető.

Módosítsa az eredeti szöveget, és fordítsa le ismét géppel, a fordításon végrehajtott manuális módosítások nem kerülnek felülírásra (ha az eredeti szöveg ezen bekezdését nem módosították).

Használhatja a legismertebb eszközöket `Markdown` fordítás szerkesztéséhez (de nem adhat hozzá és nem törölhet bekezdéseket), és használja a legismertebb módszert a verziószabályozáshoz.

Nyílt forráskódú nyelvi fájlokhoz kódbázis készíthető, és `Pull Request` folyamat segítségével a globális felhasználók részt vehetnek a fordítások folyamatos optimalizálásában. Zökkenőmentes kapcsolat [github](//github.com) más nyílt forráskódú közösségek.

> [!TIP]
> Elfogadjuk a UNIX „minden egy fájl” filozófiáját, és több száz nyelvre tudunk fordítani anélkül, hogy bonyolult és nehézkes vállalati megoldásokat vezetnénk be.

[→ A használati utasításokért olvassa el a projekt dokumentációját](/i18) .

## A Legjobb Minőségű Gépi Fordítás

A fordítási technológia új generációját fejlesztettük ki, amely egyesíti a hagyományos gépi fordítási modellek és a nagy nyelvi modellek technikai előnyeit, hogy a fordítások pontosak, gördülékenyek és elegánsak legyenek.

A vaktesztek azt mutatják, hogy a fordítási minőségünk lényegesen jobb a hasonló szolgáltatásokhoz képest.

Ugyanezen minőség elérése érdekében a Google Fordító által igényelt kézi szerkesztés mennyisége `ChatGPT` `2.67` szerese, illetve `3.15` -szorosa a miénknek.

#### <a rel=id href="#price" id="price"></a> Rendkívül versenyképes árképzés

|                                                                                   | USD/millió szó |
| --------------------------------------------------------------------------------- | ------------- |
| [i18n.site](https://i18n.site)                                                    | 9             |
| [Microsoft](https://azure.microsoft.com/pricing/details/cognitive-services/translator) | 10            |
| [amazon](https://aws.amazon.com/translate/pricing)                                | 15            |
| [Google](https://cloud.google.com/translate/pricing)                                | 20            |
| [DeepL](https://www.deepl.com/zh/pro#developer)                                  | 25            |

[➤ Kattintson ide, hogy engedélyezze és automatikusan kövesse github könyvtárat i18n.site](https://github.com/login/oauth/authorize?client_id=Ov23liuGAmK0plc9FgB3&amp;scope=user:email,user:follow,public_repo) és **bónusz $50 kapjon** !

Megjegyzés: A számlázható karakterek száma = [a unicode száma](https://en.wikipedia.org/wiki/Unicode) a forrásfájlban × a nyelvek száma a fordításban

### i18n.site: Többnyelvű Statikus Webhelygenerátor

Parancssori eszköz ( [forráskód](https://github.com/i18n-site/rust/tree/main/i18n-site) ) többnyelvű statikus webhelyek létrehozásához.

Tisztán statikus, olvasási élményre optimalizálva, integrálva a [i18](#i18) ez a legjobb választás projektdokumentum-oldal felépítéséhez.

Az alapul szolgáló előtér-keretrendszer teljes beépülő architektúrát alkalmaz, amely könnyen elvégezhető a másodlagos fejlesztéshez, ha szükséges, integrálhatók a háttérfunkciók.

Ez a webhely ezen a keretrendszeren alapul, és felhasználói, fizetési és egyéb funkciókat tartalmaz ( [forráskód](/i18n.site/c/src) ).

[→ A használati utasításokért olvassa el a projekt dokumentációját](/i18n.site) .

## Tartsa a Kapcsolatot

Kérjük <button onclick="mailsub()">, kattintson erre az e-mailre a termékfrissítésekre való feliratkozáshoz</button> és <button onclick="webpush()">a böngésző leküldésének engedélyezéséhez</button> . Értesítést küldünk a termékfrissítésekről.

Kövesse / [i18n-site.bsky.social](https://bsky.app/profile/i18n-site.bsky.social) is [X.COM: @i18nSite](https://x.com/i18nSite)

Ha problémákat tapasztal [→ kérjük, tegye közzé a felhasználói fórumban](https://groups.google.com/u/1/g/i18n) .

## Rólunk

> Azt mondták: Gyere, építs egy tornyot, amely az égig ér, és tedd híressé az emberiséget.
>
> Az ÚR látta ezt, és így szólt: "Minden emberi lénynek ugyanaz a nyelve és ugyanaz a fajtája. Most, hogy ez megtörtént, minden megtörténik."
>
> Aztán jött, és az emberi lények képtelenek voltak megérteni egymás nyelvét, és szétszóródtak különböző helyeken.

<p style="text-align:right">──Biblia·Genesis</p>

Internetet akarunk építeni a nyelvi kommunikáció elszigeteltsége nélkül.
Reméljük, hogy az egész emberiség összefog egy közös álommal.

A Markdown fordítási és dokumentációs oldalak csak a kezdetet jelentik.
Szinkronizálja a tartalom közzétételét a közösségi médiában;
Kétnyelvű megjegyzések és csevegőszobák támogatása;
Többnyelvű jegyrendszer, amellyel jutalmakat lehet fizetni;
A nemzetközi front-end komponensek értékesítési piaca;
Sokkal többet szeretnénk tenni.

Hiszünk a nyílt forráskódban és a szeretet megosztásában,
Üdvözöljük, hogy együtt teremtsünk határok nélküli jövőt.

> [!NOTE]
> Várjuk, hogy hasonló gondolkodású emberekkel találkozzunk az emberek hatalmas tengerében.
> Önkénteseket keresünk nyílt forráskód fejlesztésében és lefordított szövegek lektorálásában.
> Ha felkeltettük érdeklődését, kérjük [→ Kattintson ide a profil kitöltéséhez](https://ggl.link/i18n) , majd csatlakozzon [a levelezési listához](https://groups.google.com/u/2/g/i18n-site) .