# Встановити та Використовувати

## Windows: спочатку встановіть Git Bash

Windows-система, будь ласка, [натисніть тут, щоб спочатку завантажити та встановити `git bash`](https://git-scm.com/download/win).

Виконайте подальші операції в `git bash`.

## Встановити

```sh
bash <(curl -sS https://i.i18n.site) i18
```

### Налаштувати Перекладацький Token

Відвідайте [i18n.site/token](//i18n.site/token) і натисніть, щоб скопіювати token

<img src="https://p.3ti.site/1719911689.avif" style="width:400px">

Створіть `~/.config/i18n.site.yml`, вставте в нього скопійований вміст, наприклад:

```
token: YOUR_API_TOKEN
```

Крім того, вам потрібно [i18n.site/payBill](//i18n.site/payBill) для прив'язки платіжної картки (не потрібно поповнювати, сайт автоматично стягуватиме плату відповідно до використання, [дивіться ціни на головній сторінці](/#price)).

## Використовувати

### Демонстраційний проект

Будь ласка, зверніться до демонстраційного проекту [github.com/i18n-site/demo.i18](//github.com/i18n-site/demo.i18), щоб дізнатися про налаштування `i18` перекладу.

Користувачі з Китаю можуть клонувати [atomgit.com/i18n/demo.i18](//atomgit.com/i18n/demo.i18)

Після клонування увійдіть у каталог і запустіть `i18`, щоб завершити переклад.

### Структура каталогу

Структура шаблону сховища виглядає так:

```
┌── .i18n
│  └── conf.yml
└── en
   ├── _IgnoreDemoFile.md
   ├── i18n.yml
   └── README.md
```

Файли в каталозі `en` є демонстраційними перекладами і можуть бути видалені.

### Запустити Переклад

Увійдіть у каталог і запустіть `i18`, щоб виконати переклад.

Окрім перекладу, програма також створює папку `.i18n/data`, будь ласка, додайте її до репозиторію.

Після перекладу нового файлу в цьому каталозі буде створено новий файл, не забудьте виконати `git add .`.

## Файл Конфігурації

`.i18n/conf.yml` — це файл конфігурації для інструменту перекладу командного рядка `i18`

Зміст файлу такий:

```
i18n:
  fromTo:
    en: zh ja ko de fr
    # en:

ignore:
  - _*
```

### Вихідна мова та мова перекладу

У файлі конфігурації параметр `fromTo` має такі значення:

`en` — вихідна мова, `zh ja ko de fr` — цільові мови перекладу.

Коди мов дивіться на [i18n.site/i18/LANG_CODE](https://i18n.site/i18/LANG_CODE).

Наприклад, якщо ви хочете перекласти китайську на англійську, змініть рядок на `zh: en`.

Якщо ви хочете перекладати на всі підтримувані мови, залиште поле після `:` порожнім, наприклад:

```
i18n:
  fromTo:
    en:
```

Ви можете налаштувати різні `fromTo` для різних підкаталогів/файлів. Приклад запису демонстрації: :

```
i18n:
  fromTo:
    en:
  path:
    blog:
      fromTo:
        zh:
    blog/your_file_name.md:
      fromTo:
        ja:
```

У цій таблиці конфігурації вихідна мова для перекладу каталогу `blog` — `zh`, а для `blog/your_file_name.md` — `ja`.

### Ігнорувати Файли

За замовчуванням усі файли з розширеннями `.md` і `.yml` у каталозі вихідної мови будуть перекладені.

Якщо ви хочете ігнорувати певні файли та не перекладати їх (наприклад, незавершені чернетки), використовуйте параметр `ignore`.

Параметр `ignore` використовує sintaksys [globset](https://docs.rs/globset/latest/globset/#syntax), подібний до `.gitignore`.

Наприклад, `_*` у файлі конфігурації означає, що файли, які починаються з `_`, будуть проігноровані.

## Правила Перекладу

### Редактори перекладів не повинні додавати або видаляти рядки

Переклад можна редагувати. Якщо ви зміните оригінальний текст і виконаєте машинний переклад ще раз, ручні зміни до перекладу не будуть перезаписані (якщо оригінальний текст не був змінений).

Але зверніть увагу, що рядки перекладу та оригінального тексту повинні відповідати один одному. Тобто не додавайте і не видаляйте рядки при редагуванні перекладу, інакше це може призвести до плутанини в кеші редагування перекладу.

Якщо виникнуть проблеми, зверніться до [розділу поширених запитань, щоб знайти рішення](/i18/qa#H1)

### `YAML` перекладів

Інструмент командного рядка знайде всі файли з розширенням `.yml` у каталозі вихідної мови та перекладе їх.

* Зауважте, що суфікс імені файлу повинен бути `.yml` (а не `.yaml`).

Інструмент перекладає лише значення словників у `.yml`, а не ключі.

Наприклад, `i18n/en/i18n.yml`

```
apiToken: API Token
defaultToken: Default Token
```

буде перекладено на `i18n/zh/i18n.yml`

```
apiToken: 接口令牌
defaultToken: 默认令牌
```

Переклад `YAML` також можна змінити вручну (але не додавайте та не видаляйте ключі чи рядки в перекладі).

На основі перекладу `YAML` ви можете легко створювати міжнародні рішення для різних мов програмування.

## Переклад Підкаталогів

### Переклад підкаталогів

Достатньо створити `.i18n/conf.yml` (не потрібно кожного разу починати з шаблону демонстраційного проекту), і `i18` буде працювати нормально.

Інструмент командного рядка знайде `.i18n/conf.yml` конфігурацій у всіх підкаталогах і перекладе їх.

Проекти, які використовують архітектуру [monorepo](//monorepo.tools), можуть розміщувати мовні файли у підкаталогах.

![](https://p.3ti.site/1719910016.avif)

### Індивідуальний каталог встановлення

За замовчуванням встановлюється в `/usr/local/bin`.

Якщо `/usr/local/bin` не має дозволу на запис, встановлюється в `~/.bin`.

Встановлення змінної середовища `TO` може визначити каталог встановлення, наприклад:

```sh
TO=/bin sudo bash <(curl -sS https://i.i18n.site) i18
```