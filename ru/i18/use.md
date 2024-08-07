# Установите И Используйте

## windows Сначала Устанавливает git bash

windows Система, пожалуйста [, нажмите здесь, чтобы сначала загрузить и установить `git bash`](https://git-scm.com/download/win)

Запустите последующие операции в `git bash`

## Установить

```sh
bash <(curl -sS https://i.i18n.site) i18
```

### Настроить Токен Перевода

Посетите [i18n.site/token](//i18n.site/token) Нажмите, чтобы скопировать токен

<img src="https://p.3ti.site/1719911689.avif" style="max-width:400px">

Создайте `~/.config/i18n.site.yml` вставьте в него скопированный контент, содержимое такое:

```
token: YOUR_API_TOKEN
```

Кроме того, вам необходимо [i18n.site/payBill](//i18n.site/payBill) кредитную карту для оплаты (пополнение счета не требуется, веб-сайт автоматически списывает комиссию в зависимости от использования, [цены см. на главной странице](/#price) ).

## Использовать

### Демо-Проект

Пожалуйста, обратитесь к демонстрационному проекту [github.com/i18n-site/demo.i18](//github.com/i18n-site/demo.i18) чтобы узнать конфигурацию перевода `i18`

Пользователи в Китае могут клонировать [atomgit.com/i18n/demo.i18](//atomgit.com/i18n/demo.i18)

После клонирования войдите в каталог и запустите `i18` , чтобы завершить перевод.

### Структура Каталогов

Структура каталогов хранилища шаблонов следующая:

```
┌── .i18n
│  └── conf.yml
└── en
   ├── _IgnoreDemoFile.md
   ├── i18n.yml
   └── README.md
```

Каталог `en` содержит переведенные демонстрационные файлы, которые являются лишь примером и могут быть удалены.

### Запустить Перевод

Войдите в каталог и запустите `i18` для перевода.

### Добавляем Файлы В Репозиторий

Помимо перевода, программа также сгенерирует следующие файлы, добавьте их в репозиторий.

```
.i18n/hash
.i18n/cache/.gitignore
```

Среди : содержание `.i18n/cache/.gitignore`

```
**/*
!**/.gitignore
```

Это означает игнорировать все файлы в каталоге `.i18n/cache/` (кроме `.i18n/cache/.gitignore` ).

Если ваше программное обеспечение для контроля версий не `git` , игнорируйте его в соответствии с этой конфигурацией.

## Конфигурационный Файл

`.i18n/conf.yml` Это файл конфигурации #инструмента перевода `i18` строки.

Содержание следующее:

```
i18n:
  fromTo:
    en: zh ja ko de fr
    # en:

ignore:
  - _*
```

### Исходный Язык &

В файле конфигурации подчиненные `fromTo`

`en` — исходный язык, `zh ja ko de fr` — целевой язык перевода.

Код языка см [i18n.site/i18/LANG_CODE](https://i18n.site/i18/LANG_CODE) !

Например, если вы хотите перевести китайский на английский, перепишите эту строку `zh: en`

Если вы хотите перевести на все поддерживаемые языки, оставьте поле пустым после `:` например

```
i18n:
  fromTo:
    en:
```

### Игнорировать Файл

По умолчанию все файлы, начинающиеся с `.md` и `.yml` в каталоге исходного языка, будут переведены.

Если вы хотите игнорировать определенные файлы и не переводить их (например, незаконченные черновики), вы можете использовать конфигурацию поля `ignore`

`ignore` Использует синтаксис, аналогичный `.gitignore` [globset](https://docs.rs/globset/latest/globset/#syntax)

Например, в приведенном выше файле конфигурации `_* ` означает, что файлы, начинающиеся с `_` не будут переведены.

## Правила Перевода

### Редакторы Перевода Не Должны Добавлять Или Удалять Строки.

Перевод доступен для редактирования. Измените исходный текст и переведите его снова, внесенные вручную изменения в переводе не будут перезаписаны (если этот абзац исходного текста не был изменен).

Но учтите, что строки перевода и оригинального текста должны соответствовать один в один. То есть не добавляйте и не удаляйте строки при составлении перевода. В противном случае это приведет к путанице в кэше редактирования перевода.

Если что-то пойдет не так, пожалуйста, обратитесь к [FAQ для решения.](/i18/qa#H1)

### `YAML` Переводить

Инструмент командной строки найдет все файлы, заканчивающиеся на `.yml` в каталоге файлов исходного языка и переведет их.

* Обратите внимание, что суффикс имени файла должен быть `.yml` (а не `.yaml` ).

Инструмент переводит только значения словаря в `.yml` , а не ключи словаря.

например `i18n/en/i18n.yml`

```
apiToken: API Token
defaultToken: Default Token
```

будет переведено как `i18n/zh/i18n.yml`

```
apiToken: 接口令牌
defaultToken: 默认令牌
```

Перевод `YAML` также можно изменить вручную (но не добавляйте и не удаляйте ключи или строки в переводе).

На основе `YAML` Translation вы можете легко создавать международные решения для различных языков программирования.

## Расширенное Использование

### Подкаталог Перевода

Пока вы создаете `.i18n/conf.yml` (нет необходимости каждый раз начинать с шаблона демонстрационного проекта), `i18` будет работать нормально.

Инструмент командной строки найдет конфигурацию `.i18n/conf.yml` во всех подкаталогах и преобразует ее.

Проекты, использующие архитектуру [monorepo](//monorepo.tools) могут разбивать языковые файлы на подкаталоги.

<img alt="" src="https://p.3ti.site/1719910016.avif">

### Пользовательский Каталог Установки

Он будет установлен в `/usr/local/bin`

Если у `/usr/local/bin` нет разрешения на запись, он будет установлен в `~/.bin` .

Установите переменные среды `TO` Например, вы можете определить каталог установки :

```sh
TO=/bin sudo bash <(curl -sS https://i.i18n.site) i18
```
