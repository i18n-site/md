# .i18n/conf.yml Rehegua

`i18n.site` Pe vore ñembohekorã haꞌehína `.i18n/conf.yml` .

Ndahaꞌeiramo `ignore:` ha `i18n:` ñemboheko [`i18`](/i18) , vore mohendaha haꞌehína kóicha:

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
```

Umíva apytépe, pe mba’e `ext:` configuración rehegua `upload` he’ise `.md` añoite ojeguerahaukáta oñemoherakuã jave.

## Yvategua Navegación nav

`nav:` umi opción configuración rehegua, ojoajúva menú jeguatarã oĩva página ypykue yvate gotyo.

<img src="//p.3ti.site/1721051426.avif" style="width:320px">

Umíva apytépe, `i18n: home` okorresponde `en/i18n.yml`中`home: Home` -pe.

oñembohasáta heta ñe'ẽme, ha'eháicha `zh/i18n.yml` `en/i18n.yml`

<img src="//p.3ti.site/1721051689.avif" style="width:320px">

Oñemohu’ã rire `yml` , ikatu remoambue `yml`

### `use: Toc` , Plantilla Archivo Peteĩva (Contorno Reheve)

`nav` :

```
  - i18n: home
    use: Toc
    url: /
```

`use: Toc` he’ise ojepuruha `Toc` jehechauka, ha’éva peteĩ `Markdown` plantilla jehechauka.

`TOC` haꞌehína `Table of Contents` ñemombyky Ko plantilla, ojehechaukáta ko `Markdown` vore esquema barra lateral-pe.

`url:` ohechauka vore rape `Markdown` ( `/` ojoaju kundaha ypykuépe `/README.md` , ko vore réra oikotevẽ peteĩ ñe’ẽpehẽtai tuicháva ha peteĩ ñe’ẽpehẽtai michĩva).

### `use: Md` , Plantilla Archivo Peteĩva (Ndaipóri Esquema)

`Md` Plantilla haꞌehína peteĩchagua `Toc` ndive, mokõivéva ojepuru ojehechauka hag̃ua peteĩ `Markdown` vore. Ha katu `Md` pe plantilla ndohechaukái pe esquema pe barra lateral-pe.

Ikatu emoambue `use: Toc` ñemboheko yvateguápe `use: Md` -pe, emongu’e jey `i18n.site` `md` ryru’ípe, ha upéi eike URL ñembohekorã ñepyrũrãme ehecha hag̃ua umi ñemoambue ñanduti renda ypykuépe.

### Carga Por Defecto Ndorekóiva Tape Configuración Rehegua

Pe tape ñepyrũrã peteĩ tape ojeikehápe noñemohendapáiramo `nav:` pe `MarkDown` vore okorrespondéva tape rehe ojekargáta por defecto ha oñembohasáta ojeporúvo `Md` plantilla.

`Md` `/en/test.md` `en` `nav:` `/test`

`/en/test.md` ko vore ndoikóiramo, ojehechaukáta `404` páhina ñepyrũrã.

<img src="https://p.3ti.site/1721184299.avif" style="width:360px">

### `use: Doc` , Plantilla Heta Archivo Rehegua

Pe archivo ñembohekorãme:

```
  - i18n: blog
    use: Doc
```

Ohechauka ojepuruha `Doc`

`Doc` Plantilla oipytyvõ oñembojoaju hag̃ua heta `MarkDown` ojejapo hag̃ua kuatia esquema peteĩ térã heta tembiaporãme g̃uarã.

#### Peteĩ Proyecto (Heta Archivo) .

`blog` haꞌehína pe modo proyecto peteĩva `Doc` rehegua.

```
  - i18n: blog
    url: blog
    use: Doc
```

##### url Oĩ Jave Nandi, Oñemboheko i18n Valor-Pe

`url` `url` `i18n`

Pe jehai rape yvategua ojoja oguerekóramo `url: blog` ha iñemohendaha okorrespondéva haꞌehína `en/blog/TOC` .

#### Heta Proyecto Rehegua

`.i18n/conf.yml` Pe configuración oĩva `i18n:doc` haꞌehína heta proyecto reko.

```
  - i18n: doc
    menu: NB demo1,demo2
    use: Doc
```

<img src="https://p.3ti.site/1721275191.avif" width="320px">

Ko’ápe, `menu: NB demo1,demo2` he’ise ojepuruha `NB` ojehechauka hag̃ua menú desplegable.

`NB` , haꞌehína `Name Breif` ñemombyky, ohechaukáva menú desplegable ikatuha ohechauka proyecto réra ha consigna.

`NB` `demo1,demo2`
Ñañamindu’u ndaiporimo’ãiha espacio ** coma `,` in mboyve ha : ** `demo1,demo2`

Umi parámetro yvateguápe g̃uarã, pe archivo índice directorio rehegua ojoajúva haꞌehína:

* `en/demo1/TOC`
* `en/demo2/TOC`

#### TOC Cuadro De Contenidos Índice Rehegua

`i18n.site` Ojapóta `js` plugin `.i18n/hook/after.tran/TOC.js` almacén demostración-pe omoñeꞌe hag̃ua archivo índice directorio rehegua `doc` okorrespondéva plantilla ñemboheko `TOC` omoheñói hag̃ua `json` esquema directorio rehegua.

Oipurúramo `doc`

`.i18n` `i18n.site`

`Doc` `json`

##### Ñemyesakã Detallado Contenido Rehegua

`en/blog/TOC` :

```
README.md

news/README.md
  news/begin.md
```

##### Eipuru Indentación Ehechauka Hagua Umi Nivel

Yvate `en/blog/TOC` `README.md` oĩva peteĩha línea-pe ojoaju `i18n.site` oĩva taꞌãngamýi iguýpe, haꞌevahína proyecto réra.

Umi mokõi línea oúva ha’e ojehechaukaháicha pantalla’i iguýpe.

<img src="https://p.3ti.site/1721097381.avif" style="width:320px">

`news/README.md` okorresponde `News` , ndive !
`news/begin.md` okorresponde `Our Product is Online !` ndive !

`TOC` Pe vore oñembohysýi ohechauka hag̃ua mbaꞌeichaitépa ojoaju jerárquica pe esquema ha oipytyvõ indentación heta nivel rehegua.

##### Pe Nivel Tuvakuéra Ohai Pe Título Añoite, Ndaha’éi Pe Contenido.

Oĩ jave heta nivel indentación rehegua, pe nivel túva ohai título añoite ha ndahaꞌei contenido. Ndaupeichairamo, oñembotavýta tipografía.

##### Proyecto README.md Rehegua 

`README.md` proyecto rehegua, techapyrãramo, ikatu rehai contenido `en/demo2/README.md` -pe.

Ñañamindu’u ko vore ryepýpe ndohechaukái peteĩ esquema cuadro de contenido rehegua, upévare iporã ñamombyky ipukukue ha jahai peteĩ ñepyrũrã mbykymi.

###### Proyecto Consigna Rehegua

`Your Project slogan` : `Deme Two`

<img alt="" src="https://p.3ti.site/1721276842.avif">

: okorresponde pe primera línea rehe `en/demo2/README.md`

```
# Demo Two : Your Project slogan
```

Proyecto `README.md` Pe contenido peteĩha colon `:` riregua título peteĩha nivel-pe ojehecháta proyecto consigna ramo.

Umi puruhára China, Japón ha Corea-gua, eñatendéke eipuruva’erãha colon media ancho `:`

##### Mba'éichapa Ikatu Oñemomýi TOC a Granel?

`TOC` Pe vore tekotevẽ oñemoĩ ñe’ẽ ypykue ryru’ípe.

Techapyrã, ñe’ẽ ypykue ha’éramo `zh/blog/TOC` , upéicharõ `TOC`

Oñemoambuéramo ñe’ẽ ypykue, tekotevẽ `TOC` vore vore peteĩ ñe’ẽme proyecto-pe ambue ñe’ẽme.

Ikatu rehecha ko’ã tembiapoukapy:

```
rsync -av --remove-source-files --include='*/' \
--include='TOC' --exclude='*' en/ zh/
```

Emoambue `en/` ha `zh/` pe tembiapoukapy yvateguápe ne ñe’ẽ kódigo-pe.


