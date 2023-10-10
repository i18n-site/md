<h1 style="justify-content:space-between">3Ti.Site · Mendoni pa kufi<img src="//i-01.eu.org/i18n/logo.svg" style="margin-top:-1px;width:42px"></h1>

3Ti.Site, një gjenerues statik i sajtit, mund të përkthejë automatikisht Markdown në [më shumë se njëqind gjuhë të ndryshme](https://github.com/i18n-site/node/blob/main/lang/src/index.js) .

<img src="//i-01.eu.org/i18n/lang.webp" alt="" />

Disa njerëz mund të pyesin, pasi të gjithë shfletuesit kanë funksione përkthimi, a është e panevojshme ndërkombëtarizimi i faqes së internetit?

Unë do të doja të them se **vetëm faqet e internetit që gjenerojnë përkthime statike mund të mbështesin kërkimin me tekst të plotë në faqe shumëgjuhëshe dhe optimizimin e motorit të kërkimit** .

## Prezantimi

Bibla · Zanafilla :

> Në kohët e lashta, kur gjuhët ishin një, njerëzimi ndërtoi një kullë që arrinte deri në qiej, një portal në domenin e Zotit, duke shpallur fuqinë e njerëzimit.
>
> Zoti deklaroi: "Njerëzit bashkohen si një fis, me një gjuhë të përbashkët, dhe kjo kullë nuk është veçse një prolog. Tani ata arrijnë dëshirën e tyre dhe nuk do të ketë më frikë."
>
> Kështu, Zoti zbriti, duke shpërndarë njerëz në qoshe të ndryshme, përdorin gjuhë të ndryshme.
>
> Që atëherë, komunikimi njerëzor u bë sfidues, mosmarrëveshjet pafund dhe nuk kishte më një kullë që të prekte qiellin.

Romani fantastiko-shkencor &quot;Tre-trupi&quot; (shqiptimi kinez: `3Ti` ) imagjinon një qytetërim alien që komunikon përmes valëve elektromagnetike, nuk ka barriera gjuhësore dhe është teknologjikisht i begatë.

Shpresoj të krijoj një mjet që do t'u mundësojë njerëzve të tokës të jenë si njerëz me tre trupa, të komunikojnë pa u lidhur nga gjuha dhe të bashkojë përsëri gjithë njerëzimin.

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
