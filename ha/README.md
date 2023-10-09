<h1 style="justify-content:space-between">I18N.SITE · Harshe mara iyaka<img src="//i-01.eu.org/i18n/logo.svg" style="width:42px;margin-top:-1px"></h1>

I18N.SITE, janareta a tsaye na harshe da yawa, na iya fassara Markdown ta atomatik zuwa [fiye da harsuna ɗari daban-daban](https://github.com/i18n-site/node/blob/main/lang/src/index.js) .

<img src="//i-01.eu.org/i18n/lang.webp" alt="" />

Wasu mutane na iya so su yi tambaya, yanzu da masu bincike sun gina ayyukan fassarar, shin ba lallai ba ne a mayar da gidan yanar gizon zuwa ƙasashen duniya?

Ina so in faɗi cewa **ta hanyar ƙaddamar da duk rukunin yanar gizon kawai za mu iya tallafawa binciken cikakken rubutu na cikin harsuna da yawa da haɓaka injin bincike** .

## Koyarwa

## Gabatarwar Aiki

### Ci Gaba Da Markdown Format

### Gyara Fassara

Bayan gyara fassarar, kuna buƙatar sake kunna `./i18n.sh` don sabunta cache.

### Bayanan Fassara

Bayanin fassarar yana buƙatar nuna harshen bayan \```, kamar ` ```rust` .

A halin yanzu yana goyan bayan fassarar sharhi don tsatsa, c, cpp, java, js, kofi, python, da bash.

Shirya [tran_md/src/comment.coffee](https://github.com/i18n-site/node/blob/main/tran_md/src/comment.coffee) don ƙara tallafin fassara don sharhi a cikin ƙarin harsuna.

### Sanya Wakili

Saita masu canjin yanayi masu zuwa yana ba da damar Google Translate API kiran kira ta hanyar wakili.

```bash
export https_proxy=http://127.0.0.1:7890
```

### Maɓalli Mai Canzawa

```
test: 测试变量<br 0>嵌入
```

### Kashe Cache

```bash
rm -rf .i18n/.cache
```
