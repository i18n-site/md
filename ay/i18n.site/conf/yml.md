# .i18n/conf.yml Ukax Mä Juk’a Pachanakanwa

`i18n.site` `.i18n/conf.yml`

Janiwa `ignore:` ukat `i18n:` ukan utt’ayatanakax [`i18`](/i18) , configuración arxiwux akhamawa:

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

Jupanak taypinx `ext:` configuración `.md` `upload`

## Pata Navegación Ukax nav

`nav:`

<img src="//p.3ti.site/1721051426.avif" style="width:320px">

`en/i18n.yml` `home: Home` , `i18n: home`

Walja arunakaruw jaqukipasini, sañäni `zh/i18n.yml` `en/i18n.yml`

<img src="//p.3ti.site/1721051689.avif" style="width:320px">

Jaqukipaña tukuyatatxa, `yml` `yml`

### `use: Toc` , Mä Sapa Archivo Plantilla (Contorno Ukamp)

`nav` :

```
  - i18n: home
    use: Toc
    url: /
```

`use: Toc` ukax `Toc` rendering apnaqaña sañ muni, ukax mä sapa `Markdown` plantilla uñacht’ayañawa.

`TOC` `Table of Contents` `Markdown`

`url:` ukax `Markdown` ( `/` saphi directorio ukar uñtasitawa `/README.md` , aka qillqat sutix jach’a qillqat nayrïr aruchja ukat jisk’a qillqañ sufijo ukaruw munaraki).

### `use: Md` , Mä Sapa Archivo Plantilla (Janiw Esquema Utjkiti)

`Md` `Toc` `Markdown` Ukampirus `Md` plantilla ukax janiw bosquejo ukax barra lateral ukan uñacht’aykiti.

`use: Toc` `use: Md` `md` `i18n.site`

### Nayraqata Carga Ukaxa Jani Configuración Thakhimpi

Mä `MarkDown` mantañ thakhi prefijo `Md` `nav:`

`en` `nav:` `/test` `/en/test.md` `Md`

`/en/test.md` `404`

<img src="https://p.3ti.site/1721184299.avif" style="width:360px">

### `use: Doc` , Walja Archivonakan Plantilla

Uka configuración qillqatanxa:

```
  - i18n: blog
    use: Doc
```

Plantilla uñacht’ayañataki `Doc`

`Doc` `MarkDown`

#### Mä Sapa Proyecto (Walja Archivonaka) .

Aka pata tuqinx mä proyecto ukan modalidad ukaw `Doc` `blog`

```
  - i18n: blog
    url: blog
    use: Doc
```

##### Kunawsatix url Ukax Ch’usäki Ukhax i18n Ukarjam Uñt’atawa

Janitï qillqt'ksta `url` `url` ukax `i18n` ukan valoraparuw uñt'ayasi Aka kamachix yaqha plantillas ukanakatakis ch'amanchatarakiwa.

Aka pata qillqañ thakhix `url: blog` ukatx ukax `en/blog/TOC` .

#### Walja Proyectos Ukanakaw Utji

`.i18n/conf.yml` `i18n:doc` ukan configuración ukax walja proyectos ukan modalidad ukankiwa.

```
  - i18n: doc
    menu: NB demo1,demo2
    use: Doc
```

<img src="https://p.3ti.site/1721275191.avif" width="320px">

Aka chiqanx, `menu: NB demo1,demo2` ukax `NB` apnaqaña sañ muni, ukax menú desplegable ukar uñacht’ayañataki.

`NB` `Name Breif`

`NB` `demo1,demo2`
Qhanacht’añatakix `demo1,demo2` ** chimpunakax utjañapäkiti coma `,` in : **

Aka pata parámetros ukatakixa, correspondiente directorio índice qillqataxa akanakawa:

* `en/demo1/TOC`
* `en/demo2/TOC`

#### TOC Ukax Tabla De Contenidos Ukan Uñacht’ayatawa

`i18n.site` `js` `.i18n/hook/after.tran/TOC.js` `doc` `TOC` `json`

Ukax `doc`

`.i18n` ch’usat carpetat `i18n.site`

`Doc` `json`

##### Contenido Tuqit Sum Qhanañcht’aña

`en/blog/TOC` Ukax akhamawa :

```
README.md

news/README.md
  news/begin.md
```

##### Indentación Ukampi Niveles Uñacht’ayañataki

Pata `en/blog/TOC` Nayrïr chimpun `README.md` akham jamuq uñacht’ayat `i18n.site` ukar uñtasitawa, ukax proyecto sutiwa.

Jutïr pä chimpunakax kunjamtix pantalla uñacht’ayaski ukhamarjamawa.

<img src="https://p.3ti.site/1721097381.avif" style="width:320px">

`news/README.md` Ukax `News` , ukar uñtasitawa !
`news/begin.md` Ukax `Our Product is Online !` ukar uñtasitawa !

`TOC` Archivo ukax esquema ukan jerárquico ukan mayacht’asiwip uñacht’ayañatakiw indentado ukatx walja niveles ukan indentación ukarux yanapt’arakiwa.

##### Nivel Awki Taykax Titulo Ukakiw Qillqt’i, Janiw Contenido Ukakiti.

Kunawsatix walja niveles de indentación ukanakax utjki ukhax nivel de padre ukax título ukakiw qillqt’i ukatx janiw contenido ukakiti. Jan ukhamäkanixa, tipografía ukax jan walt’ayataw uñjasispa.

##### Proyecto README.md Ukax Mä Jach’a Lurawiwa 

`README.md` Proyecto ukan, sañäni, `en/demo2/README.md` ukan contenido qillqt’asma.

Qhanacht’añatakix aka qillqatan utjki ukax janiw mä tabla de contenido ukan esquema uñacht’aykiti, ukatwa mä jisk’a uñt’ayawi qillqt’añax wali askiwa.

###### Proyecto Consigna Ukax Mä Jach’a Amtawiwa

: `Your Project slogan` , `Deme Two`

<img alt="" src="https://p.3ti.site/1721276842.avif">

: nayrïr chimpumpiw uñt'ayasi `en/demo2/README.md`

```
# Demo Two : Your Project slogan
```

Proyecto `README.md` Nayrïr nivel título ukan nayrïr colon `:` ukan qhipa uñstawipax proyecto ukan consigna ukham uñjatäni.

China, Japón ukat Corea uksankir apnaqirinakax, chikat ancho colon apnaqañaw wakisi, jan ukax taqpach ancho colon apnaqañaw wakisi `:`

##### Kunjamas TOC Ukax Jach’a Apthapita?

`TOC`

Amuyt’añataki, uka phunchhawi arux `zh/blog/TOC` ukhamächi ukhax `TOC`

Uka phuqhat arux mayjt’ayatächi ukhaxa, proyecto ukan mä arut yaqha arut yaqha aruruw `TOC` mayjt’ayañax wakisi.

Aka kamachinakwa uñakipt’asma:

```
rsync -av --remove-source-files --include='*/' \
--include='TOC' --exclude='*' en/ zh/
```

`zh/` pata kamachinx `en/`


