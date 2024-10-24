# Seznam Stylů

[Kliknutím sem procházejte zdrojový soubor této stránky](//raw.githubusercontent.com/i18n-site/md/refs/heads/main/$LANG/i18n.site/md/styl.md) a zjistěte, jak zapsat `MarkDown` v následujících stylech.

## & &

Toto je podtržítko __ __~~ přeškrtnout~~ a **tučný** text prezentace.

Píše se takto:

```txt
这是__下划线__、~~删除线~~和**加粗**的演示文本。
```

Analyzátor `MarkDown` nástroje pro tvorbu webových stránek `i18n.site` optimalizoval syntaxi podtržení, přeškrtnutí a tučného písma. Může se projevit bez mezer před a za značkou, což usnadňuje psaní dokumentů v jazycích, jako je Čína, Japonsko a Korea. které nepoužívají mezery jako oddělovače.

Rozšířené čtení : [Proč se syntaxe Markdown ( `**……**` ) Nuggets někdy neprojeví?](//juejin.cn/post/7064565848421171213)

## Citovat

### Jednořádková Citace

> Je mou přirozeností, že můj talent bude užitečný a vrátím se, až utratím všechny své peníze.
<p style="text-align:right">─ Li Bai</p>

### Více Řádkových Uvozovek

> Další jedinečnou výhodou sci-fi je její extrémně široký záběr.
> „Válka a mír“ s milionem slov pouze popisuje historii regionu na několik desetiletí;
> A sci-fi romány, jako je Asimovova „Konečná odpověď“, živě popisují miliardy let historie celého vesmíru, včetně lidských bytostí, pouhými několika tisíci slovy.
> Taková inkluzivita a smělost není v tradiční literatuře možné dosáhnout.
<p style="text-align:right">── Liu Cixin</p>

### Tip `> [!TIP]`

> [!TIP]
> Nezapomeňte zkontrolovat platnost svého pasu a víza, jejichž platnost vypršela, nemohou vstoupit ani opustit zemi.

Píše se následovně

```
> [!TIP]
> YOUR CONTENT
```

### Poznámka `> [!NOTE]`

> [!NOTE]
> Pokud mi pošlete zprávu a já okamžitě odpovím, co to znamená?
> To ukazuje, že opravdu miluji hraní s mobilními telefony.


### Varování `> [!WARN]`

> [!WARN]
> Když se vydáte na divoké dobrodružství, je důležité zůstat v bezpečí.
> Minulý týden se skupina horolezců setkala s bouří v polovině hory a museli se evakuovat, protože nezkontrolovali předpověď počasí.
> Pamatujte, že jakákoli venkovní aktivita vyžaduje odpovídající přípravu a pozornost vůči počasí.

## Seznam Úkolů

- [x] Navrhněte prototyp produktu a seznam funkcí
- [ ] Určete technologický zásobník a vývojové nástroje
- [ ] Vypracujte časové osy a milníky vývoje produktů

## Seznam

### Objednaný Seznam

1. běh
   1. Třikrát týdně, pokaždé 5 kilometrů
   1. Uběhnout půlmaraton
1. trénink v tělocvičně
   1. Dvakrát týdně vždy 1 hodinu
   1. Zaměřte se na základní svaly

### Neuspořádaný Seznam

* společenské akce
  - Zúčastněte se výměnných setkání v oboru
    + Relace sdílení technologií
    + Podnikatelské výměnné setkání
  - Uspořádejte setkání přátel
    + Venkovní grilování
    + filmový večer

## List

| myslitel       | Hlavní příspěvky                           |
|--------------|------------------------------------|
| Konfucius         | Zakladatel konfucianismu |
| Sokrates     | otec západní filozofie  |
| Nietzsche         | Filozofie Supermana, kritizující tradiční morálku a náboženství       |
| marx       | komunismu |

## Kód

### Vložený Kód

V rozsáhlém světě programovacích jazyků zaujímá `Rust` , `Python` , `JavaScript` a `Go` každý jedinečnou pozici.

### Více Řádků Kódu

```rust
fn main() {
  let x = 10;
  println!("Hello, world! {}", x);
}
```