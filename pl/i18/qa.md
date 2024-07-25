# Powszechny Problem

## Dodawanie Lub Usuwanie Wierszy Tłumaczenia Powodujące Zamieszanie W Tłumaczeniu

Pamiętaj, **że liczba wierszy w tłumaczeniu musi odpowiadać wierszom w tekście oryginalnym** .

Oznacza to, że podczas ręcznego dostosowywania tłumaczenia **nie należy dodawać ani usuwać wierszy tłumaczenia** , w przeciwnym razie relacja mapowania między tłumaczeniem a tekstem oryginalnym zostanie zaburzona.

Jeśli przypadkowo dodasz lub usuniesz wiersz, powodując zamieszanie, przywróć tłumaczenie do wersji sprzed modyfikacji, uruchom tłumaczenie `i18` i ponownie zapisz w pamięci podręcznej prawidłowe mapowanie.

Mapowanie pomiędzy tłumaczeniem a oryginalnym tekstem jest powiązane z tokenem. Utwórz nowy token w [i18n.site/token](//i18n.site/token) , usuń `.i18h/hash` i przetłumacz ponownie, aby wyczyścić mylące mapowanie (spowoduje to jednak utratę wszystkich ręcznych poprawek w tłumaczeniu).

## `YAML` : Zapobiec Konwersji `HTML` Łącza Na `Markdown`

Wartość `YAML` będzie traktowana jako `MarkDown` przy tłumaczeniu.

Czasami konwersja `HTML` → `MarkDown` nie jest tym, czego chcemy, na przykład konwersja `<a href="/">Home</a>` na `[Home](/)` .

Dodaj dowolny atrybut inny niż `href` do znacznika `a` , taki jak `<a class="A" href="/">Home</a>` , aby uniknąć tej konwersji.

## `./I18n/Hash` Następujące Pliki Powodują Konflikt

Usuń powodujące konflikt pliki i uruchom ponownie tłumaczenie `i18`
