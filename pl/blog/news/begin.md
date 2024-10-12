---

brief: |
  Obecnie zaimplementowano dwa narzędzia wiersza poleceń open source: i18 (narzędzie do tłumaczenia wiersza poleceń Markdown) oraz i18n.site (generator wielojęzycznych stron statycznych)

---


# i18n.site · Narzędzie do tłumaczenia i tworzenia stron Markdown jest teraz dostępne online!

Po półtora roku prac nad rozwojem, [https://i18n.site](//i18n.site) został uruchomiony.

Obecnie zaimplementowano dwa narzędzia wiersza poleceń open source:

* `i18` : narzędzie do tłumaczenia wiersza poleceń Markdown
* `i18n.site` : generator wielojęzycznych stron statycznych, **zoptymalizowany pod kątem czytelnictwa**

Tłumaczenie może doskonale zachować format `Markdown`. Potrafi identyfikować zmiany w plikach i tłumaczyć wyłącznie pliki z dokonanymi zmianami.

Tłumaczenie można edytować; po ręcznej korekcie oryginału, ponowne tłumaczenie maszynowe nie nadpisze manualnych zmian (jeśli dany fragment oryginału nie został zmieniony).

[Kliknij tutaj, aby autoryzować automatyczne śledzenie repozytorium GitHub i18n.site](https://github.com/login/oauth/authorize?client_id=Ov23liuGAmK0plc9FgB3&scope=user:email,user:follow,public_repo) i **otrzymać premię $50**.

## Początki

W erze Internetu globalny rynek jest na wyciągnięcie ręki, a wielojęzyczność i lokalizacja to podstawowe umiejętności.

Obecne narzędzia do zarządzania tłumaczeniami są zbyt skomplikowane. Programiści, którzy korzystają z zarządzania wersjami za pomocą `git`, wciąż wolą wiersz poleceń.

Stworzyłem więc narzędzie do tłumaczenia `i18` i na jego podstawie zbudowałem generator wielojęzycznych stron statycznych `i18n.site`.

![](https://p.3ti.site/1723777556.avif)

To dopiero początek, przed nami jeszcze wiele wyzwań.

Na przykład, integracja statycznych stron dokumentacyjnych z mediami społecznościowymi i subskrypcjami e-mailowymi, aby użytkownicy mogli być na bieżąco z aktualizacjami.

Na przykład, wielojęzyczne fora i systemy ticketingowe mogą być zintegrowane z dowolną stroną internetową, umożliwiając użytkownikom bezproblemową komunikację.

## Otwarte Źródło

[Wszystkie kody front-end, backend oraz linii poleceń są dostępne na开源](https://i18n.site/i18n.site/c/src) (model tłumaczenia nie jest jeszcze dostępny na开源).

Zastosowane technologie to:

Front-end: [Svelte](https://svelte.dev), [Stylus](https://stylus-lang.com), [Pug](https://github.com/pugjs/pug), [Vite](https://github.com/vitejs/vite)

Backend i wiersz poleceń są rozwijane w Rust.

Backend: [Axum](https://github.com/tokio-rs/axum), [Tower HTTP](https://github.com/tower-rs/tower-http/releases).

Wiersz poleceń: [wbudowany silnik JavaScript Boa Engine](https://docs.rs/boa_engine), [wbudowana baza danych Fjall](https://github.com/fjall-rs/fjall).

Serwer VPS: [Contabo](https://my.contabo.com)

Bazy danych: [Kvrocks](https://kvrocks.apache.org), [MariaDB](https://mariadb.org).

Wysyłka e-mail: własny SMTP [Chasquid](https://github.com/albertito/chasquid).

## Kontakt

Wprowadzenie nowych produktów wiąże się z wyzwaniami.

Zapraszamy do kontaktu poprzez Google Forum: [groups.google.com/u/2/g/i18n-site](https://groups.google.com/u/2/g/i18n-site)