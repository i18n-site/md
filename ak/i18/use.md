# Install Na Fa Di Dwuma

## windows Di Kan Instɔl git bash

windows , yɛsrɛ [wo klik ha na twe na install `git bash` kan](https://git-scm.com/download/win) .

Fa adwumayɛ a edi hɔ no tu mmirika wɔ `git bash` mu.

## Fa Sto So

```sh
bash <(curl -sS https://i.i18n.site) i18
```

### Hyehyɛ Nkyerɛase Token

Kɔ [i18n.site/token](//i18n.site/token) Klik na kɔpi token

<img src="https://p.3ti.site/1719911689.avif" style="width:400px">

Yɛ `~/.config/i18n.site.yml` , fa nsɛm a woayɛ no kɔpi no hyɛ mu, nsɛm no te sɛ nea edidi so yi:

```
token: YOUR_API_TOKEN
```

Bio nso [,](/#price) ɛsɛ sɛ wokyekyere credit card a wode tua ho ka wɔ [i18n.site/payBill](//i18n.site/payBill)

## Fa Di Dwuma

### Demo Adwuma No

Yɛsrɛ wo hwɛ [github.com/i18n-site/demo.i18](//github.com/i18n-site/demo.i18) project no so na sua nhyehyeɛ a ɛwɔ `i18` nkyerɛaseɛ mu.

Wɔn a wɔde di dwuma wɔ China betumi ayɛ clone [atomgit.com/i18n/demo.i18](//atomgit.com/i18n/demo.i18)

Sɛ wo cloning wie a, hyɛ directory no mu na tu mmirika `i18` na wie nkyerɛase no.

### Directory Nhyehyɛe

Template warehouse directory nhyehyɛe no te sɛ nea edidi so yi

```
┌── .i18n
│  └── conf.yml
└── en
   ├── _IgnoreDemoFile.md
   ├── i18n.yml
   └── README.md
```

Demo fael a wɔakyerɛ ase wɔ `en` directory no yɛ nhwɛsoɔ kɛkɛ na wobetumi apopa.

### Run Nkyerɛase

Hyehyɛ directory no mu na tu mmirika `i18` na kyerɛ ase.

Nkyerɛaseɛ no akyi no, dwumadie no nso bɛma `.i18n/data` folda no aba, yɛsrɛ wo fa ka akoraeɛ no ho.

Sɛ wokyerɛ fael foforo no ase wie a, wɔbɛyɛ data fael foforo wɔ saa daerekta yi mu Kae sɛ wode `git add . ` bɛka ho.

## Nsiesiei Fael

`.i18n/conf.yml` yɛ nhyehyeɛ fael a ɛwɔ `i18` ahyɛdeɛ kwan nkyerɛaseɛ adwinnadeɛ no mu

Nsɛm a ɛwɔ mu no te sɛ nea edidi so yi:

```
i18n:
  fromTo:
    en: zh ja ko de fr
    # en:

ignore:
  - _*
```

### Fibea Kasa &

Wɔ nhyehyeɛ fael no mu no, `fromTo` a ɛhyɛ aseɛ no :

`en` ne kasa a wɔde fibea, `zh ja ko de fr` ne kasa a wɔde rekɔ so wɔ nkyerɛase no mu.

Kasa ho mmara hwɛ [i18n.site/i18/LANG_CODE](https://i18n.site/i18/LANG_CODE)

Sɛ nhwɛso no, sɛ wopɛ sɛ wokyerɛ China kasa ase kɔ Borɔfo kasa mu a, san kyerɛw saa nkyerɛwde yi `zh: en` .

Sɛ wopɛ sɛ wokyerɛ ase kɔ kasa horow a wɔboa nyinaa mu a, yɛsrɛ wo gyaw kwan wɔ `:` akyi. Nhwɛsoɔ

```
i18n:
  fromTo:
    en:
```

Wubetumi asiesie `fromTo` ahorow ama subdirectories / Wɔakyerɛw ɔyɛkyerɛ bi sɛnea edidi so yi :

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

Wɔ nhyehyeɛ pon yi mu no, kasa a ɛfiri katalog `blog` nkyerɛaseɛ mu ne `zh` , na kasa a ɛfiri katalog `blog/your_file_name.md` nkyerɛaseɛ mu ne `ja` .

### Mfonini/Nkitahodi Ahorow a Wɔde Kasa Ahorow Pii Di Dwuma

Sɛ wɔhyehyɛ URL ahorow a ɛwɔ mfonini ahorow no mu ne nkitahodi ahorow a ɛwɔ `replace:` ne `MarkDown` mu (ne su ahorow `src` ne `href` a ɛwɔ embedded `HTML` mu) wɔ `.i18n/conf.yml` mu a, wɔde saa prefix yi besi kasa fibea koodu a ɛwɔ URL no mu no ananmu de kasa mmara a ɛwɔ nkyerɛase no mu ( [kasa koodu ahorow a wɔahyehyɛ](/i18/LANG_CODE) ).

Sɛ nhwɛso no, wo nhyehyɛe no te sɛ nea edidi so yi:

```yml
i18n:
  fromTo:
    fr: ko de en zh zh-TW uk ru ja
  replace:
    https://fcdoc.github.io/img/ : ko de uk>ru zh-TW>zh >en
```

`replace: ` yɛ nsɛm asekyerɛ nhoma, safoa no yɛ URL prefix a ɛsɛ sɛ wɔsesa, na botae no yɛ mmara a wɔde besi ananmu.

Nea ɛkyerɛ sɛ wɔde mmara `ko de uk>ru zh-TW>zh >en` a ɛwɔ atifi hɔ no besi ananmu ne sɛ `ko de` de wɔn ankasa kasa mmara mfonini di dwuma, `zh-TW` ne `zh` de `zh` mfonini di dwuma, `uk` de `ru` mfonini di dwuma, na kasa afoforo (te sɛ `ja` ) de mfonini no di dwuma of `en` denam default so.

Sɛ nhwɛso no, Franse ( `fr` ) fibea fael a ɛyɛ `MarkDown` no te sɛ nea edidi so yi :

```md
![xx](https://i18n-img.github.io/fr/1.avif)
<video src="https://i18n-img.github.io/fr/1.mp4"></video>
[xx](https://i18n-img.github.io/fr/README.md)
<a style="color:red" href="https://i18n-img.github.io/fr/i18n.site.gz">xx</a>
```

Borɔfo ( `en` ) fael a wɔakyerɛ ase na wɔayɛ no te sɛ nea edidi so yi :

```md
![xx](https://i18n-img.github.io/en/1.avif)
<video src="https://i18n-img.github.io/en/1.mp4"></video>
[xx](https://i18n-img.github.io/en/README.md)
<a style="color:red" href="https://i18n-img.github.io/en/i18n.site.gz">xx</a>
```

Ɛha yi, wɔde `/en/` a ɛwɔ kasa fibea koodu no mu no asi `/zh/` a ɛwɔ kasa a wɔde asi wɔn ani so no ananmu.

Hyɛ no nsow : Ɛsɛ sɛ `/` wɔ hɔ ansa na kasa koodu a ɛwɔ nkyerɛwee a wɔde asi ananmu no wɔ URL no mu.

> [!TIP]
> Sɛ wɔahyehyɛ `- /` wɔ `url:` mu a, akwan a ɛfa ho nkutoo na wɔbɛhyia, nanso URL ahorow a efi ase wɔ `//` no renhyia.
>
> Sɛ domain din bi link ahorow bi pɛ sɛ wɔsesa na ebinom nso mpɛ sɛ wɔsesa a, wubetumi de prefix ahorow te sɛ `[x](//x.com/en/)` ne `[x](https://x.com/en/)` adi dwuma de akyerɛ nsonsonoe a ɛda wɔn ntam.

### Bu W’ani Gu Fael So

Sɛnea wɔahyɛ no, wɔbɛkyerɛ fael ahorow a efi ase `.md` ne `.yml` wɔ kasa fibea kyerɛwtohɔ no mu nyinaa ase.

Sɛ wopɛ sɛ wubu w’ani gu fael ahorow bi so na woankyerɛ ase (te sɛ drafts a wonwiei) a, wubetumi de `ignore` field no asiesie.

`ignore` `.gitignore` [globset](https://docs.rs/globset/latest/globset/#syntax)

Sɛ nhwɛsoɔ no, `_* ` wɔ atifi hɔ nhyehyeɛ fael no mu kyerɛ sɛ fael a ɛfiri aseɛ wɔ `_` no renkyerɛ aseɛ.

## Nkyerɛase Ho Mmara

### Ɛnsɛ Sɛ Nkyerɛase Samufo De Nkyerɛwde Ka Ho Anaasɛ Wɔpopa

Nkyerɛase no yɛ nea wotumi sesa. Sesa mfitiase nkyerɛwee no na fa mfiri kyerɛ ase bio, wɔrenkyerɛw nsaano nsakrae a wɔayɛ wɔ nkyerɛase no mu no so (sɛ wɔansakra mfitiase nkyerɛwee no nkyekyem yi a).

> [!WARN]
> Ɛsɛ sɛ nkyerɛase no nkyerɛwde ne mfitiase nkyerɛwee no hyia mmiako mmiako. Ɛne sɛ, mfa nkyerɛwde nka ho anaa mpopa bere a woreboaboa nkyerɛase no ano no. Sɛ ɛnte saa a, ɛbɛma adwene atu afra wɔ nkyerɛaseɛ nsakraeɛ cache no mu.

Sɛ biribi ankɔ yiye a, yɛsrɛ wo hwɛ [FAQ no mu na woanya ano aduru.](/i18/qa#H1)

### `YAML` Nkyerɛase Ahorow

Ahyɛdeɛ kwan adwinnadeɛ no bɛhunu fael a ɛwie `.yml` nyinaa wɔ kasa fibea fael kyerɛwtohɔ no mu na akyerɛ aseɛ.

* Hyɛ no nsow sɛ ɛsɛ sɛ fael din akyigyinafo no yɛ `.yml` (ɛnyɛ `.yaml` ).

Adwinnade no kyerɛ nsɛm asekyerɛ nhoma no mu gyinapɛn ahorow no ase wɔ `.yml` mu nkutoo, ɛnyɛ nsɛm asekyerɛ nhoma no nsafe no.

Sɛ nhwɛso no `i18n/en/i18n.yml`

```
apiToken: API Token
defaultToken: Default Token
```

wɔbɛkyerɛ ase sɛ `i18n/zh/i18n.yml`

```
apiToken: 接口令牌
defaultToken: 默认令牌
```

Wobetumi nso de nsa asesa `YAML` nkyerɛase no (nanso mfa nsafe anaa nkyerɛwde nka ho anaa mpopa wɔ nkyerɛase no mu).

Gyina nkyerɛase `YAML` so no, ɛnyɛ den sɛ wobɛkyekye amanaman ntam ano aduru ama nhyehyɛe kasa ahorow.

## Nneɛma a Wɔde Di Dwuma a Ɛkɔ Akyiri

### Nkyerɛaseɛ Subdirectory

Bere tenten a wɔabɔ `.i18n/conf.yml` (ɛho nhia sɛ wofi ase fi demo project template so bere biara), `i18` bɛyɛ adwuma yiye.

Ahyɛdeɛ kwan adwinnadeɛ no bɛhunu nhyehyɛɛ `.i18n/conf.yml` wɔ subdirectories nyinaa mu na akyerɛ aseɛ.

Nnwuma a ɛde [monorepo](//monorepo.tools) architecture di dwuma no betumi akyekyɛ kasa fael ahorow mu ayɛ no subdirectories.

![](https://p.3ti.site/1719910016.avif)

### Custom Instɔlehyɛn Kyerɛwtohɔ

Wɔbɛhyehyɛ no akɔ `/usr/local/bin` default so.

Sɛ `/usr/local/bin` nni write permission a wɔde bɛhyɛ `~/.bin` so.

Setting environment variable `TO` betumi akyerɛkyerɛ instɔlehyɛn kyerɛwtohɔ no mu, sɛ nhwɛso no :

```sh
TO=/bin sudo bash <(curl -sS https://i.i18n.site) i18
```