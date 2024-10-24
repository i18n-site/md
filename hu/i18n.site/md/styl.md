# Stíluslista

[Kattintson ide az oldal forrásfájljának böngészéséhez,](//raw.githubusercontent.com/i18n-site/md/refs/heads/main/$LANG/i18n.site/md/styl.md) hogy megtudja, hogyan írhat `MarkDown` a következő stílusokban.

## & &

__ az aláhúzás __ ,~~ áthúzott~~ és **félkövér** prezentációs szöveg.

A következőképpen írják:

```txt
这是__下划线__、~~删除线~~和**加粗**的演示文本。
```

A `i18n.site` webhelyépítő eszköz `MarkDown` elemzője optimalizálta az aláhúzást, az áthúzást és a félkövér betűtípust. A jelölés előtt és után szóközök nélkül is érvénybe léphet, így könnyebben írhat dokumentumokat olyan nyelveken, mint például Kína, Japán és Korea. amelyek nem használnak szóközt elválasztóként.

: olvasás [Miért nem érvényesül néha a Nuggets Markdown szintaxisa ( `**……**` )?](//juejin.cn/post/7064565848421171213)

## Idézet

### Egysoros Idézet

> Természetemhez tartozik, hogy a tehetségem hasznos lesz, és minden pénzem elköltése után visszajövök.
<p style="text-align:right">─ Li Bai</p>

### Többsoros Idézetek

> A sci-fi másik egyedülálló előnye rendkívül széles hatóköre.
> A "Háború és béke" millió szóval csak egy régió több évtizedes történetét írja le;
> Az olyan sci-fi regények pedig, mint Asimov „A végső válasz”, élénken írják le néhány ezer szóban az egész univerzum több milliárd éves történetét, beleértve az embereket is.
> Ilyen befogadás és merészség a hagyományos irodalomban lehetetlen.
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
> Ha vad kalandra indul, fontos, hogy biztonságban legyünk.
> Múlt héten hegymászók egy csoportja viharba ütközött a hegy felénél, és evakuálniuk kellett, mert nem ellenőrizték az időjárás-előrejelzést.
> Ne feledje, minden szabadtéri tevékenység megfelelő felkészülést és az időjárásra való odafigyelést igényel.

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

## kód

### Soron Belüli Kód

A programozási nyelvek hatalmas világában `Rust` , `Python` , `JavaScript` és `Go` egyedi pozíciót foglal el.

### Több Soros Kód

```rust
fn main() {
  let x = 10;
  println!("Hello, world! {}", x);
}
```