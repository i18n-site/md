# Stilliste

[Klik her for at gennemse kildefilen på denne side](//raw.githubusercontent.com/i18n-site/md/refs/heads/main/$LANG/i18n.site/md/styl.md) for at se, hvordan du skriver `MarkDown` i følgende stilarter.

## & &

__ er __~~ gennemstreget~~ og **fed** præsentationstekst.

Det er skrevet som følger:

```txt
这是__下划线__、~~删除线~~和**加粗**的演示文本。
```

`MarkDown` parseren af `i18n.site` webstedsopbygningsværktøjet har optimeret syntaksen for understregning, gennemstregning og fed skrift. Den kan træde i kraft uden mellemrum før og efter mærket, hvilket gør det lettere at skrive dokumenter på sprog som Kina, Japan og Korea. der ikke bruger mellemrum som skilletegn.

Udvidet : [Hvorfor træder Nuggets' Markdown syntaks ( `**……**` ) nogle gange ikke i kraft?](//juejin.cn/post/7064565848421171213)

## Citere

### Enkelt Linje Citat

> Det er min natur, at mine talenter vil være nyttige, og jeg vil vende tilbage, når alle mine penge er brugt.
<p style="text-align:right">─ Li Bai</p>

### Flere Linjer Citater

> En anden unik fordel ved science fiction er dens ekstremt brede rækkevidde.
> En "Krig og Fred", med en million ord, beskriver kun en regions historie i flere årtier;
> Og science fiction-romaner som Asimovs "Det endelige svar" beskriver levende milliarder af års historie i hele universet, inklusive mennesker, med blot nogle få tusinde ord.
> En sådan rummelighed og dristighed er umulig at opnå i traditionel litteratur.
<p style="text-align:right">── Liu Cixin</p>

### Tip `> [!TIP]`

> [!TIP]
> Husk at kontrollere gyldigheden af dit pas og visum Udløbne dokumenter kan ikke komme ind eller ud af landet.

Det er skrevet som følger

```
> [!TIP]
> YOUR CONTENT
```

### Bemærkning `> [!NOTE]`

> [!NOTE]
> Hvis du sender mig en besked, og jeg svarer med det samme, hvad betyder det så?
> Dette viser, at jeg virkelig elsker at lege med mobiltelefoner.


### Advarsel `> [!WARN]`

> [!WARN]
> Når du skal på et vildt eventyr, er det vigtigt at være sikker.
> I sidste uge stødte en gruppe klatrere på en storm halvvejs oppe af bjerget og måtte evakuere, fordi de ikke kunne tjekke vejrudsigten.
> Husk, enhver udendørs aktivitet kræver tilstrækkelig forberedelse og opmærksomhed på vejret.

## To-Do Liste

- [x] Design produktprototype og funktionsliste
- [ ] Bestem teknologistak og udviklingsværktøjer
- [ ] Udvikle tidslinjer og milepæle for produktudvikling

## Liste

### Bestilt Liste

1. løb
   1. Tre gange om ugen, 5 kilometer hver gang
   1. Løb et halvmaraton
1. gym træning
   1. 2 gange om ugen, 1 time hver gang
   1. Fokus på kernemuskulaturen

### Uordnet Liste

* sociale arrangementer
  - Deltage i brancheudvekslingsmøder
    + Teknologidelingssession
    + Iværksætterudvekslingsmøde
  - Arranger en sammenkomst af venner
    + Udendørs BBQ
    + filmaften

## Ark

| tænker       | Hovedbidrag                           |
|--------------|------------------------------------|
| Konfucius         | Grundlægger af konfucianismen |
| Sokrates     | far til vestlig filosofi  |
| Nietzsche         | Superman filosofi, der kritiserer traditionel moral og religion       |
| marx       | kommunisme |

## kode

### Inline Kode

I den store verden af programmeringssprog indtager `Rust` , `Python` , `JavaScript` og `Go` hver en unik position.

### Flere Linjer Kode

```rust
fn main() {
  let x = 10;
  println!("Hello, world! {}", x);
}
```