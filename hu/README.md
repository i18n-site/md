<h1 style="justify-content:space-between">3Ti.Site · Think Borderless<img src="//i-01.eu.org/i18n/logo.svg" style="margin-top:-1px;width:42px"></h1>

A 3Ti.Site, egy statikus webhelygenerátor, képes automatikusan lefordítani a Markdown-t [több mint száz különböző nyelvre](https://github.com/i18n-site/node/blob/main/lang/src/index.js) .

<img src="//i-01.eu.org/i18n/lang.webp" alt="" />

Egyesek azt kérdezhetik, hogy mivel minden böngészőben van fordítási funkció, szükségtelen-e nemzetközivé tenni a webhelyet?

Szeretném elmondani, hogy **csak a statikus fordításokat generáló webhelyek támogatják a többnyelvű, teljes szöveges keresést és a keresőoptimalizálást** .

## Bevezetés

Biblia · Genezis :

> Az ókorban, amikor a nyelvek egyek voltak, az emberiség az egekig érő tornyot épített, kaput Isten birodalmába, hirdetve az emberiség erejét.
>
> Isten kijelentette: "Az emberek egy törzsként egyesülnek, közös nyelvvel, és ez a torony csak egy prológ. Most elérik vágyukat, és nem lesz többé félelem."
>
> Így Isten leszállt, szétszórta az embereket a különböző sarkokba, és különböző nyelveket használt.
>
> Ettől kezdve az emberi kommunikáció kihívást jelent, a viták végtelenek, és nem volt többé torony, amely az eget érintette volna.

A &quot;Három test&quot; (kínai kiejtés: `3Ti` ) tudományos-fantasztikus regény egy idegen civilizációt képzel el, amely elektromágneses hullámokon keresztül kommunikál, nincs nyelvi akadálya, és technológiailag virágzó.

Remélem, hogy létrehozok egy olyan eszközt, amely lehetővé teszi a földi emberek számára, hogy olyanok legyenek, mint a háromtestű emberek, kommunikáljanak anélkül, hogy a nyelvhez kötnék őket, és újra egyesítsék az egész emberiséget.

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
