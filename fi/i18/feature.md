# Tuotteen ominaisuudet

`i18` on komentorivityökalu Markdown- ja Yaml-käännöksiin.

## Se säilyttää Markdownin muodon täydellisesti

Tukee Markdown-taulukoiden kääntämistä muotoa vahingoittamatta.

Tukee käännöstä HTML Markdown , sisältö `<pre>` ja `<code>` upotettu HTML `MarkDown`

## Se tunnistaa matemaattiset kaavat ja ohittaa niiden käännöksen

Matemaattiset kaavat tunnistetaan ja niiden käännös ohitetaan.

Matemaattisten kaavojen kirjoittamisesta lisätietoja löytyy [Githubin ohjeista matemaattisten lausekkeiden kirjoittamiseen](https://docs.github.com/get-started/writing-on-github/working-with-advanced-formatting/writing-mathematical-expressions#about-writing-mathematical-expressions).

## Se tukee koodinpätkien kommenttien kääntämistä

Se ei käännetä sisäisiä koodinpätkiä tai inline-koodia, mutta koodin kommentit voidaan kääntää.

Käännöskommenttien kääntämiseksi on ilmoitettava kieli ` ``` ` jälkeen, esimerkiksi: ` ```rust `.

Tällä hetkellä se tukee huomautusten kääntämistä kielillä `toml`, `yaml`, `json5`, `go`, `rust`, `c`, `cpp`, `java`, `js`, `coffee`, `python`, `bash`, `php` [ja muilla kielillä](https://github.com/i18n-site/rust/blob/main/getc/src/style.rs#L14).

Jos tarvitsemaasi ohjelmointikieltä ei ole saatavilla, ota [meihin yhteyttä](https://groups.google.com/g/i18n-site).

## Komentoriviystävällinen

Monet [raskaat työkalut](https://www.capterra.com/translation-management-software) voivat hallita käännösasiakirjoja.

Ohjelmoijille, jotka ovat tottuneet `git`, `vim` ja `vscode` -työkaluihin, näiden työkalujen käyttäminen asiakirjojen muokkaamiseen ja versioiden hallintaan lisää epäilemättä oppimiskustannuksia.

`KISS` (`Keep It Simple, Stupid`) -periaatteen uskovien keskuudessa yritystason ratkaisut ovat synonyymi hankalia, tehottomia ja vaikeasti käytettäviä.

Käännös tulisi tehdä syöttämällä komentoja ja viimeistelemällä se yhdellä napsautuksella. Ei pitäisi olla monimutkaisia ympäristöriippuvuuksia.

Älä lisää entiteettejä, ellei se ole välttämätöntä.

## Ei muutoksia, ei käännöstä

On myös joitain komentorivin käännöstyökaluja, kuten [translate-shell](https://github.com/soimort/translate-shell).

Ne eivät kuitenkaan tue tiedostojen muutosten tunnistamista ja vain kääntävät muokatut tiedostot kustannusten vähentämiseksi ja tehokkuuden lisäämiseksi.

## Käännöstä voidaan muokata, eikä konekäännös korvaa olemassa olevia muutoksia

Käännös on muokattavissa.

Muokkaa alkuperäistä tekstiä ja käännä se uudelleen; manuaalisia muutoksia ei kirjoiteta päälle (jos alkuperäistä kappaletta ei ole muokattu).

## Laatua parhainta konekäännöstä

Olemme kehittäneet uuden sukupolven käännösteknologiaa, joka yhdistää perinteisten konekäännösmallien ja suurten kielimallien tekniset edut, jotta käännökset olisivat tarkkoja, sujuvia ja tyylikkäitä.

Blind testit osoittavat, että käännöslaatumme on huomattavasti parempi kuin kilpailijoidemme.

Saman laadun saavuttamiseksi Google Translate- ja `ChatGPT` -palveluiden vaatima manuaalinen muokkaus on `2.67` kertainen ja `3.15` kertainen verrattuna omaamme.

## <a rel=id href="#price" id="price"></a> Erittäin kilpailukykyinen hinnoittelu

|                                                                                   | USD/100 000 sanaa |
| --------------------------------------------------------------------------------- | ------------- |
| [i18n.site](https://i18n.site)                                                    | 9             |
| [Microsoft](https://azure.microsoft.com/pricing/details/cognitive-services/translator) | 10            |
| [Amazon](https://aws.amazon.com/translate/pricing)                                | 15            |
| [Google](https://cloud.google.com/translate/pricing)                                | 20            |
| [DeepL](https://www.deepl.com/zh/pro#developer)                                  | 25            |

[Napsauta tätä hyväksyäksesi ja seurataksesi github i18n.site](https://github.com/login/oauth/authorize?client_id=Ov23liuGAmK0plc9FgB3&amp;scope=user:email,user:follow,public_repo) ja **vastaanottaa bonus $50** !

Huomautus: laskutettavien merkkien määrä = [Unicode-merkkien määrä](https://en.wikipedia.org/wiki/Unicode) lähdetiedostossa × käännöksen kielten määrä

## Tuki käännös `YAML`

Työkalu kääntää vain `YAML`-tiedostojen sanakirjojen arvot, ei avaimia.

`YAML`-käännöksen avulla voit helposti rakentaa kansainvälisiä ratkaisuja eri ohjelmointikielille.

## Tuki käännös `HOGO`-otsikon kokoonpanoa

Tukee [HOGO](https://github.com/gohugoio/hugo) -tyyppisen staattisen blogin aloitusasetuksia ja kääntää vain kentät `title`, `summary`, `brief` ja `description`.

## Älä käännetä muuttujien nimiä

`Markdown` käytetään sähköpostimallina, `YAML` käytetään kielitiedoston kokoonpanona ja siinä on muuttuvia parametreja (esimerkiksi: lataus `${amount}` on vastaanotettu).

Muuttujien nimiä, kuten `${varname}`, ei pidetä englanninkielisinä käännöksinä.

## Käännösten optimointi kiinalle, japanille ja korealle

### Kun käännetään englanniksi, otsikon ensimmäinen kirjain kirjoitetaan automaattisesti isolla

Kiinassa, Japanissa ja Koreassa ei ole isoja ja pieniä kirjaimia, mutta englanninkielisten otsikoiden käytäntö on kirjoittaa ensimmäinen kirjain isolla.

`i18` tunnistaa `MarkDown`-otsikot ja kirjoittaa ensimmäisen kirjaimen automaattisesti isolla käännöksellä isot ja pienet kirjaimet.

Esimerkiksi `为阅读体验而优化` käännetään `Optimized for Reading Experience` :ksi.

### Ei käännetä kiinalaisissa, japanilaisissa ja korealaisissa teksteissä olevia englanninkielisiä termejä

Kiinalaisissa, japanilaisissa ja korealaisissa asiakirjoissa on usein monia englanninkielisiä termejä.

Kiinan, japanin ja korean kielen konekäännöksestä on tullut ei-englannin kieli, ja termit käännetään usein yhdessä, kuten seuraava kiinalainen lause:

`Falcon 得分超 Llama ？Hugging Face 排名引发争议`

Jos käytät Googlea tai DeepL:ää, ne kumpikin kääntävät väärin englanninkielisiä termejä, joiden pitäisi pysyä alkuperäisinä (esimerkiksi japani ja ranska).

### Google-käännös

`ファルコンがラマを上回る？ハグ顔ランキングが論争を巻き起こす` japaniksi :

![](//p.3ti.site/1720199391.avif)

`Le faucon surpasse le lama ? Le classement Hugging Face suscite la polémique` ranskaksi :

`Falcon` on käännetty `faucon` :ksi ja `Llama` käännetään `lama` :ksi. Erityissubstantiivina niitä ei pidä kääntää.

![](//p.3ti.site/1720199451.avif)

### DeepL-käännös

`ファルコンがラマに勝利、ハグ顔ランキングが物議を醸す` japaniksi :

![](//p.3ti.site/1720199550.avif)

DeepL käännös yllä olevasta ranskaksi (myös kirjoittamalla uudelleen oikeat nimet ja lisäämällä pariton `... `):

`Un faucon marque un point sur un lama... Le classement des visages étreints suscite la controverse. `

![](//p.3ti.site/1720199603.avif)

### i18n.site-käännös

`i18` :n käännös tunnistaa englanninkieliset termit kiinalaisissa, japanilaisissa ja korealaisissa asiakirjoissa ja jättää termit ennalleen.

Esimerkiksi yllä oleva japaninkielinen käännöstulos on:

`Falcon のスコアが Llama よりも高かったですか ? Hugging Face ランキングが論争を引き起こす`

Ranskankielinen käännös on:

`Falcon a obtenu un score supérieur à Llama ? Hugging Face Le classement suscite la controverse`

Vain jos englanninkielisen sanan ja kiinan-, japanin- ja korealaisen tekstin välissä on välilyönti tai englanninkielinen pituus on suurempi kuin 1, sanaa pidetään terminä.

Esimerkiksi: `C罗` käännetään `Cristiano Ronaldo` :ksi.

## Voidaan yhdistää `i18n.site`-monikieliseen verkkosivuston rakentamiseen

`i18` on integroitu monikieliseen verkkosivustojen rakennuskomentorivityökaluun [`i18n.site`](/i18n.site).

Katso lisätietoja [`i18n.site`](/i18n.site) :n dokumentaatiosta.

## Koodi avoin lähdekoodi

Asiakas on täysin avoimen lähdekoodin, ja 90 % palvelimen koodista on avointa [napsauttamalla tätä](/i18n.site/src).

Etsimme vapaaehtoisia, jotka haluavat osallistua avoimen lähdekoodin kehittämiseen ja käännösten tarkistamiseen.

Jos olet kiinnostunut, [→ napsauta tätä täyttääksesi henkilökohtaisen profiilisi](https://ggl.link/i18n) ja liity sitten [postituslistalle](https://groups.google.com/u/2/g/i18n-site) keskustelemaan.

## Pidä yhteyttä

<button onclick="mailsub()">Napsauta tätä tilataksesi sähköposti-informaatiossa tuotepäivityksistä</button> ja <button onclick="webpush()">ota käyttöön selaimen push-ilmoitukset</button>, niin ilmoitamme sinulle tuotepäivityksistä.

[i18n-site.bsky.social](https://bsky.app/profile/i18n-site.bsky.social) myös seuraamaan / tilejämme [X.COM: @i18nSite](https://x.com/i18nSite)