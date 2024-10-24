# Installige Ja Kasutage

## windows Installib Esmalt git Bashi

windows , [klõpsake kõigepealt `git bash` allalaadimiseks ja installimiseks](https://git-scm.com/download/win) .

Käivitage järgmised toimingud `git bash` .

## Installige

```sh
bash <(curl -sS https://i.i18n.site) i18
```

### Tõlkemärgi Seadistamine

Külastage [i18n.site/token](//i18n.site/token)

<img src="https://p.3ti.site/1719911689.avif" style="width:400px">

Looge `~/.config/i18n.site.yml` , kleepige sellesse kopeeritud sisu, sisu on järgmine:

```
token: YOUR_API_TOKEN
```

[i18n.site/payBill](//i18n.site/payBill) tuleb tasumiseks siduda krediitkaart (täiendamist pole vaja, veebileht arvestab tasud automaatselt maha vastavalt kasutamisele, [hinnakujundust vaata kodulehelt](/#price) ).

## Kasutada

### Demoprojekt

`i18` tõlke konfiguratsiooni õppimiseks vaadake demoprojekti [github.com/i18n-site/demo.i18](//github.com/i18n-site/demo.i18)

Hiina kasutajad saavad kloonida [atomgit.com/i18n/demo.i18](//atomgit.com/i18n/demo.i18)

Pärast kloonimist sisestage kataloog ja käivitage tõlke lõpuleviimiseks `i18` .

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

Kataloogis `en` olevad tõlgitud demofailid on vaid näide ja neid saab kustutada.

### Käivitage Tõlge

Sisestage kataloog ja käivitage tõlkimiseks `i18` .

Lisaks tõlkele genereerib programm ka kausta `.i18n/data` , palun lisage see hoidlasse.

Pärast uue faili tõlkimist luuakse selles kataloogis uus andmefail. Ärge unustage lisada `git add . ` .

## Konfiguratsioonifail

`.i18n/conf.yml` on käsurea tõlketööriista `i18` konfiguratsioonifail

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

Konfiguratsioonifailis on `fromTo` alam:

`en` on lähtekeel, `zh ja ko de fr` on tõlke sihtkeel.

Keelekood vaata [i18n.site/i18/LANG_CODE](https://i18n.site/i18/LANG_CODE)

Näiteks kui soovite tõlkida hiina keelt inglise keelde, kirjutage see rida ümber `zh: en` .

Kui soovite tõlkida kõikidesse toetatud keeltesse, jätke `:` pärast tühjaks. näiteks

```
i18n:
  fromTo:
    en:
```

/ alamkataloogide jaoks saab seadistada erinevat `fromTo` Demonstratsioon on kirjutatud järgmiselt :

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

Selles konfiguratsioonitabelis on kataloogi `blog` tõlke lähtekeel `zh` ja kataloogi `blog/your_file_name.md` tõlkimise lähtekeel `ja` .

### Faili Ignoreerida

Vaikimisi tõlgitakse kõik lähtekeele kataloogis olevad failid, mis algavad numbritega `.md` ja `.yml` .

Kui soovite teatud faile ignoreerida ja mitte tõlkida (nt lõpetamata mustandid), võite kasutada välja konfiguratsiooni `ignore` .

`ignore` kasutab [globset](https://docs.rs/globset/latest/globset/#syntax) süntaksit kui `.gitignore` fail.

Näiteks `_* ` ülaltoodud konfiguratsioonifailis tähendab, et `_` ga algavaid faile ei tõlgita.

## Tõlkereeglid

### Tõlkeredaktorid Ei Tohiks Ridu Lisada Ega Kustutada

Tõlge on redigeeritav. Muuda originaalteksti ja tõlgi see uuesti, käsitsi tehtud tõlkemuudatusi üle ei kirjutata (kui seda originaalteksti lõiku pole muudetud).

> [!WARN]
> Tõlke ja originaalteksti read peavad vastama ühele. See tähendab, et tõlke koostamisel ärge lisage ega kustutage ridu. Vastasel juhul põhjustab see segadust tõlke redigeerimise vahemälus.

Kui midagi läheb valesti, vaadake [lahendusi KKK-st.](/i18/qa#H1)

### `YAML` Tõlget

Käsurea tööriist leiab lähtekeele failikataloogist kõik `.yml` ga lõppevad failid ja tõlgib need.

* Pange tähele, et failinime järelliide peab olema `.yml` (mitte `.yaml` ).

Tööriist tõlgib ainult sõnastiku väärtused `.yml` s, mitte sõnastiku võtmed.

Näiteks `i18n/en/i18n.yml`

```
apiToken: API Token
defaultToken: Default Token
```

tõlgitakse kui `i18n/zh/i18n.yml`

```
apiToken: 接口令牌
defaultToken: 默认令牌
```

`YAML` tõlget saab muuta ka käsitsi (kuid ärge lisage ega kustutage tõlkes võtmeid ega ridu).

`YAML` tõlke põhjal saate hõlpsasti luua rahvusvahelisi lahendusi erinevatele programmeerimiskeeltele.

## Täiustatud Kasutamine

### Tõlke Alamkataloog

Niikaua kui luuakse `.i18n/conf.yml` (pole vaja iga kord demoprojekti mallist alustada), töötab `i18` hästi.

Käsurea tööriist leiab kõigist alamkataloogidest `.i18n/conf.yml` konfiguratsiooni ja tõlgib need.

Projektid, mis kasutavad [monorepo](//monorepo.tools) -i arhitektuuri, võivad jagada keelefailid alamkataloogideks.

![](https://p.3ti.site/1719910016.avif)

### Kohandatud Installikataloog

See installitakse vaikimisi väärtusele `/usr/local/bin` .

Kui `/usr/local/bin` pole kirjutamisõigust, installitakse see `~/.bin` .

Keskkonnamuutuja `TO` seadistus võib määrata installikataloogi, näiteks :

```sh
TO=/bin sudo bash <(curl -sS https://i.i18n.site) i18
```