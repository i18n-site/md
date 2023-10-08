# I18N.САЈТ · Јазик Без Граници<img Src="//ok0.pw/5l" Style="float:right;width:42px;margin-Top:6px">

I18N.SITE, статичен генератор на сајтови кој поддржува автоматско преведување на [100 различни јазици](https://github.com/i18n-site/node/blob/main/lang/src/index.js) .

<img src="https://i-01.eu.org/2023/09/O0Tee_m.webp" alt="" />

Некои луѓе можеби ќе сакаат да прашаат, сега кога прелистувачите имаат вградени функции за превод, дали е непотребно да се интернационализира веб-локацијата?

Сакам да кажам дека **само со интернационализирање на целата локација можеме да поддржиме повеќејазично пребарување на целосен текст во локацијата и оптимизација на пребарувачите** .

## Упатство

## Вовед Во Функција

### Задржете Го Форматот За Обележување

### Измени Го Преводот

Откако ќе го измените преводот, треба повторно да извршите `./i18n.sh` за да го ажурирате кешот.

### Белешки За Превод

Коментарите на преводот треба да го наведат јазикот по \```, како што е ` ```rust` .

Во моментов поддржува превод на коментари за rust, c, cpp, java, js, кафе, python и bash.

Уредете [tran_md/src/comment.coffee](https://github.com/i18n-site/node/blob/main/tran_md/src/comment.coffee) за да додадете поддршка за превод за коментари на повеќе јазици.

### Конфигурирај Прокси

Поставувањето на следните променливи на животната средина им овозможува на повиците на Google Translate API да минуваат преку прокси.

```bash
```bash
```bash
```bash
```bash
```bash
```bash
```bash
```bash
```bash
```bash
```bash
```bash
```bash
```bash
```bash
```bash
```bash
```bash
```bash
```bash
```bash
```bash
```bash
```bash
```bash
```bash
```bash
```bash
```bash
```bash
```bash
```bash
```bash
export https_proxy=http://127.0.0.1:7890
```

### Вградување На Променлива

```
test: 测试变量<br 0>嵌入
```

### Испразнете Го Кешот

```bash
```bash
```bash
```bash
```bash
```bash
```bash
```bash
```bash
```bash
```bash
```bash
```bash
```bash
```bash
```bash
```bash
```bash
```bash
```bash
```bash
```bash
```bash
```bash
```bash
```bash
```bash
```bash
```bash
```bash
```bash
```bash
```bash
```bash
rm -rf .i18n/.cache
```
