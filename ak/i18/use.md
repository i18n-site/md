# Install Na Fa Di Dwuma

## windows Di Kan Instɔl git bash

windows , yɛsrɛ wo [klik ha na di kan twe na fa gu so `git bash`](https://git-scm.com/download/win)

Run oprehyɛn ahorow a edi hɔ wɔ `git bash`

## Fa Sto So

```sh
bash <(curl -sS https://i.i18n.site) i18
```

### Hyehyɛ Nkyerɛase Token

Kɔ [i18n.site/token](//i18n.site/token) Klik na kɔpi token

<img src="https://p.3ti.site/1719911689.avif" style="max-width:400px">

Create `~/.config/i18n.site.yml` fa nsɛm a woayɛ no kɔpi no hyɛ mu, nsɛm no te sɛ nea edidi so yi:

```
token: YOUR_API_TOKEN
```

Bio nso, ɛsɛ sɛ [i18n.site/payBill](//i18n.site/payBill) credit card de tua ka (ɛho nhia sɛ wosan tua ho ka, wɛbsaet no bɛtwe sika a wɔbɔ no ankasa sɛnea wɔde di dwuma, [hwɛ homepage no so na woahu ne bo](/#price) ).

## Fa Di Dwuma

### Demo Adwuma No

Yɛsrɛ wo hwɛ demo project [github.com/i18n-site/demo.i18](//github.com/i18n-site/demo.i18) so na sua nkyerɛase no nhyehyɛe `i18`

Wɔn a wɔde di dwuma wɔ China betumi ayɛ clone [atomgit.com/i18n/demo.i18](//atomgit.com/i18n/demo.i18)

Sɛ woyɛ cloning wie a, hyɛn directory no mu na tu mmirika `i18`

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

`en` directory no kura demo fael ahorow a wɔakyerɛ ase, a ɛyɛ nhwɛso ara kwa na wobetumi apopa.

### Run Nkyerɛase

Hyehyɛ directory no mu na tu mmirika `i18`

### Fa Fael Ahorow Ka Adekorabea No Ho

Nkyerɛaseɛ akyi no, dwumadie no nso bɛma fael a ɛdidi soɔ yi aba, yɛsrɛ wo fa ka akoraeɛ no ho.

```
.i18n/hash
.i18n/cache/.gitignore
```

Wɔn mu : , nsɛm a ɛwɔ `.i18n/cache/.gitignore`

```
**/*
!**/.gitignore
```

Wei kyerɛ sɛ bu w’ani gu fael a ɛwɔ `.i18n/cache/` directory no mu nyinaa so (gye `.i18n/cache/.gitignore` ).

Sɛ wo version control software no nyɛ `git`

## Nsiesiei Fael

`.i18n/conf.yml` Ɛyɛ `i18` line nkyerɛase adwinnade no nhyehyɛe fael

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

Wɔ nhyehyeɛ fael no mu no, `fromTo`

`en` `zh ja ko de fr`

Kasa ho mmara hwɛ [i18n.site/i18/LANG_CODE](https://i18n.site/i18/LANG_CODE)

Sɛ nhwɛso no, sɛ wopɛ sɛ wokyerɛ China kasa ase kɔ Borɔfo kasa mu a, san kyerɛw saa nkyerɛwde yi `zh: en`

Sɛ wopɛ sɛ wokyerɛ ase kɔ kasa horow a wɔboa nyinaa mu a, yɛsrɛ wo gyaw kwan wɔ `:` Nhwɛsoɔ

```
i18n:
  fromTo:
    en:
```

### Bu W’ani Gu Fael So

Sɛnea wɔahyɛ no, fael ahorow a efi ase wɔ `.md` ne `.yml` a ɛwɔ kasa fibea kyerɛwtohɔ no mu nyinaa bɛkyerɛ ase.

Sɛ wopɛ sɛ wubu w’ani gu fael ahorow bi so na woankyerɛ ase (te sɛ nkyerɛwee a wonwiei) a, wubetumi de `ignore`

`ignore` kasamufa a ɛte sɛ `.gitignore` di dwuma [globset](https://docs.rs/globset/latest/globset/#syntax)

Sɛ nhwɛso no, wɔ atifi hɔ nhyehyɛe fael no mu `_* ` kyerɛ sɛ fael ahorow a efi ase `_` renkyerɛ ase.

## Nkyerɛase Ho Mmara

### Ɛnsɛ Sɛ Nkyerɛase Samufo De Nkyerɛwde Ka Ho Anaasɛ Wɔpopa

Nkyerɛase no yɛ nea wotumi sesa. Sesa mfitiase nkyerɛwee no na fa mfiri kyerɛ ase bio, wɔrenkyerɛw nsaano nsakrae a wɔayɛ wɔ nkyerɛase no mu no so (sɛ wɔansakra mfitiase nkyerɛwee no nkyekyem yi a).

Nanso yɛsrɛ sɛ hyɛ no nsow sɛ ɛsɛ sɛ nkyerɛase no mu nkyerɛwde ne mfitiase nkyerɛwee no hyia biako ne biako. Ɛne sɛ, mfa nkyerɛwde nka ho anaa mpopa bere a woreboaboa nkyerɛase no ano no. Sɛ ɛnte saa a, ɛbɛma adwene atu afra wɔ nkyerɛaseɛ nsakraeɛ cache no mu.

Sɛ biribi ankɔ yiye a, yɛsrɛ wo hwɛ [FAQ no mu na woanya ano aduru.](/i18/qa#H1)

### `YAML` Kyerɛ Aseɛ

Ahyɛdeɛ kwan adwinnadeɛ no bɛhunu fael a ɛde `.yml`

* Hyɛ no nsow sɛ ɛsɛ sɛ fael din akyigyinafo no yɛ `.yml` (ɛnyɛ `.yaml` ).

Adwinnade no kyerɛ nsɛm asekyerɛ nhoma no mu gyinapɛn ahorow no ase wɔ `.yml`

Nhwɛsoɔ `i18n/en/i18n.yml`

```
apiToken: API Token
defaultToken: Default Token
```

wɔbɛkyerɛ ase sɛ `i18n/zh/i18n.yml`

```
apiToken: 接口令牌
defaultToken: 默认令牌
```

Wobetumi de nsa nso asesa `YAML`

Wogyina `YAML`

## Nneɛma a Wɔde Di Dwuma a Ɛkɔ Akyiri

### Nkyerɛaseɛ Subdirectory

Bere tenten a wobɛbɔ `.i18n/conf.yml` (ɛho nhia sɛ wufi ase fi demo project template so bere biara), `i18` bɛyɛ adwuma yiye.

Ahyɛdeɛ kwan adwinnadeɛ no bɛhunu `.i18n/conf.yml` nhyehyɛɛ no ​​wɔ subdirectories nyinaa mu na akyerɛ aseɛ.

Nnwuma a ɛde [monorepo](//monorepo.tools) architecture di dwuma no betumi akyekyɛ kasa fael ahorow mu ayɛ no subdirectories.

<img alt="" src="https://p.3ti.site/1719910016.avif">

### Custom Instɔlehyɛn Kyerɛwtohɔ

Wɔbɛhyehyɛ no akɔ `/usr/local/bin`

`~/.bin` `/usr/local/bin`

Set environment `TO` Wubetumi akyerɛkyerɛ instɔlehyɛn kyerɛwtohɔ no mu, sɛ nhwɛso no :

```sh
TO=/bin sudo bash <(curl -sS https://i.i18n.site) i18
```
