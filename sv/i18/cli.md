# Detaljerad Förklaring Av Kommandoradsparametrar

## `-P` Rensa Filer

`-p` Eller `--purge` kommer att rensa upp filer som finns i varje översättningskatalog men som inte finns i källspråkskatalogen.

För när man skriver dokument, justeras Markdown-filnamn ofta, vilket resulterar i många gamla och övergivna filer i översättningskatalogen.

Använd den här parametern för att rensa upp filer som bör raderas i andra språkkataloger.

## `-D` Ange Översättningskatalog

Den översatta katalogen är som standard den katalog där den aktuella filen finns.

`-d` Eller `--workdir` kan ange översättningskatalogen, till exempel:

```
i18 -d ~/i18n/md
```

## `-H` Hjälp

`-h` Eller `--help` kan visa kommandoradshjälpen.