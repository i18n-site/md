# Плъгин

Добавките могат да бъдат конфигурирани в `.i18n/conf.yml` , като например:

```yml
addon:
  - i18n.addon/toc
```

## Официален Плъгин

* `i18n.addon/toc` : Индекс на директорията
  Генериране на индекс на директория от `json` въз основа на `TOC` , активиран по подразбиране

* `i18n.addon/mouse` : Ефекти на мишката

## Конвенция За Имена На Файлове

Плъгините са всички `npm` пакета.

Пакетът, съответстващ на `i18n.addon/toc` по-горе, е [https://www.npmjs.com/package/@i18n.addon/toc](https://www.npmjs.com/package/@i18n.addon/toc)

Плъгинът използва най-новата версия по подразбиране и проверява за актуализации всяка седмица.

Ако искате да поправите версията, можете да напишете `i18n.addon/toc@0.1.3` .

Командният ред за превод `i18n.site` ще инсталира конвенционалния файл на пакета с добавки и след това ще го изпълни.

Договорените имена на файлове са както следва

### htmIndex.js

`htmIndex.js` ще бъде инжектиран до края на `.i18n/htm/index.js` .

Където `__CONF__` ще бъде заменено с името на текущата конфигурация (като `dev` или `ol` ).

### afterTran.js

Той ще бъде извикан след завършване на превода и предадените параметри са както следва.

* `lang_li` : Списък с езици, първият език е изходният
* `changed` : Модифицирани файлове
* `root` : Основната директория на проекта

Върнатата стойност е речник, като напр

```json
{
  file:{
    //  path: txt, for example :
    // "_.json": "[]"
  }
}
```

`file` е списъкът с изходни файлове, `path` е пътят на файла и `txt` е съдържанието на файла.

## Вградени Функции

Вграденото време за изпълнение `js` е базирано на вторична разработка на [boa](https://github.com/boa-dev/boa) , а вградените функции са както следва :

* `wPath(path, txt)` : Запиши във файл
* `rTxt(path)` : Прочетете текстовия файл
* `rBin(path)` : Прочетете двоичен файл
* `rDir(dirpath)` : Прочетете директорията, върнатата стойност е масив : list, file list

## Ръководство За Развитие

Разработката на плъгини може да бъде справка [https://github.com/i18n-site/addon](https://github.com/i18n-site/addon)