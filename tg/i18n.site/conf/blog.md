# Шаблони Блог

`i18n/conf.yml` аз `use: Blog` маънои истифодаи қолаби блогро барои намоиш додан.

Файли `markdown` и пости блог бояд иттилооти метаро танзим кунад.

Маълумоти мета бояд дар ибтидои файл бо `---` сар шуда, бо `---` тамом шавад. Формати иттилооти конфигуратсия дар мобайн `YAML` аст.

Конфигуратсияи файли намоишӣ чунин аст:

```yml
---

brief: |
  this is a demo brief
  you can write multiline

---

# title

… …
```

`brief` хулосаи мундариҷаро нишон медиҳад, ки дар саҳифаи шохиси блог намоиш дода мешавад.

Бо ёрии `YMAL` ' | `Синтаксис, шумо метавонед ҷамъбасти чанд сатрро нависед.

Конфигуратсияи дарахти директория дар тарафи рости блог низ `TOC` файл аст (ниг. ба боби қаблӣ танҳо мақолаҳои дар `TOC` номбаршуда дар индекси саҳифаи асосии блог пайдо мешаванд).

Мақолаҳо, ки иттилооти мета надоранд, дар саҳифаи асосии блог пайдо намешаванд, аммо метавонанд дар дарахти директория дар тарафи рост пайдо шаванд.

## Маълумот Дар Бораи Муаллиф

Маълумоти муаллифро дар мета-маълумоти мақола навиштан мумкин аст, ба монанди:

```yml
author: marlowe
```

Сипас `author.yml` дар феҳристи забони сарчашма таҳрир кунед ва маълумоти муаллифро илова кунед, ба монанди :

```yml
marlowe:
  name: Eleanor Marlowe
  title: Senior Translator
  url: https://github.com/i18n-site
```

`name` , `url` ва `title` ҳама ихтиёрӣ мебошанд. Агар `name` таъин нашуда бошад, номи калид (дар ин ҷо `marlowe` ) ҳамчун `name` истифода мешавад.

Ба лоиҳаи намоишии [`begin.md`](https://github.com/i18n-site/demo.i18n.site/blob/main/en/blog/news/begin.md?plain=1) ва [`author.yml`](https://github.com/i18n-site/demo.i18n.site/blob/main/en/author.yml) нигаред

## Мақолаи Басташуда

Агар ба шумо лозим ояд, ки мақоларо дар боло ҷойгир кунед, лутфан `i18n.site` иҷро кунед ва `xxx.yml` файли аз `.i18n/data/blog` поёнро таҳрир кунед ва тамғаи вақтро ба рақами манфӣ иваз кунед (рақамҳои манфии сершумор аз калон ба хурдтарин мураттаб карда мешаванд).