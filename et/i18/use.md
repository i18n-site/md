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

Lisaks tuleb [siduda](/#price) maksekrediitkaart [i18n.site/payBill](//i18n.site/payBill)

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

Lisaks tõlkele genereerib programm ka `.i18n/data` kausta, palun lisage see hoidlasse.

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

/ alamkataloogide jaoks saate seadistada erinevaid `fromTo` Demonstratsioon on kirjutatud järgmiselt :

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

Selles konfiguratsioonitabelis on kataloogi `blog` tõlke lähtekeel `zh` ja kataloogi `blog/your_file_name.md` tõlke lähtekeel `ja` .

### Mitmekeelsed Pildid/Lingid

Kui piltidel ja `replace:` ja `MarkDown` linkidel (ning manustatud `HTML` atribuudid `src` ja `href` ) on URL-id seadistatud selle eesliitega väärtusele `.i18n/conf.yml` , asendatakse URL-is olev lähtekeele kood tõlke keelekoodiga ( [keel koodide loend](/i18/LANG_CODE) ).

Näiteks on teie konfiguratsioon järgmine:

```yml
i18n:
  fromTo:
    fr: ko de en zh zh-TW uk ru ja
  replace:
    https://fcdoc.github.io/img/ : ko de uk>ru zh-TW>zh >en
```

`replace: ` on sõnastik, võti on asendatav URL-i eesliide ja väärtus on asendusreegel.

Ülaltoodud reegli `ko de uk>ru zh-TW>zh >en` asendamise tähendus on see, et `ko de` kasutab oma keelekoodi pilti, `zh-TW` ja `zh` kasutavad pilti `zh` , `uk` kasutavad pilti `ru` ja teised keeled (näiteks `ja` ) kasutavad pilti vaikimisi `en` .

Näiteks prantsuskeelne ( `fr` ) lähtefail `MarkDown` on järgmine :

```md
![xx](https://i18n-img.github.io/fr/1.avif)
<video src="https://i18n-img.github.io/fr/1.mp4"></video>
[xx](https://i18n-img.github.io/fr/README.md)
<a style="color:red" href="https://i18n-img.github.io/fr/i18n.site.gz">xx</a>
```

Tõlgitud ja genereeritud ingliskeelne ( `en` ) fail on järgmine :

```md
![xx](https://i18n-img.github.io/en/1.avif)
<video src="https://i18n-img.github.io/en/1.mp4"></video>
[xx](https://i18n-img.github.io/en/README.md)
<a style="color:red" href="https://i18n-img.github.io/en/i18n.site.gz">xx</a>
```

Siin asendatakse lähtekeele koodi `/en/` sihtkeeles `/zh/` ga.

Märkus : URL-is peab olema `/` enne ja pärast asendatud teksti keelekoodi.

> [!TIP]
> Kui `- /` on seadistatud väärtuseks `url:` , vastendatakse ainult suhtelisi teid, kuid `//` ga algavaid URL-e ei sobitata.
>
> Kui mõned domeeninime lingid tahavad asendamist ja mõned ei soovi asendamist, saate nende eristamiseks kasutada erinevaid eesliiteid, näiteks `[x](//x.com/en/)` ja `[x](https://x.com/en/)` .

### Faili Ignoreerida

Vaikimisi tõlgitakse kõik lähtekeele kataloogis olevad failid, mis algavad numbritega `.md` ja `.yml` .

Kui soovite teatud faile ignoreerida ja neid mitte tõlkida (nt lõpetamata mustandid), saate selle konfigureerida väljaga `ignore` .

`ignore` kasutab [globset](https://docs.rs/globset/latest/globset/#syntax) süntaksit kui `.gitignore` fail.

Näiteks `_* ` ülaltoodud konfiguratsioonifailis tähendab, et `_` ga algavaid faile ei tõlgita.

## Tõlkereeglid

### Tõlkeredaktorid Ei Tohiks Ridu Lisada Ega Kustutada

Tõlge on redigeeritav. Muuda originaalteksti ja tõlgi see uuesti, käsitsi tehtud tõlkemuudatusi üle ei kirjutata (kui seda originaalteksti lõiku pole muudetud).

> [!WARN]
> Tõlke ja originaalteksti ridade vahel peab olema üks-ühele vastavus. See tähendab, et tõlke koostamisel ärge lisage ega kustutage ridu. Vastasel juhul põhjustab see segadust tõlke redigeerimise vahemälus.

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