# Detaljert Forklaring Av Kommandolinjeparametere

## `-P` Rengjør Filer

`-p` Eller `--purge` vil rydde opp i filer som finnes i hver oversettelseskatalog, men som ikke finnes i kildespråkkatalogen.

For når du skriver dokumenter, blir Markdown-filnavn ofte justert, noe som resulterer i mange gamle og forlatte filer i oversettelseskatalogen.

Bruk denne parameteren til å rydde opp i filer som bør slettes i andre språkkataloger.

## `-D` Spesifiser Oversettelseskatalogen

Den oversatte katalogen er som standard katalogen der den gjeldende filen er plassert.

`-d` Eller `--workdir` kan spesifisere oversettelseskatalogen, for eksempel:

```
i18 -d ~/i18n/md
```

## `-H` Se Hjelp

`-h` Eller `--help` kan se kommandolinjehjelpen.