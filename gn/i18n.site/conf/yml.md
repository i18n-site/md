# .i18n/conf.yml

Pe perfil `i18n.site` pe g̃uarã haꞌehína `.i18n/conf.yml` .

Ndahaꞌeiramo [`i18`](/i18) , `ignore:` ha `i18n:` ñemboheko, vore ñembohekorã haꞌehína kóicha:

```yaml
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
    use: Doc
addon:
  - i18n.addon/toc
```

Umíva apytépe, `upload` guive `ext:` peve elemento configuración rehegua heꞌise `.md` añoite ojeguerahaukáta oñemoherakuã jave.

## Yvategua Navegación nav

`nav:` opción configuración rehegua, okorrespondéva menú jeguatarã oĩva página ypykue yvate gotyo.

<img src="//p.3ti.site/1721051426.avif" style="width:320px">

Umíva apytépe, `i18n: home` okorresponde `home: Home` `en/i18n.yml` -pe.

`en/i18n.yml` oñembohasáta heta ñe’ẽme, ha’eháicha `zh/i18n.yml` .

<img src="//p.3ti.site/1721051689.avif" style="width:320px">

Ojejapopa rire ñembohasa, ikatu remoambue ñembohasa `yml` valor, ha katu ani remoĩ térã rembogue ñembohasa `yml` clave.

### `use: Toc` , Peteĩ Archivo Plantilla (Esquema Reheve) .

`nav` :

```
  - i18n: home
    use: Toc
    url: /
```

`use: Toc` heꞌise ojejapoha ojeporúvo peteĩ `Toc` plantilla, haꞌevahína ojejapo peteĩ `Markdown` plantilla añoite.

`TOC` haꞌehína `Table of Contents` Oñembohasa jave ko plantilla, ojehechaukáta ko `Markdown` vore esquema barra lateral-pe.

`url:` ohechauka vore rape `Markdown` ( `/` ojoaju kundaha ypykuépe `/README.md` , ko vore réra oikotevẽ peteĩ ñe’ẽpehẽtai tuicháva ha peteĩ ñe’ẽpehẽtai michĩva).

### `use: Md` , Peteĩ Vore Plantilla (Ndaipóri Esquema) .

Pe `Md` plantilla ha `Toc` plantilla peteĩchaite ha mokõivéva ojepuru ojehechauka hag̃ua peteĩ `Markdown` vore añoite. Ha katu pe plantilla `Md` ndohechaukái pe esquema oĩva barra lateral-pe.

Ikatu emoambue `use: Toc` ñemboheko yvateguápe `use: Md` -pe, emongu’e jey `i18n.site` `md` ryru’ípe, ha upéi eike URL ñembohekorã ñepyrũrãme ehecha hag̃ua umi ñemoambue página web-pe.

### Carga Por Defecto Ndorekóiva Tape Configuración Rehegua

Ojeike ramo peteĩ tape rehe ha noñemohendapáiramo tape ñepyrũrã `nav:` -pe, pe `MarkDown` vore okorrespondéva tape rehe ojekargáta por defecto ha oñembohasáta ojeporúvo `Md` plantilla.

Techapyrã, ojeike ramo `/test` pe, ha `nav:` oñemboheko ko tape’ỹre, ha página ñe’ẽ ha’éramo inglés (código `en` ), `/en/test.md` ojekargáta por defecto ha oñembohasáta ojeporúvo plantilla `Md` .

`/en/test.md` ko vore ndoikóiramo, ojehechaukáta `404` página ñepyrũrã.

<img src="https://p.3ti.site/1721184299.avif" style="width:360px">

### `use: Doc` , Plantilla Heta Archivo Rehegua

Pe archivo ñembohekorãme:

```
  - i18n: blog
    use: Doc
```

Ohechauka ojepuruha `Doc` plantilla jehechaukarã.

`Doc` plantilla oipytyvõ oñembojoaju hag̃ua heta `MarkDown` ojejapo hag̃ua kuatia esquema peteĩ térã heta tembiaporãme g̃uarã.

#### Peteĩ Proyecto (Heta Archivo) .

`blog` yvategua haꞌehína pe modo peteĩ mbaꞌe rehegua `Doc` rehegua.

```
  - i18n: blog
    url: blog
    use: Doc
```

##### url Oĩ Jave Nandi, Oñemboheko i18n Valor-Pe

Ndojehaíriramo `url` , `url` oñemohenda por defecto pe valor `i18n` Ko regla oike avei ambue plantilla-pe g̃uarã.

Pe jehai rape yvategua ojoja `url: blog` rehe, ha iarchivo okorrespondéva haꞌehína `en/blog/TOC` .

#### Heta Proyecto Rehegua

Pe configuración `i18n:doc` `.i18n/conf.yml` apytégui haꞌehína modo multiproyecto rehegua.

```
  - i18n: doc
    menu: NB demo1,demo2
    use: Doc
```

<img src="https://p.3ti.site/1721275191.avif" width="320px">

Ko’ápe, `menu: NB demo1,demo2` , he’ise ojepuruha plantilla `NB` ojehechauka hag̃ua menú desplegable.

`NB` , haꞌevahína `Name Breif` ñemombyky, heꞌise pe menú desplegable ikatuha ohechauka proyecto réra ha consigna.

`NB` hapykuéri oñemoĩ parámetro `demo1,demo2` oñembohasáva chupe.
`demo1,demo2` : ** `,` **

Umi parámetro yvateguápe g̃uarã, pe archivo índice directorio rehegua ojoajúva haꞌehína:

* `en/demo1/TOC`
* `en/demo2/TOC`

#### Índice Cuadro De Contenidos TOC Rehegua

`i18n.site` omoañetéta `js` plug-in `.i18n/hook/after.tran/TOC.js` almacén demostración-pe omoñeꞌe hag̃ua archivo índice `doc` directorio rehegua okorrespondéva configuración `TOC` plantilla rehegua omoheñói hag̃ua esquema `json` directorio rehegua.

Oipurúramo `doc` plantilla, oguerekova’erã ko plug-in.

Emoñepyrũramo proyecto `i18n.site` peteĩ carpeta nandi guive, nemandu’ava’erã ekopia hag̃ua proyecto demostración `.i18n` nde directorio-pe.

Pe plantilla `Doc` ohechaukáta pe cuadro de contenidos esquema oñemopyendáva pe `json` oñembohekopyréva rehe.

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

`TOC` vore oñembohysýi ojehechauka hag̃ua mbaꞌeichaitépa ojoaju jerárquica esquema rehegua, oipytyvõ indentación heta nivel rehegua ha umi ñeꞌepyrũ línea rehegua oñepyrũva `#` -gui.

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