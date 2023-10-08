# I18N.SITE · Gjuhë Pa Kufij<img Src="//ok0.pw/5l" Style="float:right;width:42px;margin-Top:6px">

I18N.SITE, një gjenerues i faqeve statike me shumë gjuhë, mund të përkthejë automatikisht Markdown në [më shumë se njëqind gjuhë të ndryshme](https://github.com/i18n-site/node/blob/main/lang/src/index.js) .

<img src="http://s-cd-3653-i18n-img.oss.dogecdn.com/i18n.lang.webp" alt="" />

Disa njerëz mund të duan të pyesin, tani që shfletuesit kanë funksione të integruara përkthimi, a është e panevojshme ndërkombëtarizimi i faqes së internetit?

Dua të them se **vetëm duke ndërkombëtarizuar të gjithë sajtin mund të mbështesim kërkimin me tekst të plotë në faqe shumëgjuhëshe dhe optimizimin e motorëve të kërkimit** .

## Tutorial

## Funksioni Hyrje

### Mbani Formatin Markdown

### Modifiko Përkthimin

Pas modifikimit të përkthimit, duhet të ridrejtoni `./i18n.sh` për të përditësuar cache-in.

### Shënime Përkthimi

Komentet e përkthimit duhet të tregojnë gjuhën pas \```, si p.sh. ` ```rust` .

Aktualisht mbështet përkthimin e komenteve për rust, c, cpp, java, js, kafe, python dhe bash.

Ndrysho [tran_md/src/comment.coffee](https://github.com/i18n-site/node/blob/main/tran_md/src/comment.coffee) për të shtuar mbështetjen e përkthimit për komentet në më shumë gjuhë.

### Konfiguro Proxy

Vendosja e variablave të mjedisit të mëposhtëm lejon që thirrjet API të Google Translate të kalojnë përmes përfaqësuesit.

```bash
export https_proxy=http://127.0.0.1:7890
```

### Embedding Variabël

```
test: 测试变量<br 0>嵌入
```

### Zbrazni Cache

```bash
rm -rf .i18n/.cache
```
