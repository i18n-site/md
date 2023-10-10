<h1 style="justify-content:space-between">3Ti.Site · Think No Borders<img src="//i-01.eu.org/i18n/logo.svg" style="margin-top:-1px;width:42px"></h1>

A 3Ti.Site egy többnyelvű statikus webhelygenerátor, amely automatikusan le tudja fordítani a Markdown-t [több mint száz különböző nyelvre](https://github.com/i18n-site/node/blob/main/lang/src/index.js) .

<img src="//i-01.eu.org/i18n/lang.webp" alt="" />

Néhányan feltehetik a kérdést, hogy most, hogy a böngészők beépített fordítási funkcióval rendelkeznek, nem szükséges-e nemzetközivé tenni a webhelyet?

Azt akarom mondani, hogy **csak a teljes webhely nemzetközivé tételével tudjuk támogatni a többnyelvű webhelyen belüli teljes szöveges keresést és a keresőoptimalizálást** .

## Sorrend

"Biblia · Genesis":

> A régiek nem tettek különbséget a nyelvek között. Büszkén születtek, és magas tornyot akartak építeni, melynek teteje az égig ér.
> <blockquote><p>Istennek nem tetszett az ember arroganciája, ezért minden élőlényt szétszórt különböző helyeken, nem tudták megérteni egymást.</p></blockquote>
> <blockquote><p>Azóta nehezen kommunikálnak az emberek, folytatódnak a viták, és nincs Bábel tornya a világon.</p></blockquote>

A &quot;Három test&quot; (kínai kiejtés: `3Ti` ) tudományos-fantasztikus regény egy idegen civilizációt képzel el, amely elektromágneses hullámokon keresztül kommunikál, nincs nyelvi akadálya, és technológiailag virágzó.

Remélem, hogy ennek az eszköznek a segítségével a földi emberek olyanok lesznek, mint a háromtestűek, a kommunikációt nem korlátozza a nyelv, és újra egyesül az egész emberiség.

## Oktatóanyag

## A Funkció Bemutatása

### Tartsa Meg A Markdown Formátumot

### Fordítás Módosítása

A fordítás módosítása után újra kell futtatnia `./i18n.sh` fájlt a gyorsítótár frissítéséhez.

### Fordítási Megjegyzések

A fordítási megjegyzésekben fel kell tüntetni a nyelvet a \``` után, például ` ```rust` .

Jelenleg támogatja a megjegyzések fordítását rust, c, cpp, java, js, coffee, python és bash esetén.

Szerkessze [a tran_md/src/comment.coffee fájlt,](https://github.com/i18n-site/node/blob/main/tran_md/src/comment.coffee) hogy fordítási támogatást adjon a megjegyzésekhez több nyelven.

### Proxy Konfigurálása

A következő környezeti változók beállítása lehetővé teszi, hogy a Google Fordító API-hívásai keresztülmenjenek a proxyn.

```bash
export https_proxy=http://127.0.0.1:7890
```

### Változó Beágyazás

```
test: 测试变量<br 0>嵌入
```

### Átmeneti Tár Ürítése

```bash
rm -rf .i18n/.cache
```
