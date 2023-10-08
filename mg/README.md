# I18N.SITE · Documents Sans Frontières<img Src="//ok0.pw/5l" Style="float:right;width:42px;margin-Top:6px">

I18N.SITE, mpamorona tranokala tsy miovaova izay manohana ny fandikana mandeha ho azy amin'ny [fiteny 133 samihafa](https://github.com/i18n-site/node/blob/main/lang/src/index.js) .

![](https://i-01.eu.org/2023/09/O0Tee_m.webp)

Mety te hanontany ny olona sasany, amin'izao fotoana izao ny mpitety tranonkala dia manana asa fandikan-teny ao anatiny, tsy ilaina ve ny manao iraisam-pirenena ny tranokala?

Te-hilaza aho fa **amin&#39;ny alalan&#39;ny fanaovana iraisam-pirenena ny vohikala manontolo ihany no ahafahantsika manohana ny fikarohana lahatsoratra feno amin&#39;ny fiteny maro ao amin&#39;ny tranokala sy ny fanatsarana ny milina fikarohana** .

## Tutorial

## Fampidirana Asa

### Tazony Ny Format Markdown

### Ovao Ny Dikanteny

Aorian'ny fanovàna ny dikanteny dia mila averinao indray `./i18n.sh` mba hanavaozana ny cache.

### Fanamarihana Fandikan-Teny

Ny fanehoan-kevitra fandikan-teny dia mila manondro ny fiteny aorian&#39;ny \```, toy ny ` ```rust` .

Amin'izao fotoana izao dia manohana fandikana fanehoan-kevitra momba ny harafesina, c, cpp, java, js, kafe, python, ary bash.

Amboary [ny tran_md/src/comment.coffee](https://github.com/i18n-site/node/blob/main/tran_md/src/comment.coffee) mba hanampiana fanohanana fandikan-teny amin'ny fanehoan-kevitra amin'ny fiteny maro kokoa.

### Ampifanaraho Ny Proxy

Ny fametrahana ireto fari-piainan'ny tontolo iainana manaraka ireto dia ahafahan'ny antson'ny Google Translate API mandeha amin'ny proxy.

```bash
export https_proxy=http://127.0.0.1:7890


```

### Variable Embedding

```
test: 测试变量<br 0>嵌入
```

### Foana Ny Cache

```bash
rm -rf .i18n/.cache


```
