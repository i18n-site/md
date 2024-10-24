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

Bilang [i18n.site/payBill](//i18n.site/payBill) , kailangan mong itali ang isang credit card para sa pagbabayad (walang recharge ang kinakailangan, ang website ay awtomatikong magbawas ng mga bayarin ayon sa paggamit, [tingnan ang homepage para sa pagpepresyo](/#price) ).

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

Maaaring i : configure ang iba't ibang `fromTo` para sa iba't ibang mga subdirectory /

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

Sa talahanayan ng pagsasaayos na ito, ang pinagmulang wika para sa pagsasalin ng direktoryo `blog` ay `zh` , at ang pinagmulang wika para sa pagsasalin ng direktoryo `blog/your_file_name.md` ay `ja` .

### Huwag Pansinin Ang File

Bilang default, ang lahat ng mga file na nagsisimula sa `.md` at `.yml` sa direktoryo ng pinagmulang wika ay isasalin.

Kung gusto mong balewalain ang ilang partikular na file at hindi isalin ang mga ito (tulad ng mga hindi natapos na draft), maaari mong gamitin ang `ignore` field configuration.

`ignore` ay gumagamit ng parehong [globset](https://docs.rs/globset/latest/globset/#syntax) syntax bilang ang `.gitignore` file.

Halimbawa, `_* ` sa configuration file sa itaas ay nangangahulugan na ang mga file na nagsisimula sa `_` ay hindi isasalin.

## Mga Panuntunan Sa Pagsasalin

### Ang Mga Editor Ng Pagsasalin Ay Hindi Dapat Magdagdag O Magtanggal Ng Mga Linya

Maaaring i-edit ang pagsasalin. Baguhin ang orihinal na teksto at i-machine-translate itong muli, ang mga manu-manong pagbabago sa pagsasalin ay hindi mapapatungan (kung ang talatang ito ng orihinal na teksto ay hindi pa nabago).

> [!WARN]
> Ang mga linya ng pagsasalin at ang orihinal na teksto ay dapat na tumutugma sa isa sa isa. Ibig sabihin, huwag magdagdag o magtanggal ng mga linya kapag kino-compile ang pagsasalin. Kung hindi, magdudulot ito ng kalituhan sa cache ng pag-edit ng pagsasalin.

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