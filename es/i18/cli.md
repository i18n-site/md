# Explicación Detallada De Los Parámetros De La Línea De Comando

## `-p` Archivos

`-p` o `--purge` borrará los archivos que existen en cada directorio de traducción pero que no existen en el directorio del idioma de origen.

Porque al escribir documentos, los nombres de los archivos Markdown a menudo se ajustan, lo que genera muchos archivos antiguos y abandonados en el directorio de traducción.

Utilice este parámetro para limpiar archivos que deben eliminarse en directorios de otros idiomas.

## `-d` Especifica El Directorio De Traducción

El directorio traducido tiene como valor predeterminado el directorio donde se encuentra el archivo actual.

`-d` o `--workdir` puede especificar el directorio de traducción, como por ejemplo:

```
i18 -d ~/i18n/md
```

## `-h` Ver Ayuda

`-h` o `--help` para ver la ayuda de la línea de comandos.