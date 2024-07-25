# Pag-Instalar Ug Paggamit

## Una Nga Gi-Install Sa windows Ang git bash

windows Sistema, palihug [i-klik dinhi aron ma-download ug i-install una `git bash`](https://git-scm.com/download/win)

Pagdalagan sa sunod nga mga operasyon sa `git bash`

## Pag-Instalar

```sh
bash <(curl -sS https://i.i18n.site) i18
```

### I-Configure Ang Token Sa Paghubad

Bisitaha ang [i18n.site/token](//i18n.site/token)

<img src="https://p.3ti.site/1719911689.avif" style="max-width:400px">

Paghimo `~/.config/i18n.site.yml` idikit ang gikopya nga sulud niini, ang sulud mao ang mosunod:

```
token: YOUR_API_TOKEN
```

Dugang pa, kinahanglan nimo [i18n.site/payBill](//i18n.site/payBill) igapos ang usa ka credit card alang sa pagbayad (wala’y kinahanglan nga pag-recharge, ang website awtomatiko nga mag-deduct sa mga bayad sumala sa paggamit, [tan-awa ang homepage alang sa pagpresyo](/#price) ).

## Paggamit

### Demo Nga Proyekto

Palihog `i18` - awa ang demo project [github.com/i18n-site/demo.i18](//github.com/i18n-site/demo.i18)

Ang mga tiggamit sa China mahimong mag-clone [atomgit.com/i18n/demo.i18](//atomgit.com/i18n/demo.i18)

Pagkahuman sa pag-clone, pagsulod sa direktoryo ug pagdagan `i18`

### Istruktura Sa Direktoryo

Ang istruktura sa direktoryo sa bodega sa template mao ang mosunod

```
┌── .i18n
│  └── conf.yml
└── en
   ├── _IgnoreDemoFile.md
   ├── i18n.yml
   └── README.md
```

Ang `en` nga direktoryo naglangkob sa gihubad nga mga demo file, nga usa lamang ka pananglitan ug mahimong mapapas.

### Dagan Ang Paghubad

Pagsulod sa direktoryo ug pagdagan `i18`

### Idugang Ang Mga File Sa Repository

Dugang pa sa paghubad, ang programa makamugna usab sa mosunod nga mga file, palihug idugang kini sa repositoryo.

```
.i18n/hash
.i18n/cache/.gitignore
```

Lakip : , ang sulod sa `.i18n/cache/.gitignore`

```
**/*
!**/.gitignore
```

Nagpasabot kini nga ibaliwala ang tanan nga mga file sa `.i18n/cache/` (gawas `.i18n/cache/.gitignore` ).

Kung ang imong bersyon sa pagkontrol sa software dili `git` , palihog ibaliwala kini sumala sa kini nga configuration.

## Pag-Configure Nga File

`.i18n/conf.yml` Kini ang configuration file sa `i18` line translation tool

Ang sulod mao ang mosunod:

```
i18n:
  fromTo:
    en: zh ja ko de fr
    # en:

ignore:
  - _*
```

### Pinulongan Nga Gigikanan &

Sa configuration file, ang mga sakop sa `fromTo`

`en` mao ang gigikanan nga lengguwahe, `zh ja ko de fr` ang target nga lengguwahe sa paghubad.

Kodigo sa pinulongan tan-awa [i18n.site/i18/LANG_CODE](https://i18n.site/i18/LANG_CODE)

Pananglitan, kung gusto nimong hubaron ang Intsik sa English, isulat pag-usab kini nga linya `zh: en`

Kung gusto nimo maghubad sa tanan nga gisuportahan nga mga sinultian, palihug biyai nga blangko pagkahuman sa `:` . pananglitan

```
i18n:
  fromTo:
    en:
```

### Ibaliwala Ang File

Sa default, ang tanan nga mga file nga nagsugod sa `.md` ug `.yml` sa gigikanan nga direktoryo sa sinultian mahubad.

Kung gusto nimong ibaliwala ang pipila ka mga file ug dili kini hubaron (sama sa wala pa nahuman nga mga draft), mahimo nimong gamiton ang configuration sa field `ignore`

Naggamit `ignore` syntax nga susama sa `.gitignore` [globset](https://docs.rs/globset/latest/globset/#syntax)

Pananglitan, sa ibabaw nga configuration file `_* ` nagpasabot nga ang mga file nga nagsugod sa `_` dili mahubad.

## Mga Lagda Sa Paghubad

### Ang Mga Editor Sa Paghubad Kinahanglan Dili Magdugang O Magtangtang Sa Mga Linya

Ang hubad ma-edit. Usba ang orihinal nga teksto ug i-machine-translate kini pag-usab, ang manwal nga mga pagbag-o sa paghubad dili ma-overwrite (kung kini nga parapo sa orihinal nga teksto wala giusab).

Apan palihug timan-i nga ang mga linya sa hubad ug ang orihinal nga teksto kinahanglang motakdo sa usa ngadto sa usa. Sa ato pa, ayaw pagdugang o pagtangtang sa mga linya sa pag-compile sa hubad. Kung dili, kini makapahinabog kalibog sa cache sa pag-edit sa paghubad.

Kung adunay sayup, palihug tan-awa [ang FAQ alang sa mga solusyon.](/i18/qa#H1)

### `Yaml`

Ang himan sa command line makit-an ang tanan nga mga file nga nagtapos sa `.yml`

* Timan-i nga ang suffix sa ngalan sa file kinahanglan nga `.yml` (dili `.yaml` ).

Ang himan naghubad lamang sa mga bili sa diksyonaryo sa `.yml` , dili ang mga yawe sa diksyonaryo.

pananglitan `i18n/en/i18n.yml`

```
apiToken: API Token
defaultToken: Default Token
```

hubaron nga `i18n/zh/i18n.yml`

```
apiToken: 接口令牌
defaultToken: 默认令牌
```

Ang paghubad sa `YAML`

Base sa `YAML` Translation, dali ka makabuhat ug internasyonal nga mga solusyon alang sa lain-laing mga programming language.

## Advanced Nga Paggamit

### Subdirektoryo Sa Paghubad

Hangtud nga maghimo ka `.i18n/conf.yml` (dili kinahanglan nga magsugod gikan sa template sa proyekto sa demo matag higayon), `i18` molihok nga maayo.

Ang command line tool mangita sa `.i18n/conf.yml`

Ang mga proyekto nga naggamit sa [monorepo](//monorepo.tools)

<img alt="" src="https://p.3ti.site/1719910016.avif">

### Pasadya Nga Direktoryo Sa Pag-Install

Kini i-install sa `/usr/local/bin`

`/usr/local/bin` wala'y pagtugot sa pagsulat kini ma-install sa `~/.bin` .

Itakda ang mga variable sa palibot `TO` Mahimo nimong ipasabut ang direktoryo sa pag-install, pananglitan :

```sh
TO=/bin sudo bash <(curl -sS https://i.i18n.site) i18
```
