# Версія Проекту

Візьмемо для прикладу демонстраційний проект:

`en/demo2/v` — номер поточної версії проекту, який відображатиметься праворуч від назви проекту на бічній панелі.

<img src="https://p.3ti.site/1721290486.avif" width="320px">

Тут `en/` — код мови, що відповідає вихідній мові перекладу, налаштованій `.i18n/conf.yml` .

Якщо ваша вихідна мова не є англійською, тоді файл `v` слід розмістити в каталозі проекту вашої вихідної мови.

Можливість перегляду історичних версій документів знаходиться в розробці.

Рекомендується змінювати номер версії документа лише тоді, коли виходять основні оновлення (наприклад, `v1` , `v2` ), щоб уникнути занадто великої кількості номерів версій, що спричиняє безлад на сторінках, індексованих пошуковими системами.

## Використовуйте Порожні Файли `v` Щоб Розділити Індекси Файлів Різних Проектів

У демонстраційному проекті, крім `en/demo2/v` , ви також можете побачити, що в каталогах `en/blog` і `en/demo1` є порожні файли `v` .

Порожній `v` не відображатиметься в структурі бічної панелі, але поки є файл `v` , для файлів у каталозі та підкаталогах буде створено незалежний індекс.

Розділивши індекси різних проектів, ви можете уникнути повільного доступу, викликаного завантаженням індексу всіх файлів на всьому сайті одночасно.

Наприклад, файл індексу [https://unpkg.com/i18n.site/en/blog.json](https://unpkg.com/i18n.site/en/blog.json) що відповідає `blog` у демонстраційному проекті, є :