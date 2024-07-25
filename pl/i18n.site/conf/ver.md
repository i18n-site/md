# Wersja Projektu

Weźmy na przykład projekt demonstracyjny:

`en/demo2/v` to aktualny numer wersji projektu, który będzie wyświetlany po prawej stronie nazwy projektu w konspekcie paska bocznego.

<img src="https://p.3ti.site/1721290486.avif" width="320px">

Tutaj `en/` jest kodem języka odpowiadającym `.i18n/conf.yml` skonfigurowanemu językowi źródłowemu tłumaczenia.

Jeśli Twoim językiem źródłowym nie jest angielski, plik `v` powinien zostać umieszczony w katalogu projektu w Twoim języku źródłowym. 

Możliwość przeglądania historycznych wersji dokumentów jest w fazie rozwoju.

Zaleca się modyfikowanie numeru wersji dokumentu tylko podczas publikowania głównych aktualizacji (takich jak `v1` , `v2` ), aby uniknąć zaśmiecania stron indeksowanych przez wyszukiwarki ze względu na zbyt dużą liczbę numerów wersji.

## Użyj Pustych Plików `v` , Aby Podzielić Indeksy Plików Dla Różnych Projektów

W projekcie demonstracyjnym oprócz `en/demo2/v` widać także, że zawartość katalogów `en/blog` i `en/demo1` jest pusta `v` file.

Pusty `v` nie będzie wyświetlany w ramce paska bocznego, ale dopóki istnieje plik `v` , dla plików w katalogu i podkatalogach zostanie wygenerowany niezależny indeks.

Dzieląc indeksy różnych projektów, można uniknąć powolnego dostępu spowodowanego jednoczesnym ładowaniem indeksu wszystkich plików w całym serwisie.

Na przykład w projekcie demonstracyjnym `blog` odpowiedni plik indeksu [https://unpkg.com/i18n.site/en/blog.json](https://unpkg.com/i18n.site/en/blog.json) :

