# I18N.SITE · Piirideta Keel<img Src="//ok0.pw/5l" Style="float:right;width:42px;margin-Top:6px">

I18N.SITE, staatiline saidigeneraator, mis toetab automaatset tõlkimist [enam kui saja erinevasse keelde](https://github.com/i18n-site/node/blob/main/lang/src/index.js) .

<img src="http://s-cd-3653-i18n-img.oss.dogecdn.com/i18n.lang.webp" alt="" />

Mõned inimesed võivad küsida, kas nüüd, kui brauseritel on sisseehitatud tõlkefunktsioonid, pole vaja veebisaiti rahvusvahelistuda?

Tahan öelda, et **ainult kogu saidi rahvusvahelistumisega saame toetada mitmekeelset saidisisest täistekstiotsingut ja otsingumootoritele optimeerimist** .

## Õpetus

## Funktsiooni Tutvustus

### Hoidke Markdowni Vorming

### Muuda Tõlget

Pärast tõlke muutmist peate vahemälu värskendamiseks uuesti käivitama faili `./i18n.sh` .

### Tõlkemärkmed

Tõlkekommentaarid peavad märkima keele pärast sõna \```, näiteks ` ```rust` .

Praegu toetab kommentaaride tõlkimist rust, c, cpp, java, js, coffee, python ja bash.

Redigeerige [faili tran_md/src/comment.coffee](https://github.com/i18n-site/node/blob/main/tran_md/src/comment.coffee) , et lisada tõlketugi kommentaaridele rohkemates keeltes.

### Puhverserveri Konfigureerimine

Järgmiste keskkonnamuutujate määramine võimaldab Google'i tõlke API-kõnedel läbida puhverserveri.

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

### Muutuja Manustamine

```
test: 测试变量<br 0>嵌入
```

### Tühjenda Vahemälu

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
