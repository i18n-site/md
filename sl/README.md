# I18N.SITE · Jezik Brez Meja<img Src="//ok0.pw/5l" Style="float:right;width:42px;margin-Top:6px">

I18N.SITE, generator statičnih spletnih mest, ki podpira samodejno prevajanje v [100 različnih jezikov](https://github.com/i18n-site/node/blob/main/lang/src/index.js) .

<img src="https://i-01.eu.org/2023/09/O0Tee_m.webp" alt="" />

Nekateri ljudje se morda želijo vprašati, ali je zdaj, ko imajo brskalniki vgrajene prevajalske funkcije, internacionalizacija spletne strani nepotrebna?

Povedati želim, da **samo z internacionalizacijo celotnega spletnega mesta lahko podpiramo večjezično iskanje po celotnem besedilu in optimizacijo iskalnikov** .

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

### Vdelava Spremenljivk

```
test: 测试变量<br 0>嵌入
```

### Izprazni Predpomnilnik

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
```bash
rm -rf .i18n/.cache
```
