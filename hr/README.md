<h1 style="justify-content:space-between">3Ti.Site · Think Borderless<img src="//i-01.eu.org/i18n/logo.svg" style="margin-top:-1px;width:42px"></h1>

3Ti.Site, generator statičnih stranica, može automatski prevesti Markdown na [više od stotinu različitih jezika](https://github.com/i18n-site/node/blob/main/lang/src/index.js) .

<img src="//i-01.eu.org/i18n/lang.webp" alt="" />

Neki se ljudi mogu pitati, budući da svi preglednici imaju funkcije prevođenja, je li nepotrebno internacionalizirati web mjesto?

Želio bih reći da **samo web stranice koje generiraju statične prijevode mogu podržati višejezično pretraživanje cijelog teksta na web mjestu i optimizaciju tražilice** .

## Uvod

Biblija · Postanak :

> U davna vremena, kada su jezici bili jedan, čovječanstvo je izgradilo toranj koji je sezao do neba, portal u Božju domenu, objavljujući moć čovječanstva.
>
> Bog je objavio: "Ljudi se ujedinjuju kao jedno pleme, sa zajedničkim jezikom, a ova je kula samo prolog. Sada su ostvarili svoju želju i više neće biti straha."
>
> Tako se Bog spustio, raspršio ljude u različite kutove, koristio različite jezike.
>
> Od tada je ljudska komunikacija postala izazovna, sporovi beskrajni, a nije više bilo tornja koji je dodirivao nebo.

Znanstveno-fantastični roman &quot;Tri tijela&quot; (kineski izgovor: `3Ti` ) fikcionalizira izvanzemaljsku civilizaciju koja komunicira putem elektromagnetskih valova, nema jezičnih barijera i tehnološki je napredna.

Nadam se da ću stvoriti alat koji će omogućiti ljudima na Zemlji da budu poput ljudi s tri tijela, da komuniciraju bez vezanosti jezikom i ponovno ujedine cijelo čovječanstvo.

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
