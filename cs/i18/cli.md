# Podrobné vysvětlení parametrů příkazového řádku

## `-p` pro vyčištění souborů

`-p` nebo `--purge` odstraní soubory, které se nacházejí v překladových adresářích, ale ne v adresáři zdrojového jazyka.

Protože při psaní dokumentů se často mění názvy souborů Markdown, což vede k vytvoření mnoha starých a nepotřebných souborů v překladových adresářích.

Použitím tohoto parametru můžete vyčistit soubory, které by měly být odstraněny v jiných jazykových adresářích.

## `-d` pro určení adresáře překladu

Adresář pro překlady je výchozíně nastaven na adresář, kde se nachází aktuální soubor.

`-d` nebo `--workdir` umožňuje určit adresář pro překlady, například:

```
i18 -d ~/i18n/md
```

## `-h` pro zobrazení nápovědy

`-h` nebo `--help` zobrazí nápovědu k příkazovému řádku.