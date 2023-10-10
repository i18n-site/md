<h1 style="justify-content:space-between">3Ti.Site · Think No Borders<img src="//i-01.eu.org/i18n/logo.svg" style="margin-top:-1px;width:42px"></h1>

3Ti.Site, višejezični generator statičkih stranica, može automatski prevesti Markdown na [više od stotinu različitih jezika](https://github.com/i18n-site/node/blob/main/lang/src/index.js) .

<img src="//i-01.eu.org/i18n/lang.webp" alt="" />

Neki ljudi će možda htjeti da pitaju, sada kada pretraživači imaju ugrađene funkcije prevođenja, da li je nepotrebno internacionalizirati web stranicu?

Želim da kažem da **samo internacionalizacijom čitavog sajta možemo podržati višejezičnu pretragu celog teksta na sajtu i optimizaciju pretraživača** .

## Sekvenca

Biblija · Postanak :

> U davna vremena, kada su jezici bili jedan, čovječanstvo je izgradilo kulu koja seže do nebesa, portal u Božju oblast, proglašavajući moć čovječanstva.
>
> Bog je izjavio: "Ljudi se ujedinjuju kao jedno pleme, sa zajedničkim jezikom, a ova kula je samo prolog. Sada oni ostvaruju svoju želju i nikakvo poštovanje neće ostati."
>
> Tako je Bog sišao, raspršivši ljude u različite kutove, koristeći različite jezike.
>
> Od tada je ljudska komunikacija postala izazovna, sporovi beskonačni, i više nije bilo kule koja je dodirivala nebo.

Naučnofantastični roman &quot;Tri tijela&quot; (kineski izgovor: `3Ti` ) fikcionalizira vanzemaljsku civilizaciju koja komunicira putem elektromagnetnih valova, nema jezičke barijere i tehnološki je prosperitetna.

Nadam se da ću stvoriti oruđe koje će omogućiti ljudima na Zemlji da budu kao ljudi sa tri tijela, da komuniciraju bez da budu vezani jezikom i ponovo ujedine cijelo čovječanstvo.

## Tutorial

## Funkcija Uvod

### Zadržite Markdown Format

### Modify Translation

Nakon izmjene prijevoda, morate ponovo pokrenuti `./i18n.sh` da ažurirate keš memoriju.

### Bilješke O Prijevodu

Komentari prijevoda moraju naznačiti jezik nakon \```, kao što je ` ```rust` .

Trenutno podržava prevođenje komentara za rust, c, cpp, java, js, kafu, python i bash.

Uredite [tran_md/src/comment.coffee](https://github.com/i18n-site/node/blob/main/tran_md/src/comment.coffee) da dodate podršku za prevod za komentare na više jezika.

### Konfigurišite Proxy

Postavljanje sljedećih varijabli okruženja omogućava pozivima Google Translate API-ja da prolaze kroz proxy.

```bash
export https_proxy=http://127.0.0.1:7890
```

### Variable Embedding

```
test: 测试变量<br 0>嵌入
```

### Ispraznite Keš Memoriju

```bash
rm -rf .i18n/.cache
```
