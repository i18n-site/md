# I18N.SITE · Dokumenti Bez Granica<img Src="//ok0.pw/5l" Style="float:right;width:42px;margin-Top:6px">

I18N.SITE, generator statičnih stranica koji podržava automatski prijevod na [133 različita jezika](https://github.com/i18n-site/node/blob/main/lang/src/index.js) .

<img src="https://i-01.eu.org/2023/09/O0Tee_m.webp" alt="" />

Neki se ljudi možda žele pitati, sada kada preglednici imaju ugrađene funkcije prevođenja, je li nepotrebno internacionalizirati web mjesto?

Želim reći da **samo internacionalizacijom cijele stranice možemo podržati višejezično pretraživanje cijelog teksta na stranici i optimizaciju za tražilice** .

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

### Ugradnja Varijable

```
test: 测试变量<br 0>嵌入
```

### Isprazni Predmemoriju

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
