# Detaljert Forklaring Av Kommandolinjeparametere

## `-p`

`-p` eller `--purge` vil fjerne filer som finnes i hver oversettelseskatalog, men som ikke finnes i kildespråkkatalogen.

For når du skriver dokumenter, blir Markdown-filnavn ofte justert, noe som fører til mange gamle og forlatte filer i oversettelseskatalogen.

Bruk denne parameteren til å rydde opp i filer som bør slettes i andre språkkataloger.

## `-d` Spesifiserer Oversettelseskatalogen

Den oversatte katalogen er som standard katalogen der den gjeldende filen er plassert.

`-d` eller `--workdir` kan spesifisere oversettelseskatalogen, for eksempel:

```
i18 -d ~/i18n/md
```

## `-h` Se Hjelp

`-h` eller `--help` for å vise kommandolinjehjelp.