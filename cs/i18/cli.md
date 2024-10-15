# Podrobné Vysvětlení Parametrů Příkazového Řádku

## `-p` Soubory

`-p` nebo `--purge` vymaže soubory, které existují v každém překladovém adresáři, ale neexistují v adresáři zdrojového jazyka.

Protože při psaní dokumentů se názvy souborů Markdown často upravují, což vede k mnoha starým a opuštěným souborům v adresáři překladu.

Tento parametr použijte k vyčištění souborů, které by měly být odstraněny v jiných jazykových adresářích.

## `-d` Určuje Adresář Překladu

Přeložený adresář je standardně nastaven na adresář, kde je umístěn aktuální soubor.

`-d` nebo `--workdir` může určit adresář překladu, například:

```
i18 -d ~/i18n/md
```

## `-h` Zobrazit Nápovědu

`-h` nebo `--help` pro zobrazení nápovědy k příkazovému řádku.