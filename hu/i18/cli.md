# A Parancssori Paraméterek Részletes Magyarázata

## Tisztítsa `-P` a Fájlokat

`-p` `--purge` megtisztítja azokat a fájlokat, amelyek minden fordítási könyvtárban léteznek, de nem léteznek a forrásnyelvi könyvtárban.

Mert dokumentumok írásakor a Markdown fájlneveket gyakran módosítják, ami sok régi és elhagyott fájlt eredményez a fordítási könyvtárban.

Ezzel a paraméterrel törölheti azokat a fájlokat, amelyeket más nyelvű könyvtárakban kell törölni.

## `-D` Meg a Fordítási Könyvtárat

A lefordított könyvtár alapértelmezés szerint az a könyvtár, ahol az aktuális fájl található.

`-d` `--workdir` megadhatja a fordítási könyvtárat, például:

```
i18 -d ~/i18n/md
```

## Súgó `-H`

`-h` `--help` a parancssori súgót.