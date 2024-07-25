# Detaljeret Forklaring Af Kommandolinjeparametre

## `-P` Rens Filer

`-p` Eller `--purge` vil rydde op i filer, der findes i hver oversættelsesmappe, men som ikke findes i kildesprogsmappen.

For når du skriver dokumenter, bliver Markdown-filnavne ofte justeret, hvilket resulterer i mange gamle og forladte filer i oversættelsesmappen.

Brug denne parameter til at rydde op i filer, der skal slettes i andre sprogbiblioteker.

## `-D` Angiv Oversættelsesmappe

Den oversatte mappe er som standard den mappe, hvor den aktuelle fil er placeret.

`-d` Eller `--workdir` kan angive oversættelsesmappen, såsom:

```
i18 -d ~/i18n/md
```

## `-H` Hjælp

`-h` Eller `--help` kan se kommandolinjehjælpen.