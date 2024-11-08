# Кодовая База

## Внешний Интерфейс

* Главный сайт [github](https://github.com/i18n-site/site) / [atomgit](https://atomgit.com/i18n/proto)
* Документация [github](https://github.com/i18n-site/md) / [atomgit](https://atomgit.com/i18n/md)
* Автономный компонент [github](https://github.com/i18n-site/18x) / [atomgit](https://atomgit.com/i18n/18x)
* svelte Компонент [github](https://github.com/i18n-site/plugin) / [atomgit](https://atomgit.com/i18n/plugin)
* Интерфейс [github](https://github.com/i18n-site/proto) / [atomgit](https://atomgit.com/i18n/proto)
* Универсальная базовая библиотека [github](https://github.com/i18n-site/lib) / [atomgit](https://atomgit.com/i18n/lib)
* Базовая библиотека браузера [github](https://github.com/i18n-site/ie) / [atomgit](https://atomgit.com/i18n/ie)
* Нет необходимости упаковывать интерфейсные библиотеки с прямыми ссылками / [atomgit](https://atomgit.com/i18n/x) [github](https://github.com/i18n-site/x)
  Удобно цитировать непосредственно в скрипте инициализации уценки и одновременно использовать его в упакованном сайте, чтобы избежать дублирования кода.

## Задняя Часть

Для создания сайта документов требуется только внешний интерфейс, а не серверная часть.

Этот бэкэнд является бэкэндом самого веб-сайта i18n.site, включая пользовательскую, платежную, push-сообщения и другие системы.

* Сервис [github](https://github.com/i18n-api/srv) / [atomgit](https://atomgit.com/i18n-api/srv)
* Плагин [github](https://github.com/i18n-api/pub) / [atomgit](https://atomgit.com/i18n-api/pub)
* Базовая библиотека [github](https://github.com/i18n-site/rust) / [atomgit](https://atomgit.com/i18n/rust)

## Развивать

* Локальный контейнер [github](https://github.com/i18n-api/srv.docker) / [atomgit](https://atomgit.com/i18n-api/srv.docker)

## Эксплуатация И Обслуживание

* Скрипт онлайн-развертывания [github](https://github.com/i18n-ops/ops) / [atomgit](https://atomgit.com/i18n-ops/ops)
* ubuntu Конфигурация системы [github](https://github.com/i18n-ops/ubuntu) / [atomgit](https://atomgit.com/i18n-ops/ubuntu)
* Запланированные задачи [github](https://github.com/i18n-cron/cron) / [atomgit](https://atomgit.com/i18n/cron)

## Стек Технологий

### Внешний Интерфейс

* [svelte](//svelte.dev)
* [coffeescript](//coffeescript.org)
* [pug](https://github.com/pugjs/pug)
* [stylus](https://stylus.com)

### Задняя Часть

* [rust](//rust.org)
  * [axum](//github.com/tokio-rs/axum)
  * [boa](//github.com/boa-dev/boa)
  * [swc](//swc.rs)
* [node](//nodejs.org)
* [bun](//bun.dev)

## Участвуйте В Разработке

Мы ищем волонтеров для участия в разработке открытого исходного кода и корректуре переведенных текстов.

Если вы заинтересованы, пожалуйста [→ Нажмите здесь, чтобы заполнить свой профиль](https://ggl.link/i18n) , а затем присоединитесь к [списку рассылки](https://groups.google.com/u/2/g/i18n-site) для общения.