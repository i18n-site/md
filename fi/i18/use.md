# Asenna Ja Käytä

## windows Asentaa Ensin git Bashin

windows , [napsauta tästä ladataksesi ja asentaaksesi ensin `git bash`](https://git-scm.com/download/win)

Suorita seuraavat toiminnot `git bash`

## Asentaa

```sh
bash <(curl -sS https://i.i18n.site) i18
```

### Määritä Käännöstunnus

[i18n.site/token](//i18n.site/token) napsauttamalla kopioidaksesi tunnus

<img src="https://p.3ti.site/1719911689.avif" style="max-width:400px">

Luo `~/.config/i18n.site.yml` liitä kopioitu sisältö siihen, sisältö on seuraava:

```
token: YOUR_API_TOKEN
```

Lisäksi sinun [i18n.site/payBill](//i18n.site/payBill) sitoa luottokortti maksua varten (ei vaadi latausta, sivusto vähentää maksut automaattisesti käytön mukaan, [katso hinnoittelu kotisivulta](/#price) ).

## Käyttää

### Demo-Projekti

Katso esittelyprojekti oppiaksesi käännöksen `i18` [github.com/i18n-site/demo.i18](//github.com/i18n-site/demo.i18)

Kiinalaiset käyttäjät voivat kloonata [atomgit.com/i18n/demo.i18](//atomgit.com/i18n/demo.i18)

Kloonauksen jälkeen siirry hakemistoon ja suorita käännös loppuun `i18`

### Hakemistorakenne

Mallin varastohakemistorakenne on seuraava

```
┌── .i18n
│  └── conf.yml
└── en
   ├── _IgnoreDemoFile.md
   ├── i18n.yml
   └── README.md
```

`en` sisältää käännetyt esittelytiedostot, jotka ovat vain esimerkki ja jotka voidaan poistaa.

### Suorita Käännös

Anna hakemisto ja suorita kääntäminen `i18`

### Lisää Tiedostoja Arkistoon

Kääntämisen lisäksi ohjelma luo myös seuraavat tiedostot, lisää ne arkistoon.

```
.i18n/hash
.i18n/cache/.gitignore
```

Niistä sisältö : seuraava `.i18n/cache/.gitignore`

```
**/*
!**/.gitignore
```

Tämä tarkoittaa, että ohita kaikki `.i18n/cache/` tiedostot (paitsi `.i18n/cache/.gitignore` ).

Jos versionhallintaohjelmistosi ei ole `git` jätä se huomioimatta tämän kokoonpanon mukaisesti.

## Asetustiedosto

`.i18n/conf.yml` on `i18` käännöstyökalun asetustiedosto

Sisältö on seuraava:

```
i18n:
  fromTo:
    en: zh ja ko de fr
    # en:

ignore:
  - _*
```

### Alkuperäinen Kieli &

Määritystiedostossa `fromTo` :n alaiset:

`en` on lähdekieli, `zh ja ko de fr` on käännöksen kohdekieli.

Kielikoodi katso [i18n.site/i18/LANG_CODE](https://i18n.site/i18/LANG_CODE)

Jos esimerkiksi haluat kääntää kiinan englanniksi, kirjoita tämä rivi uudelleen `zh: en`

Jos haluat kääntää kaikille tuetuille kielille, jätä tyhjäksi `:` esimerkiksi

```
i18n:
  fromTo:
    en:
```

### Ohittaa Tiedosto

Oletusarvoisesti kaikki lähdekielen hakemistossa olevat tiedostot, `.yml` alkavat `.md`

Jos haluat ohittaa tietyt tiedostot etkä kääntää niitä (kuten keskeneräisiä luonnoksia), voit käyttää `ignore`

Käyttää syntaksia [globset](https://docs.rs/globset/latest/globset/#syntax) joka on samanlainen kuin `.gitignore` `ignore`

Esimerkiksi yllä olevassa asetustiedostossa `_* ` tarkoittaa, että `_` -alkuisia tiedostoja ei käännetä.

## Käännössäännöt

### Käännöseditorit Eivät Saa Lisätä Tai Poistaa Rivejä

Käännös on muokattavissa. Muokkaa alkuperäistä tekstiä ja käännä se uudelleen, manuaalisia muutoksia käännökseen ei kirjoiteta päälle (jos tätä alkuperäisen tekstin kappaletta ei ole muokattu).

Huomaa kuitenkin, että käännöksen ja alkuperäisen tekstin rivien on vastattava yhtä. Eli älä lisää tai poista rivejä kääntäessäsi käännöstä. Muuten se aiheuttaa hämmennystä käännösmuokkausvälimuistissa.

Jos jokin menee pieleen, katso [ratkaisuja usein kysytyistä kysymyksistä.](/i18/qa#H1)

### `YAML` Kääntää

Komentorivityökalu löytää kaikki `.yml` -päätteiset tiedostot lähdekielen tiedostohakemistosta ja kääntää ne.

* Huomaa, että tiedostonimen pääte `.yml` (ei `.yaml` ).

Työkalu kääntää vain sanakirjan arvot `.yml`

esimerkiksi `i18n/en/i18n.yml`

```
apiToken: API Token
defaultToken: Default Token
```

käännetään nimellä `i18n/zh/i18n.yml`

```
apiToken: 接口令牌
defaultToken: 默认令牌
```

Käännöstä `YAML` voidaan muokata myös manuaalisesti (mutta älä lisää tai poista avaimia tai rivejä käännöksessä).

Käännöksen `YAML` voit helposti rakentaa kansainvälisiä ratkaisuja eri ohjelmointikielille.

## Edistynyt Käyttö

### Käännös-Alihakemisto

Niin kauan kuin `.i18n/conf.yml` (ei tarvitse aloittaa demoprojektimallista joka kerta), `i18` toimii hyvin.

Komentorivityökalu löytää `.i18n/conf.yml` -määrityksen kaikista alihakemistoista ja kääntää sen.

Projektit, jotka käyttävät [monorepo](//monorepo.tools) -arkkitehtuuria, voivat jakaa kielitiedostot alihakemistoihin.

<img alt="" src="https://p.3ti.site/1719910016.avif">

### Mukautettu Asennushakemisto

Se asennetaan oletuksena `/usr/local/bin`

Jos `/usr/local/bin` llä ei ole kirjoitusoikeutta, se asennetaan osoitteeseen `~/.bin` .

Aseta `TO` Voit määrittää asennushakemiston, esimerkiksi :

```sh
TO=/bin sudo bash <(curl -sS https://i.i18n.site) i18
```
