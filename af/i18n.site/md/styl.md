# Styl Lys

[Klik hier om deur die bronlêer van hierdie bladsy te blaai](//raw.githubusercontent.com/i18n-site/md/refs/heads/main/$LANG/i18n.site/md/styl.md) om te sien hoe om `MarkDown` in die volgende style te skryf.

## & &

__ is __~~ deurhaal~~ en **vet** aanbiedingsteks.

Dit is soos volg geskryf:

```txt
这是__下划线__、~~删除线~~和**加粗**的演示文本。
```

Die `MarkDown` ontleder van die `i18n.site` webwerfbou-nutsding het die onderstreep-, deurstreep- en vetsintaksis geoptimaliseer. Dit kan in werking tree sonder spasies voor en na die merk, wat dit makliker maak om dokumente in tale soos China, Japan en Korea te skryf. wat nie spasies as skeiers gebruik nie.

Uitgebreide leeswerk : [tree Nuggets Markdown -sintaksis ( `**……**` ) soms nie in werking nie?](//juejin.cn/post/7064565848421171213)

## Haal Aan

### Enkele Reël Kwotasie

> Dit is my aard dat my talente nuttig sal wees, en ek sal terugkom nadat al my geld bestee is.
<p style="text-align:right">─ Li Bai</p>

### Veelvuldige Reël Aanhalings

> Nog 'n unieke voordeel van wetenskapfiksie is die uiters breë omvang daarvan.
> ’n “Oorlog en Vrede”, met ’n miljoen woorde, beskryf net die geskiedenis van ’n streek vir etlike dekades;
> En wetenskapfiksie-romans soos Asimov se "The Final Answer" beskryf die miljarde jare se geskiedenis van die hele heelal, insluitend mense, lewendig in net 'n paar duisend woorde.
> Sulke inklusiwiteit en vrymoedigheid is onmoontlik om in tradisionele literatuur te bereik.
<p style="text-align:right">── Liu Cixin</p>

### Wenk `> [!TIP]`

> [!TIP]
> Onthou om die geldigheid van jou paspoort en visum na te gaan. Verstreke dokumente kan nie die land binnekom of verlaat nie.

Dit is soos volg geskryf

```
> [!TIP]
> your content
```

### Opmerking `> [!NOTE]`

> [!NOTE]
> As jy vir my 'n boodskap stuur en ek antwoord dadelik, wat beteken dit?
> Dit wys dat ek baie daarvan hou om met selfone te speel.


### Waarskuwing `> [!WARN]`

> [!WARN]
> Wanneer jy op 'n wilde avontuur gaan, is dit belangrik om veilig te bly.
> Verlede week het 'n groep klimmers 'n storm halfpad teen die berg teëgekom en moes ontruim omdat hulle nie die weervoorspelling nagegaan het nie.
> Onthou, enige buitelugaktiwiteit vereis voldoende voorbereiding en aandag aan die weer.

## To-Do List

- [x] Ontwerp produk prototipe en kenmerklys
- [ ] Bepaal tegnologiestapel en ontwikkelingsinstrumente
- [ ] Ontwikkel produkontwikkelingtydlyne en mylpale

## Lys

### Bestelde Lys

1. hardloop
   1. Drie keer per week, 5 kilometer elke keer
   1. Hardloop 'n halfmarathon
1. gimnasium opleiding
   1. Twee keer per week, 1 uur elke keer
   1. Fokus op kernspiere

### Ongeordende Lys

* sosiale geleenthede
  - Neem deel aan bedryfsuitruilvergaderings
    + Tegnologie deel sessie
    + Entrepreneurskap-uitruilvergadering
  - Organiseer 'n byeenkoms van vriende
    + Buitelug BBQ
    + fliekaand

## Blad

| denker       | Hoofbydraes                           |
|--------------|------------------------------------|
| Confucius         | Stigter van Confucianisme |
| Sokrates     | vader van Westerse filosofie  |
| Nietzsche         | Superman-filosofie, wat tradisionele moraliteit en godsdiens kritiseer       |
| marx       | kommunisme |

## Kode

### Inlyn Kode

In die groot wêreld van programmeertale beklee `Rust` , `Python` , `JavaScript` en `Go` elk 'n unieke posisie.

### Veelvuldige Reëls Kode

```rust
fn main() {
  let x = 10;
  println!("Hello, world! {}", x);
}
```