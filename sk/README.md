<h1 style="justify-content:space-between">3Ti.Site · Myslite bez hraníc<img src="//i-01.eu.org/i18n/logo.svg" style="margin-top:-1px;width:42px"></h1>

3Ti.Site, generátor statických stránok, dokáže automaticky preložiť Markdown do [viac ako stovky rôznych jazykov](https://github.com/i18n-site/node/blob/main/lang/src/index.js) .

<img src="//i-01.eu.org/i18n/lang.webp" alt="" />

Niektorí ľudia sa môžu pýtať, keďže všetky prehliadače majú funkcie prekladu, je zbytočné internacionalizovať webovú stránku?

Chcel by som povedať, že **iba webové stránky, ktoré generujú statické preklady, môžu podporovať viacjazyčné fulltextové vyhľadávanie a optimalizáciu pre vyhľadávače** .

## Úvod

Biblia · Genezis :

> V dávnych dobách, keď jazyky boli jedným, ľudstvo postavilo vežu siahajúcu až do nebies, portál do Božej ríše, hlásajúc silu ľudstva.
>
> Boh vyhlásil: "Ľudia sa zjednocujú ako jeden kmeň so spoločným jazykom a táto veža je len prológom. Teraz dosiahnu svoju túžbu a už nebude viac strachu."
>
> Boh teda zostúpil, rozptýlil ľudí do rôznych kútov, používal rôzne jazyky.
>
> Odvtedy sa ľudská komunikácia stala náročnou, spory nekonečné a už neexistovala veža, ktorá by sa dotýkala neba.

Sci-fi román „Three-Body“ (čínska výslovnosť: `3Ti` ) beletrizuje mimozemskú civilizáciu, ktorá komunikuje prostredníctvom elektromagnetických vĺn, nemá žiadne jazykové bariéry a je technologicky prosperujúca.

Dúfam, že vytvorím nástroj, ktorý ľuďom na Zemi umožní byť ako ľudia s tromi telami, komunikovať bez toho, aby boli viazaní jazykom, a znova zjednotiť celé ľudstvo.

## Návod

## Úvod Do Funkcie

### Ponechajte Formát Markdown

### Upraviť Preklad

Po úprave prekladu musíte znova spustiť `./i18n.sh` , aby ste aktualizovali vyrovnávaciu pamäť.

### Poznámky K Prekladu

Komentáre k prekladu musia uvádzať jazyk po \```, ako napríklad ` ```rust` .

V súčasnosti podporuje preklad komentárov pre rust, c, cpp, java, js, coffee, python a bash.

Upravte [tran_md/src/comment.coffee](https://github.com/i18n-site/node/blob/main/tran_md/src/comment.coffee) a pridajte podporu prekladu pre komentáre vo viacerých jazykoch.

### Nakonfigurujte Proxy

Nastavenie nasledujúcich premenných prostredia umožňuje volaniam rozhrania Google Translate API prechádzať cez server proxy.

```bash
export https_proxy=http://127.0.0.1:7890
```

### Variabilné Vkladanie

```
test: 测试变量<br 0>嵌入
```

### Vyprázdniť Vyrovnávaciu Pamäť

```bash
rm -rf .i18n/.cache
```
