<h1 style="justify-content:space-between">3Ti.Site · Myslete bez hranic<img src="//i-01.eu.org/i18n/logo.svg" style="margin-top:-1px;width:42px"></h1>

3Ti.Site, vícejazyčný generátor statických stránek, dokáže automaticky přeložit Markdown do [více než stovky různých jazyků](https://github.com/i18n-site/node/blob/main/lang/src/index.js) .

<img src="//i-01.eu.org/i18n/lang.webp" alt="" />

Někteří lidé se mohou chtít zeptat, když nyní prohlížeče mají vestavěné funkce překladu, je zbytečné internacionalizovat web?

Chci říci, že **pouze internacionalizací celého webu můžeme podpořit vícejazyčné fulltextové vyhledávání na webu a optimalizaci pro vyhledávače** .

## Sekvence

"Bible·Genesis":

> Staří lidé nerozlišovali mezi jazyky. Narodili se s pýchou a chtěli postavit vysokou věž, jejíž vrchol sahá až k nebi.
> <blockquote><p>Bohu se nelíbila lidská arogance, a tak všechny živé bytosti rozptýlil na různá místa, aniž by si navzájem rozuměli.</p></blockquote>
> <blockquote><p>Od té doby je pro lidi obtížné komunikovat, spory pokračují a na světě není babylonská věž.</p></blockquote>

Sci-fi román „Three-Body“ (čínská výslovnost: `3Ti` ) beletrizuje mimozemskou civilizaci, která komunikuje prostřednictvím elektromagnetických vln, nemá žádné jazykové bariéry a je technologicky prosperující.

Doufám, že s pomocí tohoto nástroje budou lidé na Zemi jako lidé tří těl, komunikace nebude omezena jazykem a celé lidstvo bude opět sjednoceno.

## Tutorial

## Úvod Do Funkce

### Zachovat Formát Markdown

### Upravit Překlad

Po úpravě překladu musíte znovu spustit `./i18n.sh` a aktualizovat mezipaměť.

### Poznámky K Překladu

Komentáře k překladu musí uvádět jazyk za \```, například ` ```rust` .

V současné době podporuje překlad komentářů pro rust, c, cpp, java, js, coffee, python a bash.

Upravte [tran_md/src/comment.coffee](https://github.com/i18n-site/node/blob/main/tran_md/src/comment.coffee) a přidejte podporu překladu pro komentáře ve více jazycích.

### Nakonfigurujte Proxy

Nastavení následujících proměnných prostředí umožňuje volání rozhraní Google Translate API procházet přes proxy.

```bash
export https_proxy=http://127.0.0.1:7890
```

### Variabilní Vkládání

```
test: 测试变量<br 0>嵌入
```

### Vymazání Vyrovnávací Paměti

```bash
rm -rf .i18n/.cache
```
