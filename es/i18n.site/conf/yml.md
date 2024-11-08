# .i18n/conf.yml

¡El archivo de configuración para `i18n.site` es `.i18n/conf.yml` y el contenido es el siguiente :

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

Entre ellos, `upload` a `ext:` elemento de configuración significa que solo se cargarán `.md` al publicar.

## Navegación Superior

`nav:` opciones de configuración, correspondientes al menú de navegación en la parte superior de la página de inicio.

<img src="//p.3ti.site/1721051426.avif" style="width:320px">

Entre ellos, `i18n: home` corresponde a `home: Home` en `en/i18n.yml` (donde `en` es el idioma de origen de la traducción del proyecto).

El contenido `en/i18n.yml` es el texto que se muestra en el menú de navegación, que se traducirá según `fromTo` en la configuración, por ejemplo, traducido a `zh/i18n.yml` .

<img src="//p.3ti.site/1721051689.avif" style="width:320px">

Una vez completada la traducción, puede modificar el valor de traducción `yml` , pero no agregue ni elimine la clave de traducción `yml` .

### 0Plantilla De Documento `use: Toc` Con Esquema

`nav` :

```
  - i18n: home
    use: Toc
    url: /
```

`use: Toc` significa renderizar usando una plantilla `Toc` , que es renderizar una sola plantilla `Markdown` .

`TOC` es la abreviatura de `Table of Contents` Cuando se renderice esta plantilla, el contorno de este archivo `Markdown` se mostrará en la barra lateral.

`url:` representa la ruta del archivo de `Markdown` ( `/` corresponde al directorio raíz `/README.md` , este nombre de archivo requiere un prefijo en mayúsculas y un sufijo en minúsculas).

### 0Plantilla De Documento `use: Md` Sin Esquema

La plantilla `Md` y la plantilla `Toc` son iguales y ambas se utilizan para representar un único archivo `Markdown` . Pero la plantilla `Md` no muestra el contorno en la barra lateral.

Puede modificar `use: Toc` en la configuración anterior a `use: Md` , ejecutar `i18n.site` en el directorio `md` nuevamente y luego visitar la URL de vista previa del desarrollo para observar los cambios en la página de inicio.

### `use: Blog` Plantillas De Blogs

La plantilla del blog muestra una lista de artículos (títulos y resúmenes) en orden de tiempo de publicación.

[→ Haga clic aquí para conocer la configuración específica](/i18n.site/conf/blog)

### 0Plantillas De Documentos De `use: Doc` Archivos

En el archivo de configuración:

```
  - i18n: doc
    menu: NB demo1,demo2
    use: Doc
```

Indica el uso de `Doc` para la representación de la plantilla.

`Doc` admite la integración de varios `MarkDown` para generar esquemas de documentos para uno o varios proyectos.

#### Múltiples Proyectos Y Múltiples Archivos

La configuración de `.i18n/conf.yml` en `i18n:doc` es el modo de renderizado de múltiples proyectos y múltiples archivos.

Aquí, `menu: NB demo1,demo2` , significa usar la plantilla `NB` para representar el menú desplegable.

<img src="//p.3ti.site/1721275191.avif" width="320px">

`NB` , que es la abreviatura de `Name Breif` , significa que el menú desplegable puede mostrar el nombre y el eslogan del proyecto.

`NB` va seguido del parámetro `demo1,demo2` que se le pasa.

Nota : ** No debe haber espacios ** antes y después de la coma `,` en `demo1,demo2` .

El archivo de índice de directorio correspondiente para los parámetros anteriores es:

* `en/demo1/TOC`
* `en/demo2/TOC`

#### Un Solo Proyecto, Múltiples Archivos.

Si solo tienes un proyecto, puedes configurarlo de la siguiente manera.

```
  - i18n: doc
    url: flashduty
    use: Doc
```

> [!WARN]
> Un proyecto único con varios archivos no admite la configuración de `url` como ruta raíz `/`
> Si __conf.yml → nav:__ No se configura ninguna ruta raíz, al acceder a la página de inicio del sitio web, se reescribirá automáticamente en la primera URL en la configuración `nav:` .
> Este diseño tiene como objetivo distinguir mejor los documentos del proyecto, blogs y otro contenido a través de directorios.
> Se recomienda utilizar un solo archivo y una sola página como página de inicio.

> [!TIP]
> Si no se escribe `url` , `url` tiene por defecto el valor `i18n` Esta regla también tiene efecto para otras plantillas.

#### Índice De La Tabla De Contenidos TOC

Si la plantilla `use: Doc` está habilitada en la configuración, habilite el complemento `i18n.addon/toc` en `.i18n/conf.yml` ¡La configuración es la siguiente :

```yml
addon:
  - i18n.addon/toc
```

`i18n.site` instalará y ejecutará automáticamente este complemento, leerá `TOC` el archivo de índice del directorio y generará `json` el esquema del directorio.

Si se trata de un proyecto único con varios archivos, el directorio raíz `TOC` es el directorio correspondiente a `url:` en el directorio del idioma de origen. Por ejemplo, si el idioma de origen es el chino: el archivo correspondiente a `url: flashduty` es `zh/flashduty/TOC` .

Si se trata de varios proyectos y varios archivos, no es necesario configurar `url:` El directorio raíz de `TOC` es el directorio correspondiente al valor de `i18n` .

##### Explicación Detallada Del Contenido

`en/blog/TOC` contenido es el siguiente :

```
README.md

news/README.md
  news/begin.md
```

##### Utilice Sangría Para Indicar Niveles.

`README.md` en la primera fila del `en/blog/TOC` de arriba corresponde al `i18n.site` en la imagen de abajo, que es el nombre del proyecto.

Las siguientes dos líneas se muestran en la siguiente captura de pantalla.

<img src="https://p.3ti.site/1721097381.avif" style="width:320px">

`news/README.md` corresponde a `News` ,
`news/begin.md` corresponde a `Our Product is Online !`

`TOC` los archivos tienen sangría para indicar la relación jerárquica del esquema, admiten sangría de varios niveles y comentarios de línea que comienzan con `# ` .

##### El Nivel Principal Solo Escribe El Título, No El Contenido.

Cuando hay varios niveles de sangría, el nivel principal solo escribe el título y no el contenido. De lo contrario, la tipografía se estropeará.

##### Proyecto README.md

El contenido se puede escribir en el elemento `README.md` , como `en/demo2/README.md` .

Tenga en cuenta que el contenido de este archivo no muestra un resumen de la tabla de contenidos, por lo que se recomienda limitar la extensión y escribir una breve introducción.

###### Lema Del Proyecto

Puede ver que `Deme Two` tiene el eslogan del proyecto debajo del menú desplegable y el nombre del `Your Project slogan` del esquema del catálogo :

![](https://p.3ti.site/1721276842.avif)

¡Esto corresponde a la primera fila de `en/demo2/README.md` :

```
# Demo Two : Your Project slogan
```

El contenido después de los primeros dos puntos `:` del título de primer nivel del proyecto `README.md` se considerará como el eslogan del proyecto.

Usuarios de China, Japón y Corea, tengan en cuenta que deben utilizar dos puntos de ancho medio `:` en lugar de dos puntos de ancho completo.

##### ¿Cómo Mover TOC De Forma Masiva?

`TOC` deben colocarse en el directorio del idioma de origen.

Por ejemplo, si el idioma de origen es el chino, entonces `TOC` anterior es `zh/blog/TOC` .

Si se modifica el idioma de origen, debe mover por lotes los archivos `TOC` de un determinado idioma en el proyecto a otro idioma.

Puede consultar los siguientes comandos:

```
rsync -av --remove-source-files --include='*/' \
--include='TOC' --exclude='*' en/ zh/
```

Modifique `en/` y `zh/` en el comando anterior a su código de idioma.

### Carga Predeterminada Sin Ruta De Configuración

Para acceder a una determinada ruta, si el prefijo de la ruta no está configurado en `nav:` , el archivo `MarkDown` correspondiente a la ruta se cargará de forma predeterminada y se representará utilizando la plantilla `Md` .

Por ejemplo, si se accede `/test` y se configura `nav:` sin el prefijo de esta ruta, y el idioma de navegación actual es inglés (código `en` ), `/en/test.md` se cargará de forma predeterminada y se representará usando la plantilla `Md` .

Si `/en/test.md` este archivo no existe, se mostrará la página `404` predeterminada.

<img src="//p.3ti.site/1721184299.avif" style="width:360px">