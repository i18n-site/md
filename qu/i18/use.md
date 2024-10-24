# Instalar Y Utilizar

## windows Ñawpaqta git bash Nisqa Churay

windows Sistema, ama hina kaspa [kaypi ñit'iy `git bash` ñawpaqta uraykachinaykipaq chaymanta churanaykipaq](https://git-scm.com/download/win) .

Qhipa llamk'aykunata `git bash` nisqapi purichiy.

## Churay

```sh
bash <(curl -sS https://i.i18n.site) i18
```

### Tikray Token Nisqa Wakichiy

Watukuy [i18n.site/token](//i18n.site/token)

<img src="https://p.3ti.site/1719911689.avif" style="width:400px">

`~/.config/i18n.site.yml` kamay, chayman copiasqa kaqta k'askachiy, contenidoqa kayhinam:

```
token: YOUR_API_TOKEN
```

[i18n.site/payBill](//i18n.site/payBill) , tarjeta crediticiata watanayki tiyan qullqita qunaykipaq (mana recarga necesitakunchu, web kitiqa kikinmanta qullqita qichunqa llamk'achisqamanhina, [qallariy p'anqata qhaway chaninkunapaq](/#price) ).

## Hapiy

### Proyecto Demostración Nisqa

Ama hina kaspa `i18` qhaway proyecto demo [github.com/i18n-site/demo.i18](//github.com/i18n-site/demo.i18)

Chinapi llamk'aqkuna clonayta atinku [atomgit.com/i18n/demo.i18](//atomgit.com/i18n/demo.i18)

Clonación nisqamanta qhipaman, directorioman yaykuy hinaspa `i18` purichiy tikrayta tukunaykipaq.

### Directorio Nisqapa Ruwaynin

Plantilla almacén directorio estructuraqa kayhinam

```
┌── .i18n
│  └── conf.yml
└── en
   ├── _IgnoreDemoFile.md
   ├── i18n.yml
   └── README.md
```

`en` sutiyuq qillqana mayt'upi tikrasqa demo willañiqikunaqa huk rikch'anallam, qullusqa kanman.

### Traducciónta Purichiy

Directorioman yaykuy hinaspa `i18` purichiy tikraypaq.

Tikraymanta aswanta, programaqa `.i18n/data` qillqana mayt'utapas paqarichinqa, ama hina kaspa waqaychasqaman yapay.

Musuq willañiqita tikraspaqa, musuq willay willañiqim kay willañiqintinpi paqarichisqa kanqa `git add . ` yapayta yuyariy.

## Wakichiy Willañiqi

`.i18n/conf.yml` nisqaqa `i18` kamachiy chiru tikray yanapakuypa wakichiy willañiqim

Contenidoqa kayhinam:

```
i18n:
  fromTo:
    en: zh ja ko de fr
    # en:

ignore:
  - _*
```

### Pukyu Simi T'ikray &

Wakichiy willañiqipiqa, `fromTo` nisqap kamachisqan :

`en` simiqa pukyu simi, `zh ja ko de fr` t’ikraypa munasqa simi.

Simi codigo qhaway [i18n.site/i18/LANG_CODE](https://i18n.site/i18/LANG_CODE)

Ejemplopaq, chino simita inglés simiman t’ikrayta munanki chayqa, kay chiruta wakmanta qelqay `zh: en` .

Llapan yanapasqa simikunaman tikrayta munaspaqa, `:` nisqamanta qhipaman ch'usaq saqiy. kay hina

```
i18n:
  fromTo:
    en:
```

Huk rikch'aq `fromTo` hukniray huch'uy qillqana / wakichiyta atinki Huk rikuchiy kayhinata qillqasqa :

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

Kay wakichiy tablapiqa, catálogo `blog` tikraypa pukyu siminqa `zh` , catálogo `blog/your_file_name.md` tikraypa pukyuta simitaq `ja` .

### Willañiqita Mana Qhaway

Ñawpaqmanta, llapa willañiqikuna `.md` , `.yml` nisqawan qallariq pukyu simi qillqana mayt'upi t'ikrasqa kanqa.

Sichus wakin willañiqikunata mana qhawayta munankichu, manataq tikrayta munankichu (ahinataq mana tukusqa borradorkuna), `ignore` pampa wakichiyta llamk'achiy atikunki.

`ignore` [globset](https://docs.rs/globset/latest/globset/#syntax) sintaxis `.gitignore` willañiqiwan llamk'achin.

Ejemplopaq, `_* ` hawapi wakichiy willañiqipi `_` kaqwan qallariq willañiqikuna mana tikrasqachu kanqa niyta munan.

## Tikray Kamachiykuna

### Tikray Allichaqkunaqa Manam Chirukunata Yapanankuchu Nitaq Qullunankuchu

Chay tikrayqa allichanapaqmi. Ñawpaq qillqasqata tikray hinaspa hukmanta makinawan tikray, tikraypi makiwan tikraykunaqa manam hawanpi qillqasqachu kanqa (ñawpaq qillqasqapa kay parrafon mana tikrasqa kaptinqa).

> [!WARN]
> Traducciónpa chirunkunapas, original textopas hukmanta hukninmanmi tupanan. Chayqa, tikrayta huñuspaqa ama chirukunata yapaychu nitaq qulluychu. Mana hina kaqtinqa, t'ikray llamk'apuy waqaychanapi pantasqatam paqarichinqa.

Sichus imapas mana allinchu, ama hina kaspa [FAQ nisqapi qhaway allichaykunapaq.](/i18/qa#H1)

### `YAML` T'ikraykuna

Kamachiy chiru yanapakuyqa `.yml` nisqawan tukuq llapa willañiqikunatam pukyu simi willañiqi qillqana mayt'upi tarinqa, t'ikranqa.

* Willañiqip sutinpa k'askaqninqa `.yml` (mana `.yaml` ) kananmanta qhaway.

Chay yanapakuyqa `.yml` nisqapi simi pirwa chanikunallatam tikran, manam simi pirwapa llavenkunatachu.

Ejemplopaq `i18n/en/i18n.yml`

```
apiToken: API Token
defaultToken: Default Token
```

`i18n/zh/i18n.yml` nisqamanmi t’ikrakunqa

```
apiToken: 接口令牌
defaultToken: 默认令牌
```

`YAML` tikrayqa makiwanpas hukchasqa kanman (ichaqa ama tikraypi llavekunata icha chirukunata yapaychu icha qulluychu).

`YAML` tikraypi hapipakuspa, imaymana programacion simikunapaq internacional solucionkunata mana sasachakuspalla ruwayta atikunki.

## Ñawpaqman Puriq Llamk’ay

### T’ikray Huch’uy Qillqana Mayt’u

`.i18n/conf.yml` ruwasqa kaptinkama (mana sapa kuti plantilla proyecto demostracionmanta qallarinachu), `i18` allinta llamkanqa.

Kamachiy chiru yanapakuyqa `.i18n/conf.yml` ruwanakunata llapa huch'uy qillqana mayt'ukunapi tarinqa chaymanta tikranqa.

[monorepo](//monorepo.tools)

![](https://p.3ti.site/1719910016.avif)

### Sapanchasqa Churana Qillqana Mayt'u

`/usr/local/bin` nisqamanmi churasqa kanqa ñawpaqmanta.

`/usr/local/bin` mana qillqanapaq atiyniyuq kaptinqa `~/.bin` nisqamanmi churasqa kanqa.

Pachamama tikraq `TO` churayqa churana willañiqita riqsichiyta atin, ahinataq :

```sh
TO=/bin sudo bash <(curl -sS https://i.i18n.site) i18
```