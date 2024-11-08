# Fe'uu Fi Itti Fayyadamuu

## windows Jalqaba git bash Fe'A

windows , mee [as tuquun dursa `git bash` buufadhaa install godhaa](https://git-scm.com/download/win) .

Hojiiwwan itti aanan `git bash` keessatti hojjedhu.

## Itti Fe'uu

```sh
bash <(curl -sS https://i.i18n.site) i18
```

### Mallattoo Hiikkaa Qindeessuu

[i18n.site/token](//i18n.site/token) Token copy gochuuf cuqaasaa

<img src="https://p.3ti.site/1719911689.avif" style="width:400px">

`~/.config/i18n.site.yml` uumi, qabiyyee waraabame itti maxxansi, qabiyyeen akka armaan gadiitti:

```
token: YOUR_API_TOKEN
```

Dabalataanis [,](/#price) kaardii liqii kaffaltii hidhuu qabdu [i18n.site/payBill](//i18n.site/payBill)

## Fayyadamuu

### Pirojektii Agarsiisaa

Mee qindeessaa hiikkaa `i18` baruuf pirojektii demoo [github.com/i18n-site/demo.i18](//github.com/i18n-site/demo.i18)

Fayyadamtoonni Chaayinaa keessa jiran clone gochuu danda'u [atomgit.com/i18n/demo.i18](//atomgit.com/i18n/demo.i18)

Erga kloonii gootee booda, galmee galchiiti `i18` fiigi hiikkaa xumuruuf.

### Caasaa Galmee

Caasaan galmee kuusaa unkaa akka armaan gadiitti argama

```
┌── .i18n
│  └── conf.yml
└── en
   ├── _IgnoreDemoFile.md
   ├── i18n.yml
   └── README.md
```

Faayiloonni demoo hiikaman galmee `en` keessatti fakkeenya qofa waan ta'aniif haqamuu danda'u.

### Hiikkaa Fiigi

Galmee galchiiti hiikuuf `i18` fiigi.

Hiikkaa malees sagantichi galmee `.i18n/data` ni maddisiisa, maaloo gara kuusaatti dabali.

Faayilii haaraa erga hiiktee booda, faayilii deetaa haaraan galmee kana keessatti ni uuma `git add . ` dabaluu yaadadhu.

## Faayilii Qindeessaa

`.i18n/conf.yml` faayilii qindeessaa meeshaa hiikkaa sarara ajaja `i18`

Qabiyyeen isaa akka armaan gadiitti:

```
i18n:
  fromTo:
    en: zh ja ko de fr
    # en:

ignore:
  - _*
```

### Afaan Madda & Hiikkaa

Faayilii qindeessaa keessatti, jalaa `fromTo` :

`en` afaan madda, `zh ja ko de fr` afaan galma hiikkaati.

Koodii afaanii ilaali [i18n.site/i18/LANG_CODE](https://i18n.site/i18/LANG_CODE)

Fakkeenyaaf, Chaayinaa gara Ingiliffaatti hiikuu yoo barbaadde, sarara kana irra deebi'ii barreessi `zh: en` .

Yoo afaanota deeggaraman hundaatti hiikuu barbaadde, maaloo `:` booda duwwaa dhiisi. Fakkeenyaaf

```
i18n:
  fromTo:
    en:
```

Galmeewwan xiqqaa / addaatiif `fromTo` adda addaa qindeessuu dandeessa Agarsiisni akka armaan gadiitti : barreeffama.

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

Gabatee qindeessaa kana keessatti, afaan madda hiikkaa kataloogii `blog` `zh` yoo ta'u, afaan madda hiikkaa kataloogii `blog/your_file_name.md` `ja` dha.

### Fakkiiwwan/Walitti Hidhamiinsa Afaanota Hedduu

Yeroo URLwwan fakkiiwwanii fi hidhannoowwan `replace:` fi `MarkDown` keessa jiran (fi amaloonni `src` fi `href` kan ukkaamfame `HTML` ) durtii kanaan `.i18n/conf.yml` keessatti qindaa'an, koodii afaan madda URL keessa jiru koodii afaanii hiikkaa ( [afaan tarree koodii](/i18/LANG_CODE) ).

Fakkeenyaaf, qindeessaan kee akka armaan gadiitti:

```yml
i18n:
  fromTo:
    fr: ko de en zh zh-TW uk ru ja
  replace:
    https://fcdoc.github.io/img/ : ko de uk>ru zh-TW>zh >en
```

`replace: ` galmee jechootaati, furtuun durtii URL bakka bu'uu qabuudha, gatiin immoo seera bakka bu'iinsaati.

Hiikni seera `ko de uk>ru zh-TW>zh >en` armaan olii bakka buusuu `ko de` fakkii koodii afaan ofii fayyadama, `zh-TW` fi `zh` fakkii `zh` , `uk` fakkii `ru` , fi afaanonni biroo (kan akka `ja` ) fakkii fayyadamu kan `en` akka durtiitti.

Fakkeenyaaf, faayilii madda Faransaayii ( `fr` ) `MarkDown` akka armaan gadiitti :

```md
![xx](https://i18n-img.github.io/fr/1.avif)
<video src="https://i18n-img.github.io/fr/1.mp4"></video>
[xx](https://i18n-img.github.io/fr/README.md)
<a style="color:red" href="https://i18n-img.github.io/fr/i18n.site.gz">xx</a>
```

Faayilli Afaan Ingilizii ( `en` ) hiikamee fi uumame akka armaan gadiitti :

```md
![xx](https://i18n-img.github.io/en/1.avif)
<video src="https://i18n-img.github.io/en/1.mp4"></video>
[xx](https://i18n-img.github.io/en/README.md)
<a style="color:red" href="https://i18n-img.github.io/en/i18n.site.gz">xx</a>
```

Asitti, `/en/` koodii afaan madda keessaa `/zh/` afaan galma keessatti bakka bu'u.

Hubachiisa : URL keessatti koodii afaanii barruu bakka bu'e duraa fi booda `/` jiraachuu qaba.

> [!TIP]
> Yoo `- /` `url:` keessatti qindaa'e, daandii fira qofatu walsimsiifama, garuu URL'n `//` jalqaban hin walsimsiifamu.
>
> Yoo hidhannoowwan maqaa domeenii tokko tokko bakka buufamuu barbaadanii fi tokko tokko bakka buufamuu hin barbaanne, addaan baasuuf durtii adda addaa kan akka `[x](//x.com/en/)` fi `[x](https://x.com/en/)` fayyadamuu dandeessa.

### Faayilii Tuffachuu

Akka durtiitti, faayilii hunduu galmee afaan madda keessaa `.md` fi `.yml` irraa jalqaban ni hiikamu.

Yoo faayilii murtaa'e bira darbuu fi hiikuu dhiisuu barbaadde (kan akka wixinee hin xumuramne), dirree `ignore` waliin qindeessuu dandeessa.

`ignore` [globset](https://docs.rs/globset/latest/globset/#syntax) `.gitignore`

Fakkeenyaaf, faayilii qindeessaa armaan olii keessatti `_* ` jechuun faayilii `_` jalqaban hin hiikaman jechuudha.

## Seera Hiikkaa

### Gulaaltonni Hiikkaa Sararoota Dabaluu Ykn Haquu Hin Qaban

Hiikkaan gulaalamuu danda'a. Barreeffama jalqabaa fooyyesiitii irra deebi'ii maashinii-hiikkaa, fooyya'iinsi harkaan hiikkaa irratti hin barreeffamu (yoo keeyyatni barruu jalqabaa kun hin fooyya'in).

> [!WARN]
> Sararoota hiikkaa fi barreeffama jalqabaa gidduutti walsimsiisni tokko tokkoon jiraachuu qaba. Kunis, yeroo hiikkaa qindeessitu sararoota hin dabalin ykn hin haqin. Yoo kana hin taane, kaachota gulaaluu hiikkaa keessatti burjaajii ni fida.

Yoo wanti tokko dogoggora ta'e, [furmaata argachuuf FAQ ilaalaa.](/i18/qa#H1)

### `YAML` Hiika

Meeshaan sarara ajajaa faayilii hunda galmee faayilii afaan madda keessatti `.yml` xumuramu argatee ni hiika.

* Hubadhu, xumura maqaa faayilii `.yml` ( `.yaml` miti) ta'uu qaba.

Meeshaan gatiiwwan galmee jechootaa `.yml` keessatti qofa hiika malee furtuuwwan galmee jechootaa miti.

Fakkeenyaaf `i18n/en/i18n.yml`

```
apiToken: API Token
defaultToken: Default Token
```

`i18n/zh/i18n.yml` jedhamee hiikama

```
apiToken: 接口令牌
defaultToken: 默认令牌
```

Hiikkaan `YAML` harkaan fooyya'uus ni danda'a (garuu furtuuwwan ykn sararoota hiikkaa keessatti hin dabalin ykn hin haqin).

Hiikkaa `YAML` irratti hundaa’uun, afaanota sagantaa adda addaatiif furmaata idil-addunyaa salphaatti ijaaruu dandeessu.

## Fayyadama Sadarkaa Olaanaa

### Galmee Xiqqaa Hiikkaa

Hanga `.i18n/conf.yml` uumamutti (yeroo hunda unka pirojektii demoo irraa jalqabuun hin barbaachisu), `i18` gaarii hojjeta.

Meeshaan sarara ajajaa qindeessaa `.i18n/conf.yml` galmeewwan xiqqaa hunda keessatti argatee ni hiika.

Pirojektoonni arkiteekcharii [monorepo](//monorepo.tools)

![](https://p.3ti.site/1719910016.avif)

### Galmee Fe'iinsa Amala

Akka durtiitti gara `/usr/local/bin` ni fe'ama.

Yoo `/usr/local/bin` hayyama barreessuu hin qabne gara `~/.bin` tti ni fe'ama.

Jijjiiramaa naannoo `TO` saaguun galmee fe'iinsaa hiikuu danda'a, fakkeenyaaf :

```sh
TO=/bin sudo bash <(curl -sS https://i.i18n.site) i18
```