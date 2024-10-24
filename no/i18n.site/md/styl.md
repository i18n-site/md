# Stiloversikt

[Klikk her for å bla gjennom originalfilen til denne siden](//raw.githubusercontent.com/i18n-site/md/refs/heads/main/$LANG/i18n.site/md/styl.md) for å se den opprinnelige `MarkDown`-formateringen.

## & Gjennom &

Dette er __ understreking __, ~~ sletting ~~ og ** fet skrift ** i demonstrasjonstekst.

Skrive måten er som følger:

```txt
这是__下划线__、~~删除线~~和**加粗**的演示文本。
```

`i18n.site`'s `Markdown`-parser har optimalisert støtte for understreking, gjennomstreking og fet skrift, slik at det ikke er nødvendig med mellomrom rundt merkene. Dette gjør det enklere å skrive dokumenter på språk som kinesisk, japansk og koreansk, som ikke bruker mellomrom som skilletegn.

Utvidet lesning: [Hvorfor fungerer ikke掘金的 Markdown-fett skrift syntaks (`**……**`) noen ganger?](//juejin.cn/post/7064565848421171213)

## Citat

### Enkeltlinjeforklaring

> Det er min natur at jeg har talent som må komme til nytte; selv om jeg bruker opp tusen gull, vil jeg finne det igjen.
<p style="text-align:right">─ Li Bai</p>

### Forklaring på flere linjer

> En annen unik fordel ved science fiction er dens ekstremt vidvinkelte perspektiv.
> "Krig og Fred", med millioner av ord, beskriver bare historien til en region gjennom flere tiår;
> Men science fiction-romaner som Asimovs "Det endelige svaret" beskriver levende hele universets historie, inkludert menneskehetens, gjennom flere milliarder år, på bare noen få tusen ord.
> Slik en kapasitet og mot er noe tradisjonell litteratur ikke kan oppnå.
<p style="text-align:right">── Liu Cixin</p>

### Tips `> [!TIP]`

> [!TIP]
> Husk å sjekke gyldigheten på passet og visumet; utløpte dokumenter kan ikke brukes til inn- eller utreise.

Skrive på følgende måte

```
> [!TIP]
> YOUR CONTENT
```

### Merking `> [!NOTE]`

> [!NOTE]
> Hvis du sender meg en melding og jeg svarer øyeblikkelig, hva betyr det?
> Dette betyr at jeg virkelig elsker å bruke mobilen.


### Advarsel `> [!WARN]`

> [!WARN]
> Når du er på et villmarks eventyr, må du være oppmerksom på sikkerheten.
> Forrige uke ble en gruppe klatrere tatt av en storm på halvvegs opp i fjellet fordi de ikke sjekket værmeldingen.
> Husk at all utendørsaktivitet krever god forberedelse og oppmerksomhet til været.

## Å gjøre-liste

- [x] Design produktprototyper og funksjonslister
- [ ] Definer teknologistabel og utviklingsverktøy
- [ ] Utform produktutviklingstidslinjer og milepæler

## Liste

### Ordnet liste

1. Løping
   1. Three ganger i uken, 5 kilometer hver gang
   1. Deltakelse i halvmaraton
1. Treningsstudio
   1. Two ganger i uken, 1 time hver gang
   1. Fokus på kjernemuskulatur

### Uordnet liste

* Sosiale arrangementer
  - Deltakelse i bransjeforum
    + Teknologidelingsmøter
    + Entreprenørskapsutvekslingsmøter
  - Arranger vennetreff
    + Utedørs grill
    + Filmkveld

## Tabell

| Tanker       | Hovedbidrag                           |
|--------------|------------------------------------|
| Konfucius         | Grunnlegger av konfucianismen |
| Sokrates     | Far til vestlig filosofi  |
| Nietzsche         | Overmenneskefilosofi, kritikk av tradisjonell moral og religion       |
| Marx       | Kommunisme |

## Kode

### Innebygd kode

I det omfattende feltet av programmeringsspråk har `Rust`, `Python`, `JavaScript` og `Go` hver sin unike plass.

### Flere linjer med kode

```rust
fn main() {
  let x = 10;
  println!("Hello, world! {}", x);
}
```