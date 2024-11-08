# Stílalisti

[Smelltu hér til að fletta í frumskrá þessarar síðu](//raw.githubusercontent.com/i18n-site/md/refs/heads/main/zh/i18n.site/md/styl.md) til að sjá hvernig á að skrifa `MarkDown` í eftirfarandi stílum.

## Samanbrotin Blokk

|+| Hvað er MarkDown?

    MarkDown er létt álagningarmál sem gerir notendum kleift að búa til sniðin skjöl á látlausu textasniði sem auðvelt er að lesa og skrifa.

    Almennt notað til að skrifa skjöl, blogggreinar, rafbækur, spjallfærslur osfrv.

    Það hefur eftirfarandi kosti:

    1. Auðvelt að læra
    1. Mjög læsilegt
    1. Útgáfustýringarvænt

       Þar sem `MarkDown` skjöl eru á látlausu textasniði geta forritarar auðveldlega fellt þau inn í útgáfustýringarkerfi (eins og `git` ).

       Þetta gerir eftirlit með breytingum og samstarf mun einfaldara, sérstaklega í teymisþróun.

|-| Hvað er I18N?

    „I18N“ er skammstöfun á „Internationalization“.

    Þar sem orðið „Internationalization“ hefur 18 stafi á milli „I“ og „N“ er „I18N“ notað til að einfalda framsetninguna.

    Í orðum leikmanna þýðir það að styðja við mörg tungumál.


Folding block er útvíkkuð setningafræði frá `i18n.site` til `MarkDown` , skrifuð sem hér segir :

```
|+| TITLE
    MARKDOWN CONTENT
    YOUR CAN WRITE MULTI LINE CONTENT
```

með `|+| `或`|-| Línan sem byrjar á ` mun búa til felliblokk og innihald felliblokkarinnar er næstu línur með sama inndráttarstigi (málsgreinar eru aðskildar með auðum línum).

Pass`|-| `标记的折叠块默认展开，`|+| `Merktar hrundar blokkir eru sjálfgefnar minnkaðar.

## & &

__ er __~~ yfirstrikað~~ og **feitletraður** kynningartexti.

Það er skrifað sem hér segir:

```txt
这是__下划线__、~~删除线~~和**加粗**的演示文本。
```

`MarkDown` flokkari `i18n.site` vefsíðugerðarinnar hefur fínstillt undirstrikun, yfirstrikun og feitletruð setningafræði. ekki nota bil sem skil.

Lengri lestur : [vegna tekur Markdown setningafræði Nuggets ( `**……**` ) stundum ekki gildi?](//juejin.cn/post/7064565848421171213)

## Tilvitnun

### Einni Línu Tilvitnun

> Það er eðli mitt að hæfileikar mínir nýtist og ég kem aftur eftir að búið er að eyða öllum peningunum mínum.
<p style="text-align:right">─ Li Bai</p>

### Tilvitnanir Í Margar Línur

> Annar einstakur kostur vísindaskáldskapar er afar víðtækt umfang þeirra.
> "Stríð og friður", með milljón orðum, lýsir aðeins sögu svæðis í nokkra áratugi;
> Og vísindaskáldsögur eins og "Lokasvarið" eftir Asimov lýsa á skýran hátt milljarða ára sögu alls alheimsins, þar á meðal manneskjur, í örfáum þúsundum orðum.
> Slík innifalin og áræðni er ómögulegt að ná í hefðbundnum bókmenntum.
<p style="text-align:right">── Liu Cixin</p>

### Ábending `> [!TIP]`

> [!TIP]
> Mundu að athuga gildi vegabréfs þíns og vegabréfsáritunar. Útrunnin skjöl geta ekki farið inn eða út úr landinu.

Það er skrifað sem hér segir

```
> [!TIP]
> YOUR CONTENT
```

### Athugasemd `> [!NOTE]`

> [!NOTE]
> Ef þú sendir mér skilaboð og ég svara samstundis, hvað þýðir það?
> Þetta sýnir að ég elska virkilega að spila með farsíma.


### Viðvörun `> [!WARN]`

> [!WARN]
> Þegar þú ferð í villt ævintýri er mikilvægt að vera öruggur. Hér eru nokkur helstu öryggisráð:
>
> - **Athugaðu veðurspána** : Í síðustu viku lenti hópur fjallgöngumanna í stormi hálfa leið upp á fjallið vegna þess að þeir könnuðust ekki við veðurspána og þurftu að yfirgefa það sem fyrst.
> - **Vertu með nauðsynlegan búnað** : Gakktu úr skugga um að þú takir með þér nægan mat, vatn og skyndihjálp.
> - **Skildu landslag** : Kynntu þér landslag og leiðir á ævintýrasvæðinu fyrirfram til að forðast að villast.
> - **Vertu í sambandi** : Vertu í sambandi við umheiminn og tryggðu að allir geti snúið aftur á öruggan hátt.
>
> Mundu að öryggi er alltaf í fyrirrúmi!

## Verkefnalisti

- [x] Hannaðu frumgerð vöru og eiginleikalista
- [ ] Ákvarða tækni stafla og þróunarverkfæri
- [ ] Þróa vöruþróun tímalínur og áfanga

## Lista

### Pantaðan Lista

1. hlaupandi
   1. Þrisvar í viku, 5 kílómetrar í hvert skipti
   1. Hlaupa hálft maraþon
1. líkamsræktarþjálfun
   1. Tvisvar í viku, 1 klukkustund í hvert skipti
   1. Einbeittu þér að kjarnavöðvum

### Óraðaður Listi

* félagsviðburðir
  - Taktu þátt í skiptifundum iðnaðarins
    + Tæknihlutdeild
    + Frumkvöðlaskiptafundur
  - Skipuleggðu vinasamkomu
    + Útigrill
    + kvikmyndakvöld

## Blað

| hugsuður       | Helstu framlög                           |
|--------------|------------------------------------|
| Konfúsíus         | Stofnandi konfúsíanismans |
| Sókrates     | faðir vestrænnar heimspeki  |
| Nietzsche         | Superman heimspeki, gagnrýnir hefðbundið siðferði og trúarbrögð       |
| marx       | kommúnisma |

### Fínstilling Á Stórum Töfluskjá

Fyrir tiltölulega stórar töflur er hægt að nota eftirfarandi aðferðir til að hámarka birtingaráhrif:

1. Notaðu minni leturgerð

   Til dæmis, vefja töfluna með `<div style="font-size:14px">` og `</div>` .

   Athugaðu að merkið `div` verður að hafa sína eigin línu og skilja eftir auðar línur fyrir og eftir það.
1. Fyrir lengri texta í reit, settu inn `<br>` til að vefja línuna
1. Ef dálkur er kreistur of stuttur geturðu bætt `<div style="width:100px">xxx</div>` við hausinn til að stækka breiddina og þú getur líka bætt [`<wbr>` við hausinn](//developer.mozilla.org/docs/Web/HTML/Element/wbr) til að stjórna línuskilastöðu.

Sýningardæmi er sem hér segir:

<div style="font-size:14px">

| þjóð       | <div style="width:70px;margin:auto">hugsuða nafn</div> | Tímabil | Helstu hugmyndafræðilegu framlög                                                       |
|------------|------------------------------------------------|-----------------|--------------------------------------------------------------------|
| Kína       | Konfúsíus                                           | 551-479 f.Kr   | Stofnandi konfúsíanismans lagði fram kjarnahugtök eins og "velvild" og "heiðarleika" og lagði áherslu á siðferðilega ræktun og samfélagsskipulag. |
| Grikkland til forna     | Sókrates                                       | 469-399 f.Kr   | Að kanna sannleikann með samræðum og díalektík stingur upp á "þekktu sjálfan þig" og leggur áherslu á skynsamlega hugsun         |
| Frakklandi       | Voltaire                                         | 1694-1778       | Fulltrúar upplýsingarinnar töluðu fyrir skynsemi, frelsi og jafnrétti og gagnrýndu trúarlega hjátrú og valdsstjórn.   |
| Þýskalandi       | Kant                                           | 1724-1804       | Settu fram "Grýni á hreina skynsemi"<br> Kannar grundvöll siðferðis, frelsis og þekkingar og leggur áherslu á hagnýta skynsemi     |

</div>

Gervikóði fyrir dæmið hér að ofan er sem hér segir:

```md

<div style="font-size:14px">

| xx | <div style="width:70px;margin:auto">xx<wbr>xx</div> | xx | xx |
|----|----|-----------|----|
| xx | xx | xx<br>xxx | xx |

</div>

```

## Kóða

### Innbyggður Kóða

Í hinum víðfeðma heimi forritunarmálanna hafa `Rust` , `Python` , `JavaScript` og `Go` hvert um sig einstaka stöðu.

### Margar Línur Af Kóða

```rust
fn main() {
  let x = 10;
  println!("Hello, world! {}", x);
}
```

## Línuskil Innan Málsgreinar

Hægt er að ná línuskilum innan málsgreina án þess að bæta við auðum línum á milli lína.
Bilið á milli línuskila innan málsgreina er minna en bilið milli málsgreina.

til dæmis:

> Lifðu sem frábær manneskja,
> Dauðinn er líka draugahetja.
> Ég sakna samt Xiang Yu,
> Tregðu til að fara yfir Jiangdong.
>
> Li Qingzhao notaði hörmulega sögu Xiang Yu til að gefa í skyn vanhæfni Song Dynasty.
> Lýstu óánægju með keisaradómstólinn fyrir að gefast upp án baráttu.