# Szablon bloga

`i18n/conf.yml` z `use: Blog` oznacza użycie szablonu bloga do renderowania.

Plik `markdown` artykułu blogowego wymaga skonfigurowania metadanych.

Metadane muszą znajdować się na początku pliku, zaczynając od `---` i kończąc na `---`. Format konfiguracyjnych informacji w środku to `YAML`.

Przykładowa konfiguracja pliku:

```yml
---

brief: |
  this is a demo brief
  you can write multiline

---

# title

… …
```

`brief` oznacza streszczenie treści, które będzie wyświetlane na stronie indeksu bloga.

Za pomocą `YMAL` '|`Jego składnia pozwala na tworzenie wielowierszowych podsumowań.

Konfiguracja drzewa katalogów po prawej stronie bloga również znajduje się w pliku `TOC` (patrz poprzedni rozdział). Tylko artykuły wymienione w `TOC` będą widoczne na stronie indeksu bloga.

Artykuły bez metadanych nie będą wyświetlane na stronie głównej bloga, ale mogą pojawić się w drzewie katalogów po prawej stronie.

Jeśli chcesz umieścić artykuł na górze, uruchom `i18n.site` i edytuj plik `xxx.yml` w katalogu `.i18n/data/blog`, zmieniając znacznik czasu na wartość ujemną (wielokrotne wartości ujemne będą sortowane według rosnących wartości bezwzględnych).