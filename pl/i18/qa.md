# Często zadawane pytania

## Wprowadzanie lub usuwanie wierszy tłumaczenia może prowadzić do chaosu w tłumaczeniu

Pamiętaj, **liczba wierszy tłumaczenia musi być zgodna z liczbą wierszy w oryginale**.

Oznacza to, że podczas ręcznej edycji tłumaczenia **nie należy dodawać ani usuwać wierszy**.

Jeśli przypadkowo dodasz lub usuniesz wiersz, powodując chaos, przywróć tłumaczenie do wersji sprzed zmian i ponownie uruchom `i18`, aby odświeżyć poprawne mapowanie.

Mapowanie między tłumaczeniem a oryginałem jest związane z tokenem. Utwórz nowy token na [i18n.site/token](//i18n.site/token), usuń `.i18h/hash`, a następnie przetłumacz ponownie, aby wyczyścić pomieszane mapowanie (choć spowoduje to utratę wszystkich ręcznych zmian).

## `YAML`: Jak uniknąć konwersji linków `HTML` do `Markdown`

Wartości `YAML` są traktowane jako `Markdown` podczas tłumaczenia.

Czasami konwersja z `HTML` do `Markdown` nie jest pożądana, na przykład `<a href="/">Home</a>` zostaje przekształcone w `[Home](/)`.

Dodanie dowolnego atrybutu do znacznika `a`, oprócz `href`, na przykład `<a class="A" href="/">Home</a>`, zapobiegnie tej konwersji.

## Konflikty plików w katalogu `./i18n/hash`

Usuń pliki powodujące konflikt i ponownie uruchom `i18` do tłumaczenia.