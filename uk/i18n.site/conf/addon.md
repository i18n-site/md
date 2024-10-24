# Плагін

Плагіни можна налаштувати в `.i18n/conf.yml`, наприклад:

```yml
addon:
  - i18n.addon/toc
```

## Офіційні плагіни

* `i18n.addon/toc`: Індекс таблиці вмісту
  Генерація індексу каталогу у форматі `json` на основі `TOC`, типово увімкнено

* `i18n.addon/mouse`: Ефект миші

## Конвенція найменування файлів

Усі плагіни є пакетами `npm`.

Пакет, що відповідає `i18n.addon/toc`, знаходиться за адресою [https://www.npmjs.com/package/@i18n.addon/toc](https://www.npmjs.com/package/@i18n.addon/toc).

Плагіни використовують типову останню версію та перевіряють оновлення щотижня.

Якщо ви хочете вказати фіксовану версію, напишіть `i18n.addon/toc@0.1.3`.

Командний рядок перекладу `i18n.site` встановить угоджені файли пакета плагіна та виконає їх.

Угоджені імена файлів такі:

### htmIndex.js

`htmIndex.js` буде інтегрований у кінець файлу `.i18n/htm/index.js`.

Тут `__CONF__` буде замінено на ім'я поточної конфігурації (наприклад, `dev` або `ol`).

### afterTran.js

Це буде викликано після завершення перекладу з такими параметрами.

* `lang_li`: Список мов, де перша мова є джерелом
* `changed`: Список змінених файлів
* `root`: Коренева директорія проекту

Повертається словник, наприклад

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

Вбудоване середовище виконання `js` базується на [boa](https://github.com/boa-dev/boa) і має такі вбудовані функції:

* `wPath(path, txt)`: Записати текст у файл
* `rTxt(path)`: Прочитати текстовий файл
* `rBin(path)`: Прочитати двійковий файл
* `rDir(dirpath)`: Прочитати директорію, повертає масив: список директорій, список файлів

## Посібник з розробки

Розробка плагінів може бути знайдена за посиланням [https://github.com/i18n-site/addon](https://github.com/i18n-site/addon)