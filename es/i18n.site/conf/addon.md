# Complemento

Los complementos se pueden configurar en `.i18n/conf.yml`, como, por ejemplo:

```yml
addon:
  - i18n.addon/toc
```

## Complemento oficial

* `i18n.addon/toc`: Índice de contenido
  Generar un índice de contenido en `json` basado en `TOC`, habilitado por defecto

* `i18n.addon/mouse`: Efectos de ratón

## Convención de nombres de archivo

Los complementos son todos paquetes de `npm`.

El paquete correspondiente a `i18n.addon/toc` es [https://www.npmjs.com/package/@i18n.addon/toc](https://www.npmjs.com/package/@i18n.addon/toc).

Los complementos utilizan la versión más reciente por defecto y verifican actualizaciones semanalmente.

Si desea especificar una versión concreta, puede escribir `i18n.addon/toc@0.1.3`.

La orden de traducción `i18n.site` instalará el paquete del complemento según la convención de archivos y luego lo ejecutará.

Los nombres de archivo según la convención son los siguientes:

### htmIndex.js

`htmIndex.js` se integrará al final de `.i18n/htm/index.js`.

En donde `__CONF__` será reemplazado por el nombre de la configuración actual (por ejemplo, `dev` o `ol`).

### afterTran.js

Se llamará después de completar la traducción, y los parámetros que se pasarán son los siguientes:

* `lang_li`: Lista de idiomas, donde el primer idioma es el idioma de origen
* `changed`: Archivos que han sido modificados
* `root`: Directorio raíz del proyecto

El valor de retorno será un diccionario, por ejemplo:

```json
{
  file:{
    //  path: txt, for example :
    // "_.json": "[]"
  }
}
```

`file` es la lista de archivos de salida, `path` es la ruta del archivo y `txt` es el contenido del archivo.

## Funciones integradas

El tiempo de ejecución `js` integrado se basa en el desarrollo adicional de [boa](https://github.com/boa-dev/boa), y las funciones integradas son las siguientes:

* `wPath(path, txt)`: Escribe en el archivo
* `rTxt(path)`: Lee un archivo de texto
* `rBin(path)`: Lee un archivo binario
* `rDir(dirpath)`: Leer el directorio, el valor de retorno es un array: lista de directorios, lista de archivos

## Guía de desarrollo

El desarrollo de complementos puede consultarse en [https://github.com/i18n-site/addon](https://github.com/i18n-site/addon)