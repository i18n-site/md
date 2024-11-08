# Styl List

[Klik hjir om troch it boarnebestân fan dizze side te blêdzjen](//raw.githubusercontent.com/i18n-site/md/refs/heads/main/zh/i18n.site/md/styl.md) om te sjen hoe't jo `MarkDown` skriuwe kinne yn de folgjende stilen.

## Opfolde Blok

|+| Wat is MarkDown?

    MarkDown is in lichtgewicht opmaaktaal wêrmei brûkers opmakke dokuminten kinne meitsje yn in platte tekstformaat dat maklik te lêzen en te skriuwen is.

    Faak brûkt foar it skriuwen fan dokumintaasje, blogartikels, e-boeken, forumposten, ensfh.

    It hat de folgjende foardielen:

    1. Maklik te learen
    1. Heech lêsber
    1. Ferzje kontrôle freonlik

       Sûnt `MarkDown` dokuminten binne yn platte tekstformaat, kinne programmeurs se maklik opnimme yn ferzjekontrôlesystemen (lykas `git` ).

       Dit makket it folgjen fan feroaringen en gearwurkjen folle ienfâldiger, benammen yn teamûntwikkeling.

|-| Wat is I18N?

    "I18N" is de ôfkoarting fan "Ynternasjonalisaasje".

    Om't it wurd "Ynternasjonalisaasje" 18 letters hat tusken "I" en "N", wurdt "I18N" brûkt om de foarstelling te ferienfâldigjen.

    Yn termen fan leken betsjut it it stypjen fan meardere talen.


Opklapblok is in útwreide syntaksis fan `i18n.site` oant `MarkDown` , skreaun as folget :

```
|+| TITLE
    MARKDOWN CONTENT
    YOUR CAN WRITE MULTI LINE CONTENT
```

mei `|+| `或`|-| De rigel dy't begjint mei ` sil in opklapblok generearje, en de ynhâld fan it opklapblok is de folgjende rigels mei itselde nivo fan ynspringen (paragrafen wurde skieden troch lege rigels).

Pass`|-| `标记的折叠块默认展开，`|+| `Tagged ynstoarte blokken binne standert ynstoart.

## & &

__ is __~~ trochstriken~~ en **fet** presintaasje tekst.

It is skreaun as folget:

```txt
这是__下划线__、~~删除线~~和**加粗**的演示文本。
```

De `MarkDown` parser fan it `i18n.site` websidebou-ark hat optimalisearre syntaksis foar ûnderstreekjen, trochstriken en fet. net brûke spaasjes as skiedingstekens.

: lêzing [Wêrom hat de Markdown -syntaksis fan Nuggets ( `**……**` ) soms gjin effekt?](//juejin.cn/post/7064565848421171213)

## Quote

### Single Line Quote

> It is myn natuer dat myn talinten nuttich sille wêze, en ik sil weromkomme nei't al myn jild is bestege.
<p style="text-align:right">─ Li Bai</p>

### Meardere Line Quotes

> In oar unyk foardiel fan science fiction is har ekstreem brede omfang.
> In "Oarloch en Frede", mei in miljoen wurden, beskriuwt allinich de skiednis fan in regio foar ferskate desennia;
> En science fiction-romans lykas Asimov's "The Final Answer" beskriuwe libbendich de miljarden jierren fan skiednis fan it heule universum, ynklusyf minsken, yn mar in pear tûzen wurden.
> Sa'n ynklusiviteit en frijmoedigens binne yn de tradisjonele literatuer ûnmooglik te berikken.
<p style="text-align:right">── Liu Cixin</p>

### Tip `> [!TIP]`

> [!TIP]
> Unthâld om de jildichheid fan jo paspoart en fisum te kontrolearjen Ferrûne dokuminten kinne it lân net ynfiere of ferlitte.

It is skreaun as folget

```
> [!TIP]
> YOUR CONTENT
```

### Opmerking `> [!NOTE]`

> [!NOTE]
> As jo my in berjocht stjoere en ik antwurdzje daliks, wat betsjut dat?
> Dit lit sjen dat ik echt hâld fan boartsjen mei mobile tillefoans.


### Warskôging `> [!WARN]`

> [!WARN]
> As jo op in wyld aventoer gean, is it wichtich om feilich te bliuwen. Hjir binne wat wichtige feiligens tips:
>
> - **Kontrolearje de waarberjocht** : Ferline wike kaam in groep klimmers healwei de berch op in stoarm om't se de waarberjocht net kontrolearren en driuwend evakuearje moasten.
> - **Draach needsaaklike gear** : Soargje derfoar dat jo genôch iten, wetter en earste helpferliening bringe.
> - **Begryp it terrein** : meitsje jo fan tefoaren bekend mei it terrein en de rûtes fan it aventoergebiet om te foarkommen dat jo ferlern gean.
> - **Bliuw ferbûn** : bliuw ferbûn mei de bûtenwrâld en soargje derfoar dat elkenien feilich werom kin.
>
> Unthâld, feiligens komt altyd foarop!

## To-Do List

- [x] Untwerp produkt prototype en funksje list
- [ ] Bepale technology stack en ûntwikkeling ark
- [ ] Untwikkelje produktûntwikkelingstiidlinen en mylpalen

## List

### Bestelde List

1. te rinnen
   1. Trije kear yn 'e wike, eltse kear 5 kilometer
   1. In heale maraton rinne
1. gym training
   1. Twa kear yn 'e wike, elke kear 1 oere
   1. Fokus op kearnmuskels

### Unordered List

* sosjale eveneminten
  - Meidwaan oan yndustry útwikseling gearkomsten
    + Technology dielen sesje
    + Undernimmerskip Exchange Meeting
  - Organisearje in gearkomste fan freonen
    + Outdoor BBQ
    + filmjûn

## Fel

| tinker       | Main bydragen                           |
|--------------|------------------------------------|
| Confucius         | Grûnlizzer fan it konfuzianisme |
| Sokrates     | heit fan 'e westerske filosofy  |
| Nietzsche         | Superman filosofy, krityk op tradisjonele moraal en religy       |
| marx       | kommunisme |

### Grutte Tabel Werjefte Optimalisaasje

Foar relatyf grutte tabellen kinne de folgjende metoaden brûkt wurde om it werjaaneffekt te optimalisearjen:

1. Brûk lytser lettertype

   Bygelyks, wrap de tabel mei `<div style="font-size:14px">` en `</div>` .

   Tink derom dat de `div` tag in eigen rigel moat besette, en lege rigels foar en nei litte litte.
1. Foar langere tekst yn in sel, foegje `<br>` yn om de rigel te wikkeljen
1. As in kolom wurdt squeezed te koart, kinne jo tafoegje `<div style="width:100px">xxx</div>` oan de koptekst te wreidzjen de breedte, en do kinst ek tafoegje [`<wbr>` oan de kop](//developer.mozilla.org/docs/Web/HTML/Element/wbr) foar in kontrôle de line break posysje.

In demonstraasjefoarbyld is as folget:

<div style="font-size:14px">

| naasje       | <div style="width:70px;margin:auto">tinker namme</div> | Era | Main ideologyske bydragen                                                       |
|------------|------------------------------------------------|-----------------|--------------------------------------------------------------------|
| Sina       | Confucius                                           | 551-479 f.Kr   | De grûnlizzer fan it konfuzianisme stelde kearnbegripen foar lykas "goedwillens" en "propriety" en beklamme morele kultivaasje en sosjale oarder. |
| âlde Grikelân     | Sokrates                                       | 469-399 f.Kr   | It ferkennen fan 'e wierheid troch dialooch en dialektyk stelt "ken dysels" foar en beklammet rasjoneel tinken         |
| Frankryk       | Voltaire                                         | 1694-1778       | Fertsjintwurdige figueren fan 'e Ferljochting pleiten foar rasjonaliteit, frijheid en gelikensens, en bekritisearren religieus byleauwe en autoritêre regel.   |
| Dútslân       | Kant                                           | 1724-1804       | Stel de "Krityk fan Pure Reason" nei foaren<br> Undersykje de fûneminten fan moraal, frijheid en kennis, mei de klam op praktyske reden     |

</div>

De pseudokoade foar it boppesteande foarbyld is as folget:

```md

<div style="font-size:14px">

| xx | <div style="width:70px;margin:auto">xx<wbr>xx</div> | xx | xx |
|----|----|-----------|----|
| xx | xx | xx<br>xxx | xx |

</div>

```

## Koade

### Inline Koade

Yn 'e grutte wrâld fan programmeartalen nimme `Rust` , `Python` , `JavaScript` en `Go` elk in unike posysje yn.

### Meardere Rigels Fan Koade

```rust
fn main() {
  let x = 10;
  println!("Hello, world! {}", x);
}
```

## Line Break Binnen Paragraaf

Rigelbrekken binnen paragrafen kinne wurde berikt sûnder lege rigels ta te foegjen tusken rigels.
De ôfstân tusken rigelôfbrekken binnen alinea's is lytser as de ôfstân tusken alinea's.

bygelyks:

> Libje as in grut minske,
> De dea is ek in spoekheld.
> Ik mis Xiang Yu noch,
> Wegerich om Jiangdong oer te stekken.
>
> Li Qingzhao brûkte Xiang Yu's tragyske ferhaal om te hingjen op 'e ynkompetinsje fan' e Song-dynasty.
> Utering fan ûntefredenens mei it keizerlike hof foar it oerjaan sûnder gefjocht.