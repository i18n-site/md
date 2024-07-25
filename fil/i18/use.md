# I-Install at Gamitin

## Unang I-Install Ng windows Ang git bash

windows System, mangyaring [mag-click dito upang i-download at i-install muna `git bash`](https://git-scm.com/download/win)

Patakbuhin ang mga kasunod na operasyon sa `git bash`

## I-Install

```sh
bash <(curl -sS https://i.i18n.site) i18
```

### I-Configure Ang Token Ng Pagsasalin

Bisitahin ang [i18n.site/token](//i18n.site/token) I-click upang kopyahin ang token

<img src="https://p.3ti.site/1719911689.avif" style="max-width:400px">

Lumikha `~/.config/i18n.site.yml` i-paste ang kinopyang nilalaman dito, ang nilalaman ay ang mga sumusunod:

```
token: YOUR_API_TOKEN
```

Bilang karagdagan, kailangan mong [i18n.site/payBill](//i18n.site/payBill) ng isang credit card para sa pagbabayad (walang kinakailangang recharge, ang website ay awtomatikong magbawas ng mga bayarin ayon sa paggamit, [tingnan ang homepage para sa pagpepresyo](/#price) ).

## Gamitin

### Demo Na Proyekto

Mangyaring sumangguni sa proyekto [github.com/i18n-site/demo.i18](//github.com/i18n-site/demo.i18) demo upang malaman ang pagsasaayos ng pagsasalin `i18`

Maaaring i-clone ng mga user sa China [atomgit.com/i18n/demo.i18](//atomgit.com/i18n/demo.i18)

Pagkatapos ng pag-clone, ipasok ang direktoryo at patakbuhin ang `i18`

### Istruktura Ng Direktoryo

Ang istraktura ng direktoryo ng bodega ng template ay ang mga sumusunod

```
┌── .i18n
│  └── conf.yml
└── en
   ├── _IgnoreDemoFile.md
   ├── i18n.yml
   └── README.md
```

Ang `en` na direktoryo ay naglalaman ng mga isinaling demo file, na isang halimbawa lamang at maaaring tanggalin.

### Patakbuhin Ang Pagsasalin

Ipasok ang direktoryo at patakbuhin ang `i18`

### Magdagdag Ng Mga File Sa Repositoryo

Bilang karagdagan sa pagsasalin, bubuo din ang programa ng mga sumusunod na file, mangyaring idagdag ang mga ito sa repositoryo.

```
.i18n/hash
.i18n/cache/.gitignore
```

Kabilang sa : ito, ang nilalaman ng `.i18n/cache/.gitignore`

```
**/*
!**/.gitignore
```

Nangangahulugan ito na huwag pansinin ang lahat ng mga file sa `.i18n/cache/` (maliban sa `.i18n/cache/.gitignore` ).

Kung ang iyong version control software ay hindi `git` , mangyaring huwag pansinin ito ayon sa configuration na ito.

## File Ng Configuration

`.i18n/conf.yml` Ito ay ang configuration file ng `i18` line translation tool

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

Sa configuration file, ang mga subordinates ng `fromTo`

`en` ay ang pinagmulang wika, `zh ja ko de fr` ang target na wika ng pagsasalin.

Code ng wika tingnan [i18n.site/i18/LANG_CODE](https://i18n.site/i18/LANG_CODE)

Halimbawa, kung gusto mong isalin ang Chinese sa English, isulat muli ang linyang ito `zh: en`

Kung gusto mong magsalin sa lahat ng sinusuportahang wika, mangyaring iwanang blangko pagkatapos ng `:` Halimbawa

```
i18n:
  fromTo:
    en:
```

### Huwag Pansinin Ang File

Bilang default, ang lahat ng mga file na nagsisimula sa `.md` at `.yml` sa direktoryo ng pinagmulang wika ay isasalin.

Kung gusto mong huwag pansinin ang ilang mga file at hindi isalin ang mga ito (tulad ng mga hindi natapos na draft), maaari mong gamitin ang configuration ng field na `ignore`

`ignore` Gumagamit ng syntax na katulad ng `.gitignore` [globset](https://docs.rs/globset/latest/globset/#syntax)

Halimbawa, sa itaas na configuration file `_* ` nangangahulugan na ang mga file na nagsisimula sa `_` ay hindi isasalin.

## Mga Panuntunan Sa Pagsasalin

### Ang Mga Editor Ng Pagsasalin Ay Hindi Dapat Magdagdag O Magtanggal Ng Mga Linya

Maaaring i-edit ang pagsasalin. Baguhin ang orihinal na teksto at i-machine-translate itong muli, ang mga manu-manong pagbabago sa pagsasalin ay hindi mai-overwrite (kung ang talatang ito ng orihinal na teksto ay hindi nabago).

Ngunit mangyaring tandaan na ang mga linya ng pagsasalin at ang orihinal na teksto ay dapat na tumutugma sa isa sa isa. Ibig sabihin, huwag magdagdag o magtanggal ng mga linya kapag kino-compile ang pagsasalin. Kung hindi, magdudulot ito ng kalituhan sa cache ng pag-edit ng pagsasalin.

Kung may mali, mangyaring sumangguni [sa FAQ para sa mga solusyon.](/i18/qa#H1)

### `YAML` Isalin

Hahanapin ng command line tool ang lahat ng mga file na nagtatapos sa `.yml`

* Tandaan na ang suffix ng pangalan ng file ay dapat na `.yml` (hindi `.yaml` ).

Ang tool ay nagsasalin lamang ng mga halaga ng diksyunaryo sa `.yml` , hindi ang mga susi ng diksyunaryo.

Halimbawa `i18n/en/i18n.yml`

```
apiToken: API Token
defaultToken: Default Token
```

ay isasalin bilang `i18n/zh/i18n.yml`

```
apiToken: 接口令牌
defaultToken: 默认令牌
```

Ang pagsasalin ng `YAML`

Batay sa `YAML` Translation, madali kang makabuo ng mga internasyonal na solusyon para sa iba't ibang mga programming language.

## Advanced Na Paggamit

### Subdirectory Ng Pagsasalin

Hangga't lumikha ka ng `.i18n/conf.yml` (hindi na kailangang magsimula sa template ng demo na proyekto sa bawat oras), gagana nang maayos `i18` .

Hahanapin ng command line tool ang `.i18n/conf.yml` configuration sa lahat ng mga subdirectory at isasalin ito.

Maaaring hatiin ng mga proyektong gumagamit ng [monorepo](//monorepo.tools) arkitekturang wika sa mga subdirectory.

<img alt="" src="https://p.3ti.site/1719910016.avif">

### Custom Na Direktoryo Ng Pag-Install

Ito ay mai-install sa `/usr/local/bin`

`/usr/local/bin` walang pahintulot sa pagsulat ito ay mai-install sa `~/.bin` .

Itakda ang mga variable ng kapaligiran `TO` Maaari mong tukuyin ang direktoryo ng pag-install, halimbawa :

```sh
TO=/bin sudo bash <(curl -sS https://i.i18n.site) i18
```
