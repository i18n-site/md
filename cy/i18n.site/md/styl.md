# Rhestr Arddull

[Cliciwch yma i bori trwy ffeil ffynhonnell y dudalen hon](//raw.githubusercontent.com/i18n-site/md/refs/heads/main/zh/i18n.site/md/styl.md) i weld sut i ysgrifennu `MarkDown` yn yr arddulliau canlynol.

## Bloc Wedi'i Blygu

|+| Beth yw MarkDown?

    Mae MarkDown yn iaith farcio ysgafn sy'n galluogi defnyddwyr i greu dogfennau wedi'u fformatio mewn fformat testun plaen sy'n hawdd ei ddarllen a'i ysgrifennu.

    Fe'i defnyddir yn gyffredin i ysgrifennu dogfennaeth, erthyglau blog, e-lyfrau, postiadau fforwm, ac ati.

    Mae ganddo'r manteision canlynol:

    1. Hawdd i ddysgu
    1. Hynod ddarllenadwy
    1. Cyfeillgar i reoli fersiwn

       Gan fod `MarkDown` dogfen mewn fformat testun plaen, gall rhaglenwyr eu hymgorffori'n hawdd mewn systemau rheoli fersiynau (fel `git` ).

       Mae hyn yn gwneud olrhain newidiadau a chydweithio yn llawer symlach, yn enwedig wrth ddatblygu tîm.

|-| Beth yw I18N?

    "I18N" yw'r talfyriad o "Rhyngwladoli".

    Gan fod gan y gair "Rhyngwladoli" 18 llythyren rhwng "I" ac "N", defnyddir "I18N" i symleiddio'r gynrychiolaeth.

    Yn nhermau lleygwr, mae'n golygu cefnogi ieithoedd lluosog.


Mae bloc plygu yn gystrawen estynedig o `i18n.site` i `MarkDown` , wedi'i ysgrifennu fel a ganlyn :

```
|+| TITLE
    MARKDOWN CONTENT
    YOUR CAN WRITE MULTI LINE CONTENT
```

gyda `|+| `或`|-| Bydd y llinell sy'n dechrau gyda ` yn cynhyrchu bloc plygu, a chynnwys y bloc plygu yw'r llinellau dilynol gyda'r un lefel o mewnoliad (mae paragraffau wedi'u gwahanu gan linellau gwag).

Pasio`|-| `标记的折叠块默认展开，`|+| `Mae blociau sydd wedi'u tagio wedi'u dymchwel yn cael eu dymchwel yn ddiofyn.

## & &

Mae __ yn __~~ streic~~ a thestun cyflwyniad **beiddgar** .

Mae wedi'i ysgrifennu fel a ganlyn:

```txt
这是__下划线__、~~删除线~~和**加粗**的演示文本。
```

Mae parser `MarkDown` yr offeryn adeiladu gwefan `i18n.site` wedi optimeiddio tanlinellu, taro trwodd, a chystrawen feiddgar Gall ddod i rym heb fylchau cyn ac ar ôl y marc, gan ei gwneud hi'n haws ysgrifennu dogfennau mewn ieithoedd fel Tsieina, Japan, a Korea sy'n peidiwch â defnyddio bylchau fel gwahanyddion.

Darllen estynedig : [Pam nad yw cystrawen Markdown Nuggets ( `**……**` ) yn dod i rym weithiau?](//juejin.cn/post/7064565848421171213)

## Dyfyniad

### Dyfyniad Llinell Sengl

> Fy natur yw y bydd fy nhalentau yn ddefnyddiol, a byddaf yn dod yn ôl ar ôl i'm holl arian gael ei wario.
<p style="text-align:right">─ Li Bai</p>

### Dyfyniadau Llinell Lluosog

> Mantais unigryw arall ffuglen wyddonol yw ei chwmpas hynod eang.
> Mae "Rhyfel a Heddwch", gyda miliwn o eiriau, yn disgrifio hanes rhanbarth ers sawl degawd yn unig;
> Ac mae nofelau ffuglen wyddonol fel "The Final Answer" Asimov yn disgrifio'n fyw biliynau o flynyddoedd o hanes y bydysawd cyfan, gan gynnwys bodau dynol, mewn ychydig filoedd o eiriau.
> Mae cynwysoldeb a hyfdra o'r fath yn amhosibl eu cyflawni mewn llenyddiaeth draddodiadol.
<p style="text-align:right">── Liu Cixin</p>

### Awgrym `> [!TIP]`

> [!TIP]
> Cofiwch wirio dilysrwydd eich pasbort a fisa.

Mae wedi'i ysgrifennu fel a ganlyn

```
> [!TIP]
> YOUR CONTENT
```

### Sylw `> [!NOTE]`

> [!NOTE]
> Os anfonwch neges ataf ac rwy'n ateb ar unwaith, beth mae hynny'n ei olygu?
> Mae hyn yn dangos fy mod i wrth fy modd yn chwarae gyda ffonau symudol.


### Rhybudd `> [!WARN]`

> [!WARN]
> Wrth fynd ar antur wyllt, mae’n bwysig cadw’n ddiogel. Dyma rai awgrymiadau diogelwch allweddol:
>
> - **Gwiriwch ragolygon y tywydd** : Yr wythnos diwethaf, daeth grŵp o ddringwyr ar draws storm hanner ffordd i fyny'r mynydd oherwydd na wnaethant wirio rhagolygon y tywydd a bu'n rhaid iddynt adael ar frys.
> - **Cariwch offer angenrheidiol** : Gwnewch yn siŵr eich bod yn dod â digon o fwyd, dŵr a chyflenwadau cymorth cyntaf.
> - **Deall y tir** : Ymgyfarwyddwch â thirwedd a llwybrau'r ardal antur ymlaen llaw er mwyn osgoi mynd ar goll.
> - **Arhoswch mewn Cysylltiad** : Arhoswch yn gysylltiedig â'r byd y tu allan a sicrhewch y gall pawb ddychwelyd yn ddiogel.
>
> Cofiwch, diogelwch sy'n dod gyntaf bob amser!

## Rhestr O Bethau I'w Gwneud

- [x] Dylunio prototeip cynnyrch a rhestr nodwedd
- [ ] Pennu stac technoleg ac offer datblygu
- [ ] Datblygu llinellau amser a cherrig milltir datblygu cynnyrch

## Rhestr

### Rhestr Archebedig

1. rhedeg
   1. Tair gwaith yr wythnos, 5 cilomedr bob tro
   1. Rhedeg hanner marathon
1. hyfforddiant campfa
   1. Ddwywaith yr wythnos, 1 awr bob tro
   1. Canolbwyntiwch ar gyhyrau craidd

### Rhestr Heb Ei Threfnu

* digwyddiadau cymdeithasol
  - Cymryd rhan mewn cyfarfodydd cyfnewid diwydiant
    + Sesiwn rhannu technoleg
    + Cyfarfod Cyfnewid Entrepreneuriaeth
  - Trefnwch gasgliad o ffrindiau
    + Barbeciw awyr agored
    + noson ffilm

## Dalen

| meddyliwr       | Prif gyfraniadau                           |
|--------------|------------------------------------|
| Confucius         | Sylfaenydd Conffiwsiaeth |
| Socrates     | tad athroniaeth y gorllewin  |
| Nietzsche         | Athroniaeth Superman, yn beirniadu moesoldeb traddodiadol a chrefydd       |
| marcs       | comiwnyddiaeth |

### Optimeiddio Arddangosfa Bwrdd Mawr

Ar gyfer tablau cymharol fawr, gellir defnyddio'r dulliau canlynol i wneud y gorau o'r effaith arddangos:

1. Defnyddiwch ffont llai

   Er enghraifft, lapiwch y bwrdd gyda `<div style="font-size:14px">` ac `</div>` .

   Sylwch fod yn rhaid i'r tag `div` feddiannu ei linell ei hun, a gadael llinellau gwag cyn ac ar ôl iddo.
1. Ar gyfer testun hirach mewn cell, rhowch `<br>` i lapio'r llinell
1. Os yw colofn wedi'i wasgu'n rhy fyr, gallwch ychwanegu `<div style="width:100px">xxx</div>` i'r pennawd i ehangu'r lled, a gallwch hefyd ychwanegu [`<wbr>` i'r pennawd](//developer.mozilla.org/docs/Web/HTML/Element/wbr) i reoli sefyllfa torri'r llinell.

Mae enghraifft arddangos fel a ganlyn:

<div style="font-size:14px">

| cenedl       | <div style="width:70px;margin:auto">enw meddyliwr</div> | Oes | Prif gyfraniadau ideolegol                                                       |
|------------|------------------------------------------------|-----------------|--------------------------------------------------------------------|
| Tsieina       | Confucius                                           | 551-479 CC   | Cynigiodd sylfaenydd Confucianism gysyniadau craidd megis "caredigrwydd" a "priodoldeb" a phwysleisiodd amaethu moesol a threfn gymdeithasol. |
| Groeg hynafol     | Socrates                                       | 469-399 CC   | Mae archwilio'r gwir trwy ddeialog a thafodieitheg yn cynnig "adnabod eich hun" ac yn pwysleisio meddwl rhesymegol         |
| Ffrainc       | Voltaire                                         | 1694-1778       | Roedd ffigurau cynrychioliadol yr Oleuedigaeth yn dadlau o blaid rhesymoldeb, rhyddid a chydraddoldeb, ac yn beirniadu ofergoeliaeth grefyddol a rheolaeth awdurdodaidd.   |
| Almaen       | Kant                                           | 1724-1804       | Cyflwyno'r "Feirniadaeth o Reswm Pur"<br> Archwilio seiliau moesoldeb, rhyddid, a gwybodaeth, gan bwysleisio rheswm ymarferol     |

</div>

Mae'r ffuggod ar gyfer yr enghraifft uchod fel a ganlyn:

```md

<div style="font-size:14px">

| xx | <div style="width:70px;margin:auto">xx<wbr>xx</div> | xx | xx |
|----|----|-----------|----|
| xx | xx | xx<br>xxx | xx |

</div>

```

## Cod

### Cod Mewn-Lein

Ym myd helaeth yr ieithoedd rhaglennu, mae `Rust` , `Python` , `JavaScript` a `Go` yr un mewn sefyllfa unigryw.

### Llinellau Lluosog O God

```rust
fn main() {
  let x = 10;
  println!("Hello, world! {}", x);
}
```

## Toriad Llinell O Fewn Paragraff

Gellir cyflawni toriad llinell o fewn paragraffau heb ychwanegu llinellau gwag rhwng llinellau.
Mae'r bwlch rhwng toriadau llinell o fewn paragraffau yn llai na'r bwlch rhwng paragraffau.

er enghraifft:

> Byw fel person gwych,
> Mae marwolaeth hefyd yn arwr ysbryd.
> Rwy'n dal i golli Xiang Yu,
> Yn amharod i groesi Jiangdong.
>
> Defnyddiodd Li Qingzhao stori drasig Xiang Yu i awgrymu anghymhwysedd Brenhinllin y Gân.
> Mynegi anfodlonrwydd â'r llys imperialaidd am ildio heb frwydr.