# Instalar Y Utilizar

## windows Ñawpaqta git bash Nisqa Churay

windows Sistema, ama hina [kaspa kaypi ñit'iy ñawpaqta uraykachinaykipaq hinaspa churanaykipaq `git bash`](https://git-scm.com/download/win)

¡Qhipa llamk'aykunata purichiy `git bash`

## Churay

```sh
bash <(curl -sS https://i.i18n.site) i18
```

### Tikray Token Nisqa Wakichiy

Watukuy [i18n.site/token](//i18n.site/token)

<img src="https://p.3ti.site/1719911689.avif" style="max-width:400px">

Ruway `~/.config/i18n.site.yml` chayman copiasqa willayta k'askachiy, willakuyqa kayhinam:

```
token: YOUR_API_TOKEN
```

Chaymantapas, tarjeta crediticiata [i18n.site/payBill](//i18n.site/payBill) tiyan qullqita qunaykipaq (mana recarga necesitakunchu, web kitiqa kikinmanta qullqita qichunqa llamk'achisqamanhina, [qallariy p'anqata qhaway chaninkunapaq](/#price) ).

## Hapiy

### Proyecto Demostración Nisqa

Ama hina kaspa `i18` demo proyecto nisqapi qhaway tikraypa wakichiyninta yachanaykipaq [github.com/i18n-site/demo.i18](//github.com/i18n-site/demo.i18)

Chinapi llamk'aqkuna clonayta atinku [atomgit.com/i18n/demo.i18](//atomgit.com/i18n/demo.i18)

Clonación nisqamanta qhipaman, directorio nisqaman yaykuy hinaspa `i18`

### Directorio Nisqapa Estructura Nisqa

Plantilla almacén directorio estructuraqa kayhinam

```
┌── .i18n
│  └── conf.yml
└── en
   ├── _IgnoreDemoFile.md
   ├── i18n.yml
   └── README.md
```

`en`

### Traducciónta Purichiy

Directorioman yaykuy hinaspa `i18`

### Waqaychasqaman Willañiqikunata Yapay

Tikraymanta aswanta, programaqa kay willañiqikunatapas paqarichinqa, ama hina kaspa waqaychasqaman yapay.

```
.i18n/hash
.i18n/cache/.gitignore
```

: ukhupiqa `.i18n/cache/.gitignore`

```
**/*
!**/.gitignore
```

Kayqa `.i18n/cache/` willañiqintinpi llapa willañiqikunata mana qhawayta munan ( `.i18n/cache/.gitignore` mana).

Sichus laya kamachiy softwareyki mana `git`

## Wakichiy Willañiqi

`.i18n/conf.yml` `i18` chiru tikray yanapakuypa wakichiy willañiqim

Contenidoqa kayhinam:

```
i18n:
  fromTo:
    en: zh ja ko de fr
    # en:

ignore:
  - _*
```

### Pukyu & T'ikray Simi

Wakichiy willañiqipiqa, `fromTo`

`en` `zh ja ko de fr`

Simi codigo qhaway [i18n.site/i18/LANG_CODE](https://i18n.site/i18/LANG_CODE)

Ejemplopaq, chino simita inglés simiman t’ikrayta munanki chayqa, kay chiruta wakmanta qelqay `zh: en`

Llapan yanapasqa simikunaman tikrayta munaspaqa, `:` kay hina

```
i18n:
  fromTo:
    en:
```

### Willañiqita Mana Qhaway

Ñawpaqmanta, pukyuta simi qillqana mayt'upi `.md` `.yml` nisqawan qallariq llapa willañiqikuna t'ikrasqa kanqa.

Sichus wakin willañiqikunata mana qhawayta munankichu, manataq tikrayta munankichu (ahinataq mana tukusqa borradorkuna), `ignore`

`.gitignore` nisqaman rikch'akuq sintaxis [globset](https://docs.rs/globset/latest/globset/#syntax) llamk'achin `ignore`

Ejemplopaq, hawapi kaq wakichiy willañiqipiqa `_` nisqawan qallariq willañiqikunaqa manam tikrasqachu kanqa niyta `_* ` .

## Tikray Kamachiykuna

### Tikray Allichaqkunaqa Manam Chirukunata Yapanankuchu Nitaq Qullunankuchu

Chay tikrayqa allichanapaqmi. Ñawpaq qillqasqata tikray hinaspa hukmanta makinawan tikray, tikraypi makiwan tikraykunaqa manam hawanpi qillqasqachu kanqa (ñawpaq qillqasqapa kay parrafon mana tikrasqa kaptinqa).

Ichaqa ama hina kaspa reparay, t’ikrakusqanpa chirunkuna, original textopas hukmanta hukwan tupanan kasqanmanta. Chayqa, tikrayta huñuspaqa ama chirukunata yapaychu nitaq qulluychu. Mana hina kaqtinqa, t'ikray llamk'apuy waqaychanapi pantasqatam paqarichinqa.

Sichus imapas mana allinchu, ama hina kaspa [FAQ nisqapi qhaway allichaykunapaq.](/i18/qa#H1)

### `YAML` Tikray

Kamachiy chiru yanapakuyqa llapa willañiqikunatam tarinqa `.yml`

* Reparay, willañiqi sutip qhipanqa `.yml` (mana `.yaml` ) kanan tiyan.

Chay yanapakuyqa diccionario chanikunallatam tikran `.yml`

kay hina `i18n/en/i18n.yml`

```
apiToken: API Token
defaultToken: Default Token
```

t'ikrakunqa kay hinata `i18n/zh/i18n.yml`

```
apiToken: 接口令牌
defaultToken: 默认令牌
```

`YAML`

`YAML`

## Ñawpaqman Puriq Llamk’ay

### T’ikray Huch’uy Qillqana Mayt’u

Sichus `i18` `.i18n/conf.yml`

Kamachiy chiru yanapakuyqa `.i18n/conf.yml`

[monorepo](//monorepo.tools)

<img alt="" src="https://p.3ti.site/1719910016.avif">

### Sapanchasqa Churana Qillqana Mayt'u

Chayqa churasqa kanqa `/usr/local/bin`

`/usr/local/bin` qillqanapaq atiyniyuq kaptinqa `~/.bin` nisqamanmi churasqa kanqa.

Pachamama tikraqkunata churay Instalacionpa directoriota riqsichiyta atinki : ahinataq `TO`

```sh
TO=/bin sudo bash <(curl -sS https://i.i18n.site) i18
```
