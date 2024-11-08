# Lista Stilova

[Kliknite ovdje da pregledate izvorni fajl ove stranice](//raw.githubusercontent.com/i18n-site/md/refs/heads/main/zh/i18n.site/md/styl.md) da vidite kako napisati `MarkDown` u sljedećim stilovima.

## Presavijeni Blok

|+| Šta je MarkDown?

    MarkDown je lagani jezik za označavanje koji omogućava korisnicima da kreiraju formatirane dokumente u formatu običnog teksta koji je jednostavan za čitanje i pisanje.

    Obično se koristi za pisanje dokumentacije, blog članaka, e-knjiga, postova na forumu, itd.

    Ima sljedeće prednosti:

    1. Lako se uči
    1. Vrlo čitljivo
    1. Pogodan za kontrolu verzija

       Pošto je `MarkDown` dokumenata u formatu običnog teksta, programeri ih mogu lako ugraditi u sisteme kontrole verzija (kao `git` ).

       To čini praćenje promjena i suradnju mnogo jednostavnijim, posebno u razvoju tima.

|-| Šta je I18N?

    "I18N" je skraćenica od "Internationalization".

    Budući da riječ "Internacionalizacija" ima 18 slova između "I" i "N", "I18N" se koristi za pojednostavljenje predstavljanja.

    Laički rečeno, to znači podržavanje više jezika.


Preklopni blok je proširena sintaksa od `i18n.site` do `MarkDown` , napisana na sljedeći način :

```
|+| TITLE
    MARKDOWN CONTENT
    YOUR CAN WRITE MULTI LINE CONTENT
```

sa `|+| `或`|-| Red koji počinje sa ` će generisati preklopni blok, a sadržaj bloka za preklapanje su sledeći redovi sa istim nivoom uvlačenja (pasusi su odvojeni praznim redovima).

Pass`|-| `标记的折叠块默认展开，`|+| `Označeni skupljeni blokovi se skupljaju prema zadanim postavkama.

## & &

Ovo je __ crta __ ,~~ precrtano~~ i **podebljan** tekst prezentacije.

Napisano je kako slijedi:

```txt
这是__下划线__、~~删除线~~和**加粗**的演示文本。
```

`MarkDown` raščlanjivač alata za izgradnju `i18n.site` ima optimiziranu sintaksu za podvlačenje, precrtavanje i podebljanje. Može stupiti na snagu bez razmaka prije i iza oznake, što olakšava pisanje dokumenata na jezicima kao što su Kina, Japan i Koreja. nemojte koristiti razmake kao separatore.

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
> YOUR CONTENT
```

### Napomena `> [!NOTE]`

> [!NOTE]
> Ako mi pošaljete poruku i odmah odgovorim, šta to znači?
> Ovo pokazuje da zaista volim da se igram sa mobilnim telefonima.


### Upozorenje `> [!WARN]`

> [!WARN]
> Kada idete u divlju avanturu, važno je da ostanete sigurni. Evo nekoliko ključnih sigurnosnih savjeta:
>
> - **Provjerite vremensku prognozu** : Prošle sedmice grupa penjača naišla je na oluju na pola planine jer nisu provjerili vremensku prognozu i morali su hitno da se evakuišu.
> - **Nosite neophodnu opremu** : Pobrinite se da ponesete dovoljno hrane, vode i potrepština za prvu pomoć.
> - **Razumijevanje terena** : Unaprijed se upoznajte s terenom i rutama avanturističkog područja kako biste izbjegli da se izgubite.
> - **Ostanite povezani** : Ostanite povezani s vanjskim svijetom i osigurajte da se svi mogu sigurno vratiti.
>
> Zapamtite, sigurnost je uvijek na prvom mjestu!

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
    + Sastanak za razmjenu preduzetništva
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

### Optimizacija Prikaza Velikog Stola

Za relativno velike tabele, sledeće metode se mogu koristiti za optimizaciju efekta prikaza:

1. Koristite manji font

   Na primjer, umotajte tablicu s `<div style="font-size:14px">` i `</div>` .

   Imajte na umu da oznaka `div` mora zauzimati vlastiti red i ostaviti prazne redove prije i poslije.
1. Za duži tekst u ćeliji, umetnite `<br>` da premotate red
1. Ako je kolona prekratka, možete dodati `<div style="width:100px">xxx</div>` zaglavlju da proširite širinu, a možete dodati i [`<wbr>` zaglavlju](//developer.mozilla.org/docs/Web/HTML/Element/wbr) da kontrolirate poziciju prijeloma reda.

Primjer demonstracije je sljedeći:

<div style="font-size:14px">

| nacija       | <div style="width:70px;margin:auto">ime mislioca</div> | Era | Glavni ideološki doprinosi                                                       |
|------------|------------------------------------------------|-----------------|--------------------------------------------------------------------|
| Kina       | Konfucije                                           | 551-479 pne   | Osnivač konfucijanizma je predložio ključne koncepte kao što su "dobronamernost" i "priličnost" i naglasio moralnu kultivaciju i društveni poredak. |
| antičke grčke     | Sokrat                                       | 469-399 pne   | Istraživanje istine kroz dijalog i dijalektiku predlaže "spoznaj sebe" i naglašava racionalno razmišljanje         |
| Francuska       | Voltaire                                         | 1694-1778       | Reprezentativne ličnosti prosvjetiteljstva zagovarale su racionalnost, slobodu i jednakost i kritizirale vjersko praznovjerje i autoritarnu vladavinu.   |
| Njemačka       | Kant                                           | 1724-1804       | Izložite "Kritiku čistog razuma"<br> Istražuje osnove morala, slobode i znanja, naglašavajući praktični razum     |

</div>

Pseudokod za gornji primjer je sljedeći:

```md

<div style="font-size:14px">

| xx | <div style="width:70px;margin:auto">xx<wbr>xx</div> | xx | xx |
|----|----|-----------|----|
| xx | xx | xx<br>xxx | xx |

</div>

```

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

## Prijelom Reda Unutar Pasusa

Prelomi redova unutar pasusa mogu se postići bez dodavanja praznih redova između redova.
Razmak između prijeloma reda unutar pasusa manji je od razmaka između pasusa.

na primjer:

> Živi kao sjajna osoba,
> Smrt je takođe heroj duh.
> I dalje mi nedostaje Xiang Yu,
> Nerado prelazi Jiangdong.
>
> Li Qingzhao je iskoristio tragičnu priču Xiang Yua da nagovijesti nesposobnost dinastije Song.
> Izražavajući nezadovoljstvo carskim dvorom zbog predaje bez borbe.