# Preguntas Frecuentes

## Accidentalmente se eliminó `.i18n/v`, lo que impidió la publicación del paquete `npm`

En `.i18n/v/ol/v.hash` se almacena el historial de versiones publicadas del paquete `npm`.

Si accidentalmente borra `.i18n/v/ol`, el paquete `npm` no podrá ser publicado.

En este momento, primero dirígete a [npmjs.com](//npmjs.com) para encontrar el número de versión de la última publicación de tu proyecto, por ejemplo, `0.1.9`.

Luego, siga el siguiente `bash` para crear el archivo.

```bash
mkdir -p .i18n/v/ol
echo @0.1.9 > .i18n/v/ol/v.hash
```

Atención: esta forma de reparación causará la pérdida del historial de archivos, por lo que no será posible una actualización incremental en la próxima publicación; todo el contenido será empaquetado y subido de nuevo.