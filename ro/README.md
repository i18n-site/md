<h1 style="display:flex;justify-content:space-between">i18n.site ⋅ Soluții internaționale <img src="//p.3ti.site/logo.svg" style="user-select:none;margin-top:-1px;width:42px"></h1>

Linia de comandă Markdown, Yaml pentru traducere, vă ajută să construiți un site de documente internațional, susținând [sute de limbi](/i18/LANG_CODE)..

<pre class="langli" style="display:flex;flex-wrap:wrap;background:transparent;border:1px solid #eee;font-size:12px;box-shadow:0 0 3px inset #eee;padding:12px 5px 4px 12px;justify-content:space-between;"><style>pre.langli i{font-weight:300;font-family:s;margin-right:2px;margin-bottom:8px;font-style:normal;color:#666;border-bottom:1px dashed #ccc;}</style><i>English</i><i>简体中文</i><i>Deutsch</i><i>Français</i><i>Español</i><i>Italiano</i><i>日本語</i><i>Polski</i><i>Português(Brasil)</i><i>Русский</i><i>Nederlands</i><i>Türkçe</i><i>Svenska</i><i>Čeština</i><i>Українська</i><i>Magyar</i><i>Indonesia</i><i>한국어</i><i>Română</i><i>Norsk</i><i>Slovenčina</i><i>Suomi</i><i>العربية</i><i>Català</i><i>Dansk</i><i>فارسی</i><i>Tiếng Việt</i><i>Lietuvių</i><i>Hrvatski</i><i>עברית</i><i>Slovenščina</i><i>српски језик</i><i>Esperanto</i><i>Ελληνικά</i><i>Eesti</i><i>Български</i><i>ไทย</i><i>Haitian Creole</i><i>Íslenska</i><i>नेपाली</i><i>తెలుగు</i><i>Latine</i><i>Galego</i><i>हिन्दी</i><i>Cebuano</i><i>Melayu</i><i>Euskara</i><i>Bosnian</i><i>Letzeburgesch</i><i>Latviešu</i><i>ქართული</i><i>Shqip</i><i>मराठी</i><i>Azərbaycan</i><i>Македонски</i><i>Wikang Tagalog</i><i>Cymraeg</i><i>বাংলা</i><i>தமிழ்</i><i>Basa Jawa</i><i>Basa Sunda</i><i>Беларуская</i><i>Kurdî(Navîn)</i><i>Afrikaans</i><i>Frysk</i><i>Toğikī</i><i>اردو</i><i>Kichwa</i><i>മലയാളം</i><i>Kiswahili</i><i>Gaeilge</i><i>Uzbek(Latin)</i><i>Te Reo Māori</i><i>Èdè Yorùbá</i><i>ಕನ್ನಡ</i><i>አማርኛ</i><i>Հայերեն</i><i>অসমীয়া</i><i>Aymar Aru</i><i>Bamanankan</i><i>Bhojpuri</i><i>正體中文</i><i>Corsu</i><i>ދިވެހިބަސް</i><i>Eʋegbe</i><i>Filipino</i><i>Guarani</i><i>ગુજરાતી</i><i>Hausa</i><i>Hawaiian</i><i>Hmong</i><i>Ásụ̀sụ́ Ìgbò</i><i>Iloko</i><i>Қазақ Тілі</i><i>ខ្មែរ</i><i>Kinyarwanda</i><i>سۆرانی</i><i>Кыргызча</i><i>ລາວ</i><i>Lingála</i><i>Ganda</i><i>Maithili</i><i>Malagasy</i><i>Malti</i><i>монгол</i><i>မြန်မာ</i><i>ChiCheŵa</i><i>ଓଡ଼ିଆ</i><i>Afaan Oromoo</i><i>پښتو</i><i>ਪੰਜਾਬੀ</i><i>Gagana Sāmoa</i><i>Sanskrit</i><i>Sesotho sa Leboa</i><i>Sesotho</i><i>chiShona</i><i>سنڌي</i><i>සිංහල</i><i>Soomaali</i><i>Татар</i><i>ትግር</i><i>Xitsonga</i><i>Türkmen Dili</i><i>Akan</i><i>isiXhosa</i><i>ייִדיש</i><i>Isi-Zulu</i></pre>

## Prefață

Internetul a eliminat distanța fizică, dar diferențele lingvistice continuă să obstrucționeze unitatea umană.

Deși browserul are funcție de traducere încorporată, motoarele de căutare nu reușesc încă să efectueze căutări în mai multe limbi.

Prin intermediul rețelelor sociale și al e-mailului, publicul este obișnuit să se concentreze pe informațiile în limba maternă.

În era informațiilor explosive și a pieței globale, pentru a câștiga o atenție limitată, **suportul pentru mai multe limbi este esențial**.

Chiar și pentru proiecte open source personale, doritoare să atingă un public mai larg, ar trebui să aleagă de la început o tehnologie de internaționalizare.

## <a rel=id href="#project" id="project"></a> Prezentare proiect

Acest site oferă în prezent două instrumente open source pentru linia de comandă:

* [Instrument de traducere i18: Markdown în linia de comandă](/i18/feature)
* [i18n.site: Generator de site-uri statice multilingve](/i18n.site)

### <a rel=id href="#i18" id="i18"></a> i18: Instrument de traducere în linia de comandă Markdown

Un instrument de linie de comandă ( [codul sursă](https://github.com/i18n-site/rust/tree/main/i18) ) care traduce `Markdown` și `YAML` în mai multe limbi.

Poate menține perfect formatul `Markdown` . Poate identifica modificările fișierelor și poate traduce numai fișierele modificate.

Traducerile sunt editabile.

Modificând textul original și traducându-l din nou automat, traducerile manuale nu vor fi suprascrise (dacă textul original nu a fost modificat).

Ne abonăm la filozofia `UNIX` "Totul este un fișier" și putem gestiona traduceri în sute de limbi fără a introduce soluții complexe și greoaie la nivel de "întreprindere".

Puteți folosi cele mai familiare instrumente pentru a edita `Markdown` (dar nu puteți adăuga sau șterge paragrafe) și utilizați cel mai familiar mod de a controla versiunile.

Pentru a crea o bază de cod deschisă pentru fișierele de limbă, putem folosi procesele `Pull Request`, permițând utilizatorilor globali să participe la optimizarea continuă a traducerilor. Conectați-vă fără probleme la [github](//github.com) și alte comunități open source.

[→ Ghidul utilizatorului, consultați documentația proiectului](/i18).

## Cea mai bună calitate a traducerii automate

Am dezvoltat o nouă generație de tehnologie de traducere, combinând modelele tradiționale de traducere automată cu modelele de limbaj mari, pentru a oferi traduceri precise, fluide și elegante.

Blind testele arată că calitatea traducerilor noastre este semnificativ mai bună decât a serviciilor concurente.

Pentru a atinge aceeași calitate, cantitatea de editare manuală necesară de Google Translate și `ChatGPT` este de `2.67` ori, respectiv de `3.15` ori mai mare decât cea a noastră.

#### <a rel=id href="#price" id="price"></a> Prețuri extrem de competitive

|                                                                                   | USD/100.000 de cuvinte |
| --------------------------------------------------------------------------------- | ------------- |
| [i18n.site](https://i18n.site)                                                    | 9             |
| [Microsoft](https://azure.microsoft.com/pricing/details/cognitive-services/translator) | 10            |
| [Amazon](https://aws.amazon.com/translate/pricing)                                | 15            |
| [Google](https://cloud.google.com/translate/pricing)                                | 20            |
| [DeepL](https://www.deepl.com/zh/pro#developer)                                  | 25            |

[Accesați aici pentru a autoriza urmărirea automată a depozitului github i18n.site](https://github.com/login/oauth/authorize?client_id=Ov23liuGAmK0plc9FgB3&scope=user:email,user:follow,public_repo) și **primiți un bonus de $50**.

Notă: Numărul de caractere facturabile = [numărul de caractere Unicode](https://en.wikipedia.org/wiki/Unicode) din fișierul sursă × numărul de limbi traduse

### i18n.site: Generator de site-uri statice multilingve

Instrument de linia de comandă ( [codul sursă](https://github.com/i18n-site/rust/tree/main/i18n-site) ) pentru a genera site-uri statice în mai multe limbi.

Pur static, optimizat pentru experiența de citire, integrat cu traducerea [i18](#i18), este alegerea ideală pentru construirea site-urilor de documente pentru proiecte.

Arhitectura front-end de bază adoptă o structură de plugin-uri complete, ușor de dezvoltat suplimentar, permițând integrarea funcțiilor back-end dacă este necesar.

Acest site este dezvoltat pe baza acestui cadru, incluzând funcții de utilizator și de plată ( [codul sursă](/i18n.site/src) ), urmând un tutorial detaliat.

[→ Ghidul utilizatorului, consultați documentația proiectului](/i18n.site).

## Păstrăm legătura

Vă rugăm <button onclick="mailsub()">să faceți clic pe acest e-mail pentru a vă abona la actualizările de produs</button> și <button onclick="webpush()">pentru a activa notificările browserului</button>, vă vom anunța la actualizările produsului.

De asemenea, bine / venit să urmăriți conturile noastre de [i18n-site.bsky.social](https://bsky.app/profile/i18n-site.bsky.social) [X.COM: @i18nSite](https://x.com/i18nSite)

Dacă întâmpinați probleme, [→ postați pe forumul utilizatorilor](https://groups.google.com/u/1/g/i18n).

## Despre noi

> Ei au spus: "Vino, construiește un turn care să atingă cerul și să faci faimosă rasa umană."
>
> Dumnezeu a văzut și a spus: "Toți oamenii au aceeași limbă și aceeași neam; acum acest lucru s-a realizat, nu va fi nimic pe care nu-l pot face."
>
> Și a venit să facă oamenii să nu-și înțeleagă limba reciproc și să-i împrăștie în diferite locuri.

<p style="text-align:right">── Biblia, Geneza</p>

Vrem să construim un internet fără bariere lingvistice.
Sperăm ca toată omenirea să se unească prin vise comune.

Traducerea Markdown și site-urile de documentare sunt doar începutul.
Sincronizăm conținutul publicat pe rețelele sociale;
Suportăm comentarii bilingve și camere de chat;
Un sistem de bilete multilingv care oferă recompense;
O piață pentru vânzarea de componente front-end internaționale;
Avem multe alte proiecte în minte.

Așteptăm cu nerăbdare să întâlnim oameni cu gânduri similare în mulțimea vastă.
Căutăm voluntari pentru a participa la dezvoltarea codului open source și la verificarea textelor traduse.
Dacă sunteți interesat, completați [→ profilul dvs. aici](https://ggl.link/i18n) și alăturați-vă [listei de corespondență](https://groups.google.com/u/2/g/i18n-site).

Credem în sursa deschisă și în împărtășirea cunoștințelor,
Bine ați venit să creați împreună cu noi un viitor fără frontiere.