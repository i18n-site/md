# Плагін

Плагіни можна налаштувати в `.i18n/conf.yml` , наприклад:

```yml
addon:
  - i18n.addon/toc
```

## Офіційний Плагін

* `i18n.addon/toc` : Індекс каталогу
  Генерувати індекс каталогу `json` на основі `TOC` , увімкнено за замовчуванням

* `i18n.addon/mouse` : миші

## Правила Назв Файлів

Усі плагіни складаються з `npm` пакетів.

Пакет, що відповідає `i18n.addon/toc` вище, це [https://www.npmjs.com/package/@i18n.addon/toc](https://www.npmjs.com/package/@i18n.addon/toc)

Плагін використовує останню версію за замовчуванням і щотижня перевіряє наявність оновлень.

Якщо ви хочете виправити версію, ви можете написати `i18n.addon/toc@0.1.3` .

Командний рядок перекладу `i18n.site` встановить файл угоди пакета плагіна, а потім виконає його.

Узгоджені назви файлів такі

### htmIndex.js

`htmIndex.js` буде введено до кінця `.i18n/htm/index.js` .

Де `__CONF__` буде замінено назвою поточної конфігурації (наприклад, `dev` або `ol` ).

### afterTran.js

Він буде викликаний після завершення перекладу, і передані параметри є такими.

* `lang_li` : Список мов, перша мова є мовою оригіналу
* `changed` : файли
* `root` Кореневий : проекту

Поверненим значенням є словник, наприклад

```json
{
  file:{
    //  path: txt, for example :
    // "_.json": "[]"
  }
}
```

`file` — список вихідних файлів, `path` — шлях до файлу, а `txt` — вміст файлу.

## Вбудовані Функції

Вбудоване середовище виконання `js` : на вторинній розробці [boa](https://github.com/boa-dev/boa)

* `wPath(path, txt)` : Записати в файл
* `rTxt(path)` : Прочитати текстовий файл
* `rBin(path)` : Прочитати двійковий файл
* `rDir(dirpath)` : Прочитайте каталог, повертається значення масиву : list, file list

## Посібник З Розробки

Розробка плагінів може бути посиланням [https://github.com/i18n-site/addon](https://github.com/i18n-site/addon)