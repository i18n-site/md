# Style List a Wɔahyehyɛ

[Klik ha na hwehwɛ krataafa yi source file no mu](//raw.githubusercontent.com/i18n-site/md/refs/heads/main/zh/i18n.site/md/styl.md) na woahu sɛnea wobɛkyerɛw `MarkDown` wɔ styles a edidi so yi mu.

## Block a Wɔabobɔw

|+| Dɛn ne MarkDown?

    MarkDown yɛ kasa a wɔde hyɛ agyirae a emu yɛ hare a ɛma wɔn a wɔde di dwuma no tumi yɛ nkrataa a wɔahyehyɛ no wɔ nkyerɛwee a ɛnyɛ den mu a ɛnyɛ den sɛ wɔbɛkenkan na wɔakyerɛw.

    Wɔtaa de kyerɛw nkrataa, blog nsɛm, e-nwoma, forum nsɛm, ne nea ɛkeka ho.

    Ɛwɔ mfaso horow a edidi so yi:

    1. Ɛnyɛ den sɛ wobesua
    1. Wotumi kenkan yiye
    1. Version control adamfofa su

       Esiane sɛ nkrataa `MarkDown` wɔ nkyerɛwee a ɛnyɛ den mu nti, ɛnyɛ den sɛ programmers betumi de ahyɛ version control systems mu (te sɛ `git` ).

       Eyi ma nsakrae a wobedi akyi na wɔayɛ biako no yɛ mmerɛw kɛse, titiriw wɔ kuw nkɔso mu.

|-| Dɛn ne I18N?

    "I18N" yɛ "Amanaman Ntam Nkitahodi" no tiawa.

    Esiane sɛ asɛmfua "Internationalization" wɔ nkyerɛwde 18 a ɛda "I" ne "N" ntam nti, wɔde "I18N" di dwuma de ma gyinabea no yɛ mmerɛw.

    Wɔ layman kasa mu no, ɛkyerɛ sɛ wɔbɛboa kasa ahorow pii.


Folding block yɛ syntax a wɔatrɛw mu a ɛyɛ `i18n.site` kosi `MarkDown` , a wɔakyerɛw sɛnea edidi so yi :

```
|+| TITLE
    MARKDOWN CONTENT
    YOUR CAN WRITE MULTI LINE CONTENT
```

ne `|+| `或`|-| Ntrɛwmu a efi ase ` bɛma wɔanya folding block, na folding block no mu nsɛm ne nkyerɛwde a edi hɔ a ɛwɔ indentation level koro (wɔde blank lines na ɛtetew nkyekyem ahorow no mu).

Twam`|-| `标记的折叠块默认展开，`|+| `Tagged collapsed blocks no, wɔabubu no default so.

## Twe Adwene Si & &

Eyi ne Twe adwene si __ , so __~~ strikethrough a wɔde di dwuma~~ ne nsɛm a wɔde kyerɛkyerɛ mu a wɔakyerɛw no **tuntum** .

Wɔakyerɛw no sɛnea edidi so yi:

```txt
这是__下划线__、~~删除线~~和**加粗**的演示文本。
```

`MarkDown` parser a ɛwɔ `i18n.site` wɛbsaet dan adwinnade no ayɛ optimized underline, strikethrough, ne bold syntax Ebetumi ayɛ adwuma a enni spaces ansa na agyiraehyɛde no ne akyi, na ama ayɛ mmerɛw sɛ wobɛkyerɛw nkrataa wɔ kasa horow te sɛ China, Japan, ne Korea sɛ mfa ahunmu nni dwuma sɛ nneɛma a ɛpaapae nneɛma mu.

Akenkan a wɔatrɛw : [Dɛn nti na ɛtɔ mmere bi a Nuggets’ Markdown syntax ( `**……**` ) no ntumi nyɛ adwuma?](//juejin.cn/post/7064565848421171213)

## Asɛnka

### Nkyerɛwde Biako a Wɔafa Aka

> Ɛyɛ me su sɛ me talente so bɛba mfaso, na mɛsan aba bere a wɔasɛe me sika nyinaa akyi.
<p style="text-align:right">─ Li Bai na ɔkyerɛwee</p>

### Nsɛm a Wɔafa Aka Wɔ Nkyerɛwde Ahorow Pii Mu

> Mfaso soronko foforo a ɛwɔ nyansahu mu ayɛsɛm so ne sɛnea ɛtrɛw yiye.
> "Ɔko ne Asomdwoe", a nsɛmfua ɔpepem biako wom, kyerɛkyerɛ ɔmantam bi abakɔsɛm mu mfe du du pii nkutoo;
> Na nyansahu mu ayɛsɛm nhoma ahorow te sɛ Asimov "Mmuae a Etwa To" no de nsɛmfua mpempem kakraa bi pɛ ka amansan nyinaa abakɔsɛm mfe ɔpepepem pii ho asɛm pefee, a nnipa ka ho.
> Ɛrentumi nyɛ yiye sɛ wobenya obiara a wɔka ne ho ne akokoduru a ɛte saa wɔ atetesɛm nhoma ahorow mu.
<p style="text-align:right">── Liu Cixin na ɔkyerɛwee</p>

### Afotu a Ɛto `> [!TIP]`

> [!TIP]
> Kae sɛ wobɛhwɛ sɛ wo passport ne visa no yɛ nokware anaa.

Wɔakyerɛw no sɛnea edidi so yi

```
> [!TIP]
> YOUR CONTENT
```

### Nkyerɛkyerɛmu `> [!NOTE]`

> [!NOTE]
> Sɛ wode nkra mena me na mebua ntɛm ara a, ɛno kyerɛ dɛn?
> Eyi kyerɛ sɛ m’ani gye ho ankasa sɛ mede telefon a wokura kyin bedi agoru.


### Kɔkɔbɔ `> [!WARN]`

> [!WARN]
> Sɛ worekɔ wuram akwantu bi a, ɛho hia sɛ wotra hɔ dwoodwoo. Ahobammɔ ho afotu atitiriw bi ni:
>
> - **Hwɛ wim tebea ho nkɔmhyɛ** : Dapɛn a etwaam no, wɔn a wɔforo bepɔw no kuw bi hyiaa ahum bi wɔ bepɔw no fã efisɛ wɔanhwɛ wim tebea ho nkɔmhyɛ na na ɛsɛ sɛ wotu ntɛm ara.
> - **Fa nneɛma a ɛho hia kɔ** : Hwɛ sɛ wode aduan, nsu ne mmoa a edi kan a ɛdɔɔso bɛba.
> - **Te asase no ase** : Di kan hu asase ne akwan a ɛwɔ beae a wɔyɛ akwantu no yiye na woakwati sɛ wobɛyera.
> - **Stay Connected** : Tra so ne abɔnten wiase no nya abusuabɔ na hwɛ hu sɛ obiara betumi asan aba dwoodwoo.
>
> Kae sɛ ahobammɔ di kan bere nyinaa!

## Nneɛma a Ɛsɛ Sɛ Woyɛ

- [x] Design product prototype ne feature list
- [ ] Kyerɛ mfiridwuma stack ne nkɔso nnwinnade
- [ ] Yɛ nneɛma a wɔyɛ no bere nhyehyɛe ne nsɛntitiriw

## Ahodoɔ

### Nhyehyɛe a Wɔahyehyɛ

1. retu mmirika
   1. Mprɛnsa dapɛn biara, kilomita 5 bere biara
   1. Mmirikatu mmirika fã
1. apɔw-mu-teɛteɛ ntetee
   1. Mpɛn abien dapɛn biara, dɔnhwerew 1 bere biara
   1. Fa w’adwene si ntini atitiriw so

### List a Wɔanhyehyɛ No Nnidiso Nnidiso

* asetra mu nsɛm a esisi
  - Fa wo ho hyɛ nnwuma mu nsakrae nhyiam ahorow mu
    + Mfiridwuma mu kyɛfa a wɔde ma ho nhyiam
    + Adwumayɛfoɔ Nsesaeɛ Nhyiamu
  - Yɛ nnamfo nhyiam ho nhyehyɛe
    + Abɔnten so BBQ
    + sini anadwo

## Krataa

| adwenkyerɛfo       | Ntoboa atitiriw                           |
|--------------|------------------------------------|
| Konfusio a ɔyɛ         | Ɔde Konfusiosom sii hɔ |
| Socrates na ɔkyerɛwee     | atɔe fam nyansapɛ agya  |
| Nietzsche na ɔkyerɛwee         | Superman nyansapɛ, a ɛkasa tia atetesɛm mu abrabɔ pa ne nyamesom       |
| marx na ɔkyerɛwee       | komunism a wɔde di dwuma |

### Kɛse Pon Kyerɛ Optimization

Wɔ pon a ɛsõ kakra ho no, wobetumi de akwan a edidi so yi adi dwuma de ayɛ nea ɛkyerɛ sɛnea nneɛma kyerɛ no yiye:

1. Fa nkyerɛwde nketewa di dwuma

   Sɛ nhwɛso no, fa `<div style="font-size:14px">` ne `</div>` kyekyere pon no so.

   Hyɛ no nsow sɛ ɛsɛ sɛ `div` tag no gye n’ankasa line, na gyaw nkyerɛwde a ɛda hɔ ansa na ne akyi.
1. Sɛ wopɛ nsɛm a ɛware wɔ cell mu a, fa `<br>` hyɛ mu na fa kyekyere nkyerɛwde no
1. Sɛ wɔpiapia kɔla bi tiawa dodo a, wobɛtumi de `<div style="width:100px">xxx</div>` aka ti no ho de atrɛw ne tɛtrɛtɛ mu, na wobɛtumi nso de [`<wbr>` aka atiri no ho](//developer.mozilla.org/docs/Web/HTML/Element/wbr) de ahyɛ line break gyinabea no so.

Ɔyɛkyerɛ nhwɛso bi ne nea edidi so yi:

<div style="font-size:14px">

| ɔman       | <div style="width:70px;margin:auto">adwenkyerɛfo din</div> | Era | Adwene mu ntoboa atitiriw                                                       |
|------------|------------------------------------------------|-----------------|--------------------------------------------------------------------|
| China       | Konfusio a ɔyɛ                                           | 551-479 A.Y.B   | Nea ɔhyehyɛɛ Konfusiosom no de nsusuwii atitiriw te sɛ "ayamye" ne "ɛfata" ho nyansahyɛ mae na osii abrabɔ pa ho nkɔso ne asetra mu nhyehyɛe so dua. |
| tete helafo     | Socrates na ɔkyerɛwee                                       | 469-399 A.Y.B   | Nokware no mu a wobɛhwehwɛ denam nkɔmmɔbɔ ne nkɔmmɔbɔ so no hyɛ nyansa sɛ "hu wo ho" na esi nsusuwii a ntease wom so dua         |
| France       | Voltaire na ɔkyerɛwee                                         | 1694-1778       | Nimdeɛ bere no mu ananmusifo kamfoo ntease, ahofadi ne pɛyɛ kyerɛe, na wɔkasa tiaa nyamesom mu gyidihunu ne tumidi nniso.   |
| Germany       | Kant na ɔkyerɛwee                                           | 1724-1804       | Fa "Ntease a Ɛho Tew Ho Ɔkasatia" no to anim.<br> Ɔhwehwɛ abrabɔ pa, ahofadi, ne nimdeɛ nnyinaso ahorow mu, na esi ntease a mfaso wɔ so so dua     |

</div>

Pseudocode a wɔde yɛ atifi hɔ nhwɛso no te sɛ nea edidi so yi:

```md

<div style="font-size:14px">

| xx | <div style="width:70px;margin:auto">xx<wbr>xx</div> | xx | xx |
|----|----|-----------|----|
| xx | xx | xx<br>xxx | xx |

</div>

```

## Koodu

### Inline Koodu a Ɛwɔ Mu

Wɔ nhyehyɛe kasa ahorow wiase kɛse no mu no, `Rust` , `Python` , `JavaScript` ne `Go` biara di gyinabea soronko.

### Koodu Nkyerɛwde Ahorow Pii

```rust
fn main() {
  let x = 10;
  println!("Hello, world! {}", x);
}
```

## Ntrɛwmu a Wɔpaapae Mu Wɔ Nkyekyem No Mu

Wobetumi ayɛ nkyerɛwde a wɔde twa mu wɔ nkyekyem ahorow mu a wɔmfa nkyerɛwde a ɛda hɔ kwa nka nkyerɛwde no ntam.
Ntrɛwmu a ɛda ntam wɔ nkyekyem ahorow mu no sua sen nkyekyem ahorow ntam.

Nhwɛsoɔ:

> Tra ase sɛ onipa kɛse, .
> Owu nso yɛ ɔbran a ɔyɛ ahonhonsɛmdi.
> Meda so ara kae Xiang Yu, 1999.
> Ɔmpɛ sɛ obetwa Jiangdong.
>
> Li Qingzhao de Xiang Yu asɛm a ɛyɛ awerɛhow no dii dwuma de kyerɛɛ sɛnea Nnwom Ahemman no ntumi nyɛ adwuma yiye.
> Ɔda no adi sɛ n’ani nnye ahemfie no ho sɛ wɔde wɔn ho mae a wɔanko.