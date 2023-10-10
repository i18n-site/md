<h1 style="justify-content:space-between">3Ti.Site · Mugarik Gabe Pentsatuz<img src="//i-01.eu.org/i18n/logo.svg" style="margin-top:-1px;width:42px"></h1>

3Ti.Sitek, hizkuntza anitzeko gune estatikoko sorgailuak, Markdown automatikoki itzul dezake [ehun hizkuntza ezberdin baino gehiagotara](https://github.com/i18n-site/node/blob/main/lang/src/index.js) .

<img src="//i-01.eu.org/i18n/lang.webp" alt="" />

Batzuek galdetu nahiko lukete, orain arakatzaileek itzulpen funtzioak barneratuta dituztela, ez al da beharrezkoa webgunea nazioartekotzea?

Esan nahi dut **gune osoa nazioartekotuz soilik onartzen ahal izango ditugula hizkuntza anitzeko guneko testu osoko bilaketa eta bilatzaileen optimizazioa** .

## Sarrera

Biblia · Genesis :

> Antzina, hizkuntzak bat zirenean, gizateriak zeruraino iristen zen dorre bat eraiki zuen, Jainkoaren domeinurako atari bat, gizakiaren boterea aldarrikatuz.
>
> Jainkoak adierazi zuen: "Gizonak tribu bat bezala elkartzen dira, hizkuntza partekatuarekin, eta dorre hau hitzaurre bat besterik ez da. Orain beren nahia lortzen dute, eta ez da gehiago beldurrik izango".
>
> Horrela, Jainkoa jaitsi zen, jendea bazter ezberdinetara sakabanatzen, hizkuntza desberdinak erabiltzen.
>
> Handik aurrera, giza komunikazioa erronka bihurtu zen, gatazkak amaigabeak, eta ez zen gehiago zerua ukitzen zuen dorrerik.

&quot;Three-Body&quot; zientzia-fikziozko eleberriak (txinerazko ahoskera: `3Ti` ) uhin elektromagnetikoen bidez komunikatzen den, hizkuntza-hesirik ez duen eta teknologikoki oparoa den zibilizazio arrotz bat fikzionatu du.

Espero dut lurreko jendea hiru gorputzeko pertsonak bezalakoa izatea, hizkuntzari lotu gabe komunikatzea eta gizadi osoa berriro batzea ahalbidetuko duen tresna sortzea.

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
