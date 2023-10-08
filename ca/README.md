# I18N.SITE · Llengua Sense Fronteres<img Src="//i-01.eu.org/i18n.svg" Style="float:right;width:42px;margin-Top:6px">

I18N.SITE, un generador de llocs estàtics en diversos idiomes, pot traduir automàticament Markdown a [més de cent idiomes diferents](https://github.com/i18n-site/node/blob/main/lang/src/index.js) .

<img src="//i-01.eu.org/i18n.lang.webp" alt="" />

És possible que algunes persones vulguin preguntar, ara que els navegadors tenen funcions de traducció integrades, és innecessari internacionalitzar el lloc web?

Vull dir que **només internacionalitzant tot el lloc podem donar suport a la cerca multilingüe de text complet al lloc i l&#39;optimització de motors de cerca** .

## Tutorial

## Introducció A La Funció

### Mantenir El Format Markdown

### Modificar La Traducció

Després de modificar la traducció, heu de tornar a executar `./i18n.sh` per actualitzar la memòria cau.

### Notes De Traducció

Els comentaris de traducció han d&#39;indicar l&#39;idioma després de \```, com ara ` ```rust` .

Actualment admet la traducció de comentaris per a rust, c, cpp, java, js, coffee, python i bash.

Editeu [tran_md/src/comment.coffee](https://github.com/i18n-site/node/blob/main/tran_md/src/comment.coffee) per afegir suport de traducció per als comentaris en més idiomes.

### Configura El Proxy

La configuració de les variables d'entorn següents permet que les trucades de l'API de Google Translate passin pel servidor intermediari.

```bash
export https_proxy=http://127.0.0.1:7890
```

### Incrustació De Variables

```
test: 测试变量<br 0>嵌入
```

### Buida La Memòria Cau

```bash
rm -rf .i18n/.cache
```
