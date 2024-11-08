# Seznam Stilov

[Kliknite tukaj, če želite prebrskati izvorno datoteko te strani](//raw.githubusercontent.com/i18n-site/md/refs/heads/main/zh/i18n.site/md/styl.md) in videti, kako napisati `MarkDown` v naslednjih slogih.

## Zložen Blok

|+| Kaj je MarkDown?

    MarkDown je lahek označevalni jezik, ki uporabnikom omogoča ustvarjanje oblikovanih dokumentov v obliki navadnega besedila, ki ga je enostavno brati in pisati.

    Običajno se uporablja za pisanje dokumentacije, člankov v blogih, e-knjig, objav na forumih itd.

    Ima naslednje prednosti:

    1. Enostaven za učenje
    1. Zelo berljiv
    1. Prijazen nadzor različic

       Ker je dokumentov `MarkDown` v formatu navadnega besedila, jih lahko programerji zlahka vključijo v sisteme za nadzor različic (kot je `git` ).

       Tako je sledenje spremembam in sodelovanje veliko enostavnejše, zlasti pri razvoju ekipe.

|-| Kaj je I18N?

    "I18N" je okrajšava za "Internacionalizacija".

    Ker ima beseda "Internacionalizacija" 18 črk med "I" in "N", se za poenostavitev predstavitve uporablja "I18N".

    V laičnem smislu to pomeni podporo več jezikov.


Zložljivi blok je razširjena sintaksa od `i18n.site` do `MarkDown` , zapisana na naslednji način :

```
|+| TITLE
    MARKDOWN CONTENT
    YOUR CAN WRITE MULTI LINE CONTENT
```

z `|+| `或`|-| Vrstica, ki se začne z `, bo ustvarila pregibni blok, vsebina pregibnega bloka pa so naslednje vrstice z enako stopnjo zamika (odstavki so ločeni s praznimi vrsticami).

Pass`|-| `标记的折叠块默认展开，`|+| `Označeni strnjeni bloki so privzeto strnjeni.

## Podčrtaj & Prečrtano &

To je __ Podčrtaj __ ,~~ prečrtano~~ in **krepko** predstavitveno besedilo.

Zapisano je takole:

```txt
这是__下划线__、~~删除线~~和**加粗**的演示文本。
```

Razčlenjevalnik `MarkDown` `i18n.site` za izdelavo spletnega mesta ima optimizirano podčrtano, prečrtano in krepko sintakso. Učinkuje lahko brez presledkov pred in za oznako, kar olajša pisanje dokumentov v jezikih, kot so Kitajska, Japonska in Koreja. ne uporabljajte presledkov kot ločil.

Razširjeno branje : [Zakaj Nuggetsova Markdown sintaksa ( `**……**` ) včasih ne deluje?](//juejin.cn/post/7064565848421171213)

## Citat

### Enovrstični Citat

> V moji naravi je, da bodo moji talenti koristni, in vrnil se bom, ko bom porabil ves svoj denar.
<p style="text-align:right">─ Li Bai</p>

### Večvrstični Narekovaji

> Druga edinstvena prednost znanstvene fantastike je njen izjemno širok obseg.
> "Vojna in mir" z milijoni besed opiše samo zgodovino regije za nekaj desetletij;
> In znanstvenofantastični romani, kot je Asimovljev »Končni odgovor«, živo opisujejo milijarde let zgodovine celotnega vesolja, vključno s človeškimi bitji, v samo nekaj tisoč besedah.
> Takšne vključenosti in drznosti je v tradicionalni literaturi nemogoče doseči.
<p style="text-align:right">── Liu Cixin</p>

### Nasvet `> [!TIP]`

> [!TIP]
> Ne pozabite preveriti veljavnosti svojega potnega lista in vizuma, ki vam je potekel, ne morete vstopiti ali izstopiti iz države.

Zapisano je takole

```
> [!TIP]
> YOUR CONTENT
```

### Opomba `> [!NOTE]`

> [!NOTE]
> Če mi pošljete sporočilo in odgovorim takoj, kaj to pomeni?
> To dokazuje, da se zelo rad igram z mobilnimi telefoni.


### Opozorilo `> [!WARN]`

> [!WARN]
> Ko se odpravljate na divjo pustolovščino, je pomembno, da ostanete varni. Tukaj je nekaj ključnih varnostnih nasvetov:
>
> - **Preverite vremensko napoved** : Prejšnji teden je skupina plezalcev naletela na neurje na polovici gore, ker niso preverili vremenske napovedi in so se morali nujno evakuirati.
> - **Nosite potrebno opremo** : Poskrbite, da boste prinesli dovolj hrane, vode in zalog za prvo pomoč.
> - **Razumevanje terena** : Vnaprej se seznanite s terenom in potmi območja avanture, da se izognete izgubi.
> - **Ostanite povezani** : Ostanite povezani z zunanjim svetom in zagotovite, da se lahko vsi varno vrnejo.
>
> Ne pozabite, varnost je vedno na prvem mestu!

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

### Optimizacija Prikaza Velike Tabele

Za razmeroma velike tabele je mogoče uporabiti naslednje metode za optimizacijo učinka prikaza:

1. Uporabite manjšo pisavo

   Na primer, ovijte tabelo z `<div style="font-size:14px">` in `</div>` .

   Upoštevajte, da mora oznaka `div` zasedati svojo vrstico in pustiti prazne vrstice pred in za njo.
1. Za daljše besedilo v celici vstavite `<br>` , da prelomite vrstico
1. Če je stolpec prekratek, lahko glavi dodate `<div style="width:100px">xxx</div>` da razširite širino, lahko pa dodate tudi [`<wbr>` glavi,](//developer.mozilla.org/docs/Web/HTML/Element/wbr) da nadzirate položaj preloma vrstice.

Predstavitveni primer je naslednji:

<div style="font-size:14px">

| narod       | <div style="width:70px;margin:auto">ime misleca</div> | Era | Glavni ideološki prispevki                                                       |
|------------|------------------------------------------------|-----------------|--------------------------------------------------------------------|
| Kitajska       | Konfucij                                           | 551-479 pr. n. št   | Ustanovitelj konfucianizma je predlagal temeljne koncepte, kot sta "dobrohotnost" in "primernost", ter poudaril moralno kultivacijo in družbeni red. |
| starodavna Grčija     | Sokrat                                       | 469-399 pr. n. št   | Raziskovanje resnice skozi dialog in dialektiko predlaga "spoznaj samega sebe" in poudarja racionalno mišljenje         |
| Francija       | Voltaire                                         | 1694-1778       | Reprezentativne osebnosti razsvetljenstva so zagovarjale racionalnost, svobodo in enakost ter kritizirale versko vraževerje in avtoritarno vladavino.   |
| Nemčija       | Kant                                           | 1724-1804       | Predstavite "Kritiko čistega razuma"<br> Raziskuje temelje morale, svobode in znanja s poudarkom na praktičnem razumu     |

</div>

Psevdokoda za zgornji primer je naslednja:

```md

<div style="font-size:14px">

| xx | <div style="width:70px;margin:auto">xx<wbr>xx</div> | xx | xx |
|----|----|-----------|----|
| xx | xx | xx<br>xxx | xx |

</div>

```

## Kodo

### Vgrajena Koda

V obsežnem svetu programskih jezikov zavzemajo `Rust` , `Python` , `JavaScript` in `Go` vsak edinstven položaj.

### Več Vrstic Kode

```rust
fn main() {
  let x = 10;
  println!("Hello, world! {}", x);
}
```

## Prelom Vrstice Znotraj Odstavka

Prelome vrstic znotraj odstavkov je mogoče doseči brez dodajanja praznih vrstic med vrsticami.
Razmik med prelomi vrstic znotraj odstavkov je manjši od razmika med odstavki.

na primer:

> Živite kot velika oseba,
> Smrt je tudi junak duhov.
> Še vedno pogrešam Xiang Yu,
> Nerad prečka Jiangdong.
>
> Li Qingzhao je uporabil Xiang Yujevo tragično zgodbo, da bi namignil na nesposobnost dinastije Song.
> Izražanje nezadovoljstva nad cesarskim dvorom, ker se je vdal brez boja.