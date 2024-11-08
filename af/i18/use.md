# Installeer en Gebruik

## windows Installeer Eers git bash

windows Stelsel, [klik asseblief hier om eers `git bash` af te laai en te installeer](https://git-scm.com/download/win) .

Voer daaropvolgende bewerkings in `git bash` uit.

## Installeer

```sh
bash <(curl -sS https://i.i18n.site) i18
```

### Stel Vertalingstoken Op

Besoek [i18n.site/token](//i18n.site/token) Klik om teken te kopieer

<img src="https://p.3ti.site/1719911689.avif" style="width:400px">

Skep `~/.config/i18n.site.yml` , plak die gekopieerde inhoud daarin, die inhoud is soos volg:

```
token: YOUR_API_TOKEN
```

Daarbenewens moet jy 'n [i18n.site/payBill](//i18n.site/payBill) inbind (Geen herlaai word vereis nie, die webwerf sal outomaties fooie aftrek volgens gebruik, [sien die tuisblad vir pryse](/#price) ).

## Gebruik

### Demo Projek

Verwys [github.com/i18n-site/demo.i18](//github.com/i18n-site/demo.i18) na die demo-projek om die konfigurasie van `i18` vertaling te leer.

Gebruikers in China kan kloon [atomgit.com/i18n/demo.i18](//atomgit.com/i18n/demo.i18)

Na kloning, voer die gids in en hardloop `i18` om die vertaling te voltooi.

### Gidsstruktuur

Die sjabloon pakhuisgidsstruktuur is soos volg

```
┌── .i18n
│  └── conf.yml
└── en
   ├── _IgnoreDemoFile.md
   ├── i18n.yml
   └── README.md
```

Die vertaalde demo-lêers in die `en` gids is slegs 'n voorbeeld en kan uitgevee word.

### Voer Vertaling Uit

Voer die gids in en hardloop `i18` om te vertaal.

Benewens die vertaling, sal die program ook die `.i18n/data` lêergids genereer, voeg dit asseblief by die bewaarplek.

Nadat die nuwe lêer vertaal is, sal 'n nuwe datalêer in hierdie gids gegenereer word. Onthou om `git add . ` by te voeg.

## Konfigurasie Lêer

`.i18n/conf.yml` is die konfigurasielêer van die `i18` opdragreëlvertaalinstrument

Die inhoud is soos volg:

```
i18n:
  fromTo:
    en: zh ja ko de fr
    # en:

ignore:
  - _*
```

### Brontaal &

In die konfigurasielêer, die ondergeskikte van `fromTo` :

`en` is die brontaal, `zh ja ko de fr` is die doeltaal van die vertaling.

Taalkode sien [i18n.site/i18/LANG_CODE](https://i18n.site/i18/LANG_CODE)

Byvoorbeeld, as jy Chinees in Engels wil vertaal, skryf hierdie reël `zh: en` oor.

As jy na alle ondersteunde tale wil vertaal, laat asseblief leeg na `:` . byvoorbeeld

```
i18n:
  fromTo:
    en:
```

U kan verskillende `fromTo` vir verskillende subgidse opstel / 'n Demonstrasie word soos volg geskryf :

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

In hierdie konfigurasietabel is die brontaal van katalogus `blog` -vertaling `zh` , en die brontaal van katalogus `blog/your_file_name.md` vertaling `ja` .

### Veeltalige Beelde/Skakels

Wanneer die URL's in die prente en skakels in `replace:` en `MarkDown` (en die `src` en `href` kenmerke van ingebed `HTML` ) in `.i18n/conf.yml` gekonfigureer is met hierdie voorvoegsel, sal die brontaalkode in die URL vervang word deur die taalkode van die vertaling ( [taal kode lys](/i18/LANG_CODE) ).

Byvoorbeeld, jou konfigurasie is soos volg:

```yml
i18n:
  fromTo:
    fr: ko de en zh zh-TW uk ru ja
  replace:
    https://fcdoc.github.io/img/ : ko de uk>ru zh-TW>zh >en
```

`replace: ` is 'n woordeboek, die sleutel is die URL-voorvoegsel wat vervang moet word, en die waarde is die vervangingsreël.

Die betekenis van die vervanging van reël `ko de uk>ru zh-TW>zh >en` hierbo is dat `ko de` die prent van hul eie taalkode gebruik, `zh-TW` en `zh` die prent van `zh` gebruik, `uk` die prent van `ru` gebruik, en ander tale (soos `ja` ) gebruik die prent van `en` by verstek.

Byvoorbeeld, die Franse ( `fr` ) bronlêer van `MarkDown` is soos volg :

```md
![xx](https://i18n-img.github.io/fr/1.avif)
<video src="https://i18n-img.github.io/fr/1.mp4"></video>
[xx](https://i18n-img.github.io/fr/README.md)
<a style="color:red" href="https://i18n-img.github.io/fr/i18n.site.gz">xx</a>
```

Die vertaalde en gegenereerde Engelse ( `en` ) lêer is soos volg :

```md
![xx](https://i18n-img.github.io/en/1.avif)
<video src="https://i18n-img.github.io/en/1.mp4"></video>
[xx](https://i18n-img.github.io/en/README.md)
<a style="color:red" href="https://i18n-img.github.io/en/i18n.site.gz">xx</a>
```

Hier word `/en/` in die brontaalkode vervang met `/zh/` in die doeltaal.

Let wel : Daar moet `/` voor en na die taalkode van die vervangde teks in die URL wees.

> [!TIP]
> As `- /` in `url:` opgestel is, sal slegs relatiewe paaie ooreenstem, maar URL's wat met `//` begin, sal nie ooreenstem nie.
>
> As sommige skakels van 'n domeinnaam vervang wil word en sommige nie vervang wil word nie, kan jy verskillende voorvoegsels soos `[x](//x.com/en/)` en `[x](https://x.com/en/)` gebruik om hulle te onderskei.

### Ignoreer Lêer

By verstek sal alle lêers wat met `.md` en `.yml` in die brontaalgids begin, vertaal word.

As jy sekere lêers wil ignoreer en nie vertaal nie (soos onvoltooide konsepte), kan jy dit met die `ignore` veld instel.

`ignore` gebruik [globset](https://docs.rs/globset/latest/globset/#syntax) sintaksis as die `.gitignore` lêer.

Byvoorbeeld, `_* ` in die bogenoemde konfigurasielêer beteken dat lêers wat met `_` begin, nie vertaal sal word nie.

## Vertaalreëls

### Vertaalredigeerders Moet Nie Reëls Byvoeg of Uitvee Nie

Die vertaling is redigeerbaar. Verander die oorspronklike teks en masjienvertaal dit weer, die handmatige wysigings aan die vertaling sal nie oorskryf word nie (indien hierdie paragraaf van die oorspronklike teks nie gewysig is nie).

> [!WARN]
> Daar moet 'n een-tot-een ooreenstemming tussen die reëls van die vertaling en die oorspronklike teks wees. Dit wil sê, moenie reëls byvoeg of skrap wanneer die vertaling saamgestel word nie. Andersins sal dit verwarring in die vertaalredigeerkas veroorsaak.

As iets verkeerd loop, verwys asseblief na [die FAQ vir oplossings.](/i18/qa#H1)

### `YAML` Vertalings

Die opdragreëlnutsding sal alle lêers wat met `.yml` eindig in die brontaallêergids vind en dit vertaal.

* Let daarop dat die lêernaam-agtervoegsel `.yml` moet wees (nie `.yaml` nie).

Die instrument vertaal slegs die woordeboekwaardes in `.yml` , nie die woordeboeksleutels nie.

Byvoorbeeld `i18n/en/i18n.yml`

```
apiToken: API Token
defaultToken: Default Token
```

sal as `i18n/zh/i18n.yml` vertaal word

```
apiToken: 接口令牌
defaultToken: 默认令牌
```

Die vertaling van `YAML` kan ook met die hand gewysig word (maar moenie sleutels of reëls in die vertaling byvoeg of uitvee nie).

Op grond van `YAML` vertaling, kan jy maklik internasionale oplossings vir verskeie programmeertale bou.

## Gevorderde Gebruik

### Vertaling Subgids

Solank `.i18n/conf.yml` geskep word (nie nodig om elke keer van demo-projeksjabloon te begin nie), sal `i18` goed werk.

Die opdragreëlnutsding sal `.i18n/conf.yml` konfigurasies in alle subgidse vind en dit vertaal.

Projekte wat die [monorepo](//monorepo.tools) -argitektuur gebruik, kan taallêers in subgidse verdeel.

![](https://p.3ti.site/1719910016.avif)

### Pasgemaakte Installasiegids

Dit sal by verstek op `/usr/local/bin` geïnstalleer word.

As `/usr/local/bin` nie skryftoestemming het nie, sal dit op `~/.bin` geïnstalleer word.

Die instelling van omgewingsveranderlike `TO` kan die installasiegids definieer, byvoorbeeld :

```sh
TO=/bin sudo bash <(curl -sS https://i.i18n.site) i18
```