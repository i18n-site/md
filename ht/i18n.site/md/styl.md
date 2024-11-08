# Lis Style

[Klike la a pou browse fichye sous paj sa a](//raw.githubusercontent.com/i18n-site/md/refs/heads/main/zh/i18n.site/md/styl.md) pou wè kijan pou ekri `MarkDown` nan estil sa yo.

## Blòk Ki Plwaye

|+| Ki sa ki MarkDown?

    MarkDown se yon langaj maketing ki lejè ki pèmèt itilizatè yo kreye dokiman fòma nan yon fòma tèks klè ki fasil pou li ak ekri.

    Souvan itilize pou ekri dokiman, atik blog, e-liv, pòs fowòm, elatriye.

    Li gen avantaj sa yo:

    1. Fasil pou aprann
    1. Trè lizib
    1. Kontwòl vèsyon zanmitay

       Depi `MarkDown` dokiman yo nan fòma tèks klè, pwogramasyon yo ka fasilman enkòpore yo nan sistèm kontwòl vèsyon (tankou `git` ).

       Sa fè swivi chanjman ak kolaborasyon pi senp, espesyalman nan devlopman ekip.

|-| ki sa ki I18N?

    "I18N" se abrevyasyon "Entènasyonalizasyon".

    Piske mo "Entènasyonalizasyon" gen 18 lèt ant "I" ak "N", yo itilize "I18N" pou senplifye reprezantasyon an.

    An tèm pwofàn, sa vle di sipòte plizyè lang.


Folding block se yon sentaks pwolonje nan `i18n.site` a `MarkDown` , ekri jan sa a :

```
|+| TITLE
    MARKDOWN CONTENT
    YOUR CAN WRITE MULTI LINE CONTENT
```

ak `|+| `或`|-| Liy ki kòmanse ak ` pral jenere yon blòk plisman, ak kontni an nan blòk la plisman se liy ki vin apre yo ak menm nivo nan endentasyon (paragraf yo separe pa liy vid).

Pase'|-| `标记的折叠块默认展开，`|+| `Blòk ki make yo tonbe yo tonbe pa default.

## & &

Sa a se __ __ ,~~ grèv~~ ak tèks prezantasyon **fonse** .

Li ekri jan sa a:

```txt
这是__下划线__、~~删除线~~和**加粗**的演示文本。
```

`MarkDown` analizeur zouti `i18n.site` sit entènèt la te optimize souliye, bare, ak sentaks fonse. pa sèvi ak espas kòm separasyon.

Lekti : [Poukisa sentaks Markdown Nuggets ( `**……**` ) pafwa pa pran efè?](//juejin.cn/post/7064565848421171213)

## Quote

### Yon Sèl Liy Quote

> Se nati mwen ke talan mwen yo pral itil, epi mwen pral tounen apre tout lajan mwen te depanse.
<p style="text-align:right">─ Li Bai</p>

### Site Miltip Liy

> Yon lòt avantaj inik nan syans fiksyon se dimansyon ekstrèmman laj li yo.
> Yon "Lagè ak Lapè", ak yon milyon mo, sèlman dekri istwa a nan yon rejyon pou plizyè deseni;
> Ak woman syans fiksyon tankou "The Final Answer" Asimov dekri byen klè plizyè milya ane nan istwa linivè a tout antye, enkli èt imen, nan jis kèk mil mo.
> Sa yo enklizif ak kouraj yo enposib reyalize nan literati tradisyonèl yo.
<p style="text-align:right">── Liu Cixin</p>

### Konsèy `> [!TIP]`

> [!TIP]
> Sonje tcheke validite paspò w ak viza w pa ka antre oswa soti nan peyi a.

Li ekri jan sa a

```
> [!TIP]
> YOUR CONTENT
```

### Remak `> [!NOTE]`

> [!NOTE]
> Si ou voye yon mesaj pou mwen epi mwen reponn imedyatman, kisa sa vle di?
> Sa montre ke mwen vrèman renmen jwe ak telefòn mobil yo.


### Avètisman `> [!WARN]`

> [!WARN]
> Lè w ale nan yon avanti sovaj, li enpòtan pou w rete an sekirite. Men kèk konsèy kle sekirite:
>
> - **Tcheke previzyon tan an** : Semèn pase a, yon gwoup grimpè te rankontre yon tanpèt nan mitan mòn lan paske yo pa t tcheke previzyon an e yo te oblije evakye ijan.
> - **Pote ekipman ki nesesè** : Asire ou ke ou pote ase manje, dlo ak pwovizyon premye swen.
> - **Konprann tèren an** : Abitye tèt ou ak tèren an ak wout nan zòn avanti a davans pou evite pèdi.
> - **Rete Konekte** : Rete konekte ak mond deyò a epi asire tout moun ka retounen san danje.
>
> Sonje byen, sekirite toujou vini an premye!

## Lis Pou Fè

- [x] Konsepsyon pwototip pwodwi ak lis karakteristik
- [ ] Detèmine pile teknoloji ak zouti devlopman
- [ ] Devlope delè devlopman pwodwi ak etap enpòtan yo

## Lis

### Lis Lòd

1. kouri
   1. Twa fwa pa semèn, 5 kilomèt chak fwa
   1. Kouri yon demi maraton
1. fòmasyon jimnastik
   1. De fwa pa semèn, 1 èdtan chak fwa
   1. Konsantre sou misk debaz yo

### Lis Ki Pa Òdone

* evènman sosyal
  - Patisipe nan reyinyon echanj endistri yo
    + Sesyon pataje teknoloji
    + Reyinyon Echanj Antreprenarya
  - Òganize yon rasanbleman zanmi
    + Barbecue deyò
    + lannwit fim

## Fèy

| pansè       | Kontribisyon prensipal yo                           |
|--------------|------------------------------------|
| Confucius         | Fondatè Konfisyanis |
| Socrates     | papa nan filozofi lwès  |
| Nietzsche         | Filozofi devni selèb, kritike moralite tradisyonèl ak relijyon       |
| marx       | kominis |

### Gwo Tab Optimize Ekspozisyon

Pou tab relativman gwo, metòd sa yo ka itilize pou optimize efè ekspozisyon an:

1. Sèvi ak pi piti font

   Pa egzanp, vlope tab la ak `<div style="font-size:14px">` ak `</div>` .

   Remake byen ke tag `div` a dwe okipe pwòp liy li yo, epi kite liy vid anvan ak apre li.
1. Pou tèks ki pi long nan yon selil, mete `<br>` pou vlope liy lan
1. Si yon kolòn peze twò kout, ou ka ajoute `<div style="width:100px">xxx</div>` nan header pou elaji lajè a, epi ou ka ajoute [`<wbr>` nan header la](//developer.mozilla.org/docs/Web/HTML/Element/wbr) pou kontwole pozisyon kraze liy lan.

Yon egzanp demonstrasyon se jan sa a:

<div style="font-size:14px">

| nasyon       | <div style="width:70px;margin:auto">non pansè</div> | Epòk | Prensipal kontribisyon ideyolojik                                                       |
|------------|------------------------------------------------|-----------------|--------------------------------------------------------------------|
| Lachin       | Confucius                                           | 551-479 BC   | Fondatè Konfisyanis la te pwopoze konsèp debaz tankou "byenveyans" ak "pwopriyete" epi li te mete aksan sou kiltivasyon moral ak lòd sosyal. |
| ansyen lagrès     | Socrates                                       | 469-399 BC   | Eksplore laverite atravè dyalòg ak dyalèktik pwopoze "konnen tèt ou" epi mete aksan sou panse rasyonèl.         |
| Lafrans       | Voltaire                                         | 1694-1778       | Figi reprezantan Limyè yo te defann rationalité, libète ak egalite, e yo te kritike sipèstisyon relijye ak règ otoritè.   |
| Almay       | Kant                                           | 1724-1804       | Mete pi devan "Kritik rezon ki fè pi bon kalite"<br> Eksplore fondasyon moralite, libète, ak konesans, mete aksan sou rezon pratik     |

</div>

Psedokod pou egzanp ki anwo a se jan sa a:

```md

<div style="font-size:14px">

| xx | <div style="width:70px;margin:auto">xx<wbr>xx</div> | xx | xx |
|----|----|-----------|----|
| xx | xx | xx<br>xxx | xx |

</div>

```

## Kòd

### Kòd Inline

Nan mond lan vas nan langaj pwogramasyon, `Rust` , `Python` , `JavaScript` ak `Go` yo chak okipe yon pozisyon inik.

### Plizyè Liy Kòd

```rust
fn main() {
  let x = 10;
  println!("Hello, world! {}", x);
}
```

## Liy Kraze Nan Paragraf

Kase liy nan paragraf yo ka reyalize san yo pa ajoute liy vid ant liy yo.
Espas ki genyen ant kase liy nan paragraf yo pi piti pase espas ki genyen ant paragraf yo.

pou egzanp:

> Viv tankou yon gwo moun,
> Lanmò se yon ewo fantom tou.
> Mwen toujou manke Xiang Yu,
> Ezite travèse Jiangdong.
>
> Li Qingzhao te itilize istwa trajik Xiang Yu pou allusion sou enkonpetans Dinasti Song la.
> Eksprime mekontantman ak tribinal enperyal la pou rann tèt san yon batay.