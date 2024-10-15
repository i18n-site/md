# Szablon bloga

`i18n/conf.yml` z `use: Blog` oznacza użycie szablonu bloga do renderowania.

Plik `markdown` artykułu blogowego wymaga skonfigurowania metadanych.

Metadane muszą znajdować się na początku pliku, zaczynając od `---` i kończąc na `---`. Format konfiguracyjnych informacji w środku to `YAML`.

Przykładowa konfiguracja pliku wygląda następująco:

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

Za pomocą `YMAL` ' | `Jego składnia pozwala na tworzenie wielowierszowych podsumowań.

Konfiguracja drzewa katalogów po prawej stronie bloga również dotyczy pliku `TOC` (patrz poprzedni rozdział). Tylko artykuły wymienione w `TOC` będą widoczne na stronie głównej indeksu bloga.

Artykuły bez metadanych nie będą widoczne na stronie głównej bloga, ale mogą pojawić się w drzewie katalogów po prawej stronie.

## Informacje o autorze

Informacje o autorze można umieścić w metadanych artykułu, na przykład:

```yml
author: marlowe
```

Następnie edytuj plik `author.yml` w katalogu języka źródłowego, dodając informacje o autorze, na przykład:

```yml
marlowe:
  name: Eleanor Marlowe
  title: Senior Translator
  url: https://github.com/i18n-site
```

`name`, `url` oraz `title` są opcjonalne. Jeśli `name` nie zostanie ustawione, jako `name` zostanie użyta nazwa klucza (tutaj `marlowe`).

Zobacz przykładowy projekt: [`begin.md`](https://github.com/i18n-site/demo.i18n.site/blob/main/en/blog/news/begin.md?plain=1) oraz [`author.yml`](https://github.com/i18n-site/demo.i18n.site/blob/main/en/author.yml)

## Artykuł na wierzchu

Jeśli chcesz umieścić artykuł na górze strony, uruchom `i18n.site` i edytuj plik `xxx.yml` w katalogu `.i18n/data/blog`, zmieniając znacznik czasu na wartość ujemną (wielokrotne użycie wartości ujemnych będzie sortowane od największej do najmniejszej).