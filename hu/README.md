# I18N.SITE · Dokumentumok Határok Nélkül<img Src="//ok0.pw/5l" Style="float:right;width:42px;margin-Top:6px">

Az I18N.SITE egy statikus webhelygenerátor, amely [133 különböző nyelvre](https://github.com/i18n-site/node/blob/main/lang/src/index.js) támogatja az automatikus fordítást.

<img src="https://i-01.eu.org/2023/09/O0Tee_m.webp" alt="" />

Néhányan feltehetik a kérdést, hogy most, hogy a böngészők beépített fordítási funkcióval rendelkeznek, nem szükséges-e nemzetközivé tenni a webhelyet?

Azt akarom mondani, hogy **csak a teljes webhely nemzetközivé tételével tudjuk támogatni a többnyelvű webhelyen belüli teljes szöveges keresést és a keresőoptimalizálást** .

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

### Változó Beágyazás

```
test: 测试变量<br 0>嵌入
```

### Átmeneti Tár Ürítése

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
