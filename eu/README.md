# I18N.GUNEA · Mugarik Gabeko Hizkuntza<img Src="//i-01.eu.org/i18n/logo.svg" Style="float:right;width:42px;margin-Top:6px">

I18N.SITE, hizkuntza anitzeko gune estatikoko sorgailuak, Markdown automatikoki itzul dezake [ehun hizkuntza ezberdin baino gehiagotara](https://github.com/i18n-site/node/blob/main/lang/src/index.js) .

<img src="//i-01.eu.org/i18n/lang.webp" alt="" />

Batzuek galdetu nahiko lukete, orain arakatzaileek itzulpen funtzioak barneratuta dituztela, ez al da beharrezkoa webgunea nazioartekotzea?

Esan nahi dut **gune osoa nazioartekotuz soilik onartzen ahal izango ditugula hizkuntza anitzeko guneko testu osoko bilaketa eta bilatzaileen optimizazioa** .

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
