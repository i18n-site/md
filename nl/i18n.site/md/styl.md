# Stijl Overzicht

[Klik hier om door het bronbestand van deze pagina te bladeren](//raw.githubusercontent.com/i18n-site/md/refs/heads/main/$LANG/i18n.site/md/styl.md), zodat u de `MarkDown`-syntaxis in zijn oorspronkelijke vorm kunt bekijken.

## Onderstrepen & Doorhalen & Vetgedrukt

Dit is __onderstrepen__, ~~doorschrappen~~ en **vetgedrukte** demonstratietekst.

Schrijfwijze is als volgt:

```txt
这是__下划线__、~~删除线~~和**加粗**的演示文本。
```

De `Markdown`-parser van het `i18n.site` websitebouwtool heeft de syntaxis voor onderstreping, doorstreping en vetgedrukte tekst geoptimaliseerd. Markeerwoorden hoeven niet te worden voorafgegaan of gevolgd door spaties om effectief te zijn, wat het schrijven van documenten in talen zoals Chinees, Japans en Koreaans, die geen spaties gebruiken als scheidingstekens, vergemakkelijkt.

Uitgebreide lectuur: [Waarom werkt de Markdown-klemtoon syntaxis (`**…**`) soms niet?](//juejin.cn/post/7064565848421171213)

## Citaat

### Eenregelig Citaat

> Mijn natuur bepaalt dat mijn talenten nuttig zullen zijn; zelfs als al mijn fortuin is verdwenen, zal ik het terugwinnen.
<p style="text-align:right">─ Li Bai</p>

### Meerdere Regels Citaat

> Een ander uniek voordeel van sciencefiction is zijn uiterst brede blikveld.
> 'oorlog en vrede' beschrijft met een miljoen woorden slechts de geschiedenis van een bepaalde regio over tientallen jaren;
> Maar sciencefictionromans zoals Asimovs 'Het Laatste Antwoord' beschrijven op boeiende wijze de geschiedenis van het hele universum, inclusief de mensheid, over miljarden jaren in slechts enkele duizend woorden.
> Dergelijke omvang en moed zijn voor traditionele literatuur ontoegankelijk.
<p style="text-align:right">── Liu Cixin</p>

### `> [!TIP]`

> [!TIP]
> Vergeet niet de geldigheid van uw paspoort en visum te controleren; verlopen documenten komen de grens niet door.

Het schrijfvoorbeeld is als volgt

```
> [!TIP]
> your content
```

### Opmerking `> [!NOTE]`

> [!NOTE]
> Als je me een bericht stuurt en ik reageer direct, wat zegt dat dan?
> Dat betekent dat ik echt verslaafd ben aan mijn telefoon.


### Waarschuwing `> [!WARN]`

> [!WARN]
> Als u een wild avontuur in de natuur onderneemt, let dan goed op uw veiligheid.
> Vorige week strandde een groep klimmers halverwege de berg in een storm omdat ze de weersvoorspelling niet hadden gecontroleerd en moesten spoorschriftelijk worden geëvacueerd.
> Vergeet dat elke buitenactiviteit voldoende voorbereiding en aandacht voor het weer vereist.

## Te Doen Lijst

- [x] ontwerp een productprototype en een lijst van functies
- [ ] bepaal de technologiestack en ontwikkelingshulpmiddelen
- [ ] stel een productontwikkelingschema en mijlpalen op

## Lijst

### Geordende Lijst

1. hardlopen
   1. drie keer per week, telkens 5 kilometer
   1. deelnemen aan een halve marathon
1. gymtraining
   1. twee keer per week, telkens een uur
   1. richten op de kernspieren

### Ongeordende Lijst

* sociale activiteiten
  - deelnemen aan sectorale uitwisselingsbijeenkomsten
    + techniekdelingssessies bijwonen
    + ondernemersuitwisselingsbijeenkomsten bijwonen
  - vriendenbijeenkomst organiseren
    + buiten barbecue
    + filmavond

## Tabel

| Denker       | Belangrijkste bijdragen                           |
|--------------|------------------------------------|
| Confucius         | Grondlegger van het confucianisme |
| Socrates     | Vader van de westerse filosofie  |
| Nietzsche         | Overmensfilosofie, kritiek op traditionele moraal en religie       |
| Marx       | communisme |

## Code

### Inline-Code

In het uitgestrekte domein van programmeertalen nemen `Rust`, `Python`, `JavaScript` en `Go` elk een unieke plaats in.

### Meerdere Regels Code

```rust
fn main() {
  let x = 10;
  println!("Hello, world! {}", x);
}
```