# Asenna ja käytä

## Windowsissa asenna ensin Git Bash

Windowsissa, [napsauta tästä ladataksesi ja asentaaksesi `git bash`](https://git-scm.com/download/win) ensin.

Suorita seuraavat toiminnot `git bash` -ympäristössä.

## Asenna

```sh
bash <(curl -sS https://i.i18n.site) i18
```

### Määritä käännöstunnus

[i18n.site/token](//i18n.site/token) -sivustolla napsauttamalla kopioidaksesi tunnuksen

<img src="https://p.3ti.site/1719911689.avif" style="width:400px">

Luo `~/.config/i18n.site.yml` ja liitä kopioiduksi tunnukseksi, sisältö on seuraava:

```
token: YOUR_API_TOKEN
```

Lisäksi sinun täytyy [i18n.site/payBill](//i18n.site/payBill) sitoa maksukortti (ei vaadi latausta, sivusto vähentää maksut automaattisesti käytön mukaan, [katso hinnoittelu kotisivulta](/#price)).

## Käyttö

### Demo-projekti

Katso esimerkkiprojekti `i18`-käännöksen kokoonpanosta [github.com/i18n-site/demo.i18](//github.com/i18n-site/demo.i18).

Kiinalaiset käyttäjät voivat kloonata [atomgit.com/i18n/demo.i18](//atomgit.com/i18n/demo.i18)

Kloonauksen jälkeen siirry hakemistoon ja suorita `i18` käännöksen suorittamiseksi.

### Hakemiston rakenne

Mallivaraston hakemistorakenne on seuraava:

```
┌── .i18n
│  └── conf.yml
└── en
   ├── _IgnoreDemoFile.md
   ├── i18n.yml
   └── README.md
```

`en`-hakemistossa olevat käännösesimerkkiedostot ovat vain esimerkkejä, ja ne voidaan poistaa.

### Suorita käännös

Siirry hakemistoon ja suorita `i18` käännöksen suorittamiseksi.

Ohjelma luo käännöksen lisäksi myös `.i18n/data`-kansion, lisää se versioarkistoon.

Käännettäessä uusi tiedosto, tämä hakemisto tuottaa uuden data-tiedoston. Muista suorittaa `git add .`.

## Asetustiedosto

`.i18n/conf.yml` on `i18`-komentorivityökalun asetustiedosto

Sisältö on seuraava:

```
i18n:
  fromTo:
    en: zh ja ko de fr
    # en:

ignore:
  - _*
```

### Lähdekieli ja käännöskieli

Asetustiedostossa `fromTo`-avaimen alla:

`en` on lähdekieli, ja `zh ja ko de fr` ovat käännöskieliä.

Kielikoodit löytyvät [i18n.site/i18/LANG_CODE](https://i18n.site/i18/LANG_CODE).

Jos haluat kääntää kiinan englanniksi, muuta rivi `zh: en`.

Jos haluat kääntää kaikki tuetut kielet, jätä `:` tyhjäksi, esimerkiksi:

```
i18n:
  fromTo:
    en:
```

Voit määrittää eri `fromTo` eri alihakemistoille / Esittely kirjoitetaan seuraavasti :

```
i18n:
  fromTo:
    en:
  path:
    blog:
      fromTo:
        zh:
    blog/your_file_name.md:
      fromTo:
        ja:
```

Tässä asetustaulukossa `blog`-hakemiston lähdekieli on `zh`, ja `blog/your_file_name.md`-tiedoston lähdekieli on `ja`.

### Ohitettavat tiedostot

Oletusarvoisesti kaikki lähdekielen hakemistossa olevat `.md`- ja `.yml`-tiedostot käännetään.

Jos haluat ohittaa tiettyjä tiedostoja (esim. keskeneräiset luonnokset), käytä `ignore`-kenttää.

`ignore` käyttää `.gitignore`-tiedoston kaltaista [globset](https://docs.rs/globset/latest/globset/#syntax)-syntaksia.

Esimerkiksi, `_*` tarkoittaa, että `_`-alkuiset tiedostot ohitetaan.

## Käännössäännöt

### Älä lisää tai poista käännöksessä rivejä

Käännös on muokattavissa. Jos muokkaat alkuperäistä tekstiä ja suoritat uuden käännön, manuaaliset muutokset eivät korvata käännöstä (jos alkuperäistä kappaletta ei ole muokattu).

Huomaa, että käännöksen ja alkuperäisen tekstin rivit täytyy vastata toisiaan. Älä lisää tai poista rivejä käännöksessä, muuten se aiheuttaa käännösmuokkausvälimuistin sekavuutta.

Jos kohtaat ongelmia, katso [usein kysytyt kysymykset ja ratkaisut](/i18/qa#H1)

### `YAML`-käännökset

Komentorivityökalu löytää kaikki `.yml`-tiedostot lähdekielen tiedostohakemistosta ja kääntää ne.

* Huomaa, että tiedostonimen on oltava `.yml` (ei `.yaml`).

Työkalu kääntää vain sanakirjojen arvot `.yml`-tiedostoissa, ei avaimia.

Esimerkiksi `i18n/en/i18n.yml`

```
apiToken: API Token
defaultToken: Default Token
```

kääntyy `i18n/zh/i18n.yml`

```
apiToken: 接口令牌
defaultToken: 默认令牌
```

`YAML`-käännöksiä voidaan myös muokata manuaalisesti (mutta älä lisää tai poista avaimia tai rivejä).

`YAML`-käännöksen avulla voit helposti rakentaa kansainvälisiä ratkaisuja eri ohjelmointikielille.

## Edistynyt käyttö

### Käännä alihakemistot

Kunhan `.i18n/conf.yml` on luotu (ei tarvitse aloittaa demoprojektimallista joka kerta), `i18` toimii oikein.

Komentorivityökalu löytää kaikki alihakemistot, joissa on `.i18n/conf.yml`-asetukset, ja kääntää ne.

[Monorepo](//monorepo.tools)-arkkitehtuuria käyttävien projektien kielitiedostot voidaan jakaa alihakemistoihin.

![](https://p.3ti.site/1719910016.avif)

### Mukautettu asennushakemisto

Oletusasennuspaikka on `/usr/local/bin`.

Jos `/usr/local/bin` ei ole kirjoitettavissa, asennus tapahtuu `~/.bin`-hakemistoon.

Voit määrittää asennushakemiston ympäristömuuttujalla `TO`, esimerkiksi:

```sh
TO=/bin sudo bash <(curl -sS https://i.i18n.site) i18
```