# Llista D'estils

[Feu clic aquí per navegar pel fitxer font d'aquesta pàgina](//raw.githubusercontent.com/i18n-site/md/refs/heads/main/$LANG/i18n.site/md/styl.md) per veure com escriure `MarkDown` en els estils següents.

## & &

Això és __ subratllat __ ,~~ ratllat~~ i text de presentació **en negreta** .

Està escrit de la següent manera:

```txt
这是__下划线__、~~删除线~~和**加粗**的演示文本。
```

L'analitzador `MarkDown` de l'eina de creació de llocs web `i18n.site` ha optimitzat la sintaxi de subratllat, ratllat i negreta. Pot tenir efecte sense espais abans i després de la marca, facilitant la redacció de documents en idiomes com la Xina, el Japó i Corea. que no utilitzen espais com a separadors.

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
> Quan vas a una aventura salvatge, és important estar segur.
> La setmana passada, un grup d'escaladors es va trobar amb una tempesta a mitja muntanya i es va haver d'evacuar perquè no van comprovar la previsió meteorològica.
> Recordeu que qualsevol activitat a l'aire lliure requereix una preparació adequada i atenció al temps.

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

## codi

### Codi en Línia

En el vast món dels llenguatges de programació, `Rust` , `Python` , `JavaScript` i `Go` ocupen cadascun una posició única.

### Múltiples Línies De Codi

```rust
fn main() {
  let x = 10;
  println!("Hello, world! {}", x);
}
```