<h1 style="justify-content:space-between">3Ti.Site · Misli bez granica<img src="//i-01.eu.org/i18n/logo.svg" style="margin-top:-1px;width:42px"></h1>

3Ti.Site, generator statičnih stranica na više jezika, može automatski prevesti Markdown na [više od stotinu različitih jezika](https://github.com/i18n-site/node/blob/main/lang/src/index.js) .

<img src="//i-01.eu.org/i18n/lang.webp" alt="" />

Neki se ljudi možda žele pitati, sada kada preglednici imaju ugrađene funkcije prevođenja, je li nepotrebno internacionalizirati web mjesto?

Želim reći da **samo internacionalizacijom cijele stranice možemo podržati višejezično pretraživanje cijelog teksta na stranici i optimizaciju za tražilice** .

## Slijed

"Biblija · Postanak":

> Drevni ljudi nisu razlikovali jezike. Gradili su tornjeve koji su sezali do neba kako bi došli do Božjih vrata kako bi promicali prestiž ljudske rase.
>
> Bog je rekao da su ljudi svoje pleme, iste kulture i vrste. Izgradnja tornja samo je uvod. Sada možete postići što god želite i nećete se imati čega bojati.
>
> Tada je došao Bog i raspršio ljude na razna mjesta, nesposobni da razumiju jedni druge.
>
> Od tada pa nadalje, čovječanstvo se borilo da komunicira, sukobi su nastajali bez kraja i svijet više nije vidio kulu koja je dosezala do neba.

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
