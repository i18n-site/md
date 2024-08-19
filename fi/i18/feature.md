# Tuotteen ominaisuudet

`i18` on komentorivityökalu Markdownin ja Yaml-tiedostojen kääntämiseen.

## Se säilyttää Markdownin muodon täydellisesti

Tukee Markdown-taulukoiden kääntämistä muotoa vahingoittamatta.

`MarkDown` HTML Markdown HTML `<pre>` `<code>`

## Se tunnistaa matemaattiset kaavat ja ohittaa ne käännöksessä

Matemaattiset kaavat tunnistetaan ja ohitetaan käännöksessä.

Matemaattisten kaavojen kirjoittamisesta lisätietoa [Githubin ohjeessa matemaattisten lausekkeiden kirjoittamisesta](https://docs.github.com/get-started/writing-on-github/working-with-advanced-formatting/writing-mathematical-expressions#about-writing-mathematical-expressions).

## Se kääntää koodinpätkien kommentit

Se ei käännä sisäisiä koodinpätkiä tai inline-koodia, mutta kääntää koodin kommentit.

Kommenttien kääntämiseksi on ilmoitettava kieli ` ``` ` jälkeen, esimerkiksi: ` ```rust `.

Tällä hetkellä se tukee kommenttien kääntämistä seuraavilla kielillä: `toml`, `yaml`, `json5`, `go`, `rust`, `c`, `cpp`, `java`, `js`, `coffee`, `python`, `bash`, `php` [ja muilla kielillä](https://github.com/i18n-site/rust/blob/main/getc/src/style.rs#L14).

Jos tarvitsemaasi ohjelmointikieltä ei ole saatavilla, ota [meihin yhteyttä](https://groups.google.com/g/i18n-site).

## Komentoriviystävällinen

Markkinoiden [raskaat työkalut](https://www.capterra.com/translation-management-software) voivat hallita käännösasiakirjoja.

Ohjelmoijille, jotka ovat tottuneet käyttämään `git`, `vim` ja `vscode`, näiden työkalujen käyttäminen asiakirjojen muokkaamiseen ja versionhallintaan lisää oppimiskustannuksia.

`KISS`-periaatteen (`Keep It Simple, Stupid`) uskoville yritystason ratkaisut ovat usein raskaita, tehottomia ja vaikeasti käytettäviä.

Käännöksen pitäisi olla yksinkertainen: syötä komento ja valmis. Ei monimutkaisia ympäristöriippuvuuksia.

Älä lisää entiteettejä, ellei se ole välttämätöntä.

## Ei muutoksia, ei käännöstä

On olemassa myös komentorivin käännöstyökaluja, kuten [translate-shell](https://github.com/soimort/translate-shell).

Kuitenkin ne eivät tue tiedostojen muutosten tunnistamista, vaan kääntävät vain muokatut tiedostot kustannusten vähentämiseksi ja tehokkuuden lisäämiseksi.

## Käännöstä voidaan muokata, ja uusi konekäännös ei korvaa olemassa olevia muutoksia

Käännöstä voidaan muokata.

Alkuperäisen tekstin muokkaaminen ei korvata käännöksen manuaalisia muutoksia uudessa konekäännöksessä (jos alkuperäistä kappaletta ei ole muokattu).

## Laadukkaampi konekäännös

Olemme kehittäneet uuden sukupolven käännösteknologian, joka yhdistää perinteisten konekäännösmallien ja suurten kielimallien tekniset edut, tuottaen tarkkoja, sujuvia ja tyylikkäitä käännöksiä.

Sokkotestit osoittavat, että käännöslaatumme on merkittävästi parempi kuin kilpailijoiden.

Saman laadun saavuttamiseksi Google-kääntäjän ja `ChatGPT` vaatima manuaalisen muokkauksen määrä on `2.67`-kertainen ja `3.15`-kertainen meidän omaan vaatimaan verrattuna.

## <a rel=id href="#price" id="price"></a> Kilpailukykyinen hinnoittelu

|                                                                                   | USD / miljoonaa sanaa |
| --------------------------------------------------------------------------------- | ------------- |
| [i18n.site](https://i18n.site)                                                    | 9             |
| [Microsoft](https://azure.microsoft.com/pricing/details/cognitive-services/translator) | 10            |
| [Amazon](https://aws.amazon.com/translate/pricing)                                | 15            |
| [Google](https://cloud.google.com/translate/pricing)                                | 20            |
| [DeepL](https://www.deepl.com/zh/pro#developer)                                  | 25            |

[Napsauta tätä valtuuttaaksesi ja seurataksesi github i18n.site](https://github.com/login/oauth/authorize?client_id=Ov23liuGAmK0plc9FgB3&amp;scope=user:email,user:follow,public_repo) ja **saat $50** !

Huomautus: laskutettavien merkkien määrä = lähdetiedoston [unicode-määrä](https://en.wikipedia.org/wiki/Unicode) × käännöksen kielten määrä

## Tukee `YAML`-käännöksiä

Työkalu kääntää vain sanakirjan arvot `YAML`-tiedostossa, ei avaimia.

`YAML`-käännöksen avulla voit helposti rakentaa kansainvälisiä ratkaisuja eri ohjelmointikielille.

## Tukee `HOGO`-konfiguraation kääntämistä

Tukee [HOGO](https://github.com/gohugoio/hugo) -tyyppisten staattisten blogien otsikkokonfiguraatioiden kääntämistä, vain kentät `title`, `summary` ja `description`.

## Älä käännä muuttujien nimiä

`Markdown`-muotoa käytetään sähköpostimallina, ja `YAML`-muotoa kielitiedostona, joissa on muuttuvia parametreja (esimerkiksi: lataus `${amount}` on vastaanotettu).

Muuttujien nimet, kuten `${varname}`, eivät ole englanninkielisiä käännöksiä.

## Käännösten optimointi kiinalle, japanille ja korealle

### Kun käännetään englanniksi, otsikot kirjoitetaan automaattisesti isolla alkukirjaimella

Kiinassa, Japanissa ja Koreassa ei ole isoja ja pieniä kirjaimia, mutta englanninkielisten otsikoiden käytäntö on kirjoittaa ensimmäinen kirjain isolla.

`i18`-työkalu tunnistaa `Markdown`-otsikot ja kirjoittaa ensimmäisen kirjaimen automaattisesti isolla kirjaimella, kun käännetään eri kirjainmuotoihin.

Esimerkiksi `为阅读体验而优化` käännetään `Optimized for Reading Experience`ksi.

### Älä käännä kiinalaisissa, japanilaisissa ja korealaisissa asiakirjoissa olevia englanninkielisiä termejä

Kiinalaisissa, japanilaisissa ja korealaisissa asiakirjoissa on usein monia englanninkielisiä termejä.

Konekäännökset kiinalaisista, japanilaisista ja korealaisista kielistä ei-englannin kielille voivat usein kääntää termit yhdessä, kuten seuraava kiinalainen lause:

`Falcon 得分超 Llama ？Hugging Face 排名引发争议`

Jos käytät Googlea tai DeepL:ää, ne kumpikin kääntävät väärin englanninkielisiä termejä, jotka pitäisi pitää alkuperäisinä (esimerkiksi japani ja ranska).

### Google Translate

Käännetty japaniksi: `ファルコンがラマを上回る？ハグ顔ランキングが論争を巻き起こす`

![](//p.3ti.site/1720199391.avif)

Käännetty ranskaksi: `Le faucon surpasse le lama ? Le classement Hugging Face suscite la polémique`

`Falcon` käännetään `faucon`iksi ja `Llama` käännetään `lama`iksi. Ne ovat erityissubstantiiveja, joita ei pitäisi kääntää.

![](//p.3ti.site/1720199451.avif)

### DeepL-käännös

Käännetty japaniksi: `ファルコンがラマに勝利、ハグ顔ランキングが物議を醸す`

![](//p.3ti.site/1720199550.avif)

DeepL kääntää yllä olevan ranskaksi (myös kirjoittamalla uudelleen oikeat nimet ja lisäämällä pariton `... `):

`Un faucon marque un point sur un lama... Le classement des visages étreints suscite la controverse. `

![](//p.3ti.site/1720199603.avif)

### i18n.site-käännös

`i18` tunnistaa englanninkieliset termit kiinalaisissa, japanilaisissa ja korealaisissa asiakirjoissa ja jättää ne ennalleen.

Esimerkiksi yllä oleva japaninkielinen käännöstulos on:

`Falcon のスコアが Llama よりも高かったですか ? Hugging Face ランキングが論争を引き起こす`

Ranskankielinen käännös on:

`Falcon a obtenu un score supérieur à Llama ? Hugging Face Le classement suscite la controverse`

Vain jos englanninkielisen sanan ja kiinan-, japanin- ja korealaisen tekstin välissä on välilyönti tai englanninkielinen pituus on suurempi kuin 1, sanaa pidetään terminä.

Esimerkiksi: `C罗` käännetään `Cristiano Ronaldo`ksi.

## Voivat yhdistää `i18n.site`-monikieliseen verkkosivuston rakentamiseen

`i18` on integroitu monikieliseen verkkosivuston rakentamiseen tarkoitettuun komentorivityökaluun [`i18n.site`](/i18n.site).

Katso lisätietoja [`i18n.site`](/i18n.site) -dokumentaatiosta.

## Koodi avoimen lähdekoodin

Asiakas on täysin avoimen lähdekoodin, ja palvelinpuoli on 90% avointa lähdekoodia, [katso lähdekoodi täältä](/i18n.site/src).

Haemme vapaaehtoisia osallistumaan avoimen lähdekoodin kehittämiseen ja käännettyjen tekstien oikolukuihin.

Jos olet kiinnostunut, [→ täytä profiilisi täältä](https://ggl.link/i18n) ja liity sitten [postituslistalle](https://groups.google.com/u/2/g/i18n-site) keskustelua varten.

## Pidä yhteyttä

<button onclick="mailsub()">Tilaa tuotepäivitykset sähköpostitse tästä</button> ja <button onclick="webpush()">ota käyttöön selaimen push-ilmoitukset</button>, ilmoitamme sinulle tuotepäivityksistä.

Seuraa myös sosiaalisen median tilejämme [X.COM: @i18nSite](https://x.com/i18nSite) / [i18n-site.bsky.social](https://bsky.app/profile/i18n-site.bsky.social).