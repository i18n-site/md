# Szczegółowe wyjaśnienie parametrów wiersza poleceń

## `-p` Czyszczenie plików

`-p` lub `--purge` usunie pliki, które znajdują się w katalogach tłumaczeń, ale nie istnieją w katalogu języka źródłowego.

Ponieważ podczas tworzenia dokumentacji często zmienia się nazwa plików Markdown, co prowadzi do powstawania wielu nieużywanych, starych plików w katalogach tłumaczeń.

Dzięki temu parametrowi można wyczyścić pliki, które powinny zostać usunięte w katalogach innych języków.

## `-d` Określenie katalogu tłumaczeń

Domyślny katalog tłumaczeń to katalog, w którym znajduje się obecny plik.

`-d` lub `--workdir` umożliwia określenie katalogu tłumaczeń, na przykład:

```
i18 -d ~/i18n/md
```

## `-h` Wyświetlenie pomocy

`-h` lub `--help` umożliwia wyświetlenie pomocy dla wiersza poleceń.