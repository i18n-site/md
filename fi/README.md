<h1 style="display:flex;justify-content:space-between">i18n.site ⋅ Kansainväliset ratkaisut <img src="//p.3ti.site/logo.svg" style="user-select:none;margin-top:-1px;width:42px"></h1>

Komentorivi Markdown, Yaml -käännöstyökalu, auttaa sinua rakentamaan kansainvälisen asiakirjasivuston, joka tukee [satoja kieliä](/i18/LANG_CODE) ..

<pre class="langli" style="display:flex;flex-wrap:wrap;background:transparent;border:1px solid #eee;font-size:12px;box-shadow:0 0 3px inset #eee;padding:12px 5px 4px 12px;justify-content:space-between;"><style>pre.langli i{font-weight:300;font-family:s;margin-right:2px;margin-bottom:8px;font-style:normal;color:#666;border-bottom:1px dashed #ccc;}</style><i>English</i><i>简体中文</i><i>Deutsch</i><i>Français</i><i>Español</i><i>Italiano</i><i>日本語</i><i>Polski</i><i>Português(Brasil)</i><i>Русский</i><i>Nederlands</i><i>Türkçe</i><i>Svenska</i><i>Čeština</i><i>Українська</i><i>Magyar</i><i>Indonesia</i><i>한국어</i><i>Română</i><i>Norsk</i><i>Slovenčina</i><i>Suomi</i><i>العربية</i><i>Català</i><i>Dansk</i><i>فارسی</i><i>Tiếng Việt</i><i>Lietuvių</i><i>Hrvatski</i><i>עברית</i><i>Slovenščina</i><i>српски језик</i><i>Esperanto</i><i>Ελληνικά</i><i>Eesti</i><i>Български</i><i>ไทย</i><i>Haitian Creole</i><i>Íslenska</i><i>नेपाली</i><i>తెలుగు</i><i>Latine</i><i>Galego</i><i>हिन्दी</i><i>Cebuano</i><i>Melayu</i><i>Euskara</i><i>Bosnian</i><i>Letzeburgesch</i><i>Latviešu</i><i>ქართული</i><i>Shqip</i><i>मराठी</i><i>Azərbaycan</i><i>Македонски</i><i>Wikang Tagalog</i><i>Cymraeg</i><i>বাংলা</i><i>தமிழ்</i><i>Basa Jawa</i><i>Basa Sunda</i><i>Беларуская</i><i>Kurdî(Navîn)</i><i>Afrikaans</i><i>Frysk</i><i>Toğikī</i><i>اردو</i><i>Kichwa</i><i>മലയാളം</i><i>Kiswahili</i><i>Gaeilge</i><i>Uzbek(Latin)</i><i>Te Reo Māori</i><i>Èdè Yorùbá</i><i>ಕನ್ನಡ</i><i>አማርኛ</i><i>Հայերեն</i><i>অসমীয়া</i><i>Aymar Aru</i><i>Bamanankan</i><i>Bhojpuri</i><i>正體中文</i><i>Corsu</i><i>ދިވެހިބަސް</i><i>Eʋegbe</i><i>Filipino</i><i>Guarani</i><i>ગુજરાતી</i><i>Hausa</i><i>Hawaiian</i><i>Hmong</i><i>Ásụ̀sụ́ Ìgbò</i><i>Iloko</i><i>Қазақ Тілі</i><i>ខ្មែរ</i><i>Kinyarwanda</i><i>سۆرانی</i><i>Кыргызча</i><i>ລາວ</i><i>Lingála</i><i>Ganda</i><i>Maithili</i><i>Malagasy</i><i>Malti</i><i>монгол</i><i>မြန်မာ</i><i>ChiCheŵa</i><i>ଓଡ଼ିଆ</i><i>Afaan Oromoo</i><i>پښتو</i><i>ਪੰਜਾਬੀ</i><i>Gagana Sāmoa</i><i>Sanskrit</i><i>Sesotho sa Leboa</i><i>Sesotho</i><i>chiShona</i><i>سنڌي</i><i>සිංහල</i><i>Soomaali</i><i>Татар</i><i>ትግር</i><i>Xitsonga</i><i>Türkmen Dili</i><i>Akan</i><i>isiXhosa</i><i>ייִדיש</i><i>Isi-Zulu</i></pre>

## Esipuhe

Internet on poistanut etäisyyden fyysisessä tilassa, mutta kielierot haittaavat edelleen ihmisten yhtenäisyyttä.

Vaikka selaimessa on sisäänrakennettu käännös, hakukoneet eivät silti voi tehdä hakuja eri kielillä.

Sosiaalisen median ja sähköpostin avulla ihmiset ovat tottuneet keskittymään tietolähteisiin omalla äidinkielellään.

Tietojen räjähdysmäinen kasvu ja globaalit markkinat vaativat, että **monikielisyys on perustaito** kilpailla vähäisestä huomiosta.

Vaikka kyseessä on henkilökohtainen avoimen lähdekoodin projekti, joka haluaa vaikuttaa laajempaan yleisöön, sen tulisi tehdä kansainvälinen teknologiavalinta alusta alkaen.

## <a rel=id href="#project" id="project"></a> Projektin esittely

Tämä sivusto tarjoaa tällä hetkellä kaksi avoimen lähdekoodin komentorivityökalua:

* [i18 : MarkDown-komentorivin käännöstyökalu](/i18/feature)
* [i18n.site : monikielinen staattinen sivustogeneraattori](/i18n.site)

### <a rel=id href="#i18" id="i18"></a> i18: MarkDown-komentorivin käännöstyökalu

Komentorivityökalu ( [lähdekoodi](https://github.com/i18n-site/rust/tree/main/i18) ), joka kääntää `Markdown` ja `YAML` useille kielille.

Pystyy täydellisesti ylläpitämään `Markdown`-muotoa. Tunnistaa tiedostojen muutokset ja kääntää vain muuttuneet tiedostot.

Käännöstä voidaan muokata.

Alkuperäisen tekstin muokkaaminen ei korvata käännöksen manuaalisia muutoksia uudessa konekäännöksessä (jos alkuperäistä kappaletta ei ole muokattu).

Me hyväksymme `UNIX`-filosofian "Kaikki on tiedosto" ja voimme hallita satojen kielten käännöksiä ilman monimutkaisia yritystason ratkaisuja.

Voit käyttää tutuimpia työkaluja `Markdown`-muokkaamiseen (mutta et voi lisätä tai poistaa kappaleita) ja tutuinta tapaa tehdä versionhallinta.

Voit luoda kielitiedostoille avoimen lähdekoodin koodikannan ja `Pull Request` -prosessien avulla globaalit käyttäjät voivat osallistua käännösten jatkuvaan optimointiin. Saumaton yhteys [GitHub](//github.com) ja muihin avoimen lähdekoodin yhteisöihin.

[→ Lue käyttöopas projektin dokumentaatiosta](/i18).

## Laadukkaampi konekäännös

Olemme kehittäneet uuden sukupolven käännösteknologian, joka yhdistää perinteisten konekäännösmallien ja suurten kielimallien tekniset edut, jotta käännökset ovat tarkkoja, sujuvia ja tyylikkäitä.

Sokkotestit osoittavat, että käännöslaatumme on merkittävästi parempi kuin kilpailijoidemme.

Saman laadun saavuttamiseksi Google-kääntäjän ja `ChatGPT` vaatima manuaalisen muokkauksen määrä on `2.67` -kertainen ja `3.15` -kertainen meidän omaamme verrattuna.

#### <a rel=id href="#price" id="price"></a> Kilpailukykyinen hinnoittelu

|                                                                                   | USD / miljoonaa sanaa |
| --------------------------------------------------------------------------------- | ------------- |
| [i18n.site](https://i18n.site)                                                    | 9             |
| [Microsoft](https://azure.microsoft.com/pricing/details/cognitive-services/translator) | 10            |
| [Amazon](https://aws.amazon.com/translate/pricing)                                | 15            |
| [Google](https://cloud.google.com/translate/pricing)                                | 20            |
| [DeepL](https://www.deepl.com/zh/pro#developer)                                  | 25            |

[Napsauta tätä hyväksyäksesi ja seurataksesi github i18n.site](https://github.com/login/oauth/authorize?client_id=Ov23liuGAmK0plc9FgB3&amp;scope=user:email,user:follow,public_repo) ja **vastaanottaa bonus $50** !

Huomautus: laskutettavien merkkien määrä = lähdetiedoston [unicode-merkkit](https://en.wikipedia.org/wiki/Unicode) × käännösten kielten määrä

### i18n.site: Monikielinen staattinen sivustogeneraattori

Komentorivityökalu ( [lähdekoodi](https://github.com/i18n-site/rust/tree/main/i18n-site) ) monikielisten staattisten sivustojen luomiseen.

Puhtaasti staattinen, lukukokemusta optimoitu, integroitu [i18](#i18) -työkalu, paras valinta projektidokumentaation rakentamiseen.

Taustalla oleva käyttöliittymä käyttää täyttä laajennusarkkitehtuuria, joka on helppo mukauttaa. Tarvittaessa voidaan integroida taustatoimintoja.

Tämä sivusto on kehitetty tämän kehyksen pohjalta ja sisältää käyttäjä-, maksu- ja muita toimintoja ( [lähdekoodi](/i18n.site/src) ). Tarkempi opas kirjoitetaan myöhemmin.

[→ Lue käyttöopas projektin dokumentaatiosta](/i18n.site).

## Pidä yhteyttä

<button onclick="mailsub()">Tilaa tuotepäivitykset sähköpostitse tästä</button> ja <button onclick="webpush()">ota käyttöön selaimen push-ilmoitukset</button>, niin ilmoitamme sinulle tuotepäivityksistä.

Seuraa myös sosiaalisen median tilejämme [X.COM: @i18nSite](https://x.com/i18nSite) / [i18n-site.bsky.social](https://bsky.app/profile/i18n-site.bsky.social).

Jos kohtaat ongelmia, [→ kirjoita käyttäjien keskustelupalstalle](https://groups.google.com/u/1/g/i18n).

## Meistä

> He sanoivat: "Tule, rakenna torni, joka ulottuu taivaalle, ja tee ihmiskunnasta kuuluisa."
>
> Herra näki tämän ja sanoi: "Kun kaikki ihmisillä on sama kieli ja rotu, nyt tämä on tehty, kaikki on mahdollista."
>
> Sitten hän tuli ja aiheutti sekaannuksen ihmisten kesken, niin etteivät he voineet ymmärtää toistensa puhetta ja he hajaantuivat eri puolille maailmaa.

<p style="text-align:right">── Raamattu, Genesis</p>

Me haluamme rakentaa Internetin ilman kielten välisiä eristysrajoja.
Me toivomme, että koko ihmiskunta kohtaisi yhteisen unelman.

Markdown-käännökset ja dokumentaatiot ovat vasta alkua.
Synkronoi sisällön julkaisu sosiaaliseen mediaan;
Tukee kaksikielisiä kommentteja ja chat-huoneita;
Tukee monikielisiä palkkiotöitä;
Kansainvälisten käyttöliittymäkomponenttien markkinat;
Meillä on paljon muuta, mitä haluamme tehdä.

Odotamme innolla, että tapaamme samanhenkisiä ihmisiä valtavassa ihmismassassa.
Haemme vapaaehtoisia osallistumaan avoimen lähdekoodin kehittämiseen ja käännettyjen tekstien oikolukuihin.
Jos olet kiinnostunut, [→ täytä profiilisi tästä](https://ggl.link/i18n) ja liity sitten [postituslistalle](https://groups.google.com/u/2/g/i18n-site) yhteydenpitoa varten.

Uskomme avoimeen lähdekoodiin ja rakkauteen jakamista,
Tervetuloa mukaan luomaan rajatonta tulevaisuutta yhdessä.