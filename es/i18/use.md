# Instalar Y Usar

## windows Primero Instala git bash

windows Sistema, [haga clic aquí para descargarlo e instalarlo primero `git bash`](https://git-scm.com/download/win)

Ejecute operaciones posteriores en `git bash`

## Instalar

```sh
bash <(curl -sS https://i.i18n.site) i18
```

### Configurar Token De Traducción

¡Visita [i18n.site/token](//i18n.site/token) Haz clic para copiar el token.

<img src="https://p.3ti.site/1719911689.avif" style="max-width:400px">

¡Crea `~/.config/i18n.site.yml` pega el contenido copiado en él, el contenido es el siguiente:

```
token: YOUR_API_TOKEN
```

Además, debe [i18n.site/payBill](//i18n.site/payBill) una tarjeta de crédito para realizar el pago (no se requiere recarga, el sitio web deducirá automáticamente las tarifas según el uso; [consulte la página de inicio para conocer los precios](/#price) ).

## Usar

### Proyecto De Demostración

`i18` Consulte el proyecto de demostración para conocer la configuración de la traducción [github.com/i18n-site/demo.i18](//github.com/i18n-site/demo.i18)

¡Los usuarios en China pueden clonar [atomgit.com/i18n/demo.i18](//atomgit.com/i18n/demo.i18)

Después de la clonación, ingrese al directorio y ejecute `i18` para completar la traducción.

### Estructura De Directorios

La estructura del directorio del almacén de plantillas es la siguiente

```
┌── .i18n
│  └── conf.yml
└── en
   ├── _IgnoreDemoFile.md
   ├── i18n.yml
   └── README.md
```

El directorio `en` contiene los archivos de demostración traducidos, que son sólo un ejemplo y se pueden eliminar.

### Ejecutar Traducción

Ingrese al directorio y ejecute `i18` para traducir.

### Agregar Archivos Al Repositorio

Además de la traducción, el programa también generará los siguientes archivos; agréguelos al repositorio.

```
.i18n/hash
.i18n/cache/.gitignore
```

Entre ellos, el contenido de `.i18n/cache/.gitignore` es el siguiente :

```
**/*
!**/.gitignore
```

Esto significa ignorar todos los archivos en el directorio `.i18n/cache/` (excepto `.i18n/cache/.gitignore` ).

Si su software de control de versiones no lo es `git` ignórelo de acuerdo con esta configuración.

## Archivo De Configuración

`.i18n/conf.yml` Es el archivo de configuración de la herramienta de traducción de línea `i18`

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

En el archivo de configuración, los subordinados de `fromTo`

`en` es el idioma de origen, `zh ja ko de fr` es el idioma de destino de la traducción.

Código de idioma ver [i18n.site/i18/LANG_CODE](https://i18n.site/i18/LANG_CODE)

Por ejemplo, si desea traducir del chino al inglés, ¡reescriba esta línea `zh: en`

Si desea traducir a todos los idiomas admitidos, ¡déjelo en blanco después `:` Por ejemplo

```
i18n:
  fromTo:
    en:
```

### Ignorar Archivo

De forma predeterminada, se traducirán todos los archivos que comiencen con `.md` y `.yml` en el directorio del idioma de origen.

Si desea ignorar ciertos archivos y no traducirlos (como borradores sin terminar), puede usar la configuración `ignore` campo.

`ignore` Utiliza una sintaxis similar a `.gitignore` [globset](https://docs.rs/globset/latest/globset/#syntax)

Por ejemplo, en el archivo de configuración anterior `_* ` significa que los archivos que comienzan con `_` no se traducirán.

## Reglas De Traducción

### Los Editores De Traducción No Deben Agregar Ni Eliminar Líneas.

La traducción es editable. Modifica el texto original y vuelve a traducirlo automáticamente, las modificaciones manuales de la traducción no se sobrescribirán (si no se ha modificado este párrafo del texto original).

Pero tenga en cuenta que las líneas de la traducción y el texto original deben corresponder uno a uno. Es decir, no agregue ni elimine líneas al compilar la traducción. De lo contrario, causará confusión en el caché de edición de traducción.

Si algo sale mal, consulte [las preguntas frecuentes para encontrar soluciones.](/i18/qa#H1)

### `YAML` Traducir

La herramienta de línea de comandos encontrará todos los archivos que terminen en `.yml` en el directorio de archivos del idioma de origen y los traducirá.

* Tenga en cuenta que el sufijo del nombre del archivo debe ser `.yml` (no `.yaml` ).

La herramienta solo traduce los valores del diccionario en `.yml` no las claves del diccionario.

Por ejemplo `i18n/en/i18n.yml`

```
apiToken: API Token
defaultToken: Default Token
```

será traducido como `i18n/zh/i18n.yml`

```
apiToken: 接口令牌
defaultToken: 默认令牌
```

La traducción de `YAML` también se puede modificar manualmente (pero no agregue ni elimine claves o líneas en la traducción).

Basado en `YAML` Translation, puede crear fácilmente soluciones internacionales para varios lenguajes de programación.

## Uso Avanzado

### Subdirectorio De Traducción

Siempre que cree `.i18n/conf.yml` (no es necesario comenzar desde la plantilla del proyecto de demostración cada vez), `i18` funcionará bien.

La herramienta de línea de comando encontrará la configuración `.i18n/conf.yml` en todos los subdirectorios y la traducirá.

Los proyectos que utilizan la arquitectura [monorepo](//monorepo.tools) pueden dividir archivos de idioma en subdirectorios.

<img alt="" src="https://p.3ti.site/1719910016.avif">

### Directorio De Instalación Personalizado

Se instalará en `/usr/local/bin` de forma predeterminada.

Si `/usr/local/bin` no tiene permiso de escritura, se instalará en `~/.bin` .

Establecer variables de entorno `TO` Puede definir el directorio de instalación, por ejemplo :

```sh
TO=/bin sudo bash <(curl -sS https://i.i18n.site) i18
```
