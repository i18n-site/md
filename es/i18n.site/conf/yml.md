# .i18n/conf.yml

La configuración para `i18n.site` es `.i18n/conf.yml`.

Exceptuando las configuraciones de [`i18`](/i18), `ignore:` y `i18n:`, el archivo de configuración es el siguiente:

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

Entre ellos, la configuración `upload` de `ext:` indica que solo se subirán archivos `.md` al publicar.

## Navegación superior

Las opciones de configuración `nav:` corresponden al menú de navegación en la parte superior de la página de inicio.

<img src="//p.3ti.site/1721051426.avif" style="width:320px">

Entre ellos, `i18n: home` corresponde a `home: Home` en `en/i18n.yml`.

`en/i18n.yml` se traducirá a varios idiomas, como `zh/i18n.yml`.

<img src="//p.3ti.site/1721051689.avif" style="width:320px">

Después de completar la traducción, puede modificar el valor del `yml` traducido, pero no elimine ni añada claves del `yml` traducido.

### `use: Toc`, plantilla de archivo único (con índice)

En la configuración `nav`:

```
  - i18n: home
    use: Toc
    url: /
```

`use: Toc` significa que se utilizará la plantilla `Toc` para renderizar, lo cual es renderizar una única plantilla `Markdown`.

`TOC` es la abreviatura de `Table of Contents`. Esta plantilla, al renderizarse, mostrará el índice de este archivo `Markdown` en la barra lateral.

`url:` representa la ruta del archivo `Markdown` ( `/` corresponde al directorio raíz `/README.md`, este nombre de archivo debe tener el prefijo en mayúsculas y el sufijo en minúsculas).

### `use: Md`, plantilla de archivo único (sin índice)

La plantilla `Md` y la plantilla `Toc` son iguales y se utilizan para renderizar un archivo `Markdown` único. Sin embargo, la plantilla `Md` no muestra el índice en la barra lateral.

Puede modificar `use: Toc` en la configuración anterior a `use: Md`, ejecutar `i18n.site` nuevamente en el directorio `md` y luego visitar la URL de vista previa del desarrollo para observar los cambios en la página de inicio.

### Carga predeterminada sin ruta de configuración

Si se accede a una ruta y su prefijo no está configurado en `nav:`, se cargará de manera predeterminada el archivo `Markdown` correspondiente a la ruta y se renderizará usando la plantilla `Md`.

Por ejemplo, si se accede a `/test` y la configuración `nav:` no incluye esta ruta, y el idioma de la página es inglés (código `en`), se cargará `/en/test.md` de manera predeterminada y se renderizará usando la plantilla `Md`.

Si `/en/test.md` no existe, se mostrará la página `404` predeterminada.

<img src="https://p.3ti.site/1721184299.avif" style="width:360px">

### `use: Doc`, plantilla de múltiples archivos

En el archivo de configuración:

```
  - i18n: blog
    use: Doc
```

Esto indica que se utilizará `Doc` para la renderización de la plantilla.

La plantilla `Doc` admite la integración de varios archivos `Markdown` para generar un esquema de documentos para uno o varios proyectos.

#### Proyecto único (múltiples archivos)

`blog` mencionado anteriormente es el modo de proyecto único de `Doc`.

```
  - i18n: blog
    url: blog
    use: Doc
```

##### Cuando La url Está Vacía, El Valor Predeterminado Es i18n

Si no se escribe `url` , `url` tiene por defecto el valor `i18n` Esta regla también tiene efecto para otras plantillas.

La escritura anterior es equivalente a `url: blog`, y el archivo correspondiente es `en/blog/TOC`.

#### Múltiples proyectos

La configuración `i18n:doc` en `.i18n/conf.yml` es para el modo de múltiples proyectos.

```
  - i18n: doc
    menu: NB demo1,demo2
    use: Doc
```

<img src="https://p.3ti.site/1721275191.avif" width="320px">

Aquí, `menu: NB demo1,demo2` significa que se utilizará la plantilla `NB` para renderizar el menú desplegable.

`NB` es la abreviatura de `Name Brief`, lo que significa que el menú desplegable puede mostrar el nombre y el eslogan del proyecto.

`NB` se sigue de los parámetros `demo1,demo2`.
Nota: ** No debe haber espacios ** antes y después de la coma `,` en `demo1,demo2`.

Para los parámetros anteriores, el archivo de índice de directorio correspondiente es:

* `en/demo1/TOC`
* `en/demo2/TOC`

#### Índice De La Tabla De Contenidos TOC

`i18n.site` ejecutará `js` complemento `.i18n/hook/after.tran/TOC.js` en el almacén de demostración para leer el archivo de índice `doc` directorios correspondiente a la configuración de `TOC` plantillas para generar el esquema de `json` directorios.

Si se usa la plantilla `doc`, debe haber este complemento.

Si está iniciando un proyecto `i18n.site` desde una carpeta vacía, recuerde copiar `.i18n` del proyecto de demostración a su directorio.

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

Las siguientes dos líneas se muestran en la captura de pantalla a continuación.

<img src="https://p.3ti.site/1721097381.avif" style="width:320px">

`news/README.md` corresponde a `News`
`news/begin.md` corresponde a `Our Product is Online !`

El archivo `TOC` utiliza sangrías para indicar la relación jerárquica del esquema, admite sangrías de varios niveles y comentarios en líneas que comienzan con `#`.

##### El nivel principal solo debe escribir el título, no el contenido

En caso de sangrías de varios niveles, el nivel principal solo debe escribir el título y no el contenido, de lo contrario, se puede desordenar la maquetación.

##### Proyecto README.md

El contenido se puede escribir en el archivo `README.md` del proyecto, como `en/demo2/README.md`.

Tenga en cuenta que el contenido de este archivo no muestra un esquema de contenido, por lo que se recomienda mantenerlo breve y escribir una introducción concisa.

###### Lema del proyecto

Puede ver que `Deme Two` tiene el eslogan del proyecto debajo del menú desplegable y `Your Project slogan` debajo del nombre del proyecto en el esquema del catálogo.

![](https://p.3ti.site/1721276842.avif)

Esto corresponde a la primera línea de `en/demo2/README.md`:

```
# Demo Two : Your Project slogan
```

El contenido después de los dos puntos `:` en el primer nivel del título del archivo `README.md` del proyecto se considerará el eslogan del proyecto.

Los usuarios de China, Japón y Corea deben tener en cuenta que deben usar puntos y comas de ancho medio `:` en lugar de puntos y comas de ancho completo.

##### ¿Cómo realizar un movimiento masivo de TOC?

`TOC` debe colocarse en el directorio del idioma de origen.

Por ejemplo, si el idioma de origen es chino, el `TOC` anterior sería `zh/blog/TOC`.

Si se cambia el idioma de origen, debe mover los archivos `TOC` de un idioma específico en el proyecto a otro idioma.

Puede consultar los siguientes comandos:

```
rsync -av --remove-source-files --include='*/' \
--include='TOC' --exclude='*' en/ zh/
```

Modifique `en/` y `zh/` en el comando anterior a su código de idioma correspondiente.