<h1 style="justify-content:space-between">3Ti.Site · Think No Borders<img src="//i-01.eu.org/i18n/logo.svg" style="margin-top:-1px;width:42px"></h1>

3Ti.Site, mitmekeelne staatiline saidigeneraator, suudab Markdowni automaatselt tõlkida [enam kui sajasse erinevasse keelde](https://github.com/i18n-site/node/blob/main/lang/src/index.js) .

<img src="//i-01.eu.org/i18n/lang.webp" alt="" />

Mõned inimesed võivad küsida, kas nüüd, kui brauseritel on sisseehitatud tõlkefunktsioonid, pole vaja veebisaiti rahvusvahelistuda?

Tahan öelda, et **ainult kogu saidi rahvusvahelistumisega saame toetada mitmekeelset saidisisest täistekstiotsingut ja otsingumootoritele optimeerimist** .

## Sissejuhatus

Piibel · Genesis :

> Iidsetel aegadel, kui keeled olid üks, ehitas inimkond taevasse ulatuva torni, portaali Jumala valdusse, kuulutades inimkonna vägevust.
>
> Jumal kuulutas: "Mehed ühinevad üheks hõimuks, kellel on ühine keel, ja see torn on vaid proloog. Nüüd saavutavad nad oma soovi ja austust ei jää."
>
> Seega laskus Jumal alla, hajutades inimesi erinevatesse nurkadesse, kasutades erinevaid keeli.
>
> Sellest ajast peale muutus inimsuhtlus väljakutseks, vaidlused lõputuks ja enam polnud taevast puudutavat torni.

Ulmeromaan &quot;Kolm keha&quot; (Hiina hääldus: `3Ti` ) kujutab endast välja tulnukat tsivilisatsiooni, mis suhtleb elektromagnetlainete kaudu, millel puuduvad keelebarjäärid ja mis on tehnoloogiliselt jõukas.

Loodan luua tööriista, mis võimaldab maapealsetel inimestel olla nagu kolmekehalised inimesed, suhelda keelega sidumata ja ühendada taas kogu inimkonda.

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
