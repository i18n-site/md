# Stillista

[Klicka här för att bläddra i källfilen på den här sidan](//raw.githubusercontent.com/i18n-site/md/refs/heads/main/$LANG/i18n.site/md/styl.md) för att se hur man skriver `MarkDown` i följande stilar.

## Stryk & &

Det __ är __~~ genomstruken~~ och **fet** presentationstext.

Det är skrivet så här:

```txt
这是__下划线__、~~删除线~~和**加粗**的演示文本。
```

`MarkDown` tolken av verktyget `i18n.site` för att bygga webbplatser har optimerat syntaxen för understrykning, genomstruken och fetstil. Den kan träda i kraft utan mellanslag före och efter märket, vilket gör det lättare att skriva dokument på språk som Kina, Japan och Korea. som inte använder mellanslag som avgränsare.

Utökad läsning : [träder inte Nuggets Markdown -syntax ( `**……**` ) i kraft?](//juejin.cn/post/7064565848421171213)

## Citationstecken

### En Rad Citat

> Det är min natur att mina talanger kommer att vara användbara, och jag kommer tillbaka efter att alla mina pengar har spenderats.
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
> your content
```

### Anmärkning `> [!NOTE]`

> [!NOTE]
> Om du skickar ett meddelande till mig och jag svarar direkt, vad betyder det?
> Detta visar att jag verkligen älskar att spela med mobiltelefoner.


### Varning `> [!WARN]`

> [!WARN]
> När du ska ut på ett vilt äventyr är det viktigt att vara säker.
> Förra veckan stötte en grupp klättrare på en storm halvvägs upp på berget och var tvungna att evakuera eftersom de inte kunde kontrollera väderprognosen.
> Kom ihåg att alla utomhusaktiviteter kräver adekvat förberedelse och uppmärksamhet på vädret.

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
  - Organisera en samling av vänner
    + Utomhus BBQ
    + filmkväll

## Ark

| tänkare       | Huvudinsatser                           |
|--------------|------------------------------------|
| Konfucius         | Grundare av konfucianismen |
| Sokrates     | fader till västerländsk filosofi  |
| Nietzsche         | Stålmannens filosofi, som kritiserar traditionell moral och religion       |
| marx       | kommunism |

## koda

### Inline Kod

I den stora världen av programmeringsspråk har `Rust` , `Python` , `JavaScript` och `Go` var och en en unik position.

### Flera Rader Kod

```rust
fn main() {
  let x = 10;
  println!("Hello, world! {}", x);
}
```