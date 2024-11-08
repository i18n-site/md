# .i18n/conf.yml

Pe archivo configuración rehegua `i18n.site` pe g̃uarã haꞌehína `.i18n/conf.yml` ha pe contenido haꞌehína kóicha :

```yaml
i18n:
  fromTo:
    en:
upload:
  ext:
    - md
nav:
  - i18n: home
    use: Toc
    url: /
  - i18n: doc
    menu: NB demo1,demo2
    use: Doc
  - i18n: blog
    use: Blog
addon:
  - i18n.addon/toc
```

Umíva apytépe, `upload` guive `ext:` peve elemento configuración rehegua heꞌise `.md` añoite ojeguerahaukáta oñemoherakuã jave.

## Yvategua Navegación nav

`nav:` opción configuración rehegua, okorrespondéva menú jeguatarã oĩva página web yvate gotyo.

<img src="//p.3ti.site/1721051426.avif" style="width:320px">

Umíva apytépe, `i18n: home` ombohovái `home: Home` `en/i18n.yml` -pe (ko’ápe `en` ha’e ñe’ẽ ypykue proyecto ñembohasa rehegua).

`en/i18n.yml` contenido haꞌehína jehaipyre ojehechaukáva menú jeguatarãme, oñembohasátava `fromTo` heꞌiháicha configuración-pe, techapyrãramo, oñembohasáva `zh/i18n.yml` -pe.

<img src="//p.3ti.site/1721051689.avif" style="width:320px">

Ojejapopa rire ñembohasa, ikatu remoambue ñembohasa `yml` valor, ha katu ani remoĩ térã rembogue ñembohasa `yml` clave.

### `use: Toc` Kuatia Rehegua Peteĩva Esquema Reheve

`nav` :

```
  - i18n: home
    use: Toc
    url: /
```

`use: Toc` heꞌise ojejapoha ojeporúvo peteĩ `Toc` plantilla, haꞌevahína ojejapo peteĩ `Markdown` plantilla añoite.

`TOC` haꞌehína `Table of Contents` Oñembohasa jave ko plantilla, ojehechaukáta ko `Markdown` vore esquema barra lateral-pe.

`url:` ohechauka vore rape `Markdown` ( `/` ojoaju kundaha ypykuépe `/README.md` , ko vore réra oikotevẽ peteĩ ñe’ẽpehẽtai tuicháva ha peteĩ ñe’ẽpehẽtai michĩva).

### `use: Md` Kuatia Rehegua Peteĩva Esquema’ỹre

Pe `Md` plantilla ha `Toc` plantilla peteĩchaite ha mokõivéva ojepuru ojehechauka hag̃ua peteĩ `Markdown` vore añoite. Ha katu pe plantilla `Md` ndohechaukái pe esquema oĩva barra lateral-pe.

Ikatu emoambue `use: Toc` ñemboheko yvateguápe `use: Md` -pe, emongu’e jey `i18n.site` `md` ryru’ípe, ha upéi eike URL ñembohekorã ñepyrũrãme ehecha hag̃ua umi ñemoambue página web-pe.

### `use: Blog` Plantillas De Blog Rehegua

Pe plantilla blog rehegua ohechauka peteĩ lista artíkulo rehegua (título ha resumen) orden tiempo de publicación rehegua.

[→ Emboguejy ko’ápe reikuaa hag̃ua pe configuración específica rehegua](/i18n.site/conf/blog)

### `use: Doc` Archivo Kuatia Plantilla Rehegua

Pe archivo ñembohekorãme:

```
  - i18n: doc
    menu: NB demo1,demo2
    use: Doc
```

Ohechauka ojepuruha `Doc` plantilla jehechaukarã.

`Doc` plantilla oipytyvõ oñembojoaju hag̃ua heta `MarkDown` ojejapo hag̃ua kuatia esquema peteĩ térã heta tembiaporãme g̃uarã.

#### Heta Proyecto Ha Heta Archivo

Pe configuración `.i18n/conf.yml` en `i18n:doc` haꞌehína heta proyecto heta archivo rehegua modalidad.

Ko’ápe, `menu: NB demo1,demo2` , he’ise ojepuruha plantilla `NB` ojehechauka hag̃ua menú desplegable.

<img src="//p.3ti.site/1721275191.avif" width="320px">

`NB` , haꞌevahína `Name Breif` ñemombyky, heꞌise pe menú desplegable ikatuha ohechauka proyecto réra ha consigna.

`NB` hapykuéri oñemoĩ parámetro `demo1,demo2` oñembohasáva chupe.

`demo1,demo2` : ** `,` **

Pe archivo índice directorio rehegua ojoajúva umi parámetro yvateguápe g̃uarã haꞌehína:

* `en/demo1/TOC`
* `en/demo2/TOC`

#### Peteĩ Proyecto Heta Archivo

Peteĩ proyecto añoite reguerekóramo, ikatu emohenda kóicha.

```
  - i18n: doc
    url: flashduty
    use: Doc
```

> [!WARN]
> Peteĩ proyecto oguerekóva heta vore ndoipytyvõi oñemboheko hag̃ua `url` tape ypykue ramo `/`
> __conf.yml → nav:__ Noñemohendapáiramo hapo rape, ojeike jave página web ypykuépe, ojehai jeýta ijeheguiete peteĩha URL-pe `nav:` ñemboheko guýpe.
> Ko diseño niko ojehechakuaa porãve hag̃ua proyecto kuatia, blog ha ambue contenido directorio rupive.
> Iporã ojepuru peteĩ vore ha peteĩ páhina añoite páhina ypykue ramo.

> [!TIP]
> Ndojehaíriramo `url` , `url` oñemohenda por defecto pe valor `i18n` Ko regla oike avei ambue plantilla-pe g̃uarã.

#### Índice Cuadro De Contenidos TOC Rehegua

Ojehejáramo plantilla `use: Doc` ñembohekorãme, emboguata plug-in `i18n.addon/toc` `.i18n/conf.yml` Ñembohekorã haꞌehína kóicha :

```yml
addon:
  - i18n.addon/toc
```

`i18n.site` omoĩ ha omoañetéta ijeheguiete ko plugin, omoñeꞌe `TOC` vore índice directorio rehegua ha omoheñóita `json` directorio esquema.

Haꞌeramo peteĩ tembiaporã oguerekóva heta vore, vore ypykue `TOC` haꞌehína kundaha okorrespondéva `url:` -pe ñeꞌepykuaa ryrúpe Techapyrã, ñeꞌe ypy haꞌeramo chino: vore okorrespondéva `url: flashduty` -pe haꞌehína `zh/flashduty/TOC` .

Haꞌeramo heta proyecto ha heta archivo, natekotevẽi oñemboheko `url:` Pe directorio ypykue `TOC` rehegua haꞌehína pe directorio okorrespondéva `i18n` valor rehe.

##### Ñemyesakã Detallado Contenido Rehegua

`en/blog/TOC` contenido ha'e kóicha :

```
README.md

news/README.md
  news/begin.md
```

##### Eipuru Indentación Ehechauka Hagua Umi Nivel

`README.md` oĩva peteĩha fila `en/blog/TOC` yvateguápe okorresponde `i18n.site` oĩva taꞌãngamýi iguýpe, haꞌehína proyecto réra.

Umi mokõi línea oúva ha’e ojehechaukaháicha pantalla’i iguýpe.

<img src="https://p.3ti.site/1721097381.avif" style="width:320px">

`news/README.md` okorresponde `News` , .
`news/begin.md` okorresponde `Our Product is Online !` rehe

`TOC` vore oñembohysýi ojehechauka hag̃ua mbaꞌeichaitépa ojoaju jerárquica esquema rehegua, oipytyvõ indentación heta nivel rehegua ha umi ñeꞌepyrũ línea rehegua oñepyrũva `# ` -gui.

##### Pe Nivel Tuvakuéra Ohai Pe Título Añoite, Ndaha’éi Pe Contenido.

Oĩ jave heta nivel indentación rehegua, pe nivel túva ohai título añoite ha ndahaꞌei contenido. Ndaupeichairamo, oñembotavýta tipografía.

##### Proyecto README.md Rehegua

Contenido ikatu ojehai punto `README.md` pe , ha eháicha `en/demo2/README.md` .

Ñañamindu’u ko vore ryepýpe ndohechaukái peteĩ esquema cuadro de contenido rehegua, upévare iporã ñamombyky ipukukue ha jahai peteĩ ñepyrũrã mbykymi.

###### Proyecto Consigna Rehegua

Ikatu rehecha `Deme Two` oguerekoha iproyecto ñe’ẽñemi menú desplegable ha catálogo esquema proyecto réra `Your Project slogan` :

![](https://p.3ti.site/1721276842.avif)

Kóva okorresponde peteĩha fila `en/demo2/README.md` :

```
# Demo Two : Your Project slogan
```

Pe contenido oĩva peteĩha colon `:` rire pe título primer nivel proyecto `README.md` rehegua ojehecháta proyecto consigna ramo.

Umi puruhára China, Japón ha Corea-gua, eñatendéke eipuruva’erãha `:` colon mbyte ancho rehegua, eipuru rangue colon ipekue pukukue.

##### Mba'éichapa Ikatu Oñemomýi TOC a Granel?

`TOC` vore tekotevẽ oñemoĩ ñe’ẽ ypykue ryru’ípe.

Techapyrã, ñe’ẽ ypykue ha’éramo chino, upéicharõ `TOC` yvategua ha’e `zh/blog/TOC` .

Oñemoambuéramo ñe’ẽ ypykue, tekotevẽ rembohasa lote-pe umi `TOC` vore peteĩ ñe’ẽmegua proyecto-pe ambue ñe’ẽme.

Ikatu rehecha ko’ã tembiapoukapy:

```
rsync -av --remove-source-files --include='*/' \
--include='TOC' --exclude='*' en/ zh/
```

Emoambue `en/` ha `zh/` ñe’ẽmondo yvateguápe ne ñe’ẽ kódigo-pe.

### Carga Por Defecto Ndorekóiva Tape Configuración Rehegua

Peteĩ tape ojeikehápe g̃uarã, tape ñepyrũrã noñemohendapáiramo `nav:` -pe, pe `MarkDown` vore okorrespondéva tape rehe ojekargáta por defecto ha oñembohasáta ojeporúvo `Md` plantilla.

Techapyrã, ojeike ramo `/test` ha `nav:` oñemboheko ko tape ñepyrũrã’ỹre, ha ñe’ẽ jesarekorã ko’ag̃agua ha’e inglés (código `en` ), `/en/test.md` ojekargáta por defecto ha oñembohasáta ojeporúvo plantilla `Md` .

`/en/test.md` ko vore ndoikóiramo, ojehechaukáta `404` página ñepyrũrã.

<img src="//p.3ti.site/1721184299.avif" style="width:360px">