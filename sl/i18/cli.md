# Podrobna Razlaga Parametrov Ukazne Vrstice

## `-P` Čiste Datoteke

`-p` Ali `--purge` počisti datoteke, ki obstajajo v vsakem imeniku prevodov, vendar ne obstajajo v imeniku izvornega jezika.

Ker se pri pisanju dokumentov imena datotek Markdown pogosto prilagodijo, kar povzroči veliko starih in zapuščenih datotek v imeniku prevodov.

S tem parametrom počistite datoteke, ki jih je treba izbrisati v drugih jezikovnih imenikih.

## `-D` Določite Imenik Prevodov

Prevedeni imenik je privzeto nastavljen na imenik, kjer se nahaja trenutna datoteka.

`-d` Ali `--workdir` lahko določi imenik prevodov, na primer:

```
i18 -d ~/i18n/md
```

## `-H` Oglejte Si Pomoč

`-h` Ali `--help` si ogledate pomoč v ukazni vrstici.