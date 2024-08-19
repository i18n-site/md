# A parancssori paraméterek részletes magyarázata

## `-p` fájl tisztítása

`-p` vagy `--purge` törli azokat a fájlokat, amelyek a fordítási könyvtárakban találhatók, de a forrásnyelvi könyvtárban nem léteznek.

Mivel a dokumentumok írásakor gyakran módosítják a Markdown fájlok neveit, ezért sok elavult és felesleges fájl maradhat a fordítási könyvtárakban.

Ez a paraméter lehetővé teszi azoknak a fájloknak a törlését, amelyeket más nyelvű könyvtárakban már nem kell megőrizni.

## `-d` a fordítási könyvtár megadása

A fordítási könyvtár alapértelmezett értéke az a könyvtár, ahol az aktuális fájl található.

`-d` vagy `--workdir` megadhatja a fordítási könyvtárat, például:

```
i18 -d ~/i18n/md
```

## `-h` súgó megtekintése

`-h` vagy `--help` a parancssori súgó megtekintéséhez.