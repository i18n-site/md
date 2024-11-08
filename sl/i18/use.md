# Namestite in Uporabite

## windows Najprej Namesti git bash

windows Sistem, [kliknite tukaj, da najprej prenesete in namestite `git bash`](https://git-scm.com/download/win) .

Zaženi naslednje operacije v `git bash` .

## Namestite

```sh
bash <(curl -sS https://i.i18n.site) i18
```

### Konfigurirajte Prevodni Žeton

Obiščite [i18n.site/token](//i18n.site/token) Kliknite za kopiranje žetona

<img src="https://p.3ti.site/1719911689.avif" style="width:400px">

Ustvarite `~/.config/i18n.site.yml` , vanj prilepite kopirano vsebino, vsebina je naslednja:

```
token: YOUR_API_TOKEN
```

Poleg tega morate vezati plačilno kreditno kartico v [i18n.site/payBill](//i18n.site/payBill) (Ponovno bremenitev ni potrebna, spletno mesto bo samodejno odštelo stroške glede na uporabo, [glejte domačo stran za cene](/#price) ).

## Uporaba

### Demo Projekt

Prosimo, glejte predstavitveni projekt [github.com/i18n-site/demo.i18](//github.com/i18n-site/demo.i18) če želite izvedeti konfiguracijo `i18` prevoda.

Uporabniki na Kitajskem lahko klonirajo [atomgit.com/i18n/demo.i18](//atomgit.com/i18n/demo.i18)

Po kloniranju vnesite imenik in zaženite `i18` , da dokončate prevod.

### Struktura Imenika

Struktura imenika skladišča predloge je naslednja

```
┌── .i18n
│  └── conf.yml
└── en
   ├── _IgnoreDemoFile.md
   ├── i18n.yml
   └── README.md
```

Prevedene predstavitvene datoteke v imeniku `en` so samo primer in jih je mogoče izbrisati.

### Zaženi Prevod

Vnesite imenik in zaženite `i18` za prevajanje.

Poleg prevoda bo program ustvaril tudi mapo `.i18n/data` , dodajte jo v repozitorij.

Po prevodu nove datoteke `git add . ` v tem imeniku ustvarjena nova podatkovna datoteka.

## Konfiguracijska Datoteka

`.i18n/conf.yml` je konfiguracijska datoteka orodja za prevajanje ukazne vrstice `i18`

Vsebina je naslednja:

```
i18n:
  fromTo:
    en: zh ja ko de fr
    # en:

ignore:
  - _*
```

### Izvorni Jezik & Jezik Prevoda

V konfiguracijski datoteki je podrejeni `fromTo` :

`en` je izvorni jezik, `zh ja ko de fr` je ciljni jezik prevoda.

Jezikovna koda glej [i18n.site/i18/LANG_CODE](https://i18n.site/i18/LANG_CODE)

Na primer, če želite prevesti kitajščino v angleščino, prepišite to vrstico `zh: en` .

Če želite prevajati v vse podprte jezike, pustite prazno za `:` . na primer

```
i18n:
  fromTo:
    en:
```

Konfigurirate lahko različne `fromTo` za različne podimenike / Predstavitev je zapisana na naslednji način :

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

V tej konfiguracijski tabeli je izvorni jezik prevoda kataloga `blog` `zh` , izvorni jezik prevoda kataloga `blog/your_file_name.md` pa `ja` .

### Večjezične Slike/Povezave

Ko so URL-ji na slikah in povezavah v `replace:` in `MarkDown` (ter atributa `src` in `href` vdelanega `HTML` ) konfigurirani v `.i18n/conf.yml` s to predpono, bo koda izvornega jezika v URL-ju zamenjana z jezikovno kodo prevoda ( [jezik šifrant](/i18/LANG_CODE) ).

Vaša konfiguracija je na primer naslednja:

```yml
i18n:
  fromTo:
    fr: ko de en zh zh-TW uk ru ja
  replace:
    https://fcdoc.github.io/img/ : ko de uk>ru zh-TW>zh >en
```

`replace: ` je slovar, ključ je predpona URL-ja, ki jo je treba zamenjati, vrednost pa pravilo zamenjave.

Pomen zamenjave pravila `ko de uk>ru zh-TW>zh >en` zgoraj je, da `ko de` uporablja sliko lastne jezikovne kode, `zh-TW` in `zh` uporabljata sliko `zh` , `uk` uporablja sliko `ru` , drugi jeziki (kot je `ja` ) pa uporabljajo sliko od `en` privzeto.

Na primer, francoska ( `fr` ) izvorna datoteka `MarkDown` je naslednja :

```md
![xx](https://i18n-img.github.io/fr/1.avif)
<video src="https://i18n-img.github.io/fr/1.mp4"></video>
[xx](https://i18n-img.github.io/fr/README.md)
<a style="color:red" href="https://i18n-img.github.io/fr/i18n.site.gz">xx</a>
```

Prevedena in ustvarjena angleška ( `en` ) datoteka je naslednja :

```md
![xx](https://i18n-img.github.io/en/1.avif)
<video src="https://i18n-img.github.io/en/1.mp4"></video>
[xx](https://i18n-img.github.io/en/README.md)
<a style="color:red" href="https://i18n-img.github.io/en/i18n.site.gz">xx</a>
```

Tukaj so `/en/` v kodi izvornega jezika zamenjane z `/zh/` v ciljnem jeziku.

Opomba : Pred in za jezikovno kodo zamenjanega besedila v URL-ju mora biti `/` .

> [!TIP]
> Če je `- /` konfiguriran v `url:` , se bodo ujemale samo relativne poti, vendar URL-ji, ki se začnejo z `//` ne bodo ujemani.
>
> Če želite nekatere povezave imena domene zamenjati, nekatere pa ne, lahko uporabite različne predpone, kot sta `[x](//x.com/en/)` in `[x](https://x.com/en/)` da jih ločite.

### Ignoriraj Datoteko

Privzeto bodo prevedene vse datoteke, ki se začnejo z `.md` in `.yml` v imeniku izvornega jezika.

Če želite določene datoteke prezreti in jih ne prevesti (na primer nedokončane osnutke), lahko to konfigurirate s poljem `ignore` .

`ignore` uporablja isto sintakso [globset](https://docs.rs/globset/latest/globset/#syntax) kot datoteka `.gitignore` .

Na primer, `_* ` v zgornji konfiguracijski datoteki pomeni, da datoteke, ki se začnejo z `_` ne bodo prevedene.

## Pravila Prevajanja

### Uredniki Prevodov Ne Smejo Dodajati Ali Brisati Vrstic

Prevod je mogoče urejati. Spremenite izvirno besedilo in ga znova strojno prevedite, ročne spremembe prevoda ne bodo prepisane (če ta odstavek izvirnega besedila ni bil spremenjen).

> [!WARN]
> Med vrsticami prevoda in izvirnim besedilom mora obstajati ena proti ena ujemanje. To pomeni, da pri prevajanju prevoda ne dodajajte ali brišete vrstic. V nasprotnem primeru bo prišlo do zmede v predpomnilniku za urejanje prevodov.

Če gre kaj narobe, poiščite [rešitve v pogostih vprašanjih.](/i18/qa#H1)

### `YAML` Prevodov

Orodje ukazne vrstice poišče vse datoteke, ki se končajo z `.yml` v imeniku datotek izvornega jezika in jih prevede.

* Upoštevajte, da mora biti pripona imena datoteke `.yml` (ne `.yaml` ).

Orodje prevaja samo slovarske vrednosti v `.yml` , ne slovarskih ključev.

Na primer `i18n/en/i18n.yml`

```
apiToken: API Token
defaultToken: Default Token
```

bo preveden kot `i18n/zh/i18n.yml`

```
apiToken: 接口令牌
defaultToken: 默认令牌
```

Prevod `YAML` lahko spremenite tudi ročno (vendar ne dodajte ali izbrišite ključev ali vrstic v prevodu).

Na podlagi prevoda `YAML` lahko preprosto zgradite mednarodne rešitve za različne programske jezike.

## Napredna Uporaba

### Podimenik Prevodov

Dokler je ustvarjen `.i18n/conf.yml` (ni treba vsakič začeti s predlogo demo projekta), bo `i18` deloval dobro.

Orodje ukazne vrstice bo našlo `.i18n/conf.yml` konfiguracij v vseh podimenikih in jih prevedlo.

Projekti, ki uporabljajo arhitekturo [monorepo](//monorepo.tools) , lahko jezikovne datoteke razdelijo na podimenike.

![](https://p.3ti.site/1719910016.avif)

### Namestitveni Imenik Po Meri

Privzeto bo nameščen na `/usr/local/bin` .

Če `/usr/local/bin` nima dovoljenja za pisanje, bo nameščen v `~/.bin` .

Nastavitev spremenljivke okolja `TO` lahko definira namestitveni imenik, na primer :

```sh
TO=/bin sudo bash <(curl -sS https://i.i18n.site) i18
```