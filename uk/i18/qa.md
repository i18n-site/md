# Часті питання

## Додавання або видалення рядків перекладу може призвести до збою в structурі перекладу

> [!WARN]
> Зверніть увагу, **кількість рядків у перекладі має відповідати кількості рядків у вихідному тексті**.
> Тобто, при手动ному налаштуванні перекладу, **не додавайте та не видаляйте рядки** перекладу, інакше це призведе до розриву відповідності між перекладом і вихідним текстом.

Якщо ви випадково додавали або видаляли рядок, що спричинило збою, будь ласка, відновіть переклад до попередньої версії, знову запустіть команду `i18` для перекладу та поновіть правильне співвідношення.

Співвідношення між перекладом і вихідним текстом прив’язане до токенів. Створіть новий токен на [i18n.site/token](//i18n.site/token), видаліть `.i18h/hash`, і знову перекладіть, щоб очистити зboйне співвідношення (але це призведе до втрати всіх manualних правок перекладу).

## `YAML`: Як уникнути перетворення посилань `HTML` на `Markdown`

Значення `YAML` розглядається як `Markdown` для перекладу.

Іноді перетворення `HTML` → `Markdown` не є бажаним, наприклад `<a href="/">Home</a>` перетворюється на `[Home](/)`.

Додайте до тегу `a` будь-який атрибут, крім `href`, наприклад `<a class="A" href="/">Home</a>`, щоб уникнути цього перетворення.

## Конфлікти файлів у директорії `./i18n/hash`

Видаліть конфліктні файли та знову запустіть команду `i18` для перекладу.