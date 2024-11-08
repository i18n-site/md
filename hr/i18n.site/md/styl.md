# Popis Stilova

[Kliknite ovdje da pregledate izvornu datoteku ove stranice](//raw.githubusercontent.com/i18n-site/md/refs/heads/main/zh/i18n.site/md/styl.md) i vidite kako napisati `MarkDown` u sljedećim stilovima.

## Presavijeni Blok

|+| Što je MarkDown?

    MarkDown je lagani označni jezik koji korisnicima omogućuje stvaranje formatiranih dokumenata u obliku običnog teksta koji je jednostavan za čitanje i pisanje.

    Obično se koristi za pisanje dokumentacije, članaka na blogovima, e-knjiga, postova na forumima itd.

    Ima sljedeće prednosti:

    1. Lako se uči
    1. Vrlo čitljiv
    1. Pogodan za kontrolu verzija

       Budući da su dokumenti `MarkDown` u formatu običnog teksta, programeri ih mogu lako ugraditi u sustave za kontrolu verzija (kao što je `git` ).

       To čini praćenje promjena i suradnju mnogo jednostavnijim, posebno u razvoju tima.

|-| Što je I18N?

    "I18N" je skraćenica od "Internacionalizacija".

    Budući da riječ "Internacionalizacija" ima 18 slova između "I" i "N", "I18N" se koristi za pojednostavljenje prikaza.

    Laički rečeno, to znači podržavanje više jezika.


Folding block je proširena sintaksa od `i18n.site` do `MarkDown` , napisana na sljedeći način :

```
|+| TITLE
    MARKDOWN CONTENT
    YOUR CAN WRITE MULTI LINE CONTENT
```

sa `|+| `或`|-| Redak koji počinje sa ` generira blok za preklapanje, a sadržaj bloka za preklapanje su sljedeći reci s istom razinom uvlačenja (odlomci su odvojeni praznim redovima).

Prolaz`|-| `标记的折叠块默认展开，`|+| `Označeni skupljeni blokovi sažeti su prema zadanim postavkama.

## Podcrtano & Precrtano &

__ je podvlaka __ ,~~ precrtano~~ i **podebljani** prezentacijski tekst.

Napisano je na sljedeći način:

```txt
这是__下划线__、~~删除线~~和**加粗**的演示文本。
```

`MarkDown` parser alata za izradu web `i18n.site` ima optimiziranu sintaksu za podvlačenje, precrtavanje i podebljanje. Može stupiti na snagu bez razmaka prije i poslije oznake, što olakšava pisanje dokumenata na jezicima kao što su Kina, Japan i Koreja. nemojte koristiti razmake kao razdjelnike.

Prošireno čitanje : [Zašto Nuggetsova Markdown sintaksa ( `**……**` ) ponekad ne djeluje?](//juejin.cn/post/7064565848421171213)

## Citat

### Jednoredni Citat

> U mojoj je prirodi da će moji talenti biti korisni i vratit ću se nakon što potrošim sav svoj novac.
<p style="text-align:right">─ Li Bai</p>

### Navodnici U Više Redaka

> Još jedna jedinstvena prednost znanstvene fantastike je njezin iznimno širok opseg.
> “Rat i mir” s milijun riječi samo opisuje povijest jedne regije dugu nekoliko desetljeća;
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
> Kada idete u divlju avanturu, važno je ostati siguran. Evo nekoliko ključnih sigurnosnih savjeta:
>
> - **Provjerite vremensku prognozu** : Prošli tjedan grupa penjača naišla je na oluju na pola puta do planine jer nisu provjerili vremensku prognozu i morali su se hitno evakuirati.
> - **Nosite potrebnu opremu** : Pobrinite se da ponesete dovoljno hrane, vode i zaliha prve pomoći.
> - **Razumijevanje terena** : Unaprijed se upoznajte s terenom i rutama avanturističkog područja kako biste izbjegli gubitak.
> - **Ostanite povezani** : Ostanite povezani s vanjskim svijetom i osigurajte da se svi mogu sigurno vratiti.
>
> Zapamtite, sigurnost je uvijek na prvom mjestu!

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
    + Sastanak poduzetničke burze
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

### Optimizacija Prikaza Velike Tablice

Za relativno velike tablice, sljedeće metode mogu se koristiti za optimizaciju učinka prikaza:

1. Koristite manji font

   Na primjer, omotajte tablicu s `<div style="font-size:14px">` i `</div>` .

   Imajte na umu da oznaka `div` mora zauzimati vlastiti red i ostaviti prazne retke prije i poslije nje.
1. Za duži tekst u ćeliji umetnite `<br>` da biste prelomili red
1. Ako je stupac prekratak, možete dodati `<div style="width:100px">xxx</div>` u zaglavlje da proširite širinu, a također možete dodati [`<wbr>` u zaglavlje](//developer.mozilla.org/docs/Web/HTML/Element/wbr) da kontrolirate položaj prijeloma retka.

Primjer demonstracije je sljedeći:

<div style="font-size:14px">

| narod       | <div style="width:70px;margin:auto">ime mislioca</div> | Doba | Glavni ideološki doprinosi                                                       |
|------------|------------------------------------------------|-----------------|--------------------------------------------------------------------|
| Kina       | Konfucije                                           | 551.-479. pr. Kr   | Utemeljitelj konfucijanizma predložio je temeljne koncepte kao što su "dobronamjernost" i "pristojnost" i naglasio moralnu kultivaciju i društveni poredak. |
| antička grčka     | Sokrate                                       | 469-399 prije Krista   | Istraživanje istine kroz dijalog i dijalektiku predlaže "upoznaj sebe" i naglašava racionalno razmišljanje         |
| Francuska       | Voltaire                                         | 1694-1778       | Reprezentativne osobe prosvjetiteljstva zagovarale su racionalnost, slobodu i jednakost, a kritizirale vjersko praznovjerje i autoritarnu vladavinu.   |
| Njemačka       | Kant                                           | 1724-1804       | Iznijeti "Kritiku čistog uma"<br> Istražuje temelje morala, slobode i znanja, s naglaskom na praktični razum     |

</div>

Pseudokod za gornji primjer je sljedeći:

```md

<div style="font-size:14px">

| xx | <div style="width:70px;margin:auto">xx<wbr>xx</div> | xx | xx |
|----|----|-----------|----|
| xx | xx | xx<br>xxx | xx |

</div>

```

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

## Prijelom Retka Unutar Odlomka

Prijelomi redaka unutar odlomaka mogu se postići bez dodavanja praznih redaka između redaka.
Razmak između prijeloma redaka unutar odlomaka je manji od razmaka između odlomaka.

na primjer:

> Živi kao velika osoba,
> Smrt je također duh heroj.
> Još uvijek mi nedostaje Xiang Yu,
> Nerado prelazi Jiangdong.
>
> Li Qingzhao je iskoristio Xiang Yuovu tragičnu priču da nagovijesti nesposobnost dinastije Song.
> Izražavajući nezadovoljstvo carskim dvorom zbog predaje bez borbe.