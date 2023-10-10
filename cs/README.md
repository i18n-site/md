<h1 style="justify-content:space-between">3Ti.Site · Myslete bez hranic<img src="//i-01.eu.org/i18n/logo.svg" style="margin-top:-1px;width:42px"></h1>

3Ti.Site, vícejazyčný generátor statických stránek, dokáže automaticky přeložit Markdown do [více než stovky různých jazyků](https://github.com/i18n-site/node/blob/main/lang/src/index.js) .

<img src="//i-01.eu.org/i18n/lang.webp" alt="" />

Někteří lidé se mohou chtít zeptat, když nyní prohlížeče mají vestavěné funkce překladu, je zbytečné internacionalizovat web?

Chci říci, že **pouze internacionalizací celého webu můžeme podpořit vícejazyčné fulltextové vyhledávání na webu a optimalizaci pro vyhledávače** .

## Sekvence

"Bible·Genesis":

> Staří lidé nerozlišovali mezi jazyky. Stavěli věže dosahující až k nebi, aby dosáhly Boží brány, aby podpořily prestiž lidské rasy.
>
> Bůh řekl, že lidé jsou svým vlastním kmenem se stejnou kulturou a druhem. Stavba věže je jen předehra. Nyní můžete dosáhnout, co chcete, a nebudete se muset ničeho bát.
>
> Pak přišel Bůh a rozptýlil lidi na různá místa, neschopni se navzájem pochopit.
>
> Od té doby se lidstvo snažilo komunikovat, donekonečna vznikaly konflikty a svět už neviděl věž, která dosáhla nebes.

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
