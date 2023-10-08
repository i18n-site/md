# I18N.SITE · Документи Без Граници<img Src="//ok0.pw/5l" Style="float:right;width:42px;margin-Top:6px">

I18N.SITE, генератор на статичен сайт, който поддържа автоматичен превод на [133 различни езика](https://github.com/i18n-site/node/blob/main/lang/src/index.js) .

<img src="https://i-01.eu.org/2023/09/O0Tee_m.webp" alt="" />

Някои хора може би искат да попитат, след като браузърите имат вградени функции за превод, ненужно ли е да се интернационализира уебсайтът?

Искам да кажа, че **само чрез интернационализиране на целия сайт можем да поддържаме многоезично пълнотекстово търсене в сайта и оптимизация за търсачки** .

## Урок

## Функция Въведение

### Запазване На Markdown Format

### Промяна На Превода

След като промените превода, трябва да стартирате отново `./i18n.sh` , за да актуализирате кеша.

### Бележки За Превода

Коментарите за превод трябва да посочват езика след „``, като например ` ```rust` .

В момента поддържа превод на коментари за rust, c, cpp, java, js, coffee, python и bash.

Редактирайте [tran_md/src/comment.coffee](https://github.com/i18n-site/node/blob/main/tran_md/src/comment.coffee) , за да добавите поддръжка за превод за коментари на повече езици.

### Конфигуриране На Прокси

Задаването на следните променливи на средата позволява извикванията на API на Google Translate да преминават през проксито.

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

### Вграждане На Променливи

```
test: 测试变量<br 0>嵌入
```

### Изпразване На Кеша

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
