# Asenna Ja Käytä

## windows Asentaa Ensin git Bashin

windows , napsauta [tätä ladataksesi ja asentaaksesi ensin `git bash`](https://git-scm.com/download/win) .

Suorita seuraavat toiminnot kohdassa `git bash` .

## Asentaa

```sh
bash <(curl -sS https://i.i18n.site) i18
```

### Määritä Käännöstunnus

[i18n.site/token](//i18n.site/token) napsauttamalla kopioidaksesi tunnus

<img src="https://p.3ti.site/1719911689.avif" style="width:400px">

Luo `~/.config/i18n.site.yml` , liitä kopioitu sisältö siihen, sisältö on seuraava:

```
token: YOUR_API_TOKEN
```

Lisäksi sinun tulee sitoa [i18n.site/payBill](//i18n.site/payBill) sisään (ei lisäveloitusta, sivusto vähentää maksut automaattisesti käytön mukaan, [katso hinnoittelu kotisivulta](/#price) ).

## Käyttää

### Demo Projekti

Katso esittelyprojekti [github.com/i18n-site/demo.i18](//github.com/i18n-site/demo.i18) `i18` käännöksen kokoonpanosta.

Kiinalaiset käyttäjät voivat kloonata [atomgit.com/i18n/demo.i18](//atomgit.com/i18n/demo.i18)

Kloonauksen jälkeen siirry hakemistoon ja suorita `i18` suorittaaksesi käännöksen loppuun.

### Hakemiston Rakenne

Mallin varastohakemistorakenne on seuraava

```
┌── .i18n
│  └── conf.yml
└── en
   ├── _IgnoreDemoFile.md
   ├── i18n.yml
   └── README.md
```

Käännetyt esittelytiedostot hakemistossa `en` ovat vain esimerkki, ja ne voidaan poistaa.

### Suorita Käännös

Anna hakemisto ja suorita `i18` kääntääksesi.

Käännöksen lisäksi ohjelma luo myös `.i18n/data` -kansion, lisää se arkistoon.

Uuden tiedoston kääntämisen jälkeen tähän hakemistoon luodaan uusi datatiedosto. Muista liittää `git add . ` .

## Asetustiedosto

`.i18n/conf.yml` on `i18` -komentorivin käännöstyökalun asetustiedosto

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

Asetustiedostossa arvon `fromTo` alainen:

`en` on lähdekieli, `zh ja ko de fr` on käännöksen kohdekieli.

Kielikoodi katso [i18n.site/i18/LANG_CODE](https://i18n.site/i18/LANG_CODE)

Jos esimerkiksi haluat kääntää kiinan englanniksi, kirjoita tämä rivi uudelleen `zh: en` .

Jos haluat kääntää kaikille tuetuille kielille, jätä tyhjäksi `:` jälkeen. esimerkiksi

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

Tässä määritystaulukossa luettelon `blog` käännöksen lähdekieli on `zh` ja luettelon `blog/your_file_name.md` käännöksen lähdekieli on `ja` .

### Monikieliset Kuvat/Linkit

Kun kuvien URL-osoitteet ja linkit kohdissa `replace:` ja `MarkDown` (ja upotetun `HTML` :n attribuutit `src` ja `href` ) on määritetty arvoon `.i18n/conf.yml` tällä etuliitteellä, URL-osoitteen lähdekielikoodi korvataan käännöksen kielikoodilla ( [kieli koodiluettelo](/i18/LANG_CODE) ).

Asetuksesi on esimerkiksi seuraava:

```yml
i18n:
  fromTo:
    fr: ko de en zh zh-TW uk ru ja
  replace:
    https://fcdoc.github.io/img/ : ko de uk>ru zh-TW>zh >en
```

`replace: ` on sanakirja, avain on korvattava URL-etuliite ja arvo on korvaussääntö.

Yllä olevan säännön `ko de uk>ru zh-TW>zh >en` korvaaminen tarkoittaa, että `ko de` käyttää oman kielikoodinsa kuvaa, `zh-TW` ja `zh` käyttävät kuvaa `zh` :stä, `uk` käyttää kuvaa `ru` :sta ja muut kielet (kuten `ja` ) käyttävät kuvaa oletuksena `en` .

Esimerkiksi ranskan ( `fr` ) lähdetiedosto `MarkDown` on seuraava :

```md
![xx](https://i18n-img.github.io/fr/1.avif)
<video src="https://i18n-img.github.io/fr/1.mp4"></video>
[xx](https://i18n-img.github.io/fr/README.md)
<a style="color:red" href="https://i18n-img.github.io/fr/i18n.site.gz">xx</a>
```

Käännetty ja luotu englanninkielinen ( `en` ) tiedosto on seuraava :

```md
![xx](https://i18n-img.github.io/en/1.avif)
<video src="https://i18n-img.github.io/en/1.mp4"></video>
[xx](https://i18n-img.github.io/en/README.md)
<a style="color:red" href="https://i18n-img.github.io/en/i18n.site.gz">xx</a>
```

Tässä lähdekielen koodin `/en/` korvataan kohdekielen `/zh/` .

: URL-osoitteessa on oltava `/` ennen ja jälkeen korvatun tekstin kielikoodin.

> [!TIP]
> Jos `- /` on asetettu arvoon `url:` , vain suhteelliset polut täsmäävät, mutta `//` :lla alkavia URL-osoitteita ei täsmää.
>
> Jos jotkin verkkotunnuksen linkit halutaan korvata ja jotkin eivät, voit käyttää erilaisia etuliitteitä, kuten `[x](//x.com/en/)` ja `[x](https://x.com/en/)` niiden erottamiseen.

### Ohittaa Tiedosto

Oletusarvoisesti kaikki lähdekielen hakemistossa olevat tiedostot, jotka alkavat numeroilla `.md` ja `.yml` käännetään.

Jos haluat ohittaa tietyt tiedostot etkä kääntää niitä (kuten keskeneräisiä luonnoksia), voit määrittää sen kentällä `ignore` .

`ignore` käyttää [globset](https://docs.rs/globset/latest/globset/#syntax) syntaksia kuin tiedosto `.gitignore` .

Esimerkiksi `_* ` yllä olevassa asetustiedostossa tarkoittaa, että `_` :llä alkavia tiedostoja ei käännetä.

## Käännössäännöt

### Käännöseditorit Eivät Saa Lisätä Tai Poistaa Rivejä

Käännös on muokattavissa. Muokkaa alkuperäistä tekstiä ja käännä se uudelleen, manuaalisia muutoksia käännökseen ei kirjoiteta päälle (jos tätä alkuperäisen tekstin kappaletta ei ole muokattu).

> [!WARN]
> Käännöksen rivien ja alkuperäisen tekstin välillä on oltava yksittäinen vastaavuus. Eli älä lisää tai poista rivejä kääntäessäsi käännöstä. Muuten se aiheuttaa hämmennystä käännösmuokkausvälimuistissa.

Jos jokin menee pieleen, katso [ratkaisuja usein kysytyistä kysymyksistä.](/i18/qa#H1)

### `YAML` Käännöstä

Komentorivityökalu löytää kaikki `.yml` -päätteiset tiedostot lähdekielen tiedostohakemistosta ja kääntää ne.

* Huomaa, että tiedostonimen jälkiliitteen on oltava `.yml` (ei `.yaml` ).

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

## Edistynyt Käyttö

### Käännös-Alihakemisto

Niin kauan kuin `.i18n/conf.yml` on luotu (ei tarvitse aloittaa demoprojektimallista joka kerta), `i18` toimii hyvin.

Komentorivityökalu löytää `.i18n/conf.yml` kokoonpanoa kaikista alihakemistoista ja kääntää ne.

Projektit, jotka käyttävät [monorepo](//monorepo.tools) -arkkitehtuuria, voivat jakaa kielitiedostot alihakemistoihin.

![](https://p.3ti.site/1719910016.avif)

### Mukautettu Asennushakemisto

Se asennetaan oletuksena arvoon `/usr/local/bin` .

Jos `/usr/local/bin` ei ole kirjoitusoikeutta, se asennetaan kohtaan `~/.bin` .

Asetusympäristömuuttuja `TO` voi määrittää asennushakemiston, esimerkiksi :

```sh
TO=/bin sudo bash <(curl -sS https://i.i18n.site) i18
```