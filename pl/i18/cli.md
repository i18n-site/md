# Szczegółowe Wyjaśnienie Parametrów Wiersza Poleceń

## `-P` Czyste Pliki

`-p` Lub `--purge` wyczyści pliki, które istnieją w każdym katalogu tłumaczeń, ale nie istnieją w katalogu języka źródłowego.

Ponieważ podczas pisania dokumentów nazwy plików Markdown są często dostosowywane, co skutkuje wieloma starymi i porzuconymi plikami w katalogu tłumaczeń.

Użyj tego parametru, aby wyczyścić pliki, które powinny zostać usunięte w katalogach innych języków.

## `-D` Określ Katalog Tłumaczeń

Przetłumaczony katalog jest domyślnym katalogiem, w którym znajduje się bieżący plik.

`-d` Lub `--workdir` może określić katalog tłumaczeń, na przykład:

```
i18 -d ~/i18n/md
```

## `-H` Pokaż Pomoc

`-h` Lub `--help` Możesz wyświetlić pomoc wiersza poleceń.