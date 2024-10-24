# Lista E Stileve

[Klikoni këtu për të shfletuar skedarin burimor të kësaj faqeje](//raw.githubusercontent.com/i18n-site/md/refs/heads/main/$LANG/i18n.site/md/styl.md) për të parë se si të shkruani `MarkDown` në stilet e mëposhtme.

## & Strikethrough &

__ është Nënvizimi __ ,~~ grevë~~ dhe tekst prezantues **të guximshëm** .

Është shkruar si më poshtë:

```txt
这是__下划线__、~~删除线~~和**加粗**的演示文本。
```

Analisti `MarkDown` i veglës së ndërtimit të uebsajtit `i18n.site` ka optimizuar sintaksën e nënvizuar, gërmuese dhe të theksuara. Mund të hyjë në fuqi pa hapësira para dhe pas shenjës, duke e bërë më të lehtë shkrimin e dokumenteve në gjuhë të tilla si Kina, Japonia dhe Koreja. mos përdorni hapësira si ndarëse.

: i zgjeruar [Pse sintaksa Markdown ( `**……**` ) e Nuggets ndonjëherë nuk hyn në fuqi?](//juejin.cn/post/7064565848421171213)

## Citim

### Citat Me Një Rresht

> Është natyra ime që talentet e mia do të jenë të dobishme dhe unë do të kthehem pasi të jenë shpenzuar të gjitha paratë e mia.
<p style="text-align:right">─ Li Bai</p>

### Kuotat E Shumë Rreshtave

> Një tjetër avantazh unik i fantashkencës është shtrirja e tij jashtëzakonisht e gjerë.
> Një "Lufta dhe Paqja", me një milion fjalë, përshkruan vetëm historinë e një rajoni për disa dekada;
> Dhe romanet fantastiko-shkencore si "Përgjigjja përfundimtare" e Asimov përshkruajnë gjallërisht historinë miliarda vjeçare të të gjithë universit, duke përfshirë qeniet njerëzore, me vetëm disa mijëra fjalë.
> Një gjithëpërfshirje dhe guxim i tillë është i pamundur të arrihet në letërsinë tradicionale.
<p style="text-align:right">── Liu Cixin</p>

### Këshilla `> [!TIP]`

> [!TIP]
> Mos harroni të kontrolloni vlefshmërinë e pasaportës dhe vizës suaj Dokumentet e skaduara nuk mund të hyjnë ose të dalin nga vendi.

Është shkruar si më poshtë

```
> [!TIP]
> YOUR CONTENT
```

### Vërejtje `> [!NOTE]`

> [!NOTE]
> Nëse më dërgoni një mesazh dhe unë përgjigjem menjëherë, çfarë do të thotë?
> Kjo tregon se më pëlqen shumë të luaj me celularë.


### Paralajmërim `> [!WARN]`

> [!WARN]
> Kur shkoni në një aventurë të egër, është e rëndësishme të qëndroni të sigurt.
> Javën e kaluar, një grup alpinistësh hasën në një stuhi në gjysmë të rrugës në mal dhe iu desh të evakuoheshin sepse nuk arritën të kontrollonin parashikimin e motit.
> Mos harroni, çdo aktivitet në natyrë kërkon përgatitje adekuate dhe vëmendje ndaj motit.

## Lista E Detyrave

- [x] Dizajnoni prototipin e produktit dhe listën e veçorive
- [ ] Përcaktoni grupin e teknologjisë dhe mjetet e zhvillimit
- [ ] Zhvilloni afatet kohore dhe pikat e zhvillimit të produktit

## Listë

### Lista E Porositur

1. vrapimi
   1. Tre herë në javë, 5 kilometra çdo herë
   1. Vraponi një gjysmë maratonë
1. stërvitje në palestër
   1. Dy herë në javë, 1 orë çdo herë
   1. Përqendrohuni në muskujt e bazës

### Lista E Parenditur

* ngjarje sociale
  - Merrni pjesë në takimet e shkëmbimit të industrisë
    + Sesioni i ndarjes së teknologjisë
    + Takimi i shkëmbimit të sipërmarrjes
  - Organizoni një mbledhje miqsh
    + BBQ në natyrë
    + nata e filmit

## Fletë

| mendimtar       | Kontributet kryesore                           |
|--------------|------------------------------------|
| Konfuci         | Themeluesi i Konfucianizmit |
| Sokrati     | babai i filozofisë perëndimore  |
| Niçe         | Filozofia e Supermenit, duke kritikuar moralin dhe fenë tradicionale       |
| marks       | komunizmit |

## kodi

### Kodi Inline

Në botën e madhe të gjuhëve të programimit, `Rust` , `Python` , `JavaScript` dhe `Go` secila zë një pozicion unik.

### Linja Të Shumta Kodi

```rust
fn main() {
  let x = 10;
  println!("Hello, world! {}", x);
}
```