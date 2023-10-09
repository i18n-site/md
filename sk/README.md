# I18N.SITE · Jazyk Bez Hraníc<img Src="//i-01.eu.org/i18n/logo.svg" Style="float:right;width:42px;margin-Top:6px">

I18N.SITE, viacjazyčný generátor statických stránok, dokáže automaticky preložiť Markdown do [viac ako stovky rôznych jazykov](https://github.com/i18n-site/node/blob/main/lang/src/index.js) .

<img src="//i-01.eu.org/i18n/lang.webp" alt="" />

Niektorí ľudia sa možno budú chcieť spýtať, je teraz, keď majú prehliadače zabudované funkcie prekladu, zbytočné internacionalizovať webovú stránku?

Chcem povedať, že **iba internacionalizáciou celej stránky môžeme podporiť viacjazyčné fulltextové vyhľadávanie na stránke a optimalizáciu pre vyhľadávače** .

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
