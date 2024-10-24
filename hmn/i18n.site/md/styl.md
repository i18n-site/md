# Style Lis

[Nyem qhov no mus xauj cov ntaub ntawv ntawm nplooj ntawv no](//raw.githubusercontent.com/i18n-site/md/refs/heads/main/$LANG/i18n.site/md/styl.md) kom pom yuav ua li cas sau `MarkDown` hauv cov qauv hauv qab no.

## Hauv Qab & Strikethrough &

Qhov no yog __ Underscore __ ,~~ kev tawm tsam~~ thiab cov ntawv nthuav qhia **bold** .

Nws yog sau raws li nram no:

```txt
这是__下划线__、~~删除线~~和**加粗**的演示文本。
```

Lub `MarkDown` parser ntawm `i18n.site` lub vev xaib tsim cov cuab yeej tau ua kom zoo dua cov kab hauv qab, kev tawm tsam, thiab cov lus sib dhos tuaj yeem siv tau yam tsis muaj qhov chaw ua ntej thiab tom qab lub cim, ua kom yooj yim sau cov ntaub ntawv hauv hom lus xws li Tuam Tshoj, Nyiv, thiab Kaus Lim Kauslim. uas tsis siv qhov chaw ua cais.

Kev nyeem ntawv txuas ntxiv : [Vim li cas Nuggets ' Markdown syntax ( `**……**` ) qee zaum tsis siv?](//juejin.cn/post/7064565848421171213)

## Nqe Lus

### Ib Kab Quote

> Nws yog kuv qhov xwm txheej uas kuv cov txuj ci yuav muaj txiaj ntsig, thiab kuv yuav rov qab los tom qab tag nrho kuv cov nyiaj tau siv lawm.
<p style="text-align:right">─ Li Li</p>

### Ntau Kab Quotes

> Lwm qhov tshwj xeeb zoo ntawm science ntawv tseeb yog nws qhov dav dav heev.
> "Kev Tsov Rog thiab Kev Thaj Yeeb", nrog rau ib lab lo lus, tsuas yog piav qhia txog keeb kwm ntawm ib cheeb tsam rau ntau xyoo lawm;
> Thiab science ntawv tseeb dab neeg zoo li Asimov's "Qhov Kawg Teb" vividly piav qhia txog ntau txhiab xyoo keeb kwm ntawm tag nrho lub ntiaj teb, suav nrog tib neeg, hauv ob peb txhiab lo lus.
> Xws li inclusiveness thiab boldness yog tsis yooj yim sua kom ua tau nyob rau hauv ib txwm cov ntaub ntawv.
<p style="text-align:right">── Liu Cixin</p>

### Tswv Yim `> [!TIP]`

> [!TIP]
> Nco ntsoov xyuas qhov siv tau ntawm koj daim ntawv hla tebchaws thiab daim ntawv hla tebchaws tsis tuaj yeem nkag lossis tawm hauv lub tebchaws.

Nws yog sau raws li nram no

```
> [!TIP]
> your content
```

### Lus Cim `> [!NOTE]`

> [!NOTE]
> Yog tias koj xa lus rau kuv thiab kuv teb tam sim ntawd, qhov ntawd txhais li cas?
> Qhov no qhia tau tias kuv nyiam ua si nrog cov xov tooj ntawm tes.


### Ceeb Toom `> [!WARN]`

> [!WARN]
> Thaum mus rau kev taug txuj kev nyuaj qus, nws tseem ceeb heev kom nyob nyab xeeb.
> Lub lim tiam dhau los, ib pab pawg neeg nce toj tau ntsib cua daj cua dub ib nrab ntawm lub roob thiab yuav tsum tau khiav tawm vim lawv tsis tuaj yeem tshawb xyuas huab cua huab cua.
> Nco ntsoov, txhua yam kev ua si sab nraum zoov yuav tsum tau npaj txaus thiab saib xyuas huab cua.

## To-Do Lis

- [x] Tsim cov khoom tsim qauv thiab cov npe tshwj xeeb
- [ ] Txheeb xyuas cov txheej txheem thev naus laus zis thiab cov cuab yeej tsim kho
- [ ] Tsim cov khoom tsim cov sijhawm thiab cov ntsiab lus tseem ceeb

## Lis

### Xaj Lis

1. khiav
   1. Peb zaug ib lub lim tiam, 5 kilometers ib zaug
   1. Khiav ib nrab marathon
1. gym kev cob qhia
   1. Ob zaug ib lub lim tiam, 1 teev txhua zaus
   1. Tsom ntsoov rau cov leeg nqaij

### Lis Tsis Tau

* kev sib tham
  - Koom nrog hauv kev sib pauv kev lag luam
    + Kev sib tham txog technology
    + Kev sib tham txog kev ua lag luam
  - Npaj kev sib sau ua phooj ywg
    + Sab nraum zoov BBQ
    + movie hmo

## Daim Ntawv

| tus xav       | Cov nyiaj pab tseem ceeb                           |
|--------------|------------------------------------|
| Confucius         | Founder ntawm Confucianism |
| Socrates     | txiv ntawm western philosophy  |
| Nietzsche         | Superman lub tswv yim, thuam kev coj ncaj ncees thiab kev ntseeg       |
| marx       | communism |

## code

### Hauv Kab Lis Kev Cai

Hauv lub ntiaj teb loj ntawm cov lus programming, `Rust` , `Python` , `JavaScript` thiab `Go` txhua tus tuav txoj haujlwm tshwj xeeb.

### Ntau Kab Ntawm Code

```rust
fn main() {
  let x = 10;
  println!("Hello, world! {}", x);
}
```