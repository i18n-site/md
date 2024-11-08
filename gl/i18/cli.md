# Explicación Detallada Dos Parámetros Da Liña De Comandos

## `-p` Ficheiros

`-p` ou `--purge` borrarán os ficheiros que existen en cada directorio de tradución pero que non existen no directorio da lingua de orixe.

Porque ao escribir documentos, os nomes de ficheiros Markdown adoitan axustarse, o que leva a moitos ficheiros antigos e abandonados no directorio de tradución.

Use este parámetro para limpar ficheiros que deberían eliminarse noutros directorios de idiomas.

## `-d` Especifica O Directorio De Tradución

O directorio traducido é o directorio onde se atopa o ficheiro actual.

`-d` ou `--workdir` pode especificar o directorio de tradución, como:

```
i18 -d ~/i18n/md
```

## `-h` Ver Axuda

`-h` ou `--help` para ver a axuda da liña de comandos.