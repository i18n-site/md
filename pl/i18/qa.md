# Często zadawane pytania

## Dodawanie lub usuwanie wierszy tłumaczenia może prowadzić do chaosu w tekście

> [!WARN]
> Pamiętaj, **liczba wierszy tłumaczenia musi być zgodna z liczbą wierszy w oryginale**.
> Oznacza to, że podczas ręcznego dostosowywania tłumaczenia, **nie dodawaj ani nie usuwaj wierszy**.

Jeśli przypadkowo dodasz lub usuniesz wiersz, prowadząc do chaosu, przywróć tłumaczenie do wersji sprzed zmian i uruchom ponownie `i18`, aby odświeżyć poprawne mapowanie.

Mapping między tłumaczeniem a oryginałem jest związany z tokenem. Utwórz nowy token na [i18n.site/token](//i18n.site/token), usuń `.i18h/hash`, a następnie przetłumacz ponownie, aby wyczyścić błędne mapowanie (choć spowoduje to utratę ręcznych zmian).

## `YAML`: Jak uniknąć konwersji linków `HTML` do `Markdown`

Wartości `YAML` są traktowane jako `Markdown` podczas tłumaczenia.

Czasami konwersja z `HTML` do `Markdown` nie jest pożądana, na przykład `<a href="/">Home</a>` zostaje przekształcone w `[Home](/)`.

Dodaj dowolny atrybut do znacznika `a`, oprócz `href`, na przykład `<a class="A" href="/">Home</a>`, aby uniknąć tej konwersji.

## Konflikty plików w katalogu `./i18n/hash`

Usuń pliki powodujące konflikt i uruchom ponownie `i18`, aby przetłumaczyć na nowo.