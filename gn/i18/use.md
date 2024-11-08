# Oñemohenda Ha Ojeporu

## windows Oinstala Raẽ git bash

windows Sistema, [eity ko'ápe emboguejy ha emoĩ hag̃ua `git bash` raẽ](https://git-scm.com/download/win) .

Emongu’e umi tembiapo oúva upe rire `git bash` -pe.

## Mboguejy Mohendahápe

```sh
bash <(curl -sS https://i.i18n.site) i18
```

### Emohenda Ñembohasa Token

Visita [i18n.site/token](//i18n.site/token)

<img src="https://p.3ti.site/1719911689.avif" style="width:400px">

Ejapo `~/.config/i18n.site.yml` , emboja ipype pe contenido ojekopiava’ekue, contenido ha’e kóicha:

```
token: YOUR_API_TOKEN
```

Avei, tekotevẽ reñapytĩ peteĩ tarjeta de crédito [pago](/#price) rehegua [i18n.site/payBill](//i18n.site/payBill)

## Poru

### Proyecto Demostración Rehegua

Ehechamína pe proyecto demostración [github.com/i18n-site/demo.i18](//github.com/i18n-site/demo.i18) reikuaa hag̃ua `i18` ñembohasa ñemboheko.

Umi oiporúva China-pe ikatu oclona [atomgit.com/i18n/demo.i18](//atomgit.com/i18n/demo.i18)

Ojejapo rire clonación, eike directorio-pe ha emongu’e `i18` emohu’ã hag̃ua ñembohasa.

### Directorio Ñemohenda

Pe plantilla almacén directorio estructura haꞌehína koꞌãva

```
┌── .i18n
│  └── conf.yml
└── en
   ├── _IgnoreDemoFile.md
   ├── i18n.yml
   └── README.md
```

Umi archivo demostración oñembohasáva `en` directorio-pe haꞌehína techapyrãnte ha ikatu oñembogue.

### Emboguata Ñembohasa

Eike directorio-pe ha emongu’e `i18` embohasa hag̃ua.

Ñembohasaha ári, programa omoheñóita avei `.i18n/data` ryru, emoĩve tendañongatuhápe.

Oñembohasa rire vore pyahu, ojejapóta peteĩ vore dato rehegua pyahu ko kundahárape Nemandu’áke emoĩ hag̃ua `git add . ` .

## Archivo Ñembohekorã Rehegua

`.i18n/conf.yml` haꞌehína vore ñembohekorã tembipuru ñembohasa `i18` tembiapoukapy rape rehegua

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

Pe archivo configuración-pe, pe subordinado `fromTo` rehegua :

`en` ha’e ñe’ẽ ypykue, `zh ja ko de fr` ha’e ñe’ẽ ojehekahápe ñe’ẽasa.

Ñe'ẽ kódigo ehecha [i18n.site/i18/LANG_CODE](https://i18n.site/i18/LANG_CODE)

Techapyrã, rembohasase ramo chino inglés-pe, ehai jey ko línea `zh: en` .

Embohasase ramo opaite ñe’ẽ oipytyvõvape, eheja rei `:` rire. techapyrã ramo

```
i18n:
  fromTo:
    en:
```

Ikatu emohenda `fromTo` : opaichagua subdirectorio-pe g̃uarã Archivos /

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

Ko cuadro configuración-pe, ñeꞌe ypykue catálogo `blog` ñembohasa rehegua haꞌehína `zh` , ha ñeꞌe ypykue catálogo `blog/your_file_name.md` ñembohasa rehegua haꞌehína `ja` .

### Ta’ãnga/Joaju Heta Ñe’ẽme

Umi URL oĩva taꞌãngamýime ha joajuha `replace:` ha `MarkDown` pe (ha umi atributo `src` ha `href` embedded `HTML` -pegua) oñemboheko jave `.i18n/conf.yml` -pe ko ñeꞌepyrũ reheve, oñemyengoviáta ñeꞌe ypy kódigo oĩva URL-pe ñeꞌepykuaa ñembohasa rehe ( [ñeꞌepy)](/i18/LANG_CODE) . [lista de código rehegua](/i18/LANG_CODE) ).

Techapyrã, ne ñemboheko ha’e ko’ãva:

```yml
i18n:
  fromTo:
    fr: ko de en zh zh-TW uk ru ja
  replace:
    https://fcdoc.github.io/img/ : ko de uk>ru zh-TW>zh >en
```

`replace: ` haꞌehína peteĩ ñeꞌeryru, pe clave haꞌehína URL ñepyrũrã oñemyengoviátava, ha pe valor haꞌehína pe regla ñemyengoviarã.

He’iséva oñemyengoviávo regla `ko de uk>ru zh-TW>zh >en` yvategua ha’e `ko de` oipuruha ta’ãnga iñe’ẽ kódigo tee rehegua, `zh-TW` ha `zh` oipuru `zh` ra’ãnga, `uk` oipuru `ru` ra’ãnga, ha ambue ñe’ẽ ( `ja` -icha) oipuru ta’ãnga de `en` por defecto.

Techapyrã, francés ( `fr` ) vore ypykue `MarkDown` rehegua haꞌehína kóicha :

```md
![xx](https://i18n-img.github.io/fr/1.avif)
<video src="https://i18n-img.github.io/fr/1.mp4"></video>
[xx](https://i18n-img.github.io/fr/README.md)
<a style="color:red" href="https://i18n-img.github.io/fr/i18n.site.gz">xx</a>
```

Pe archivo inglés ( `en` ) oñembohasáva ha oñembohekopyréva ha'e ko'ãva :

```md
![xx](https://i18n-img.github.io/en/1.avif)
<video src="https://i18n-img.github.io/en/1.mp4"></video>
[xx](https://i18n-img.github.io/en/README.md)
<a style="color:red" href="https://i18n-img.github.io/en/i18n.site.gz">xx</a>
```

Koꞌape, `/en/` oĩva ñeꞌepykuaa kódigo-pe oñemyengovia `/zh/` ñeꞌepykuaarãme.

Ñembohysýi : Oĩvaꞌerã `/` ñeꞌepykuaa mboyve ha rire pe jehaipyre oñemyengoviáva URL-pe.

> [!TIP]
> `- /` oñemboheko ramo `url:` -pe, oñembojoajúta tape relativo añoite, ha katu umi URL oñepyrũva `//` gui noñembojoajúi.
>
> Oĩramo joajuha peteĩ dominio réra rehegua oñemyengoviaséva ha oĩramo noñemyengoviaséiva, ikatu reipuru iñambuéva ñe’ẽpehẽtai `[x](//x.com/en/)` ha `[x](https://x.com/en/)` icha embojoavy hag̃ua.

### Omboyke Archivo

Por defecto, opaite vore oñepyrũva `.md` ha `.yml` oĩva ñe’ẽ ypy ryru’ípe oñembohasáta.

Emboykeséramo peteĩva umi vore ha nerembohasáiramo (haꞌeháicha umi borrador noñemohuꞌaiva), ikatu emohenda `ignore` tenda rupive.

`ignore` oipuru peteĩchagua [globset](https://docs.rs/globset/latest/globset/#syntax) ñe’ẽjoajuha `.gitignore` vore ndive.

Techapyrã, `_* ` oĩva vore ñemboheko yvateguápe heꞌise umi vore oñepyrũva `_` gui noñembohasamoꞌãiha.

## Ñe’ẽasa Rehegua Regla

### Umi Editor Ñe’ẽasa Rehegua Nomoĩriva’erã Térã Ombogueva’erã Línea

Pe traduksión ningo ojejapokuaa. Emoambue jehaipyre ypykue ha embohasa jey máquina-pe, umi ñemyatyrõ manual ñembohasa rehegua ndojehaimo’ãi (noñemoambuéiramo ko párrafo jehaipyre ypykue rehegua).

> [!WARN]
> Oĩva’erã peteĩ correspondencia peteĩteĩ umi línea ojetradusíva ha pe texto original apytépe. Upéva he ise ani remoĩ térã rembogue línea remohenda jave pe traduksión. Ndaupeichairamo, omoheñóita ñembotavy ñembohasa ñemboheko ryrúpe.

Oĩramo peteĩ mba’e osẽvaíva, ehecha [FAQ-pe umi solución rehegua.](/i18/qa#H1)

### `YAML` Ñembohasa

Tembipuru ñe’ẽmondo rape ojuhúta opaite vore oñemohu’ãva `.yml` -pe vore ñe’ẽ ypykue ryrúpe ha ombohasáta.

* Ñañamindu’u vore réra ñe’ẽpehẽtai ha’eva’erãha `.yml` (ndaha’éi `.yaml` ).

Pe tembipuru ombohasa ñe’ẽryru repykue `.yml` -pe añoite, ndaha’éi ñe’ẽryru ñemohendaha.

Techapyrã `i18n/en/i18n.yml`

```
apiToken: API Token
defaultToken: Default Token
```

oñembohasáta `i18n/zh/i18n.yml` ramo

```
apiToken: 接口令牌
defaultToken: 默认令牌
```

Pe ñembohasa `YAML` rehegua ikatu avei oñemoambue po rupive (ha katu ani emoĩ térã embogue umi tecla térã línea ñembohasahápe).

Oñemopyendáva `YAML` ñembohasa rehe, ikatu remopuꞌa pyaꞌe solución internacional opaichagua ñeꞌepykuaa rehegua.

## Jeporu Tenondegua

### Ñembohasaha Subdirectorio

Ojejapo aja `.i18n/conf.yml` (natekotevẽi oñepyrũ plantilla proyecto demostración-gui opaite jey), `i18` ombaꞌapo porãta.

Pe tembipuru línea de comandos ojuhúta `.i18n/conf.yml` configuración opaite subdirectorio-pe ha ombohasáta.

Umi tembiaporã oipurúva [monorepo](//monorepo.tools)

![](https://p.3ti.site/1719910016.avif)

### Ñemboguatarã Ryru Jeporupyre

Oñemoĩta `/usr/local/bin` -pe ñepyrũrãme.

`/usr/local/bin` ndorekóiramo permiso ojehai hag̃ua oñemboguapyva’erã `~/.bin` -pe.

Oñemohenda variable entorno `TO` ikatu odefini directorio instalación rehegua, techapyrãramo :

```sh
TO=/bin sudo bash <(curl -sS https://i.i18n.site) i18
```