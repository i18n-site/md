# Instalación y Uso

## En Windows, primero instale Git Bash

En el sistema Windows, primero [haga clic aquí para descargar e instalar `git bash`](https://git-scm.com/download/win).

En `git bash`, ejecute las operaciones posteriores.

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

Además, debe vincular una tarjeta de crédito en [i18n.site/payBill](//i18n.site/payBill) (sin necesidad de recargar, el sitio cobrará automáticamente según el uso, [consulte los precios en la página de inicio](/#price)).

## Uso

### Proyecto de Demostración

Consulte el proyecto de demostración [github.com/i18n-site/demo.i18](//github.com/i18n-site/demo.i18) para aprender sobre la configuración de la traducción con `i18`.

Los usuarios de China pueden clonar [atomgit.com/i18n/demo.i18](//atomgit.com/i18n/demo.i18)

Después de克隆ar, ingrese al directorio y ejecute `i18` para completar la traducción.

### Estructura del Directorio

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

### para Ejecutar la Traducción

Ingrese al directorio y ejecute `i18` para traducir.

El programa generará una carpeta `.i18n/data`; agréguela al repositorio.

Después de traducir un archivo nuevo, este directorio generará un nuevo archivo de datos. Recuerde ejecutar `git add .`.

## Archivo de Configuración

`.i18n/conf.yml` es el archivo de configuración de la herramienta de traducción en línea de comandos `i18`

El contenido es el siguiente:

```
i18n:
  fromTo:
    en: zh ja ko de fr
    # en:

ignore:
  - _*
```

### Lenguaje de Origen y Lenguaje de Traducción

En el archivo de configuración, bajo `fromTo`:

`en` es el lenguaje de origen, y `zh ja ko de fr` son los idiomas de traducción.

El código de idioma se puede encontrar en [i18n.site/i18/LANG_CODE](https://i18n.site/i18/LANG_CODE).

Por ejemplo, para traducir del chino al inglés, modifique esta línea a `zh: en`.

Si desea traducir a todos los idiomas admitidos, deje el campo `:` en blanco. Por ejemplo:

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

En esta tabla de configuración, el lenguaje de origen para la traducción del directorio `blog` es `zh`, mientras que para `blog/your_file_name.md` es `ja`.

### Ignorar Archivos

Por defecto, se traducirán todos los archivos con extensiones `.md` y `.yml` en el directorio del lenguaje de origen.

Si desea ignorar ciertos archivos para no traducirlos (como borradores inacabados), puede configurarlo con el campo `ignore`.

`ignore` utiliza la misma sintaxis de [globset](https://docs.rs/globset/latest/globset/#syntax) que `.gitignore`.

Por ejemplo, `_*` en el archivo de configuración significa que los archivos que comienzan con `_` no se traducirán.

## Reglas de Traducción

### No se deben agregar ni eliminar líneas en la traducción

La traducción es editable. Si modifica el texto original y vuelva a traducir, las modificaciones manuales no se sobrescribirán (si el párrafo original no ha sido modificado).

pero tenga en cuenta que las líneas de la traducción y el texto original deben corresponder una a una. Es decir, no deben agregarse ni eliminarse líneas al editar la traducción, de lo contrario, causará una confusión en el caché de edición de la traducción.

Si hay algún problema, consulte [las soluciones en las preguntas frecuentes](/i18/qa#H1)

### Traducciones de `YAML`

La herramienta de línea de comandos buscará todos los archivos con extensión `.yml` en el directorio del lenguaje de origen y los traducirá.

* Nota que el sufijo del nombre del archivo debe ser `.yml` (no `.yaml`).

La herramienta solo traduce los valores del diccionario en `.yml`, no las claves.

Por ejemplo, `i18n/en/i18n.yml`

```
apiToken: API Token
defaultToken: Default Token
```

se traducirá a `i18n/zh/i18n.yml`

```
apiToken: 接口令牌
defaultToken: 默认令牌
```

Las traducciones de `YAML` también pueden ser modificadas manualmente (sin embargo, no se debe agregar ni eliminar claves ni líneas en la traducción).

Basándose en las traducciones de `YAML`, se puede facilitar la creación de soluciones de internacionalización para varios lenguajes de programación.

## Uso Avanzado

### Traducción de Subdirectorios

Siempre que crea `.i18n/conf.yml` (sin necesidad de comenzar desde la plantilla del proyecto de demostración cada vez), `i18` funcionará correctamente.

La herramienta de línea de comandos buscará todas las configuraciones `.i18n/conf.yml` en los subdirectorios y las traducirá.

Los proyectos basados en la arquitectura [monorepo](//monorepo.tools) pueden dividir los archivos de lenguaje en subdirectorios.

![](https://p.3ti.site/1719910016.avif)

### Directorio de Instalación Personalizado

Por defecto, se instalará en `/usr/local/bin`.

Si `/usr/local/bin` no tiene permisos de escritura, se instalará en `~/.bin`.

Puede definir el directorio de instalación configurando la variable de entorno `TO`, por ejemplo:

```sh
TO=/bin sudo bash <(curl -sS https://i.i18n.site) i18
```