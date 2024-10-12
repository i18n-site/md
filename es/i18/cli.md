# Explicación Detallada de los Parámetros de la Línea de Comandos

## `-p` para Limpiar Archivos

`-p` o `--purge` eliminarán archivos que están en cada directorio de traducción pero no en el directorio del idioma original.

Porque al escribir documentos, a menudo se ajustan los nombres de los archivos Markdown, lo que puede dejar muchos archivos obsoletos en los directorios de traducción.

Con este parámetro, se pueden limpiar archivos que deberían eliminarse en los directorios de otros idiomas.

## `-d` para Especificar el Directorio de Traducción

El directorio de traducción predeterminado es el directorio donde se encuentra el archivo actual.

`-d` o `--workdir` permite especificar el directorio de traducción, por ejemplo:

```
i18 -d ~/i18n/md
```

## `-h` para Ver Ayuda

`-h` o `--help` para ver la ayuda de la línea de comandos.