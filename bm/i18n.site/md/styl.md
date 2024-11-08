# Style List (Cogo Lisi).

[Aw ye nin yɔrɔ digi walasa ka nin ɲɛ in sɔrɔyɔrɔ filen lajɛ](//raw.githubusercontent.com/i18n-site/md/refs/heads/main/zh/i18n.site/md/styl.md) walasa ka `MarkDown` sɛbɛncogo ye nin cogoya ninnu na.

## Bloki Folilen

|+| MarkDown ye mun ye?

    MarkDown ye taamasiyɛnkan ye min ka nɔgɔn, min b’a to baarakɛlaw bɛ se ka sɛbɛnw dilan minnu labɛnna sɛbɛnni gansanw cogo la min kalanni ni sɛbɛnni ka nɔgɔn.

    A ka c’a la, a bɛ kɛ ka sɛbɛnniw, bulɔgu barokunw, ɛntɛrinɛti gafew, forobaciyɛn sɛbɛnw, a ɲɔgɔnnaw.

    Nafa ninnu b’a la:

    1. A kalanni ka nɔgɔn
    1. A bɛ se ka kalan kosɛbɛ
    1. Version control terikɛ ye

       Ikomi sɛbɛn `MarkDown` bɛ sɛbɛnni gansanw cogo la, porogaramukɛlaw bɛ se k’u don nɔgɔya la version control systems kɔnɔ (i n’a fɔ `git` ).

       O bɛ fɛn caman sɛmɛntiya fɛn caman Changements (Yɛlɛma) ni jɛ-ka-baara nɔgɔya kosɛbɛ, kɛrɛnkɛrɛnnenya la ekipu yiriwali la.

|-| I18N ye mun ye?

    "I18N" ye "Internationalisation" surunyalen ye.

    Komin daɲɛ "Internationalisation" bɛ ni sɛbɛnni 18 ye "I" ni "N" cɛ, "I18N" bɛ Kɛ ka jiracogo nɔgɔya.

    Layidu talenw ka fɔ la, o kɔrɔ ye ka kan caman dɛmɛ.


foli bloki ye daɲɛgafe janyalen ye min bɛ `i18n.site` fo `MarkDown` la , a sɛbɛnnen bɛ nin cogo la :

```
|+| TITLE
    MARKDOWN CONTENT
    YOUR CAN WRITE MULTI LINE CONTENT
```

ni `|+| `或`|-| Layini min bɛ daminɛ ni ` ye, o bɛna foli bloki dɔ lawuli, wa foli bloki kɔnɔkow ye zana nataw ye minnu kɔnɔna doncogo hakɛ ye kelen ye (dakunw bɛ fara ɲɔgɔn kan ni zana gansanw ye).

Tɛmɛn`|-| `标记的折叠块默认展开，`|+| `Tagged collapsed blocks bɛ bin ka kɛɲɛ ni u ka daminɛ ye.

## Jatebɔ Kɛ Ni & Ye &

Nin __ __~~ strikethrough (bɔgɔdaga).~~ ani ɲɛjirali sɛbɛn **jɛman** .

A sɛbɛnnen bɛ nin cogo la:

```txt
这是__下划线__、~~删除线~~和**加粗**的演示文本。
```

`i18n.site` site web jɔli baarakɛminɛn `MarkDown` parser ye underline, strikethrough ani bold syntax optimisé A bɛ se ka baara kɛ ni yɔrɔw tɛ ka kɔn taamasiyɛn ɲɛ ani a kɔfɛ, o b’a to sɛbɛnw sɛbɛnni ka nɔgɔn kanw na i n’a fɔ Sinuwa, Zapɔn ani Kore o aw kana yɔrɔw kɛ danfaralanw ye.

Kalan janyalen : [na Nuggets ka Markdown syntax ( `**……**` ) tɛ baara kɛ tuma dɔw la?](//juejin.cn/post/7064565848421171213)

## Ka Sɔngɔ Jateminɛ

### Zana Kelen Fɔcogo

> Ne ka cogoya ye ko nafa bɛna kɛ ne ka sekow la, wa ne bɛ segin ka na ne ka wari bɛɛ bannen kɔfɛ.
<p style="text-align:right">─ Li Bai ye</p>

### Layini Caman Fɔcogo

> Nafa wɛrɛ min bɛ dɔnniya-fɔli la, o ye a bonya ye min ka bon kosɛbɛ.
> "Kɛlɛ ni Hɛrɛ", ni daɲɛ miliyɔn kelen ye, o bɛ mara dɔ tariku dɔrɔn de ɲɛfɔ san tan damadɔ kɔnɔ;
> Wa dɔnniya gafe minnu bɛ i n’a fɔ Asimov ka « Jaabi laban », olu bɛ diɲɛ bɛɛ tariku san miliyari caman ɲɛfɔ ka jɛya, hadamadenw fana sen bɛ o la, daɲɛ ba damadɔ dɔrɔn kɔnɔ.
> O bɛɛjɛfanga ni jagɛlɛya sugu tɛ se ka sɔrɔ laadala sɛbɛnw kɔnɔ.
<p style="text-align:right">── Liu Sixin ye baara kɛ</p>

### Ladilikan `> [!TIP]`

> [!TIP]
> Aw ye aw hakili to a la ka aw ka pasipɔri ni aw ka visa tiɲɛni lajɛ.

A sɛbɛnnen bɛ nin cogo la

```
> [!TIP]
> YOUR CONTENT
```

### Kɔlɔsili `> [!NOTE]`

> [!NOTE]
> Ni i ye ci bila n ma, n y’a jaabi o yɔrɔnin bɛɛ la, o kɔrɔ ye mun ye?
> O b’a jira ko tulon kɛli ni telefɔni selilɛriw ye kosɛbɛ.


### Ladilikan `> [!WARN]`

> [!WARN]
> Ni aw bɛ taa kungo kɔnɔ, a nafa ka bon aw ka to aw yɛrɛ la. Lakanali laadilikan jɔnjɔn dɔw filɛ nin ye:
>
> - **Aw ye waati jateminɛ lajɛ** : Dɔgɔkun tɛmɛnen, jiginnikɛlaw kulu dɔ ye sanfiɲɛba dɔ sɔrɔ kulu tilancɛ la bawo u ma waati jateminɛ lajɛ, wa u tun ka kan ka bɔ yen joona.
> - **Aw bɛ minɛnw ta minnu ka kan** : Aw bɛ aw jija ka na ni dumuni, ji ani dɛmɛ fɔlɔ fɛnw ye minnu bɛ se ka kɛ.
> - **Aw ye dugukolo cogoya faamuya** : Aw bɛ kɔn ka aw yɛrɛ dɔn ɲɛnajɛyɔrɔ dugukolo cogoya n’a siraw la walasa aw kana tunun.
> - **To jɛɲɔgɔnya la** : Aw ka to jɛɲɔgɔnya la ni kɛnɛma diɲɛ ye ani ka aw jija bɛɛ ka se ka segin lafiya la.
>
> Aw k’aw hakili to a la ko lakana de bɛ fɔlɔ tuma bɛɛ!

## Baara Minnu Ka Kan Ka Kɛ, Olu Lisɛli

- [x] Fɛn dilannenw prototype ni fɛnw lisɛli dilan
- [ ] Fɛnɲɛnɛmako kulu ni yiriwali baarakɛminɛnw latigɛ
- [ ] Fɛn dilanni waatibolodalenw ni taamasiyɛnw labɛn

## Lisi

### Lisi Min Yamaruyara

1. boli
   1. Siɲɛ saba dɔgɔkun kɔnɔ, kilomɛtɛrɛ 5 o waati kelen-kelen bɛɛ
   1. Boli kɛ ni maraton tilancɛ ye
1. farikoloɲɛnajɛ degeliw
   1. Siɲɛ fila dɔgɔkun kɔnɔ, lɛri 1 o waati kelen-kelen bɛɛ la
   1. Aw bɛ aw sinsin farikolo yɔrɔ kolomaw kan

### Lisi Min Ma Sigi Sen Kan

* sosiyete ka ko kɛtaw
  - Aw ye aw sen don izini fɛnw falenfalen lajɛw la
    + Teknoloji tila-tila waati
    + Baarakɛlaw ka ɲɔgɔnfaamu lajɛ
  - Aw ye teriw ka lajɛ dɔ labɛn
    + Kɛnɛma BBQ
    + filimu su fɛ

## Dara

| miirilikɛla       | Bolomafaraw kunbabaw                           |
|--------------|------------------------------------|
| Konfusiyɔsi         | Konfusiyɔn ka diinɛ sigibaga |
| Sokrate ye     | tilebin yanfan filozofi fa  |
| Nietzsche ye o ye         | Superman ka filozofi, ka laadala jogoɲumanya ni diinɛ kɔrɔfɔ       |
| marx (marx) ye       | kominisi ye |

### Tabali Belebele Jiracogo Ɲuman

Tabali belebelebaw kama, nin fɛɛrɛ ninnu bɛ se ka kɛ walasa ka jiracogo nɔ ɲuman sɔrɔ:

1. Baara kɛ ni sɛbɛnnibolo fitininw ye

   Misali la, aw bɛ tabali siri ni `<div style="font-size:14px">` ni `</div>` ye .

   A kɔlɔsi ko `div` taamaʃyɛn ka kan k’a yɛrɛ ka layini Minɛ, ka zana lankolonw To a ɲɛfɛ ani a kɔfɛ.
1. Walasa ka sɛbɛnni jan janya seli kɔnɔ, i bɛ `<br>` don a kɔnɔ walasa ka layini siri
1. Ni kulu dɔ sɔgɔra ka surunya kojugu, i bɛ se ka `<div style="width:100px">xxx</div>` fara kuncɛlan kan walasa ka a bonya bonya, ani i bɛ se fana ka [`<wbr>` fara kuncɛlan kan](//developer.mozilla.org/docs/Web/HTML/Element/wbr) walasa ka layini tigɛyɔrɔ kɔlɔsi.

Ɲɛjirali misali dɔ ye nin ye:

<div style="font-size:14px">

| jamana       | <div style="width:70px;margin:auto">miirilikɛla tɔgɔ</div> | Era | Hakilila-jɔ-baara kunbabaw                                                       |
|------------|------------------------------------------------|-----------------|--------------------------------------------------------------------|
| Sinuwa jamana       | Konfusiyɔsi                                           | 551-479 sànw na kristatile ɲɛ   | Konfusiyɔn sigibaga ye hakilina jɔnjɔnw labɛn i n'a fɔ "nafama" ani "ɲɛnabɔli" ani ka sinsin jogoɲumanya sɛnɛni ni sigida labɛncogo kan. |
| gɛrɛsi kɔrɔlen     | Sokrate ye                                       | san 469-399 K.Ɲ   | Tiɲɛ sɛgɛsɛgɛli baro ni diyalektiki fɛ, o bɛ "i yɛrɛ dɔn" laɲini ani ka sinsin hakililata miirili kan         |
| Faransi       | Voltaire ye baara kɛ                                         | 1694-1778       | Yeelen waati lasigidenw tun bɛ hakililata, hɔrɔnya ani bɛnkan lafasa, ani ka diinɛ dannakow ni fangatigiya kɔrɔfɔ.   |
| Alimanjamana na       | Kant                                           | 1724-1804       | Aw ye "Critique de la raison pure" bila ɲɛfɛ.<br> A bɛ jogoɲumanya, hɔrɔnya ani dɔnniya jusigilanw sɛgɛsɛgɛ, ka sinsin hakili ɲuman kan     |

</div>

Misali min bɛ sanfɛ, o pseudocode ye nin ye:

```md

<div style="font-size:14px">

| xx | <div style="width:70px;margin:auto">xx<wbr>xx</div> | xx | xx |
|----|----|-----------|----|
| xx | xx | xx<br>xxx | xx |

</div>

```

## Kodɔn

### Inline Kode Ye

Porogaramukanw diɲɛba kɔnɔ, `Rust` , `Python` , `JavaScript` ani `Go` kelen-kelen bɛɛ bɛ jɔyɔrɔ kɛrɛnkɛrɛnnen na.

### Kode Layini Caman

```rust
fn main() {
  let x = 10;
  println!("Hello, world! {}", x);
}
```

## Layini Tigɛlen Dakun Kɔnɔ

Zana tigɛli dakunw kɔnɔ, o bɛ Se ka Kɛ k’a sɔrɔ zana gansanw ma Fàra zana ni ɲɔgɔn cɛ.
Layini tigɛlenw ni ɲɔgɔn cɛ danfara min bɛ dakunw kɔnɔ, o ka dɔgɔ ni dakunw ni ɲɔgɔn cɛ janya ye.

I n'a fo:

> I ka ɲɛnamaya kɛ i n’a fɔ mɔgɔba, .
> Saya fana ye jinɛw ka cɛfarin ye.
> N bɛ Xiang Yu ɲini hali bi, san 1999.
> A tun t’a fɛ ka Jiangdong tigɛ.
>
> Li Qingzhao ye Xiang Yu ka maana dusukasilen kɛ walasa ka Song Mansamara ka seko dɛsɛ jira.
> Ka wasabaliya jira masakɛ ka kiritigɛso la, k’a sababu kɛ a y’a yɛrɛ di k’a sɔrɔ kɛlɛ ma kɛ.