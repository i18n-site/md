# Часті питання

## Додавання або видалення рядків перекладу може призвести до збою в structурі перекладу

Зверніть увагу, **кількість рядків у перекладі повинна відповідати кількості рядків в оригіналі**.

Тобто, при手动ному налаштуванні перекладу, **не додавайте та не видаляйте рядки**, інакше буде порушено відповідність між перекладом та оригіналом.

Якщо ви випадково додавали або видаляли рядки, що призвело до збою, будь ласка, відновіть переклад до попередньої версії, знову запустіть `i18` для перекладу та оновіть правильне映射ування.

Мапування між перекладом та оригіналом прив'язане до токенів. Створіть новий токен на [i18n.site/token](//i18n.site/token), видаліть `.i18h/hash`, і знову перекладіть, щоб очистити зboйне мапування (але це призведе до втрати всіх manualних змін у перекладі).

## `YAML`: Як уникнути перетворення посилань `HTML` у `Markdown`

Значення `YAML` розглядається як `Markdown` для перекладу.

Іноді перетворення `HTML` → `Markdown` не є бажаним, наприклад `<a href="/">Home</a>` перетворюється на `[Home](/)`.

Додайте до тегу `a` будь-який атрибут, крім `href`, наприклад `<a class="A" href="/">Home</a>`, щоб уникнути цього перетворення.

## Конфлікти файлів у директорії `./i18n/hash`

Видаліть конфліктні файли та повторно запустіть `i18` для перекладу.