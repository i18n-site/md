---

brief: |
  Obecnie zaimplementowano dwa narzędzia wiersza poleceń typu open source: i18 (narzędzie do tłumaczenia wiersza poleceń MarkDown) i i18n.site (wielojęzyczny generator witryn z dokumentami statycznymi)

---


# i18n.site · Narzędzie Do Tłumaczenia I Tworzenia Stron Internetowych MarkDown Jest Teraz Dostępne Online!

Po ponad pół roku rozwoju, [https://i18n.site](//i18n.site) jest online.

Obecnie zaimplementowano dwa narzędzia wiersza poleceń typu open source:

* `i18` : MarkDown Narzędzie do tłumaczenia wiersza poleceń
* `i18n.site` : Wielojęzyczny generator stron ze statycznymi dokumentami, **zoptymalizowany pod kątem czytania**

Tłumaczenie może doskonale zachować format `Markdown` . Potrafi identyfikować modyfikacje plików i tłumaczyć tylko pliki ze zmianami.

Tłumaczenie można edytować; jeśli zmodyfikujesz oryginalny tekst i przetłumaczysz go ponownie maszynowo, ręczne zmiany w tłumaczeniu nie zostaną nadpisane (jeśli ten akapit oryginalnego tekstu nie został zmodyfikowany).

[➤ Kliknij tutaj github aby autoryzować i automatycznie śledzić bibliotekę i18n.site](https://github.com/login/oauth/authorize?client_id=Ov23liuGAmK0plc9FgB3&amp;scope=user:email,user:follow,public_repo) i **otrzymać premię $50** .

## Pochodzenie

W dobie Internetu cały świat jest rynkiem, a wielojęzyczność i lokalizacja to podstawowe umiejętności.

Istniejące narzędzia do zarządzania tłumaczeniami są zbyt obciążające. Dla programistów, którzy polegają na zarządzaniu w wersji `git` , nadal preferują wiersz poleceń.

Opracowałem więc narzędzie do tłumaczenia `i18` i zbudowałem wielojęzyczny generator stron statycznych `i18n.site` w oparciu o narzędzie do tłumaczenia.

![](https://p.3ti.site/1723777556.avif)

To dopiero początek, jest jeszcze wiele do zrobienia.

Na przykład, łącząc witrynę z dokumentami statycznymi z mediami społecznościowymi i subskrypcjami e-mailowymi, można dotrzeć do użytkowników na czas po opublikowaniu aktualizacji.

Na przykład wielojęzyczne fora i systemy zleceń można osadzić na dowolnej stronie internetowej, umożliwiając użytkownikom komunikację bez barier.

## Otwarte Źródło

[Wszystkie kody front-endu, backendu i wiersza poleceń są open source](https://i18n.site/i18n.site/c/src) (model tłumaczenia nie jest jeszcze open source).

Zastosowany stos technologii jest następujący:

Interfejs [svelte](https://svelte.dev) , [stylus](https://stylus-lang.com) , [pug](https://github.com/pugjs/pug) , [vite](https://github.com/vitejs/vite)

Linia poleceń i backend zostały opracowane w oparciu o rdzę.

tył [axum](https://github.com/tokio-rs/axum) , [tower-http](https://github.com/tower-rs/tower-http/releases) .

[Wbudowana linia poleceń js Silnik boa_engine](https://docs.rs/boa_engine) , [wbudowana baza danych fjall](https://github.com/fjall-rs/fjall) .

serwer VPS [contabo](https://my.contabo.com)

baza danych [kvrocks](https://kvrocks.apache.org) , [mariadb](https://mariadb.org) .

Wyślij pocztę do samodzielnego zbudowania SMTP [chasquid](https://github.com/albertito/chasquid)

## Skontaktuj Się Z Nami

Kiedy na rynek wprowadzane są nowe produkty, problemy są nieuniknione.

Skontaktuj się z nami za pośrednictwem Forum Google [groups.google.com/u/2/g/i18n-site](https://groups.google.com/u/2/g/i18n-site) :