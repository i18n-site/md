# Detaljert forklaring av kommandolinjeparametere

## `-p` rydder opp filer

`-p` eller `--purge` vil fjerne filer som eksisterer i hver oversettelseskatalog, men ikke i kildespråkkatalogen.

For når man skriver dokumenter, justeres Markdown-filnavn ofte, noe som fører til mange forlatte filer i oversettelseskatalogen.

Bruk denne parameteren for å fjerne filer som bør slettes i andre språkkataloger.

## `-d` spesifiserer oversettelseskatalogen

Standard oversettelseskatalog er katalogen hvor den gjeldende filen befinner seg.

`-d` eller `--workdir` kan brukes til å spesifisere oversettelseskatalogen, for eksempel:

```
i18 -d ~/i18n/md
```

## `-h` viser hjelp

`-h` eller `--help` viser kommandolinjehjelp.