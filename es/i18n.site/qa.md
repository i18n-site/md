# Preguntas Frecuentes

## Se Eliminó Accidentalmente `.i18n/v` , Lo Que Provocó Que El Paquete `npm` No Se Publicara

La versión histórica publicada por el paquete `npm` se guarda en `.i18n/v/ol/v.hash` .

Si elimina accidentalmente `.i18n/v/ol` el paquete `npm` no se publicará.

En este momento, primero busque el número de versión de la última versión de su proyecto en [npmjs.com](//npmjs.com) por ejemplo, `0.1.9` .

Luego consulte `bash` a continuación para crear el archivo.

```bash
mkdir -p .i18n/v/ol
echo @0.1.9 > .i18n/v/ol/v.hash
```

Tenga en cuenta que reparar de esta manera perderá el historial de archivos, lo que hará imposible actualizar incrementalmente la próxima versión, y todo el contenido se volverá a empaquetar y cargar una vez.