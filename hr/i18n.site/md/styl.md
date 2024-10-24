# Popis Stilova

[Kliknite ovdje da pregledate izvornu datoteku ove stranice](//raw.githubusercontent.com/i18n-site/md/refs/heads/main/$LANG/i18n.site/md/styl.md) i vidite kako napisati `MarkDown` u sljedećim stilovima.

## Podcrtano & Precrtano &

__ je podvlaka __ ,~~ precrtano~~ i **podebljani** prezentacijski tekst.

Napisano je na sljedeći način:

```txt
这是__下划线__、~~删除线~~和**加粗**的演示文本。
```

`MarkDown` alat za izradu web `i18n.site` optimizirao je podcrtano, precrtano i podebljano sintaksu. Može stupiti na snagu bez razmaka prije i poslije oznake, što olakšava pisanje dokumenata na jezicima kao što su Kina, Japan i Koreja. koji ne koriste razmake kao separatore.

Prošireno čitanje : [Zašto Nuggetsova Markdown sintaksa ( `**……**` ) ponekad ne djeluje?](//juejin.cn/post/7064565848421171213)

## Citat

### Jednoredni Citat

> U mojoj je prirodi da će moji talenti biti korisni i vratit ću se nakon što potrošim sav svoj novac.
<p style="text-align:right">─ Li Bai</p>

### Navodnici U Više Redaka

> Još jedna jedinstvena prednost znanstvene fantastike je njezin iznimno širok opseg.
> "Rat i mir", s milijun riječi, samo opisuje povijest jedne regije dugu nekoliko desetljeća;
> A znanstvenofantastični romani poput Asimovljevog "Konačnog odgovora" živopisno opisuju milijarde godina povijesti čitavog svemira, uključujući i ljudska bića, u samo nekoliko tisuća riječi.
> Takvu uključivost i smjelost nemoguće je postići u tradicionalnoj književnosti.
<p style="text-align:right">── Liu Cixin</p>

### Savjet `> [!TIP]`

> [!TIP]
> Ne zaboravite provjeriti valjanost vaše putovnice i vize s isteklim dokumentima ne možete ući ili izaći iz zemlje.

Napisano je kako slijedi

```
> [!TIP]
> YOUR CONTENT
```

### Napomena `> [!NOTE]`

> [!NOTE]
> Ako mi pošaljete poruku i ja odmah odgovorim, što to znači?
> Ovo pokazuje da se stvarno volim igrati s mobitelima.


### Upozorenje `> [!WARN]`

> [!WARN]
> Kada idete u divlju avanturu, važno je ostati siguran.
> Prošli tjedan grupa penjača naišla je na oluju na pola puta do planine i morali su se evakuirati jer nisu provjerili vremensku prognozu.
> Zapamtite, svaka aktivnost na otvorenom zahtijeva odgovarajuću pripremu i pozornost na vremenske prilike.

## Popis Obaveza

- [x] Dizajnirajte prototip proizvoda i popis značajki
- [ ] Odredite tehnološki skup i razvojne alate
- [ ] Razvijte vremenske okvire i prekretnice razvoja proizvoda

## Popis

### Uređen Popis

1. trčanje
   1. Tri puta tjedno po 5 kilometara
   1. Trčite polumaraton
1. trening u teretani
   1. Dva puta tjedno, svaki put po 1 sat
   1. Usredotočite se na mišiće jezgre

### Nesređeni Popis

* društvena događanja
  - Sudjelujte u industrijskim sastancima razmjene
    + Sesija dijeljenja tehnologije
    + Sastanak poduzetničke razmjene
  - Organizirajte okupljanje prijatelja
    + Roštilj na otvorenom
    + filmska večer

## List

| mislilac       | Glavni doprinosi                           |
|--------------|------------------------------------|
| Konfucije         | Utemeljitelj konfucijanizma |
| Sokrate     | otac zapadne filozofije  |
| Nietzsche         | Superman filozofija, kritizirajući tradicionalni moral i religiju       |
| marx       | komunizam |

## Kodirati

### Inline Kod

U golemom svijetu programskih jezika, `Rust` , `Python` , `JavaScript` i `Go` zauzimaju svaki jedinstveni položaj.

### Više Redaka Koda

```rust
fn main() {
  let x = 10;
  println!("Hello, world! {}", x);
}
```