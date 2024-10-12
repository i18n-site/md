# Detaljerad Förklaring Av Kommandoradsparametrar

## `-p` Filer

`-p` eller `--purge` kommer att rensa bort filer som finns i varje översättningskatalog men som inte finns i källspråkskatalogen.

För när man skriver dokument, justeras Markdown-filnamn ofta, vilket resulterar i många gamla och övergivna filer i översättningskatalogen.

Använd den här parametern för att rensa upp filer som bör raderas i andra språkkataloger.

## `-d` Anger Översättningskatalogen

Den översatta katalogen är som standard den katalog där den aktuella filen finns.

`-d` eller `--workdir` kan ange översättningskatalogen, till exempel:

```
i18 -d ~/i18n/md
```

## `-h` Visa Hjälp

`-h` eller `--help` för att visa kommandoradshjälp.