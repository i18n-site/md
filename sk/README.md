<h1 style="justify-content:space-between">3Ti.Site · Myslite bez hraníc<img src="//i-01.eu.org/i18n/logo.svg" style="margin-top:-1px;width:42px"></h1>

3Ti.Site, viacjazyčný generátor statických stránok, dokáže automaticky preložiť Markdown do [viac ako stovky rôznych jazykov](https://github.com/i18n-site/node/blob/main/lang/src/index.js) .

<img src="//i-01.eu.org/i18n/lang.webp" alt="" />

Niektorí ľudia sa možno budú chcieť spýtať, je teraz, keď majú prehliadače zabudované funkcie prekladu, zbytočné internacionalizovať webovú stránku?

Chcem povedať, že **iba internacionalizáciou celej stránky môžeme podporiť viacjazyčné fulltextové vyhľadávanie na stránke a optimalizáciu pre vyhľadávače** .

## Sekvencia

"Biblia · Genesis":

> Starovekí nerozlišovali medzi jazykmi. Stavali veže siahajúce do neba, aby dosiahli Božiu bránu, aby podporili prestíž ľudskej rasy.
>
> Boh povedal, že ľudia sú svoj vlastný kmeň s rovnakou kultúrou a druhom. Stavba veže je len predohrou. Teraz môžete dosiahnuť, čo chcete, a nebudete sa musieť báť.
>
> Potom prišiel Boh a rozptýlil ľudí na rôzne miesta, pričom sa nedokázali navzájom pochopiť.
>
> Odvtedy sa ľudstvo snažilo komunikovať, neustále vznikali konflikty a svet už nevidel vežu, ktorá siahala do neba.

Sci-fi román „Three-Body“ (čínska výslovnosť: `3Ti` ) beletrizuje mimozemskú civilizáciu, ktorá komunikuje prostredníctvom elektromagnetických vĺn, nemá žiadne jazykové bariéry a je technologicky prosperujúca.

Dúfam, že s pomocou tohto nástroja budú ľudia na Zemi ako trojtelesní ľudia, komunikácia nebude obmedzená jazykom a celé ľudstvo bude opäť zjednotené.

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
