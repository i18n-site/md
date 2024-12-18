# Плагин

Плагины можно настроить в `.i18n/conf.yml` , например:

```yml
addon:
  - i18n.addon/toc
```

## Официальный Плагин

* `i18n.addon/toc` : Индекс каталога
  Создать индекс каталога `json` на основе `TOC` , включен по умолчанию.

* `i18n.addon/mouse` : Эффекты мыши

## Соглашение Об Именах Файлов

Плагины все `npm` пакетов.

Пакет, соответствующий `i18n.addon/toc` выше, [https://www.npmjs.com/package/@i18n.addon/toc](https://www.npmjs.com/package/@i18n.addon/toc)

Плагин по умолчанию использует последнюю версию и еженедельно проверяет наличие обновлений.

Если вы хотите исправить версию, вы можете написать `i18n.addon/toc@0.1.3` .

Командная строка перевода `i18n.site` установит файл соглашения пакета подключаемого модуля, а затем выполнит его.

Согласованные имена файлов следующие:

### htmIndex.js

`htmIndex.js` будет введен в конец `.i18n/htm/index.js` .

Где `__CONF__` будет заменен именем текущей конфигурации (например, `dev` или `ol` ).

### afterTran.js

Он будет вызван после завершения трансляции, и переданные параметры будут следующими.

* `lang_li` : Список языков, первый язык является исходным.
* `changed` :
* `root` : Корневой каталог проекта

Возвращаемое значение представляет собой словарь, например

```json
{
  file:{
    //  path: txt, for example :
    // "_.json": "[]"
  }
}
```

`file` — список выходных файлов, `path` — путь к файлу, `txt` — содержимое файла.

## Встроенные Функции

Встроенная среда выполнения `js` основана на вторичной разработке [boa](https://github.com/boa-dev/boa) , а встроенные функции следующие: :

* `wPath(path, txt)` : Записать в файл
* `rTxt(path)` : Прочитать текстовый файл
* `rBin(path)` : Чтение двоичного файла
* `rDir(dirpath)` : Чтение каталога, возвращаемое значение — массив : список каталогов, список файлов

## Руководство По Разработке

Разработка плагина может быть ссылкой [https://github.com/i18n-site/addon](https://github.com/i18n-site/addon)