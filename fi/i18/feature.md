# Tuotteen Ominaisuudet

`i18` on komentorivityökalu kääntämiseen Markdown & Yaml

## Pystyy Ylläpitämään Markdownin Muotoa Täydellisesti

Tukee Markdown-taulukoiden kääntämistä muotoa vahingoittamatta.

Tukee käännöstä HTML Markdown , sisältö `<pre>` ja `<code>` upotettu HTML `MarkDown`

## Pystyy Tunnistamaan Matemaattisia Kaavoja Ja Ohittamaan Käännöksen

Matemaattiset kaavat tunnistetaan ja käännös ohitetaan.

Lisätietoja matemaattisten kaavojen kirjoittamisesta on kohdassa [" Github Tietoja matemaattisten lausekkeiden kirjoittamisesta"](https://docs.github.com/get-started/writing-on-github/working-with-advanced-formatting/writing-mathematical-expressions#about-writing-mathematical-expressions) .

## Mahdollisuus Kääntää Kommentteja Koodinpätkinä

Sisäistä koodia ja koodinpätkiä ei käännetä, mutta koodin kommentit voidaan kääntää.

Käännöskommenteissa on ilmoitettava kieli ` ``` ` ` ```rust ` :

Tällä hetkellä se tukee huomautusten kääntämistä kielillä `toml` , `yaml` , `json5` , `go` , `rust` , `c` , `cpp` , `java` , `js` , `coffee` , `python` , `bash` , `php` [ja muilla kielillä](https://github.com/i18n-site/rust/blob/main/getc/src/style.rs#L14) .

Jos haluat kääntää kaikki koodin muut kuin englanninkieliset merkit, merkitse koodisegmentti ` ```i18n ` :lla.

Jos tarvitsemaasi ohjelmointikieltä ei ole saatavilla, ota [meihin yhteyttä](https://groups.google.com/g/i18n-site) .

## Komentoriviystävällinen

Käännösasiakirjojen hallintaan on saatavilla monia [raskaita työkaluja](https://www.capterra.com/translation-management-software) .

Ohjelmoijille, jotka tuntevat `git` , `vim` ja `vscode` , näiden työkalujen käyttäminen asiakirjojen muokkaamiseen ja versioiden hallintaan lisää epäilemättä oppimiskustannuksia.

`KISS` ( `Keep It Simple, Stupid` ) Periaatteessa uskovien keskuudessa yritystason ratkaisut ovat synonyymi hankalia, tehottomia ja vaikeita käyttää.

Käännös tulee tehdä syöttämällä komennot ja viimeistelemällä se yhdellä napsautuksella. Ei pitäisi olla monimutkaisia ympäristöriippuvuuksia.

Älä lisää entiteettejä, ellei se ole välttämätöntä.

## Ei Muutoksia, Ei Käännöstä

On myös joitain komentorivin käännöstyökaluja, kuten [translate-shell](https://github.com/soimort/translate-shell)

Ne eivät kuitenkaan tue tiedostojen muutosten tunnistamista ja vain kääntävät muokatut tiedostot kustannusten vähentämiseksi ja tehokkuuden lisäämiseksi.

## Käännöstä Voidaan Muokata, Eikä Konekäännös Korvaa Olemassa Olevia Muutoksia.

Käännös on muokattavissa.

Muokkaa alkuperäistä tekstiä ja käännä se uudelleen, manuaalisia muutoksia käännökseen ei kirjoiteta päälle (jos tätä alkuperäisen tekstin kappaletta ei ole muokattu).

## Paras Laatu Konekäännös

Olemme kehittäneet uuden sukupolven käännösteknologiaa, jossa yhdistyvät perinteisten konekäännösmallien ja suurten kielimallien tekniset edut tehdäkseen käännöksistä tarkkoja, sileitä ja tyylikkäitä.

Sokkotestit osoittavat, että käännöslaatumme on huomattavasti parempi verrattuna vastaaviin palveluihin.

Saman laadun saavuttamiseksi Google-kääntäjän ja `ChatGPT` vaatima manuaalisen muokkauksen määrä on `2.67` -kertainen ja `3.15` -kertainen meidän omaamme verrattuna.

## <a rel=id href="#price" id="price"></a> Erittäin kilpailukykyinen hinnoittelu

|                                                                                   | USD/miljoonaa sanaa |
| --------------------------------------------------------------------------------- | ------------- |
| [i18n.site](https://i18n.site)                                                    | 9             |
| [Microsoft](https://azure.microsoft.com/pricing/details/cognitive-services/translator) | 10            |
| [Amazon](https://aws.amazon.com/translate/pricing)                                | 15            |
| [Google](https://cloud.google.com/translate/pricing)                                | 20            |
| [DeepL](https://www.deepl.com/zh/pro#developer)                                  | 25            |

[➤ Napsauta tätä valtuuttaaksesi ja seurataksesi i18n.site github -kirjastoa](https://github.com/login/oauth/authorize?client_id=Ov23liuGAmK0plc9FgB3&amp;scope=user:email,user:follow,public_repo) ja **saat bonusta $50** !

Huomautus: laskutettavien merkkien määrä = [unicode määrä](https://en.wikipedia.org/wiki/Unicode) lähdetiedostossa × käännöksen kielten määrä

## Tuki Käännös `YAML`

Työkalu kääntää vain sanakirjan arvot `YAML` :lla, ei sanakirjan avaimia.

`YAML` käännöksen perusteella voit helposti rakentaa kansainvälisiä ratkaisuja eri ohjelmointikielille.

## Tuki Käännös `HOGO` -Otsikon Kokoonpanoa

Tukee staattisen blogin [HOGO](https://github.com/gohugoio/hugo) ja kääntää vain kentät `title` , `summary` , `brief` ja `description` .

## Älä Käännä Muuttujien Nimiä

`Markdown` käytetään sähköpostimallina, `YAML` käytetään kielitiedoston kokoonpanona ja siinä on muuttuvia parametreja (esimerkiksi: lataus `${amount}` on vastaanotettu).

Muuttujien nimiä, kuten `${varname}` ei pidetä englanninkielisinä käännöksinä.

## Käännösten Optimointi Kiinalle, Japanille Ja Korealle

### Kun Käännetään Englanniksi, Otsikon Ensimmäinen Kirjain Kirjoitetaan Automaattisesti Isolla.

Kiinassa, Japanissa ja Koreassa ei ole isoja ja pieniä kirjaimia, mutta englanninkielisten otsikoiden käytäntö on kirjoittaa ensimmäinen kirjain isolla.

`i18` tunnistaa otsikon luvulla `MarkDown` ja kirjoittaa ensimmäisen kirjaimen automaattisesti isolla käännöksellä isot ja pienet kirjaimet.

Esimerkiksi `为阅读体验而优化` käännetään `Optimized for Reading Experience` :ksi.

### Englanninkielisiä Termejä Kiinaksi, Japaniksi, Koreaksi Ja Kiinaksi Ei Käännetä

Asiakirjat Kiinasta, Japanista ja Koreasta sisältävät usein monia englanninkielisiä termejä.

Kiinan, japanin ja korean kielen konekäännöksestä on tullut ei-englannin kieli, ja termit käännetään usein yhdessä, kuten seuraava kiinalainen lause:

`Falcon 得分超 Llama ？Hugging Face 排名引发争议`

Jos käytät Googlea tai DeepL:ää, ne kumpikin kääntävät väärin englanninkielisiä termejä, joiden pitäisi pysyä alkuperäisinä (esimerkiksi japani ja ranska).

### Google-Kääntäjä

`ファルコンがラマを上回る？ハグ顔ランキングが論争を巻き起こす` japaniksi :

![](//p.3ti.site/1720199391.avif)

`Le faucon surpasse le lama ? Le classement Hugging Face suscite la polémique` ranskaksi :

`Falcon` on käännetty `faucon` :ksi ja `Llama` käännetään `lama` :ksi. Erityissubstantiivina niitä ei pidä kääntää.

![](//p.3ti.site/1720199451.avif)

### DeepL Käännös

`ファルコンがラマに勝利、ハグ顔ランキングが物議を醸す` japaniksi :

![](//p.3ti.site/1720199550.avif)

Yllä DeepL käännös ranskaksi (myös kirjoittamalla uudelleen oikeat nimet ja lisäämällä pariton `... ` ):

`Un faucon marque un point sur un lama... Le classement des visages étreints suscite la controverse. `

![](//p.3ti.site/1720199603.avif)

### i18n.site Käännös

`i18` :n käännös tunnistaa englanninkieliset termit kiinalaisissa, japanilaisissa ja korealaisissa asiakirjoissa ja jättää termit ennalleen.

Esimerkiksi yllä oleva japaninkielinen käännöstulos on:

`Falcon のスコアが Llama よりも高かったですか ? Hugging Face ランキングが論争を引き起こす`

Ranskankielinen käännös on:

`Falcon a obtenu un score supérieur à Llama ? Hugging Face Le classement suscite la controverse`

Vain jos englanninkielisen sanan ja kiinan-, japanin- ja korealaisen tekstin välissä on välilyönti tai englanninkielinen pituus on suurempi kuin 1, sanaa pidetään terminä.

Esimerkiksi: `C罗` käännetään `Cristiano Ronaldo` :ksi.

## Voidaan Yhdistää Yli `i18n.site` Kieleen Verkkosivuston Rakentamiseksi

`i18` on integroitu monikieliseen verkkosivustojen rakennuskomentorivityökaluun [`i18n.site`](/i18n.site) .

Katso lisätietoja [`i18n.site`](/i18n.site) :n dokumentaatiosta.

## Koodi Avoin Lähdekoodi

Asiakas on täysin avoimen lähdekoodin, ja 90 on avointa lähdekoodia [napsauttamalla tätä](/i18n.site/c/src) .

Haemme vapaaehtoisia osallistumaan avoimen lähdekoodin kehittämiseen ja käännettyjen tekstien oikolukuihin.

Jos olet kiinnostunut, [→ Napsauta tätä täyttääksesi profiilisi](https://ggl.link/i18n) ja liity sitten [postituslistalle](https://groups.google.com/u/2/g/i18n-site) yhteydenpitoa varten.

## Pitää Yhteyttä

<button onclick="mailsub()">Napsauta tätä sähköpostiviestiä tilataksesi tuotepäivitykset</button> ja <button onclick="webpush()">ottaaksesi selaimen push -palvelun käyttöön</button> . Ilmoitamme sinulle, kun tuotepäivityksiä tehdään.

[i18n-site.bsky.social](https://bsky.app/profile/i18n-site.bsky.social) myös seuraamaan / tilejämme [X.COM: @i18nSite](https://x.com/i18nSite)