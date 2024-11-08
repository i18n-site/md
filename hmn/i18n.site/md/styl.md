# Style Lis

[Nyem qhov no mus xauj cov ntaub ntawv ntawm nplooj ntawv no](//raw.githubusercontent.com/i18n-site/md/refs/heads/main/zh/i18n.site/md/styl.md) kom pom yuav ua li cas sau `MarkDown` hauv cov qauv hauv qab no.

## Folded Thaiv

|+| MarkDown yog dab tsi?

    MarkDown yog ib hom lus sib sib zog nqus uas tso cai rau cov neeg siv los tsim cov ntaub ntawv hauv ib hom ntawv dawb uas yooj yim nyeem thiab sau.

    Feem ntau siv los sau cov ntaub ntawv, cov ntawv blog, e-phau ntawv, rooj sib tham, thiab lwm yam.

    Nws muaj qhov zoo hauv qab no:

    1. Yooj yim kawm
    1. Nyeem tau heev
    1. Version tswj tus phooj ywg

       Txij li thaum `MarkDown` cov ntaub ntawv nyob rau hauv cov ntawv nyeem yooj yooj yim, cov programmers tau yooj yim muab lawv tso rau hauv kev tswj hwm version (xws li `git` ).

       Qhov no ua rau kev taug qab cov kev hloov pauv thiab kev sib koom tes yooj yim dua, tshwj xeeb tshaj yog hauv kev txhim kho pab pawg.

|-| I18N yog dab tsi?

    "I18N" yog lub ntsiab lus ntawm "Internationalization".

    Txij li thaum lo lus "Internationalization" muaj 18 tsab ntawv ntawm "I" thiab "N", "I18N" yog siv los ua kom yooj yim rau kev sawv cev.

    Hauv cov lus layman, nws txhais tau tias txhawb ntau hom lus.


Folding block yog qhov txuas ntxiv ntawm `i18n.site` txog `MarkDown` , sau raws li hauv qab no :

```
|+| TITLE
    MARKDOWN CONTENT
    YOUR CAN WRITE MULTI LINE CONTENT
```

nrog `|+| `或`|-| Cov kab pib nrog 'yuav tsim ib qho folding thaiv, thiab cov ntsiab lus ntawm cov folding thaiv yog cov kab txuas ntxiv nrog tib theem ntawm indentation (cov kab lus raug cais los ntawm cov kab dawb paug).

Pass`|-| `标记的折叠块默认展开，`|+| 'Tagged tsoo blocks yog vau los ntawm lub neej ntawd.

## Hauv Qab & Strikethrough &

Qhov no yog __ Underscore __ ,~~ kev tawm tsam~~ thiab cov ntawv nthuav qhia **bold** .

Nws yog sau raws li nram no:

```txt
这是__下划线__、~~删除线~~和**加粗**的演示文本。
```

Lub `MarkDown` parser ntawm `i18n.site` lub vev xaib tsim cov cuab yeej tau ua kom zoo dua cov kab hauv qab, tawm tsam, thiab cov ntsiab lus siab tawv Nws tuaj yeem siv tau yam tsis muaj qhov chaw ua ntej thiab tom qab lub cim, ua kom yooj yim sau cov ntaub ntawv hauv hom lus xws li Tuam Tshoj, Nyiv, thiab Kaus Lim Kauslim. tsis txhob siv qhov chaw ua cais.

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
> YOUR CONTENT
```

### Lus Cim `> [!NOTE]`

> [!NOTE]
> Yog tias koj xa lus rau kuv thiab kuv teb tam sim ntawd, qhov ntawd txhais li cas?
> Qhov no qhia tau tias kuv nyiam ua si nrog cov xov tooj ntawm tes.


### Ceeb Toom `> [!WARN]`

> [!WARN]
> Thaum mus rau kev taug txuj kev nyuaj qus, nws tseem ceeb heev kom nyob nyab xeeb. Nov yog qee cov lus qhia txog kev nyab xeeb tseem ceeb:
>
> - **Txheeb xyuas huab cua huab cua** : Lub lim tiam dhau los, ib pab pawg neeg nce toj tau ntsib cua daj cua dub ib nrab ntawm lub roob vim lawv tsis tau txheeb xyuas huab cua huab cua thiab yuav tsum khiav tawm sai.
> - **Nqa cov khoom tsim nyog** : Nco ntsoov nqa zaub mov txaus, dej thiab khoom siv pab thawj zaug.
> - **Nkag siab txog thaj av** : Ua kom paub koj tus kheej nrog cov struts thiab txoj hauv kev ntawm thaj chaw taug txuj kev nyuaj ua ntej kom tsis txhob poob.
> - **Nyob Txuas** : Nyob txuas nrog lub ntiaj teb sab nraud thiab xyuas kom txhua tus tuaj yeem rov qab los nyab xeeb.
>
> Nco ntsoov, kev nyab xeeb ib txwm los ua ntej!

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
    + Kev Sib Tham Kev Lag Luam Kev Lag Luam
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

### Loj Rooj Zaub Optimization

Rau cov rooj loj loj, cov txheej txheem hauv qab no tuaj yeem siv los ua kom zoo dua cov duab:

1. Siv cov ntawv me me

   Piv txwv li, qhwv lub rooj nrog `<div style="font-size:14px">` thiab `</div>` .

   Nco ntsoov tias `div` tag yuav tsum nyob hauv nws txoj kab, thiab tawm cov kab dawb paug ua ntej thiab tom qab nws.
1. Rau cov ntawv ntev dua hauv ib lub xov tooj, ntxig `<br>` los qhwv kab
1. Yog hais tias ib kem raug nyem dhau lawm, koj tuaj yeem ntxiv `<div style="width:100px">xxx</div>` rau lub header kom nthuav dav, thiab koj tuaj yeem ntxiv [`<wbr>` rau lub header](//developer.mozilla.org/docs/Web/HTML/Element/wbr) los tswj txoj kab tawg.

Ib qho piv txwv ua qauv qhia yog raws li nram no:

<div style="font-size:14px">

| haiv neeg       | <div style="width:70px;margin:auto">tus neeg xav lub npe</div> | Era | Lub ntsiab ideological pab                                                       |
|------------|------------------------------------------------|-----------------|--------------------------------------------------------------------|
| Tuam Tshoj       | Confucius                                           | 551-479 BC   | Tus tsim ntawm Confucianism tau npaj cov ntsiab lus tseem ceeb xws li "kev ua siab zoo" thiab "kev ncaj ncees" thiab hais txog kev coj ncaj ncees thiab kev coj noj coj ua. |
| ancient tim Nkij teb chaws     | Socrates                                       | 469-399 BC   | Tshawb nrhiav qhov tseeb los ntawm kev sib tham thiab dialectics tawm tswv yim "paub koj tus kheej" thiab hais txog kev xav txog kev xav         |
| Fabkis       | Voltaire                                         | 1694-1778       | Cov neeg sawv cev ntawm Enlightenment tau tawm tswv yim txog kev ywj pheej, kev ywj pheej thiab kev sib luag, thiab thuam kev ntseeg kev ntseeg thiab txoj cai tswj hwm.   |
| Lub teb chaws Yelemees       | Kant                                           | 1724-1804       | Muab tso rau pem hauv ntej "Tshem tawm ntawm Pure Reason"<br> Tshawb nrhiav lub hauv paus ntawm kev coj ncaj ncees, kev ywj pheej, thiab kev paub, hais txog qhov ua tau zoo     |

</div>

Lub pseudocode rau qhov piv txwv saum toj no yog raws li hauv qab no:

```md

<div style="font-size:14px">

| xx | <div style="width:70px;margin:auto">xx<wbr>xx</div> | xx | xx |
|----|----|-----------|----|
| xx | xx | xx<br>xxx | xx |

</div>

```

## Code

### Hauv Kab Lis Kev Cai

Hauv lub ntiaj teb loj ntawm cov lus programming, `Rust` , `Python` , `JavaScript` thiab `Go` txhua tus tuav txoj haujlwm tshwj xeeb.

### Ntau Kab Ntawm Code

```rust
fn main() {
  let x = 10;
  println!("Hello, world! {}", x);
}
```

## Kab Tawg Hauv Kab Lus

Cov kab tawg hauv kab lus tuaj yeem ua tiav yam tsis tau ntxiv cov kab dawb ntawm kab.
Qhov sib nrug ntawm kab tawg hauv kab lus yog me dua qhov sib nrug ntawm kab lus.

piv txwv:

> Ua neej nyob ua neeg zoo,
> Tuag tseem yog dab dab.
> Kuv tseem nco Xiang Yu,
> Tsis kam hla Jiangdong.
>
> Li Qingzhao siv Xiang Yu zaj dab neeg tu siab los qhia txog qhov tsis muaj peev xwm ntawm Song Dynasty.
> Qhia kev tsis txaus siab rau lub tsev hais plaub imperial rau surrendering yam tsis muaj kev sib ntaus.