<h1 style="justify-content:space-between">3Ti.Site · Think No Borders<img src="//i-01.eu.org/i18n/logo.svg" style="margin-top:-1px;width:42px"></h1>

3Ti.Site, një gjenerues i faqeve statike me shumë gjuhë, mund të përkthejë automatikisht Markdown në [më shumë se njëqind gjuhë të ndryshme](https://github.com/i18n-site/node/blob/main/lang/src/index.js) .

<img src="//i-01.eu.org/i18n/lang.webp" alt="" />

Disa njerëz mund të duan të pyesin, tani që shfletuesit kanë funksione të integruara përkthimi, a është e panevojshme ndërkombëtarizimi i faqes së internetit?

Dua të them se **vetëm duke ndërkombëtarizuar të gjithë sajtin mund të mbështesim kërkimin me tekst të plotë në faqe shumëgjuhëshe dhe optimizimin e motorëve të kërkimit** .

## Sekuenca

"Bibla · Zanafilla":

> Në kohët e lashta, kur gjuha ishte një, njerëzimi lindi krenar. Ata kërkuan të ndërtonin një ndërtesë të lartë, një kullë që prekte qiejt.
>
> Megjithatë, Hyjnori, i pakënaqur me arrogancën e tyre, i bëri njerëzit të shpërndaheshin nëpër tokë, duke i bërë gjuhët e tyre të pakuptueshme për njëri-tjetrin.
>
> Që atëherë e tutje, njerëzimi luftoi për të komunikuar, konfliktet u ngritën pafundësisht dhe bota nuk pa më një kullë që arrinte në qiell.

Romani fantastiko-shkencor &quot;Tre-trupi&quot; (shqiptimi kinez: `3Ti` ) imagjinon një qytetërim alien që komunikon përmes valëve elektromagnetike, nuk ka barriera gjuhësore dhe është teknologjikisht i begatë.

Shpresoj që me ndihmën e këtij mjeti, njerëzit e tokës do të jenë si njerëz me tre trupa, komunikimi nuk do të kufizohet nga gjuha dhe i gjithë njerëzimi do të bashkohet përsëri.

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
