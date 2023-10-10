<h1 style="justify-content:space-between">3Ti.Site · Think No Borders<img src="//i-01.eu.org/i18n/logo.svg" style="margin-top:-1px;width:42px"></h1>

3Ti.Sitek, hizkuntza anitzeko gune estatikoko sorgailuak, Markdown automatikoki itzul dezake [ehun hizkuntza ezberdin baino gehiagotara](https://github.com/i18n-site/node/blob/main/lang/src/index.js) .

<img src="//i-01.eu.org/i18n/lang.webp" alt="" />

Batzuek galdetu nahiko lukete, orain arakatzaileek itzulpen funtzioak barneratuta dituztela, ez al da beharrezkoa webgunea nazioartekotzea?

Esan nahi dut **gune osoa nazioartekotuz soilik onartzen ahal izango ditugula hizkuntza anitzeko guneko testu osoko bilaketa eta bilatzaileen optimizazioa** .

## Sekuentzia

"Biblia·Genesia":

> Antzina, hizkuntza bat zenean, gizadia harro jaio zen. Eraikin handi bat eraiki nahi zuten, zerua ukitzen zuen dorrea.
>
> Hala ere, Jainkozkoak, haien harrokeriarekin atsekabetuta, jendea lurrean barreiatzea eragin zuen, euren mihia elkar ulertezin bihurtuz.
>
> Handik aurrera, gizadiak komunikatzeko borroka egin zuen, gatazkak etengabe sortu ziren eta munduak ez zuen gehiago ikusi zeruetara iristen zen dorrerik.

&quot;Three-Body&quot; zientzia-fikziozko eleberriak (txinerazko ahoskera: `3Ti` ) uhin elektromagnetikoen bidez komunikatzen den, hizkuntza-hesirik ez duen eta teknologikoki oparoa den zibilizazio arrotz bat fikzionatu du.

Tresna honen laguntzaz, lurreko jendea hiru gorputzeko pertsonak bezalakoa izatea espero dut, komunikazioa hizkuntzak ez du mugarik izango eta gizadi osoa berriro elkartuko dela.

## Tutoretza

## Funtzioaren Sarrera

### Mantendu Markdown Formatua

### Aldatu Itzulpena

Itzulpena aldatu ondoren, `./i18n.sh` berriro exekutatu behar duzu cachea eguneratzeko.

### Itzulpen Oharrak

Itzulpen-iruzkinek \```ren ondoren hizkuntza adierazi behar dute, adibidez ` ```rust` .

Une honetan rust, c, cpp, java, js, coffee, python eta bash-en iruzkinen itzulpena onartzen du.

Editatu [tran_md/src/comment.coffee](https://github.com/i18n-site/node/blob/main/tran_md/src/comment.coffee) hizkuntza gehiagotako iruzkinetarako itzulpen-laguntza gehitzeko.

### Konfiguratu Proxy

Ingurune-aldagai hauek ezarriz gero, Google Translate API deiak proxytik igarotzen dira.

```bash
export https_proxy=http://127.0.0.1:7890
```

### Kapsulatze Aldakorra

```
test: 测试变量<br 0>嵌入
```

### Hustu Cachea

```bash
rm -rf .i18n/.cache
```
