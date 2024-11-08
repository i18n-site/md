# Stil Lëscht

[Klickt hei fir d'Quelldatei vun dëser Säit ze duerchsichen](//raw.githubusercontent.com/i18n-site/md/refs/heads/main/zh/i18n.site/md/styl.md) fir ze kucken wéi een `MarkDown` an de folgende Stiler schreift.

## Geklappt Block

|+| Wat ass MarkDown?

    MarkDown ass eng liicht Markupsprooch déi d'Benotzer erlaabt formatéiert Dokumenter an engem einfachen Textformat ze kreéieren dat einfach ze liesen a schreiwen ass.

    Allgemeng benotzt fir Dokumentatioun, Blog Artikelen, E-Bicher, Forum Posts, etc.

    Et huet déi folgend Virdeeler:

    1. Einfach ze léieren
    1. Héich liesbar
    1. Versioun Kontroll frëndlech

       Zënter `MarkDown` Dokumenter am Kloertextformat sinn, kënnen d'Programméierer se einfach a Versiounskontrollsystemer (wéi `git` ) integréieren.

       Dëst mécht d'Verfollegung vun Ännerungen an Zesummenaarbecht vill méi einfach, besonnesch an der Teamentwécklung.

|-| Wat ass I18N?

    "I18N" ass d'Ofkierzung vun "Internationaliséierung".

    Well d'Wuert "Internationaliséierung" 18 Buschtawen tëscht "I" an "N" huet, gëtt "I18N" benotzt fir d'Representatioun ze vereinfachen.

    An Laie Begrëffer heescht et verschidde Sproochen z'ënnerstëtzen.


Klappblock ass eng erweidert Syntax vun `i18n.site` bis `MarkDown` , geschriwwen wéi follegt :

```
|+| TITLE
    MARKDOWN CONTENT
    YOUR CAN WRITE MULTI LINE CONTENT
```

mat `|+| `或`|-| D'Linn, déi mat ` fänkt, generéiert e Klappblock, an den Inhalt vum Klappblock ass déi spéider Zeilen mat dem selwechte Niveau vun der Indentatioun (Paragrafen ginn duerch eidel Linnen getrennt).

Pass`|-| `标记的折叠块默认展开，`|+| `Tagged zesummegeklappte Blöcke sinn als Standard zesummegeklappt.

## & &

__ ass __~~ duerchstrecken~~ a **fett** Presentatioun Text.

Et ass wéi follegt geschriwwen:

```txt
这是__下划线__、~~删除线~~和**加粗**的演示文本。
```

Den `MarkDown` Parser vum `i18n.site` Websäit Gebai Tool huet ënnersträichen, duerchstrecken, a fett Syntax optimiséiert. benotzen keng Plazen als separators.

: Liesung [Firwat trëtt d'Nuggets ' Markdown Syntax ( `**……**` ) heiansdo net a Kraaft?](//juejin.cn/post/7064565848421171213)

## Zitat

### Eenzeg Zeil Zitat

> Et ass meng Natur datt meng Talenter nëtzlech sinn, an ech kommen zréck nodeems all meng Suen ausginn sinn.
<p style="text-align:right">─ Li Bai</p>

### Multiple Zeilen Zitater

> En aneren eenzegaartege Virdeel vu Science Fiction ass säin extrem breet Spillraum.
> E "Krich a Fridden", mat enger Millioun Wierder, beschreift nëmmen d'Geschicht vun enger Regioun fir e puer Joerzéngte;
> A Science Fiction Romaner wéi dem Asimov seng "The Final Answer" beschreiwen lieweg d'Milliarde vu Joer Geschicht vum ganzen Universum, och de Mënsch, an nëmmen e puer dausend Wierder.
> Esou Inklusivitéit a Fett sinn onméiglech an der traditioneller Literatur z'erreechen.
<p style="text-align:right">── Liu Cixin</p>

### Tipp `> [!TIP]`

> [!TIP]
> Denkt drun d'Gëltegkeet vun Ärem Pass a Visa ze kontrolléieren Vergaangen Dokumenter kënnen net an d'Land kommen.

Et ass wéi follegt geschriwwen

```
> [!TIP]
> YOUR CONTENT
```

### Remarque `> [!NOTE]`

> [!NOTE]
> Wann Dir mir e Message schéckt an ech äntweren direkt, wat heescht dat?
> Dëst weist datt ech wierklech gär mat Handyen spillen.


### Warnung `> [!WARN]`

> [!WARN]
> Wann Dir op eng wilde Aventure geet, ass et wichteg sécher ze bleiwen. Hei sinn e puer Schlëssel Sécherheet Tipps:
>
> - **Kuckt d'Wiederprevisioun** : D'lescht Woch huet e Grupp vu Kloteren e Stuerm hallef um Bierg gestouss, well se d'Wiederprevisioune net gekuckt hunn an dréngend hu missen evakuéieren.
> - **Gitt néideg Ausrüstung** : Gitt sécher datt Dir genuch Iessen, Waasser an Éischt Hëllefsmaterial bréngt.
> - **Verstinn den Terrain** : Vertraut Iech am Viraus mam Terrain an de Strecken vum Abenteuerberäich fir ze vermeiden datt Dir verluer geet.
> - **Bleift verbonnen** : Bleift verbonne mat der Äussewelt a suergt fir datt jiddereen sécher zréck kënnt.
>
> Denkt drun, Sécherheet kënnt ëmmer éischt!

## To-Do Lëscht

- [x] Design Produkt Prototyp a Feature Lëscht
- [ ] Bestëmmt Technologie Stack an Entwécklung Handwierksgeschir
- [ ] Entwéckelt Produktentwécklung Timelines a Meilesteen

## Lëscht

### Bestallt Lëscht

1. lafen
   1. Dräimol d'Woch, all Kéier 5 Kilometer
   1. En hallwe Marathon lafen
1. Turnstonnen Training
   1. Zweemol an der Woch, all Kéier 1 Stonn
   1. Konzentréieren op Kär Muskelen

### Unordered Lëscht

* sozial Evenementer
  - Bedeelegt un Industrieaustauschversammlungen
    + Technologie Deele Sëtzung
    + Entrepreneurship Exchange Meeting
  - Organiséiert eng Versammlung vu Frënn
    + Outdoor BBQ
    + Film Nuecht

## Blat

| denker       | Main Contributiounen                           |
|--------------|------------------------------------|
| Konfuzius         | Grënner vum Konfuzianismus |
| Sokrates     | Papp vun der westlecher Philosophie  |
| Nietzsche         | Superman Philosophie, kritiséiert traditionell Moral a Relioun       |
| marx       | Kommunismus |

### Grouss Dësch Display Optimisatioun

Fir relativ grouss Dëscher kënnen déi folgend Methoden benotzt ginn fir den Affichageeffekt ze optimiséieren:

1. Benotzt méi kleng Schrëft

   Zum Beispill, wéckelt den Dësch mat `<div style="font-size:14px">` an `</div>` .

   Bedenkt datt den `div` Tag seng eege Linn muss besetzen, an eidel Zeilen virun an no hannerloossen.
1. Fir méi laang Text an enger Zell, setzt `<br>` fir d'Linn ze wéckelen
1. Wann eng Kolonn ze kuerz gepresst ass, kënnt Dir `<div style="width:100px">xxx</div>` op den Header derbäi fir d'Breet auszebauen, an Dir kënnt och [`<wbr>` an den Header](//developer.mozilla.org/docs/Web/HTML/Element/wbr) derbäi fir d'Linn Paus Positioun ze kontrolléieren.

E Demonstratiouns Beispill ass wéi follegt:

<div style="font-size:14px">

| Natioun       | <div style="width:70px;margin:auto">Denker Numm</div> | Ära | Main ideologesch Contributiounen                                                       |
|------------|------------------------------------------------|-----------------|--------------------------------------------------------------------|
| China       | Konfuzius                                           | 551-479 v   | De Grënner vum Confucianismus huet Kärkonzepter wéi "Wuelbefannen" a "Proprietitéit" proposéiert a betount moralesch Kultivatioun a sozial Uerdnung. |
| antike Griicheland     | Sokrates                                       | 469-399 v   | D'Wourecht erkennen duerch Dialog an Dialektik proposéiert "kenn selwer" a betount rational Denken         |
| Frankräich       | Voltaire                                         | 1694-1778       | Vertrieder vun der Aufklärung hunn sech fir Rationalitéit, Fräiheet a Gläichheet agesat, a kritiséiert de reliéisen Apelglawen an den autoritären Herrschaft.   |
| Däitschland       | Kant                                           | 1724-1804       | Gitt d'"Kritik vum Pure Vernunft" vir<br> Entdeckt d'Fundamenter vu Moral, Fräiheet a Wëssen, ënnersträicht de praktesche Grond     |

</div>

De Pseudocode fir dat uewe genannte Beispill ass wéi follegt:

```md

<div style="font-size:14px">

| xx | <div style="width:70px;margin:auto">xx<wbr>xx</div> | xx | xx |
|----|----|-----------|----|
| xx | xx | xx<br>xxx | xx |

</div>

```

## Code

### Inline Code

An der grousser Welt vun de Programméierungssproochen besetzen `Rust` , `Python` , `JavaScript` an `Go` all eng eenzegaarteg Positioun.

### Multiple Zeilen Vum Code

```rust
fn main() {
  let x = 10;
  println!("Hello, world! {}", x);
}
```

## Linn Paus Bannent Paragraph

Linn Pausen bannent Abschnitter kënnen erreecht ginn ouni eidel Zeilen tëscht Zeilen dobäizemaachen.
D'Distanz tëscht Zeilpausen bannent Paragrafen ass méi kleng wéi d'Distanz tëscht Paragrafen.

zum Beispill:

> Liewen als eng grouss Persoun,
> Den Doud ass och e Geeschterheld.
> Ech vermëssen ëmmer nach Xiang Yu,
> Zréck op Jiangdong ze Kräiz.
>
> Li Qingzhao huet dem Xiang Yu seng tragesch Geschicht benotzt fir op d'Inkompetenz vun der Song Dynastie ze hinzeweisen.
> Auszedrécken Onzefriddenheet mam keeserlechen Geriicht fir kapituléieren ouni Kampf.