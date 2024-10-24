# Seznam Stilov

[Kliknite tukaj, če želite prebrskati izvorno datoteko te strani](//raw.githubusercontent.com/i18n-site/md/refs/heads/main/$LANG/i18n.site/md/styl.md) in videti, kako napisati `MarkDown` v naslednjih slogih.

## Podčrtaj & Prečrtano &

To je __ Podčrtaj __ ,~~ prečrtano~~ in **krepko** predstavitveno besedilo.

Zapisano je takole:

```txt
这是__下划线__、~~删除线~~和**加粗**的演示文本。
```

Razčlenjevalnik `MarkDown` orodja za izdelavo spletnega `i18n.site` je optimiziral podčrtano, prečrtano in krepko sintakso. Lahko začne veljati brez presledkov pred in za oznako, kar olajša pisanje dokumentov v jezikih, kot so Kitajska, Japonska in Koreja. ki ne uporabljajo presledkov kot ločila.

Razširjeno branje : [Zakaj Nuggetsova Markdown sintaksa ( `**……**` ) včasih ne deluje?](//juejin.cn/post/7064565848421171213)

## Citat

### Enovrstični Citat

> V moji naravi je, da bodo moji talenti koristni, in vrnil se bom, ko bom porabil ves svoj denar.
<p style="text-align:right">─ Li Bai</p>

### Večvrstični Narekovaji

> Druga edinstvena prednost znanstvene fantastike je njen izjemno širok obseg.
> "Vojna in mir" z milijoni besed le opisuje zgodovino regije za več desetletij;
> In znanstvenofantastični romani, kot je Asimovljev »Končni odgovor«, živo opisujejo milijarde let zgodovine celotnega vesolja, vključno s človeškimi bitji, v samo nekaj tisoč besedah.
> Takšne vključenosti in drznosti je v tradicionalni literaturi nemogoče doseči.
<p style="text-align:right">── Liu Cixin</p>

### Nasvet `> [!TIP]`

> [!TIP]
> Ne pozabite preveriti veljavnosti svojega potnega lista in vizuma, ki vam je potekel, ne morete vstopiti ali izstopiti iz države.

Zapisano je takole

```
> [!TIP]
> your content
```

### Opomba `> [!NOTE]`

> [!NOTE]
> Če mi pošljete sporočilo in odgovorim takoj, kaj to pomeni?
> To dokazuje, da se zelo rad igram z mobilnimi telefoni.


### Opozorilo `> [!WARN]`

> [!WARN]
> Ko se odpravljate na divjo pustolovščino, je pomembno, da ostanete varni.
> Prejšnji teden je skupina plezalcev naletela na neurje na polovici gore in se je morala evakuirati, ker niso preverili vremenske napovedi.
> Ne pozabite, vsaka aktivnost na prostem zahteva ustrezno pripravo in pozornost na vreme.

## Seznam Opravil

- [x] Oblikujte prototip izdelka in seznam funkcij
- [ ] Določite tehnološki sklad in razvojna orodja
- [ ] Razvijte časovnice in mejnike razvoja izdelka

## Seznam

### Urejen Seznam

1. teče
   1. Trikrat na teden po 5 kilometrov
   1. Preteči polmaraton
1. trening v telovadnici
   1. Dvakrat na teden po 1 uro
   1. Osredotočite se na mišice jedra

### Neurejen Seznam

* družabni dogodki
  - Sodelujte na srečanjih za izmenjavo industrije
    + Seja izmenjave tehnologije
    + Srečanje podjetniške borze
  - Organizirajte srečanje prijateljev
    + Zunanji BBQ
    + filmski večer

## List

| mislec       | Glavni prispevki                           |
|--------------|------------------------------------|
| Konfucij         | Ustanovitelj konfucijanstva |
| Sokrat     | oče zahodne filozofije  |
| Nietzsche         | Filozofija Supermana, ki kritizira tradicionalno moralo in religijo       |
| marx       | komunizem |

## kodo

### Vgrajena Koda

V obsežnem svetu programskih jezikov zavzemajo `Rust` , `Python` , `JavaScript` in `Go` vsak edinstven položaj.

### Več Vrstic Kode

```rust
fn main() {
  let x = 10;
  println!("Hello, world! {}", x);
}
```