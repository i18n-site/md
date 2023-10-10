<h1 style="justify-content:space-between">3Ti.Site · Think No Borders<img src="//i-01.eu.org/i18n/logo.svg" style="margin-top:-1px;width:42px"></h1>

Ny 3Ti.Site, mpamokatra tranokala static amin'ny fiteny maro, dia afaka mandika ho azy ny Markdown amin'ny [fiteny maherin'ny zato](https://github.com/i18n-site/node/blob/main/lang/src/index.js) .

<img src="//i-01.eu.org/i18n/lang.webp" alt="" />

Mety te hanontany ny olona sasany, amin'izao fotoana izao ny mpitety tranonkala dia manana asa fandikan-teny ao anatiny, tsy ilaina ve ny manao iraisam-pirenena ny tranokala?

Te-hilaza aho fa **amin'ny alalan'ny fanaovana iraisam-pirenena ny vohikala manontolo ihany no ahafahantsika manohana ny fikarohana lahatsoratra feno amin'ny fiteny maro ao amin'ny tranokala sy ny fanatsarana ny milina fikarohana** .

## Filaharana

"Baiboly·Genesisy":

> Tsy nanavaka ny fiteny ny Ntaolo. Nanao tilikambo manakatra ny lanitra izy ireo mba hahatongavana eo amin’ny vavahadin’Andriamanitra mba hanandratana ny voninahitry ny taranak’olombelona.
>
> Nolazain’Andriamanitra fa foko iray ny olona, ​​mitovy kolontsaina sy karazany. Ny fananganana tilikambo dia santatra fotsiny. Ankehitriny dia afaka manatanteraka izay tianao ianao, ary tsy hisy hatahoranao.
>
> Dia tonga Andriamanitra ka nampihahaka ny olona tamin'ny tany samy hafa, ka tsy nifankahazo.
>
> Nanomboka teo dia sahirana ny olombelona mba hifampiresaka, nipoitra tsy nisy fiafarana ny fifandirana, ary tsy nahita tilikambo manakatra ny lanitra intsony izao tontolo izao.

Ny tantara foronina momba ny siansa &quot;Vata Telo&quot; (fanononana amin'ny teny sinoa: `3Ti` ) dia mamorona sivilizasiona vahiny mifandray amin'ny alàlan'ny onjam-peo elektromagnetika, tsy misy sakana amin'ny fiteny ary mandroso ara-teknolojia.

Manantena aho fa noho ny fanampian’ity fitaovana ity dia ho toy ny olona telo ny olona eto an-tany, tsy ho voafehin’ny fiteny ny fifandraisana, ary ho tafaray indray ny olombelona rehetra.

## Tutorial

## Fampidirana Asa

### Tazony Ny Format Markdown

### Ovao Ny Dikanteny

Aorian'ny fanovàna ny dikanteny dia mila averinao indray `./i18n.sh` hanavao ny cache.

### Fanamarihana Fandikan-Teny

Ny fanehoan-kevitra fandikan-teny dia mila manondro ny fiteny aorian'ny \```, toy ny ` ```rust` .

Amin'izao fotoana izao dia manohana fandikana fanehoan-kevitra momba ny rust, c, cpp, java, js, coffee, python, ary bash.

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
