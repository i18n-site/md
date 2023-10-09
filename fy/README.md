# I18N.SITE · Taal Sûnder Grinzen<img Src="//i-01.eu.org/i18n/logo.svg" Style="float:right;width:42px;margin-Top:6px">

I18N.SITE, in meartalige statyske sidegenerator, kin Markdown automatysk oersette yn [mear as hûndert ferskillende talen](https://github.com/i18n-site/node/blob/main/lang/src/index.js) .

<img src="//i-01.eu.org/i18n/lang.webp" alt="" />

Guon minsken wolle freegje, no't browsers ynboude oersettingsfunksjes hawwe, is it net nedich om de webside te ynternasjonalisearjen?

Ik wol sizze dat **allinich troch ynternasjonalisearjen fan &#39;e heule side wy meartalige yn-side folsleine tekstsykjen en sykmasino-optimisaasje kinne stypje** .

## Tutorial

## Funksje Yntroduksje

### Hâld Markdown Format

### Feroarje Oersetting

Nei it wizigjen fan de oersetting moatte jo `./i18n.sh` opnij útfiere om de cache te aktualisearjen.

### Translation Notes

Oersetkommentaren moatte de taal nei \``` oanjaan, lykas ` ```rust` .

Unterstützt op it stuit kommentaar oersetting foar rust, c, cpp, java, js, kofje, python en bash.

Bewurkje [tran_md/src/comment.coffee](https://github.com/i18n-site/node/blob/main/tran_md/src/comment.coffee) om oersettingsstipe ta te foegjen foar opmerkings yn mear talen.

### Proxy Ynstelle

It ynstellen fan de folgjende omjouwingsfariabelen lit Google Translate API-oproppen troch de proxy gean.

```bash
export https_proxy=http://127.0.0.1:7890
```

### Fariabele Embedding

```
test: 测试变量<br 0>嵌入
```

### De Cache Leegje

```bash
rm -rf .i18n/.cache
```
