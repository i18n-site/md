# Liste Ya Ba Styles

[Finá awa mpo na kotala fisyé source ya lokasa oyo](//raw.githubusercontent.com/i18n-site/md/refs/heads/main/$LANG/i18n.site/md/styl.md) mpo na komona ndenge ya kokoma `MarkDown` na ba styles oyo elandi.

## & Na Nzela Ya &

Oyo ezali Souligner __ , __~~ strikethrough na nzela ya grève~~ mpe makomi ya kolakisa **na moindo makasi** .

Ekomami boye :

```txt
这是__下划线__、~~删除线~~和**加粗**的演示文本。
```

Parser `MarkDown` ya esaleli ya kotonga site internet `i18n.site` ebongisi syntaxe ya souligner, strikethrough, mpe ya gras Ekoki kozua effet sans espaces avant et après marque, kosala que ezala facile kokoma mikanda na minoko lokola Chine, Japon, na Corée oyo esalelaka bisika te lokola bakaboli.

Botangi ya molai : [Mpo na nini syntaxe ya Nuggets’ Markdown ( `**……**` ) ezwamaka ntango mosusu te?](//juejin.cn/post/7064565848421171213)

## Kozongela

### Citatio Ya Molɔngɔ Moko

> Ezali bomoto na ngai ete batalanta na ngai ekozala na ntina, mpe nakozonga nsima ya kobimisa mbongo na ngai nyonso.
<p style="text-align:right">─ Li Bai, oyo azali</p>

### Ba Citations Ya Ba Lignes Ebele

> Litomba mosusu oyo ekeseni na mosusu nyonso ya science fiction ezali ndenge oyo ezali monene mpenza.
> "Etumba mpe Kimya", na maloba milio moko, ezali kolimbola kaka lisolo ya etuka moko uta bambula mingi;
> Mpe mikanda ya siansi lokola "Eyano ya nsuka" ya Asimov elobeli polele bamiliare ya bambula ya lisolo ya molɔ́ngɔ́ mobimba, ata mpe bato, na mwa bankóto ya maloba mpamba.
> Bosangisi bato banso mpe mpiko ya boye ekoki kosalema te na mikanda ya bonkoko.
<p style="text-align:right">── Liu Cixin, oyo azali na mbongo mingi</p>

### Toli `> [!TIP]`

> [!TIP]
> Kobosana te kotala validité ya passeport mpe visa na yo Mikanda oyo esilaki ekoki kokota to kobima na mboka te.

Ekomami boye

```
> [!TIP]
> YOUR CONTENT
```

### Liyebisi `> [!NOTE]`

> [!NOTE]
> Soki otindeli ngai message mpe na répondre mbala moko, yango elingi koloba nini?
> Yango emonisi ete nalingaka mpenza kosakana na batelefone ya mabɔkɔ.


### Kebisa `> [!WARN]`

> [!WARN]
> Tango ozali kokende na aventure ya zamba, ezali important ozala na sécurité.
> Pɔsɔ eleki, etuluku moko ya bato oyo bazalaki komata ngomba bakutanaki na mopɛpɛ makasi na katikati ya ngomba mpe basengelaki kolongwa mpo balongaki te kotala ndenge ntango ezalaki.
> Kobosana te ete mosala nyonso ya libanda esɛngaka komibongisa malamu mpe kotya likebi na ntango.

## Liste Ya Makambo Oyo Esengeli Kosala

- [x] Design ya prototype ya produit na liste ya ba fonctionnalités
- [ ] Koyeba stack ya technologie na bisaleli ya développement
- [ ] Bobongisa ba calendriers ya développement ya produit na ba milestones

## Liste

### Liste Oyo Esalemi Na Molɔngɔ

1. kopota mbango
   1. Mbala misato na pɔsɔ, kilomɛtrɛ 5 mbala nyonso
   1. Kima mbangu ya demi marathon
1. formation ya gym
   1. Mbala mibale na pɔsɔ, ngonga 1 mbala nyonso
   1. Tyá likebi na misisa ya moboko

### Liste Oyo Ezali Na Molɔngɔ Te

* ba événements socials
  - Kosangana na makita ya bosangisi ya industrie
    + Session ya kokabola technologie
    + Likita ya échange ya entreprenariat
  - Bongisá liyangani ya baninga
    + BBQ ya libanda
    + butu ya filme

## Lokasa

| moto oyo akanisaka       | Makabo minene                           |
|--------------|------------------------------------|
| Confucius oyo azali         | Mobandisi ya Lingomba ya Confucius |
| Socrate, oyo     | tata ya filozofi ya mikili ya Mpótó  |
| Nietzsche azali moto ya mayele         | Philosophie ya superman, ko critiquer moralité traditionnelle na religion       |
| marx       | communisme |

## Code

### Code Ya Kati Ya Molongo

Na mokili monene ya minoko ya programmation, `Rust` , `Python` , `JavaScript` mpe `Go` mokomoko ezali na esika oyo ekeseni na mosusu nyonso.

### Milɔngɔ Mingi Ya Code

```rust
fn main() {
  let x = 10;
  println!("Hello, world! {}", x);
}
```