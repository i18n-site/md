<h1 style="justify-content:space-between">3Ti.Site · Think No Borders<img src="//i-01.eu.org/i18n/logo.svg" style="margin-top:-1px;width:42px"></h1>

3Ti.Site, mitmekeelne staatiline saidigeneraator, suudab Markdowni automaatselt tõlkida [enam kui sajasse erinevasse keelde](https://github.com/i18n-site/node/blob/main/lang/src/index.js) .

<img src="//i-01.eu.org/i18n/lang.webp" alt="" />

Mõned inimesed võivad küsida, kas nüüd, kui brauseritel on sisseehitatud tõlkefunktsioonid, pole vaja veebisaiti rahvusvahelistuda?

Tahan öelda, et **ainult kogu saidi rahvusvahelistumisega saame toetada mitmekeelset saidisisest täistekstiotsingut ja otsingumootoritele optimeerimist** .

## Jada

"Piibel · Genesis":

> Vanad inimesed ei teinud keeltel vahet. Nad sündisid uhkusega ja tahtsid ehitada kõrge torni, mille tipp ulatub taeva poole.
> <blockquote><p>Jumalale ei meeldinud inimeste kõrkus, mistõttu ta hajutas kõik elusolendid erinevatesse kohtadesse, suutmata üksteist mõista.</p></blockquote>
> <blockquote><p>Sellest ajast peale on inimestel olnud raske suhelda, vaidlused on jätkunud ja maailmas pole Paabeli torni.</p></blockquote>

Ulmeromaan &quot;Kolm keha&quot; (Hiina hääldus: `3Ti` ) kujutab endast välja tulnukat tsivilisatsiooni, mis suhtleb elektromagnetlainete kaudu, millel puuduvad keelebarjäärid ja mis on tehnoloogiliselt jõukas.

Loodan, et selle tööriista abil on maa inimesed nagu kolmekehalised, suhtlemist keel ei piira ja kogu inimkond on taas ühendatud.

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
export https_proxy=http://127.0.0.1:7890
```

### Muutuja Manustamine

```
test: 测试变量<br 0>嵌入
```

### Tühjenda Vahemälu

```bash
rm -rf .i18n/.cache
```
