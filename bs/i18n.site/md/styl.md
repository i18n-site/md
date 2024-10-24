# Lista Stilova

[Kliknite ovdje da pregledate izvorni fajl ove stranice](//raw.githubusercontent.com/i18n-site/md/refs/heads/main/$LANG/i18n.site/md/styl.md) da vidite kako napisati `MarkDown` u sljedećim stilovima.

## & &

Ovo je __ crta __ ,~~ precrtano~~ i **podebljan** tekst prezentacije.

Napisano je kako slijedi:

```txt
这是__下划线__、~~删除线~~和**加粗**的演示文本。
```

`MarkDown` raščlanjivač alata za pravljenje web `i18n.site` optimizirao je podcrtanu, precrtanu i podebljanu sintaksu. Može stupiti na snagu bez razmaka prije i iza oznake, što olakšava pisanje dokumenata na jezicima kao što su Kina, Japan i Koreja. koji ne koriste razmake kao separatore.

Prošireno : [Zašto Nuggetsova Markdown sintaksa ( `**……**` ) ponekad ne stupa na snagu?](//juejin.cn/post/7064565848421171213)

## Citat

### Jednoredni Navodnik

> U prirodi mi je da će moji talenti biti korisni, a ja ću se vratiti nakon što potrošim sav svoj novac.
<p style="text-align:right">─ Li Bai</p>

### Višestruki Navodnici

> Još jedna jedinstvena prednost naučne fantastike je njen izuzetno širok opseg.
> „Rat i mir“, sa milion reči, opisuje samo istoriju regiona tokom nekoliko decenija;
> A naučnofantastični romani poput Asimovljevog "Konačnog odgovora" slikovito opisuju milijarde godina istorije čitavog univerzuma, uključujući ljudska bića, u samo nekoliko hiljada riječi.
> Takvu inkluzivnost i smjelost nemoguće je postići u tradicionalnoj književnosti.
<p style="text-align:right">── Liu Cixin</p>

### Savjet `> [!TIP]`

> [!TIP]
> Ne zaboravite provjeriti valjanost vašeg pasoša i vize Istekli dokumenti ne mogu ući ili izaći iz zemlje.

Napisano je kako slijedi

```
> [!TIP]
> your content
```

### Napomena `> [!NOTE]`

> [!NOTE]
> Ako mi pošaljete poruku i odmah odgovorim, šta to znači?
> Ovo pokazuje da zaista volim da se igram sa mobilnim telefonima.


### Upozorenje `> [!WARN]`

> [!WARN]
> Kada idete u divlju avanturu, važno je da ostanete sigurni.
> Prošle sedmice, grupa penjača naišla je na oluju na pola planine i morala je da se evakuiše jer nisu provjerili vremensku prognozu.
> Zapamtite, svaka aktivnost na otvorenom zahtijeva adekvatnu pripremu i pažnju na vremenske prilike.

## Lista Obaveza

- [x] Dizajnirajte prototip proizvoda i listu karakteristika
- [ ] Odredite tehnološki stog i razvojne alate
- [ ] Razviti vremenske rokove i prekretnice za razvoj proizvoda

## Lista

### Naručena Lista

1. trčanje
   1. Tri puta sedmično, svaki put po 5 kilometara
   1. Trčite polumaraton
1. trening u teretani
   1. Dva puta sedmično, svaki put po 1 sat
   1. Fokusirajte se na osnovne mišiće

### Neuređena Lista

* društveni događaji
  - Učestvujte na sastancima industrijske razmjene
    + Sesija dijeljenja tehnologije
    + Sastanak za razmjenu preduzetnika
  - Organizujte druženje prijatelja
    + Vanjski roštilj
    + filmsko veče

## List

| mislilac       | Glavni doprinosi                           |
|--------------|------------------------------------|
| Konfucije         | Osnivač konfucijanizma |
| Sokrat     | otac zapadne filozofije  |
| Nietzsche         | Filozofija Supermena, kritizirajući tradicionalni moral i religiju       |
| marx       | komunizam |

## Kod

### Inline Kod

U ogromnom svijetu programskih jezika, `Rust` , `Python` , `JavaScript` i `Go` svaki zauzimaju jedinstvenu poziciju.

### Više Linija Koda

```rust
fn main() {
  let x = 10;
  println!("Hello, world! {}", x);
}
```