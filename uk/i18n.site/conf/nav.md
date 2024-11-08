# Індивідуальна Навігація

Давайте візьмемо демонстраційний сайт як приклад [i18n-demo.github.io](//i18n-demo.github.io) щоб пояснити, як налаштувати навігацію.

![](https://p.3ti.site/1731036697.avif)

Файли, які відповідають пронумерованим областям на малюнку вище, такі:

1. Ліворуч [`.i18n/htm/t1.pug`](https://github.com/i18n-site/demo.i18n.site/blob/main/.i18n/htm/t1.pug)
2. Правильно [`.i18n/htm/t2.pug`](https://github.com/i18n-site/demo.i18n.site/blob/main/.i18n/htm/t2.pug)

[`pug`](https://pugjs.org) — це мова шаблонів, яка генерує `HTML` .

[➔ Натисніть тут, щоб вивчити граматику pug](https://pugjs.org)

Рядок формату `${I18N.sponsor}` використовується у файлі для реалізації інтернаціоналізації, і його вміст буде замінено [i18n.yml](https://github.com/i18n-site/demo.i18n.site/blob/main/en/i18n.yml) текстом у каталозі вихідної мови.

**Не пишіть `css` і `js` в `pug`** , інакше буде помилка.

Стилі записуються в `css` , а взаємодія досягається шляхом створення веб-компонентів.

Тут файл, що відповідає стилю навігаційної панелі [i18n/htm/topbar.css](https://github.com/i18n-site/demo.i18n.site/blob/main/.i18n/htm/topbar.css) є :