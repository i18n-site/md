# Плагін

Плагіни можна налаштувати в `.i18n/conf.yml`, наприклад:

```yml
addon:
  - i18n.addon/toc
```

## Офіційні плагіни

* `i18n.addon/toc` : Індекс змісту
  Згідно з `TOC` генерувати індекс змісту у форматі `json`, увімкнено за замовчуванням

* `i18n.addon/mouse`: Ефекти миші

## Конвенція найменувань файлів

Усі плагіни є пакетами `npm`.

Пакет, що відповідає `i18n.addon/toc` вище, це [https://www.npmjs.com/package/@i18n.addon/toc](https://www.npmjs.com/package/@i18n.addon/toc).

Плагіни використовують останню версію за замовчуванням і перевіряють оновлення щотижня.

Якщо ви хочете зафіксувати версію, можна записати `i18n.addon/toc@0.1.3`.

Командний рядок для перекладу `i18n.site` встановить файл угоди для пакета плагінів, а потім його виконає.

Назви файлів за угодою такі:

### htmIndex.js

`htmIndex.js` буде вставлено в кінець `.i18n/htm/index.js`.

При цьому `__CONF__` буде замінено на назву поточної конфігурації (наприклад, `dev` або `ol`).

### afterTran.js

Це буде викликано після завершення перекладу, а передані параметри будуть такими:

* `lang_li`: Список мов, де перша мова є джерелом
* `changed`: Змінені файли
* `root`: Кореневий каталог проекту

Повертається словник, наприклад:

```json
{
  file:{
    //  path: txt, for example :
    // "_.json": "[]"
  }
}
```

`file` — список вихідних файлів, `path` — шлях до файлу, `txt` — вміст файлу.

## Вбудовані функції

Вбудований `js` рушій розроблений на основі вторинної розробки [boa](https://github.com/boa-dev/boa),内置函数如下:

* `wPath(path, txt)`: Записати текст у файл
* `rTxt(path)`: Прочитати текстовий файл
* `rBin(path)`: Прочитати двійковий файл
* `rDir(dirpath)`: Прочитати каталог, повертає масив: список каталогів, список файлів

## Довідник з розробки

Розробка плагінів може бути знайдена за посиланням [https://github.com/i18n-site/addon](https://github.com/i18n-site/addon)