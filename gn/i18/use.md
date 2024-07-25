# Oñemohenda Ha Ojeporu

## windows Oinstala Raẽ git bash

windows Sistema, [eity ko'ápe emboguejy ha einstala raẽ `git bash`](https://git-scm.com/download/win)

Emongu’e umi operación oúva upe rire `git bash`

## Mboguejy Mohendahápe

```sh
bash <(curl -sS https://i.i18n.site) i18
```

### Emohenda Ñembohasa Token

Visita [i18n.site/token](//i18n.site/token)

<img src="https://p.3ti.site/1719911689.avif" style="max-width:400px">

Ejapo `~/.config/i18n.site.yml` emboja ipype pe contenido ojekopiava’ekue, pe contenido ha’e kóicha:

```
token: YOUR_API_TOKEN
```

Avei, tekotevẽ [i18n.site/payBill](//i18n.site/payBill) peteĩ tarjeta de crédito repagávo (noñeikotevẽi recarga, pe página web odeduci ijeheguiete umi honorario según jeporu, [ehecha página web-pe precio rehegua](/#price) ).

## Poru

### Proyecto Demostración Rehegua

[github.com/i18n-site/demo.i18](//github.com/i18n-site/demo.i18) Ehechami pe proyecto demostración rehegua reikuaa hag̃ua ñembohasa ñemboheko `i18`

Umi oiporúva China-pe ikatu oclona [atomgit.com/i18n/demo.i18](//atomgit.com/i18n/demo.i18)

Ojejapo rire clonación, eike directorio-pe ha emongu’e `i18`

### Directorio Estructura Rehegua

Pe plantilla almacén directorio estructura haꞌehína koꞌãva

```
┌── .i18n
│  └── conf.yml
└── en
   ├── _IgnoreDemoFile.md
   ├── i18n.yml
   └── README.md
```

Pe `en`

### Emboguata Ñembohasa

Eike directorio-pe ha `i18` embohasa hag̃ua.

### Emoĩve Vore Ryru’ípe

Ñembohasaha ári, programa omoheñóita avei ko’ã vore, emoĩve tendañongatuhápe.

```
.i18n/hash
.i18n/cache/.gitignore
```

Umíva apytépe : `.i18n/cache/.gitignore`

```
**/*
!**/.gitignore
```

Kóva he’ise emboyke opaite `.i18n/cache/.gitignore` oĩva `.i18n/cache/`

Nde software control de versión ndaha’éiramo `git` , emboyke ko configuración he’iháicha.

## Archivo Ñembohekorã Rehegua

`.i18n/conf.yml` Haꞌehína vore ñembohekorã tembipuru ñembohasarã `i18` line rehegua

Umi mba’e oguerekóva ha’e ko’ãva:

```
i18n:
  fromTo:
    en: zh ja ko de fr
    # en:

ignore:
  - _*
```

### Ñe’ẽ Ypykue &

Pe archivo configuración-pe, umi subordinado `fromTo`

`en` ha'e ñe'ẽ ypykue, `zh ja ko de fr` ha'e ñe'ẽ ojehekahápe ñembohasa.

Ñe'ẽ kódigo ehecha [i18n.site/i18/LANG_CODE](https://i18n.site/i18/LANG_CODE)

Techapyrã, rembohasase ramo chino inglés-pe, ehai jey ko línea `zh: en`

Embohasase ramo opaite ñe'ẽ oipytyvõvape, eheja rei `:` techapyrã ramo

```
i18n:
  fromTo:
    en:
```

### Omboyke Archivo

Por defecto, opaite vore oñepyrũva `.md` ha `.yml` oĩva ñe’ẽ ypykue ryru’ípe oñembohasáta.

Emboykeséramo peteĩva umi vore ha nerembohasái (haꞌeháicha umi borrador noñemohuꞌaiva), ikatu reipuru pe `ignore`

`ignore` Oipuru peteĩ ñe’ẽjoaju ojoguáva `.gitignore` -pe [globset](https://docs.rs/globset/latest/globset/#syntax)

Techapyrã, vore ñemboheko yvateguápe `_* ` heꞌise umi vore oñepyrũva `_` rehe noñembohasamoꞌãiha.

## Ñe’ẽasa Rehegua Regla

### Umi Editor Ñembohasa Rehegua Nomoĩriva’erã Térã Ombogueva’erã Línea

Pe traduksión ningo ikatu oñemboheko. Emoambue jehaipyre ypykue ha embohasa jey máquina-pe, umi ñemyatyrõ manual ñembohasa rehegua ndojehaimo’ãi (noñemoambuéiramo ko párrafo jehaipyre ypykue rehegua).

Péro eñatendékena umi línea oĩva pe traduksiónpe ha pe téxto orihinál okorresponde vaʼerãha peteĩva. Upéva he ise ani remoĩ térã rembogue línea remohenda jave pe traduksión. Ndaupeichairamo, omoheñóita ñembotavy ñembohasa ñemboheko ryrúpe.

Oĩramo peteĩ mba’e osẽvaíva, ehecha [FAQ-pe umi solución rehegua.](/i18/qa#H1)

### `YAML` Ñe'ẽmbohasa

Pe tembipuru’i ñe’ẽmondo rehegua ojuhúta opaite vore oñemohu’ãva `.yml`

* Ñañamindu’u pe vore réra ñe’ẽpehẽtai ha’eva’erãha `.yml` (ndaha’éi `.yaml` ).

Pe tembipuru ombohasa umi ñe’ẽryru valor `.yml` -pe añoite, ndaha’éi umi ñe’ẽryru clave.

techapyrã ramo `i18n/en/i18n.yml`

```
apiToken: API Token
defaultToken: Default Token
```

oñembohasáta kóicha `i18n/zh/i18n.yml`

```
apiToken: 接口令牌
defaultToken: 默认令牌
```

Pe ñembohasa `YAML`

Oñemopyendáva `YAML`

## Jeporu Tenondegua

### Ñembohasaha Subdirectorio

Remoheñói aja `.i18n/conf.yml` (natekotevẽi reñepyrũ plantilla proyecto demostración-gui káda jey), `i18` ombaꞌapo porãta.

Pe tembipuru’i ñe’ẽmondo rehegua ojuhúta `.i18n/conf.yml` ñemboheko opaite subdirectorio-pe ha ombohasáta.

Umi tembiaporã oipurúva [monorepo](//monorepo.tools)

<img alt="" src="https://p.3ti.site/1719910016.avif">

### Ñemboguatarã Ryru Jeporupyre

Oñemoĩta `/usr/local/bin`

`/usr/local/bin` permiso ojehai hag̃ua oñeinstaláta `~/.bin` -pe.

Emohenda umi mba’e’oka tekoha : Ikatu emohenda ñemboguapyha ryru, techapyrãramo `TO`

```sh
TO=/bin sudo bash <(curl -sS https://i.i18n.site) i18
```
