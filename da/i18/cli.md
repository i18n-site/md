# Detaljeret Forklaring Af Kommandolinjeparametre

## `-p` Filer

`-p` eller `--purge` vil fjerne filer, der findes i hver oversættelsesmappe, men som ikke findes i kildesprogsmappen.

For når man skriver dokumenter, bliver Markdown-filnavne ofte justeret, hvilket fører til mange gamle og forladte filer i oversættelsesmappen.

Brug denne parameter til at rydde op i filer, der skal slettes i andre sprogbiblioteker.

## `-d` Angiver Oversættelsesbiblioteket

Den oversatte mappe er som standard den mappe, hvor den aktuelle fil er placeret.

`-d` eller `--workdir` kan angive oversættelsesbiblioteket, såsom:

```
i18 -d ~/i18n/md
```

## `-h` Se Hjælp

`-h` eller `--help` for at se kommandolinjehjælp.