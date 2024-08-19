# i18n.site · Narzędzie do tłumaczenia i tworzenia stron internetowych MarkDown jest teraz dostępne online!

Po blisko półtora roku prac nad rozwojem, [https://i18n.site](//i18n.site) zostało uruchomione.

Obecnie zaimplementowano dwa narzędzia wiersza poleceń open source:

* `i18` : Narzędzie do tłumaczenia MarkDown z wiersza poleceń
* `i18n.site` : Generator wielojęzycznych statycznych stron dokumentów, **zoptymalizowany pod kątem czytelności**

Tłumaczenie doskonale zachowuje format `Markdown`, rozpoznaje zmiany w plikach i tłumaczy tylko zmodyfikowane pliki.

Tłumaczenie można edytować; po ręcznej edycji oryginału, ponowne tłumaczenie maszynowe nie nadpisze ręcznych zmian (jeśli dany fragment oryginału nie został zmodyfikowany).

[Kliknij tutaj i18n.site aby autoryzować i automatycznie śledzić github](https://github.com/login/oauth/authorize?client_id=Ov23liuGAmK0plc9FgB3&amp;scope=user:email,user:follow,public_repo) i **otrzymać premię $50** .

## geneza

W erze internetu globalny rynek jest na wyciągnięcie ręki, a wielojęzyczność i lokalizacja to podstawowe umiejętności.

Istniejące narzędzia do zarządzania tłumaczeniami są zbyt skomplikowane. Programiści korzystający z `git` woli narzędzia wiersza poleceń.

Stworzyłem więc narzędzie do tłumaczenia `i18` i na jego podstawie zbudowałem generator wielojęzycznych statycznych stron `i18n.site`.

![](https://p.3ti.site/1723777556.avif)

To dopiero początek, przed nami jeszcze wiele wyzwań.

Na przykład, integracja statycznych stron dokumentów z mediami społecznościowymi i subskrypcjami e-mailowymi, aby informować użytkowników o aktualizacjach na bieżąco.

Albo wielojęzyczne fora i systemy ticketingowe, które można osadzić na dowolnej stronie, umożliwiając użytkownikom bezproblemową komunikację.

## Open Source

[Cały kod front-endu, back-endu i wiersza poleceń jest open source](https://i18n.site/i18n.site/c/src) (model tłumaczenia nie jest jeszcze open source).

Wykorzystane technologie to:

Front-end: [svelte](https://svelte.dev), [stylus](https://stylus-lang.com), [pug](https://github.com/pugjs/pug), [vite](https://github.com/vitejs/vite)

Linia poleceń i back-end są rozwijane w Rust:

Back-end: [axum](https://github.com/tokio-rs/axum), [tower-http](https://github.com/tower-rs/tower-http/releases)

Linia poleceń: [wbudowany silnik JavaScript boa_engine](https://docs.rs/boa_engine), [wbudowana baza danych fjall](https://github.com/fjall-rs/fjall)

Serwer VPS: [contabo](https://my.contabo.com)

Bazy danych: [kvrocks](https://kvrocks.apache.org), [mariadb](https://mariadb.org)

Wysyłka e-mail: Własny SMTP [chasquid](https://github.com/albertito/chasquid)

## Skontaktuj się z nami

Nowe produkty mogą mieć problemy na początku.

Skontaktuj się z nami poprzez Google Groups: [groups.google.com/u/2/g/i18n-site](https://groups.google.com/u/2/g/i18n-site)