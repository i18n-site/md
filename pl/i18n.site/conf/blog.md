# Szablon Bloga

`i18n/conf.yml` na `use: Blog` oznacza użycie szablonu bloga do renderowania.

Plik `markdown` wpisu na blogu wymaga skonfigurowania metainformacji.

Metainformacje muszą znajdować się na początku pliku, zaczynając od `---` i kończąc na `---` Format informacji konfiguracyjnych w środku to `YAML` .

Konfiguracja pliku demonstracyjnego jest następująca:

```yml
---

brief: |
  this is a demo brief
  you can write multiline

---

# title

… …
```

`brief` oznacza podsumowanie treści, które będzie wyświetlane na stronie indeksu bloga.

Za pomocą `YMAL` ' | `Składnia, możesz pisać podsumowania wielowierszowe.

Konfiguracja drzewa katalogów po prawej stronie bloga to również `TOC` plików (patrz poprzedni rozdział). Tylko artykuły wymienione w `TOC` pojawią się w indeksie strony głównej bloga.

Artykuły, które nie zawierają metainformacji, nie pojawią się na stronie głównej bloga, ale mogą pojawić się w drzewie katalogów po prawej stronie.

## Informacje O Autorze

Informacje o autorze można zapisać w metainformacjach artykułu, takich jak:

```yml
author: marlowe
```

Następnie edytuj `author.yml` w katalogu języka źródłowego i dodaj informacje o autorze, takie jak :

```yml
marlowe:
  name: Eleanor Marlowe
  title: Senior Translator
  url: https://github.com/i18n-site
```

`name` , `url` i `title` są opcjonalne. Jeśli `name` nie jest ustawione, nazwa klucza (tutaj `marlowe` ) będzie używana jako `name` .

Zobacz projekt demonstracyjny [`begin.md`](https://github.com/i18n-site/demo.i18n.site/blob/main/en/blog/news/begin.md?plain=1) i [`author.yml`](https://github.com/i18n-site/demo.i18n.site/blob/main/en/author.yml)

## Przypięty Artykuł

Jeśli chcesz przypiąć artykuł na górze, uruchom `i18n.site` i edytuj `xxx.yml` pliki poniżej `.i18n/data/blog` i zmień znacznik czasu na liczbę ujemną (wiele liczb ujemnych zostanie posortowanych od największej do najmniejszej).