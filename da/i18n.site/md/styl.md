# Stilliste

[Klik her for at gennemse kildefilen på denne side](//raw.githubusercontent.com/i18n-site/md/refs/heads/main/zh/i18n.site/md/styl.md) for at se, hvordan du skriver `MarkDown` i følgende stilarter.

## Foldet Blok

|+| Hvad er MarkDown?

    MarkDown er et let opmærkningssprog, der giver brugerne mulighed for at oprette formaterede dokumenter i et almindeligt tekstformat, der er nemt at læse og skrive.

    Almindelig brugt til at skrive dokumentation, blogartikler, e-bøger, forumindlæg osv.

    Det har følgende fordele:

    1. Let at lære
    1. Meget læsbar
    1. Versionskontrolvenlig

       Da `MarkDown` dokumenter er i almindeligt tekstformat, kan programmører nemt inkorporere dem i versionskontrolsystemer (som `git` ).

       Dette gør sporing af ændringer og samarbejde meget enklere, især i teamudvikling.

|-| Hvad er I18N?

    "I18N" er forkortelsen for "Internationalisering".

    Da ordet "Internationalisering" har 18 bogstaver mellem "I" og "N", bruges "I18N" til at forenkle repræsentationen.

    I lægmandssprog betyder det at understøtte flere sprog.


Foldeblok er en udvidet syntaks på `i18n.site` til `MarkDown` , skrevet som følger :

```
|+| TITLE
    MARKDOWN CONTENT
    YOUR CAN WRITE MULTI LINE CONTENT
```

med `|+| `或`|-| Linjen, der starter med `, genererer en foldeblok, og indholdet af foldeblokken er de efterfølgende linjer med samme niveau af indrykning (afsnit er adskilt af tomme linjer).

Bestå`|-| `标记的折叠块默认展开，`|+| `Mærkede skjulte blokke er som standard skjult.

## & &

__ er __~~ gennemstreget~~ og **fed** præsentationstekst.

Det er skrevet som følger:

```txt
这是__下划线__、~~删除线~~和**加粗**的演示文本。
```

`MarkDown` parseren af `i18n.site` webstedsopbygningsværktøjet har optimeret understregning, gennemstregning og fed syntaks. Den kan træde i kraft uden mellemrum før og efter mærket, hvilket gør det lettere at skrive dokumenter på sprog som Kina, Japan og Korea. Brug ikke mellemrum som skilletegn.

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
> Når du skal på et vildt eventyr, er det vigtigt at være sikker. Her er nogle vigtige sikkerhedstip:
>
> - **Tjek vejrudsigten** : I sidste uge stødte en gruppe klatrere på en storm halvvejs oppe på bjerget, fordi de ikke tjekkede vejrudsigten og måtte evakuere omgående.
> - **Medbring nødvendigt udstyr** : Sørg for at medbringe nok mad, vand og førstehjælpsforsyninger.
> - **Forstå terrænet** : Sæt dig ind i eventyrområdets terræn og ruter på forhånd for at undgå at fare vild.
> - **Hold forbindelsen** : Hold forbindelsen til omverdenen og sørg for, at alle kan vende sikkert tilbage.
>
> Husk, sikkerhed kommer altid først!

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

### Optimering Af Stor Bordskærm

For relativt store tabeller kan følgende metoder bruges til at optimere visningseffekten:

1. Brug mindre skrifttype

   Indpak for eksempel tabellen med `<div style="font-size:14px">` og `</div>` .

   Bemærk, at `div` mærket skal optage sin egen linje, og efterlade tomme linjer før og efter det.
1. For længere tekst i en celle skal du indsætte `<br>` for at ombryde linjen
1. Hvis en kolonne er presset for kort, kan du tilføje `<div style="width:100px">xxx</div>` til overskriften for at udvide bredden, og du kan også tilføje [`<wbr>` til overskriften](//developer.mozilla.org/docs/Web/HTML/Element/wbr) for at kontrollere linjeskiftpositionen.

Et demonstrationseksempel er som følger:

<div style="font-size:14px">

| nation       | <div style="width:70px;margin:auto">tænker navn</div> | Æra | Vigtigste ideologiske bidrag                                                       |
|------------|------------------------------------------------|-----------------|--------------------------------------------------------------------|
| Kina       | Konfucius                                           | 551-479 f.Kr   | Grundlæggeren af konfucianismen foreslog kernebegreber som "velvilje" og "sømmelighed" og lagde vægt på moralsk kultivering og social orden. |
| det gamle Grækenland     | Sokrates                                       | 469-399 f.Kr   | At udforske sandheden gennem dialog og dialektik foreslår "kend dig selv" og understreger rationel tænkning         |
| Frankrig       | Voltaire                                         | 1694-1778       | Repræsentative personer fra oplysningstiden gik ind for rationalitet, frihed og lighed og kritiserede religiøs overtro og autoritært styre.   |
| Tyskland       | Kant                                           | 1724-1804       | Fremsæt "Kritikken af den rene fornuft"<br> Udforsker grundlaget for moral, frihed og viden og lægger vægt på praktisk fornuft     |

</div>

Pseudokoden for ovenstående eksempel er som følger:

```md

<div style="font-size:14px">

| xx | <div style="width:70px;margin:auto">xx<wbr>xx</div> | xx | xx |
|----|----|-----------|----|
| xx | xx | xx<br>xxx | xx |

</div>

```

## Kode

### Inline Kode

I den store verden af programmeringssprog indtager `Rust` , `Python` , `JavaScript` og `Go` hver en unik position.

### Flere Linjer Kode

```rust
fn main() {
  let x = 10;
  println!("Hello, world! {}", x);
}
```

## Linjeskift Inden for Afsnit

Linjeskift inden for afsnit kan opnås uden at tilføje tomme linjer mellem linjer.
Afstanden mellem linjeskift i afsnit er mindre end afstanden mellem afsnit.

for eksempel:

> Lev som et fantastisk menneske,
> Døden er også en spøgelseshelt.
> Jeg savner stadig Xiang Yu,
> Tilbageholdende med at krydse Jiangdong.
>
> Li Qingzhao brugte Xiang Yus tragiske historie til at antyde Song-dynastiets inkompetence.
> Udtrykker utilfredshed med det kejserlige hof for at overgive sig uden kamp.