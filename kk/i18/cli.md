# Пәрмен Жолы Параметрлерін Егжей-Тегжейлі Түсіндіру

## Файлдарды `-P`

`-p` Немесе `--purge` әрбір аударма каталогында бар, бірақ бастапқы тіл каталогында жоқ файлдарды тазартады.

Өйткені құжаттарды жазу кезінде Markdown файл атаулары жиі реттеледі, нәтижесінде аударма каталогында көптеген ескі және тасталған файлдар пайда болады.

Бұл параметрді басқа тіл каталогтарында жойылуы тиіс файлдарды тазалау үшін пайдаланыңыз.

## Аударма Каталогын `-D`

Аударылған каталог әдепкі бойынша ағымдағы файл орналасқан каталогқа сәйкес келеді.

`-d` Немесе `--workdir` аударма каталогын көрсете алады, мысалы:

```
i18 -d ~/i18n/md
```

## Анықтаманы `-H`

`-h` Немесе `--help` Пәрмен жолы анықтамасын көре аласыз.