# Zoznam Štýlov

[Kliknite sem, ak chcete prechádzať zdrojový súbor tejto stránky,](//raw.githubusercontent.com/i18n-site/md/refs/heads/main/zh/i18n.site/md/styl.md) aby ste videli, ako napísať `MarkDown` v nasledujúcich štýloch.

## Skladaný Blok

|+| Čo je MarkDown?

    MarkDown je ľahký značkovací jazyk, ktorý používateľom umožňuje vytvárať formátované dokumenty vo formáte obyčajného textu, ktorý sa ľahko číta a píše.

    Bežne sa používa na písanie dokumentácie, blogových článkov, elektronických kníh, príspevkov na fórach atď.

    Má nasledujúce výhody:

    1. Ľahko sa učí
    1. Vysoko čitateľné
    1. Ovládanie verzií priateľské

       Keďže `MarkDown` dokumentov je vo formáte obyčajného textu, programátori ich môžu ľahko začleniť do systémov správy verzií (napríklad `git` ).

       Vďaka tomu je sledovanie zmien a spolupráca oveľa jednoduchšie, najmä pri tímovom vývoji.

|-| Čo je I18N?

    "I18N" je skratka pre "Internacionalizácia".

    Keďže slovo „Internacionalizácia“ má 18 písmen medzi „I“ a „N“, na zjednodušenie reprezentácie sa používa „I18N“.

    Laicky to znamená podporu viacerých jazykov.


Skladací blok je rozšírená syntax `i18n.site` až `MarkDown` , zapísaná nasledovne :

```
|+| TITLE
    MARKDOWN CONTENT
    YOUR CAN WRITE MULTI LINE CONTENT
```

s `|+| `或`|-| Riadok začínajúci znakom ` vygeneruje skladací blok a obsahom skladacieho bloku sú nasledujúce riadky s rovnakou úrovňou odsadenia (odseky sú oddelené prázdnymi riadkami).

Pass`|-| `标记的折叠块默认展开，`|+| `Označené zbalené bloky sú štandardne zbalené.

## Podčiarknite & &

Toto je podčiarknutie __ __~~ prečiarknutie~~ a **tučný** text prezentácie.

Píše sa takto:

```txt
这是__下划线__、~~删除线~~和**加粗**的演示文本。
```

Analyzátor `MarkDown` nástroja na vytváranie webových stránok `i18n.site` má optimalizovanú syntax podčiarknutia, prečiarknutia a tučného písma. Môže sa prejaviť bez medzier pred a za značkou, čo uľahčuje písanie dokumentov v jazykoch ako Čína, Japonsko a Kórea. nepoužívajte medzery ako oddeľovače.

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
> Keď idete na divoké dobrodružstvo, je dôležité zostať v bezpečí. Tu je niekoľko kľúčových bezpečnostných tipov:
>
> - **Skontrolujte predpoveď počasia** : Minulý týždeň sa skupina horolezcov stretla s búrkou v polovici hory, pretože nekontrolovali predpoveď počasia a museli sa urýchlene evakuovať.
> - **Noste so sebou potrebné vybavenie** : Uistite sa, že máte dostatok jedla, vody a potrieb prvej pomoci.
> - **Pochopte terén** : Vopred sa oboznámte s terénom a trasami dobrodružnej oblasti, aby ste sa nestratili.
> - **Zostaňte v spojení** : Zostaňte v spojení s vonkajším svetom a zabezpečte, aby sa každý mohol bezpečne vrátiť.
>
> Pamätajte, že bezpečnosť je vždy na prvom mieste!

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
    + Podnikateľské výmenné stretnutie
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

### Optimalizácia Zobrazenia Veľkého Stola

Pre relatívne veľké tabuľky možno na optimalizáciu efektu zobrazenia použiť nasledujúce metódy:

1. Použite menšie písmo

   Napríklad zabaľte tabuľku `<div style="font-size:14px">` a `</div>` .

   Všimnite si, že značka `div` musí zaberať svoj vlastný riadok a nechať prázdne riadky pred a za ňou.
1. Pre dlhší text v bunke vložte `<br>` na zalomenie riadku
1. Ak je stĺpec stlačený príliš nakrátko, môžete pridať `<div style="width:100px">xxx</div>` do hlavičky, aby ste rozšírili šírku, a tiež môžete pridať [`<wbr>` do hlavičky,](//developer.mozilla.org/docs/Web/HTML/Element/wbr) aby ste ovládali polohu zalomenia riadku.

Demonštračný príklad je nasledujúci:

<div style="font-size:14px">

| národa       | <div style="width:70px;margin:auto">meno mysliteľa</div> | éra | Hlavné ideologické príspevky                                                       |
|------------|------------------------------------------------|-----------------|--------------------------------------------------------------------|
| Čína       | Konfucius                                           | 551-479 pred Kristom   | Zakladateľ konfucianizmu navrhol základné pojmy ako „benevolencia“ a „primeranosť“ a zdôraznil morálnu kultiváciu a spoločenský poriadok. |
| staroveké Grécko     | Sokrates                                       | 469-399 pred Kristom   | Skúmanie pravdy prostredníctvom dialógu a dialektiky navrhuje „poznaj sám seba“ a kladie dôraz na racionálne myslenie         |
| Francúzsko       | Voltaire                                         | 1694-1778       | Predstavitelia osvietenstva obhajovali racionalitu, slobodu a rovnosť a kritizovali náboženské povery a autoritársku vládu.   |
| Nemecko       | Kant                                           | 1724-1804       | Predložte „Kritiku čistého rozumu“<br> Skúma základy morálky, slobody a poznania, pričom kladie dôraz na praktický rozum     |

</div>

Pseudokód pre vyššie uvedený príklad je nasledujúci:

```md

<div style="font-size:14px">

| xx | <div style="width:70px;margin:auto">xx<wbr>xx</div> | xx | xx |
|----|----|-----------|----|
| xx | xx | xx<br>xxx | xx |

</div>

```

## Kód

### Vložený Kód

V obrovskom svete programovacích jazykov majú `Rust` , `Python` , `JavaScript` a `Go` jedinečnú pozíciu.

### Viac Riadkov Kódu

```rust
fn main() {
  let x = 10;
  println!("Hello, world! {}", x);
}
```

## Zalomenie Riadku v Odseku

Zalomenie riadkov v odsekoch je možné dosiahnuť bez pridávania prázdnych riadkov medzi riadky.
Medzery medzi zalomeniami riadkov v rámci odsekov sú menšie ako medzery medzi odsekmi.

napríklad:

> Žiť ako skvelý človek,
> Smrť je tiež duchom hrdinom.
> Stále mi chýba Xiang Yu,
> Neradno prejsť cez Jiangdong.
>
> Li Qingzhao použil tragický príbeh Xiang Yu, aby naznačil nekompetentnosť dynastie Song.
> Vyjadrenie nespokojnosti s cisárskym dvorom za to, že sa vzdal bez boja.