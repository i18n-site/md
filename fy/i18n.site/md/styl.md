# Styl List

[Klik hjir om troch it boarnebestân fan dizze side te blêdzjen](//raw.githubusercontent.com/i18n-site/md/refs/heads/main/$LANG/i18n.site/md/styl.md) om te sjen hoe't jo `MarkDown` skriuwe kinne yn de folgjende stilen.

## & &

__ is __~~ trochstriken~~ en **fet** presintaasje tekst.

It is skreaun as folget:

```txt
这是__下划线__、~~删除线~~和**加粗**的演示文本。
```

De `MarkDown` parser fan it `i18n.site` websidebou-ark hat de syntaksis optimalisearre, trochstreken en fet. dy't gjin spaasjes brûke as skiedingstekens.

: lêzing [Wêrom hat de Markdown -syntaksis fan Nuggets ( `**……**` ) soms gjin effekt?](//juejin.cn/post/7064565848421171213)

## Quote

### Single Line Quote

> It is myn natuer dat myn talinten nuttich sille wêze, en ik sil weromkomme nei't al myn jild is bestege.
<p style="text-align:right">─ Li Bai</p>

### Meardere Line Quotes

> In oar unyk foardiel fan science fiction is har ekstreem brede omfang.
> In "Oarloch en Frede", mei in miljoen wurden, beskriuwt allinich de skiednis fan in regio foar ferskate desennia;
> En science fiction-romans lykas Asimov's "The Final Answer" beskriuwe libbendich de miljarden jierren fan skiednis fan it heule universum, ynklusyf minsken, yn mar in pear tûzen wurden.
> Sokke ynklusiviteit en frijmoedigens binne yn de tradisjonele literatuer ûnmooglik te berikken.
<p style="text-align:right">── Liu Cixin</p>

### Tip `> [!TIP]`

> [!TIP]
> Unthâld om te kontrolearjen de jildichheid fan jo paspoart en visa Ferrûne dokuminten kinne net ynfiere of út it lân.

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
> As jo op in wyld aventoer gean, is it wichtich om feilich te bliuwen.
> Ferline wike kaam in groep klimmers healwei de berch in stoarm tsjin en moasten evakuearje om't se de waarberjocht net kontrolearren.
> Unthâld, elke bûtenaktiviteit fereasket adekwate tarieding en omtinken foar it waar.

## To-Do List

- [x] Untwerp produktprototype en funksjelist
- [ ] Bepale technology stack en ûntwikkeling ark
- [ ] Untwikkelje produktûntwikkelingstiidlinen en mylpalen

## List

### Bestelde List

1. te rinnen
   1. Trije kear yn 'e wike, eltse kear 5 kilometer
   1. In heale maraton rinne
1. gym training
   1. Twa kear yn 'e wike, 1 oere eltse kear
   1. Fokus op kearnmuskels

### Unordered List

* sosjale eveneminten
  - Meidwaan oan yndustry útwikseling gearkomsten
    + Technology dielen sesje
    + Undernimmerskip útwikseling gearkomste
  - Organisearje in gearkomste fan freonen
    + Outdoor BBQ
    + filmjûn

## Fel

| tinker       | Main bydragen                           |
|--------------|------------------------------------|
| Confucius         | Stifter fan it konfuzianisme |
| Sokrates     | heit fan 'e westerske filosofy  |
| Nietzsche         | Superman filosofy, krityk op tradisjonele moraal en religy       |
| marx       | kommunisme |

## koade

### Inline Koade

Yn 'e grutte wrâld fan programmeartalen nimme `Rust` , `Python` , `JavaScript` en `Go` elk in unike posysje yn.

### Meardere Rigels Fan Koade

```rust
fn main() {
  let x = 10;
  println!("Hello, world! {}", x);
}
```