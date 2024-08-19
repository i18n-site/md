# Detaljeret forklaring af kommandolinjeparametre

## `-p` Rens filer

`-p` eller `--purge` vil fjerne filer, der findes i hver oversættelsesmappe, men ikke i kildesprogsmappen.

For når man skriver dokumenter, justeres Markdown-filnavne ofte, hvilket resulterer i mange forældede filer i oversættelsesmappen.

Med denne parameter kan man rydde op i filer, der bør slettes i andre sprog mapper.

## `-d` Angiv oversættelsesmappe

Oversættelsesmappen er som standard den mappe, hvor den aktuelle fil er placeret.

`-d` eller `--workdir` kan angive oversættelsesmappen, for eksempel:

```
i18 -d ~/i18n/md
```

## `-h` Vis hjælp

`-h` eller `--help` for at få hjælp til kommandolinjen.