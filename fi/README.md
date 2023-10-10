<h1 style="justify-content:space-between">3Ti.Site · Think No Borders<img src="//i-01.eu.org/i18n/logo.svg" style="margin-top:-1px;width:42px"></h1>

3Ti.Site, monikielinen staattinen sivustogeneraattori, voi kääntää Markdownin automaattisesti [yli sadalle eri kielelle](https://github.com/i18n-site/node/blob/main/lang/src/index.js) .

<img src="//i-01.eu.org/i18n/lang.webp" alt="" />

Jotkut saattavat haluta kysyä, onko nyt tarpeetonta kansainvälistää verkkosivustoa, kun selaimissa on sisäänrakennetut käännöstoiminnot?

Haluan sanoa, että **vain kansainvälistämällä koko sivusto voimme tukea monikielistä sivuston sisäistä kokotekstihakua ja hakukoneoptimointia** .

## Johdanto

Raamattu · Genesis :

> Muinaisina aikoina, kun kielet olivat yhtä, ihmiskunta rakensi tornin, joka ulottui taivaaseen, portin Jumalan valtakuntaan, joka julisti ihmiskunnan voimaa.
>
> Jumala julisti: "Ihmiset yhdistyvät yhdeksi heimoksi, joilla on yhteinen kieli, ja tämä torni on vain prologi. Nyt he saavuttavat halunsa, eikä enää ole pelkoa."
>
> Siten Jumala laskeutui, hajoten ihmisiä eri kulmiin, käyttivät eri kieliä.
>
> Siitä lähtien inhimillinen kommunikaatio muuttui haastavaksi, riidat loputtomat, eikä enää ollut tornia, joka olisi koskettanut taivasta.

Tieteiskirjallisuusromaani &quot;Three-Body&quot; (ääntäminen kiinaksi: `3Ti` ) fiktioi ulkomaalaisen sivilisaation, joka kommunikoi sähkömagneettisten aaltojen kautta, jolla ei ole kielimuuria ja joka on teknisesti vauras.

Toivon voivani luoda työkalun, jonka avulla maan ihmiset voivat olla kuin kolmiruumiisia ihmisiä, kommunikoida ilman kielen sitomista ja yhdistää koko ihmiskunnan uudelleen.

## Opastus

## Toiminnon Esittely

### Säilytä Markdown-Muoto

### Muokkaa Käännöstä

Kun olet muokannut käännöstä, sinun on suoritettava `./i18n.sh` uudelleen päivittääksesi välimuisti.

### Käännösmuistiinpanot

Käännöskommenteissa on ilmoitettava kieli sanan \``` jälkeen, kuten ` ```rust` .

Tällä hetkellä tukee rust-, c-, cpp-, java-, js-, coffee-, python- ja bash-kommenttien kääntämistä.

Muokkaa [tran_md/src/comment.coffee](https://github.com/i18n-site/node/blob/main/tran_md/src/comment.coffee) lisätäksesi käännöstuen kommenteille useammilla kielillä.

### Määritä Välityspalvelin

Kun määrität seuraavat ympäristömuuttujat, Google-kääntäjän API-kutsut voivat kulkea välityspalvelimen kautta.

```bash
export https_proxy=http://127.0.0.1:7890
```

### Muuttujan Upottaminen

```
test: 测试变量<br 0>嵌入
```

### Tyhjennä Välimuisti

```bash
rm -rf .i18n/.cache
```
