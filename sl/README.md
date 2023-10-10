<h1 style="justify-content:space-between">3Ti.Site · Misli brez meja<img src="//i-01.eu.org/i18n/logo.svg" style="margin-top:-1px;width:42px"></h1>

3Ti.Site, večjezični generator statičnih spletnih mest, lahko samodejno prevede Markdown v [več kot sto različnih jezikov](https://github.com/i18n-site/node/blob/main/lang/src/index.js) .

<img src="//i-01.eu.org/i18n/lang.webp" alt="" />

Nekateri ljudje se morda želijo vprašati, ali je zdaj, ko imajo brskalniki vgrajene prevajalske funkcije, internacionalizacija spletne strani nepotrebna?

Povedati želim, da **samo z internacionalizacijo celotnega spletnega mesta lahko podpiramo večjezično iskanje po celotnem besedilu in optimizacijo iskalnikov** .

## Zaporedje

"Biblija · Geneza":

> Starodavni niso razlikovali med jeziki. Zgradili so stolpe, ki so segali do neba, da bi dosegli Božja vrata, da bi povečali ugled človeške rase.
>
> Bog je rekel, da smo ljudje svoje pleme, z isto kulturo in vrsto. Gradnja stolpa je le uvod. Zdaj lahko dosežete, kar želite, in ne boste se imeli česa bati.
>
> Potem je prišel Bog in ljudi razkropil na različne kraje, da se niso mogli razumeti.
>
> Od takrat naprej se je človeštvo trudilo komunicirati, neskončno so nastajali konflikti in svet ni več videl stolpa, ki bi segal do neba.

Znanstvenofantastični roman &quot;Three-Body&quot; (kitajska izgovorjava: `3Ti` ) fikcionalizira tujo civilizacijo, ki komunicira prek elektromagnetnih valov, nima jezikovnih ovir in je tehnološko uspešna.

Upam, da bodo s pomočjo tega orodja ljudje na zemlji podobni ljudem s tremi telesi, da komunikacija ne bo omejena z jezikom in da bo vse človeštvo spet združeno.

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
