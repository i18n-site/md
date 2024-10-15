# Wersja projektu

Na przykładzie projektu demonstracyjnego:

`en/demo2/v` to bieżąca wersja projektu, która będzie wyświetlana po prawej stronie nazwy projektu w panelu przewodnika bocznego.

<img src="https://p.3ti.site/1721290486.avif" width="320px">

Tutaj `en/` to kod języka odpowiadający językowi źródłowemu skonfigurowanemu w `.i18n/conf.yml`.

Jeśli Twój język źródłowy nie jest angielski, plik `v` powinien być umieszczony w katalogu projektu odpowiadającym Twojemu językowi źródłowemu.

Funkcja przeglądania historii dokumentów jest obecnie w fazie developmentu.

Zaleca się zmieniać numer wersji dokumentu tylko przy dużych aktualizacjach (np. `v1`, `v2`), aby uniknąć bałaganu w indeksach wyszukiwarek spowodowanego zbyt dużą liczbą wersji.

## Użyj pustych plików `v` do podziału indeksów różnych projektów

W projekcie demonstracyjnym, oprócz `en/demo2/v`, można zobaczyć, że w katalogach `en/blog` i `en/demo1` znajdują się puste pliki `v`.

Puste `v` nie będzie wyświetlane w panelu bocznym, ale gdziekolwiek istnieje plik `v`, dla katalogu i jego podkatalogów zostanie wygenerowany osobny indeks.

Dzieląc indeksy różnych projektów, można uniknąć opóźnień w dostępie spowodowanych ładowaniem wszystkich plików na stronie jednocześnie.

Na przykład, plik indeksu dla `blog` w projekcie demonstracyjnym: [https://unpkg.com/i18n.site/en/blog.json](https://unpkg.com/i18n.site/en/blog.json)