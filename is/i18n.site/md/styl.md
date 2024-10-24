# Stílalisti

[Smelltu hér til að fletta í frumskrá þessarar síðu](//raw.githubusercontent.com/i18n-site/md/refs/heads/main/$LANG/i18n.site/md/styl.md) til að sjá hvernig á að skrifa `MarkDown` í eftirfarandi stílum.

## & &

__ er __~~ yfirstrikað~~ og **feitletraður** kynningartexti.

Það er skrifað sem hér segir:

```txt
这是__下划线__、~~删除线~~和**加粗**的演示文本。
```

`MarkDown` flokkari `i18n.site` vefsíðugerðarinnar hefur fínstillt undirstrikun, yfirstrikun og feitletraða setningafræði. sem nota ekki bil sem skil.

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
> Þegar þú ferð í villt ævintýri er mikilvægt að vera öruggur.
> Í síðustu viku lenti hópur fjallgöngumanna í óveðri á miðri leið upp á fjallið og þurfti að yfirgefa hann þar sem þeim tókst ekki að athuga veðurspána.
> Mundu að öll útivist krefst fullnægjandi undirbúnings og athygli á veðri.

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
  - Taktu þátt í atvinnuskiptum fundum
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

## kóða

### Innbyggður Kóða

Í hinum víðfeðma heimi forritunarmálanna hafa `Rust` , `Python` , `JavaScript` og `Go` hvert um sig einstaka stöðu.

### Margar Línur Af Kóða

```rust
fn main() {
  let x = 10;
  println!("Hello, world! {}", x);
}
```