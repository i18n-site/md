# I-Install at Gamitin

## Unang I-Install Ng windows Ang git bash

windows System, mangyaring [mag-click dito upang i-download at i-install muna `git bash`](https://git-scm.com/download/win) .

Patakbuhin ang mga kasunod na operasyon sa `git bash` .

## I-Install

```sh
bash <(curl -sS https://i.i18n.site) i18
```

### I-Configure Ang Token Ng Pagsasalin

Bisitahin ang [i18n.site/token](//i18n.site/token) I-click upang kopyahin ang token

<img src="https://p.3ti.site/1719911689.avif" style="width:400px">

Lumikha ng `~/.config/i18n.site.yml` , i-paste ang kinopyang nilalaman dito, ang nilalaman ay ang mga sumusunod:

```
token: YOUR_API_TOKEN
```

Bilang karagdagan, kailangan mong itali ang isang credit card [sa](/#price) pagbabayad sa [i18n.site/payBill](//i18n.site/payBill)

## Gamitin

### Demo Na Proyekto

Mangyaring sumangguni sa proyekto ng demo [github.com/i18n-site/demo.i18](//github.com/i18n-site/demo.i18) matutunan ang pagsasaayos ng `i18` pagsasalin.

Maaaring i-clone ng mga user sa China [atomgit.com/i18n/demo.i18](//atomgit.com/i18n/demo.i18)

Pagkatapos ng pag-clone, ipasok ang direktoryo at patakbuhin `i18` upang makumpleto ang pagsasalin.

### Istraktura Ng Direktoryo

Ang istraktura ng direktoryo ng bodega ng template ay ang mga sumusunod

```
┌── .i18n
│  └── conf.yml
└── en
   ├── _IgnoreDemoFile.md
   ├── i18n.yml
   └── README.md
```

Ang mga isinaling demo file sa `en` na direktoryo ay isang halimbawa lamang at maaaring tanggalin.

### Patakbuhin Ang Pagsasalin

Ipasok ang direktoryo at patakbuhin `i18` upang isalin.

Bilang karagdagan sa pagsasalin, bubuo din ang programa ng `.i18n/data` folder, mangyaring idagdag ito sa repositoryo.

Pagkatapos isalin ang bagong file, bubuo ng bagong data file sa direktoryong ito Tandaang idagdag ang `git add . ` .

## File Ng Configuration

`.i18n/conf.yml` ay ang configuration file ng `i18` command line translation tool

Ang nilalaman ay ang mga sumusunod:

```
i18n:
  fromTo:
    en: zh ja ko de fr
    # en:

ignore:
  - _*
```

### Wikang Pinagmulan &

Sa configuration file, ang subordinate ng `fromTo` :

`en` ang pinagmulang wika, `zh ja ko de fr` ang target na wika ng pagsasalin.

Code ng wika tingnan [i18n.site/i18/LANG_CODE](https://i18n.site/i18/LANG_CODE)

Halimbawa, kung gusto mong isalin ang Chinese sa English, muling isulat ang linyang ito `zh: en` .

Kung gusto mong magsalin sa lahat ng sinusuportahang wika, mangyaring iwanang blangko pagkatapos ng `:` . halimbawa

```
i18n:
  fromTo:
    en:
```

Maaari mong i-configure ang iba't ibang `fromTo` : sa iba't ibang mga subdirectory na Mga File /

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

Sa configuration table na ito, ang source language ng catalog `blog` translation ay `zh` , at ang source language ng catalog `blog/your_file_name.md` translation ay `ja` .

### Multilingual Na Mga Imahe/Link

Kapag ang mga URL sa mga larawan at link sa `replace:` at `MarkDown` (at ang `src` at `href` na katangian ng naka-embed `HTML` ) ay na-configure sa `.i18n/conf.yml` gamit ang prefix na ito, ang source language code sa URL ay papalitan ng language code ng pagsasalin ( [wika listahan ng code](/i18/LANG_CODE) ).

Halimbawa, ang iyong configuration ay ang mga sumusunod:

```yml
i18n:
  fromTo:
    fr: ko de en zh zh-TW uk ru ja
  replace:
    https://fcdoc.github.io/img/ : ko de uk>ru zh-TW>zh >en
```

`replace: ` ay isang diksyunaryo, ang susi ay ang URL prefix na papalitan, at ang value ay ang kapalit na panuntunan.

Ang kahulugan ng pagpapalit ng panuntunan `ko de uk>ru zh-TW>zh >en` sa itaas ay ang `ko de` ay gumagamit ng larawan ng kanilang sariling code ng wika, `zh-TW` at `zh` ay gumagamit ng larawan ng `zh` , `uk` ay gumagamit ng larawan ng `ru` , at iba pang mga wika (tulad ng `ja` ) ay gumagamit ng larawan ng `en` bilang default.

Halimbawa, ang French ( `fr` ) source file ng `MarkDown` ay ang mga sumusunod :

```md
![xx](https://i18n-img.github.io/fr/1.avif)
<video src="https://i18n-img.github.io/fr/1.mp4"></video>
[xx](https://i18n-img.github.io/fr/README.md)
<a style="color:red" href="https://i18n-img.github.io/fr/i18n.site.gz">xx</a>
```

Ang isinalin at nabuong English ( `en` ) na file ay ang mga sumusunod :

```md
![xx](https://i18n-img.github.io/en/1.avif)
<video src="https://i18n-img.github.io/en/1.mp4"></video>
[xx](https://i18n-img.github.io/en/README.md)
<a style="color:red" href="https://i18n-img.github.io/en/i18n.site.gz">xx</a>
```

Dito, `/en/` sa source language code ay pinapalitan ng `/zh/` sa target na wika.

Tandaan : Dapat mayroong `/` bago at pagkatapos ng code ng wika ng pinalitan na teksto sa URL.

> [!TIP]
> Kung `- /` ay iko-configure sa `url:` , ang mga kamag-anak na landas lamang ang tutugma, ngunit ang mga URL na nagsisimula sa `//` ay hindi tutugma.
>
> Kung ang ilang link ng isang domain name ay gustong palitan at ang ilan ay ayaw palitan, maaari kang gumamit ng iba't ibang prefix gaya ng `[x](//x.com/en/)` at `[x](https://x.com/en/)` upang makilala ang mga ito.

### Huwag Pansinin Ang File

Bilang default, ang lahat ng mga file na nagsisimula sa `.md` at `.yml` sa direktoryo ng pinagmulang wika ay isasalin.

Kung gusto mong balewalain ang ilang partikular na file at hindi isalin ang mga ito (gaya ng mga hindi natapos na draft), maaari mo itong i-configure gamit ang `ignore` na field.

`ignore` ay gumagamit ng parehong [globset](https://docs.rs/globset/latest/globset/#syntax) syntax bilang ang `.gitignore` file.

Halimbawa, `_* ` sa configuration file sa itaas ay nangangahulugan na ang mga file na nagsisimula sa `_` ay hindi isasalin.

## Mga Panuntunan Sa Pagsasalin

### Ang Mga Editor Ng Pagsasalin Ay Hindi Dapat Magdagdag O Magtanggal Ng Mga Linya

Maaaring i-edit ang pagsasalin. Baguhin ang orihinal na teksto at i-machine-translate itong muli, ang mga manu-manong pagbabago sa pagsasalin ay hindi mapapatungan (kung ang talatang ito ng orihinal na teksto ay hindi pa nabago).

> [!WARN]
> Dapat mayroong isa-sa-isang pagsusulatan sa pagitan ng mga linya ng pagsasalin at ng orihinal na teksto. Ibig sabihin, huwag magdagdag o magtanggal ng mga linya kapag kino-compile ang pagsasalin. Kung hindi, magdudulot ito ng kalituhan sa cache ng pag-edit ng pagsasalin.

Kung may mali, mangyaring sumangguni sa [FAQ para sa mga solusyon.](/i18/qa#H1)

### `YAML` Pagsasalin

Hahanapin ng command line tool ang lahat ng file na nagtatapos sa `.yml` sa source language file directory at isasalin ang mga ito.

* Tandaan na ang suffix ng filename ay dapat na `.yml` (hindi `.yaml` ).

Isinasalin lamang ng tool ang mga halaga ng diksyunaryo sa `.yml` , hindi ang mga key ng diksyunaryo.

Halimbawa `i18n/en/i18n.yml`

```
apiToken: API Token
defaultToken: Default Token
```

isasalin bilang `i18n/zh/i18n.yml`

```
apiToken: 接口令牌
defaultToken: 默认令牌
```

Ang pagsasalin ng `YAML` ay maaari ding baguhin nang manu-mano (ngunit huwag magdagdag o magtanggal ng mga susi o linya sa pagsasalin).

Batay sa `YAML` na pagsasalin, madali kang makakagawa ng mga internasyonal na solusyon para sa iba't ibang mga programming language.

## Advanced Na Paggamit

### Subdirectory Ng Pagsasalin

Hangga't `.i18n/conf.yml` ay nilikha (hindi na kailangang magsimula sa demo project template sa bawat oras), `i18` ay gagana nang maayos.

Ang command line tool ay makakahanap ng `.i18n/conf.yml` configuration sa lahat ng mga subdirectory at isasalin ang mga ito.

Maaaring hatiin ng mga proyektong gumagamit ng [monorepo](//monorepo.tools) arkitekturang wika sa mga subdirectory.

![](https://p.3ti.site/1719910016.avif)

### Custom Na Direktoryo Ng Pag-Install

Ito ay mai-install sa `/usr/local/bin` bilang default.

Kung `/usr/local/bin` ay walang pahintulot sa pagsulat, mai-install ito sa `~/.bin` .

Ang pagtatakda ng variable ng kapaligiran `TO` ay maaaring tukuyin ang direktoryo ng pag-install, halimbawa :

```sh
TO=/bin sudo bash <(curl -sS https://i.i18n.site) i18
```