<h1 style="justify-content:space-between">3Ti.Site · Think No Borders<img src="//i-01.eu.org/i18n/logo.svg" style="margin-top:-1px;width:42px"></h1>

3Ti.Site, monikielinen staattinen sivustogeneraattori, voi kääntää Markdownin automaattisesti [yli sadalle eri kielelle](https://github.com/i18n-site/node/blob/main/lang/src/index.js) .

<img src="//i-01.eu.org/i18n/lang.webp" alt="" />

Jotkut saattavat haluta kysyä, onko nyt tarpeetonta kansainvälistää verkkosivustoa, kun selaimissa on sisäänrakennetut käännöstoiminnot?

Haluan sanoa, että **vain kansainvälistämällä koko sivusto voimme tukea monikielistä sivuston sisäistä kokotekstihakua ja hakukoneoptimointia** .

## Järjestys

"Raamattu · Genesis":

> Muinaisina aikoina, kun kieli oli yhtä, ihmiskunta syntyi ylpeänä. He pyrkivät rakentamaan kohoavan rakennuksen, tornin, joka kosketti taivasta.
>
> Jumalallinen, tyytymätön heidän ylimielisyytensä, sai ihmiset kuitenkin hajaantumaan ympäri maata tehden heidän kielensä toisilleen ymmärtämättömäksi.
>
> Siitä lähtien ihmiskunnalla on ollut vaikeuksia kommunikoida, konflikteja syntyi loputtomasti, eikä maailma nähnyt enää tornia, joka nousi taivaalle.

Tieteiskirjallisuusromaani &quot;Three-Body&quot; (ääntäminen kiinaksi: `3Ti` ) fiktioi ulkomaalaisen sivilisaation, joka kommunikoi sähkömagneettisten aaltojen kautta, jolla ei ole kielimuuria ja joka on teknisesti vauras.

Toivon, että tämän työkalun avulla maan ihmiset ovat kuin kolmiruumiisia ihmisiä, kieli ei rajoita viestintää ja koko ihmiskunta yhdistyy jälleen.

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
