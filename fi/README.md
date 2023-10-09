# I18N.SITE · Kieli Ilman Rajoja<img Src="//i-01.eu.org/i18n/logo.svg" Style="float:right;width:42px;margin-Top:6px">

I18N.SITE, monikielinen staattinen sivustogeneraattori, voi kääntää Markdownin automaattisesti [yli sadalle eri kielelle](https://github.com/i18n-site/node/blob/main/lang/src/index.js) .

<img src="//i-01.eu.org/i18n/lang.webp" alt="" />

Jotkut saattavat haluta kysyä, onko nyt tarpeetonta kansainvälistää verkkosivustoa, kun selaimissa on sisäänrakennetut käännöstoiminnot?

Haluan sanoa, että **vain kansainvälistämällä koko sivusto voimme tukea monikielistä sivuston sisäistä kokotekstihakua ja hakukoneoptimointia** .

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
