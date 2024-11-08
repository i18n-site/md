# Ndepụta Ụdị

[Pịa ebe a ka ịchọọ faịlụ isi mmalite nke ibe a](//raw.githubusercontent.com/i18n-site/md/refs/heads/main/zh/i18n.site/md/styl.md) ka ịhụ ka esi ede `MarkDown` n'ụdị ndị a.

## Apịaji Ngọngọ

|+| Kedu ihe bụ MarkDown?

    MarkDown bụ asụsụ nrịbama dị fechaa nke na-enye ndị ọrụ ohere ịmepụta akwụkwọ ahazi n'ụdị ederede dị larịị nke dị mfe ịgụ na ide.

    A na-ejikarị ede akwụkwọ, akụkọ blọgụ, akwụkwọ e-mail, posts ọgbakọ, wdg.

    Ọ nwere uru ndị a:

    1. Ọ dị mfe ịmụta
    1. Enwere ike ịgụ nke ukwuu
    1. Ụdị njikwa enyi na enyi

       Ebe ọ bụ na akwụkwọ `MarkDown` dị n'ụdị ederede doro anya, ndị mmemme nwere ike itinye ha ngwa ngwa na sistemụ njikwa ụdị (dị ka `git` ).

       Nke a na-eme mgbanwe nsochi na imekọ ihe ọnụ dị mfe karị, ọkachasị na mmepe otu.

|-| Kedu ihe bụ I18N?

    "I18N" bụ mbiri nke "Internationalization".

    Ebe okwu "Internationalization" nwere mkpụrụedemede iri na asatọ n'etiti "I" na "N", "I18N" na-eji mee ka ihe nnọchiteanya dị mfe.

    N'okwu ndị nkịtị, ọ pụtara ịkwado ọtụtụ asụsụ.


Nchikota mpịachi bụ syntax agbatịkwuru `i18n.site` ruo `MarkDown` , edere ka nke a :

```
|+| TITLE
    MARKDOWN CONTENT
    YOUR CAN WRITE MULTI LINE CONTENT
```

na `|+| `或`|-| Ahịrị na-amalite na `ga-emepụta ngọngọ mpịachi, na ọdịnaya nke mgbochi mpịachi bụ ahịrị ndị na-esote ya na otu ọkwa nke ntinye (a na-ekewa paragraf site na ahịrị oghere).

Gafe'|-| `标记的折叠块默认展开，`|+| 'A na-akụda ngọngọ ndị dara ada na ndabara.

## Kpọmkwem & Strikethrough &

Nke __ bụ __~~ itoputa~~ na ederede ngosi **nkwuwa okwu** .

Edere ya dika nke a:

```txt
这是__下划线__、~~删除线~~和**加粗**的演示文本。
```

Ihe nyocha `MarkDown` nke ngwa ụlọ ọrụ webụsaịtị `i18n.site` emeziwanye akara n'okpuru, ntụgharị, na syntax siri ike Ọ nwere ike ịdị na-enweghị oghere n'ihu na mgbe akara ahụ gasịrị, na-eme ka ọ dị mfe ide akwụkwọ n'asụsụ dị ka China, Japan, na Korea. ejila oghere dị ka ihe nkesa.

[Markdown `**……**`](//juejin.cn/post/7064565848421171213) :

## Kwuo Okwu

### See Okwu Otu Ahịrị

> Ọ bụ ọdịdị m ka talent m ga-aba uru, m ga-alọghachikwa mgbe m kwụsịrị ego m niile.
<p style="text-align:right">─ Li Bai</p>

### Ọnụ Ọgụgụ Ahịrị Ọtụtụ

> Uru ọzọ pụrụ iche nke akụkọ ifo sayensị nwere bụ oke ya sara mbara.
> A "Agha na Udo", na a nde okwu, nanị na-akọwa akụkọ ihe mere eme nke a mpaghara ruo ọtụtụ iri afọ;
> Na akụkọ ifo sayensị dị ka “Azịza Ikpeazụ” nke Asimov na-akọwa n'ụzọ doro anya na ọtụtụ ijeri afọ nke akụkọ ihe mere eme nke eluigwe na ala, gụnyere ụmụ mmadụ, na nanị puku okwu ole na ole.
> Njikọ dị otú ahụ na nkwuwa okwu agaghị ekwe omume inweta na akwụkwọ ọdịnala.
<p style="text-align:right">── Liu Cixin</p>

### Ndụmọdụ `> [!TIP]`

> [!TIP]
> Cheta ịlele izi ezi nke paspọtụ gị na akwụkwọ ikike kubie ume enweghị ike ịbanye ma ọ bụ pụọ na obodo ahụ.

Edere ya dị ka ndị a

```
> [!TIP]
> YOUR CONTENT
```

### Okwu `> [!NOTE]`

> [!NOTE]
> Ọ bụrụ na izitere m ozi m zaghachi ozugbo, gịnị ka nke ahụ pụtara?
> Nke a na-egosi na ọ na-amasị m iji ekwentị mkpanaaka egwu egwu.


### Ịdọ Aka Ná Ntị `> [!WARN]`

> [!WARN]
> Mgbe ị na-aga njem nlegharị anya nke ọhịa, ọ dị mkpa ka ị nọrọ na nchekwa. Nke a bụ ụfọdụ ndụmọdụ nchekwa isi:
>
> - **Lelee amụma ihu igwe** : N'izu gara aga, otu ndị na-arị elu zutere oké ifufe nke dị na ọkara n'ugwu ahụ n'ihi na ha enyochaghị amụma ihu igwe wee pụọ ngwa ngwa.
> - **Buru ngwa dị mkpa** : Gbaa mbọ hụ na ị weta nri zuru oke, mmiri na ihe enyemaka mbụ.
> - **Ghọta ala ahụ** : mara onwe gị nke ọma na mbara ala na ụzọ nke ebe njem ahụ tupu oge eruo ka ị ghara ịla n'iyi.
> - **Jikọọ** : Jikọọ na ụwa dị n'èzí wee hụ na onye ọ bụla nwere ike ịlaghachi n'enweghị nsogbu.
>
> Cheta, nchekwa na-ebute ụzọ mgbe niile!

## Ndepụta Ihe a Ga-Eme

- [x] Chepụta prototype ngwaahịa na ndepụta atụmatụ
- [ ] Kpebie nchịkọta teknụzụ na akụrụngwa mmepe
- [ ] Zụlite usoro iheomume mmepe ngwaahịa na ihe dị ịrịba ama

## Ndepụta

### Ndepụta Ahaziri

1. na-agba ọsọ
   1. Ugboro atọ n'izu, kilomita 5 oge ọ bụla
   1. Gbaa ọkara marathon
1. ọzụzụ mgbatị ahụ
   1. Ugboro abụọ n'izu, 1 hour oge ọ bụla
   1. Lekwasị anya na akwara akwara

### Ndepụta Enweghị Usoro

* ihe omume ọha
  - Soro na nzukọ mgbanwe ụlọ ọrụ
    + Oge nkekọrịta teknụzụ
    + Nzukọ mgbanwe azụmaahịa
  - Hazie nnọkọ ndị enyi
    + N'èzí BBQ
    + abalị ihe nkiri

## Mpempe Akwụkwọ

| onye na-eche echiche       | Isi ntinye aka                           |
|--------------|------------------------------------|
| Confucius         | Onye guzobere Confucianism |
| Socrates     | nna western philosophy  |
| Nietzsche         | Nkà ihe ọmụma Superman, na-akatọ omume ọdịnala na okpukperechi       |
| marx       | ọchịchị Kọmunist |

### Ngosipụta Tebụl Buru Ibu

Maka tebụl buru ibu, enwere ike iji ụzọ ndị a iji kwalite mmetụta ngosi:

1. Jiri mkpụrụedemede pere mpe

   Dịka ọmụmaatụ, kechie tebụl na `<div style="font-size:14px">` na `</div>` .

   Rịba ama na mkpado `div` ga-enwerịrị ahịrị nke ya, ma hapụ ahịrị oghere tupu na mgbe ọ gasịrị.
1. Maka ederede ogologo na cell, fanye `<br>` iji kechie ahịrị
1. Ọ bụrụ na kọlụm dị mkpụmkpụ dị mkpụmkpụ, ịnwere ike ịgbakwunye `<div style="width:100px">xxx</div>` na nkụnye eji isi mee ka obosara ya gbasaa, ị nwekwara ike ịgbakwunye [`<wbr>` na nkụnye eji isi mee](//developer.mozilla.org/docs/Web/HTML/Element/wbr) iji jikwaa ọnọdụ nkwụsịtụ ahịrị.

Ihe atụ ngosi bụ nke a:

<div style="font-size:14px">

| mba       | <div style="width:70px;margin:auto">aha echiche</div> | Oge | Onyinye echiche echiche                                                       |
|------------|------------------------------------------------|-----------------|--------------------------------------------------------------------|
| China       | Confucius                                           | 551-479 BC   | Onye malitere Confucianism tụpụtara echiche ndị bụ isi dị ka "obiọma" na "ihe onwunwe" ma mesie ike ịzụlite omume ọma na usoro mmekọrịta ọha na eze. |
| Greece oge ochie     | Socrates                                       | 469-399 BC   | Ịchọgharị eziokwu site na mkparịta ụka na asụsụ na-atụ aro "mara onwe gị" ma na-emesi echiche ezi uche ike.         |
| France       | Voltaire                                         | 1694-1778       | Ndị nnọchiteanya nke Enlightenment kwadoro ezi uche, nnwere onwe na nha anya, ma katọọ nkwenkwe ụgha okpukpe na ọchịchị aka ike.   |
| Germany       | Kant                                           | 1724-1804       | Wepụta "Critique of Pure Reason"<br> Na-enyocha ntọala nke omume ọma, nnwere onwe, na ihe ọmụma, na-emesi ihe kpatara ya ike     |

</div>

Pseudocode maka ihe atụ dị n'elu bụ nke a:

```md

<div style="font-size:14px">

| xx | <div style="width:70px;margin:auto">xx<wbr>xx</div> | xx | xx |
|----|----|-----------|----|
| xx | xx | xx<br>xxx | xx |

</div>

```

## Koodu

### Koodu Inline

Na nnukwu ụwa nke asụsụ mmemme, `Rust` , `Python` , `JavaScript` na `Go` nke ọ bụla nwere ọnọdụ pụrụ iche.

### Ọtụtụ Ahịrị Koodu

```rust
fn main() {
  let x = 10;
  println!("Hello, world! {}", x);
}
```

## Nkwụsị Ahịrị N'ime Paragraf

Enwere ike nweta nkwụsịtụ ahịrị n'ime paragraf na-agbakwunyeghị ahịrị oghere n'etiti ahịrị.
Oghere dị n'etiti nkwụsịtụ ahịrị n'ime paragraf pere mpe karịa oghere n'etiti paragraf.

ọmụmaatụ:

> Bie ndụ dị ka ezigbo mmadụ,
> Ọnwụ bụkwa dike mmụọ.
> Xiang Yu ka na-atụ m uche,
> Na-achọghị ịgafe Jiangdong.
>
> Li Qingzhao ji akụkọ ọjọọ Xiang Yu gosi na enweghị ike nke usoro ndị eze egwu.
> Na-egosipụta enweghị afọ ojuju na ụlọ ikpe nke alaeze ukwu maka ịrara onwe ya nye n'alụghị ọgụ.