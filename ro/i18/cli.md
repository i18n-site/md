# Explicație Detaliată a Parametrilor Liniei De Comandă

## `-P` Curățați Fișierele

`-p` `--purge` va curăța fișierele care există în fiecare director de traducere, dar care nu există în directorul limbii sursă.

Pentru că atunci când scrieți documente, numele fișierelor Markdown sunt adesea ajustate, rezultând multe fișiere vechi și abandonate în directorul de traducere.

Utilizați acest parametru pentru a curăța fișierele care ar trebui să fie șterse în directoare în alte limbi.

## `-D` Specificați Directorul De Traducere

Directorul tradus este implicit directorul în care se află fișierul curent.

`-d` `--workdir` poate specifica directorul de traducere, cum ar fi:

```
i18 -d ~/i18n/md
```

## `-H` Vezi Ajutor

`-h` Sau `--help` Puteți vizualiza ajutorul liniei de comandă.