<h1 style="justify-content:space-between">3Ti.Site · Think No Borders<img src="//i-01.eu.org/i18n/logo.svg" style="margin-top:-1px;width:42px"></h1>

3Ti.Site, un generador de llocs estàtics multilingües, pot traduir automàticament Markdown a [més de cent idiomes diferents](https://github.com/i18n-site/node/blob/main/lang/src/index.js) .

<img src="//i-01.eu.org/i18n/lang.webp" alt="" />

És possible que algunes persones vulguin preguntar, ara que els navegadors tenen funcions de traducció integrades, és innecessari internacionalitzar el lloc web?

Vull dir que **només internacionalitzant tot el lloc podem donar suport a la cerca multilingüe de text complet al lloc i l'optimització de motors de cerca** .

## Seqüència

"Bíblia·Gènesi":

> Els antics no distingien entre llengües. Van construir torres que arribaven al cel per arribar a la porta de Déu per promoure el prestigi de la raça humana.
>
> El Déu va dir que la gent és una tribu pròpia, amb la mateixa cultura i espècie. Construir una torre és només un preludi. Ara pots aconseguir el que vulguis i no tindreu res a témer.
>
> Llavors Déu va venir i va dispersar la gent per diversos llocs, sense poder-se entendre.
>
> A partir d'aleshores, la humanitat va lluitar per comunicar-se, els conflictes van sorgir sense parar i el món ja no va veure una torre que arribés als cels.

La novel·la de ciència-ficció &quot;Three-Body&quot; (pronunciació xinesa: `3Ti` ) narra una civilització alienígena que es comunica mitjançant ones electromagnètiques, no té barreres lingüístiques i és tecnològicament pròspera.

Espero que amb l'ajuda d'aquesta eina, la gent de la terra sigui com persones de tres cossos, la comunicació no es veurà restringida pel llenguatge i tota la humanitat es tornarà a unir.

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
