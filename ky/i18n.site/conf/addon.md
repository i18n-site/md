# Плагин

Плагиндерди `.i18n/conf.yml` конфигурациялоого болот, мисалы:

```yml
addon:
  - i18n.addon/toc
```

## Расмий Плагин

* `i18n.addon/toc` :
  Демейки боюнча иштетилген `TOC` негизинде `json` каталогунун индексин жаратыңыз

* `i18n.addon/mouse` Чычкан :

## Файлдын Аталышы

Плагиндердин бардыгы `npm` пакет.

Жогорудагы `i18n.addon/toc` туура келген пакет [https://www.npmjs.com/package/@i18n.addon/toc](https://www.npmjs.com/package/@i18n.addon/toc)

Плагин демейки боюнча эң акыркы версиясын колдонот жана жаңыртууларды жума сайын текшерип турат.

Эгерде сиз версияны оңдоону кааласаңыз, анда `i18n.addon/toc@0.1.3` жазсаңыз болот.

Translation буйрук сабы `i18n.site` плагин пакетинин конвенциялык файлын орнотуп, андан кийин аны аткарат.

Макулдашылган файл аттары төмөнкүдөй

### htmIndex.js

`htmIndex.js` `.i18n/htm/index.js` дын аягына чейин сайылат.

Бул жерде `__CONF__` учурдагы конфигурациянын аталышы менен алмаштырылат (мисалы, `dev` же `ol` ).

### afterTran.js

Ал котормо аяктагандан кийин чакырылат жана берилген параметрлер төмөнкүдөй.

* `lang_li` : тизмеси, биринчи тил булак тил
* `changed` : файлдар
* `root` :

Кайтаруу мааниси сөздүк болуп саналат, мисалы

```json
{
  file:{
    //  path: txt, for example :
    // "_.json": "[]"
  }
}
```

`file` - чыгуучу файлдардын тизмеси, `path` - файлдын жолу жана `txt` - файлдын мазмуну.

## Орнотулган Функциялар

Камтылган `js` иштөө убактысы нын [boa](https://github.com/boa-dev/boa) иштеп чыгуусуна негизделген жана орнотулган функциялар төмөнкүдөй :

* `wPath(path, txt)` : жазыңыз
* `rTxt(path)` : Текст файлын окуу
* `rBin(path)` : бинардык файлды окуу
* `rDir(dirpath)` : Каталогду окуңуз, кайтаруу мааниси массив : тизмеси, файл тизмеси

## Өнүгүү Колдонмосу

Плагинди иштеп чыгуу шилтеме боло алат [https://github.com/i18n-site/addon](https://github.com/i18n-site/addon)