# A Parancssori Paraméterek Részletes Magyarázata

## `-p` a Fájlokat

`-p` vagy `--purge` törli azokat a fájlokat, amelyek minden fordítási könyvtárban léteznek, de nem léteznek a forrásnyelvi könyvtárban.

Mert dokumentumok írásakor a Markdown fájlneveket gyakran módosítják, ami sok régi és elhagyott fájlhoz vezet a fordítási könyvtárban.

Ezzel a paraméterrel törölheti azokat a fájlokat, amelyeket más nyelvű könyvtárakban kell törölni.

## `-d` a Fordítási Könyvtárat Határozza Meg

A lefordított könyvtár alapértelmezés szerint az a könyvtár, ahol az aktuális fájl található.

`-d` vagy `--workdir` megadhatja a fordítási könyvtárat, például:

```
i18 -d ~/i18n/md
```

## `-h` Súgó Megtekintése

`-h` vagy `--help` a parancssori súgó megtekintéséhez.