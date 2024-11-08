# Stijl Lijst

[Klik hier om door het bronbestand van deze pagina te bladeren](//raw.githubusercontent.com/i18n-site/md/refs/heads/main/zh/i18n.site/md/styl.md) en te zien hoe u `MarkDown` in de volgende stijlen schrijft.

## Gevouwen Blok

|+| Wat is MarkDown?

    MarkDown is een lichtgewicht opmaaktaal waarmee gebruikers opgemaakte documenten kunnen maken in platte tekst die gemakkelijk te lezen en te schrijven is.

    Vaak gebruikt om documentatie, blogartikelen, e-boeken, forumberichten, enz. te schrijven.

    Het heeft de volgende voordelen:

    1. Gemakkelijk te leren
    1. Zeer leesbaar
    1. Versiebeheer vriendelijk

       Omdat `MarkDown` documenten een platte tekstindeling hebben, kunnen programmeurs deze eenvoudig in versiebeheersystemen (zoals `git` ) opnemen.

       Dit maakt het volgen van veranderingen en samenwerken veel eenvoudiger, vooral bij teamontwikkeling.

|-| Wat is I18N?

    "I18N" is de afkorting van "Internationalisering".

    Omdat het woord "Internationalisering" 18 letters heeft tussen "I" en "N", wordt "I18N" gebruikt om de weergave te vereenvoudigen.

    In termen van de leek betekent dit dat meerdere talen worden ondersteund.


Vouwblok is een uitgebreide syntaxis van `i18n.site` tot `MarkDown` , als volgt geschreven :

```
|+| TITLE
    MARKDOWN CONTENT
    YOUR CAN WRITE MULTI LINE CONTENT
```

met `|+| `或`|-| De regel die begint met ` genereert een vouwblok, en de inhoud van het vouwblok bestaat uit de daaropvolgende regels met hetzelfde inspringingsniveau (paragrafen worden gescheiden door lege regels).

Pass`|-| `标记的折叠块默认展开，`|+| `Gelabelde samengevouwen blokken worden standaard samengevouwen.

## Onderstrepen & Doorhalen &

Dit is __ Onderstreep __ ,~~ doorhalen~~ en **vetgedrukte** presentatietekst.

Het is als volgt geschreven:

```txt
这是__下划线__、~~删除线~~和**加粗**的演示文本。
```

De `MarkDown` parser van de `i18n.site` tool voor het bouwen van websites heeft een geoptimaliseerde syntaxis voor onderstrepen, doorhalen en vetgedrukte tekst. Het kan van kracht worden zonder spaties voor en na de markering, waardoor het gemakkelijker wordt om documenten te schrijven in talen zoals China, Japan en Korea. gebruik geen spaties als scheidingstekens.

Uitgebreid lezen : [Waarom werkt de Markdown -syntaxis ( `**……**` ) van Nuggets soms niet?](//juejin.cn/post/7064565848421171213)

## Citaat

### Enkele Regel Citaat

> Het is mijn aard dat mijn talenten nuttig zullen zijn, en ik zal terugkomen nadat al mijn geld is uitgegeven.
<p style="text-align:right">─ Li Bai</p>

### Meerdere Regelcitaten

> Een ander uniek voordeel van sciencefiction is de extreem brede reikwijdte ervan.
> Een ‘Oorlog en Vrede’ beschrijft met een miljoen woorden slechts de geschiedenis van een regio gedurende tientallen jaren;
> En sciencefictionromans zoals Asimovs 'Het Laatste Antwoord' beschrijven op levendige wijze de miljarden jaren geschiedenis van het hele universum, inclusief de mens, in slechts een paar duizend woorden.
> Een dergelijke inclusiviteit en durf zijn onmogelijk te bereiken in de traditionele literatuur.
<p style="text-align:right">── Liu Cixin</p>

### `> [!TIP]`

> [!TIP]
> Vergeet niet de geldigheid van uw paspoort en visum te controleren. Verlopen documenten kunnen het land niet binnenkomen of verlaten.

Het is als volgt geschreven

```
> [!TIP]
> YOUR CONTENT
```

### Opmerking `> [!NOTE]`

> [!NOTE]
> Als u mij een bericht stuurt en ik antwoord onmiddellijk, wat betekent dat dan?
> Dit laat zien dat ik heel graag met mobiele telefoons speel.


### Waarschuwing `> [!WARN]`

> [!WARN]
> Als je op een wild avontuur gaat, is het belangrijk om veilig te blijven. Hier zijn enkele belangrijke veiligheidstips:
>
> - **Bekijk de weersvoorspelling** : Vorige week kreeg een groep klimmers halverwege de berg te maken met een storm omdat ze de weersvoorspelling niet hadden gecontroleerd en met spoed moesten evacueren.
> - Zorg ervoor dat u voldoende voedsel, water en EHBO-benodigdheden **meeneemt** .
> - **Begrijp het terrein** : Maak uzelf vooraf vertrouwd met het terrein en de routes van het avonturengebied om te voorkomen dat u verdwaalt.
> - **Blijf verbonden** : Blijf verbonden met de buitenwereld en zorg ervoor dat iedereen veilig kan terugkeren.
>
> Vergeet niet dat veiligheid altijd voorop staat!

## To-Do-Lijst

- [x] Ontwerp productprototype en lijst met functies
- [ ] Bepaal de technologiestack en ontwikkelingstools
- [ ] Ontwikkel tijdlijnen en mijlpalen voor productontwikkeling

## Lijst

### Geordende Lijst

1. rennen
   1. Drie keer per week, telkens 5 kilometer
   1. Een halve marathon lopen
1. sportschool training
   1. Twee keer per week, telkens 1 uur
   1. Focus op de kernspieren

### Ongeordende Lijst

* sociale evenementen
  - Neem deel aan uitwisselingsbijeenkomsten binnen de sector
    + Sessie voor het delen van technologie
    + Uitwisselingsbijeenkomst ondernemerschap
  - Organiseer een vriendenbijeenkomst
    + Buiten barbecue
    + filmavond

## Laken

| denker       | Belangrijkste bijdragen                           |
|--------------|------------------------------------|
| Confucius         | Grondlegger van het confucianisme |
| Socrates     | vader van de westerse filosofie  |
| Nietzsche         | Superman-filosofie, die de traditionele moraal en religie bekritiseert       |
| Marx       | communisme |

### Optimalisatie Van De Weergave Van Grote Tafels

Voor relatief grote tabellen kunnen de volgende methoden worden gebruikt om het weergave-effect te optimaliseren:

1. Gebruik een kleiner lettertype

   Verpak de tabel bijvoorbeeld met `<div style="font-size:14px">` en `</div>` .

   Houd er rekening mee dat de tag `div` een eigen regel moet innemen en er blanco regels voor en erna moet blijven staan.
1. Voor langere tekst in een cel voegt u `<br>` in om de regel terug te laten lopen
1. Als een kolom te kort is, kunt u `<div style="width:100px">xxx</div>` toevoegen aan de koptekst om de breedte uit te breiden, en u kunt ook [`<wbr>` aan de koptekst](//developer.mozilla.org/docs/Web/HTML/Element/wbr) toevoegen om de positie van de regeleinden te bepalen.

Een demonstratievoorbeeld is als volgt:

<div style="font-size:14px">

| natie       | <div style="width:70px;margin:auto">naam denker</div> | Tijdperk | Belangrijkste ideologische bijdragen                                                       |
|------------|------------------------------------------------|-----------------|--------------------------------------------------------------------|
| China       | Confucius                                           | 551-479 v.Chr   | De grondlegger van het confucianisme stelde kernconcepten voor als ‘welwillendheid’ en ‘fatsoenlijkheid’ en legde de nadruk op morele cultivering en sociale orde. |
| het oude Griekenland     | Socrates                                       | 469-399 v.Chr   | Het verkennen van de waarheid door middel van dialoog en dialectiek stelt 'ken jezelf' voor en legt de nadruk op rationeel denken         |
| Frankrijk       | Voltaire                                         | 1694-1778       | Representatieve figuren van de Verlichting pleitten voor rationaliteit, vrijheid en gelijkheid, en bekritiseerden religieus bijgeloof en autoritair bestuur.   |
| Duitsland       | Kant                                           | 1724-1804       | Breng de ‘Kritiek van de Zuivere Rede’ naar voren<br> Onderzoekt de grondslagen van moraliteit, vrijheid en kennis, met de nadruk op de praktische rede     |

</div>

De pseudocode voor het bovenstaande voorbeeld is als volgt:

```md

<div style="font-size:14px">

| xx | <div style="width:70px;margin:auto">xx<wbr>xx</div> | xx | xx |
|----|----|-----------|----|
| xx | xx | xx<br>xxx | xx |

</div>

```

## Code

### Inline-Code

In de enorme wereld van programmeertalen nemen `Rust` , `Python` , `JavaScript` en `Go` elk een unieke positie in.

### Meerdere Regels Code

```rust
fn main() {
  let x = 10;
  println!("Hello, world! {}", x);
}
```

## Regeleinde Binnen Alinea

Regeleinden binnen alinea's kunnen worden bereikt zonder lege regels tussen regels toe te voegen.
De afstand tussen regeleinden binnen alinea's is kleiner dan de afstand tussen alinea's.

Bijvoorbeeld:

> Leef als een geweldig persoon,
> De dood is ook een spookheld.
> Ik mis Xiang Yu nog steeds,
> Onwillig om Jiangdong over te steken.
>
> Li Qingzhao gebruikte het tragische verhaal van Xiang Yu om de incompetentie van de Song-dynastie aan te duiden.
> Uiting van ontevredenheid over het keizerlijke hof omdat het zich zonder slag of stoot heeft overgegeven.