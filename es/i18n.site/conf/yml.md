# .i18n/conf.yml

`i18n.site` El archivo de configuración es `.i18n/conf.yml` .

Excepto por `ignore:` y `i18n:` de [`i18`](/i18) , el archivo de configuración es el siguiente:

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

Entre ellos, el elemento de configuración `ext:` de `upload` significa que solo se cargarán `.md` al publicar.

## Navegación Superior

`nav:` Opciones de configuración, correspondientes al menú de navegación en la parte superior de la página de inicio.

<img src="//p.3ti.site/1721051426.avif" style="width:320px">

Entre ellos, `i18n: home` corresponde a `en/i18n.yml`中`home: Home` .

`en/i18n.yml` se traducirá a varios idiomas, como `zh/i18n.yml` .

<img src="//p.3ti.site/1721051689.avif" style="width:320px">

Una vez completada la traducción, puede modificar el valor de `yml` en la traducción, pero no agregue ni elimine la clave de traducción `yml` .

### `use: Toc` , Plantilla De Archivo Único (Con Esquema)

`nav` Configurando :

```
  - i18n: home
    use: Toc
    url: /
```

`use: Toc` significa utilizar la representación `Toc` , que representa una única plantilla `Markdown` .

`TOC` es la abreviatura de `Table of Contents` . Cuando se renderice esta plantilla, el contorno de este archivo `Markdown` se mostrará en la barra lateral.

`url:` Representa la ruta del archivo de `Markdown` ( `/` corresponde al directorio raíz `/README.md` , este nombre de archivo requiere un prefijo en mayúsculas y un sufijo en minúsculas).

### `use: Md` , Plantilla De Archivo Único (Sin Esquema)

`Md` Plantilla es lo mismo que `Toc` , ambos se utilizan para representar un solo archivo `Markdown` . Sin embargo `Md` la plantilla no muestra el esquema en la barra lateral.

Puede modificar `use: Toc` en la configuración anterior a `use: Md` , ejecutar `i18n.site` en el directorio `md` nuevamente y luego visitar la URL de vista previa del desarrollo para observar los cambios en la página de inicio.

### Carga Predeterminada Sin Ruta De Configuración

Si el prefijo de ruta de una determinada ruta a la que se accede no está configurado en `nav:` el archivo `MarkDown` correspondiente a la ruta se cargará de forma predeterminada y se representará usando la plantilla `Md` .

Por ejemplo, si visita `/test` y `nav:` está configurado sin esta ruta y el idioma de la página es inglés (código `en` ), la plantilla se cargará `/en/test.md` y se representará usando `Md` de forma predeterminada.

`/en/test.md` este archivo no existe, se mostrará la página `404` predeterminada.

<img src="https://p.3ti.site/1721184299.avif" style="width:360px">

### `use: Doc` , Plantilla De Varios Archivos

En el archivo de configuración:

```
  - i18n: blog
    use: Doc
```

Indica el uso de `Doc` para la representación de plantillas.

`Doc` La plantilla admite la integración de varios `MarkDown` para generar esquemas de documentos para proyectos únicos o múltiples.

#### Proyecto Único (Varios Archivos)

`blog` en lo anterior es el modo de proyecto único de `Doc` .

```
  - i18n: blog
    url: blog
    use: Doc
```

##### Cuando La url Está Vacía, El Valor Predeterminado Es i18n.

Si no escribe `url` , `url` tiene el valor `i18n` . Esta regla también tiene efecto para otras plantillas.

El método de escritura anterior equivale a tener `url: blog` Y su archivo correspondiente es `en/blog/TOC` .

#### Múltiples Proyectos

`.i18n/conf.yml` La configuración en `i18n:doc` es modo multiproyecto.

```
  - i18n: doc
    menu: NB demo1,demo2
    use: Doc
```

<img src="https://p.3ti.site/1721275191.avif" width="320px">

Aquí, `menu: NB demo1,demo2` significa usar `NB` para representar el menú desplegable.

`NB` , es la abreviatura de `Name Breif` , indicando que en el menú desplegable se puede mostrar el nombre y el eslogan del proyecto.

`NB` va seguido del parámetro `demo1,demo2` que se le pasa.
Tenga en cuenta que no debe haber espacios ** antes y después `demo1,demo2` la coma `,` en : **

Para los parámetros anteriores, el archivo de índice de directorio correspondiente es:

* `en/demo1/TOC`
* `en/demo2/TOC`

#### Índice De La Tabla De Contenidos TOC

`i18n.site` Ejecutará el `js` complemento `.i18n/hook/after.tran/TOC.js` en el almacén de demostración para leer el archivo de índice del directorio `doc` correspondiente a la configuración de la plantilla `TOC` para generar `json` del esquema del directorio.

Si utiliza la plantilla `doc` , debe tener este complemento.

Si inicializa el proyecto `i18n.site` desde una carpeta vacía, recuerde copiar `.i18n` en el proyecto de demostración a su directorio.

`Doc` La plantilla representará el esquema de la tabla de contenidos según el `json` generado.

##### Explicación Detallada Del Contenido

`en/blog/TOC` El contenido es el siguiente :

```
README.md

news/README.md
  news/begin.md
```

##### Utilice Sangría Para Indicar Niveles.

Arriba `en/blog/TOC` `README.md` en la primera línea corresponde al `i18n.site` en la imagen de abajo, que es el nombre del proyecto.

Las siguientes dos líneas se muestran en la siguiente captura de pantalla.

<img src="https://p.3ti.site/1721097381.avif" style="width:320px">

`news/README.md` corresponde a `News` ,
`news/begin.md` corresponde a `Our Product is Online !`

`TOC` El archivo tiene sangría para indicar la relación jerárquica del esquema y admite sangría de varios niveles.

##### El Nivel Principal Solo Escribe El Título, No El Contenido.

Cuando hay varios niveles de sangría, el nivel principal solo escribe el título y no el contenido. De lo contrario, la tipografía se estropeará.

##### Proyecto README.md 

`README.md` del proyecto, por ejemplo, puedes escribir contenido en `en/demo2/README.md` .

Tenga en cuenta que el contenido de este archivo no muestra un resumen de la tabla de contenidos, por lo que se recomienda limitar la extensión y escribir una breve introducción.

###### Lema Del Proyecto

Como puede ver, `Deme Two` Debajo del menú desplegable y del nombre del proyecto del esquema del catálogo, está el `Your Project slogan` del proyecto :

<img alt="" src="https://p.3ti.site/1721276842.avif">

: corresponde a la primera línea `en/demo2/README.md`

```
# Demo Two : Your Project slogan
```

Proyecto `README.md` El contenido después de los primeros dos puntos `:` en el título de primer nivel se considerará el eslogan del proyecto.

Usuarios de China, Japón y Corea, tengan en cuenta que deben utilizar dos puntos de ancho medio en lugar de dos puntos de ancho completo `:`

##### ¿Cómo Mover TOC De Forma Masiva?

`TOC` El archivo debe colocarse en el directorio del idioma de origen.

Por ejemplo, si el idioma de origen es el chino, entonces `TOC` arriba es `zh/blog/TOC` .

Si se modifica el idioma de origen, deberá mover por lotes `TOC` de un determinado idioma del proyecto a otro idioma.

Puede consultar los siguientes comandos:

```
rsync -av --remove-source-files --include='*/' \
--include='TOC' --exclude='*' en/ zh/
```

Modifique `en/` y `zh/` en el comando anterior a su código de idioma.


