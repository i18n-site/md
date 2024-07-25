# Instalación Ukat Apnaqaña

## windows Ukax Nayraqat git bash Ukar Uñt’ayi

windows Sistema, [aka tuqir ch’iqt’am nayraqat apkatañataki ukat instalañataki `git bash`](https://git-scm.com/download/win)

Uka qhipa operaciones ukanakax `git bash`

## Uchaña

```sh
bash <(curl -sS https://i.i18n.site) i18
```

### Jaqukipaña Token Uñakipaña

¡Visita [i18n.site/token](//i18n.site/token)

<img src="https://p.3ti.site/1719911689.avif" style="max-width:400px">

¡Uñt’ayaña `~/.config/i18n.site.yml` copiat contenido ukar lip’kataña, ukax akham sañ muni:

```
token: YOUR_API_TOKEN
```

Ukhamarus, tarjeta de crédito ukampiw [i18n.site/payBill](//i18n.site/payBill) wakisi (janiw recarga ukax wakiskiti, sitio web ukax automáticamente qullqinak apsuñapawa apnaqawiparjama, [uñakipt’añatakix página de inicio ukanx precios uñakipt’añamawa](/#price) ).

## Apnaqaña

### Proyecto Demostración Ukax Mä Jach’a Uñacht’äwiwa

[github.com/i18n-site/demo.i18](//github.com/i18n-site/demo.i18) Jichhax proyecto demostración ukar uñakipt'añamawa, jaqukipañ configuración ukar yatxatañataki `i18`

China markan apnaqirinakax clonación lurapxaspawa [atomgit.com/i18n/demo.i18](//atomgit.com/i18n/demo.i18)

Clonación ukxaruxa, directorio ukar mantañamawa ukatxa `i18`

### Directorio Ukan Lurawipa

Plantilla almacén directorio ukan estructurapax akhamawa

```
┌── .i18n
│  └── conf.yml
└── en
   ├── _IgnoreDemoFile.md
   ├── i18n.yml
   └── README.md
```

`en`

### Jaqukipaña T’ijt’ayaña

Directorio ukar mantam ukat jaqukipañataki `i18`

### Uka Imaña Utaruxa Qillqatanaka Yapxataña

Jaqukipañat sipansa, uka wakichäwix aka qillqatanakaw lurasirakini, ukanakx imañ utar yapxatañamawa.

```
.i18n/hash
.i18n/cache/.gitignore
```

Jupanak taypinxa : `.i18n/cache/.gitignore`

```
**/*
!**/.gitignore
```

Ukax sañ muniw taqi `.i18n/cache/.gitignore` `.i18n/cache/`

Software de control de versión ukax janiw `git` , ukax aka configuración ukarjam jan yäqañawa.

## Configuración Sata Qillqata

`.i18n/conf.yml` `i18`

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

Uka configuración qillqatanxa, subordinados ukanakax `fromTo`

`en` `zh ja ko de fr`

Arunak uñt'ayañani [i18n.site/i18/LANG_CODE](https://i18n.site/i18/LANG_CODE)

Amuyt’añataki, chino inglés arut jaqukipañ munsta ukhax aka chimpu wasitat qillqt’añamawa `zh: en`

Taqi yanapt’at arunakar jaqukipañ munsta ukhax `:` ukhama

```
i18n:
  fromTo:
    en:
```

### Archiwu Jan Yäqaña

Ukhamarusa, `.yml` qillqatanakaxa `.md`

Yaqhip qillqatanakar jan yäqañ munsta ukat jan jaqukipañ munsta ukhaxa (jan ukax jan tukuyat borradoranakjama), `ignore`

`ignore` `.gitignore` [globset](https://docs.rs/globset/latest/globset/#syntax)

Amuyt’añataki, aka pata configuración qillqatanx `_* ` `_` qalltañ qillqatanakax janiw jaqukipatäkaniti sañ muni.

## Jaqukipaña Kamachinaka

### Jaqukipañ Editoranakax Janiw Chimpunak Yapxatañapäkiti Ni Chhaqtayañapäkiti

Jaqukipäwix editable ukhamawa. Nayra qillqata mayjt’ayaña ukatxa mayampi maquina-jaqukipaña, jaqukipaña amparampi mayjt’ayañaxa janiwa qillqantatäkaniti (nayriri qillqatan aka t’aqapaxa jani mayjt’ayatäkchi ukhaxa).

Ukampis achiktʼasiñamawa, jaqukipäwin chimpunakapasa ukat nayrïr qillqatäki uka chimpunakax mayakïñapawa. Mä arunxa, jaqukipäwi apthapiñkamax janiw chimpunak yapxatañakiti ni chhaqtayañakiti. Jan ukhamäkanixa, jaqukipäw edición caché ukanx jan walt’awinak utjayaspa.

Kunas jan walt’ayaschi ukhaxa, [FAQ ukar uñakipt’añamawa, ukhamat askichäwinakata.](/i18/qa#H1)

### `YAML` Jaqukipaña

Kamachi chimpuxa taqi qillqatanakawa `.yml`

* Qhanacht’añatakix arsuwi suti sufijo ukax `.yml` (janiw `.yaml` ) ukhamäñapäkiti.

Herramienta ukax `.yml`

ukhama `i18n/en/i18n.yml`

```
apiToken: API Token
defaultToken: Default Token
```

ukax akham jaqukipatawa `i18n/zh/i18n.yml`

```
apiToken: 接口令牌
defaultToken: 默认令牌
```

`YAML`

`YAML`

## Nayraru Sartawi Apnaqaña

### Jaqukipaña Subdirectorio

`i18` `.i18n/conf.yml`

Kamachi chimpuxa `.i18n/conf.yml`

Proyectos ukax arquitectura [monorepo](//monorepo.tools)

<img alt="" src="https://p.3ti.site/1719910016.avif">

### Ukax Mä Directorio De Instalación Personalizada Ukawa

Ukax `/usr/local/bin`

`/usr/local/bin` janiw qillqañ permiso ukankiti ukax `~/.bin` .

Pachamaman variables `TO` utt’ayaña Jumax instalación directorio ukar uñt’ayasma, sañäni :

```sh
TO=/bin sudo bash <(curl -sS https://i.i18n.site) i18
```
