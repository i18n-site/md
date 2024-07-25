# Tuotteen Ominaisuudet

`i18` on komentorivityökalu kääntämiseen Markdown & Yaml

## Pystyy Ylläpitämään Markdownin Muotoa Täydellisesti

Tukee Markdown-taulukoiden kääntämistä muotoa vahingoittamatta.

Tukee käännöstä Markdown kielellä HTML `<pre>` HTML `MarkDown` `<code>` ei käännetä

## Pystyy Tunnistamaan Matemaattisia Kaavoja Ja Ohittamaan Käännöksen

Matemaattiset kaavat tunnistetaan ja käännös ohitetaan.

Lisätietoja matemaattisten kaavojen kirjoittamisesta on kohdassa [" Github Tietoja matemaattisten lausekkeiden kirjoittamisesta"](https://docs.github.com/get-started/writing-on-github/working-with-advanced-formatting/writing-mathematical-expressions#about-writing-mathematical-expressions) .

## Mahdollisuus Kääntää Kommentteja Koodinpätkinä

Sisäistä koodia ja koodinpätkiä ei käännetä, mutta koodin kommentit voidaan kääntää.

Käännöskommenteissa on ilmoitettava kieli ` ``` ` kuten ` ```rust ` :

Tukee tällä hetkellä kommenttien kääntämistä `toml` `yaml` , `json5` , `go` , `rust` , `c` , `cpp` , `java` `js` `coffee` `python` , `bash` , `php` [ja muille kielille](https://github.com/i18n-site/rust/blob/main/getc/src/style.rs#L14) .

Jos tarvitsemaasi ohjelmointikieltä ei ole saatavilla, ota [meihin yhteyttä](https://groups.google.com/g/i18n-site) .

## Komentoriviystävällinen

Käännösasiakirjojen hallintaan on saatavilla monia [raskaita työkaluja](https://www.capterra.com/translation-management-software) .

Ohjelmoijille, jotka tuntevat `git` , `vim` , `vscode` , näiden työkalujen käyttö asiakirjojen muokkaamiseen ja versioiden hallintaan lisää epäilemättä oppimiskustannuksia.

( `Keep It Simple, Stupid` ) Periaatteeseen uskovien keskuudessa yritystason ratkaisut ovat synonyymejä raskaille, tehottomille ja vaikeasti käytettäville `KISS`

Käännös tulee tehdä syöttämällä komentoja ja viimeistelemällä se yhdellä napsautuksella. Ei pitäisi olla monimutkaisia ympäristöriippuvuuksia.

Älä lisää entiteettejä, ellei se ole välttämätöntä.

## Ei Muutoksia, Ei Käännöstä

On myös joitain komentorivin käännöstyökaluja, kuten [translate-shell](https://github.com/soimort/translate-shell)

Ne eivät kuitenkaan tue tiedostojen muutosten tunnistamista ja vain kääntävät muokatut tiedostot kustannusten vähentämiseksi ja tehokkuuden lisäämiseksi.

## Käännöstä Voidaan Muokata, Eikä Konekäännös Korvaa Olemassa Olevia Muutoksia.

Käännös on muokattavissa.

Muokkaa alkuperäistä tekstiä ja käännä se uudelleen, manuaalisia muutoksia käännökseen ei kirjoiteta päälle (jos tätä alkuperäisen tekstin kappaletta ei ole muokattu).

## Xindayan Korkealaatuinen Käännös

Olemme kehittäneet uuden sukupolven käännösteknologiaa, jossa yhdistyvät perinteisten konekäännösmallien ja suurten kielimallien tekniset edut tehdäkseen käännöksistä tarkkoja, sileitä ja tyylikkäitä.

Sokkotestit osoittavat, että käännöslaatumme on huomattavasti parempi verrattuna vastaaviin palveluihin.

Saman laadun saavuttamiseksi Google-kääntäjän ja `ChatGPT` :n vaatima manuaalinen muokkaus on `2.67` kertaa ja `3.15`

## <a rel=id href="#price" id="price"></a> Erittäin kilpailukykyinen hinnoittelu

|                                                                                   | USD/miljoonaa sanaa |
| --------------------------------------------------------------------------------- | ------------- |
| [i18n.site](https://i18n.site)                                                    | 9             |
| [Microsoft](https://azure.microsoft.com/pricing/details/cognitive-services/translator) | 10            |
| [Amazon](https://aws.amazon.com/translate/pricing)                                | 15            |
| [Google](https://cloud.google.com/translate/pricing)                                | 20            |
| [DeepL](https://www.deepl.com/zh/pro#developer)                                  | 25            |

Huomautus: laskutettavien merkkien määrä = [unicode määrä](https://en.wikipedia.org/wiki/Unicode) lähdetiedostossa × käännöksen kielten määrä

## Tue Käännöstä `YAML`

Työkalu kääntää vain sanakirjan arvot `YAML`

Käännöksen `YAML` voit helposti rakentaa kansainvälisiä ratkaisuja eri ohjelmointikielille.

## Tuki Käännös `HOGO`

[HOGO](https://github.com/gohugoio/hugo) staattisen blogin otsikkomäärityksiä, vain `title` , `summary` ja `description` kentät käännetään.

## Älä Käännä Muuttujien Nimiä

`Markdown` Käytetään sähköpostimallina, `YAML` kielitiedoston kokoonpanona, siinä on muuttuvia parametreja (esimerkiksi: lataus `${amount}` on vastaanotettu).

`${varname}` muuttujan nimeä ei pidetä englanninkielisenä käännöksenä.

## Käännösten Optimointi Kiinalle, Japanille Ja Korealle

### Kun Käännetään Englanniksi, Otsikon Ensimmäinen Kirjain Kirjoitetaan Automaattisesti Isolla.

Kiinassa, Japanissa ja Koreassa ei ole isoja tai pieniä kirjaimia, mutta englanninkielisissä otsikoissa ensimmäinen kirjain kirjoitetaan yleensä isolla.

`i18` tunnistaa otsikot kielellä `MarkDown` ja kirjoittaa ensimmäisen kirjaimen automaattisesti isolla kirjaimella käännettäessä.

`Optimized for Reading Experience` `为阅读体验而优化`

### Englanninkielisiä Termejä Kiinaksi, Japaniksi, Koreaksi Ja Kiinaksi Ei Käännetä

Asiakirjat Kiinasta, Japanista ja Koreasta sisältävät usein monia englanninkielisiä termejä.

Kiinan, japanin ja korean kielen konekäännöksestä on tullut ei-englannin kieli, ja termit käännetään usein yhdessä, kuten seuraava kiinalainen lause:

`Falcon 得分超 Llama ？Hugging Face 排名引发争议`

Jos käytät Googlea tai DeepL:ää, ne kumpikin kääntävät väärin englanninkielisiä termejä, joiden pitäisi pysyä alkuperäisinä (esimerkiksi japani ja ranska).

### Google Kääntäjä

Käännetty `ファルコンがラマを上回る？ハグ顔ランキングが論争を巻き起こす` :

<img alt="" src="//p.3ti.site/1720199391.avif">

Käännetty `Le faucon surpasse le lama ? Le classement Hugging Face suscite la polémique` :

`Falcon` on käännetty muodossa `faucon` ja `Llama` on käännetty nimellä `lama` . Erityissubstantiivina niitä ei pitäisi kääntää.

<img alt="" src="//p.3ti.site/1720199451.avif">

### DeepL Käännös

Käännetty `ファルコンがラマに勝利、ハグ顔ランキングが物議を醸す` :

<img alt="" src="//p.3ti.site/1720199550.avif">

Yllä olevan käännös ranskaksi (myös kirjoittelemalla oikeat nimet DeepL lisäämällä parittomat `... ` ):

`Un faucon marque un point sur un lama... Le classement des visages étreints suscite la controverse. `

<img alt="" src="//p.3ti.site/1720199603.avif">

### i18n.site Käännös

`i18` tunnistaa englanninkieliset termit kiinalaisissa, japanilaisissa ja korealaisissa asiakirjoissa ja jättää termit ennalleen.

Esimerkiksi yllä oleva japaninkielinen käännöstulos on:

`Falcon のスコアが Llama よりも高かったですか ? Hugging Face ランキングが論争を引き起こす`

Ranskankielinen käännös on:

`Falcon a obtenu un score supérieur à Llama ? Hugging Face Le classement suscite la controverse`

Vain jos englanninkielisen sanan ja kiinan-, japanin- ja korealaisen tekstin välissä on välilyönti tai englanninkielinen pituus on suurempi kuin 1, sanaa pidetään terminä.

Esimerkiksi: `C罗` käännetään nimellä `Cristiano Ronaldo` .

## Voidaan `i18n.site` Monikielisten Verkkosivujen Rakentamiseen

`i18` integroitu komentorivityökaluun monikielisten verkkosivustojen rakentamiseen [`i18n.site`](/i18n.site) .

Katso lisätietoja dokumentaatiosta [`i18n.site`](/i18n.site)

## Koodi Avoimen Lähdekoodin

Asiakas on täysin avoimen lähdekoodin, ja palvelinpuoli on avointa lähdekoodia [napsauttamalla tätä](/i18n.site/src) 90

Haemme vapaaehtoisia osallistumaan avoimen lähdekoodin kehittämiseen ja käännettyjen tekstien oikolukuihin.

Jos olet kiinnostunut, [→ Napsauta tätä täyttääksesi profiilisi](https://ggl.link/i18n) ja liity sitten [postituslistalle](https://groups.google.com/u/2/g/i18n-site) yhteydenpitoa varten.

## Olla Yhteydessä

<button onclick="mailsub()">Napsauta tätä sähköpostiviestiä tilataksesi tuotepäivitykset</button> ja <button onclick="webpush()">ottaaksesi selaimen push -palvelun käyttöön</button> . Ilmoitamme sinulle, kun tuotepäivityksiä tehdään.

[i18n-site.bsky.social](https://bsky.app/profile/i18n-site.bsky.social) myös seuraamaan / tilejämme [X.COM: @i18nSite](https://x.com/i18nSite)
