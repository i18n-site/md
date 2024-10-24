# Zoznam Štýlov

[Kliknite sem, ak chcete prechádzať zdrojový súbor tejto stránky,](//raw.githubusercontent.com/i18n-site/md/refs/heads/main/$LANG/i18n.site/md/styl.md) aby ste videli, ako napísať `MarkDown` v nasledujúcich štýloch.

## Podčiarknite & &

Toto je podčiarknutie __ __~~ prečiarknutie~~ a **tučný** text prezentácie.

Píše sa takto:

```txt
这是__下划线__、~~删除线~~和**加粗**的演示文本。
```

Analyzátor `MarkDown` nástroja na vytváranie webových stránok `i18n.site` optimalizoval syntax podčiarknutia, prečiarknutia a tučného písma. Môže sa prejaviť bez medzier pred a za značkou, čo uľahčuje písanie dokumentov v jazykoch ako Čína, Japonsko a Kórea. ktoré nepoužívajú medzery ako oddeľovače.

: čítanie [Prečo sa syntax Markdown ( `**……**` ) Nuggets niekedy neprejaví?](//juejin.cn/post/7064565848421171213)

## Citovať

### Jednoriadkový Citát

> Je mojou povahou, že môj talent bude užitočný a vrátim sa, keď miniem všetky svoje peniaze.
<p style="text-align:right">─ Li Bai</p>

### Viacriadkové Úvodzovky

> Ďalšou jedinečnou výhodou sci-fi je jej mimoriadne široký záber.
> „Vojna a mier“ s miliónom slov len opisuje históriu regiónu na niekoľko desaťročí;
> A sci-fi romány ako Asimovova „Konečná odpoveď“ živo opisujú miliardy rokov histórie celého vesmíru, vrátane ľudských bytostí, len niekoľkými tisíckami slov.
> Takúto inkluzívnosť a smelosť nie je možné dosiahnuť v tradičnej literatúre.
<p style="text-align:right">── Liu Cixin</p>

### Tip `> [!TIP]`

> [!TIP]
> Nezabudnite skontrolovať platnosť vášho pasu a víza, ktorých platnosť uplynula, nemôžu vstúpiť do krajiny ani ju opustiť.

Píše sa nasledovne

```
> [!TIP]
> YOUR CONTENT
```

### Poznámka `> [!NOTE]`

> [!NOTE]
> Ak mi pošlete správu a ja okamžite odpoviem, čo to znamená?
> To ukazuje, že sa naozaj rád hrám s mobilnými telefónmi.


### Upozornenie `> [!WARN]`

> [!WARN]
> Keď idete na divoké dobrodružstvo, je dôležité zostať v bezpečí.
> Minulý týždeň sa skupina horolezcov stretla s búrkou v polovici hory a museli sa evakuovať, pretože nedokázali skontrolovať predpoveď počasia.
> Pamätajte, že akákoľvek vonkajšia aktivita si vyžaduje primeranú prípravu a pozornosť voči počasiu.

## Zoznam Úloh

- [x] Navrhnite prototyp produktu a zoznam funkcií
- [ ] Určite technologický zásobník a vývojové nástroje
- [ ] Vypracujte časové plány a míľniky vývoja produktov

## Zoznam

### Objednaný Zoznam

1. beh
   1. Trikrát do týždňa, zakaždým 5 kilometrov
   1. Zabehnúť polmaratón
1. tréning v telocvični
   1. Dvakrát týždenne, vždy 1 hodinu
   1. Zamerajte sa na základné svaly

### Neusporiadaný Zoznam

* spoločenských podujatí
  - Zúčastnite sa výmenných stretnutí v odvetví
    + Relácia zdieľania technológií
    + Výmenné podnikateľské stretnutie
  - Zorganizujte stretnutie priateľov
    + Vonkajšie grilovanie
    + filmový večer

## List

| mysliteľ       | Hlavné príspevky                           |
|--------------|------------------------------------|
| Konfucius         | Zakladateľ konfucianizmu |
| Sokrates     | otec západnej filozofie  |
| Nietzsche         | Filozofia Supermana, kritizujúca tradičnú morálku a náboženstvo       |
| marx       | komunizmu |

## kód

### Vložený Kód

V obrovskom svete programovacích jazykov zaujímajú `Rust` , `Python` , `JavaScript` a `Go` jedinečnú pozíciu.

### Viac Riadkov Kódu

```rust
fn main() {
  let x = 10;
  println!("Hello, world! {}", x);
}
```