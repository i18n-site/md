# Detaljert forklaring av kommandolinjeparametere

## `-p` Rens filer

`-p` eller `--purge` vil fjerne filer som finnes i hver oversettelseskatalog, men som ikke finnes i kildespråkkatalogen.

For når man skriver dokumenter, justeres Markdown-filnavn ofte, noe som resulterer i mange forlatte filer i oversettelseskatalogen.

Bruk denne parameteren for å fjerne filer som bør slettes i andre språkkataloger.

## `-d` Spesifiser oversettelseskatalogen

Oversettelseskatalogen er som standard den katalogen hvor den gjeldende filen er plassert.

`-d` eller `--workdir` kan brukes til å spesifisere oversettelseskatalogen, for eksempel:

```
i18 -d ~/i18n/md
```

## `-h` Vis hjelp

`-h` eller `--help` kan brukes for å vise kommandolinjehjelp.