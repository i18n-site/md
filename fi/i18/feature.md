# Tuotteen ominaisuudet

`i18` on komentorivityökalu Markdown- ja YAML-käännökseen.

## Se säilyttää Markdownin muodon täydellisesti

Tukee Markdown-taulukoiden kääntämistä muotoa vahingoittamatta.

Tukee käännöstä HTML Markdown , sisältö `<pre>` ja `<code>` upotettu HTML `MarkDown`

## Se tunnistaa matemaattiset kaavat ja ohittaa ne käännöksessä

Matemaattiset kaavat tunnistetaan ja ohitetaan käännöksessä.

Matemaattisten kaavojen kirjoittamisesta lisätietoja löytyy [Githubin ohjeista matemaattisten lausekkeiden kirjoittamiseen](https://docs.github.com/get-started/writing-on-github/working-with-advanced-formatting/writing-mathematical-expressions#about-writing-mathematical-expressions).

## Se tukee koodinpätkien kommenttien kääntämistä

Sisäiset koodit ja koodinpätkät eivät ole käännöksen kohteena, mutta koodin kommentit voidaan kääntää.

Käännöskommenteissa kieli on ilmoitettava ` ``` ` jälkeen, esimerkiksi: ` ```rust `.

Tällä hetkellä tuetaan seuraavien kielten kommenttien kääntämistä: `toml`, `yaml`, `json5`, `go`, `rust`, `c`, `cpp`, `java`, `js`, `coffee`, `python`, `bash`, `php` [ja muut kielit](https://github.com/i18n-site/rust/blob/main/getc/src/style.rs#L14).

Jos tarvitsemaasi ohjelmointikieltä ei ole tuettu, ota [yhteyttä meihin](https://groups.google.com/g/i18n-site).

## Komentoriviystävällinen

On olemassa monia [raskaita työkaluja](https://www.capterra.com/translation-management-software), jotka voivat hallita käännösasiakirjoja.

Ohjelmoijille, jotka ovat tottuneet käyttämään `git`, `vim` ja `vscode`, näiden työkalujen käyttäminen asiakirjojen muokkaamiseen ja versionhallintaan lisää oppimiskustannuksia.

`KISS`-periaatteen (`Keep It Simple, Stupid`) uskoville yritystason ratkaisut ovat synonyymejä raskaalle, tehottomalle ja vaikeakäyttöiselle.

Käännös tulisi voida tehdä komentojen avulla ja yhdellä napsautuksella ilman monimutkaisia ympäristöriippuvuuksia.

Älä lisää entiteettejä, ellei se ole välttämätöntä.

## Ei muutoksia, ei käännöstä

On olemassa joitakin komentorivin käännöstyökaluja, kuten [translate-shell](https://github.com/soimort/translate-shell).

Kuitenkin ne eivät tue tiedostojen muutosten tunnistamista, vaan ne kääntävät vain muokatut tiedostot kustannusten vähentämiseksi ja tehokkuuden lisäämiseksi.

## Käännöstä voidaan muokata, ja uusi konekäännös ei korvaa olemassa olevia muutoksia

Käännöstä voidaan muokata.

Alkuperäisen tekstin muokkaaminen ei korvata käännöksen manuaalisia muutoksia uudessa konekäännöksessä (jos alkuperäistä kappaletta ei ole muokattu).

## Laadukkaampi konekäännös

Olemme kehittäneet uuden sukupolven käännösteknologian, joka yhdistää perinteisten konekäännösmallien ja suurten kielimallien tekniset edut, jotta käännökset ovat tarkkoja, sujuvia ja tyylikkäitä.

Sokkotestit osoittavat, että käännöslaatumme on merkittävästi parempi kuin kilpailijoidemme.

Saman laadun saavuttamiseksi Google-kääntäjän ja `ChatGPT` vaatima manuaalisen muokkauksen määrä on `2.67` -kertainen ja `3.15` -kertainen meidän omaamme verrattuna.

## <a rel=id href="#price" id="price"></a> Kilpailukykyinen hinnoittelu

|                                                                                   | USD / miljoonaa sanaa |
| --------------------------------------------------------------------------------- | ------------- |
| [i18n.site](https://i18n.site)                                                    | 9             |
| [Microsoft](https://azure.microsoft.com/pricing/details/cognitive-services/translator) | 10            |
| [Amazon](https://aws.amazon.com/translate/pricing)                                | 15            |
| [Google](https://cloud.google.com/translate/pricing)                                | 20            |
| [DeepL](https://www.deepl.com/zh/pro#developer)                                  | 25            |

[Napsauta tätä hyväksyäksesi ja seurataksesi github i18n.site](https://github.com/login/oauth/authorize?client_id=Ov23liuGAmK0plc9FgB3&amp;scope=user:email,user:follow,public_repo) ja **vastaanottaa bonus $50** !

Huomautus: laskutettavien merkkien määrä = lähdetiedoston [unicode-merkkit](https://en.wikipedia.org/wiki/Unicode) × käännösten kielten määrä

## Tuki Käännös `YAML`

Työkalu kääntää vain sanakirjan arvot `YAML` :lla, ei sanakirjan avaimia.

`YAML` käännöksen perusteella voit helposti rakentaa kansainvälisiä ratkaisuja eri ohjelmointikielille.

## Tuki Käännös `HOGO` -Otsikon Kokoonpanoa

Tukee [HOGO](https://github.com/gohugoio/hugo) -tyyppisten staattisten blogien otsikkokenttien `title`, `summary`, `brief` ja `description` kääntämistä.

## Älä käännä muuttujien nimiä

`Markdown` käytetään sähköpostimallina, `YAML` käytetään kielitiedoston kokoonpanona, ja siinä on muuttuvia parametreja (esimerkiksi: lataus `${amount}` on vastaanotettu).

Muuttujien nimet, kuten `${varname}`, eivät ole käännöksen kohteena.

## Käännösten optimointi kiinalle, japanille ja korealle

### Kun käännetään englanniksi, otsikot kirjoitetaan automaattisesti isolla alkukirjaimella

Kiinassa, Japanissa ja Koreassa ei ole isoja ja pieniä kirjaimia, mutta englanninkielisissä otsikoissa ensimmäinen kirjain kirjoitetaan yleensä isolla.

`i18` tunnistaa otsikon luvussa `MarkDown` ja kirjoittaa ensimmäisen kirjaimen automaattisesti isolla käännöksellä isot ja pienet kirjaimet.

Esimerkiksi `为阅读体验而优化` käännetään `Optimized for Reading Experience` :ksi.

### Älä käännä kiinalaisissa, japanilaisissa ja korealaisissa asiakirjoissa olevia englanninkielisiä termejä

Kiinalaisissa, japanilaisissa ja korealaisissa asiakirjoissa on usein monia englanninkielisiä termejä.

Konekäännöksissä, kun kiinaa, japania ja koreaa käännetään ei-englannin kieliksi, termit käännetään usein yhdessä, kuten seuraava kiinalainen lause:

`Falcon 得分超 Llama ？Hugging Face 排名引发争议`

Jos käytät Googlea tai DeepL:ää, ne kumpikin kääntävät väärin englanninkielisiä termejä, jotka pitäisi jättää alkuperäisinä (esimerkiksi japani ja ranska).

### Google-käännös

`ファルコンがラマを上回る？ハグ顔ランキングが論争を巻き起こす` japaniksi:

![](//p.3ti.site/1720199391.avif)

`Le faucon surpasse le lama ? Le classement Hugging Face suscite la polémique` ranskaksi:

`Falcon` käännetään `faucon` :ksi ja `Llama` käännetään `lama` :ksi. Ne ovat erityissubstantiiveja, joita ei pitäisi kääntää.

![](//p.3ti.site/1720199451.avif)

### DeepL-käännös

`ファルコンがラマに勝利、ハグ顔ランキングが物議を醸す` japaniksi:

![](//p.3ti.site/1720199550.avif)

DeepL kääntää yllä olevan ranskaksi (myös kirjoittamalla uudelleen oikeat nimet ja lisäämällä pariton `... `):

`Un faucon marque un point sur un lama... Le classement des visages étreints suscite la controverse. `

![](//p.3ti.site/1720199603.avif)

### i18n.siten käännös

`i18` :n käännös tunnistaa englanninkieliset termit kiinalaisissa, japanilaisissa ja korealaisissa asiakirjoissa ja jättää termit ennalleen.

Esimerkiksi yllä oleva japaninkielinen käännöstulos on:

`Falcon のスコアが Llama よりも高かったですか ? Hugging Face ランキングが論争を引き起こす`

Ranskankielinen käännös on:

`Falcon a obtenu un score supérieur à Llama ? Hugging Face Le classement suscite la controverse`

Vain jos englanninkielisen sanan ja kiinan-, japanin- ja korealaisen tekstin välissä on välilyönti tai englanninkielinen pituus on suurempi kuin 1, sanaa pidetään terminä.

Esimerkiksi: `C罗` käännetään `Cristiano Ronaldo` :ksi.

## Voit yhdistää `i18n.site` -sivuston monikieliseen rakentamiseen

`i18` on integroitu monikieliseen verkkosivustojen rakennuskomentorivityökaluun [`i18n.site`](/i18n.site).

Katso lisätietoja [`i18n.site`](/i18n.site) :n dokumentaatiosta.

## Koodi on avointa lähdekoodia

Asiakas on täysin avoimen lähdekoodin, ja 90 % palvelimen koodista on avointa [katsoaksesi lähdekoodia](/i18n.site/src).

Haemme vapaaehtoisia osallistumaan avoimen lähdekoodin kehittämiseen ja käännettyjen tekstien oikolukuihin.

Jos olet kiinnostunut, [→ täytä profiilisi tästä](https://ggl.link/i18n) ja liity sitten [postituslistalle](https://groups.google.com/u/2/g/i18n-site) yhteydenpitoa varten.

## Pidä yhteyttä

<button onclick="mailsub()">Tilaa tuotepäivitykset sähköpostitse tästä</button> ja <button onclick="webpush()">ota käyttöön selaimen push-ilmoitukset</button>, niin ilmoitamme sinulle tuotepäivityksistä.

Seuraa myös sosiaalisen median tilejämme [X.COM: @i18nSite](https://x.com/i18nSite) / [i18n-site.bsky.social](https://bsky.app/profile/i18n-site.bsky.social).