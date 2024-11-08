# Szczegółowe Wyjaśnienie Parametrów Wiersza Poleceń

## `-p` Pliki

`-p` lub `--purge` usunie pliki, które istnieją w każdym katalogu tłumaczeń, ale nie istnieją w katalogu języka źródłowego.

Ponieważ podczas pisania dokumentów nazwy plików Markdown są często dostosowywane, co prowadzi do wielu starych i porzuconych plików w katalogu tłumaczeń.

Użyj tego parametru, aby wyczyścić pliki, które powinny zostać usunięte w katalogach innych języków.

## `-d` Określa Katalog Tłumaczeń

Przetłumaczony katalog jest domyślnym katalogiem, w którym znajduje się bieżący plik.

`-d` lub `--workdir` może określić katalog tłumaczeń, na przykład:

```
i18 -d ~/i18n/md
```

## `-h` Zobacz Pomoc

`-h` lub `--help` aby wyświetlić pomoc wiersza poleceń.