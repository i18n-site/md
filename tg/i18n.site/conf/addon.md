# Плагин

Плагинҳоро дар `.i18n/conf.yml` танзим кардан мумкин аст, масалан:

```yml
addon:
  - i18n.addon/toc
```

## Плагини Расмӣ

* `i18n.addon/toc` :
  Индекси феҳристи `json` -ро дар асоси `TOC` тавлид кунед, ки бо нобаёнӣ фаъол аст

* `i18n.addon/mouse` : муш

## Конвенсияи Номи Файл

Плагинҳо ҳама `npm` баста мебошанд.

Бастаи ба `i18n.addon/toc` мувофиқ аст [https://www.npmjs.com/package/@i18n.addon/toc](https://www.npmjs.com/package/@i18n.addon/toc)

Васлкунак версияи охиринро бо нобаёнӣ истифода мебарад ва ҳар ҳафта навсозиро тафтиш мекунад.

Агар шумо хоҳед, ки версияро ислоҳ кунед, шумо метавонед `i18n.addon/toc@0.1.3` нависед.

Сатри фармони тарҷумаи `i18n.site` файли конвенсияи бастаи плагинро насб мекунад ва сипас онро иҷро мекунад.

Номҳои файлҳои мувофиқашуда чунинанд

### htmIndex.js

`htmIndex.js` то охири `.i18n/htm/index.js` сӯзандору карда мешавад.

Дар куҷо `__CONF__` бо номи конфигуратсияи ҷорӣ иваз карда мешавад (ба монанди `dev` ё `ol` ).

### afterTran.js

Он пас аз анҷоми тарҷума даъват карда мешавад ва параметрҳои интиқолшуда чунинанд.

* `lang_li` Рӯйхати : , забони аввал забони сарчашма аст
* `changed` Файлҳои :
* `root` :

Арзиши бозгашти луғат аст, ба монанди

```json
{
  file:{
    //  path: txt, for example :
    // "_.json": "[]"
  }
}
```

`file` рӯйхати файлҳои баромад, `path` роҳи файл ва `txt` мундариҷаи файл аст.

## Функсияҳои Дарунсохт

Вақти дарунсохташудаи `js` : рушди дуюмдараҷаи [boa](https://github.com/boa-dev/boa)

* `wPath(path, txt)` Ба файл :
* `rTxt(path)` : Файли матниро хонед
* `rBin(path)` Файли : хонед
* `rDir(dirpath)` : Директорияро хонед, арзиши баргардонидани як қатор : , рӯйхати файлҳо

## Дастури Рушд

Таҳияи плагин метавонад истинод бошад [https://github.com/i18n-site/addon](https://github.com/i18n-site/addon)