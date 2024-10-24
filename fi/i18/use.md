# Asenna ja käytä

## Windowsissa asenna ensin Git Bash

Windows-järjestelmässä, napsauta [tätä ladataksesi ja asentaaksesi ensin `git bash`](https://git-scm.com/download/win).

Suorita seuraavat toiminnot `git bash` -ympäristössä.

## Asennus

```sh
bash <(curl -sS https://i.i18n.site) i18
```

### Konfiguroi käännöstunnus

Käy [i18n.site/token](//i18n.site/token) -sivulla ja kopioi tunnus

<img src="https://p.3ti.site/1719911689.avif" style="width:400px">

Luo `~/.config/i18n.site.yml` ja liitä kopioitu sisältö siihen, kuten seuraava:

```
token: YOUR_API_TOKEN
```

Lisäksi, sinun täytyy sitoa maksukortti [i18n.site/payBill](//i18n.site/payBill) -sivulla (ei vaadi latausta, sivusto vähentää käytön mukaiset maksut automaattisesti, [katso hinnoittelu etusivulta](/#price)).

## Käyttö

### Näyttöprojekti

Katso näyttöprojekti [github.com/i18n-site/demo.i18](//github.com/i18n-site/demo.i18) oppiaksesi `i18`-käännöksen konfiguroinnin.

Kiinalaiset käyttäjät voivat kloonata [atomgit.com/i18n/demo.i18](//atomgit.com/i18n/demo.i18)

Kloonauksen jälkeen siirry hakemistoon ja suorita `i18` käännöksen suorittamiseksi.

### Hakemistorakenne

Mallivarastohakemiston rakenne on seuraava:

```
┌── .i18n
│  └── conf.yml
└── en
   ├── _IgnoreDemoFile.md
   ├── i18n.yml
   └── README.md
```

`en`-kansiossa olevat käännösohjetiedostot ovat vain esimerkki ja ne voidaan poistaa.

### Suorita käännös

Siirry hakemistoon ja suorita `i18` käännöksen suorittamiseksi.

Ohjelma luo myös `.i18n/data` -kansion, joten lisää se versiohallintaan.

Uuden tiedoston kääntämisen jälkeen tämä hakemisto tuottaa uuden data-tiedoston. Muista lisätä `git add .`.

## Konfigurations tiedosto

`.i18n/conf.yml` on `i18`-komentorivityökalun konfiguraatiotiedosto

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

Konfiguraatiotiedostossa `fromTo`-avaimen alla:

`en` on käännöksen lähdekieli, `zh ja ko de fr` on käännöksen kohdekieli.

Kielikoodit löytyvät [i18n.site/i18/LANG_CODE](https://i18n.site/i18/LANG_CODE).

Jos haluat kääntää kiinan kielen englanniksi, muuta rivi `zh: en`.

Jos haluat kääntää kaikki tuetut kielet, jätä `:` tyhjäksi, esimerkiksi:

```
i18n:
  fromTo:
    en:
```

Eri alihakemistoille voidaan määrittää erilaiset `fromTo`-asetukset. Esimerkkinä tästä on seuraava kirjoitusmuoto: /

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

Tässä konfiguraatiotaulukossa `blog`-hakemiston käännöksen lähdekieli on `zh`, ja tiedoston `blog/your_file_name.md` käännöksen lähdekieli on `ja`.

### Tiedostojen ohittaminen

Oletusarvoisesti kaikki `.md`- ja `.yml`-tiedostot lähdekielen kansiossa käännetään.

Jos haluat ohittaa tietyt tiedostot (esim. keskeneräiset luonnokset), käytä `ignore`-kenttää konfiguraatiossa.

`ignore` käyttää [globset](https://docs.rs/globset/latest/globset/#syntax)-syntaksia, joka on samanlainen kuin `.gitignore`-tiedoston syntaksi.

Esimerkiksi `_* ` yllä olevassa asetustiedostossa tarkoittaa, että `_` :llä alkavia tiedostoja ei käännetä.

## Käännössäännöt

### Älä lisää tai poista rivejä käännöksessä

Käännös on muokattavissa. Jos muokkaat alkuperäistä tekstiä ja suoritat uuden käännöksen, manuaaliset muutokset eivät korvata käännöstä (jos alkuperäistä tekstiä ei ole muokattu).

> [!WARN]
> Käännöksen ja alkuperäisen tekstin rivien tulee vastata yhtä riviä. Eli älä lisää tai poista rivejä kääntäessäsi käännöstä. Muuten se aiheuttaa hämmennystä käännösmuokkausvälimuistissa.

Jos ilmenee ongelmia, katso [usein kysytyt kysymykset ja ratkaisut](/i18/qa#H1)

### `YAML` Käännöstä

Komentorivityökalu löytää kaikki `.yml`-tiedostot lähdekielen kansiossa ja kääntää ne.

* Huomaa, että tiedostonimen on oltava `.yml` (ei `.yaml`).

Työkalu kääntää vain sanakirjan arvot `.yml` :lla, ei sanakirjan avaimia.

Esimerkiksi `i18n/en/i18n.yml`

```
apiToken: API Token
defaultToken: Default Token
```

käännetään `i18n/zh/i18n.yml`

```
apiToken: 接口令牌
defaultToken: 默认令牌
```

`YAML` käännöstä voidaan myös muokata manuaalisesti (mutta älä lisää tai poista käännökseen avaimia tai rivejä).

`YAML` käännöksen perusteella voit helposti rakentaa kansainvälisiä ratkaisuja eri ohjelmointikielille.

## Edistyneet toiminnot

### Käännä alihakemisto

Niin kauan kuin `.i18n/conf.yml` on luotu (ei tarvitse aloittaa demo-projektimallista joka kerta), `i18` toimii oikein.

Komentorivityökalu löytää kaikki alihakemistot, joissa on `.i18n/conf.yml`-konfiguraatio, ja kääntää ne.

[Monorepo](//monorepo.tools)-arkkitehtuuria käyttävät projektit voivat jakaa kielitiedostot alihakemistoihin.

![](https://p.3ti.site/1719910016.avif)

### Mukautettu asennushakemisto

Oletuksena asennus tapahtuu hakemistoon `/usr/local/bin`.

Jos `/usr/local/bin`-hakemistoon ei ole kirjoitusoikeutta, asennus tapahtuu hakemistoon `~/.bin`.

Ympäristömuuttujan `TO` avulla voit määrittää asennushakemiston, esimerkiksi:

```sh
TO=/bin sudo bash <(curl -sS https://i.i18n.site) i18
```