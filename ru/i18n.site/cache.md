# Внешний Кэш

## Задержка Обновления Внешнего Кэша

Согласно [MDN](https://developer.mozilla.org/docs/Web/API/Service_Worker_API) , максимальная частота обновления `service worker` 24 часов.

i18n.site Кэшируйте CDN в `service worker` Поэтому, если `cdn` изменен в конфигурации, старым пользователям придется ждать 24 часов, чтобы увидеть обновление.

## Как Очистить Внешний Кеш При Локальной Отладке

TODO хром
