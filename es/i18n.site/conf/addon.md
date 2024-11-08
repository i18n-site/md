# Complemento

Los complementos se pueden configurar en `.i18n/conf.yml` , como por ejemplo:

```yml
addon:
  - i18n.addon/toc
```

## Complemento Oficial

* `i18n.addon/toc` : Índice del directorio
  Generar índice de directorio de `json` basado en `TOC` , habilitado de forma predeterminada

* `i18n.addon/mouse` : del ratón

## Convención De Nombre De Archivo

Los complementos son todos `npm` paquetes.

El paquete correspondiente al `i18n.addon/toc` anterior es [https://www.npmjs.com/package/@i18n.addon/toc](https://www.npmjs.com/package/@i18n.addon/toc)

El complemento utiliza la última versión de forma predeterminada y busca actualizaciones semanalmente.

Si desea corregir la versión, puede escribir `i18n.addon/toc@0.1.3` .

La línea de comando de traducción `i18n.site` instalará el archivo de convención del paquete del complemento y luego lo ejecutará.

Los nombres de archivos acordados son los siguientes

### htmIndex.js

`htmIndex.js` se inyectará al final de `.i18n/htm/index.js` .

Donde `__CONF__` se reemplazará con el nombre de la configuración actual (como `dev` o `ol` ).

### afterTran.js

Se llamará después de que se complete la traducción y los parámetros pasados son los siguientes.

* `lang_li` : Lista de idiomas, el primer idioma es el idioma de origen
* `changed` : Archivos modificados
* `root` : Directorio raíz del proyecto

El valor de retorno es un diccionario, como

```json
{
  file:{
    //  path: txt, for example :
    // "_.json": "[]"
  }
}
```

`file` es la lista de archivos de salida, `path` es la ruta del archivo y `txt` es el contenido del archivo.

## Funciones Integradas

El tiempo de ejecución `js` integrado se basa en el desarrollo secundario de [boa](https://github.com/boa-dev/boa) y las funciones integradas son las siguientes :

* `wPath(path, txt)` : Escribir al archivo
* `rTxt(path)` : Leer archivo de texto
* `rBin(path)` : Leer archivo binario
* `rDir(dirpath)` : Lea el directorio, el valor de retorno es una matriz : , lista de archivos

## Guía De Desarrollo

¡El desarrollo de complementos puede ser una referencia [https://github.com/i18n-site/addon](https://github.com/i18n-site/addon)