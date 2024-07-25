# Podrobné Vysvětlení Parametrů Příkazového Řádku

## `-P` Soubory

`-p` `--purge` vyčistí soubory, které existují v každém překladovém adresáři, ale neexistují v adresáři zdrojového jazyka.

Protože při psaní dokumentů se názvy souborů Markdown často upravují, což má za následek mnoho starých a opuštěných souborů v adresáři překladu.

Tento parametr použijte k vyčištění souborů, které by měly být odstraněny v jiných jazykových adresářích.

## `-D` Zadejte Adresář Překladu

Přeložený adresář je standardně nastaven na adresář, kde je umístěn aktuální soubor.

`-d` Nebo `--workdir` může určit adresář překladu, například:

```
i18 -d ~/i18n/md
```

## `-H` Nápovědu

`-h` `--help` Můžete zobrazit nápovědu k příkazovému řádku.