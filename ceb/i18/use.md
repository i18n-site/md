# Pag-Instalar Ug Paggamit

## Una Nga Gi-Install Sa windows Ang git bash

windows Sistema, palihug [i-klik dinhi aron i-download ug i-install una `git bash`](https://git-scm.com/download/win) .

Pagdalagan sa sunod nga mga operasyon sa `git bash` .

## Pag-Instalar

```sh
bash <(curl -sS https://i.i18n.site) i18
```

### I-Configure Ang Token Sa Paghubad

Bisitaha ang [i18n.site/token](//i18n.site/token)

<img src="https://p.3ti.site/1719911689.avif" style="width:400px">

Paghimo og `~/.config/i18n.site.yml` , idikit ang gikopya nga sulod niini, ang sulod mao ang mosunod:

```
token: YOUR_API_TOKEN
```

Dugang pa, kinahanglan nimo nga igapos ang usa ka credit card [sa](/#price) pagbayad sa [i18n.site/payBill](//i18n.site/payBill)

## Paggamit

### Demo Nga Proyekto

Palihug tan-awa ang demo nga `i18` [github.com/i18n-site/demo.i18](//github.com/i18n-site/demo.i18)

Ang mga tiggamit sa China mahimong mag-clone [atomgit.com/i18n/demo.i18](//atomgit.com/i18n/demo.i18)

Human sa pag-clone, pagsulod sa direktoryo ug pagdagan `i18` aron makompleto ang paghubad.

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

Ang gihubad nga mga demo file sa `en` nga direktoryo usa lamang ka pananglitan ug mahimong mapapas.

### Dagan Ang Paghubad

Pagsulod sa direktoryo ug pagdagan `i18` aron maghubad.

Dugang sa paghubad, ang programa makamugna usab sa `.i18n/data` folder, palihug idugang kini sa repositoryo.

Human sa paghubad sa bag `git add . ` ong file, usa ka bag-ong data file ang mabuhat niini nga direktoryo.

## Pag-Configure Nga File

`.i18n/conf.yml` mao ang configuration file sa `i18` command line translation tool

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

Sa configuration file, ang subordinate sa `fromTo` :

`en` mao ang gigikanan nga pinulongan, `zh ja ko de fr` mao ang target nga pinulongan sa paghubad.

Kodigo sa pinulongan tan-awa [i18n.site/i18/LANG_CODE](https://i18n.site/i18/LANG_CODE)

Pananglitan, kung gusto nimong hubaron ang Intsik sa English, isulat pag-usab kini nga linya `zh: en` .

Kung gusto nimo maghubad sa tanan nga gisuportahan nga mga sinultian, palihug biyai nga blangko pagkahuman sa `:` . pananglitan

```
i18n:
  fromTo:
    en:
```

Mahimo nimong i-configure ang lainlaing `fromTo` : sa lainlaing mga subdirektoryo /

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

Niini nga lamesa sa pag-configure, ang gigikanan nga sinultian sa catalog `blog` nga paghubad mao ang `zh` , ug ang gigikanan nga sinultian sa catalog `blog/your_file_name.md` nga paghubad mao ang `ja` .

### Multilingual Nga Mga Hulagway/Mga Link

Kung ang mga URL sa mga litrato ug mga link sa `replace:` ug `MarkDown` (ug ang `src` ug `href` nga mga hiyas sa naka-embed `HTML` ) gi-configure sa `.i18n/conf.yml` nga adunay kini nga prefix, ang gigikanan nga code sa lengguwahe sa URL pulihan sa code sa lengguwahe sa paghubad ( [lengguwahe. listahan sa code](/i18/LANG_CODE) ).

Pananglitan, ang imong configuration mao ang mosunod:

```yml
i18n:
  fromTo:
    fr: ko de en zh zh-TW uk ru ja
  replace:
    https://fcdoc.github.io/img/ : ko de uk>ru zh-TW>zh >en
```

`replace: ` kay usa ka diksyonaryo, ang yawe mao ang URL prefix nga pulihan, ug ang bili mao ang puli nga lagda.

Ang kahulogan sa pag-ilis sa lagda `ko de uk>ru zh-TW>zh >en` sa ibabaw mao nga ang `ko de` naggamit sa hulagway sa ilang kaugalingong code sa pinulongan, `zh-TW` ug `zh` naggamit sa hulagway sa `zh` , `uk` naggamit sa hulagway sa `ru` , ug ang ubang mga pinulongan (sama sa `ja` ) naggamit sa hulagway sa `en` pinaagi sa default.

Pananglitan, ang French ( `fr` ) source file sa `MarkDown` mao ang mosunod :

```md
![xx](https://i18n-img.github.io/fr/1.avif)
<video src="https://i18n-img.github.io/fr/1.mp4"></video>
[xx](https://i18n-img.github.io/fr/README.md)
<a style="color:red" href="https://i18n-img.github.io/fr/i18n.site.gz">xx</a>
```

Ang gihubad ug namugna nga English ( `en` ) nga payl mao ang mosunod :

```md
![xx](https://i18n-img.github.io/en/1.avif)
<video src="https://i18n-img.github.io/en/1.mp4"></video>
[xx](https://i18n-img.github.io/en/README.md)
<a style="color:red" href="https://i18n-img.github.io/en/i18n.site.gz">xx</a>
```

Dinhi, `/en/` sa source language code gipulihan ug `/zh/` sa target nga lengguwahe.

Hinumdomi : Kinahanglan adunay `/` sa wala pa ug pagkahuman sa code sa lengguwahe sa gipuli nga teksto sa URL.

> [!TIP]
> Kung `- /` gi-configure sa `url:` , ang mga relatibong agianan ra ang ipares, apan ang mga URL nga nagsugod sa `//` dili ipares.
>
> Kung ang pipila ka mga link sa usa ka domain name gusto nga pulihan ug ang uban dili gusto nga pulihan, mahimo nimong gamiton ang lainlaing mga prefix sama sa `[x](//x.com/en/)` ug `[x](https://x.com/en/)` aron mailhan sila.

### Ibaliwala Ang File

Sa default, ang tanan nga mga file nga nagsugod sa `.md` ug `.yml` sa direktoryo sa gigikanan nga lengguwahe mahubad.

Kung gusto nimong ibaliwala ang pipila ka mga file ug dili kini hubaron (sama sa wala pa nahuman nga mga draft), mahimo nimo kini i-configure gamit ang `ignore` nga field.

`ignore` naggamit sa [globset](https://docs.rs/globset/latest/globset/#syntax) nga syntax sa `.gitignore` file.

Pananglitan, `_* ` sa ibabaw nga configuration file nagpasabot nga ang mga file nga nagsugod sa `_` dili mahubad.

## Mga Lagda Sa Paghubad

### Ang Mga Editor Sa Paghubad Kinahanglan Dili Magdugang O Magtangtang Sa Mga Linya

Ang hubad ma-edit. Usba ang orihinal nga teksto ug i-machine-translate kini pag-usab, ang manwal nga mga pagbag-o sa paghubad dili ma-overwrite (kung kini nga parapo sa orihinal nga teksto wala giusab).

> [!WARN]
> Kinahanglan adunay usa-sa-usa nga mga sulat tali sa mga linya sa hubad ug sa orihinal nga teksto. Sa ato pa, ayaw pagdugang o pagtangtang sa mga linya sa pag-compile sa hubad. Kung dili, kini makapahinabog kalibog sa cache sa pag-edit sa paghubad.

Kung adunay sayup, palihug tan-awa [ang FAQ alang sa mga solusyon.](/i18/qa#H1)

### `YAML` Nga Mga Hubad

Ang tool sa command line makit-an ang tanan nga mga file nga nagtapos sa `.yml` sa direktoryo sa file sa gigikanan nga sinultian ug hubaron kini.

* Timan-i nga ang suffix sa filename kinahanglan nga `.yml` (dili `.yaml` ).

Ang himan naghubad lamang sa mga bili sa diksyonaryo sa `.yml` , dili ang mga yawe sa diksyonaryo.

Pananglitan `i18n/en/i18n.yml`

```
apiToken: API Token
defaultToken: Default Token
```

hubaron nga `i18n/zh/i18n.yml`

```
apiToken: 接口令牌
defaultToken: 默认令牌
```

Ang paghubad sa `YAML` mahimo usab nga usbon sa mano-mano (apan ayaw pagdugang o pagtangtang sa mga yawe o linya sa paghubad).

Pinasukad sa `YAML` nga paghubad, dali ka makahimo og internasyonal nga mga solusyon alang sa lainlaing mga sinultian sa programming.

## Advanced Nga Paggamit

### Subdirektoryo Sa Paghubad

Hangtud nga gihimo `.i18n/conf.yml` (dili kinahanglan nga magsugod gikan sa template sa proyekto sa demo matag higayon), `i18` molihok nga maayo.

Ang tool sa command line makit-an `.i18n/conf.yml` nga mga pag-configure sa tanan nga mga subdirectory ug hubaron kini.

Ang mga proyekto nga naggamit sa [monorepo](//monorepo.tools)

![](https://p.3ti.site/1719910016.avif)

### Pasadya Nga Direktoryo Sa Pag-Install

Kini i-install sa `/usr/local/bin` pinaagi sa default.

Kung `/usr/local/bin` walay pagtugot sa pagsulat kini ma-install sa `~/.bin` .

Ang pagtakda sa variable sa palibot `TO` mahimong maghubit sa direktoryo sa pag-install, pananglitan :

```sh
TO=/bin sudo bash <(curl -sS https://i.i18n.site) i18
```