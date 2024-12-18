# Faq

## Додавання Або Видалення Рядків Перекладу, Що Призводить До Плутанини В Перекладі

> [!WARN]
> Пам’ятайте, **що кількість рядків у перекладі має відповідати кількості рядків в оригінальному тексті** .
> Тобто, коли вручну коригуєте переклад, **не додавайте та не видаляйте рядки перекладу** , інакше зв’язок відображення між перекладом і оригінальним текстом буде невпорядкованим.

Якщо ви випадково додали або видалили рядок, що спричинило плутанину, будь ласка, відновіть переклад до версії перед модифікацією, знову запустіть `i18` перекладу та повторно збережіть правильне зіставлення.

Зіставлення між перекладом і оригінальним текстом прив’язане до маркера. Створіть новий токен у [i18n.site/token](//i18n.site/token) видаліть `.i18h/hash` і перекладіть знову, щоб очистити заплутане зіставлення (але це спричинить втрату всіх ручних коригувань перекладу).

## `YAML` : Як Уникнути Перетворення Посилання `HTML` На `Markdown`

Значення `YAML` розглядається як `MarkDown` для перекладу.

Іноді перетворення `HTML` → `MarkDown` не те, що ми хочемо, наприклад `<a href="/">Home</a>` перетворюється на `[Home](/)` .

Додавання до тегу `a` будь-якого атрибута, крім `href` , наприклад `<a class="A" href="/">Home</a>` , може уникнути цього перетворення.

## `./i18n/hash` Конфліктів Файлів Нижче

Видаліть конфліктні файли та повторно запустіть `i18` перекладів.