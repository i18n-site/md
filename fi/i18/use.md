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

Luo `~/.config/i18n.site.yml` ja liitä kopioitu sisältö sinne, kuten seuraava:

```
token: YOUR_API_TOKEN
```

Lisäksi, sinun täytyy sitoa maksukortti [i18n.site/payBill](//i18n.site/payBill) -sivulla (ei vaadi latausta, verkkosivusto vähentää käytön mukaiset maksut automaattisesti, [katso hinnoittelu kotisivulta](/#price)).

## Käyttö

### Demo-projekti

Katso demo-projekti [github.com/i18n-site/demo.i18](//github.com/i18n-site/demo.i18) oppiaksesi `i18`-käännöksen konfiguroinnista.

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

`en`-kansiossa olevat käännetyt esittelytiedostot ovat vain esimerkki ja ne voidaan poistaa.

### Suorita käännös

Siirry hakemistoon ja suorita `i18` käännöksen suorittamiseksi.

Ohjelma luo myös `.i18n/data`-kansion, joten lisää se versiohallintaan.

Kun uusi tiedosto on käännetty, kansioon luodaan uusi datatiedosto, muista lisätä se `git add .`.

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

`en` on lähdekieli, `zh ja ko de fr` on käännöksen kohdekieli.

Kielikoodit löydät [i18n.site/i18/LANG_CODE](https://i18n.site/i18/LANG_CODE).

Jos haluat kääntää kiinan kielen englanniksi, muuta rivi `zh: en`.

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

Tässä konfiguraatiotaulukossa `blog`-kansion lähdekieli on `zh`, ja `blog/your_file_name.md`-tiedoston lähdekieli on `ja`.

### Tiedostojen ohittaminen

Oletusarvoisesti kaikki `.md`- ja `.yml`-päätteiset tiedostot lähdekielen kansiossa käännetään.

Jos haluat ohittaa tietyt tiedostot (esim. keskeneräiset luonnokset), käytä `ignore`-kenttää.

`ignore` käyttää [globset](https://docs.rs/globset/latest/globset/#syntax)-syntaksia, joka on samanlainen kuin `.gitignore`-tiedoston syntaksi.

Esimerkiksi, `_*` tarkoittaa, että `_`-alkuisia tiedostoja ei käännetä.

## Käännös säännöt

### Älä lisää tai poista rivejä käännöksessä

Käännös on muokattavissa. Muokkaa alkuperäistä tekstiä ja käännä se uudelleen, manuaalisia muutoksia käännökseen ei kirjoiteta päälle (jos tätä alkuperäisen tekstin kappaletta ei ole muokattu).

Huomaa, että käännöksen ja alkuperäisen tekstin rivit täytyy vastata toisiaan. Älä lisää tai poista rivejä käännöksessä, muuten se aiheuttaa sekaannusta käännösmuokkausvälimuistissa.

Jos ilmenee ongelmia, katso [ratkaisuja usein kysytyistä kysymyksistä](/i18/qa#H1)

### `YAML` Käännöstä

Komentorivityökalu etsii kaikki `.yml`-päätteiset tiedostot lähdekielen kansiossa ja kääntää ne.

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

### Käännä alihakemistot

Niin kauan kuin `.i18n/conf.yml` on luotu (ei tarvitse aloittaa demo-projektimallista joka kerta), `i18` toimii normaalisti.

Komentorivityökalu etsii kaikki alihakemistot, joissa on `.i18n/conf.yml`-konfiguraatio, ja kääntää ne.

[Monorepo](//monorepo.tools)-arkkitehtuuria käyttävät projektit voivat jakaa kielitiedostot alihakemistoihin.

![](https://p.3ti.site/1719910016.avif)

### Mukautettu asennuskansio

Oletuksena asennus tapahtuu kansioon `/usr/local/bin`.

Jos `/usr/local/bin`-kansioon ei ole kirjoitusoikeuksia, asennus tapahtuu kansioon `~/.bin`.

Ympäristömuuttujan `TO` avulla voit määrittää asennuskansion, esimerkiksi:

```sh
TO=/bin sudo bash <(curl -sS https://i.i18n.site) i18
```