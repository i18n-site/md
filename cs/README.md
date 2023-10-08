# I18N.SITE · Dokumenty Bez Hranic<img Src="//ok0.pw/5l" Style="float:right;width:42px;margin-Top:6px">

I18N.SITE, generátor statických stránek, který podporuje automatický překlad do [133 různých jazyků](https://github.com/i18n-site/node/blob/main/lang/src/index.js) .

<img src="https://i-01.eu.org/2023/09/O0Tee_m.webp" alt="" />

Někteří lidé se mohou chtít zeptat, když nyní prohlížeče mají vestavěné funkce překladu, je zbytečné internacionalizovat web?

Chci říci, že **pouze internacionalizací celého webu můžeme podpořit vícejazyčné fulltextové vyhledávání na webu a optimalizaci pro vyhledávače** .

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

### Variabilní Vkládání

```
test: 测试变量<br 0>嵌入
```

### Vymazání Vyrovnávací Paměti

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
