<h1 style="justify-content:space-between">3Ti.Site · Pensa sense fronteres<img src="//i-01.eu.org/i18n/logo.svg" style="margin-top:-1px;width:42px"></h1>

3Ti.Site, un generador de llocs estàtics multilingües, pot traduir automàticament Markdown a [més de cent idiomes diferents](https://github.com/i18n-site/node/blob/main/lang/src/index.js) .

<img src="//i-01.eu.org/i18n/lang.webp" alt="" />

És possible que algunes persones vulguin preguntar, ara que els navegadors tenen funcions de traducció integrades, és innecessari internacionalitzar el lloc web?

Vull dir que **només internacionalitzant tot el lloc podem donar suport a la cerca multilingüe de text complet al lloc i l&#39;optimització de motors de cerca** .

## Seqüència

"Bíblia·Gènesi":

> Els antics no distingien entre llengües. Van néixer amb orgull i volien construir una torre alta amb el cim arribant al cel.
> <blockquote><p>Déu estava disgustat amb l&#39;arrogància de l&#39;home, així que va escampar tots els éssers vius per diversos llocs, incapaços d&#39;entendre&#39;s.</p></blockquote>
> <blockquote><p>Des de llavors, als humans els ha costat comunicar-se, les disputes han continuat i no hi ha torre de Babel al món.</p></blockquote>

La novel·la de ciència-ficció &quot;Three-Body&quot; (pronunciació xinesa: `3Ti` ) narra una civilització alienígena que es comunica mitjançant ones electromagnètiques, no té barreres lingüístiques i és tecnològicament pròspera.

Espero que amb l'ajuda d'aquesta eina, la gent de la terra sigui com persones de tres cossos, la comunicació no es veurà restringida pel llenguatge i tota la humanitat es tornarà a unir.

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
