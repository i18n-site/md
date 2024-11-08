# Liste Ya Ba Styles

[Finá awa mpo na kotala fisyé source ya lokasa oyo](//raw.githubusercontent.com/i18n-site/md/refs/heads/main/zh/i18n.site/md/styl.md) mpo na komona ndenge ya kokoma `MarkDown` na ba styles oyo elandi.

## Bloc Plié

|+| MarkDown ezali nini?

    MarkDown ezali monoko ya bilembo ya pete oyo epesaka nzela na basaleli mpo na kosala mikanda oyo esalemi na format na format ya makomi ya pete oyo ezali pete mpo na kotanga mpe kokoma.

    Esalemaka mingi pona kokoma mikanda, ba articles ya blog, ba e-books, ba posts ya forum, etc.

    Ezali na matomba oyo:

    1. Ezali mpasi te mpo na koyekola
    1. Ekoki kotángama mingi
    1. Contrôle ya version amical

       Lokola mikanda `MarkDown` ezali na format ya texte ya pamba, ba programmeurs bakoki ko incorporer yango facilement na ba systèmes ya contrôle ya version (lokola `git` ).

       Yango esalaka ete kolandela mbongwana mpe kosala elongo ezala pete mingi, mingi mingi na bokolisi ekipi.

|-| I18N ezali nini?

    "I18N" ezali mokuse ya "Internationalisation".

    Lokola liloba "Internationalisation" ezali na ba lettres 18 entre "I" na "N", "I18N" esalelami pona ko simplifier représentation.

    Na maloba ya laïc, elingi koloba kosunga minoko ebele.


Bloc pliage ezali syntaxe extendu ya `i18n.site` à `MarkDown` , ekomami boye :

```
|+| TITLE
    MARKDOWN CONTENT
    YOUR CAN WRITE MULTI LINE CONTENT
```

na `|+| `或`|-| Molongo oyo ebandi na ` ekobimisa bloc pliable, mpe contenus ya bloc pliable ezali ba lignes oyo elandi na niveau ya indentation moko (ba paragraphes ekabwani na ba lignes ya pamba).

Koleka`|-| `标记的折叠块默认展开，`|+| `Ba blocs collapsés tagged ezo collapsés par défaut.

## & Na Nzela Ya &

Oyo ezali Souligner __ , __~~ strikethrough na nzela ya grève~~ mpe makomi ya kolakisa **na moindo makasi** .

Ekomami boye :

```txt
这是__下划线__、~~删除线~~和**加粗**的演示文本。
```

Parser `MarkDown` ya esaleli ya kotonga site internet `i18n.site` a optimisé souligner, strikethrough, na syntaxe ya gras Ekoki kozua effet sans espaces avant et après marque, kosala que ezala facile kokoma mikanda na minoko lokola Chine, Japon, na Corée oyo kosalela bisika te lokola bakaboli.

Botangi ya molai : [Mpo na nini syntaxe ya Nuggets’ Markdown ( `**……**` ) ezwamaka ntango mosusu te?](//juejin.cn/post/7064565848421171213)

## Kozongela

### Citatio Ya Molɔngɔ Moko

> Ezali bomoto na ngai ete batalanta na ngai ekozala na ntina, mpe nakozonga nsima ya kobimisa mbongo na ngai nyonso.
<p style="text-align:right">─ Li Bai, oyo azali</p>

### Ba Citations Ya Milɔngɔ Ebele

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
> Tango ozali kokende na aventure ya zamba, ezali important ozala na sécurité. Talá mwa batoli ya ntina oyo etali kobatela nzoto:
>
> - **Tala pronostic ya météo** : Pɔsɔ eleki, etuluku moko ya bato oyo bazalaki komata ngomba bakutanaki na mopɛpɛ makasi na katikati ya ngomba mpo batalaki pronostic ya météo te mpe basengelaki kolongwa nokinoki.
> - **Mema biloko oyo esengeli** : Sala que omema biloko ya kolia, mayi pe biloko ya secours ya liboso ekoki.
> - **Comprendre terrain** : Mesana liboso na terrain mpe ba routes ya esika ya aventure mpo obunga te.
> - **Tikala na boyokani** : Tikala na boyokani na mokili ya libanda mpe sala ete moto nyonso azonga na kimia.
>
> Kobosana te ete libateli ezalaka ntango nyonso na esika ya liboso!

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
    + Likita ya Bosangisi ya Entreprenariat
  - Bongisá liyangani ya baninga
    + BBQ ya libanda
    + butu ya filme

## Lokasa

| moto oyo akanisaka       | Makabo minene                           |
|--------------|------------------------------------|
| Confucius oyo azali         | Mobandisi ya Lingomba ya Confucius |
| Socrate, oyo azali     | tata ya filozofi ya mikili ya Mpótó  |
| Nietzsche azali moto ya mayele         | Philosophie ya superman, ko critiquer moralité traditionnelle na religion       |
| marx       | communisme |

### Optimisation Ya Écran Ya Tableau Ya Munene

Mpo na ba tableaux relativement minene, ba méthodes oyo elandi ekoki kosalelama mpo na ko optimiser effet d’affichage:

1. Salelá makomi ya mikemike

   Na ndakisa, zingisá mesa na `<div style="font-size:14px">` mpe `</div>` .

   Simbá ete elembo `div` esengeli kozwa molɔngɔ na yango moko, mpe kotika milɔngɔ ya mpamba liboso mpe nsima na yango.
1. Mpo na makomi molai na selile, kotia `<br>` mpo na kozinga molongo
1. Soki colonne efinami mokuse mingi, okoki kobakisa `<div style="width:100px">xxx</div>` na motó mpo na kopanzana na bonene, mpe okoki mpe kobakisa [`<wbr>` na motó](//developer.mozilla.org/docs/Web/HTML/Element/wbr) mpo na kotambwisa esika ya kobuka milɔngɔ.

Ndakisa ya elakiseli ezali boye:

<div style="font-size:14px">

| ekolo       | <div style="width:70px;margin:auto">kombo ya moto oyo akanisaka</div> | Era | Ba contributions idéologiques ya minene                                                       |
|------------|------------------------------------------------|-----------------|--------------------------------------------------------------------|
| Chine       | Confucius oyo azali                                           | 551-479 liboso ya ntango na biso   | Mobandisi ya Confucius a proposaki ba concepts ya moboko lokola "benevolence" na "propriété" mpe a souligner cultivation morale mpe ordre social. |
| grèce ya kala     | Socrate, oyo azali                                       | 469-399 liboso ya ntango na biso   | Koluka bosolo na nzela ya dialogue mpe dialectique e proposer "miyeba" mpe e souligner pensée rational         |
| France       | Voltaire azali moto ya mayele                                         | 1694-1778       | Bato oyo bazalaki bamonisi ya eleko ya Éclairage bazalaki koloba ete bato ya mayele, bonsomi mpe bokokani, mpe bazalaki kotyola biyambayamba ya mangomba mpe boyangeli ya bokonzi.   |
| Allemagne       | Kant                                           | 1724-1804       | Botia liboso "Critique ya Raison Pure".<br> Ezali kotalela miboko ya bizaleli malamu, bonsomi, mpe boyebi, kopesaka ntina mingi na makanisi ya kosalela     |

</div>

Pseudocode ya ndakisa oyo ezali likolo ezali boye :

```md

<div style="font-size:14px">

| xx | <div style="width:70px;margin:auto">xx<wbr>xx</div> | xx | xx |
|----|----|-----------|----|
| xx | xx | xx<br>xxx | xx |

</div>

```

## Code

### Code Ya Kati Ya Molongo

Na mokili monene ya minoko ya programɛ, `Rust` , `Python` , `JavaScript` mpe `Go` mokomoko ezali na esika oyo ekeseni na mosusu nyonso.

### Milɔngɔ Mingi Ya Code

```rust
fn main() {
  let x = 10;
  println!("Hello, world! {}", x);
}
```

## Bokabwani Ya Milɔngɔ Na Kati Ya Paragrafe

Kokata milɔngɔ na kati ya baparagrafe ekoki kosalema kozanga kobakisa milɔngɔ ya mpamba kati na milɔngɔ.
Esika oyo ezali kati na bisika oyo milɔngɔ ekabwani na kati ya baparagrafe ezali moke koleka esika oyo ezali kati na baparagrafe.

Na ndakisa:

> Bozala lokola moto monene, .
> Liwa ezali mpe elombe ya bilimu.
> Nazali naino kozanga Xiang Yu, 1999.
> Koboya kokatisa Jiangdong.
>
> Li Qingzhao asalelaki lisolo ya mawa ya Xiang Yu mpo na kopesa likanisi ya kozanga makoki ya bokonzi ya Song.
> Kolakisa insatisfaction na tribunal impérial mpo amipesaki sans combat.