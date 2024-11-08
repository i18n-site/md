# Wersja Projektu

Weźmy na przykład projekt demonstracyjny:

`en/demo2/v` to aktualny numer wersji projektu, który będzie wyświetlany po prawej stronie nazwy projektu w konspekcie paska bocznego.

<img src="https://p.3ti.site/1721290486.avif" width="320px">

Tutaj `en/` to kod języka odpowiadający językowi źródłowemu tłumaczenia skonfigurowanemu przez `.i18n/conf.yml` .

Jeśli Twoim językiem źródłowym nie jest angielski, plik `v` powinien zostać umieszczony w katalogu projektu Twojego języka źródłowego.

Możliwość przeglądania historycznych wersji dokumentów jest w fazie rozwoju.

Zaleca się modyfikowanie numeru wersji dokumentu tylko wtedy, gdy wydawane są główne aktualizacje (takie jak `v1` , `v2` ), aby uniknąć zbyt wielu numerów wersji powodujących bałagan na stronach indeksowanych przez wyszukiwarki.

## Użyj Pustych Plików `v` , Aby Podzielić Indeksy Plików Różnych Projektów

W projekcie demonstracyjnym oprócz `en/demo2/v` widać także, że w katalogach `en/blog` i `en/demo1` znajdują się `v` puste pliki.

Puste `v` nie będzie wyświetlane w ramce paska bocznego, ale dopóki istnieje plik `v` , dla plików w katalogu i podkatalogach zostanie wygenerowany niezależny indeks.

Dzieląc indeksy różnych projektów, można uniknąć powolnego dostępu spowodowanego jednoczesnym ładowaniem indeksu wszystkich plików w całym serwisie.

Na przykład plik indeksu odpowiadający `blog` w projekcie demonstracyjnym [https://unpkg.com/i18n.site/en/blog.json](https://unpkg.com/i18n.site/en/blog.json) :