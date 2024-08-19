# Explicații Detaliate ale Parametrilor Liniei de Comandă

## `-p` Curăță fișierele

`-p` sau `--purge` vor elimina fișierele care există în fiecare director de traducere, dar nu există în directorul limbii sursă.

Din cauza ajustărilor frecvente ale numerelor de fișiere Markdown în procesul de scriere a documentelor, pot apărea multe fișiere vechi și inutile în directoarele de traducere.

Folosind acest parametru, puteți curăța fișierele care ar trebui eliminate din directoarele altor limbi.

## `-d` Specifică directorul de traducere

Directorul de traducere este implicit directorul în care se află fișierul curent.

`-d` sau `--workdir` poate specifica directorul de traducere, de exemplu:

```
i18 -d ~/i18n/md
```

## `-h` Afișează ajutorul

`-h` sau `--help` pentru a vizualiza ajutorul pentru linia de comandă.