# .i18n/conf.yml

Файл конфігурації `i18n.site` — це `.i18n/conf.yml`, а його вміст такий:

```yaml
i18n:
  fromTo:
    en:
upload:
  ext:
    - md
nav:
  - i18n: home
    use: Toc
    url: /
  - i18n: doc
    menu: NB demo1,demo2
    use: Doc
  - i18n: blog
    use: Blog
addon:
  - i18n.addon/toc
```

Серед них параметр `upload` з `ext:` означає, що під час публікації буде завантажено лише файли з розширенням `.md`.

## Верхня навігаційна панель

Параметри конфігурації `nav:` відповідають навігаційному меню на верхівці головної сторінки.

<img src="//p.3ti.site/1721051426.avif" style="width:320px">

Серед них `i18n: home` відповідає `home: Home` у `en/i18n.yml` (де `en` — вихідна мова проекту для перекладу).

Вміст `en/i18n.yml` — це текст, який відображається в меню навігації, і він буде перекладений відповідно до налаштувань `fromTo` у конфігурації, наприклад, на `zh/i18n.yml`.

<img src="//p.3ti.site/1721051689.avif" style="width:320px">

Після завершення перекладу ви можете змінити значення перекладу в `yml`, але не додавайте та не видаляйте ключі перекладу `yml`.

### `use: Toc`, шаблон одного файлу з контуром

У конфігурації `nav`:

```
  - i18n: home
    use: Toc
    url: /
```

`use: Toc` означає, що буде використовуватися шаблон `Toc` для рендерингу, тобто для відображення одного шаблону `Markdown`.

`TOC` — це скорочення від `Table of Contents`. Коли цей шаблон рендериться, він відображає контент файлу `Markdown` у бічній панелі.

`url:` вказує на шлях до файлу `Markdown` ( `/` відповідає кореневому каталогу `/README.md`, ім'я файлу повинно починатися з великої літери та закінчуватися малою).

### `use: Md`, шаблон одного файлу без контуру

Шаблони `Md` та `Toc` ідентичні та використовуються для рендерингу одного файлу `Markdown`. Однак шаблон `Md` не відображає контент у бічній панелі.

Ви можете змінити `use: Toc` на `use: Md` у вищенаведеній конфігурації, перезапустити `i18n.site` у каталозі `md`, а потім відвідати URL для попереднього перегляду, щоб спостерігати за змінами на головній сторінці.

### `use: Blog`, шаблон для блогу

Шаблон блогу відображає список статей (заголовки та анотації) в порядку часу публікації.

[→ Натисніть тут для детальної конфігурації](/i18n.site/conf/blog)

### `use: Doc`, — багатофайловий шаблон для документів

У конфігураційному файлі:

```
  - i18n: doc
    menu: NB demo1,demo2
    use: Doc
```

Це вказує на використання `Doc` для рендерингу шаблону.

Шаблон `Doc` підтримує інтеграцію кількох файлів `Markdown` для створення єдиного або кількох документальних структур.

#### Кілька проектів і кілька файлів

Налаштування в `.i18n/conf.yml` для `i18n:doc` є режимом рендерингу кількох файлів для багатьох проектів.

Тут `menu: NB demo1,demo2` означає, що буде використовуватися шаблон `NB` для рендерингу спадного меню.

<img src="//p.3ti.site/1721275191.avif" width="320px">

`NB` — це скорочення від `Name Brief`, що означає, що спадне меню може відображати назву та слоган проекту.

`NB` супроводжується параметром `demo1,demo2`.

Зверніть увагу: ** між `demo1,demo2` не повинно бути пробілів перед і після коми `,`**.

Для наведених вище параметрів відповідний файл індексу каталогу:

* `en/demo1/TOC`
* `en/demo2/TOC`

#### Один проект і кілька файлів

Якщо у вас лише один проект, його можна налаштувати наступним чином.

```
  - i18n: xxx
    use: Doc
```

##### Якщо URL-Адреса Порожня, За Умовчанням Використовується Значення i18n

Якщо не вказано `url`, за замовчуванням `url` має значення `i18n`. Це правило також діє для інших шаблонів.

Зазначений вище спосіб запису еквівалентний `url: xxx`, а відповідний файл — `en/xxx/TOC`.

#### Покажчик Змісту Змісту

`i18n.site` виконує плагін `js` `.i18n/hook/after.tran/TOC.js` у демонстраційному сховищі для читання файлу індексу `TOC` каталогу, що відповідає конфігурації шаблону `doc`, і створення структури `json` для каталогу.

Якщо ви використовуєте шаблон `doc`, вам обов'язково потрібно мати цей плагін.

Якщо ви ініціалізуєте проект `i18n.site` з порожньої папки, не забудьте скопіювати демонстраційний проект `.i18n` у ваш каталог.

Шаблон `Doc` буде рендерити структуру змісту на основі згенерованого `json`.

##### Детальний опис вмісту

`en/blog/TOC` виглядає так:

```
README.md

news/README.md
  news/begin.md
```

##### Використовуйте відступи для позначення рівнів

Перший рядок `README.md` у `en/blog/TOC` відповідає `i18n.site` на малюнку нижче, тобто назві проекту.

Наступні два рядки, як показано на знімку екрана нижче.

<img src="https://p.3ti.site/1721097381.avif" style="width:320px">

`news/README.md` відповідає `News`
`news/begin.md` відповідає `Our Product is Online !`

Файли `TOC` використовують відступи для позначення ієрархічних рівнів структури, підтримують багаторівневі відступи та рядкові коментарі, що починаються з `#`.

##### Батьківський рівень записує лише заголовок, не вміст

У разі багаторівневих відступів на батьківському рівні записується лише заголовок, не вміст, щоб уникнути збоїв у форматуванні.

##### Проект README.md

У файлі `README.md` проекту, наприклад `en/demo2/README.md`, можна записати вміст.

Зверніть увагу, що вміст цього файлу не відображає структуру змісту, тому радимо обмежити його довжину та написати короткий вступ.

###### Слоган проекту

Як ви бачите, `Deme Two` має свій слоган проекту під спадним меню та назвою проекту: `Your Project slogan`.

![](https://p.3ti.site/1721276842.avif)

Це відповідає першому рядку `en/demo2/README.md`:

```
# Demo Two : Your Project slogan
```

Вміст після першої двокрапки `:` у заголовку першого рівня `README.md` буде розглядатися як слоган проекту.

Користувачі з Китаю, Японії та Кореї, зверніть увагу, що ви повинні використовувати половинну двокрапку `:` замість повної.

##### Як Масово Перемістити TOC?

Файли `TOC` повинні бути розміщені в каталозі вихідної мови.

Наприклад, якщо вихідною мовою є китайська, то `TOC` вище означає `zh/blog/TOC`.

Якщо вихідну мову змінено, вам потрібно масово перемістити `TOC` файли певної мови в проекті на іншу мову.

Ви можете скористатися такими командами:

```
rsync -av --remove-source-files --include='*/' \
--include='TOC' --exclude='*' en/ zh/
```

Будь ласка, змініть `en/` та `zh/` у наведеній вище команді на код вашої мови.

### Автоматичне завантаження за відсутності конфігураційного шляху

Для певного шляху, до якого здійснюється доступ, якщо префікс шляху не налаштовано в `nav:`, файл `Markdown`, що відповідає цьому шляху, буде завантажено за замовчуванням і відтворено за допомогою шаблону `Md`.

Наприклад, якщо здійснюється доступ до `/test`, і префікс цього шляху не налаштовано в `nav:`, а поточна мова перегляду — англійська (код `en`), то буде завантажено за замовчуванням `/en/test.md` і відтворено за допомогою шаблону `Md`.

Якщо файл `/en/test.md` не існує, буде відображено стандартну сторінку `404`.

<img src="//p.3ti.site/1721184299.avif" style="width:360px">