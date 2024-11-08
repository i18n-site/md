# .i18n/conf.yml

`i18n.site` ukatakix configuración arxiwux `.i18n/conf.yml` ukat contenido ukax akhamawa :

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

Jupanak taypinx `upload` ukat `ext:` configuración elemento ukax `.md` ukakiw uñt’ayasiñatak apkatasini sañ muni.

## Pata Navegación Ukax nav

`nav:` configuración amtawinaka, ukaxa menú de navegación ukampi chika luratawa, ukaxa nayraqata uñtatawa.

<img src="//p.3ti.site/1721051426.avif" style="width:320px">

Jupanak taypinx `i18n: home` ukax `en/i18n.yml` ukan `home: Home` ukar uñtasitawa (ukanx `en` ukax proyecto jaqukipäwin phuqhat arupawa).

`en/i18n.yml` contenido ukax menú de navegación ukan uñacht’ayat qillqatawa, ukax configuración ukanx `fromTo` ukarjam jaqukipatawa, sañäni, `zh/i18n.yml` ukar jaqukipatawa.

<img src="//p.3ti.site/1721051689.avif" style="width:320px">

Jaqukipaña tukuyatatxa, jaqukipaña `yml` chimpuxa mayjt’ayatarakiwa, ukampisa janiwa jaqukipaña llave `yml` ukampi yapxatañakiti jani ukaxa chhaqtayañakiti.

### `use: Toc` Qillqat Plantilla Ukax Esquema Ukampiwa

`nav` :

```
  - i18n: home
    use: Toc
    url: /
```

`use: Toc` ukax `Toc` plantilla apnaqañ uñacht’ayaña sañ muni, ukax mä sapa `Markdown` plantilla uñacht’ayañawa.

`TOC` ukax `Table of Contents` abreviaturawa.Kunapachatix aka plantilla uñacht’ayatäni ukhax aka `Markdown` qillqatan contornopax lado barra ukan uñacht’ayatarakiniwa.

`url:` ukax `Markdown` ukan qillqañ thakhip uñacht’ayi ( `/` ukax saphi directorio `/README.md` ukar uñtasitawa, aka qillqat sutix jach’a qillqat nayrïr aruchja ukat jisk’a qillqañ sufijo ukaruw munaraki).

### `use: Md` Qillqat Plantilla Jan Esquema

`Md` plantilla ukat `Toc` plantilla ukax pachpakiw ukatx panpachaw mä sapa `Markdown` archivo uñacht’ayañatakiw apnaqasi. Ukampis `Md` plantillax janiw barra lateral ukan contorno uñacht’aykiti.

Aka pata configuración ukanx `use: Toc` ukarux `use: Md` ukar mayjt’ayaraksnawa, `i18n.site` ukarux `md` directorio ukanx wasitatw apnaqasma, ukatx URL de desarrollo previsualización ukar mantasmawa, nayrïr uñstawin mayjt’awinak uñjañataki.

### `use: Blog` Blog Ukan Plantillas Ukanaka

Plantilla de blog ukax mä lista de artículos (títulos ukat resumenes) uñacht’ayi, kuna pachas uñt’ayasi.

[→ Aka tuqir ch’iqt’am configuración específica uka tuqit yatxatañataki](/i18n.site/conf/blog)

### `use: Doc` Archivo Documento Plantillas Ukanaka

Uka configuración qillqatanxa:

```
  - i18n: doc
    menu: NB demo1,demo2
    use: Doc
```

Plantilla uñacht’ayañatakix `Doc` apnaqañ uñacht’ayi.

`Doc` plantilla ukax walja `MarkDown` ukar mayacht’añ yanapt’i, sapa jan ukax walja proyectos ukanakatakix documentos ukan esquemas ukanakap lurañataki.

#### Walja Proyectos Ukat Walja Archivonaka

`.i18n/conf.yml` ukan `i18n:doc` ukan configuración ukax walja proyecto walja archivo uñacht’ayañ thakhiwa.

Aka tuqinxa, `menu: NB demo1,demo2` , ukax `NB` plantilla apnaqaña sañ muni, ukax menú desplegable uñacht’ayañataki.

<img src="//p.3ti.site/1721275191.avif" width="320px">

`NB` , ukax `Name Breif` abreviatura ukawa, ukax sañ muniw menú desplegable ukax proyecton sutipa ukat consigna uñacht’ayaspa.

`NB` ukax parámetro `demo1,demo2` ukampiw arktasi.

`demo1,demo2` : ** `,` **

Aka pata parámetros ukatakix directorio índice ukax akhamawa:

* `en/demo1/TOC`
* `en/demo2/TOC`

#### Mä Proyecto Walja Archivonaka

Mä proyecto ukaki utjchi ukhaxa, akhamawa configurar lurasispa.

```
  - i18n: doc
    url: flashduty
    use: Doc
```

> [!WARN]
> Mä sapa proyecto walja qillqatanakampixa janiwa `url` saphi thakhi `/` ukhama wakicht’añatakixa yanapt’kiti
> __conf.yml → nav:__ Janiwa saphi thakhixa wakicht’atäkiti, kunapachatixa sitio web ukan nayrïr uñstawipar mantañaxa, ukaxa `nav:` wakicht’awi taypina nayrïri URL ukarux mayamp qillqt’atawa.
> Aka diseño ukax proyecto documentos, blogs ukat yaqha contenidonak directorios tuqiw juk’amp sum uñt’ayañataki.
> Mä sapa fichero ukat mä sapa panka apnaqañax wali askiwa.

> [!TIP]
> `url` jan qillqt’atäki ukhaxa, `url` ukax `i18n` ukjaruw uñt’ayasi, aka kamachix yaqha plantillas ukanakatakis ch’amanchatarakiwa.

#### TOC Ukax Tabla De Contenidos Ukan Uñacht’ayatawa

Plantilla `use: Doc` ukax configuración ukan ch’amanchatawa, ukax plugin `i18n.addon/toc` ukan `.i18n/conf.yml` Configuración ukax akhamawa :

```yml
addon:
  - i18n.addon/toc
```

`i18n.site` ukax aka plugin ukax automáticamente uñstayañapawa ukat phuqhañapawa, `TOC` directorio índice qillqata uñakipañapawa, ukatx `json` directorio ukan esquema uñstayañapawa.

Mä sapa proyecto walja archivonakanïchi ukhaxa, saphi directorio `TOC` ukax directorio ukawa, ukax `url:` ukaruw uñt’ayasi, ukax 1 ukaruw uñt’ayasi, ukax chino arut uñt’atawa: `url: flashduty` `zh/flashduty/TOC` uñt’ayi.

Walja proyectos ukat walja archivonaka ukhamächi ukhaxa, janiw `url:` ukar wakicht’añax wakiskiti, `TOC` ukan saphin directoriopax `i18n` ukan valorapar uñtasit directorio ukawa.

##### Contenido Tuqit Sum Qhanañcht’aña

`en/blog/TOC` akhamawa :

```
README.md

news/README.md
  news/begin.md
```

##### Indentación Ukampi Niveles Uñacht’ayañataki

Nayrïr fila `en/blog/TOC` patat `README.md` ukax akham jamuq uñacht’ayat `i18n.site` ukar uñtasitawa, ukax proyecto sutiwa.

Jutïr pä chimpunakax kunjamtix pantalla uñacht’ayaski ukhamarjamawa.

<img src="https://p.3ti.site/1721097381.avif" style="width:320px">

`news/README.md` ukax `News` , 1 ukar uñtasitawa.
`news/begin.md` ukax `Our Product is Online !` ukar uñtasitawa

`TOC` archivonakax indentado ukhamawa, ukax esquema ukan jerárquico ukan mayacht’asiwip uñacht’ayañataki, walja niveles ukan indentación ukar yanapt’añataki, ukatx línea comentarios ukanakax `# ` ukamp qalltatawa.

##### Nivel Awki Taykax Titulo Ukakiw Qillqt’i, Janiw Contenido Ukakiti.

Kunawsatix walja niveles de indentación ukanakax utjki ukhax nivel de padre ukax título ukakiw qillqt’i ukatx janiw contenido ukakiti. Jan ukhamäkanixa, tipografía ukax jan walt’ayataw uñjasispa.

##### Proyecto README.md Ukax Mä Jach’a Lurawiwa

Contenido ukax `README.md` t’aqaruw qillqt’asispa, kunjamatix `en/demo2/README.md` .

Qhanacht’añatakix aka qillqatan utjki ukax janiw mä tabla de contenido ukan esquema uñacht’aykiti, ukatwa mä jisk’a uñt’ayawi qillqt’añax wali askiwa.

###### Proyecto Consigna Ukax Mä Jach’a Amtawiwa

Uñt’apxasmawa `Deme Two` ukax proyecto ukan lema desplegable ukan uñacht’ayatawa ukatx catálogo ukan esquema proyecto sutipa `Your Project slogan` :

![](https://p.3ti.site/1721276842.avif)

Ukax nayrïr t’aqa `en/demo2/README.md` :

```
# Demo Two : Your Project slogan
```

Nayrïr ch’iyar ch’iyar `:` ukat qhiparux nayrïr nivel título proyecto `README.md` ukax proyecto consigna ukham uñjatäni.

China, Japón ukat Corea uksankir apnaqirinakax, chikat ancho colon `:` uka apnaqañaw wakisi, taqpach ancho colon apnaqañat sipansa.

##### Kunjamas TOC Ukax Jach’a Apthapita?

`TOC` qillqatanakax phuqhat aru directorio ukar uchañaw wakisi.

Amuyt’añataki, phuqhat arux chino aru arunakächi ukhax `TOC` alayax `zh/blog/TOC` ukhamawa.

Uka phunchhawi aru mayjt’ayata ukhaxa, proyecto ukan mä arut `TOC` qillqatanakap yaqha aruruw lote ukar apayañaw wakisi.

Aka kamachinakwa uñakipt’asma:

```
rsync -av --remove-source-files --include='*/' \
--include='TOC' --exclude='*' en/ zh/
```

Ukhamaraki, `en/` ukat `zh/` uka kamachinx aruman chimpuparuw mayjt’ayañama.

### Nayraqata Carga Ukaxa Jani Configuración Thakhimpi

Mä thakhi mantañatakixa, thakhi prefijo ukaxa janiwa `nav:` ukana wakicht’atäkiti, uka thakhimpi chikachasiña `MarkDown` qillqataxa nayraqata uñakipatawa ukatxa `Md` plantilla ukampiwa uñacht’ayatarakini.

Amuyt’añataki, `/test` ukax mantani ukatx `nav:` ukax jan aka thakhin nayrïr chimpupampix wakicht’atawa, ukatx jichha uñakipañ arux inglés aru (código `en` ), `/en/test.md` ukax nayraqat apkatatawa ukatx plantilla `Md` ukampiw uñacht’ayasi.

Uka `/en/test.md` aka qillqataxa janiwa utjkiti, ukaxa `404` uñacht’ayatawa.

<img src="//p.3ti.site/1721184299.avif" style="width:360px">