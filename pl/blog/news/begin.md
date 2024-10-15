---

brief: |
  Obecnie zaimplementowano dwa narzędzia wiersza poleceń typu open source: i18 (narzędzie do tłumaczenia wiersza poleceń Markdown) oraz i18n.site (wielojęzyczny generator statycznych stron dokumentacyjnych)

---


# i18n.site · Narzędzie do tłumaczenia i tworzenia stron z Markdown, teraz dostępne online!

Po blisko pół roku prac nad rozwojem, [https://i18n.site](//i18n.site) jest już online.

Obecnie zaimplementowano dwa narzędzia wiersza poleceń typu open source:

* `i18`: Narzędzie do tłumaczenia wiersza poleceń Markdown
* `i18n.site`: Generator statycznych stron wielojęzycznych, **zoptymalizowany pod kątem doświadczenia czytelniczego**

1	Tłumaczenie może doskonale zachować format `Markdown`. Potrafi identyfikować zmiany w plikach i tłumaczyć wyłącznie pliki z dokonanymi zmianami.

Tłumaczenie można edytować; po zmodyfikowaniu oryginału, ponowne tłumaczenie maszynowe nie nadpisze ręcznych poprawek (o ile dany fragment oryginału nie został zmieniony).

[Kliknij tutaj github aby autoryzować i automatycznie śledzić i18n.site](https://github.com/login/oauth/authorize?client_id=Ov23liuGAmK0plc9FgB3&amp;scope=user:email,user:follow,public_repo) i **otrzymać premię $50** .

## Pochodzenie

W erze internetu globalny rynek jest na wyciągnięcie ręki, a wielojęzyczność i lokalizacja to podstawowe umiejętności.

Istniejące narzędzia do zarządzania tłumaczeniami są zbyt zaawansowane. Programiści, którzy korzystają z zarządzania wersjami za pomocą `git`, wciąż preferują wiersz poleceń.

Stworzyłem więc narzędzie do tłumaczenia `i18` i na jego podstawie zbudowałem generator wielojęzycznych statycznych stron dokumentacyjnych `i18n.site`.

![](https://p.3ti.site/1723777556.avif)

To dopiero początek, przed nami jeszcze wiele wyzwań.

Na przykład, integracja statycznych stron dokumentacyjnych z mediami społecznościowymi i subskrypcjami e-mailowymi, aby informować użytkowników o aktualizacjach na bieżąco.

Albo wielojęzyczne fora i systemy ticketingowe, które można zintegrować z dowolną stroną internetową, umożliwiając użytkownikom bezproblemową komunikację.

## Otwarte Źródło

[Wszystkie kody front-endu, backendu i wiersza poleceń są open source](https://i18n.site/i18n.site/c/src) (model tłumaczenia nie jest jeszcze open source).

Wykorzystane technologie to:

Front-end: [Svelte](https://svelte.dev), [Stylus](https://stylus-lang.com), [Pug](https://github.com/pugjs/pug), [Vite](https://github.com/vitejs/vite)

Backend i wiersz poleceń są rozwijane w Rust.

Backend: [Axum](https://github.com/tokio-rs/axum), [Tower HTTP](https://github.com/tower-rs/tower-http/releases).

Wiersz poleceń: [wbudowany silnik JavaScript Boa Engine](https://docs.rs/boa_engine), [wbudowana baza danych Fjall](https://github.com/fjall-rs/fjall).

Serwery VPS: [Contabo](https://my.contabo.com)

Bazy danych: [Kvrocks](https://kvrocks.apache.org), [MariaDB](https://mariadb.org).

Wysyłka poczty za pomocą własnego SMTP: [Chasquid](https://github.com/albertito/chasquid)

## Skontaktuj się z nami

Nowe produkty mogą mieć problemy na początku.

Skontaktuj się z nami poprzez Google Groups: [groups.google.com/u/2/g/i18n-site](https://groups.google.com/u/2/g/i18n-site)