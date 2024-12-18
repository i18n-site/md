---

brief: |
  В настоящее время реализованы два инструмента командной строки с открытым исходным кодом: i18 (инструмент перевода командной строки MarkDown) и i18n.site (многоязычный генератор статических сайтов документов).

---


# i18n.site · Инструмент Для Перевода MarkDown И Создания Веб-Сайтов Теперь Онлайн!

После более чем полугода разработки [https://i18n.site](//i18n.site)

В настоящее время реализованы два инструмента командной строки с открытым исходным кодом:

* `i18` : MarkDown Инструмент перевода командной строки
* `i18n.site` : генератор статических документов, **оптимизированный для удобства чтения.**

Перевод может прекрасно поддерживать формат `Markdown` . Может идентифицировать изменения файлов и переводить только файлы с изменениями.

Перевод доступен для редактирования; если вы измените исходный текст и переведете его снова, внесенные вручную изменения в переводе не будут перезаписаны (если этот абзац исходного текста не был изменен).

[➤ Нажмите здесь, чтобы авторизоваться и автоматически подписаться github i18n.site](https://github.com/login/oauth/authorize?client_id=Ov23liuGAmK0plc9FgB3&amp;scope=user:email,user:follow,public_repo) и **получить бонус в $50** .

## Источник

В эпоху Интернета весь мир представляет собой рынок, а многоязычие и локализация являются базовыми навыками.

Существующие инструменты управления переводами слишком тяжеловесны. Для программистов, которые полагаются на управление версией `git` , они по-прежнему предпочитают командную строку.

Итак, я разработал инструмент перевода `i18` и создал многоязычный генератор статических сайтов `i18n.site` на основе инструмента перевода.

![](https://p.3ti.site/1723777556.avif)

Это только начало, еще многое предстоит сделать.

Например, подключив статический сайт документов к социальным сетям и подписке по электронной почте, пользователи смогут связаться с ними вовремя, когда будут выпущены обновления.

Например, многоязычные форумы и системы заказов на работу могут быть встроены в любую веб-страницу, что позволит пользователям общаться без препятствий.

## Открытый Исходный Код

[Коды внешнего интерфейса, серверной части и командной строки имеют открытый исходный код](https://i18n.site/i18n.site/c/src) (модель перевода еще не является открытым исходным кодом).

Используемый стек технологий следующий:

Интерфейс [svelte](https://svelte.dev) , [stylus](https://stylus-lang.com) , [pug](https://github.com/pugjs/pug) , [vite](https://github.com/vitejs/vite)

Командная строка и бэкэнд разработаны на основе Rust.

задняя часть [axum](https://github.com/tokio-rs/axum) , [tower-http](https://github.com/tower-rs/tower-http/releases) .

[Встроенная командная строка js Engine boa_engine](https://docs.rs/boa_engine) , [встроенная база данных fjall](https://github.com/fjall-rs/fjall) .

[contabo](https://my.contabo.com) VPS

база данных [kvrocks](https://kvrocks.apache.org) , [mariadb](https://mariadb.org) .

Отправьте письмо на собственный [chasquid](https://github.com/albertito/chasquid) SMTP

## Связаться С Нами

При запуске новых продуктов проблемы неизбежны.

Не стесняйтесь обращаться к нам через форум Google [groups.google.com/u/2/g/i18n-site](https://groups.google.com/u/2/g/i18n-site) :