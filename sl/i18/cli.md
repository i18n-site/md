# Podrobna Razlaga Parametrov Ukazne Vrstice

## `-p`

`-p` ali `--purge` bo izbrisal datoteke, ki obstajajo v vsakem imeniku prevodov, vendar ne obstajajo v imeniku izvornega jezika.

Ker se pri pisanju dokumentov imena datotek Markdown pogosto prilagajajo, kar vodi do številnih starih in zapuščenih datotek v imeniku prevodov.

S tem parametrom počistite datoteke, ki jih je treba izbrisati v drugih jezikovnih imenikih.

## `-d` Določa Imenik Prevodov

Prevedeni imenik je privzeto nastavljen na imenik, kjer se nahaja trenutna datoteka.

`-d` ali `--workdir` lahko poda imenik prevodov, na primer:

```
i18 -d ~/i18n/md
```

## `-h` Oglejte Si Pomoč

`-h` ali `--help` za ogled pomoči v ukazni vrstici.