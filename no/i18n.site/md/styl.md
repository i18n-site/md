# Stilliste

[Klikk her for å bla gjennom kildefilen til denne siden](//raw.githubusercontent.com/i18n-site/md/refs/heads/main/zh/i18n.site/md/styl.md) for å se hvordan du skriver `MarkDown` i følgende stiler.

## Foldet Blokk

|+| Hva er MarkDown?

    MarkDown er et lett markeringsspråk som lar brukere lage formaterte dokumenter i et vanlig tekstformat som er enkelt å lese og skrive.

    Vanligvis brukt til å skrive dokumentasjon, bloggartikler, e-bøker, foruminnlegg, etc.

    Den har følgende fordeler:

    1. Lett å lære
    1. Meget lesbar
    1. Versjonskontrollvennlig

       Siden `MarkDown` dokumenter er i vanlig tekstformat, kan programmerere enkelt inkorporere dem i versjonskontrollsystemer (som `git` ).

       Dette gjør sporing av endringer og samarbeid mye enklere, spesielt i teamutvikling.

|-| Hva er I18N?

    "I18N" er forkortelsen for "Internationalization".

    Siden ordet "Internasjonalisering" har 18 bokstaver mellom "I" og "N", brukes "I18N" for å forenkle representasjonen.

    I lekmannstermer betyr det å støtte flere språk.


Foldeblokk er en utvidet syntaks på `i18n.site` til `MarkDown` , skrevet som følger :

```
|+| TITLE
    MARKDOWN CONTENT
    YOUR CAN WRITE MULTI LINE CONTENT
```

med `|+| `或`|-| Linjen som starter med ` vil generere en foldeblokk, og innholdet i foldeblokken er de påfølgende linjene med samme nivå av innrykk (avsnitt er atskilt med tomme linjer).

Pass`|-| `标记的折叠块默认展开，`|+| `Tagdede skjulte blokker er skjult som standard.

## & Gjennom &

__ er __~~ gjennomstreking~~ og **fet** presentasjonstekst.

Det er skrevet som følger:

```txt
这是__下划线__、~~删除线~~和**加粗**的演示文本。
```

`MarkDown` parseren av `i18n.site` nettstedsbyggingsverktøyet har optimert understreking, gjennomstreking og fet syntaks. Den kan tre i kraft uten mellomrom før og etter merket, noe som gjør det lettere å skrive dokumenter på språk som Kina, Japan og Korea. ikke bruk mellomrom som skilletegn.

: lesing [Hvorfor trer ikke Nuggets' Markdown -syntaks ( `**……**` ) i kraft?](//juejin.cn/post/7064565848421171213)

## Sitere

### Enkelt Linje Sitat

> Det er min natur at talentene mine kommer til nytte, og jeg kommer tilbake etter at alle pengene mine er brukt.
<p style="text-align:right">─ Li Bai</p>

### Sitater Med Flere Linjer

> En annen unik fordel med science fiction er dens ekstremt brede omfang.
> En "krig og fred", med en million ord, beskriver bare historien til en region i flere tiår;
> Og science fiction-romaner som Asimovs "Det endelige svaret" beskriver levende milliarder av år med historien til hele universet, inkludert mennesker, med bare noen få tusen ord.
> Slik inkluderende og frimodighet er umulig å oppnå i tradisjonell litteratur.
<p style="text-align:right">── Liu Cixin</p>

### Tips `> [!TIP]`

> [!TIP]
> Husk å sjekke gyldigheten av passet og visumet Utløpte dokumenter kan ikke reise inn eller ut av landet.

Det er skrevet som følger

```
> [!TIP]
> YOUR CONTENT
```

### Merknad `> [!NOTE]`

> [!NOTE]
> Hvis du sender meg en melding og jeg svarer umiddelbart, hva betyr det?
> Dette viser at jeg virkelig elsker å spille med mobiltelefoner.


### Advarsel `> [!WARN]`

> [!WARN]
> Når du skal på et vilt eventyr, er det viktig å være trygg. Her er noen viktige sikkerhetstips:
>
> - **Sjekk værmeldingen** : Forrige uke møtte en gruppe klatrere en storm halvveis opp i fjellet fordi de ikke sjekket værmeldingen og måtte evakuere raskt.
> - **Ta med nødvendig utstyr** : Sørg for å ta med nok mat, vann og førstehjelpsutstyr.
> - **Forstå terrenget** : Gjør deg kjent med terrenget og rutene i eventyrområdet på forhånd for å unngå å gå deg vill.
> - **Hold kontakten** : Hold kontakten med omverdenen og sørg for at alle kan returnere trygt.
>
> Husk at sikkerhet alltid kommer først!

## Gjøremålsliste

- [x] Design produktprototype og funksjonsliste
- [ ] Bestem teknologistabel og utviklingsverktøy
- [ ] Utvikle produktutviklingstidslinjer og milepæler

## Liste

### Bestilt Liste

1. løping
   1. Tre ganger i uken, 5 kilometer hver gang
   1. Løp et halvmaraton
1. treningsstudio
   1. To ganger i uken, 1 time hver gang
   1. Fokuser på kjernemuskulaturen

### Uordnet Liste

* sosiale arrangementer
  - Delta på bransjeutvekslingsmøter
    + Teknologidelingsøkt
    + Entreprenørskapsutvekslingsmøte
  - Organiser en vennesamling
    + Utendørs BBQ
    + filmkveld

## Ark

| tenker       | Hovedbidrag                           |
|--------------|------------------------------------|
| Konfucius         | Grunnlegger av konfucianismen |
| Sokrates     | far til vestlig filosofi  |
| Nietzsche         | Superman-filosofi, kritiserer tradisjonell moral og religion       |
| marx       | kommunisme |

### Optimalisering Av Stor Tabellvisning

For relativt store tabeller kan følgende metoder brukes for å optimalisere visningseffekten:

1. Bruk mindre skrift

   Pakk for eksempel tabellen med `<div style="font-size:14px">` og `</div>` .

   Merk at `div` taggen må oppta sin egen linje, og la tomme linjer være før og etter den.
1. For lengre tekst i en celle, sett inn `<br>` for å bryte linjen
1. Hvis en kolonne er presset for kort, kan du legge til `<div style="width:100px">xxx</div>` i overskriften for å utvide bredden, og du kan også legge til [`<wbr>` i overskriften](//developer.mozilla.org/docs/Web/HTML/Element/wbr) for å kontrollere linjeskiftposisjonen.

Et demonstrasjonseksempel er som følger:

<div style="font-size:14px">

| nasjon       | <div style="width:70px;margin:auto">tenker navn</div> | Era | De viktigste ideologiske bidragene                                                       |
|------------|------------------------------------------------|-----------------|--------------------------------------------------------------------|
| Kina       | Konfucius                                           | 551-479 f.Kr   | Grunnleggeren av konfucianismen foreslo kjernebegreper som "velvilje" og "anstendighet" og la vekt på moralsk kultivering og sosial orden. |
| antikkens Hellas     | Sokrates                                       | 469-399 f.Kr   | Å utforske sannheten gjennom dialog og dialektikk foreslår "kjenn deg selv" og legger vekt på rasjonell tenkning         |
| Frankrike       | Voltaire                                         | 1694-1778       | Representative skikkelser fra opplysningstiden tok til orde for rasjonalitet, frihet og likhet, og kritiserte religiøs overtro og autoritært styre.   |
| Tyskland       | Kant                                           | 1724-1804       | Sett frem "Kritikken av den rene fornuft"<br> Utforsker grunnlaget for moral, frihet og kunnskap, med vekt på praktisk fornuft     |

</div>

Pseudokoden for eksemplet ovenfor er som følger:

```md

<div style="font-size:14px">

| xx | <div style="width:70px;margin:auto">xx<wbr>xx</div> | xx | xx |
|----|----|-----------|----|
| xx | xx | xx<br>xxx | xx |

</div>

```

## Kode

### Innebygd Kode

I den enorme verdenen av programmeringsspråk har `Rust` , `Python` , `JavaScript` og `Go` hver sin unike posisjon.

### Flere Linjer Med Kode

```rust
fn main() {
  let x = 10;
  println!("Hello, world! {}", x);
}
```

## Linjeskift I Avsnitt

Linjeskift i avsnitt kan oppnås uten å legge til tomme linjer mellom linjene.
Avstanden mellom linjeskift i avsnitt er mindre enn avstanden mellom avsnitt.

for eksempel:

> Lev som en stor person,
> Døden er også en spøkelseshelt.
> Jeg savner fortsatt Xiang Yu,
> Motvillig til å krysse Jiangdong.
>
> Li Qingzhao brukte Xiang Yus tragiske historie for å antyde inkompetansen til Song-dynastiet.
> Uttrykker misnøye med den keiserlige domstolen for å overgi seg uten kamp.