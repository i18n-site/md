# .i18n/conf.yml

`i18n.site` ukatakix perfil ukax `.i18n/conf.yml` ukhamawa.

Jani ukaxa [`i18`](/i18) , `ignore:` ukatxa `i18n:` ukanakana utt’ayatawa, configuración qillqataxa akhamawa:

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

Jupanak taypinx `upload` ukat `ext:` configuración elemento ukax `.md` ukakiw uñt’ayasiñatak apkatasini sañ muni.

## Pata Navegación Ukax nav

`nav:` configuración amtawinaka, ukaxa menú de navegación ukampi chika luratawa, ukaxa nayraqata uñtatawa.

<img src="//p.3ti.site/1721051426.avif" style="width:320px">

Jupanakatxa, `i18n: home` `en/i18n.yml` ukan `home: Home` ukar uñtasitawa.

`en/i18n.yml` walja arunakaruw jaqukipata, sañäni, `zh/i18n.yml` .

<img src="//p.3ti.site/1721051689.avif" style="width:320px">

Jaqukipaña tukuyatatxa, jaqukipaña `yml` chimpuxa mayjt’ayatarakiwa, ukampisa janiwa jaqukipaña llave `yml` ukampi yapxatañakiti jani ukaxa chhaqtayañakiti.

### `use: Toc` , Mä Sapa Archivo Plantilla (Contorno Ukamp) .

`nav` :

```
  - i18n: home
    use: Toc
    url: /
```

`use: Toc` `Toc` plantilla apnaqañ uñacht’ayaña sañ muni, ukax mä sapa `Markdown` plantilla uñacht’ayañawa.

`TOC` ukax `Table of Contents` abreviaturawa.Kunapachatix aka plantilla uñacht’ayatäni ukhax aka `Markdown` qillqatan contornopax lado barra ukan uñacht’ayatarakiniwa.

`url:` ukax `Markdown` ukan qillqañ thakhip uñacht’ayi ( `/` saphi directorio `/README.md` ukar uñtasitawa, aka qillqat sutix jach’a qillqat nayrïr aruchja ukat jisk’a qillqañ sufijo ukaruw munaraki).

### `use: Md` , Mä Sapa Archivo Plantilla (Janiw Esquema) .

`Md` plantilla ukat `Toc` plantilla ukax pachpakiw ukatx panpachaw mä sapa `Markdown` archivo uñacht’ayañatakiw apnaqasi. Ukampis `Md` plantillax janiw barra lateral ukan contorno uñacht’aykiti.

Aka pata configuración ukanx `use: Toc` ukarux `use: Md` ukar mayjt’ayaraksnawa, `i18n.site` ukarux `md` directorio ukanx wasitatw apnaqasma, ukatx URL de desarrollo previsualización ukar mantasmawa, nayrïr uñstawin mayjt’awinak uñjañataki.

### Nayraqata Carga Ukaxa Jani Configuración Thakhimpi

Mä thakhix mantani ukatx thakhi prefijo ukax janiw `nav:` ukan wakicht’atäkiti, uka thakhimp chikancht’asir `MarkDown` qillqatax nayraqat apkatatawa ukatx `Md` plantilla apnaqasaw uñacht’ayasi.

Amuyt’añataki, `/test` ukax mantani, ukatx `nav:` ukax jan uka thakhinjam wakicht’atawa, ukatx pankan arupax inglés aru (código `en` ), `/en/test.md` nayraqat apkatatawa ukatx plantilla `Md` ukampiw uñacht’ayasi.

Uka `/en/test.md` aka qillqataxa janiwa utjkiti, ukaxa `404` uñacht’ayatawa.

<img src="https://p.3ti.site/1721184299.avif" style="width:360px">

### `use: Doc` , Walja Archivonakan Plantilla

Uka configuración qillqatanxa:

```
  - i18n: blog
    use: Doc
```

Plantilla uñacht’ayañatakix `Doc` apnaqañ uñacht’ayi.

`Doc` plantilla ukax walja `MarkDown` ukar mayacht’añ yanapt’i, sapa jan ukax walja proyectos ukanakatakix documentos ukan esquemas ukanakap lurañataki.

#### Mä Sapa Proyecto (Walja Archivonaka) .

`blog` ukax mä sapa chimpun modalidad `Doc` ukankiwa.

```
  - i18n: blog
    url: blog
    use: Doc
```

##### Kunawsatix url Ukax Ch’usäki Ukhax i18n Ukarjam Uñt’atawa

`url` jan qillqt’atäki ukhaxa, `url` `i18n` ukjaruw uñt’ayasi, aka kamachix yaqha plantillas ukanakatakis ch’amanchatarakiwa.

Aka pata qillqañ thakhix `url: blog` ukar uñtasitawa, ukatx ukax `en/blog/TOC` ukhamawa.

#### Walja Proyectos Ukanakaw Utji

Configuración `i18n:doc` ukat `.i18n/conf.yml` ukax walja proyectos ukan modalidad ukawa.

```
  - i18n: doc
    menu: NB demo1,demo2
    use: Doc
```

<img src="https://p.3ti.site/1721275191.avif" width="320px">

Aka tuqinxa, `menu: NB demo1,demo2` , ukax `NB` plantilla apnaqaña sañ muni, ukax menú desplegable uñacht’ayañataki.

`NB` , ukax `Name Breif` abreviatura ukawa, ukax sañ muniw menú desplegable ukax proyecton sutipa ukat consigna uñacht’ayaspa.

`NB` ukax parámetro `demo1,demo2` ukampiw arktasi.
`demo1,demo2` : ** `,` **

Uka pata parámetros ukanakatakix directorio índice arxiwux akhamawa:

* `en/demo1/TOC`
* `en/demo2/TOC`

#### TOC Tabla De Contenidos Ukax Mä Índice Ukankiwa

`i18n.site` ukaxa `js` plug-in `.i18n/hook/after.tran/TOC.js` uka demo almacén ukanxa phuqhañapawa `doc` directorio índice archivo uñakipañataki `TOC` plantilla configuración ukarjama `json` directorio esquema lurañataki.

`doc` plantilla apnaqasa, aka plugin ukax utjañapawa.

Mä ch’usat carpeta `i18n.site` proyecto qalltaña, amtañani demo proyecto `.i18n` directorio ukar copiaña.

`Doc` plantilla ukax tabla de contenidos ukan esquema ukarjam uñacht’ayatawa, ukax generado `json` ukarjam luratawa.

##### Contenido Tuqit Sum Qhanañcht’aña

`en/blog/TOC` akhamawa :

```
README.md

news/README.md
  news/begin.md
```

##### Niveles Ukanaka Uñacht’ayañatakixa Indentación Ukampiwa Apnaqaña

Nayrïr fila `en/blog/TOC` patat `README.md` akham jamuq uñacht’ayat `i18n.site` ukar uñtasitawa, ukax proyecto sutiwa.

Jutïr pä chimpunakax kunjamtix pantalla uñacht’ayaski ukhamarjamawa.

<img src="https://p.3ti.site/1721097381.avif" style="width:320px">

`news/README.md` ukax `News` , 1 ukar uñtasitawa.
`news/begin.md` `Our Product is Online !` ukar uñtasitawa

`TOC` archivonakax indentados ukanakaw uñacht’ayasi, ukax esquema ukan jerárquico ukan mayacht’asitapa uñacht’ayañatakiw ukat walja niveles ukan indentación ukar yanapt’añataki.

##### Nivel Awki Taykax Titulo Ukakiw Qillqt’i, Janiw Contenido Ukakiti.

Kunawsatix walja niveles de indentación ukanakax utjki ukhax nivel de padre ukax título ukakiw qillqt’i ukatx janiw contenido ukakiti. Jan ukhamäkanixa, tipografía ukax jan walt’ayataw uñjasispa.

##### Proyecto README.md Ukax Mä Jach’a Lurawiwa

Contenido ukax `README.md` t’aqaruw qillqt’asispa, kunjamatix `en/demo2/README.md` .

Qhanacht’añatakix aka qillqatan utjki ukax janiw mä tabla de contenido ukan esquema uñacht’aykiti, ukatwa mä jisk’a uñt’ayawi qillqt’añax wali askiwa.

###### Proyecto Ukan Consigna

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