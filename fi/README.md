# I18N.SITE · Asiakirjat Ilman Rajoja<img Src="//ok0.pw/5l" Style="float:right;width:42px;margin-Top:6px">

I18N.SITE, staattinen sivustogeneraattori, joka tukee automaattista kääntämistä [133 eri kielelle](https://github.com/i18n-site/node/blob/main/lang/src/index.js) .

<img src="https://i-01.eu.org/2023/09/O0Tee_m.webp" alt="" />

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
```bash
```bash
```bash
```bash
```bash
```bash
```bash
```bash
```bash
```bash
```bash
```bash
```bash
```bash
```bash
```bash
```bash
```bash
```bash
```bash
```bash
```bash
export https_proxy=http://127.0.0.1:7890
```

### Muuttujan Upottaminen

```
test: 测试变量<br 0>嵌入
```

### Tyhjennä Välimuisti

```bash
```bash
```bash
```bash
```bash
```bash
```bash
```bash
```bash
```bash
```bash
```bash
```bash
```bash
```bash
```bash
```bash
```bash
```bash
```bash
```bash
```bash
```bash
rm -rf .i18n/.cache
```
