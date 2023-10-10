<h1 style="justify-content:space-between">3Ti.Site · Think No Borders<img src="//i-01.eu.org/i18n/logo.svg" style="margin-top:-1px;width:42px"></h1>

Ny 3Ti.Site, mpamokatra tranokala static amin'ny fiteny maro, dia afaka mandika ho azy ny Markdown amin'ny [fiteny maherin'ny zato](https://github.com/i18n-site/node/blob/main/lang/src/index.js) .

<img src="//i-01.eu.org/i18n/lang.webp" alt="" />

Mety te hanontany ny olona sasany, amin'izao fotoana izao ny mpitety tranonkala dia manana asa fandikan-teny ao anatiny, tsy ilaina ve ny manao iraisam-pirenena ny tranokala?

Te-hilaza aho fa **amin'ny alalan'ny fanaovana iraisam-pirenena ny vohikala manontolo ihany no ahafahantsika manohana ny fikarohana lahatsoratra feno amin'ny fiteny maro ao amin'ny tranokala sy ny fanatsarana ny milina fikarohana** .

## Sava Lalana

Baiboly · Genesisy :

> Tamin’ny andro fahiny, fony mbola iray ihany ny fiteny, ny olombelona dia nanorina tilikambo mipaka hatrany amin’ny lanitra, vavahadin’ny fanjakan’Andriamanitra, manambara ny herin’ny olombelona.
>
> Izao no nambaran’Andriamanitra: “Mitambatra ho firenena iray ny olona, ​​ary iombonan’ny olona ny lelany, ary ity tilikambo ity dia sarin-teny.
>
> Noho izany, Andriamanitra dia nidina, nampiely ny olona amin'ny vazan-tany samihafa, mampiasa fiteny samihafa.
>
> Nanomboka teo dia nanjary sarotra ny fifandraisan’ny olombelona, ​​tsy nisy fiafarana ny fifandirana, ary tsy nisy tilikambo nikasika ny lanitra intsony.

Ny tantara foronina momba ny siansa &quot;Vata Telo&quot; (fanononana amin'ny teny sinoa: `3Ti` ) dia mamorona sivilizasiona vahiny mifandray amin'ny alàlan'ny onjam-peo elektromagnetika, tsy misy sakana amin'ny fiteny ary mandroso ara-teknolojia.

Manantena aho fa hamorona fitaovana iray izay hahatonga ny mponina eto an-tany ho tahaka ny olona telo, hifandray tsy ho voafatotry ny fiteny, ary hampiray indray ny olombelona rehetra.

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
