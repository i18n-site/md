<h1 style="justify-content:space-between">3Ti.Site · Misli bez granica<img src="//i-01.eu.org/i18n/logo.svg" style="width:42px;margin-top:-1px"></h1>

3Ti.Site, generator statičnih stranica na više jezika, može automatski prevesti Markdown na [više od stotinu različitih jezika](https://github.com/i18n-site/node/blob/main/lang/src/index.js) .

<img src="//i-01.eu.org/i18n/lang.webp" alt="" />

Neki se ljudi možda žele pitati, sada kada preglednici imaju ugrađene funkcije prevođenja, je li nepotrebno internacionalizirati web mjesto?

Želim reći da **samo internacionalizacijom cijele stranice možemo podržati višejezično pretraživanje cijelog teksta na stranici i optimizaciju za tražilice** .

## Slijed

"Biblija · Postanak":

> Drevni ljudi nisu razlikovali jezike. Rođeni su s ponosom i htjeli su sagraditi visoku kulu s vrhom do neba.
> <blockquote><p>Bogu je bila nezadovoljna ljudska oholost, pa je sva živa bića raspršio na razna mjesta, ne mogavši ​​se međusobno razumjeti.</p></blockquote>
> <blockquote><p>Od tada je ljudima bilo teško komunicirati, sporovi se nastavljaju, a na svijetu ne postoji kula Babilonska.</p></blockquote>

Znanstveno-fantastični roman &quot;Tri tijela&quot; (kineski izgovor: `3Ti` ) fikcionalizira izvanzemaljsku civilizaciju koja komunicira putem elektromagnetskih valova, nema jezičnih barijera i tehnološki je napredna.

Nadam se da će uz pomoć ovog alata ljudi na Zemlji biti poput ljudi s tri tijela, da komunikacija neće biti ograničena jezikom i da će cijelo čovječanstvo ponovno biti ujedinjeno.

## Tutorial

## Uvod U Funkciju

### Zadrži Markdown Format

### Izmijeni Prijevod

Nakon izmjene prijevoda, trebate ponovno pokrenuti `./i18n.sh` za ažuriranje predmemorije.

### Bilješke O Prijevodu

Komentari prijevoda moraju navesti jezik nakon \```, kao što je ` ```rust` .

Trenutno podržava prijevod komentara za rust, c, cpp, java, js, coffee, python i bash.

Uredite [tran_md/src/comment.coffee](https://github.com/i18n-site/node/blob/main/tran_md/src/comment.coffee) za dodavanje podrške za prijevod za komentare na više jezika.

### Konfigurirajte Proxy

Postavljanje sljedećih varijabli okruženja omogućuje Google Translate API pozivima da prolaze kroz proxy.

```bash
export https_proxy=http://127.0.0.1:7890
```

### Ugradnja Varijable

```
test: 测试变量<br 0>嵌入
```

### Isprazni Predmemoriju

```bash
rm -rf .i18n/.cache
```
