# Llista D'estils

[Feu clic aquí per navegar pel fitxer font d'aquesta pàgina](//raw.githubusercontent.com/i18n-site/md/refs/heads/main/zh/i18n.site/md/styl.md) per veure com escriure `MarkDown` en els estils següents.

## Bloc Plegat

|+| Què és MarkDown?

    MarkDown és un llenguatge de marques lleuger que permet als usuaris crear documents amb format en un format de text senzill que és fàcil de llegir i escriure.

    S'utilitza habitualment per escriure documentació, articles de blocs, llibres electrònics, publicacions en fòrums, etc.

    Té els següents avantatges:

    1. Fàcil d'aprendre
    1. Molt llegible
    1. Control de versions amigable

       Com que els documents `MarkDown` estan en format de text senzill, els programadors els poden incorporar fàcilment als sistemes de control de versions (com ara `git` ).

       Això fa que el seguiment dels canvis i la col·laboració sigui molt més senzill, especialment en el desenvolupament de l'equip.

|-| Què és I18N?

    "I18N" és l'abreviatura de "Internacionalització".

    Com que la paraula "Internacionalització" té 18 lletres entre "I" i "N", s'utilitza "I18N" per simplificar la representació.

    En termes senzills, vol dir donar suport a diversos idiomes.


El bloc plegable és una sintaxi ampliada de `i18n.site` a `MarkDown` , escrita de la següent manera :

```
|+| TITLE
    MARKDOWN CONTENT
    YOUR CAN WRITE MULTI LINE CONTENT
```

amb `|+| `或`|-| La línia que comença amb ` generarà un bloc plegable, i el contingut del bloc plegable són les línies posteriors amb el mateix nivell de sagnat (els paràgrafs estan separats per línies en blanc).

Passa'|-| `标记的折叠块默认展开，`|+| `Els blocs col·lapsats etiquetats es repleguen per defecte.

## & &

Això és __ subratllat __ ,~~ ratllat~~ i text de presentació **en negreta** .

Està escrit de la següent manera:

```txt
这是__下划线__、~~删除线~~和**加粗**的演示文本。
```

L'analitzador `MarkDown` de l'eina de creació de llocs web `i18n.site` ha optimitzat la sintaxi de subratllat, ratllat i negreta. Pot tenir efecte sense espais abans i després de la marca, de manera que és més fàcil escriure documents en idiomes com la Xina, el Japó i Corea. no utilitzeu espais com a separadors.

Lectura : [Per què de vegades la sintaxi Markdown de Nuggets ( `**……**` ) no té efecte?](//juejin.cn/post/7064565848421171213)

## Cita

### Cita D'una Sola Línia

> És la meva naturalesa que els meus talents siguin útils, i tornaré després que s'hagin gastat tots els meus diners.
<p style="text-align:right">─ Li Bai</p>

### Cites De Diverses Línies

> Un altre avantatge únic de la ciència ficció és el seu abast extremadament ampli.
> Una "Guerra i pau", amb un milió de paraules, només descriu la història d'una regió durant diverses dècades;
> I novel·les de ciència-ficció com "La resposta final" d'Asimov descriuen de manera vívida els milers de milions d'anys d'història de tot l'univers, inclosos els éssers humans, amb només uns quants milers de paraules.
> Aquesta inclusió i audàcia són impossibles d'aconseguir en la literatura tradicional.
<p style="text-align:right">── Liu Cixin</p>

### Consell `> [!TIP]`

> [!TIP]
> Recordeu comprovar la validesa del vostre passaport i visat. Els documents caducats no poden entrar ni sortir del país.

Està escrit de la següent manera

```
> [!TIP]
> YOUR CONTENT
```

### Observació `> [!NOTE]`

> [!NOTE]
> Si m'envieu un missatge i responc a l'instant, què vol dir això?
> Això demostra que m'agrada molt jugar amb els telèfons mòbils.


### Avís `> [!WARN]`

> [!WARN]
> Quan vas a una aventura salvatge, és important estar segur. Aquests són alguns consells clau de seguretat:
>
> - **Consulta la previsió meteorològica** : La setmana passada, un grup d'escaladors es va trobar amb una tempesta a mitja muntanya perquè no van consultar la previsió meteorològica i van haver d'evacuar urgentment.
> - **Porteu l'equip necessari** : assegureu-vos de portar prou menjar, aigua i material de primers auxilis.
> - **Comprendre el terreny** : familiaritzar-se amb el terreny i les rutes de la zona d'aventura amb antelació per evitar perdre's.
> - **Mantingueu-vos connectats** : mantingueu-vos connectats amb el món exterior i assegureu-vos que tothom pugui tornar amb seguretat.
>
> Recordeu que la seguretat sempre és el primer!

## Llista De Tasques Pendents

- [x] Disseny de prototips de producte i llista de característiques
- [ ] Determinar la pila de tecnologia i les eines de desenvolupament
- [ ] Desenvolupar terminis i fites de desenvolupament de productes

## Llista

### Llista Ordenada

1. corrent
   1. Tres cops per setmana, 5 quilòmetres cada cop
   1. Corre una mitja marató
1. entrenament al gimnàs
   1. Dos cops per setmana, 1 hora cada cop
   1. Centra't en els músculs centrals

### Llista No Ordenada

* esdeveniments socials
  - Participar en reunions d'intercanvi del sector
    + Sessió per compartir tecnologia
    + Trobada d'intercanvi d'emprenedoria
  - Organitzar una trobada d'amics
    + Barbacoa a l'aire lliure
    + nit de cinema

## Fulla

| pensador       | Principals aportacions                           |
|--------------|------------------------------------|
| Confuci         | Fundador del confucianisme |
| Sòcrates     | pare de la filosofia occidental  |
| Nietzsche         | Filosofia de Superman, criticant la moral i la religió tradicionals       |
| marx       | comunisme |

### Optimització De La Pantalla Gran De La Taula

Per a taules relativament grans, es poden utilitzar els mètodes següents per optimitzar l'efecte de visualització:

1. Utilitzeu una font més petita

   Per exemple, emboliqui la taula amb `<div style="font-size:14px">` i `</div>` .

   Tingueu en compte que l'etiqueta `div` ha d'ocupar la seva pròpia línia i deixar línies en blanc abans i després.
1. Per a text més llarg en una cel·la, inseriu `<br>` per embolicar la línia
1. Si una columna s'estreny massa curta, podeu afegir `<div style="width:100px">xxx</div>` a la capçalera per ampliar l'amplada, i també podeu afegir [`<wbr>` a la capçalera](//developer.mozilla.org/docs/Web/HTML/Element/wbr) per controlar la posició del salt de línia.

Un exemple de demostració és el següent:

<div style="font-size:14px">

| nació       | <div style="width:70px;margin:auto">nom del pensador</div> | Era | Principals aportacions ideològiques                                                       |
|------------|------------------------------------------------|-----------------|--------------------------------------------------------------------|
| Xina       | Confuci                                           | 551-479 aC   | El fundador del confucianisme va proposar conceptes bàsics com ara "benevolencia" i "propietat" i va posar èmfasi en el cultiu moral i l'ordre social. |
| l'antiga Grècia     | Sòcrates                                       | 469-399 aC   | Explorar la veritat a través del diàleg i la dialèctica proposa "coneix-te a tu mateix" i posa l'accent en el pensament racional.         |
| França       | Voltaire                                         | 1694-1778       | Figures representatives de la Il·lustració van defensar la racionalitat, la llibertat i la igualtat, i van criticar la superstició religiosa i el domini autoritari.   |
| Alemanya       | Kant                                           | 1724-1804       | Presentar la "Crítica de la raó pura"<br> Explora els fonaments de la moral, la llibertat i el coneixement, posant èmfasi en la raó pràctica     |

</div>

El pseudocodi de l'exemple anterior és el següent:

```md

<div style="font-size:14px">

| xx | <div style="width:70px;margin:auto">xx<wbr>xx</div> | xx | xx |
|----|----|-----------|----|
| xx | xx | xx<br>xxx | xx |

</div>

```

## Codi

### Codi en Línia

En el vast món dels llenguatges de programació, `Rust` , `Python` , `JavaScript` i `Go` ocupen cadascun una posició única.

### Múltiples Línies De Codi

```rust
fn main() {
  let x = 10;
  println!("Hello, world! {}", x);
}
```

## Salt De Línia Dins Del Paràgraf

Els salts de línia dins dels paràgrafs es poden aconseguir sense afegir línies en blanc entre línies.
L'espaiat entre els salts de línia dins dels paràgrafs és més petit que l'espai entre paràgrafs.

per exemple:

> Viu com una gran persona,
> La mort també és un heroi fantasma.
> Encara trobo a faltar Xiang Yu,
> Reticent a creuar Jiangdong.
>
> Li Qingzhao va utilitzar la tràgica història de Xiang Yu per insinuar la incompetència de la dinastia Song.
> Expressar disconformitat amb la cort imperial per rendir-se sense lluitar.