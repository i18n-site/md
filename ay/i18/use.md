# Instalación Ukat Apnaqaña

## windows Ukax Nayraqat git bash Ukar Uñt’ayi

windows Sistema, [aka tuqir ch’iqt’am `git bash` nayraqat apkatañataki ukat instalañataki](https://git-scm.com/download/win) .

Qhipa lurawinakaruxa `git bash` .

## Uchaña

```sh
bash <(curl -sS https://i.i18n.site) i18
```

### Jaqukipaña Token Uñakipaña

¡Visita [i18n.site/token](//i18n.site/token)

<img src="https://p.3ti.site/1719911689.avif" style="width:400px">

`~/.config/i18n.site.yml` luraña, copiata uka tuqiru lip’kataña, ukaxa akhamawa:

```
token: YOUR_API_TOKEN
```

Ukhamarus [,](/#price) tarjeta de crédito de pago ukarux [i18n.site/payBill](//i18n.site/payBill)

## Apnaqaña

### Proyecto Demostración Ukax Mä Jach’a Uñacht’äwiwa

[github.com/i18n-site/demo.i18](//github.com/i18n-site/demo.i18) Uka proyecto demostración ukar uñakipt’añamawa, `i18` jaqukipäwin configuración ukar yatxatañataki.

China markan apnaqirinakax clonación lurapxaspawa [atomgit.com/i18n/demo.i18](//atomgit.com/i18n/demo.i18)

Clonación ukxaruxa, directorio ukar mantañawa ukatxa `i18` ukjawa jaqukipaña tukuyañatakixa.

### Directorio Ukana Lurawipa

Plantilla almacén directorio ukan estructurapax akhamawa

```
┌── .i18n
│  └── conf.yml
└── en
   ├── _IgnoreDemoFile.md
   ├── i18n.yml
   └── README.md
```

`en` directorio ukan jaqukipat demostración qillqatanakax mä uñacht’äwikiwa ukatx chhaqtayatäspawa.

### Jaqukipaña T’ijt’ayaña

Directorio ukar mantam ukat `i18` ukar jaqukipañatakix t’ijt’añamawa.

Jaqukipañat sipansa, programax `.i18n/data` carpeta uñstayaraki, ukax imañ utar yapxatañamawa.

Machaq qillqat jaqukipañ tukuyatatxa, machaq yatiyaw qillqataw aka directorio ukan lurasini Amtañani `git add . ` yapxataña.

## Configuración Sata Qillqata

`.i18n/conf.yml` ukax `i18` kamachi chimpu jaqukipañ herramienta ukan configuración arxiwuwa

Uka tuqitxa akhamawa:

```
i18n:
  fromTo:
    en: zh ja ko de fr
    # en:

ignore:
  - _*
```

### Uñstayiri Aru &

Uka configuración qillqatanxa, subordinado ukax `fromTo` :

`en` ukax phuqhat aru, `zh ja ko de fr` ukax jaqukipañan amtañ arupawa.

Arunak uñt'ayañani [i18n.site/i18/LANG_CODE](https://i18n.site/i18/LANG_CODE)

Amuyt’añataki, chino inglés arut jaqukipañ munsta ukhax aka chimpu `zh: en` ukar wasitat qillqt’añamawa.

Taqi yanapt’at arunakar jaqukipañ munsta ukhax `:` ukjatx ch’usawjar jaytañamawa. ukhama

```
i18n:
  fromTo:
    en:
```

: subdirectorios ukanakatakix kunayman `fromTo` ukanakaw wakicht’asispa Archivos /

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

Aka tabla de configuración ukanxa, catálogo `blog` jaqukipäwin phuqhat arupax `zh` ukhamawa, ukatx catálogo `blog/your_file_name.md` jaqukipäwin phunchhawi arupax `ja` ukhamawa.

### Walja Arut Uñacht’awinaka/Links Ukanaka

Kunawsatix `replace:` ukat `MarkDown` ukan jamuqanak uñacht’ayat URLs ukat enlaces ukanakax (ukatx `src` ukat `href` atributos de embebido `HTML` ) ukax `.i18n/conf.yml` ukan aka prefijo ukamp wakicht’atäki ukhax URL ukan phuqhat arut chimpupax jaqukipäwin aru chimpupampiw mayjt’ayatarakini ( [aru código lista](/i18/LANG_CODE) ).

Amuyt’añataki, configuración ukax akhamawa:

```yml
i18n:
  fromTo:
    fr: ko de en zh zh-TW uk ru ja
  replace:
    https://fcdoc.github.io/img/ : ko de uk>ru zh-TW>zh >en
```

`replace: ` ukax mä aru pirwawa, llave ukax URL prefijo ukax mayjt’ayatawa, ukatx valores ukax lantintañ kamachiwa.

Aka patat `ko de uk>ru zh-TW>zh >en` kamachi mayjt ayañax sañ muniwa, `ko de` ukax jupanakan arupan chimpupampiw uñacht ayata, `zh-TW` ukatx `zh` ukax `zh` uñacht awimpiw apnaqasi, `uk` ukax `ru` uñacht awimpiw apnaqasi, ukatx yaqha arunakax ( `ja` ) uñacht awimpiw apnaqapxi ukat `en` ukax default ukhamawa.

Amuyt’añataki, francés ( `fr` ) phuqhat qillqatanx `MarkDown` ukax akhamawa :

```md
![xx](https://i18n-img.github.io/fr/1.avif)
<video src="https://i18n-img.github.io/fr/1.mp4"></video>
[xx](https://i18n-img.github.io/fr/README.md)
<a style="color:red" href="https://i18n-img.github.io/fr/i18n.site.gz">xx</a>
```

Inglés arut jaqukipata ukat lurat ( `en` ) qillqatax akhamawa :

```md
![xx](https://i18n-img.github.io/en/1.avif)
<video src="https://i18n-img.github.io/en/1.mp4"></video>
[xx](https://i18n-img.github.io/en/README.md)
<a style="color:red" href="https://i18n-img.github.io/en/i18n.site.gz">xx</a>
```

Aka chiqanx `/en/` phuqhat arut chimpunakax `/zh/` ukampiw mayjt ayata.

`/` :

> [!TIP]
> `- /` ukax `url:` ukan wakicht’atawa, ukax relativo thakhinakakiw uñakipata, ukampis `//` ukamp qalltañ URL ukanakax janiw chikancht’atäkaniti.
>
> Mä dominio sutimp yaqhip enlaces ukanakax mayjt’ayañ munapxi ukat yaqhipanakax jan mayjt’ayañ munapk ukhax kunayman prefijos ukanakaw apnaqasispa, `[x](//x.com/en/)` ukat `[x](https://x.com/en/)` ukham uñt’ayañataki.

### Archiwu Jan Yäqaña

Ukhamarusa, taqi qillqatanakaxa `.md` ukatxa `.yml` ukampi qalltatawa, ukaxa phuqhawi aru qillqantayañatakixa jaqukipatawa.

Yaqhip qillqatanakar jan yäqañ munsta ukat jan jaqukipañ munsta ukhaxa (jan tukuyat borradoranakjama), `ignore` chimpumpiw wakicht’asma.

`ignore` `.gitignore` pachpa [globset](https://docs.rs/globset/latest/globset/#syntax)

Amuyt’añataki, `_* ` ukax aka pata configuración qillqatanx `_` ukamp qalltañ qillqatanakax janiw jaqukipatäkaniti sañ muni.

## Jaqukipaña Kamachinaka

### Jaqukipañ Editoranakax Janiw Chimpunak Yapxatañapäkiti Ni Chhaqtayañapäkiti

Jaqukipäwix editable ukhamawa. Nayra qillqata mayjt’ayaña ukatxa mayampi maquina-jaqukipaña, jaqukipaña amparampi mayjt’ayañaxa janiwa qillqt’atäkaniti (nayrïri qillqatan aka t’aqapa jani mayjt’ayatäkchi ukhaxa).

> [!WARN]
> Jaqukipäwin chimpunakapampix nayrïr qillqatampix maynit maynikam chikachasiñaw utjañapa. Mä arunxa, jaqukipäw apthapiñkamax janiw chimpunak yapxatañakiti ni chhaqtayañakiti. Jan ukhamäkanixa, jaqukipäw edición caché ukanx jan walt’awinak utjayaspa.

Kunas jan walt’ayaschi ukhaxa, [FAQ ukar uñakipt’añamawa, ukhamat askichäwinakata.](/i18/qa#H1)

### `YAML` Jaqukipatanaka

Kamachi chimpuxa taqi qillqatanakawa `.yml` ukampi tukuyata phuqhata aru qillqañ utanxa jikxatani ukatxa jaqukipatarakiniwa.

* Qhanacht’añatakix qillqat suti sufijo ukax `.yml` (janiw `.yaml` ) ukhamäñapäkiti.

Herramienta ukax diccionario valores ukanak `.yml` ukjakiw jaqukipi, janiw diccionario llaves ukanak jaqukipkiti.

Amuyt’añataki `i18n/en/i18n.yml`

```
apiToken: API Token
defaultToken: Default Token
```

ukax `i18n/zh/i18n.yml` ukham jaqukipatawa

```
apiToken: 接口令牌
defaultToken: 默认令牌
```

`YAML` jaqukipäwix amparamp mayjt’ayatarakispawa (ukampis janiw jaqukipäwinx llaves jan ukax líneas ukanakax yapxatañakiti jan ukax chhaqtayañakiti).

`YAML` jaqukipäwirjamaxa, kunayman programación arunakatakix soluciones internacionales ukanakax jasakiw lurasispa.

## Nayraru Sartawi Apnaqaña

### Jaqukipaña Subdirectorio

Kunjamakitix `.i18n/conf.yml` luratäni (janiw sapa kutix plantilla de proyecto de demostración ukan qalltañax wakiskiti), `i18` wali sum irnaqani.

Kamachi chiqa herramienta ukaxa `.i18n/conf.yml` configuración taqi subdirectorios ukanakana jikxatasi ukatxa jaqukipaña.

Proyectos ukax arquitectura [monorepo](//monorepo.tools)

![](https://p.3ti.site/1719910016.avif)

### Ukax Mä Directorio De Instalación Personalizada Ukawa

Ukax `/usr/local/bin` ukjaruw uñt’ayasi.

`/usr/local/bin` ukax janiw qillqañ permiso ukankiti ukax `~/.bin` ukarux uskt’atawa.

Pachamaman variable `TO` ukar uñt’ayañax instalación directorio ukar uñt’ayaspawa, sañäni :

```sh
TO=/bin sudo bash <(curl -sS https://i.i18n.site) i18
```