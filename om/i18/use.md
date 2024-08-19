# Fe'uu Fi Itti Fayyadamuu

## windows Jalqaba git bash Fe'A

windows , mee as [tuquun dursa `git bash` buufachuu fi install gochuu](https://git-scm.com/download/win) dandeessu.

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

Dabalataanis, kaffaltiidhaaf kaardii liqii hidhuu [i18n.site/payBill](//i18n.site/payBill) (kaffaltiin irra deebiin hin barbaachisu, marsariitichi akka itti fayyadamaatti ofumaan kaffaltii ni hir'isa, [gatii ilaaluuf fuula jalqabaa ilaali](/#price) ).

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

### Faayilota Gara Kuusaatti Dabali

Hiikkaa malees sagantichi faayiloota armaan gadii ni maddisiisa, maaloo gara kuusaatti dabali.

```
.i18n/hash
.i18n/cache/.gitignore
```

Isaan keessaa qabiyyeen `.i18n/cache/.gitignore` akka armaan gadiitti :

```
**/*
!**/.gitignore
```

Kana jechuun faayilii galmee `.i18n/cache/` keessa jiran hundi ( `.i18n/cache/.gitignore` irraa kan hafe) tuffatamu.

Yoo sooftiweeriin to'annoo version kee `git` hin taane, maaloo akkaataa qindeessaa kanaatiin bira darbi.

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

### Afaan & Afaan Hiikkaa

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

/ xiqqaa adda addaatiif `fromTo` adda addaa qindeessuu dandeessa Agarsiisni akka armaan gadiitti : barreeffama.

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

Gabatee qindeessaa kana keessatti, afaan madda hiikkaa kataloogii `blog` `zh` yoo ta'u, afaan madda hiikkaa `blog/your_file_name.md` `ja` dha.

### Faayilii Tuffachuu

Akka durtiitti, faayilii hunduu galmee afaan madda keessaa `.md` fi `.yml` irraa jalqaban ni hiikamu.

Yoo faayilii murtaa'e bira darbuu fi hiikuu dhiisuu barbaadde (kan akka wixinee hin xumuramne), dirree `ignore` waliin qindeessuu dandeessa.

`ignore` `.gitignore` [globset](https://docs.rs/globset/latest/globset/#syntax)

Fakkeenyaaf, faayilii qindeessaa armaan olii keessatti `_* ` jechuun faayilii `_` jalqaban hin hiikaman jechuudha.

## Seera Hiikkaa

### Gulaaltonni Hiikkaa Sararoota Dabaluu Ykn Haquu Hin Qaban

Hiikkaan gulaalamuu danda'a. Barreeffama jalqabaa fooyyesiitii irra deebi'ii maashinii-hiikkaa, fooyya'iinsi harkaan hiikkaa irratti hin barreeffamu (yoo keeyyatni barruu jalqabaa kun hin fooyya'in).

Garuu sararoonni hiikkaa fi barreeffamni jalqabaa tokko tokkoon walsimuu akka qaban hubadhaa. Kunis, yeroo hiikkaa qindeessitu sararoota hin dabalin ykn hin haqin. Yoo kana hin taane, kaachota gulaaluu hiikkaa keessatti burjaajii ni fida.

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