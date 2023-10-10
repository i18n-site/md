<h1 style="justify-content:space-between">3Ti.Site · Pensant sense fronteres<img src="//i-01.eu.org/i18n/logo.svg" style="margin-top:-1px;width:42px"></h1>

3Ti.Site, un generador de llocs estàtics multilingües, pot traduir automàticament Markdown a [més de cent idiomes diferents](https://github.com/i18n-site/node/blob/main/lang/src/index.js) .

<img src="//i-01.eu.org/i18n/lang.webp" alt="" />

Algunes persones poden preguntar, ara que els navegadors tenen funcions de traducció integrades, és innecessari internacionalitzar el lloc web?

Vull dir que **només internacionalitzant tot el lloc podem donar suport a la cerca multilingüe de text complet al lloc i l'optimització de motors de cerca** .

## Introducció

Bíblia · Gènesi :

> En l'antiguitat, quan les llengües eren una, la humanitat va construir una torre que arribava fins al cel, un portal al domini de Déu, proclamant el poder de la humanitat.
>
> Déu va declarar: "Els homes s'uneixen com una tribu, amb una llengua compartida, i aquesta torre no és més que un pròleg. Ara aconsegueixen el seu desig, i no hi haurà més por".
>
> Així, Déu va baixar, dispersant la gent a diferents racons, utilitzant diferents idiomes.
>
> A partir d'aleshores, la comunicació humana es va convertir en un repte, les disputes sense fi, i ja no hi havia una torre que toqués el cel.

La novel·la de ciència-ficció &quot;Three-Body&quot; (pronunciació xinesa: `3Ti` ) narra una civilització alienígena que es comunica mitjançant ones electromagnètiques, no té barreres lingüístiques i és tecnològicament pròspera.

Espero crear una eina que permeti a la gent de la terra ser com persones de tres cossos, comunicar-se sense estar lligats pel llenguatge i unir de nou a tota la humanitat.

## Tutorial

## Introducció A La Funció

### Mantenir El Format Markdown

### Modificar La Traducció

Després de modificar la traducció, heu de tornar a executar `./i18n.sh` per actualitzar la memòria cau.

### Notes De Traducció

Els comentaris de traducció han d'indicar l'idioma després de \```, com ara ` ```rust` .

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
