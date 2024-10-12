# Instalación Ukat Apnaqaña

## windows Nayraqat git bash Ukar Uñt’ayaña

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

[i18n.site/payBill](//i18n.site/payBill) , payllañatakix tarjeta de crédito ukar chint’añaw wakisi (janiw recarga ukax wakiskiti, sitio web ukax automáticamente qullqinak apsuñapawa apnaqawiparjama, [precios ukar uñakipt’añatakix página de inicio ukar uñakipt’aña](/#price) ).

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

Machaq qillqat jaqukipañ tukuyatatxa, mä machaq yatiyaw qillqataw aka directorio ukan lurasini Amtañani `git add .` yapxataña.

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

### Archiwu Jan Yäqaña

Ukhamarusa, taqi qillqatanakaxa `.md` ukatxa `.yml` ukampi qalltatawa, ukaxa phuqhawi aru qillqantayañatakixa jaqukipatawa.

Yaqhip qillqatanakar jan yäqañ munsta ukat jan jaqukipañ munsta ukhaxa (jan tukuyat borradoranakjama), `ignore` chimpumpiw wakicht’asma.

`ignore` `.gitignore` pachpa [globset](https://docs.rs/globset/latest/globset/#syntax)

Amuyt’añataki, `_* ` ukax aka pata configuración qillqatanx `_` ukamp qalltañ qillqatanakax janiw jaqukipatäkaniti sañ muni.

## Jaqukipaña Kamachinaka

### Jaqukipañ Editoranakax Janiw Chimpunak Yapxatañapäkiti Ni Chhaqtayañapäkiti

Jaqukipäwix editable ukhamawa. Nayra qillqata mayjt’ayaña ukatxa mayampi maquina-jaqukipaña, jaqukipaña amparampi mayjt’ayañaxa janiwa qillqt’atäkaniti (nayrïri qillqatan aka t’aqapa jani mayjt’ayatäkchi ukhaxa).

Ukampis achiktʼasiñamawa, jaqukipäwin chimpunakapasa ukat nayrïr qillqatäki uka chimpunakax mayakïñapawa. Mä arunxa, jaqukipäwi apthapiñkamax janiw chimpunak yapxatañakiti ni chhaqtayañakiti. Jan ukhamäkanixa, jaqukipäw edición caché ukanx jan walt’awinak utjayaspa.

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