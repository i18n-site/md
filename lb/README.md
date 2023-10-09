# I18N.SITE · Sprooch Ohne Grenzen<img Src="//i-01.eu.org/i18n/logo.svg" Style="float:right;width:42px;margin-Top:6px">

I18N.SITE, e Multi-Sprooch statesche Site Generator, kann Markdown automatesch a [méi wéi honnert verschidde Sproochen](https://github.com/i18n-site/node/blob/main/lang/src/index.js) iwwersetzen.

<img src="//i-01.eu.org/i18n/lang.webp" alt="" />

E puer Leit wëlle vläicht froen, elo datt Browser agebaute Iwwersetzungsfunktiounen hunn, ass et onnéideg fir d'Websäit ze internationaliséieren?

Ech wëll soen datt **nëmmen duerch d&#39;Internationaliséierung vum ganze Site kënne mir méisproocheg In-Site Volltext Sich a Sichmotoroptimiséierung ënnerstëtzen** .

## Tutorial

## Funktioun Aféierung

### Halt Markdown Format

### Iwwersetzung Änneren

Nodeems Dir d&#39;Iwwersetzung geännert hutt, musst Dir `./i18n.sh` nei lafen fir de Cache ze aktualiséieren.

### Iwwersetzung Notizen

Iwwersetzungskommentarer mussen d&#39;Sprooch no \``` uginn, sou wéi ` ```rust` .

Ënnerstëtzt de Moment Kommentar Iwwersetzung fir Rust, c, cpp, Java, js, Kaffi, Python, a Bash.

Edit [tran_md/src/comment.coffee](https://github.com/i18n-site/node/blob/main/tran_md/src/comment.coffee) fir Iwwersetzungsënnerstëtzung fir Kommentarer a méi Sproochen ze addéieren.

### Proxy Konfiguréieren

Astellung vun de folgenden Ëmfeldvariablen erlaabt Google Translate API Uriff duerch de Proxy ze goen.

```bash
export https_proxy=http://127.0.0.1:7890
```

### Variabel Embedding

```
test: 测试变量<br 0>嵌入
```

### Den Cache Eidel Maachen

```bash
rm -rf .i18n/.cache
```
