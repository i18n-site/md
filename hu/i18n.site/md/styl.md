# Stíluslista

[Kattintson ide az oldal forrásfájljának böngészéséhez,](//raw.githubusercontent.com/i18n-site/md/refs/heads/main/zh/i18n.site/md/styl.md) hogy megtudja, hogyan írhat `MarkDown` a következő stílusokban.

## Összehajtott Blokk

|+| Mi az a MarkDown?

    A MarkDown egy könnyű jelölőnyelv, amely lehetővé teszi a felhasználók számára, hogy formázott dokumentumokat egyszerű szöveges formátumban hozzanak létre, amely könnyen olvasható és írható.

    Általában dokumentumok, blogcikkek, e-könyvek, fórumbejegyzések stb. írásához használják.

    Ennek a következő előnyei vannak:

    1. Könnyen megtanulható
    1. Jól olvasható
    1. Verzióvezérlés barátságos

       Mivel `MarkDown` dokumentumok sima szöveges formátumúak, a programozók könnyen beépíthetik őket a verziókezelő rendszerekbe (például `git` ).

       Ez sokkal egyszerűbbé teszi a változások követését és az együttműködést, különösen a csapatfejlesztésben.

|-| Mi az I18N?

    Az „I18N” az „Internationalization” rövidítése.

    Mivel a „nemzetközivé válás” szó 18 betűből áll az „I” és „N” között, az „I18N” kifejezést az ábrázolás egyszerűsítésére használják.

    Laikus kifejezéssel több nyelv támogatását jelenti.


A hajtogató blokk egy kiterjesztett szintaxis `i18n.site` -tól `MarkDown` ig, a következőképpen írva :

```
|+| TITLE
    MARKDOWN CONTENT
    YOUR CAN WRITE MULTI LINE CONTENT
```

`-val|+| `或`|-| A ` karakterrel kezdődő sor egy összehajtási blokkot generál, a hajtásblokk tartalma pedig a következő sorok azonos behúzással (a bekezdéseket üres sorok választják el).

Pass`|-| `标记的折叠块默认展开，`|+| `A címkézett összecsukott blokkok alapértelmezés szerint össze vannak csukva.

## & &

__ az aláhúzás __ ,~~ áthúzott~~ és **félkövér** prezentációs szöveg.

A következőképpen írják:

```txt
这是__下划线__、~~删除线~~和**加粗**的演示文本。
```

A `i18n.site` webhelykészítő eszköz `MarkDown` elemzője optimalizált aláhúzással, áthúzással és félkövér szintaxissal rendelkezik. A jelölés előtt és után szóközök nélkül is érvénybe léphet, így könnyebben írhat olyan nyelveket, mint például Kína, Japán és Korea. ne használjon szóközt elválasztóként.

: olvasás [Miért nem érvényesül néha a Nuggets Markdown szintaxisa ( `**……**` )?](//juejin.cn/post/7064565848421171213)

## Idézet

### Egysoros Idézet

> Természetemhez tartozik, hogy a tehetségem hasznos lesz, és minden pénzem elköltése után visszajövök.
<p style="text-align:right">─ Li Bai</p>

### Többsoros Idézetek

> A sci-fi másik egyedülálló előnye rendkívül széles hatóköre.
> A "Háború és béke" millió szóval csak egy régió több évtizedes történetét írja le;
> Az olyan sci-fi regények pedig, mint Asimov „A végső válasz”, élénken írják le néhány ezer szóban az egész univerzum több milliárd éves történetét, beleértve az embereket is.
> Ilyen befogadó és merészség a hagyományos irodalomban lehetetlen.
<p style="text-align:right">── Liu Cixin</p>

### Tipp `> [!TIP]`

> [!TIP]
> Ne felejtse el ellenőrizni útlevele és vízuma érvényességét.

A következőképpen van megírva

```
> [!TIP]
> YOUR CONTENT
```

### Megjegyzés `> [!NOTE]`

> [!NOTE]
> Ha küld egy üzenetet, és azonnal válaszolok, mit jelent az?
> Ez azt mutatja, hogy nagyon szeretek mobiltelefonnal játszani.


### Figyelmeztetés `> [!WARN]`

> [!WARN]
> Ha vad kalandra indul, fontos, hogy biztonságban legyünk. Íme néhány legfontosabb biztonsági tipp:
>
> - **Ellenőrizze az időjárás-előrejelzést** : A múlt héten hegymászók egy csoportja viharba ütközött a hegy felénél, mert nem ellenőrizték az időjárás-előrejelzést, és sürgősen evakuálniuk kellett.
> - **Vigyen magával szükséges felszerelést** : Vigyen magával elegendő élelmet, vizet és elsősegélynyújtási kelléket.
> - **Ismerje meg a terepet** : Előzetesen ismerkedjen meg a kalandterület domborzatával és útvonalaival, hogy elkerülje az eltévedést.
> - **Maradjon kapcsolatban** : Maradjon kapcsolatban a külvilággal, és biztosítsa, hogy mindenki biztonságosan visszatérhessen.
>
> Ne feledje, a biztonság mindig az első!

## Teendők Listája

- [x] Tervezze meg a termék prototípusát és a funkciók listáját
- [ ] A technológiai verem és a fejlesztőeszközök meghatározása
- [ ] Termékfejlesztési ütemtervek és mérföldkövek kidolgozása

## Lista

### Rendezett Lista

1. futás
   1. Hetente háromszor, minden alkalommal 5 kilométert
   1. Fuss le egy félmaratont
1. edzőtermi edzés
   1. Hetente kétszer, minden alkalommal 1 órát
   1. Koncentrálj a törzsizmokra

### Rendezetlen Lista

* társadalmi események
  - Vegyen részt iparági cseretalálkozókon
    + Technológiamegosztó munkamenet
    + Vállalkozói cseretalálkozó
  - Szervezz baráti összejövetelt
    + Kültéri BBQ
    + filmes este

## Lapot

| gondolkodó       | Fő hozzájárulások                           |
|--------------|------------------------------------|
| Konfuciusz         | A konfucianizmus megalapítója |
| Szókratész     | a nyugati filozófia atyja  |
| Nietzsche         | Superman filozófia, kritizálja a hagyományos erkölcsöt és vallást       |
| marx       | kommunizmus |

### Nagy Táblázatos Megjelenítés Optimalizálása

Viszonylag nagy táblázatok esetén a következő módszerek használhatók a megjelenítési hatás optimalizálására:

1. Használjon kisebb betűtípust

   Például csomagolja be a táblázatot `<div style="font-size:14px">` és `</div>` gyel.

   Vegye figyelembe, hogy a `div` címkének saját sorát kell elfoglalnia, és előtte és utána üres sorokat kell hagynia.
1. Ha hosszabb szöveget szeretne egy cellában, szúrjon be `<br>` a sor tördeléséhez
1. Ha egy oszlop túl rövidre van szorítva, akkor a fejlécben `<div style="width:100px">xxx</div>` bővíthető a szélesség, illetve [a fejléchez hozzáadhat `<wbr>`](//developer.mozilla.org/docs/Web/HTML/Element/wbr) a sortörés helyzetének szabályozásához.

A demonstrációs példa a következő:

<div style="font-size:14px">

| nemzet       | <div style="width:70px;margin:auto">gondolkodó név</div> | Korszak | Főbb ideológiai hozzájárulások                                                       |
|------------|------------------------------------------------|-----------------|--------------------------------------------------------------------|
| Kína       | Konfuciusz                                           | Kr.e. 551-479   | A konfucianizmus alapítója olyan alapvető fogalmakat javasolt, mint a "jóindulat" és az "illetékesség", és hangsúlyozta az erkölcsi művelődést és a társadalmi rendet. |
| ókori görögország     | Szókratész                                       | Kr.e. 469-399   | Az igazság párbeszéden és dialektikán keresztül történő feltárása azt sugallja, hogy „ismerd meg önmagad”, és hangsúlyozza a racionális gondolkodást         |
| Franciaország       | Voltaire                                         | 1694-1778       | A felvilágosodás képviselői a racionalitást, a szabadságot és az egyenlőséget szorgalmazták, bírálták a vallási babonákat és az autoriter uralmat.   |
| Németország       | Kant                                           | 1724-1804       | Tegye fel a "tiszta ész kritikáját"<br> Az erkölcs, a szabadság és a tudás alapjait kutatja, hangsúlyozva a gyakorlati értelmet     |

</div>

A fenti példa pszeudokódja a következő:

```md

<div style="font-size:14px">

| xx | <div style="width:70px;margin:auto">xx<wbr>xx</div> | xx | xx |
|----|----|-----------|----|
| xx | xx | xx<br>xxx | xx |

</div>

```

## Kód

### Soron Belüli Kód

A programozási nyelvek hatalmas világában `Rust` , `Python` , `JavaScript` és `Go` egyedi pozíciót foglal el.

### Több Soros Kód

```rust
fn main() {
  let x = 10;
  println!("Hello, world! {}", x);
}
```

## Sortörés a Bekezdésen Belül

A bekezdéseken belüli sortörések a sorok közötti üres sorok hozzáadása nélkül is megvalósíthatók.
A bekezdéseken belüli sortörések közötti távolság kisebb, mint a bekezdések közötti térköz.

például:

> Élj nagy emberként,
> A halál is szellemhős.
> Még mindig hiányzik Xiang Yu,
> Nem szívesen átkelne Jiangdongon.
>
> Li Qingzhao Xiang Yu tragikus történetét használta arra, hogy utaljon a Song-dinasztia alkalmatlanságára.
> Elégedetlenségének kifejezése a császári udvarral, amiért harc nélkül megadta magát.