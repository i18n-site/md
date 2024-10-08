# Плагин

Плагины можно настроить в файле `.i18n/conf.yml`, например:

```yml
addon:
  - i18n.addon/toc
```

## Официальные плагины

* `i18n.addon/toc` : Индекс содержимого
  На основе `TOC` генерируется индекс содержимого в формате `json`, включен по умолчанию

* `i18n.addon/mouse` : Эффекты мыши

## Соглашение о naming файлов

Все плагины являются пакетами `npm`.

Пакет, соответствующий `i18n.addon/toc`, находится по адресу [https://www.npmjs.com/package/@i18n.addon/toc](https://www.npmjs.com/package/@i18n.addon/toc).

Плагины по умолчанию используют самую свежую версию и每周 проверяют обновления.

Если вы хотите зафиксировать версию, можно указать `i18n.addon/toc@0.1.3`.

Командлет перевода `i18n.site` устанавливает файл соглашения для пакета плагина и затем его выполняет.

Имена файлов по соглашению следующие:

### htmIndex.js

`htmIndex.js` будет добавлен в конец файла `.i18n/htm/index.js`.

При этом `__CONF__` будет заменено на имя текущей конфигурации (например, `dev` или `ol`).

### afterTran.js

Будет вызван после завершения перевода, передаваемые параметры будут следующими.

* `lang_li` : Список языков, первый язык — это исходный
* `changed` : Список измененных файлов
* `root` : Корневая директория проекта

Результатом является словарь, например

```json
{
  file:{
    //  path: txt, for example :
    // "_.json": "[]"
  }
}
```

`file` — список выходных файлов, `path` — путь к файлу, `txt` — содержимое файла.

## Встроенные функции

Встраиваемая среда выполнения `js` основана на二次ичной разработке [boa](https://github.com/boa-dev/boa), и вот内置 функции:

* `wPath(path, txt)` : Записать текст в файл
* `rTxt(path)` : Прочитать текст из файла
* `rBin(path)` : Прочитать двоичный файл
* `rDir(dirpath)` : Прочитать директорию, возвращаемый результат — массив: список директорий, список файлов

## Руководство по разработке

Разработка плагинов может опираться на [https://github.com/i18n-site/addon](https://github.com/i18n-site/addon)