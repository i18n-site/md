# Instalación y uso

## En Windows, primero instale Git Bash

En el sistema Windows, primero [haga clic aquí para descargar e instalar `git bash`](https://git-scm.com/download/win).

En `git bash`, ejecute las operaciones posteriores.

## Instalar

```sh
bash <(curl -sS https://i.i18n.site) i18
```

### Configure el token de traducción

Visite [i18n.site/token](//i18n.site/token) y haga clic para copiar el token

<img src="https://p.3ti.site/1719911689.avif" style="width:400px">

Cree `~/.config/i18n.site.yml` y pegue el contenido copiado en él, como se indica a continuación:

```
token: YOUR_API_TOKEN
```

Además, debe vincular una tarjeta de crédito en [i18n.site/payBill](//i18n.site/payBill) (sin necesidad de recargar, el sitio cargo automáticamente según el uso, [consulte los precios en la página de inicio](/#price)).

## Uso

### Proyecto de demostración

Consulte el proyecto de demostración [github.com/i18n-site/demo.i18](//github.com/i18n-site/demo.i18) para aprender sobre la configuración de la traducción con `i18`.

Los usuarios de China pueden clonar [atomgit.com/i18n/demo.i18](//atomgit.com/i18n/demo.i18)

Después de克隆ar, ingrese al directorio y ejecute `i18` para completar la traducción.

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

El directorio `en` contiene archivos de demostración de traducción, que son solo ejemplos y pueden eliminarse.

### Para ejecutar la traducción:

Ingresar al directorio y ejecutar `i18` para traducir.

El programa generará automáticamente la carpeta `.i18n/data`; agréguela al repositorio.

Después de traducir el nuevo archivo, se crearán nuevos archivos de datos en este directorio. No olvide ejecutar `git add .`.

## Archivo de configuración

`.i18n/conf.yml` es el archivo de configuración de la herramienta de traducción de línea de comandos `i18`

El contenido es el siguiente:

```
i18n:
  fromTo:
    en: zh ja ko de fr
    # en:

ignore:
  - _*
```

### Idioma de origen y idioma de traducción

En el archivo de configuración, bajo `fromTo`:

`en` es el idioma de origen, y `zh ja ko de fr` son los idiomas de traducción.

El código de idioma se puede encontrar en [i18n.site/i18/LANG_CODE](https://i18n.site/i18/LANG_CODE).

Por ejemplo, para traducir chino a inglés, modifique esta línea a `zh: en`.

Si desea traducir a todos los idiomas admitidos, deje espacio después de `:`. Por ejemplo:

```
i18n:
  fromTo:
    en:
```

Se pueden configurar diferentes `fromTo` para cada subdirectorio / archivo. Aquí tienes un ejemplo de cómo hacerlo:

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

En esta configuración, el idioma de origen para la traducción del directorio `blog` es `zh`, mientras que para el archivo `blog/your_file_name.md` el idioma de origen es `ja`.

### Ignorar archivos

Por defecto, se traducirán todos los archivos con extensiones `.md` y `.yml` en el directorio del idioma de origen.

Si desea ignorar ciertos archivos para no traducirlos (como borradores incompletos), puede configurar el campo `ignore`.

`ignore` utiliza la misma sintaxis de [globset](https://docs.rs/globset/latest/globset/#syntax) que `.gitignore`.

Por ejemplo, `_*` en el archivo de configuración significa que los archivos que comienzan con `_` no se traducirán.

## Reglas de traducción

### Los editores de traducción no deben agregar ni eliminar líneas

La traducción es editable. Si modificas el texto original y vuelves a traducir, las modificaciones manuales no se sobrescribirán (si el párrafo original no ha sido modificado).

pero tenga en cuenta que las líneas de la traducción y del texto original deben corresponder una a una. Es decir, no se deben agregar ni eliminar líneas al editar la traducción, de lo contrario, causará una confusión en el caché de edición de la traducción.

Si hay algún problema, consulte [las soluciones en las preguntas frecuentes](/i18/qa#H1)

### Traducciones de `YAML`

La herramienta de línea de comandos buscará todos los archivos que terminen en `.yml` en el directorio del idioma de origen y los traducirá.

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

Las traducciones de `YAML` también pueden ser modificadas manualmente (sin embargo, no se debe agregar ni eliminar claves o líneas en la traducción).

Basado en traducción `YAML` , puede crear fácilmente soluciones internacionales para varios lenguajes de programación.

## Uso avanzado

### Traducción de subdirectorios

Mientras se cree `.i18n/conf.yml` (sin necesidad de comenzar desde la plantilla del proyecto de demostración cada vez), `i18` funcionará correctamente.

La herramienta de línea de comandos encontrará todas las configuraciones `.i18n/conf.yml` en los subdirectorios y las traducirá.

Los proyectos que utilizan la arquitectura [monorepo](//monorepo.tools) pueden dividir los archivos de idioma en subdirectorios.

![](https://p.3ti.site/1719910016.avif)

### Directorio de instalación personalizado

Se instalará en `/usr/local/bin` por defecto.

Si `/usr/local/bin` no tiene permisos de escritura, se instalará en `~/.bin`.

La variable de entorno `TO` puede definirse para especificar el directorio de instalación, por ejemplo:

```sh
TO=/bin sudo bash <(curl -sS https://i.i18n.site) i18
```