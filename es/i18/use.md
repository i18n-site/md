# Instalación y uso

## En Windows, instale primero Git Bash

windows Sistema, [haga clic aquí para descargar e instalar `git bash`](https://git-scm.com/download/win) primero.

En `Git Bash`, ejecute las operaciones posteriores.

## Instalación

```sh
bash <(curl -sS https://i.i18n.site) i18
```

### Configure el token de traducción

Visite [i18n.site/token](//i18n.site/token) y haga clic para copiar el token

<img src="https://p.3ti.site/1719911689.avif" style="width:400px">

Cree `~/.config/i18n.site.yml` y pegue el contenido copiado en él, como se muestra a continuación:

```
token: YOUR_API_TOKEN
```

Además, debe [registrarse en i18n.site/payBill](//i18n.site/payBill) y enlazar una tarjeta de crédito para el pago (sin necesidad de recarga, el sitio cargo automáticamente según el uso; [consulte los precios en la página de inicio](/#price)).

## Uso

### Proyecto de demostración

Consulte el proyecto de demostración [github.com/i18n-site/demo.i18](//github.com/i18n-site/demo.i18) para aprender sobre la configuración de la traducción con `i18`.

Los usuarios de China pueden clonar [atomgit.com/i18n/demo.i18](//atomgit.com/i18n/demo.i18)

Después de clonar, ingrese al directorio y ejecute `i18` para completar la traducción.

### Estructura del directorio

La estructura del directorio del repositorio de plantillas es la siguiente:

```
┌── .i18n
│  └── conf.yml
└── en
   ├── _IgnoreDemoFile.md
   ├── i18n.yml
   └── README.md
```

El directorio `en` contiene archivos de demostración de traducción, que son solo ejemplos y pueden ser eliminados.

### Ejecutar Traducción

Ingrese al directorio y ejecute `i18` para traducir.

Además de generar la traducción, el programa también creará la carpeta `.i18n/data`; por favor, añádala al repositorio.

Tras traducir un archivo nuevo, se generará un archivo de datos adicional en este directorio. No olvides ejecutar `git add .` para incluirlo.

## Archivo De Configuración

`.i18n/conf.yml` es el archivo de configuración de la herramienta de traducción de línea de comando `i18`

Idioma de origen y idioma de traducción

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

`en` es el idioma de origen, `zh ja ko de fr` son los idiomas de destino de la traducción.

Código de idioma ver [i18n.site/i18/LANG_CODE](https://i18n.site/i18/LANG_CODE)

Si desea traducir a todos los idiomas admitidos, deje el campo después de `:` en blanco. Por ejemplo:

Puede configurar `fromTo` de manera diferente para diferentes subdirectorios o archivos. Un ejemplo de configuración es el siguiente:

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

En esta tabla de configuración, el idioma de origen de la traducción del catálogo `blog` es `zh` y el idioma de origen de la traducción `blog/your_file_name.md` es `ja` .

### Ignorar Archivo

De forma predeterminada, se traducirán todos los archivos que comiencen con `.md` y `.yml` en el directorio del idioma de origen.

Si desea ignorar ciertos archivos y no traducirlos (como borradores sin terminar), utilice el campo `ignore` .

`ignore` usa la misma [globset](https://docs.rs/globset/latest/globset/#syntax) que el archivo `.gitignore` .

Por ejemplo, `_* ` en el archivo de configuración anterior significa que los archivos que comienzan con `_` no se traducirán.

## No se deben agregar ni eliminar líneas en la traducción

### Los Editores De Traducción No Deben Agregar Ni Eliminar Líneas

La traducción es editable. Modifique el texto original y vuelva a traducirlo automáticamente, las modificaciones manuales de la traducción no se sobrescribirán (si no se ha modificado este párrafo del texto original).

Pero tenga en cuenta que las líneas de la traducción y el texto original deben coincidir uno a uno. Es decir, no agregue ni elimine líneas al compilar la traducción. De lo contrario, causará confusión en el caché de edición de traducción.

Si algo sale mal, consulte [las preguntas frecuentes para encontrar soluciones.](/i18/qa#H1)

### Traducción De `YAML`

La herramienta de línea de comando encontrará todos los archivos que terminen en `.yml` en el directorio de archivos del idioma de origen y los traducirá.

* Tenga en cuenta que el sufijo del nombre de archivo debe ser `.yml` (no `.yaml` ).

La herramienta solo traduce los valores del diccionario en `.yml` , no las claves del diccionario.

se traducirá a `i18n/zh/i18n.yml`

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

## Traducción de subdirectorios

### Subdirectorio De Traducción

Siempre que se cree `.i18n/conf.yml` (no es necesario comenzar desde la plantilla del proyecto de demostración cada vez), `i18` funcionará bien.

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