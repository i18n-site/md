# Fe'uu Fi Itti Fayyadamuu

## windows Jalqaba git bash Fe'A

windows , mee [as tuquun dursa buufachuu fi install godhaa `git bash`](https://git-scm.com/download/win)

Hojiiwwan itti aanan `git bash`

## Itti Fe'uu

```sh
bash <(curl -sS https://i.i18n.site) i18
```

### Mallattoo Hiikkaa Qindeessuu

[i18n.site/token](//i18n.site/token) Token copy gochuuf cuqaasaa

<img src="https://p.3ti.site/1719911689.avif" style="max-width:400px">

Uumuu `~/.config/i18n.site.yml` qabiyyee waraabame itti maxxansi, qabiyyeen isaa akka armaan gadiitti:

```
token: YOUR_API_TOKEN
```

Dabalataanis, kaffaltiidhaaf kaardii liqii hidhuu [i18n.site/payBill](//i18n.site/payBill) (kaffaltiin irra deebiin hin barbaachisu, marsariitichi akka itti fayyadamaatti ofumaan kaffaltii ni hir'isa, [gatii ilaaluuf fuula jalqabaa ilaali](/#price) ).

## Fayyadamuu

### Pirojektii Agarsiisaa

Mee qindeessaa hiikkaa baruuf pirojektii demo `i18` [github.com/i18n-site/demo.i18](//github.com/i18n-site/demo.i18)

Fayyadamtoonni Chaayinaa keessa jiran clone gochuu danda'u [atomgit.com/i18n/demo.i18](//atomgit.com/i18n/demo.i18)

Erga kloonii gootee booda, galmee seeniitii hiikkaa xumuruuf `i18`

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

Galmeen `en` faayiloota demoo hiikaman of keessaa qaba, isaanis fakkeenya qofa fi haqamuu danda'u.

### Hiikkaa Fiigi

Galmee galchiiti hiikuuf `i18`

### Faayilota Gara Kuusaatti Dabali

Hiikkaa malees sagantichi faayiloota armaan gadii ni maddisiisa, maaloo gara kuusaatti dabali.

```
.i18n/hash
.i18n/cache/.gitignore
```

: keessaa qabiyyeen `.i18n/cache/.gitignore`

```
**/*
!**/.gitignore
```

Kana jechuun faayilii `.i18n/cache/.gitignore` galmee `.i18n/cache/`

Yoo sooftiweeriin to'annoo version keessan hin taane `git` maaloo akka qindeessaa kanaatti bira darbi.

## Faayilii Qindeessaa

`.i18n/conf.yml` Faayila qindeessaa meeshaa hiikkaa sarara `i18`

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

Faayilii qindeessaa keessatti, jalaa `fromTo`

`en` madda, `zh ja ko de fr` afaan hiikkaa xiyyeeffannoodha.

Koodii afaanii ilaali [i18n.site/i18/LANG_CODE](https://i18n.site/i18/LANG_CODE)

Fakkeenyaaf, Chaayinaa gara Afaan Oromootti hiikuu yoo barbaadde, sarara kana irra deebi'ii barreessi `zh: en`

Yoo afaanota deeggaraman hundaatti hiikuu barbaadde, maaloo booda duwwaa dhiisi `:` Fakkeenyaaf

```
i18n:
  fromTo:
    en:
```

### Faayilii Tuffachuu

Akka durtiitti, faayilii galmee afaan madda keessaa `.md` fi `.yml` irraa jalqaban hundi ni hiikamu.

Yoo faayilii murtaa'e tuffachuu fi hiikuu dhiisuu barbaadde (kan akka wixinee hin xumuramne), qindeessaa dirree `ignore`

`ignore` `.gitignore` wajjin walfakkaatu fayyadama [globset](https://docs.rs/globset/latest/globset/#syntax)

Fakkeenyaaf, faayilii qindeessaa `_` olii keessatti `_* `

## Seera Hiikkaa

### Gulaaltonni Hiikkaa Sararoota Dabaluu Ykn Haquu Hin Qaban

Hiikkaan gulaalamuu danda'a. Barreeffama jalqabaa fooyyessaa fi irra deebi'ii maashiniin hiiku, fooyya'iinsi harkaan hiikkaa irratti hin barreeffamu (yoo keeyyatni barruu jalqabaa kun hin fooyya'in).

Garuu sararoonni hiikkaa fi barreeffamni jalqabaa tokko tokkoon walsimuu akka qaban hubadhaa. Kunis, yeroo hiikkaa qindeessitu sararoota hin dabalin ykn hin haqin. Yoo kana hin taane, kaachota gulaaluu hiikkaa keessatti burjaajii ni fida.

Yoo wanti tokko dogoggora ta'e, [furmaata argachuuf FAQ ilaalaa.](/i18/qa#H1)

### `YAML` Hiikuu

Meeshaan sarara ajajaa faayilii hunda galmee faayilii afaan madda keessatti `.yml`

* Hubadhaa, xumura maqaa faayilii `.yml` ( `.yaml` miti) ta'uu qaba.

Meeshaan gatiiwwan galmee jechootaa qofa `.yml` hiika malee furtuuwwan galmee jechootaa miti.

Fakkeenyaaf `i18n/en/i18n.yml`

```
apiToken: API Token
defaultToken: Default Token
```

jedhamee hiikama `i18n/zh/i18n.yml`

```
apiToken: 接口令牌
defaultToken: 默认令牌
```

Hiikkaa `YAML`

`YAML` irratti hundaa'uun, afaanota sagantaa adda addaatiif furmaata idil-addunyaa salphaatti ijaaruu dandeessu.

## Fayyadama Sadarkaa Olaanaa

### Galmee Xiqqaa Hiikkaa

`i18` `.i18n/conf.yml`

Meeshaan sarara ajajaa qindeessaa `.i18n/conf.yml` galmeewwan xiqqaa hunda keessatti argatee ni hiika.

Pirojektoonni arkiteekcharii [monorepo](//monorepo.tools)

<img alt="" src="https://p.3ti.site/1719910016.avif">

### Galmee Fe'iinsa Amala

Akka durtiitti gara `/usr/local/bin`

`/usr/local/bin` hayyama barreessuu hin qabne gara `~/.bin` tti ni fe'ama.

Jijjiiramoota naannoo saagi Galmee fe'iinsaa : dandeessa, fakkeenyaaf `TO`

```sh
TO=/bin sudo bash <(curl -sS https://i.i18n.site) i18
```
