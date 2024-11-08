# Seznam Stylů

[Kliknutím sem procházejte zdrojový soubor této stránky](//raw.githubusercontent.com/i18n-site/md/refs/heads/main/zh/i18n.site/md/styl.md) a zjistěte, jak zapsat `MarkDown` v následujících stylech.

## Složený Blok

|+| Co je MarkDown?

    MarkDown je lehký značkovací jazyk, který uživatelům umožňuje vytvářet formátované dokumenty ve formátu prostého textu, který se snadno čte a píše.

    Běžně se používá k psaní dokumentace, blogových článků, e-knih, příspěvků na fóru atd.

    Má následující výhody:

    1. Snadno se učí
    1. Vysoce čtivé
    1. Ovládání verzí přátelské

       Protože `MarkDown` dokumentů je ve formátu prostého textu, programátoři je mohou snadno začlenit do systémů správy verzí (jako `git` ).

       Díky tomu je sledování změn a spolupráce mnohem jednodušší, zejména při vývoji týmu.

|-| Co je I18N?

    "I18N" je zkratka "Internacionalizace".

    Protože slovo „Internacionalizace“ má 18 písmen mezi „I“ a „N“, používá se pro zjednodušení reprezentace „I18N“.

    Laicky řečeno to znamená podporu více jazyků.


Skládací blok je rozšířená syntaxe `i18n.site` až `MarkDown` , zapsaná následovně :

```
|+| TITLE
    MARKDOWN CONTENT
    YOUR CAN WRITE MULTI LINE CONTENT
```

s `|+| `或`|-| Řádek začínající ` vygeneruje skládací blok a obsahem skládacího bloku jsou následující řádky se stejnou úrovní odsazení (odstavce jsou odděleny prázdnými řádky).

Pass`|-| `标记的折叠块默认展开，`|+| `Označené sbalené bloky jsou ve výchozím nastavení sbalené.

## & &

Toto je podtržítko __ __~~ přeškrtnout~~ a **tučný** text prezentace.

Píše se takto:

```txt
这是__下划线__、~~删除线~~和**加粗**的演示文本。
```

Analyzátor `MarkDown` nástroje pro tvorbu webových stránek `i18n.site` má optimalizovanou syntaxi podtržení, přeškrtnutí a tučného písma. Může se projevit bez mezer před a za značkou, což usnadňuje psaní dokumentů v jazycích, jako je Čína, Japonsko a Korea. nepoužívejte mezery jako oddělovače.

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
> Nezapomeňte zkontrolovat platnost vašeho pasu a víza, jejichž platnost vypršela, nemohou vstoupit ani opustit zemi.

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
> Když se vydáte na divoké dobrodružství, je důležité zůstat v bezpečí. Zde je několik klíčových bezpečnostních tipů:
>
> - **Zkontrolujte předpověď počasí** : Minulý týden se skupina horolezců setkala s bouří v polovině hory, protože nezkontrolovali předpověď počasí a museli se naléhavě evakuovat.
> - **Noste s sebou potřebné vybavení** : Ujistěte se, že máte dostatek jídla, vody a zásob první pomoci.
> - **Pochopte terén** : Seznamte se předem s terénem a trasami dobrodružné oblasti, abyste se neztratili.
> - **Zůstaňte ve spojení** : Zůstaňte ve spojení s vnějším světem a zajistěte, aby se každý mohl bezpečně vrátit.
>
> Pamatujte, že bezpečnost je vždy na prvním místě!

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
    + Podnikatelská burza setkání
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

### Optimalizace Zobrazení Velkého Stolu

U relativně velkých tabulek lze k optimalizaci efektu zobrazení použít následující metody:

1. Použijte menší písmo

   Například obalte tabulku `<div style="font-size:14px">` a `</div>` .

   Všimněte si, že značka `div` musí zabírat svůj vlastní řádek a ponechat před ním a za ním prázdné řádky.
1. Pro delší text v buňce vložte `<br>` pro zalomení řádku
1. Pokud je sloupec zmáčknutý příliš krátce, můžete přidat `<div style="width:100px">xxx</div>` do záhlaví, abyste rozšířili šířku, a také můžete přidat [`<wbr>` do záhlaví,](//developer.mozilla.org/docs/Web/HTML/Element/wbr) abyste řídili pozici zalomení řádku.

Demonstrační příklad je následující:

<div style="font-size:14px">

| národ       | <div style="width:70px;margin:auto">jméno myslitele</div> | Éra | Hlavní ideologické příspěvky                                                       |
|------------|------------------------------------------------|-----------------|--------------------------------------------------------------------|
| Čína       | Konfucius                                           | 551-479 před naším letopočtem   | Zakladatel konfucianismu navrhl základní pojmy jako „shovívavost“ a „slušnost“ a zdůraznil mravní kultivaci a společenský řád. |
| starověké Řecko     | Sokrates                                       | 469-399 před naším letopočtem   | Zkoumání pravdy prostřednictvím dialogu a dialektiky navrhuje „poznej sám sebe“ a klade důraz na racionální myšlení         |
| Francie       | Voltaire                                         | 1694-1778       | Reprezentativní postavy osvícenství obhajovaly racionalitu, svobodu a rovnost a kritizovaly náboženské pověry a autoritativní vládu.   |
| Německo       | Kant                                           | 1724-1804       | Předložte „kritiku čistého rozumu“<br> Zkoumá základy morálky, svobody a vědění, klade důraz na praktický rozum     |

</div>

Pseudokód pro výše uvedený příklad je následující:

```md

<div style="font-size:14px">

| xx | <div style="width:70px;margin:auto">xx<wbr>xx</div> | xx | xx |
|----|----|-----------|----|
| xx | xx | xx<br>xxx | xx |

</div>

```

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

## Zalomení Řádku v Odstavci

Zalomení řádků v odstavcích lze dosáhnout bez přidání prázdných řádků mezi řádky.
Mezery mezi zalomeními řádků v odstavcích jsou menší než mezery mezi odstavci.

například:

> Žít jako skvělý člověk,
> Smrt je také duchem hrdina.
> Stále mi chybí Xiang Yu,
> Zdráhá se přejít Jiangdong.
>
> Li Qingzhao použil tragický příběh Xiang Yu, aby naznačil neschopnost dynastie Song.
> Vyjádření nespokojenosti s císařským dvorem za to, že se vzdal bez boje.