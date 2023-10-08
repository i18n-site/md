# I18N.GUNEA · Mugarik Gabeko Dokumentuak<img Src="//ok0.pw/5l" Style="float:right;width:42px;margin-Top:6px">

I18N.SITE, [133 hizkuntza ezberdinetarako](https://github.com/i18n-site/node/blob/main/lang/src/index.js) itzulpen automatikoa onartzen duen gune-sorgailu estatiko bat.

![](https://i-01.eu.org/2023/09/O0Tee_m.webp)

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

Ingurune-aldagai hauek ezarriz gero, Google Translate APIko deiak proxytik igarotzen dira.

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
