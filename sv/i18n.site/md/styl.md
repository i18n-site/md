# Stillista

[Klicka här för att bläddra i källfilen på den här sidan](//raw.githubusercontent.com/i18n-site/md/refs/heads/main/zh/i18n.site/md/styl.md) för att se hur man skriver `MarkDown` i följande stilar.

## Vikt Block

|+| Vad är MarkDown?

    MarkDown är ett lättviktigt märkningsspråk som tillåter användare att skapa formaterade dokument i ett vanligt textformat som är lätt att läsa och skriva.

    Används vanligtvis för att skriva dokumentation, bloggartiklar, e-böcker, foruminlägg etc.

    Det har följande fördelar:

    1. Lätt att lära sig
    1. Mycket läsvärd
    1. Versionskontrollvänlig

       Eftersom `MarkDown` dokument är i vanligt textformat kan programmerare enkelt infoga dem i versionskontrollsystem (som `git` ).

       Detta gör det mycket enklare att spåra förändringar och samarbeta, särskilt inom teamutveckling.

|-| Vad är I18N?

    "I18N" är förkortningen av "Internationalisering".

    Eftersom ordet "Internationalisering" har 18 bokstäver mellan "I" och "N" används "I18N" för att förenkla representationen.

    I lekmannatermer betyder det att stödja flera språk.


Folding block är en utökad syntax på `i18n.site` till `MarkDown` , skriven enligt följande :

```
|+| TITLE
    MARKDOWN CONTENT
    YOUR CAN WRITE MULTI LINE CONTENT
```

med `|+| `或`|-| Raden som börjar med ` kommer att generera ett vikblock, och innehållet i vikblocket är de efterföljande raderna med samma nivå av indrag (stycken separeras med tomma rader).

Pass`|-| `标记的折叠块默认展开，`|+| `Taggade komprimerade block är komprimerade som standard.

## Stryk & &

Det __ är __~~ genomstruken~~ och **fet** presentationstext.

Det är skrivet så här:

```txt
这是__下划线__、~~删除线~~和**加粗**的演示文本。
```

`MarkDown` tolken av `i18n.site` -webbplatsbyggnadsverktyget har optimerad understrykning, genomstruken och fet syntax. Den kan träda i kraft utan mellanslag före och efter märket, vilket gör det lättare att skriva dokument på språk som Kina, Japan och Korea. använd inte mellanslag som avgränsare.

Utökad läsning : [träder inte Nuggets Markdown -syntax ( `**……**` ) i kraft?](//juejin.cn/post/7064565848421171213)

## Citationstecken

### En Rad Citat

> Det är min natur att mina talanger kommer att vara användbara, och jag kommer tillbaka när alla mina pengar har förbrukats.
<p style="text-align:right">─ Li Bai</p>

### Citat På Flera Rader

> En annan unik fördel med science fiction är dess extremt breda räckvidd.
> Ett "krig och fred", med en miljon ord, beskriver bara historien om en region under flera decennier;
> Och science fiction-romaner som Asimovs "Det slutliga svaret" beskriver livfullt hela universums miljarder år av historia, inklusive människor, med bara några tusen ord.
> Sådan inkludering och djärvhet är omöjliga att uppnå i traditionell litteratur.
<p style="text-align:right">── Liu Cixin</p>

### Tips `> [!TIP]`

> [!TIP]
> Kom ihåg att kontrollera giltigheten av ditt pass och visum Utgångna dokument kan inte komma in i eller ut ur landet.

Det är skrivet som följer

```
> [!TIP]
> YOUR CONTENT
```

### Anmärkning `> [!NOTE]`

> [!NOTE]
> Om du skickar ett meddelande till mig och jag svarar direkt, vad betyder det?
> Detta visar att jag verkligen älskar att spela med mobiltelefoner.


### Varning `> [!WARN]`

> [!WARN]
> När du ska ut på ett vilt äventyr är det viktigt att vara säker. Här är några viktiga säkerhetstips:
>
> - **Kolla väderprognosen** : Förra veckan stötte en grupp klättrare på en storm halvvägs upp på berget eftersom de inte kollade väderprognosen och var tvungna att evakuera omedelbart.
> - **Bär nödvändig utrustning** : Se till att du tar med dig tillräckligt med mat, vatten och första hjälpen.
> - **Förstå terrängen** : Bekanta dig med terrängen och rutter i äventyrsområdet i förväg för att undvika att gå vilse.
> - **Håll kontakten** : Håll kontakten med omvärlden och se till att alla kan återvända säkert.
>
> Kom ihåg att säkerheten alltid kommer först!

## Att Göra-Lista

- [x] Designa produktprototyp och funktionslista
- [ ] Bestäm teknikstack och utvecklingsverktyg
- [ ] Utveckla tidslinjer och milstolpar för produktutveckling

## Lista

### Beställd Lista

1. spring
   1. Tre gånger i veckan, 5 kilometer varje gång
   1. Spring ett halvmaraton
1. gymträning
   1. Två gånger i veckan, 1 timme varje gång
   1. Fokusera på kärnmusklerna

### Oordnad Lista

* sociala evenemang
  - Delta i branschutbytesmöten
    + Teknikdelningssession
    + Entreprenörskapsutbytesmöte
  - Ordna en samling av vänner
    + Utomhus BBQ
    + filmkväll

## Ark

| tänkare       | Huvudinsatser                           |
|--------------|------------------------------------|
| Konfucius         | Grundare av konfucianismen |
| Sokrates     | fader till västerländsk filosofi  |
| Nietzsche         | Stålmannens filosofi, som kritiserar traditionell moral och religion       |
| marx       | kommunism |

### Stor Tabellvisningsoptimering

För relativt stora tabeller kan följande metoder användas för att optimera visningseffekten:

1. Använd mindre teckensnitt

   Slå till exempel tabellen med `<div style="font-size:14px">` och `</div>` .

   Observera att `div` taggen måste uppta sin egen rad och lämna tomma rader före och efter den.
1. För längre text i en cell, infoga `<br>` för att radbryta raden
1. Om en kolumn pressas för kort kan du lägga till `<div style="width:100px">xxx</div>` i rubriken för att utöka bredden, och du kan också lägga till [`<wbr>` i rubriken](//developer.mozilla.org/docs/Web/HTML/Element/wbr) för att styra linjebrytningspositionen.

Ett demonstrationsexempel är följande:

<div style="font-size:14px">

| nation       | <div style="width:70px;margin:auto">tänkarens namn</div> | Era | Huvudsakliga ideologiska bidrag                                                       |
|------------|------------------------------------------------|-----------------|--------------------------------------------------------------------|
| Kina       | Konfucius                                           | 551-479 f.Kr   | Konfucianismens grundare föreslog kärnbegrepp som "välvilja" och "anständighet" och betonade moralisk kultivering och social ordning. |
| antikens grekland     | Sokrates                                       | 469-399 f.Kr   | Att utforska sanningen genom dialog och dialektik föreslår "känn dig själv" och betonar rationellt tänkande         |
| Frankrike       | Voltaire                                         | 1694-1778       | Representativa personer från upplysningstiden förespråkade rationalitet, frihet och jämlikhet och kritiserade religiös vidskepelse och auktoritärt styre.   |
| Tyskland       | Kant                                           | 1724-1804       | Lägg fram "Kritik av det rena förnuftet"<br> Utforskar grunderna för moral, frihet och kunskap, och betonar praktiskt förnuft     |

</div>

Pseudokoden för exemplet ovan är följande:

```md

<div style="font-size:14px">

| xx | <div style="width:70px;margin:auto">xx<wbr>xx</div> | xx | xx |
|----|----|-----------|----|
| xx | xx | xx<br>xxx | xx |

</div>

```

## Koda

### Inline Kod

I den stora världen av programmeringsspråk har `Rust` , `Python` , `JavaScript` och `Go` var och en en unik position.

### Flera Rader Kod

```rust
fn main() {
  let x = 10;
  println!("Hello, world! {}", x);
}
```

## Radbrytning Inom Stycke

Radbrytningar inom stycken kan uppnås utan att lägga till tomma rader mellan raderna.
Avståndet mellan radbrytningar inom stycken är mindre än avståndet mellan stycken.

till exempel:

> Lev som en fantastisk person,
> Döden är också en spökhjälte.
> Jag saknar fortfarande Xiang Yu,
> Ovilliga att korsa Jiangdong.
>
> Li Qingzhao använde Xiang Yus tragiska historia för att antyda Songdynastins inkompetens.
> Uttrycker missnöje med det kejserliga hovet för att de kapitulerat utan kamp.