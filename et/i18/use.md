# Installige Ja Kasutage

## windows Installib Esmalt git Bashi

windows , [klõpsake kõigepealt allalaadimiseks ja installimiseks `git bash`](https://git-scm.com/download/win)

Käivitage järgmised toimingud `git bash`

## Installige

```sh
bash <(curl -sS https://i.i18n.site) i18
```

### Tõlkemärgi Seadistamine

Külastage [i18n.site/token](//i18n.site/token)

<img src="https://p.3ti.site/1719911689.avif" style="max-width:400px">

Looge `~/.config/i18n.site.yml` kleepige sellesse kopeeritud sisu, sisu on järgmine:

```
token: YOUR_API_TOKEN
```

Lisaks [i18n.site/payBill](//i18n.site/payBill) tasumiseks siduda krediitkaart (täiendamist ei nõuta, veebileht arvestab tasud automaatselt maha vastavalt kasutamisele, [hinnakujundust vaata kodulehelt](/#price) ).

## Kasutada

### Demoprojekt

`i18` konfiguratsiooni õppimiseks tutvuge demoprojektiga [github.com/i18n-site/demo.i18](//github.com/i18n-site/demo.i18)

Hiina kasutajad saavad kloonida [atomgit.com/i18n/demo.i18](//atomgit.com/i18n/demo.i18)

Pärast kloonimist sisenege kataloogi ja käivitage tõlke lõpuleviimiseks `i18`

### Kataloogi Struktuur

Malli laokataloogi struktuur on järgmine

```
┌── .i18n
│  └── conf.yml
└── en
   ├── _IgnoreDemoFile.md
   ├── i18n.yml
   └── README.md
```

Kataloog `en` sisaldab tõlgitud demofaile, mis on vaid näide ja mida saab kustutada.

### Käivitage Tõlge

Sisestage kataloog ja käivitage `i18`

### Lisage Failid Hoidlasse

Lisaks tõlkimisele genereerib programm ka järgmised failid, palun lisage need hoidlasse.

```
.i18n/hash
.i18n/cache/.gitignore
```

Nende hulgas : `.i18n/cache/.gitignore`

```
**/*
!**/.gitignore
```

See tähendab, et ignoreerige kõiki `.i18n/cache/` olevaid faile (välja arvatud `.i18n/cache/.gitignore` ).

Kui teie versioonihaldustarkvara ei ole `git` ignoreerige seda vastavalt sellele konfiguratsioonile.

## Konfiguratsioonifail

`.i18n/conf.yml` on `i18` käsurea tõlketööriista konfiguratsioonifail

Sisu on järgmine:

```
i18n:
  fromTo:
    en: zh ja ko de fr
    # en:

ignore:
  - _*
```

### Lähtekeel &

Konfiguratsioonifailis alluvad `fromTo`

`en` on lähtekeel, `zh ja ko de fr` on tõlke sihtkeel.

Keelekood vaata [i18n.site/i18/LANG_CODE](https://i18n.site/i18/LANG_CODE)

Näiteks kui soovite tõlkida hiina keele inglise keelde, kirjutage see rida ümber `zh: en`

Kui soovite tõlkida kõikidesse toetatud keeltesse, jätke pärast `:` näiteks

```
i18n:
  fromTo:
    en:
```

### Faili Ignoreerida

Vaikimisi tõlgitakse kõik lähtekeele kataloogis olevad failid, `.yml` algavad `.md`

Kui soovite teatud faile ignoreerida ja mitte tõlkida (nt lõpetamata mustandid), võite kasutada välja konfiguratsiooni `ignore`

Kasutab süntaksit `ignore` mis sarnaneb `.gitignore` [globset](https://docs.rs/globset/latest/globset/#syntax)

Näiteks ülaltoodud konfiguratsioonifailis tähendab `_* ` et `_` -ga algavaid faile ei tõlgita.

## Tõlkereeglid

### Tõlkeredaktorid Ei Tohiks Ridu Lisada Ega Kustutada

Tõlge on redigeeritav. Muuda originaalteksti ja tõlgi see uuesti, käsitsi tehtud tõlkemuudatusi üle ei kirjutata (kui seda originaalteksti lõiku pole muudetud).

Kuid pange tähele, et tõlke ja originaalteksti read peavad vastama ühele. See tähendab, et tõlke koostamisel ärge lisage ega kustutage ridu. Vastasel juhul põhjustab see segadust tõlke redigeerimise vahemälus.

Kui midagi läheb valesti, vaadake [lahendusi KKK-st.](/i18/qa#H1)

### `Yaml`

Käsurea tööriist otsib lähtekeele failikataloogist üles kõik `.yml` -ga lõppevad failid ja tõlgib need.

* Pange tähele, et failinime järelliide peab `.yml` (mitte `.yaml` ).

Tööriist tõlgib ainult sõnastiku väärtused `.yml` mitte sõnastiku võtmeid.

näiteks `i18n/en/i18n.yml`

```
apiToken: API Token
defaultToken: Default Token
```

tõlgitakse kui `i18n/zh/i18n.yml`

```
apiToken: 接口令牌
defaultToken: 默认令牌
```

Sõna `YAML` tõlget saab muuta ka käsitsi (kuid ärge lisage ega kustutage tõlkes võtmeid ega ridu).

`YAML` põhjal saate hõlpsalt luua rahvusvahelisi lahendusi erinevatele programmeerimiskeeltele.

## Täiustatud Kasutamine

### Tõlke Alamkataloog

Kuni `.i18n/conf.yml` (pole vaja iga kord demoprojekti mallist alustada), töötab `i18` hästi.

Käsurea tööriist leiab `.i18n/conf.yml` kõigist alamkataloogidest ja tõlgib selle.

Projektid, mis kasutavad [monorepo](//monorepo.tools) -i arhitektuuri, võivad jagada keelefailid alamkataloogideks.

<img alt="" src="https://p.3ti.site/1719910016.avif">

### Kohandatud Installikataloog

See installitakse vaikimisi `/usr/local/bin`

Kui `/usr/local/bin` pole kirjutamisõigust, installitakse see aadressile `~/.bin` .

Määra keskkonnamuutujad `TO` Saate määrata näiteks installikataloogi :

```sh
TO=/bin sudo bash <(curl -sS https://i.i18n.site) i18
```
