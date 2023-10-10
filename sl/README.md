<h1 style="justify-content:space-between">3Ti.Site · Think Borderless<img src="//i-01.eu.org/i18n/logo.svg" style="margin-top:-1px;width:42px"></h1>

3Ti.Site, generator statičnih spletnih mest, lahko samodejno prevede Markdown v [več kot sto različnih jezikov](https://github.com/i18n-site/node/blob/main/lang/src/index.js) .

<img src="//i-01.eu.org/i18n/lang.webp" alt="" />

Nekateri se bodo morda vprašali, ali je internacionalizacija spletnega mesta nepotrebna, ker imajo vsi brskalniki prevajalske funkcije?

Rad bi povedal, da **lahko le spletna mesta, ki ustvarjajo statične prevode, podpirajo večjezično iskanje po celotnem besedilu in optimizacijo iskalnikov** .

## Uvod

Sveto pismo · Geneza :

> V starih časih, ko so bili jeziki enotni, je človeštvo zgradilo stolp, ki je segal do nebes, portal v Božjo domeno, ki je oznanjal človeško moč.
>
> Bog je izjavil: "Ljudje se združijo kot eno pleme, s skupnim jezikom, in ta stolp je le prolog. Zdaj izpolnijo svojo željo in ne bo več strahu."
>
> Tako se je Bog spustil in ljudi razpršil na različne konce, uporabljal različne jezike.
>
> Od takrat naprej je človeška komunikacija postala zahtevna, spori neskončni in ni bilo več stolpa, ki bi se dotaknil neba.

Znanstvenofantastični roman &quot;Three-Body&quot; (kitajska izgovorjava: `3Ti` ) fikcionalizira tujo civilizacijo, ki komunicira prek elektromagnetnih valov, nima jezikovnih ovir in je tehnološko uspešna.

Upam, da bom ustvaril orodje, ki bo ljudem na zemlji omogočilo, da bodo kot ljudje s tremi telesi, da bodo komunicirali, ne da bi bili vezani na jezik, in ponovno združili vse človeštvo.

## Vadnica

## Predstavitev Funkcije

### Ohrani Markdown Format

### Spremeni Prevod

Ko spremenite prevod, morate znova zagnati `./i18n.sh` , da posodobite predpomnilnik.

### Prevajalske Opombe

Komentarji prevoda morajo navesti jezik za \```, na primer ` ```rust` .

Trenutno podpira prevajanje komentarjev za rust, c, cpp, java, js, coffee, python in bash.

Uredite [tran_md/src/comment.coffee](https://github.com/i18n-site/node/blob/main/tran_md/src/comment.coffee) , da dodate podporo za prevajanje komentarjev v več jezikih.

### Konfigurirajte Proxy

Nastavitev naslednjih spremenljivk okolja omogoča, da klici Google Translate API potekajo prek proxyja.

```bash
export https_proxy=http://127.0.0.1:7890
```

### Vdelava Spremenljivk

```
test: 测试变量<br 0>嵌入
```

### Izprazni Predpomnilnik

```bash
rm -rf .i18n/.cache
```
