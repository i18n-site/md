# Często Zadawane Pytania

## Dodawanie Lub Usuwanie Wierszy Tłumaczenia Powodujące Zamieszanie W Tłumaczeniu

> [!WARN]
> Pamiętaj, **że liczba wierszy w tłumaczeniu musi odpowiadać wierszom w tekście oryginalnym** .
> Oznacza to, że podczas ręcznego dostosowywania tłumaczenia **nie należy dodawać ani usuwać wierszy tłumaczenia** , w przeciwnym razie relacja mapowania między tłumaczeniem a tekstem oryginalnym zostanie zaburzona.

Jeśli przypadkowo dodasz lub usuniesz linię, powodując zamieszanie, przywróć tłumaczenie do wersji sprzed modyfikacji, ponownie uruchom tłumaczenie `i18` i ponownie zapisz w pamięci podręcznej prawidłowe mapowanie.

Mapowanie pomiędzy tłumaczeniem a oryginalnym tekstem jest powiązane z tokenem. Utwórz nowy token w [i18n.site/token](//i18n.site/token) usuń `.i18h/hash` i przetłumacz ponownie, aby wyczyścić mylące mapowanie (ale spowoduje to utratę wszystkich ręcznych poprawek w tłumaczeniu).

## `YAML` : Jak Uniknąć Konwersji Łącza `HTML` Na `Markdown`

Wartość `YAML` jest traktowana jako `MarkDown` przy translacji.

Czasami konwersja z `HTML` → `MarkDown` nie jest tym, czego chcemy, na przykład konwersja `<a href="/">Home</a>` na `[Home](/)` .

Dodanie dowolnego atrybutu innego niż `href` do znacznika `a` , na przykład `<a class="A" href="/">Home</a>` , pozwala uniknąć tej konwersji.

## `./i18n/hash` Konfliktów Plików Poniżej

Usuń pliki powodujące konflikt i uruchom ponownie tłumaczenie `i18` .