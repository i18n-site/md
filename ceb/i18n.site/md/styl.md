# Listahan Sa Estilo

[Pag-klik dinhi aron ma-browse ang gigikanan nga file sa kini nga panid](//raw.githubusercontent.com/i18n-site/md/refs/heads/main/$LANG/i18n.site/md/styl.md) aron makita kung giunsa pagsulat `MarkDown` sa mga musunod nga istilo.

## Linyahi Ang & Strikethrough &

__ mao ang Underscore __ ,~~ strikethrough~~ ug **maisog** nga teksto sa presentasyon.

Kini gisulat ingon sa mosunod:

```txt
这是__下划线__、~~删除线~~和**加粗**的演示文本。
```

Ang `MarkDown` parser sa `i18n.site` nga himan sa pagtukod sa website nag-optimize sa underline, strikethrough, ug bold nga syntax Mahimo kini nga epektibo nga wala’y mga espasyo sa wala pa ug pagkahuman sa marka, nga nagpadali sa pagsulat sa mga dokumento sa mga pinulongan sama sa China, Japan, ug Korea. nga dili mogamit sa mga luna isip mga separator.

Extended reading : [Ngano nga ang Nuggets’ Markdown syntax ( `**……**` ) usahay dili mu-epekto?](//juejin.cn/post/7064565848421171213)

## Kinutlo

### Usa Ka Linya Nga Kinutlo

> Kini mao ang akong kinaiya nga ang akong mga talento mahimong mapuslanon, ug ako mobalik human sa tanan nga akong salapi nga nagasto.
<p style="text-align:right">─ Li Bai</p>

### Daghang Mga Kinutlo Sa Linya

> Ang laing talagsaong bentaha sa science fiction mao ang hilabihan ka lapad nga kasangkaran niini.
> Usa ka "Gubat ug Kalinaw", nga adunay usa ka milyon nga mga pulong, naghulagway lamang sa kasaysayan sa usa ka rehiyon sulod sa pipila ka mga dekada;
> Ug ang mga nobela sa science fiction sama sa "The Final Answer" ni Asimov klaro nga naghulagway sa binilyon ka tuig nga kasaysayan sa tibuok uniberso, lakip ang mga tawo, sa pipila lang ka libo nga mga pulong.
> Ang ingon nga pagka-inklusibo ug kaisog imposible nga makab-ot sa tradisyonal nga literatura.
<p style="text-align:right">── Liu Cixin</p>

### Tip `> [!TIP]`

> [!TIP]
> Hinumdumi nga susihon ang kabalido sa imong pasaporte ug ang mga expired nga dokumento dili makasulod o makagawas sa nasud.

Kini gisulat ingon sa mosunod

```
> [!TIP]
> YOUR CONTENT
```

### Pahinumdom `> [!NOTE]`

> [!NOTE]
> Kung padad-an ko nimo og mensahe ug mo-reply dayon ko, unsay pasabot ana?
> Kini nagpakita nga ganahan kaayo ko magdula og mga cellphone.


### Pahimangno `> [!WARN]`

> [!WARN]
> Kung moadto sa usa ka ihalas nga adventure, hinungdanon nga magpabilin nga luwas.
> Sa miaging semana, usa ka grupo sa mga tigkatkat ang nakasugat og bagyo sa tungatunga sa bukid ug kinahanglan nga mobakwit tungod kay napakyas sila pagsusi sa forecast sa panahon.
> Hinumdomi, ang bisan unsang kalihokan sa gawas nagkinahanglan og igong pagpangandam ug pagtagad sa panahon.

## Listahan Sa Buhaton

- [x] Pagdesinyo sa prototype sa produkto ug lista sa bahin
- [ ] Tinoa ang stack sa teknolohiya ug mga himan sa pagpalambo
- [ ] Pagpalambo sa mga timeline sa pag-uswag sa produkto ug mga milestone

## Listahan

### Gi-Order Nga Lista

1. nagdagan
   1. Tulo ka beses sa usa ka semana, 5 ka kilometro matag higayon
   1. Pagdagan og tunga nga marathon
1. pagbansay sa gym
   1. Kaduha sa usa ka semana, 1 ka oras matag higayon
   1. Pag-focus sa core muscles

### Dili Han-Ay Nga Listahan

* sosyal nga mga panghitabo
  - Apil sa mga miting sa pagbayloay sa industriya
    + Sesyon sa pagpaambit sa teknolohiya
    + Pulong sa pagbinayloay sa entrepreneurship
  - Pag-organisar ug panagtapok sa mga higala
    + BBQ sa gawas
    + gabii sa sine

## Panid

| tighunahuna       | Pangunang kontribusyon                           |
|--------------|------------------------------------|
| Confucius         | Nagtukod sa Confucianism |
| Socrates     | amahan sa pilosopiya sa kasadpan  |
| Nietzsche         | Ang pilosopiya sa Superman, nagsaway sa tradisyonal nga moralidad ug relihiyon       |
| marx       | komunismo |

## kodigo

### Inline Nga Code

Sa halapad nga kalibutan sa mga programming language, `Rust` , `Python` , `JavaScript` ug `Go` ang matag usa nag-okupar sa usa ka talagsaon nga posisyon.

### Daghang Linya Sa Code

```rust
fn main() {
  let x = 10;
  println!("Hello, world! {}", x);
}
```