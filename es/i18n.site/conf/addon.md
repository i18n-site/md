# Complemento

Los complementos se pueden configurar en `.i18n/conf.yml`, como por ejemplo:

```yml
addon:
  - i18n.addon/toc
```

## Complemento oficial

* `i18n.addon/toc` : Índice del directorio
  Generar el índice de directorio en `json` según `TOC`, activado por defecto

* `i18n.addon/mouse`: Efectos de ratón

## Convención de nombres de archivo

Los complementos son todos paquetes de `npm`.

El paquete correspondiente a `i18n.addon/toc` es [https://www.npmjs.com/package/@i18n.addon/toc](https://www.npmjs.com/package/@i18n.addon/toc).

Los complementos utilizan de manera predeterminada la última versión y verifican actualizaciones semanalmente.

Si desea fijar una versión específica, puede escribir `i18n.addon/toc@0.1.3`.

El comando de traducción `i18n.site` instalará el archivo de convenio del paquete de complemento y luego se ejecutará.

Los nombres de archivo convenidos son los siguientes

### htmIndex.js

`htmIndex.js` se inyectará al final de `.i18n/htm/index.js`.

Donde `__CONF__` será reemplazado por el nombre de la configuración actual (por ejemplo, `dev` o `ol`).

### afterTran.js

Esto se llamará después de completar la traducción, y los parámetros pasados serán los siguientes.

* `lang_li`: Lista de idiomas, el primer idioma es el idioma de origen
* `changed`: Archivos modificados
* `root`: Directorio raíz del proyecto

El valor de retorno será un diccionario, como

```json
{
  file:{
    //  path: txt, for example :
    // "_.json": "[]"
  }
}
```

`file` para la lista de archivos de salida, `path` para la ruta del archivo y `txt` para el contenido del archivo.

## Funciones integradas

El tiempo de ejecución de `js` integrado se desarrolla basado en [boa](https://github.com/boa-dev/boa), y las funciones integradas se detallan a continuación:

* `wPath(path, txt)`: Escribir en el archivo
* `rTxt(path)`: Leer archivo de texto
* `rBin(path)`: Leer archivo binario
* `rDir(dirpath)`: Leer el directorio, el valor de retorno es un array: lista de directorios, lista de archivos

## Guía de desarrollo

El desarrollo de complementos puede consultarse en [https://github.com/i18n-site/addon](https://github.com/i18n-site/addon)