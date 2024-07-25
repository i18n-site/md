# Nruab Thiab Siv

## windows Ua Ntej Nruab git bash

windows System, thov [nyem qhov no mus download tau thiab nruab ua ntej `git bash`](https://git-scm.com/download/win)

Khiav cov haujlwm tom ntej hauv `git bash`

## Nruab

```sh
bash <(curl -sS https://i.i18n.site) i18
```

### Configure Translation Token

Mus saib [i18n.site/token](//i18n.site/token) Nyem rau luam theej duab

<img src="https://p.3ti.site/1719911689.avif" style="max-width:400px">

Tsim `~/.config/i18n.site.yml` muab cov ntsiab lus theej rau hauv nws, cov ntsiab lus yog raws li hauv qab no:

```
token: YOUR_API_TOKEN
```

Tsis tas li ntawd, koj yuav tsum [i18n.site/payBill](//i18n.site/payBill) khi ib daim npav rho nyiaj rau kev them nyiaj (tsis tas yuav them rov qab, lub vev xaib yuav txiav tawm tus nqi raws li kev siv, [saib lub vev xaib rau tus nqi](/#price) ).

## Siv

### Demo Qhov Project

Thov xa `i18` rau qhov project demo [github.com/i18n-site/demo.i18](//github.com/i18n-site/demo.i18)

Cov neeg siv hauv Suav teb tuaj yeem clone [atomgit.com/i18n/demo.i18](//atomgit.com/i18n/demo.i18)

Tom qab cloning, nkag mus rau hauv phau ntawv qhia thiab khiav `i18`

### Directory Structure

Lub template warehouse directory qauv yog raws li nram no

```
┌── .i18n
│  └── conf.yml
└── en
   ├── _IgnoreDemoFile.md
   ├── i18n.yml
   └── README.md
```

Daim ntawv qhia `en`

### Khiav Kev Txhais Lus

Nkag mus rau hauv phau ntawv qhia thiab khiav `i18`

### Ntxiv Cov Ntaub Ntawv Rau Lub Chaw Cia Khoom

Ntxiv nrog rau kev txhais lus, qhov kev zov me nyuam tseem yuav tsim cov ntaub ntawv hauv qab no, thov ntxiv rau hauv qhov chaw cia khoom.

```
.i18n/hash
.i18n/cache/.gitignore
```

Ntawm : , cov ntsiab lus ntawm `.i18n/cache/.gitignore`

```
**/*
!**/.gitignore
```

Qhov no txhais tau tias tsis quav ntsej tag nrho cov ntaub ntawv hauv phau ntawv teev `.i18n/cache/` (tshwj tsis yog `.i18n/cache/.gitignore` ).

Yog tias koj qhov kev tswj hwm software tsis `git` , thov tsis quav ntsej nws raws li qhov kev teeb tsa no.

## Configuration File

`.i18n/conf.yml` `i18`

Cov ntsiab lus yog raws li nram no:

```
i18n:
  fromTo:
    en: zh ja ko de fr
    # en:

ignore:
  - _*
```

### Lus Txhais &

Nyob rau hauv cov ntaub ntawv configuration, subordinates ntawm `fromTo`

`en` yog hom lus, `zh ja ko de fr` yog hom lus ntawm kev txhais lus.

Lus code saib [i18n.site/i18/LANG_CODE](https://i18n.site/i18/LANG_CODE)

Piv txwv li, yog tias koj xav txhais lus Suav ua lus Askiv, rov sau cov kab no `zh: en`

Yog tias koj xav txhais rau txhua yam lus txhawb nqa, thov tso tseg tom qab `:` piv txwv

```
i18n:
  fromTo:
    en:
```

### Tsis Quav Ntsej Cov Ntaub Ntawv

Los ntawm lub neej ntawd, `.yml` nrho cov ntaub ntawv pib nrog `.md`

Yog tias koj xav tsis quav ntsej qee cov ntaub ntawv thiab tsis txhais lawv (xws li cov ntawv sau tsis tiav), koj tuaj yeem siv qhov chaw teeb tsa `ignore`

`ignore` Siv cov syntax zoo ib yam li `.gitignore` [globset](https://docs.rs/globset/latest/globset/#syntax)

Piv txwv li, hauv cov ntaub ntawv teeb tsa saum toj `_* ` txhais tau tias cov ntaub ntawv pib nrog `_` yuav tsis raug txhais.

## Txoj Cai Txhais Lus

### Cov Neeg Txhais Lus Yuav Tsum Tsis Txhob Ntxiv Lossis Rho Tawm Kab

Kev txhais lus yog kho tau. Hloov kho cov ntawv qub thiab tshuab-txhais nws dua, phau ntawv hloov kho rau kev txhais lus yuav tsis raug sau dua (yog tias kab lus no ntawm cov ntawv qub tsis tau hloov kho).

Tab sis thov nco ntsoov tias cov kab ntawm kev txhais lus thiab cov ntawv qub yuav tsum sib haum ib leeg. Ntawd yog, tsis txhob ntxiv lossis rho tawm kab thaum sau cov lus txhais. Txwv tsis pub, nws yuav ua rau tsis meej pem hauv kev txhais lus kho cache.

Yog tias muaj qee yam tsis raug, thov xa mus rau [FAQ rau kev daws teeb meem.](/i18/qa#H1)

### `Yaml`

Cov kab hais kom ua yuav pom tag nrho cov ntaub ntawv xaus nrog `.yml`

* Nco ntsoov tias cov npe ntawm cov ntawv yuav tsum yog `.yml` (tsis yog `.yaml` ).

Cov cuab yeej tsuas txhais cov phau ntawv txhais lus muaj nuj nqis hauv `.yml`

ua np `i18n/en/i18n.yml`

```
apiToken: API Token
defaultToken: Default Token
```

yuav txhais li cas `i18n/zh/i18n.yml`

```
apiToken: 接口令牌
defaultToken: 默认令牌
```

Kev txhais lus ntawm `YAML` kuj tuaj yeem hloov kho manually (tab sis tsis txhob ntxiv lossis rho tawm cov yuam sij lossis kab hauv kev txhais lus).

Raws li `YAML` txhais lus, koj tuaj yeem tsim cov kev daws teeb meem thoob ntiaj teb yooj yim rau ntau hom lus programming.

## Kev Siv Advanced

### Txhais Lus Subdirectory

Tsuav `i18` tsim `.i18n/conf.yml`

Cov cuab yeej hais kom ua kab yuav pom `.i18n/conf.yml` kev teeb tsa hauv txhua qhov subdirectories thiab txhais nws.

Tej yaam num uas siv lub [monorepo](//monorepo.tools)

<img alt="" src="https://p.3ti.site/1719910016.avif">

### Custom Installation Directory

Nws yuav raug ntsia rau `/usr/local/bin`

Yog `/usr/local/bin` tsis muaj kev tso cai sau nws yuav raug teeb tsa rau `~/.bin` .

Teem ib puag : hloov pauv `TO`

```sh
TO=/bin sudo bash <(curl -sS https://i.i18n.site) i18
```
