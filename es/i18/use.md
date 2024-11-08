# Instalar Y Usar

## windows Primero Instala git bash

windows Sistema, haga [clic aquí para descargar e instalar `git bash` primero](https://git-scm.com/download/win) .

Ejecute operaciones posteriores en `git bash` .

## Instalar

```sh
bash <(curl -sS https://i.i18n.site) i18
```

### Configurar Token De Traducción

¡Visita [i18n.site/token](//i18n.site/token) Haz clic para copiar el token.

<img src="https://p.3ti.site/1719911689.avif" style="width:400px">

Cree `~/.config/i18n.site.yml` , pegue el contenido copiado en él, el contenido es el siguiente:

```
token: YOUR_API_TOKEN
```

Además, debe vincular una tarjeta de crédito de pago en [i18n.site/payBill](//i18n.site/payBill) (No se requiere recarga, el sitio web deducirá automáticamente las tarifas según el uso; [consulte la página de inicio para conocer los precios](/#price) ).

## Usar

### Proyecto De Demostración

[github.com/i18n-site/demo.i18](//github.com/i18n-site/demo.i18) Consulte el proyecto de demostración para conocer la configuración de `i18` traducción!

¡Los usuarios en China pueden clonar [atomgit.com/i18n/demo.i18](//atomgit.com/i18n/demo.i18)

Después de la clonación, ingrese al directorio y ejecute `i18` para completar la traducción.

### Estructura Del Directorio

La estructura del directorio del almacén de plantillas es la siguiente

```
┌── .i18n
│  └── conf.yml
└── en
   ├── _IgnoreDemoFile.md
   ├── i18n.yml
   └── README.md
```

Los archivos de demostración traducidos en el directorio `en` son solo un ejemplo y se pueden eliminar.

### Ejecutar Traducción

Ingrese al directorio y ejecute `i18` para traducir.

Además de la traducción, el programa también generará la carpeta `.i18n/data` , agréguela al repositorio.

Después de traducir el nuevo archivo, se generará un nuevo archivo de datos en este directorio. Recuerde agregar `git add . ` .

## Archivo De Configuración

`.i18n/conf.yml` es el archivo de configuración de la herramienta de traducción de línea de comando `i18`

El contenido es el siguiente:

```
i18n:
  fromTo:
    en: zh ja ko de fr
    # en:

ignore:
  - _*
```

### Idioma De Origen & Idioma De Traducción

En el archivo de configuración, el subordinado de `fromTo` :

`en` es el idioma de origen, `zh ja ko de fr` es el idioma de destino de la traducción.

Código de idioma ver [i18n.site/i18/LANG_CODE](https://i18n.site/i18/LANG_CODE)

Por ejemplo, si desea traducir del chino al inglés, vuelva a escribir esta línea `zh: en` .

Si desea traducir a todos los idiomas admitidos, déjelo en blanco después de `:` . Por ejemplo

```
i18n:
  fromTo:
    en:
```

Puede configurar `fromTo` diferentes para diferentes subdirectorios / Una demostración está escrita de la siguiente manera :

```
i18n:
  fromTo:
    en:
  path:
    blog:
      fromTo:
        zh:
    blog/your_file_name.md:
      fromTo:
        ja:
```

En esta tabla de configuración, el idioma de origen de la traducción del catálogo `blog` es `zh` y el idioma de origen de la traducción del catálogo `blog/your_file_name.md` es `ja` .

### Imágenes/Enlaces Multilingües

Cuando las URL en las imágenes y enlaces en `replace:` y `MarkDown` (y los atributos `src` y `href` del `HTML` incrustado) están configuradas en `.i18n/conf.yml` con este prefijo, el código del idioma fuente en la URL será reemplazado por el código de idioma de la traducción ( [idioma lista de códigos](/i18/LANG_CODE) ).

Por ejemplo, su configuración es la siguiente:

```yml
i18n:
  fromTo:
    fr: ko de en zh zh-TW uk ru ja
  replace:
    https://fcdoc.github.io/img/ : ko de uk>ru zh-TW>zh >en
```

`replace: ` es un diccionario, la clave es el prefijo de URL que se reemplazará y el valor es la regla de reemplazo.

El significado de reemplazar la regla `ko de uk>ru zh-TW>zh >en` anterior es que `ko de` usa la imagen de su propio código de idioma, `zh-TW` y `zh` usan la imagen de `zh` , `uk` usa la imagen de `ru` y otros idiomas (como `ja` ) usan la imagen. de `en` por defecto.

Por ejemplo, el archivo fuente francés ( `fr` ) de `MarkDown` es el siguiente :

```md
![xx](https://i18n-img.github.io/fr/1.avif)
<video src="https://i18n-img.github.io/fr/1.mp4"></video>
[xx](https://i18n-img.github.io/fr/README.md)
<a style="color:red" href="https://i18n-img.github.io/fr/i18n.site.gz">xx</a>
```

¡El archivo en inglés ( `en` ) traducido y generado es el siguiente :

```md
![xx](https://i18n-img.github.io/en/1.avif)
<video src="https://i18n-img.github.io/en/1.mp4"></video>
[xx](https://i18n-img.github.io/en/README.md)
<a style="color:red" href="https://i18n-img.github.io/en/i18n.site.gz">xx</a>
```

Aquí, `/en/` en el código del idioma fuente se reemplazan por `/zh/` en el idioma de destino.

Nota : Debe haber `/` antes y después del código de idioma del texto reemplazado en la URL.

> [!TIP]
> Si `- /` está configurado en `url:` , solo coincidirán las rutas relativas, pero las URL que comiencen con `//` no coincidirán.
>
> Si algunos enlaces de un nombre de dominio quieren ser reemplazados y otros no, puede usar diferentes prefijos, como `[x](//x.com/en/)` y `[x](https://x.com/en/)` para distinguirlos.

### Ignorar Archivo

De forma predeterminada, se traducirán todos los archivos que comiencen con `.md` y `.yml` en el directorio del idioma de origen.

Si deseas ignorar ciertos archivos y no traducirlos (como borradores sin terminar), puedes configurarlo con el campo `ignore` .

`ignore` usa la [globset](https://docs.rs/globset/latest/globset/#syntax) sintaxis que el archivo `.gitignore` .

Por ejemplo, `_* ` en el archivo de configuración anterior significa que los archivos que comienzan con `_` no se traducirán.

## Reglas De Traducción

### Los Editores De Traducción No Deben Agregar Ni Eliminar Líneas.

La traducción es editable. Modifica el texto original y vuelve a traducirlo automáticamente, las modificaciones manuales de la traducción no se sobrescribirán (si no se ha modificado este párrafo del texto original).

> [!WARN]
> Debe haber una correspondencia uno a uno entre las líneas de la traducción y el texto original. Es decir, no agregue ni elimine líneas al compilar la traducción. De lo contrario, causará confusión en el caché de edición de traducción.

Si algo sale mal, consulte [las preguntas frecuentes para encontrar soluciones.](/i18/qa#H1)

### `YAML` Traducciones

La herramienta de línea de comando encontrará todos los archivos que terminan en `.yml` en el directorio de archivos del idioma de origen y los traducirá.

* Tenga en cuenta que el sufijo del nombre de archivo debe ser `.yml` (no `.yaml` ).

La herramienta solo traduce los valores del diccionario en `.yml` , no las claves del diccionario.

Por ejemplo `i18n/en/i18n.yml`

```
apiToken: API Token
defaultToken: Default Token
```

se traducirá como `i18n/zh/i18n.yml`

```
apiToken: 接口令牌
defaultToken: 默认令牌
```

La traducción de `YAML` también se puede modificar manualmente (pero no agregue ni elimine claves o líneas en la traducción).

Basado en traducción `YAML` , puede crear fácilmente soluciones internacionales para varios lenguajes de programación.

## Uso Avanzado

### Subdirectorio De Traducción

Mientras se cree `.i18n/conf.yml` (no es necesario comenzar desde la plantilla del proyecto de demostración cada vez), `i18` funcionará bien.

La herramienta de línea de comando encontrará `.i18n/conf.yml` configuraciones en todos los subdirectorios y las traducirá.

Los proyectos que utilizan la arquitectura [monorepo](//monorepo.tools) pueden dividir archivos de idioma en subdirectorios.

![](https://p.3ti.site/1719910016.avif)

### Directorio De Instalación Personalizado

Se instalará en `/usr/local/bin` de forma predeterminada.

Si `/usr/local/bin` no tiene permiso de escritura, se instalará en `~/.bin` .

Configurar la variable de entorno `TO` puede definir el directorio de instalación, por ejemplo :

```sh
TO=/bin sudo bash <(curl -sS https://i.i18n.site) i18
```