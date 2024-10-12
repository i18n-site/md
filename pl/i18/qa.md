# Często zadawane pytania

## Wprowadzanie lub usuwanie wierszy tłumaczenia może prowadzić do chaosu w tłumaczeniu

Pamiętaj, **liczba wierszy tłumaczenia musi być zgodna z liczbą wierszy w oryginale**.

Oznacza to, że podczas ręcznego dostosowywania tłumaczenia **nie należy dodawać ani usuwać wierszy**.

Jeśli przypadkowo dodasz lub usuniesz wiersz, prowadząc do chaosu, przywróć tłumaczenie do wersji sprzed zmian, uruchom ponownie `i18` i zaktualizuj poprawne mapowanie w pamięci podręcznej.

Mapowanie między tłumaczeniem a oryginałem jest związane z tokenem. Utwórz nowy token na [i18n.site/token](//i18n.site/token), usuń `.i18h/hash`, a następnie przetłumacz ponownie, aby wyczyścić błędne mapowanie (choć spowoduje to utratę wszystkich ręcznych zmian w tłumaczeniu).

## `YAML`: Jak uniknąć konwersji linków `HTML` do `Markdown`

Wartości `YAML` są traktowane jako `Markdown` podczas tłumaczenia.

Czasami konwersja z `HTML` do `Markdown` nie jest pożądana, na przykład `<a href="/">Home</a>` jest przekształcane w `[Home](/)`.

Dodanie dowolnego atrybutu innego niż `href` do tagu `a`, na przykład `<a class="A" href="/">Home</a>`, zapobiegnie tej konwersji.

## Konflikty plików w katalogu `./i18n/hash`

Usuń pliki powodujące konflikt i uruchom ponownie `i18` do tłumaczenia.