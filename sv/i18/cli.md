# Detaljerad förklaring av kommandoradsparametrar

## `-p` rengör filer

`-p` eller `--purge` kommer att rengöra bort filer som finns i varje översättningskatalog men som inte finns i källspråkskatalogen.

Eftersom man ofta justerar Markdown-filnamn när man skriver dokument, vilket leder till att det finns många föråldrade och övergivna filer i översättningskatalogen.

Med denna parameter kan du rengöra bort filer som bör raderas i andra språkkataloger.

## `-d` anger översättningskatalogen

Översättningskatalogen är som standard den katalog där den aktuella filen finns.

`-d` eller `--workdir` kan specificera översättningskatalogen, till exempel:

```
i18 -d ~/i18n/md
```

## `-h` visa hjälp

`-h` eller `--help` för att visa kommandorads hjälp.