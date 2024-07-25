# Problema Comun

## Eliminado Accidentalmente `.i18n/V` Lo Que Provocó Que El Paquete `Npm` No Se Publicara.

`.i18n/v/ol/v.hash` La versión histórica del lanzamiento del paquete `npm` se guarda en !

Si eliminas accidentalmente `.i18n/v/ol` el paquete `npm` no se publicará.

En este momento, primero busque el número de versión de la última versión de su proyecto en [npmjs.com](//npmjs.com) por ejemplo `0.1.9`

Luego consulte `bash` archivo Crear a continuación.

```bash
mkdir -p .i18n/v/ol
echo @0.1.9 > .i18n/v/ol/v.hash
```

Tenga en cuenta que reparar de esta manera perderá el historial de archivos, lo que hará imposible actualizar incrementalmente la próxima versión, y todo el contenido se volverá a empaquetar y cargar una vez.

