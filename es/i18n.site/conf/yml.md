# .i18n/conf.yml

El archivo de configuración para `i18n.site` es `.i18n/conf.yml`, y su contenido es el siguiente:

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

Entre ellos, la configuración `upload` de `ext:` indica que solo se subirán archivos `.md` al publicar.

## Navegación superior

Las opciones de configuración `nav:` corresponden al menú de navegación en la parte superior de la página de inicio.

<img src="//p.3ti.site/1721051426.avif" style="width:320px">

Entre ellos, `i18n: home` corresponde a `home: Home` en `en/i18n.yml` (donde `en` es el idioma de origen del proyecto).

El contenido de `en/i18n.yml` es el texto que se muestra en el menú de navegación, y se traducirá según la configuración `fromTo`, por ejemplo, traducido a `zh/i18n.yml`.

<img src="//p.3ti.site/1721051689.avif" style="width:320px">

Después de completar la traducción, puede modificar los valores de los archivos `yml` de la traducción, pero no debe agregar ni eliminar claves de los archivos `yml`.

### `use: Toc`, plantilla de archivo único con esquema

En la configuración `nav`:

```
  - i18n: home
    use: Toc
    url: /
```

`use: Toc` significa que se utilizará la plantilla `Toc` para renderizar, lo cual es renderizar un único archivo `Markdown`.

`TOC` es la abreviatura de `Table of Contents`; esta plantilla, al renderizarse, mostrará el esquema de este archivo `Markdown` en la barra lateral.

`url:` representa la ruta del archivo `Markdown` ( `/` corresponde al directorio raíz `/README.md`, y el nombre del archivo debe tener el prefijo en mayúsculas y el sufijo en minúsculas).

### `use: Md`, plantilla de archivo único sin esquema

La plantilla `Md` y la plantilla `Toc` son iguales y se utilizan ambas para renderizar un único archivo `Markdown`. Sin embargo, la plantilla `Md` no muestra el esquema en la barra lateral.

Puede modificar `use: Toc` en la configuración anterior a `use: Md`, ejecutar `i18n.site` nuevamente en el directorio `md`, y luego visitar la URL de vista previa del desarrollo para observar los cambios en la página de inicio.

### `use: Blog`, plantilla de blog

La plantilla de blog muestra una lista de artículos (títulos y resúmenes) en orden cronológico de publicación.

[→ Haga clic aquí para conocer la configuración específica](/i18n.site/conf/blog)

### `use: Doc`, plantilla de documento de múltiples archivos

En el archivo de configuración:

```
  - i18n: doc
    menu: NB demo1,demo2
    use: Doc
```

Esto indica que se utilizará `Doc` para la renderización de la plantilla.

La plantilla `Doc` admite la integración de múltiples archivos `Markdown` para generar un esquema de documentos para uno o varios proyectos.

#### Múltiples proyectos y múltiples archivos

La configuración `.i18n/conf.yml` para `i18n:doc` es el modo de renderizado para múltiples proyectos y múltiples archivos.

Aquí, `menu: NB demo1,demo2` significa que se utilizará la plantilla `NB` para renderizar el menú desplegable.

<img src="//p.3ti.site/1721275191.avif" width="320px">

`NB` es la abreviatura de `Name Brief`, lo que significa que el menú desplegable puede mostrar el nombre y el lema del proyecto.

`NB` se sigue de los parámetros `demo1,demo2`.

Nota : ** No debe haber espacios ** antes y después de la coma `,` en `demo1,demo2`.

Para los parámetros anteriores, el archivo de índice de directorio correspondiente es:

* `en/demo1/TOC`
* `en/demo2/TOC`

#### Un solo proyecto y múltiples archivos

Si tiene solo un proyecto, puede configurarlo de la siguiente manera.

```
  - i18n: xxx
    use: Doc
```

##### Cuando La url Está Vacía, El Valor Predeterminado Es i18n

Si no se escribe `url`, el valor predeterminado de `url` es `i18n`, una regla que también se aplica a otras plantillas.

La escritura anterior es equivalente a tener `url: xxx`, y el archivo correspondiente es `en/xxx/TOC`.

#### Índice De La Tabla De Contenidos TOC

`i18n.site` ejecutará el complemento `js` `.i18n/hook/after.tran/TOC.js` en el repositorio de demostración para leer el archivo de índice `TOC` correspondiente a la configuración de la plantilla `doc` y generar el esquema `json` de directorios.

Si utiliza la plantilla `doc`, debe tener este complemento.

Si inicializa el proyecto `i18n.site` desde una carpeta vacía, recuerde copiar el directorio `.i18n` del proyecto de demostración a su carpeta.

La plantilla `Doc` renderizará el esquema de la tabla de contenido basado en el `json` generado.

##### Explicación detallada del contenido

El contenido de `en/blog/TOC` es el siguiente:

```
README.md

news/README.md
  news/begin.md
```

##### Use sangrías para indicar los niveles

La primera línea de `en/blog/TOC`, `README.md`, corresponde a `i18n.site` en la imagen de abajo, es decir, el nombre del proyecto.

Las siguientes dos líneas se muestran en la siguiente captura de pantalla.

<img src="https://p.3ti.site/1721097381.avif" style="width:320px">

`news/README.md` corresponde a `News`
`news/begin.md` corresponde a `Our Product is Online !`

El archivo `TOC` usa sangrías para indicar la relación jerárquica del esquema, admite sangrías de varios niveles y comentarios en líneas que comienzan con `#`.

##### El nivel principal solo escribe el título, no el contenido

En caso de sangrías de varios niveles, el nivel principal solo escribe el título y no el contenido, de lo contrario, se producirá un desorden en el formato.

##### Proyecto README.md

En el archivo `README.md` del proyecto, como `en/demo2/README.md`, se puede escribir contenido.

Tenga en cuenta que el contenido de este archivo no muestra un resumen del esquema, por lo que se recomienda mantenerlo breve y escribir una introducción concisa.

###### Lema del proyecto

Puede ver que `Deme Two` tiene el lema del proyecto debajo del menú desplegable y el nombre `Your Project slogan` en la parte inferior del esquema del catálogo.

![](https://p.3ti.site/1721276842.avif)

Esto corresponde a la primera línea de `en/demo2/README.md`:

```
# Demo Two : Your Project slogan
```

El contenido después de los dos puntos `:` del primer título del nivel del archivo `README.md` del proyecto se considerará como el lema del proyecto.

Los usuarios de China, Japón y Corea deben tener en cuenta que deben usar puntos de ancho medio `:` en lugar de puntos de ancho completo.

##### ¿Cómo realizar el movimiento masivo de TOC?

El archivo `TOC` debe estar en el directorio del idioma de origen.

Por ejemplo, si el idioma de origen es chino, el `TOC` anterior es `zh/blog/TOC`.

Si cambia el idioma de origen, debe mover los archivos `TOC` de un idioma específico del proyecto a otro idioma.

Puede consultar los siguientes comandos:

```
rsync -av --remove-source-files --include='*/' \
--include='TOC' --exclude='*' en/ zh/
```

Modifique `en/` y `zh/` en el comando anterior a su código de idioma.

### Carga predeterminada sin ruta de configuración

Al acceder a una ruta específica, si el prefijo de la ruta no está configurado en `nav:`, se cargará de forma predeterminada el archivo `Markdown` correspondiente a la ruta y se renderizará con la plantilla `Md`.

Por ejemplo, si accede a `/test` y la configuración `nav:` no tiene el prefijo para esta ruta, y el idioma de navegación actual es inglés (código `en`), se cargará `/en/test.md` de forma predeterminada y se renderizará usando la plantilla `Md`.

Si el archivo `/en/test.md` no existe, se mostrará la página predeterminada `404`.

<img src="//p.3ti.site/1721184299.avif" style="width:360px">