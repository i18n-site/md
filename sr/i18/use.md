# Инсталирајте И Користите

## Виндовс Прво Инсталира Гит Басх

windows , [кликните овде да прво преузмете и инсталирате `git bash`](https://git-scm.com/download/win) !

Покрени следеће операције у `git bash` .

## Инсталирај

```sh
bash <(curl -sS https://i.i18n.site) i18
```

### Конфигуришите Преводни Токен

Посетите [i18n.site/token](//i18n.site/token)

<img src="https://p.3ti.site/1719911689.avif" style="width:400px">

Направите `~/.config/i18n.site.yml` , налепите копирани садржај у њега, садржај је следећи:

```
token: YOUR_API_TOKEN
```

Поред тога [,](/#price) морате да повежете платну кредитну картицу у [i18n.site/payBill](//i18n.site/payBill)

## Користити

### Демо Пројекат

Молимо погледајте демо пројекат [github.com/i18n-site/demo.i18](//github.com/i18n-site/demo.i18) научите конфигурацију `i18` превода.

Корисници у Кини могу да клонирају [atomgit.com/i18n/demo.i18](//atomgit.com/i18n/demo.i18)

Након клонирања, уђите у директоријум и покрените `i18` да бисте довршили превод.

### Структура Именика

Структура директоријума складишта шаблона је следећа

```
┌── .i18n
│  └── conf.yml
└── en
   ├── _IgnoreDemoFile.md
   ├── i18n.yml
   └── README.md
```

Преведене демо датотеке у директоријуму `en` су само пример и могу се избрисати.

### Покрени Превод

Унесите директоријум и покрените `i18` да бисте превели.

Поред превода, програм ће такође генерисати фасциклу `.i18n/data` , додајте је у спремиште.

Након превођења нове датотеке, нова датотека са подацима ће бити генерисана у овом директоријуму. Не заборавите да додате `git add . ` .

## Конфигурациони Фајл

`.i18n/conf.yml` је конфигурациона датотека алата за превођење командне линије `i18`

Садржај је следећи:

```
i18n:
  fromTo:
    en: zh ja ko de fr
    # en:

ignore:
  - _*
```

### Изворни Језик &

У конфигурационој датотеци, подређени од `fromTo` :

`en` је изворни језик, `zh ja ko de fr` је циљни језик превода.

Шифра језика види [i18n.site/i18/LANG_CODE](https://i18n.site/i18/LANG_CODE)

На пример, ако желите да преведете кинески на енглески, препишите овај ред `zh: en` .

Ако желите да преведете на све подржане језике, оставите празно после `:` . на пример

```
i18n:
  fromTo:
    en:
```

Можете да конфигуришете различите `fromTo` за различите поддиректорије / Демонстрација је написана на следећи начин :

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

У овој табели конфигурације, изворни језик превода каталога `blog` је `zh` , а изворни језик превода каталога `blog/your_file_name.md` је `ja` .

### Вишејезичне Слике/Линкови

Када су УРЛ-ови на сликама и линкови у `replace:` и `MarkDown` (и атрибути `src` и `href` уграђеног `HTML` ) конфигурисани у `.i18n/conf.yml` са овим префиксом, код изворног језика у УРЛ-у ће бити замењен кодом језика превода ( [језик шифрарник](/i18/LANG_CODE) ).

На пример, ваша конфигурација је следећа:

```yml
i18n:
  fromTo:
    fr: ko de en zh zh-TW uk ru ja
  replace:
    https://fcdoc.github.io/img/ : ko de uk>ru zh-TW>zh >en
```

`replace: ` је речник, кључ је УРЛ префикс који треба заменити, а вредност је правило замене.

Значење замене правила `ko de uk>ru zh-TW>zh >en` изнад је да `ko de` користи слику сопственог језичког кода, `zh-TW` и `zh` користе слику `zh` , `uk` користи слику `ru` , а други језици (као што је `ja` ) користе слику од `en` подразумевано.

На пример, француски ( `fr` ) изворни фајл од `MarkDown` је следећи :

```md
![xx](https://i18n-img.github.io/fr/1.avif)
<video src="https://i18n-img.github.io/fr/1.mp4"></video>
[xx](https://i18n-img.github.io/fr/README.md)
<a style="color:red" href="https://i18n-img.github.io/fr/i18n.site.gz">xx</a>
```

Преведена и генерисана датотека на енглеском ( `en` ) је следећа :

```md
![xx](https://i18n-img.github.io/en/1.avif)
<video src="https://i18n-img.github.io/en/1.mp4"></video>
[xx](https://i18n-img.github.io/en/README.md)
<a style="color:red" href="https://i18n-img.github.io/en/i18n.site.gz">xx</a>
```

Овде се `/en/` у коду изворног језика замењују са `/zh/` на циљном језику.

: Мора бити `/` пре и после кода језика замењеног текста у УРЛ-у!

> [!TIP]
> Ако је `- /` конфигурисан у `url:` , само релативне путање ће се подударати, али УРЛ-ови који почињу са `//` неће се подударати.
>
> Ако неке везе имена домена желе да буду замењене, а неке не желе да буду замењене, можете користити различите префиксе као што су `[x](//x.com/en/)` и `[x](https://x.com/en/)` да бисте их разликовали.

### Игнорисати Датотеку

Подразумевано, све датотеке које почињу са `.md` и `.yml` у директоријуму изворног језика биће преведене.

Ако желите да игноришете одређене датотеке и да их не преводите (као што су недовршени нацрти), можете да их конфигуришете помоћу поља `ignore` .

`ignore` користи [globset](https://docs.rs/globset/latest/globset/#syntax) синтаксу као и датотека `.gitignore` .

На пример, `_* ` у горњој конфигурационој датотеци значи да датотеке које почињу са `_` неће бити преведене.

## Правила Превођења

### Уредници Превода Не Би Требало Да Додају Или Бришу Редове

Превод се може уређивати. Измените оригинални текст и поново га машински преведите, ручне измене превода неће бити преписане (ако овај пасус оригиналног текста није измењен).

> [!WARN]
> Мора постојати једна-на-један кореспонденција између редова превода и оригиналног текста. То јест, немојте додавати или брисати редове приликом састављања превода. У супротном, то ће изазвати забуну у кешу за уређивање превода.

Ако нешто крене наопако, погледајте [ФАК за решења.](/i18/qa#H1)

### `YAML` Превода

Алат командне линије ће пронаћи све датотеке које се завршавају са `.yml` у директоријуму датотека изворног језика и превести их.

* Имајте на уму да суфикс имена датотеке мора бити `.yml` (не `.yaml` ).

Алат само преводи вредности речника у `.yml` , а не и кључеве речника.

На пример `i18n/en/i18n.yml`

```
apiToken: API Token
defaultToken: Default Token
```

биће преведено као `i18n/zh/i18n.yml`

```
apiToken: 接口令牌
defaultToken: 默认令牌
```

Превод `YAML` се такође може мењати ручно (али немојте додавати или брисати кључеве или редове у преводу).

На основу `YAML` превода, лако можете изградити међународна решења за различите програмске језике.

## Напредно Коришћење

### Поддиректориј Превода

Све док се креира `.i18n/conf.yml` (нема потребе да се сваки пут полази од шаблона демо пројекта), `i18` ће радити добро.

Алат командне линије ће пронаћи `.i18n/conf.yml` конфигурација у свим поддиректоријумима и превести их.

Пројекти који користе архитектуру [monorepo](//monorepo.tools) могу поделити језичке датотеке у поддиректоријуме.

![](https://p.3ti.site/1719910016.avif)

### Прилагођени Директоријум За Инсталацију

Подразумевано ће бити инсталиран на `/usr/local/bin` .

Ако `/usr/local/bin` нема дозволу за писање, биће инсталиран на `~/.bin` .

Постављање променљиве окружења `TO` може да дефинише инсталациони директоријум, на пример :

```sh
TO=/bin sudo bash <(curl -sS https://i.i18n.site) i18
```