<h1 style="display:flex;justify-content:space-between">i18n.site Međunarodna rješenja<img src="//p.3ti.site/logo.svg" style="user-select:none;margin-top:-1px;width:42px"></h1>

Komandna linija Markdown Yaml alat, pomaže vam da napravite internacionalnu stranicu za dokumente, koja podržava [stotine jezika](/i18/LANG_CODE) ...

<pre class="langli" style="display:flex;flex-wrap:wrap;background:transparent;border:1px solid #eee;font-size:12px;box-shadow:0 0 3px inset #eee;padding:12px 5px 4px 12px;justify-content:space-between;"><style>pre.langli i{font-weight:300;font-family:s;margin-right:2px;margin-bottom:8px;font-style:normal;color:#666;border-bottom:1px dashed #ccc;}</style><i>English</i><i>简体中文</i><i>Deutsch</i><i>Français</i><i>Español</i><i>Italiano</i><i>日本語</i><i>Polski</i><i>Português(Brasil)</i><i>Русский</i><i>Nederlands</i><i>Türkçe</i><i>Svenska</i><i>Čeština</i><i>Українська</i><i>Magyar</i><i>Indonesia</i><i>한국어</i><i>Română</i><i>Norsk</i><i>Slovenčina</i><i>Suomi</i><i>العربية</i><i>Català</i><i>Dansk</i><i>فارسی</i><i>Tiếng Việt</i><i>Lietuvių</i><i>Hrvatski</i><i>עברית</i><i>Slovenščina</i><i>српски језик</i><i>Esperanto</i><i>Ελληνικά</i><i>Eesti</i><i>Български</i><i>ไทย</i><i>Haitian Creole</i><i>Íslenska</i><i>नेपाली</i><i>తెలుగు</i><i>Latine</i><i>Galego</i><i>हिन्दी</i><i>Cebuano</i><i>Melayu</i><i>Euskara</i><i>Bosnian</i><i>Letzeburgesch</i><i>Latviešu</i><i>ქართული</i><i>Shqip</i><i>मराठी</i><i>Azərbaycan</i><i>Македонски</i><i>Wikang Tagalog</i><i>Cymraeg</i><i>বাংলা</i><i>தமிழ்</i><i>Basa Jawa</i><i>Basa Sunda</i><i>Беларуская</i><i>Kurdî(Navîn)</i><i>Afrikaans</i><i>Frysk</i><i>Toğikī</i><i>اردو</i><i>Kichwa</i><i>മലയാളം</i><i>Kiswahili</i><i>Gaeilge</i><i>Uzbek(Latin)</i><i>Te Reo Māori</i><i>Èdè Yorùbá</i><i>ಕನ್ನಡ</i><i>አማርኛ</i><i>Հայերեն</i><i>অসমীয়া</i><i>Aymar Aru</i><i>Bamanankan</i><i>Bhojpuri</i><i>正體中文</i><i>Corsu</i><i>ދިވެހިބަސް</i><i>Eʋegbe</i><i>Filipino</i><i>Guarani</i><i>ગુજરાતી</i><i>Hausa</i><i>Hawaiian</i><i>Hmong</i><i>Ásụ̀sụ́ Ìgbò</i><i>Iloko</i><i>Қазақ Тілі</i><i>ខ្មែរ</i><i>Kinyarwanda</i><i>سۆرانی</i><i>Кыргызча</i><i>ລາວ</i><i>Lingála</i><i>Ganda</i><i>Maithili</i><i>Malagasy</i><i>Malti</i><i>монгол</i><i>မြန်မာ</i><i>ChiCheŵa</i><i>ଓଡ଼ିଆ</i><i>Afaan Oromoo</i><i>پښتو</i><i>ਪੰਜਾਬੀ</i><i>Gagana Sāmoa</i><i>Sanskrit</i><i>Sesotho sa Leboa</i><i>Sesotho</i><i>chiShona</i><i>سنڌي</i><i>සිංහල</i><i>Soomaali</i><i>Татар</i><i>ትግር</i><i>Xitsonga</i><i>Türkmen Dili</i><i>Akan</i><i>isiXhosa</i><i>ייִדיש</i><i>Isi-Zulu</i></pre>

## Predgovor

Internet je eliminisao distancu u fizičkom prostoru, ali jezičke razlike i dalje ometaju ljudsko jedinstvo.

Iako pretraživač ima ugrađeni prijevod, tražilice još uvijek ne mogu postavljati upite na više jezika.

Putem društvenih mreža i e-pošte, ljudi su navikli da se fokusiraju na izvore informacija na svom maternjem jeziku.

Uz eksploziju informacija i globalno tržište, kako bi se natjecali za oskudnu pažnju, **podrška više jezika je osnovna vještina** .

Čak i ako se radi o osobnom projektu otvorenog koda koji želi utjecati na širu publiku, on bi od početka trebao napraviti međunarodnu selekciju tehnologije.

## <a rel=id href="#project" id="project"></a> Uvod u projekat

Ova stranica trenutno nudi dva alata za komandnu liniju otvorenog koda:

* [Alat za prevođenje i18 : MarkDown linije](/i18/feature)
* [i18n.site : Višejezični generator statičkih web stranica](/i18n.site)

### <a rel=id href="#i18" id="i18"></a> i18: MarkDown alat za prevođenje komandne linije

Alat komandne linije ( [izvorni kod](https://github.com/i18n-site/rust/tree/main/i18) ) koji prevodi `Markdown` i `YAML` na više jezika.

Može savršeno održavati format `Markdown` . Može identificirati izmjene datoteka i samo prevesti izmijenjene datoteke.

Prijevod se može uređivati.

Izmenite originalni tekst i ponovo ga mašinski prevedite, ručne izmene prevoda neće biti prepisane (ako ovaj paragraf originalnog teksta nije izmenjen).

Možete koristiti najpoznatije alate za uređivanje `Markdown` (ali ne možete dodavati ili brisati pasuse) i koristiti najpoznatiji način kontrole verzija.

Baza koda se može kreirati kao open source za jezičke datoteke, a uz pomoć `Pull Request` procesa globalni korisnici mogu učestvovati u kontinuiranoj optimizaciji prijevoda. [github](//github.com) veza i druge zajednice otvorenog koda.

> [!TIP]
> Prihvaćamo UNIX filozofiju "sve je datoteka" i možemo upravljati prijevodima na stotine jezika bez uvođenja složenih i glomaznih rješenja za poduzeća.

[→ Za upute za upotrebu pročitajte projektnu dokumentaciju](/i18) .

## Najkvalitetniji Mašinski Prevod

Razvili smo novu generaciju prevodilačke tehnologije koja kombinuje tehničke prednosti tradicionalnih modela mašinskog prevođenja i velikih jezičkih modela kako bi prevode učinili preciznim, glatkim i elegantnim.

Slijepi testovi pokazuju da je kvalitet našeg prijevoda znatno bolji u odnosu na slične usluge.

Da bi se postigao isti kvalitet, količina ručnog uređivanja koju zahtijeva Google Translate i `ChatGPT` je `2.67` i `3.15` puta veća od naše.

#### <a rel=id href="#price" id="price"></a> Izuzetno konkurentne cijene

|                                                                                   | USD/milion riječi |
| --------------------------------------------------------------------------------- | ------------- |
| [i18n.site](https://i18n.site)                                                    | 9             |
| [Microsoft](https://azure.microsoft.com/pricing/details/cognitive-services/translator) | 10            |
| [Amazon](https://aws.amazon.com/translate/pricing)                                | 15            |
| [Google](https://cloud.google.com/translate/pricing)                                | 20            |
| [DeepL](https://www.deepl.com/zh/pro#developer)                                  | 25            |

[➤ Kliknite ovdje da autorizujete i automatski pratite github i18n.site](https://github.com/login/oauth/authorize?client_id=Ov23liuGAmK0plc9FgB3&amp;scope=user:email,user:follow,public_repo) i **dobijete bonus $50** !

Napomena: Broj znakova za naplatu = [broj unicode](https://en.wikipedia.org/wiki/Unicode) u izvornoj datoteci × broj jezika u prijevodu

### i18n.site: Višejezični Generator Statičkih Stranica

Alat komandne linije ( [izvorni kod](https://github.com/i18n-site/rust/tree/main/i18n-site) ) za generiranje višejezičnih statičkih stranica.

Čisto statičan, optimiziran za iskustvo čitanja, integriran s prijevodom [i18](#i18) najbolji je izbor za izgradnju stranice projektnog dokumenta.

Osnovni front-end okvir usvaja potpunu arhitekturu dodataka, koja je laka za sekundarni razvoj, ako je potrebno, pozadinske funkcije se mogu integrirati.

Ova web stranica je razvijena na osnovu ovog okvira i uključuje korisničke, platne i druge funkcije ( [izvorni kod](/i18n.site/c/src) će biti napisan kasnije).

[→ Za upute za upotrebu pročitajte projektnu dokumentaciju](/i18n.site) .

## Ostati U Kontaktu

Molimo <button onclick="mailsub()">kliknite na ovu e-poštu da biste se pretplatili na ažuriranja proizvoda</button> i <button onclick="webpush()">omogućili push preglednika</button> . Obavijestit ćemo vas kada budu napravljena ažuriranja proizvoda.

[i18n-site.bsky.social](https://bsky.app/profile/i18n-site.bsky.social) / da pratite naše društvene naloge [X.COM: @i18nSite](https://x.com/i18nSite)

Ako naiđete na probleme [→ objavite na korisničkom forumu](https://groups.google.com/u/1/g/i18n) .

## O Nama

> Rekli su: Dođite, sagradite kulu koja seže do neba i učinite ljudski rod slavnim.
>
> GOSPOD je to vidio i rekao: "Sva ljudska bića imaju isti jezik i rasu. Sada kada je ovo postignuto, sve će biti učinjeno."
>
> Onda je došlo, zbog čega su ljudska bića bila nesposobna da razumiju jezik jedni drugih i raspršila se na raznim mjestima.

<p style="text-align:right">──Bible·Postanak</p>

Želimo da izgradimo internet bez izolacije jezičke komunikacije.
Nadamo se da će se cijelo čovječanstvo okupiti sa zajedničkim snom.

Markdown stranice za prijevod i dokumentaciju su samo početak.
Sinhronizirati objavljivanje sadržaja na društvenim mrežama;
Podrška dvojezičnim komentarima i sobama za ćaskanje;
Višejezični sistem ulaznica koji može platiti nagrade;
Tržište prodaje međunarodnih front-end komponenti;
Ima još mnogo toga što želimo da uradimo.

Vjerujemo u open source i volimo dijeljenje,
Dobrodošli da zajedno stvorimo budućnost bez granica.

> [!NOTE]
> Radujemo se susretu sa istomišljenicima u ogromnom moru ljudi.
> Tražimo volontere za učešće u razvoju otvorenog koda i lekturi prevedenih tekstova.
> Ako ste zainteresovani, molimo vas [→ Kliknite ovdje da popunite svoj profil](https://ggl.link/i18n) , a zatim se pridružite [mailing listi](https://groups.google.com/u/2/g/i18n-site) za komunikaciju.