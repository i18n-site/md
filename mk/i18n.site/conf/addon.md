# Приклучок

Приклучоците може да се конфигурираат во `.i18n/conf.yml` , како што се:

```yml
addon:
  - i18n.addon/toc
```

## Официјален Приклучок

* `i18n.addon/toc` :
  Генерирајте индекс на директориум од `json` врз основа на `TOC` , стандардно овозможен

* `i18n.addon/mouse` :

## Конвенција За Името На Датотеката

Приклучоците се сите `npm` пакети.

Пакетот што одговара на `i18n.addon/toc` погоре е [https://www.npmjs.com/package/@i18n.addon/toc](https://www.npmjs.com/package/@i18n.addon/toc)

Приклучокот стандардно ја користи најновата верзија и проверува за ажурирања неделно.

Ако сакате да ја поправите верзијата, можете да напишете `i18n.addon/toc@0.1.3` .

Командната линија за превод `i18n.site` ќе ја инсталира конвенциската датотека на приклучокот-пакет и потоа ќе ја изврши.

Договорените имиња на датотеки се како што следува

### htmIndex.js

`htmIndex.js` ќе се инјектира до крајот на `.i18n/htm/index.js` .

Каде што `__CONF__` ќе се замени со името на тековната конфигурација (како `dev` или `ol` ).

### afterTran.js

Ќе се повика по завршувањето на преводот, а параметрите што се пренесуваат се следни.

* `lang_li` Список на : , првиот јазик е изворниот јазик
* `changed` : датотеки
* `root` :

Повратната вредност е речник, како на пр

```json
{
  file:{
    //  path: txt, for example :
    // "_.json": "[]"
  }
}
```

`file` е списокот со излезни датотеки, `path` е патеката на датотеката и `txt` е содржината на датотеката.

## Вградени Функции

Вграденото време на работа `js` се заснова на секундарниот развој на [boa](https://github.com/boa-dev/boa) а вградените функции се како што следува :

* `wPath(path, txt)` : во датотека
* `rTxt(path)` :
* `rBin(path)` Читај : датотека
* `rDir(dirpath)` : :

## Водич За Развој

Развојот на приклучоци може да биде референца [https://github.com/i18n-site/addon](https://github.com/i18n-site/addon)