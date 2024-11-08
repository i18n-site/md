# Explicație Detaliată a Parametrilor Liniei De Comandă

## `-p` Fișierele

`-p` sau `--purge` vor șterge fișierele care există în fiecare director de traducere, dar care nu există în directorul limbii sursă.

Pentru că atunci când scrieți documente, numele fișierelor Markdown sunt adesea ajustate, ceea ce duce la multe fișiere vechi și abandonate în directorul de traducere.

Utilizați acest parametru pentru a curăța fișierele care ar trebui să fie șterse în directoare în alte limbi.

## `-d` Specifică Directorul De Traducere

Directorul tradus este implicit directorul în care se află fișierul curent.

`-d` sau `--workdir` poate specifica directorul de traducere, cum ar fi:

```
i18 -d ~/i18n/md
```

## `-h` Vizualizați Ajutor

`-h` sau `--help` pentru a vizualiza ajutorul liniei de comandă.