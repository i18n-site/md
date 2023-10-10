<h1 style="justify-content:space-between">3Ti.Site · Mieritrereta tsy misy fetra<img src="//i-01.eu.org/i18n/logo.svg" style="margin-top:-1px;width:42px"></h1>

Ny 3Ti.Site, mpamokatra tranokala static amin&#39;ny fiteny maro, dia afaka mandika ho azy ny Markdown amin&#39;ny [fiteny maherin&#39;ny zato](https://github.com/i18n-site/node/blob/main/lang/src/index.js) .

<img src="//i-01.eu.org/i18n/lang.webp" alt="" />

Mety te hanontany ny olona sasany, amin'izao fotoana izao ny mpitety tranonkala dia manana asa fandikan-teny ao anatiny, tsy ilaina ve ny manao iraisam-pirenena ny tranokala?

Te-hilaza aho fa **amin&#39;ny alalan&#39;ny fanaovana iraisam-pirenena ny vohikala manontolo ihany no ahafahantsika manohana ny fikarohana lahatsoratra feno amin&#39;ny fiteny maro ao amin&#39;ny tranokala sy ny fanatsarana ny milina fikarohana** .

## Filaharana

"Baiboly·Genesisy":

> Tsy nanavaka ny fiteny ny Ntaolo. Teraka tamin'ny avonavona izy ireo ary naniry ny hanorina tilikambo avo izay mipaka any an-danitra ny tampony.
> <blockquote><p>Tsy sitrak’Andriamanitra ny fiavonavonan’ny olombelona, ​​ka naparitany tamin’ny toerana samihafa ny zavamananaina rehetra, ka tsy nifankahazo.</p></blockquote>
> <blockquote><p>Nanomboka teo, dia sarotra tamin’ny olombelona ny nifandray, nitohy ny fifandirana, ary tsy nisy Tilikambon’i Babela teto amin’izao tontolo izao.</p></blockquote>

Ny tantara foronina momba ny siansa &quot;Vata Telo&quot; (fanononana amin&#39;ny teny sinoa: `3Ti` ) dia mamorona sivilizasiona vahiny mifandray amin&#39;ny alàlan&#39;ny onjam-peo elektromagnetika, tsy misy sakana amin&#39;ny fiteny ary mandroso ara-teknolojia.

Manantena aho fa noho ny fanampian’ity fitaovana ity dia ho toy ny olona telo ny olona eto an-tany, tsy ho voafehin’ny fiteny ny fifandraisana, ary ho tafaray indray ny olombelona rehetra.

## Tutorial

## Fampidirana Asa

### Tazony Ny Format Markdown

### Ovao Ny Dikanteny

Aorian&#39;ny fanovàna ny dikanteny dia mila averinao indray `./i18n.sh` hanavao ny cache.

### Fanamarihana Fandikan-Teny

Ny fanehoan-kevitra fandikan-teny dia mila manondro ny fiteny aorian&#39;ny \```, toy ny ` ```rust` .

Amin'izao fotoana izao dia manohana fandikana fanehoan-kevitra momba ny rust, c, cpp, java, js, coffee, python, ary bash.

Amboary [ny tran_md/src/comment.coffee](https://github.com/i18n-site/node/blob/main/tran_md/src/comment.coffee) mba hanampiana fanohanana fandikan-teny amin&#39;ny fanehoan-kevitra amin&#39;ny fiteny maro kokoa.

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
