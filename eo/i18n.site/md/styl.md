# Listo De Stiloj

[Klaku ĉi tie por foliumi la fontdosieron de ĉi tiu paĝo](//raw.githubusercontent.com/i18n-site/md/refs/heads/main/zh/i18n.site/md/styl.md) por vidi kiel skribi `MarkDown` en la sekvaj stiloj.

## Faldita Bloko

|+| Kio estas MarkDown?

    MarkDown estas malpeza markada lingvo, kiu permesas al uzantoj krei formatitajn dokumentojn en simpla teksta formato, kiu estas facile legebla kaj skribi.

    Ofte uzata por skribi dokumentadon, blogartikolojn, e-librojn, forumajn afiŝojn, ktp.

    Ĝi havas la jenajn avantaĝojn:

    1. Facile lernebla
    1. Tre legebla
    1. Versiokontrolo amika

       Ĉar `MarkDown` dokumentoj estas en simpla teksta formato, programistoj povas facile integrigi ilin en versiokontrolsistemojn (kiel `git` ).

       Ĉi tio faras spuri ŝanĝojn kaj kunlaboradon multe pli simpla, precipe en teama disvolviĝo.

|-| Kio estas I18N?

    "I18N" estas la mallongigo de "Internaciigo".

    Ĉar la vorto "Internaciigo" havas 18 literojn inter "I" kaj "N", "I18N" estas uzata por simpligi la prezenton.

    Laŭ laiko, ĝi signifas subteni plurajn lingvojn.


Faldbloko estas etendita sintakso de `i18n.site` al `MarkDown` , skribita jene :

```
|+| TITLE
    MARKDOWN CONTENT
    YOUR CAN WRITE MULTI LINE CONTENT
```

kun `|+| `或`|-| La linio komencanta per ` generos faldblokon, kaj la enhavo de la faldbloko estas la postaj linioj kun la sama nivelo de indentaĵo (alineoj estas apartigitaj per malplenaj linioj).

Pas'|-| `标记的折叠块默认展开，`|+| `Etikeditaj kolapsitaj blokoj estas kolapsitaj defaŭlte.

## & &

__ tio estas __~~ forstrekita~~ kaj **aŭdaca** prezenta teksto.

Ĝi estas skribita jene:

```txt
这是__下划线__、~~删除线~~和**加粗**的演示文本。
```

La `MarkDown` analizilo de la `i18n.site` reteja konstrua ilo optimumigis substrekon, baron kaj grasan sintakson Ĝi povas efiki sen spacoj antaŭ kaj post la marko, faciligante verki dokumentojn en lingvoj kiel Ĉinio, Japanio kaj Koreio. ne uzu spacojn kiel apartigilojn.

Plilongigita : [Kial Markdown sintakso ( `**……**` ) de Nuggets foje ne efikas?](//juejin.cn/post/7064565848421171213)

## Citaĵo

### Unulinia Citaĵo

> Estas mia naturo, ke miaj talentoj estos utilaj, kaj mi revenos post kiam mia tuta mono estos elspezita.
<p style="text-align:right">─ Li Bai</p>

### Multoblaj Linio Citaĵoj

> Alia unika avantaĝo de sciencfikcio estas ĝia ekstreme larĝa amplekso.
> "Milito kaj Paco", kun miliono da vortoj, priskribas nur la historion de regiono dum kelkaj jardekoj;
> Kaj sciencfikciaj romanoj kiel "La Fina Respondo" de Asimov vigle priskribas la miliardojn da jaroj da historio de la tuta universo, inkluzive de homoj, en nur kelkaj miloj da vortoj.
> Tian inkluzivecon kaj aŭdacon ne eblas atingi en tradicia literaturo.
<p style="text-align:right">── Liu Cixin</p>

### Konsilo `> [!TIP]`

> [!TIP]
> Memoru kontroli la validecon de via pasporto kaj vizo Eksvalidiĝintaj dokumentoj ne povas eniri aŭ eliri la landon.

Ĝi estas skribita jene

```
> [!TIP]
> YOUR CONTENT
```

### Rimarko `> [!NOTE]`

> [!NOTE]
> Se vi sendas al mi mesaĝon kaj mi respondas tuj, kion tio signifas?
> Ĉi tio montras, ke mi vere amas ludi per poŝtelefonoj.


### Averto `> [!WARN]`

> [!WARN]
> Dum sovaĝa aventuro, gravas resti sekura. Jen kelkaj ĉefaj sekurecaj konsiletoj:
>
> - **Kontrolu la veterprognozon** : Pasintsemajne grupo da grimpistoj renkontis ŝtormon duonvoje sur la monto ĉar ili ne kontrolis la veterprognozon kaj devis evakui urĝe.
> - **Portu necesan ilaron** : Certigu, ke vi kunportu sufiĉajn manĝaĵojn, akvon kaj unuajn helpajn provizojn.
> - **Komprenu la terenon** : Familiariĝu kun la tereno kaj itineroj de la aventurregiono anticipe por eviti perdiĝon.
> - **Restu Konektita** : Restu konektita al la ekstera mondo kaj certigu, ke ĉiuj povas reveni sekure.
>
> Memoru, sekureco ĉiam venas unue!

## Listo De Faroj

- [x] Dezajnu produktan prototipon kaj trajtoliston
- [ ] Determini teknologiajn stakojn kaj evoluilojn
- [ ] Disvolvu templiniojn kaj mejloŝtonojn pri produkta disvolviĝo

## Listo

### Ordigita Listo

1. kurante
   1. Trifoje semajne, 5 kilometrojn ĉiufoje
   1. Kuru duonmaratonon
1. gimnaziotrejnado
   1. Dufoje semajne, 1 horo ĉiufoje
   1. Fokuso sur kernaj muskoloj

### Neordigita Listo

* sociaj eventoj
  - Partoprenu en industriaj interŝanĝo-renkontiĝoj
    + Sesio pri teknologia kundivido
    + Renkontiĝo pri Entreprenema Interŝanĝo
  - Organizu kunvenon de amikoj
    + Subĉiela BBQ
    + filmnokto

## Folio

| pensulo       | Ĉefaj kontribuoj                           |
|--------------|------------------------------------|
| Konfuceo         | Fondinto de Konfuceismo |
| Sokrato     | patro de okcidenta filozofio  |
| Nietzsche         | Supervira filozofio, kritikante tradician moralecon kaj religion       |
| marks       | komunismo |

### Granda Tablo Ekrano Optimumigo

Por relative grandaj tabeloj, la sekvaj metodoj povas esti uzataj por optimumigi la ekranefikon:

1. Uzu pli malgrandan tiparon

   Ekzemple, envolvu la tabelon per `<div style="font-size:14px">` kaj `</div>` .

   Notu, ke la `div` etikedo devas okupi sian propran linion, kaj lasi malplenajn liniojn antaŭ kaj post ĝi.
1. Por pli longa teksto en ĉelo, enigu `<br>` por envolvi la linion
1. Se kolumno estas tro mallonga, vi povas aldoni `<div style="width:100px">xxx</div>` al la kaplinio por pligrandigi la larĝon, kaj vi ankaŭ povas aldoni [`<wbr>` al la kaplinio](//developer.mozilla.org/docs/Web/HTML/Element/wbr) por kontroli la liniorompan pozicion.

Ekzemplo de pruvo estas kiel sekvas:

<div style="font-size:14px">

| nacio       | <div style="width:70px;margin:auto">pensulo nomo</div> | Era | Ĉefaj ideologiaj kontribuoj                                                       |
|------------|------------------------------------------------|-----------------|--------------------------------------------------------------------|
| Ĉinio       | Konfuceo                                           | 551-479 a.K   | La fondinto de Konfuceismo proponis kernkonceptojn kiel ekzemple "bonvolemo" kaj "proprieco" kaj emfazis moralan kultivadon kaj socian ordon. |
| antikva grekio     | Sokrato                                       | 469-399 a.K   | Esplori la veron per dialogo kaj dialektiko proponas "koni vin mem" kaj emfazas racian pensadon.         |
| Francio       | Voltaire                                         | 1694-1778       | Reprezentaj figuroj de la klerismo rekomendis raciecon, liberecon kaj egalecon, kaj kritikis religian superstiĉon kaj aŭtoritateman regadon.   |
| Germanujo       | Kant                                           | 1724-1804       | Prezenti la "Kritiko de Pura Racio"<br> Esploras la fundamentojn de moralo, libereco kaj scio, emfazante praktikan racion     |

</div>

La pseŭdokodo por ĉi-supra ekzemplo estas kiel sekvas:

```md

<div style="font-size:14px">

| xx | <div style="width:70px;margin:auto">xx<wbr>xx</div> | xx | xx |
|----|----|-----------|----|
| xx | xx | xx<br>xxx | xx |

</div>

```

## Kodo

### Enlinia Kodo

En la vasta mondo de programlingvoj, `Rust` , `Python` , `JavaScript` kaj `Go` ĉiu okupas unikan pozicion.

### Multoblaj Linioj De Kodo

```rust
fn main() {
  let x = 10;
  println!("Hello, world! {}", x);
}
```

## Liniorompo Ene De Alineo

Liniorompoj ene de alineoj povas esti atingitaj sen aldoni malplenajn liniojn inter linioj.
La interspaco inter liniorompoj ene de alineoj estas pli malgranda ol la interspaco inter alineoj.

ekzemple:

> Vivu kiel bonega homo,
> Morto ankaŭ estas fantoma heroo.
> Mi ankoraŭ sopiras Xiang Yu,
> Malvolonta transiri Jiangdong.
>
> Li Qingzhao uzis la tragedian rakonton de Xiang Yu por sugesti la nekompetentecon de la Dinastio Song.
> Esprimante malkontenton kun la imperiestra kortego por kapitulacado sen batalo.