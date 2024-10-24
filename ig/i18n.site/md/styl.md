# Ndepụta Ụdị

[Pịa ebe a ka ịchọọ faịlụ isi mmalite nke ibe a](//raw.githubusercontent.com/i18n-site/md/refs/heads/main/$LANG/i18n.site/md/styl.md) ka ịhụ ka esi ede `MarkDown` n'ụdị ndị a.

## Kpọmkwem & Strikethrough &

Nke __ bụ __~~ itoputa~~ na ederede ngosi **nkwuwa okwu** .

Edere ya dika nke a:

```txt
这是__下划线__、~~删除线~~和**加粗**的演示文本。
```

Ihe nyocha `MarkDown` nke ngwá ọrụ ụlọ ebe nrụọrụ weebụ `i18n.site` emeela ka akara ngosi, ntụgharị, na syntax siri ike rụọ ọrụ na-enweghị oghere tupu akara ahụ, na-eme ka ọ dịkwuo mfe ide akwụkwọ n'asụsụ dị ka China, Japan, na Korea. nke na-adịghị eji oghere dị ka separators.

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
> your content
```

### Okwu `> [!NOTE]`

> [!NOTE]
> Ọ bụrụ na izitere m ozi m zaghachi ozugbo, gịnị ka nke ahụ pụtara?
> Nke a na-egosi na ọ na-amasị m iji ekwentị mkpanaaka egwu egwu.


### Ịdọ Aka Ná Ntị `> [!WARN]`

> [!WARN]
> Mgbe ị na-aga njem nlegharị anya nke ọhịa, ọ dị mkpa ka ị nọrọ na nchekwa.
> N'izu gara aga, otu ìgwè ndị na-arị elu zutere oké ifufe nke dị na ọkara ugwu ahụ wee pụọ n'ihi na ha enyochaghị amụma ihu igwe.
> Cheta, ihe omume ọ bụla n'èzí chọrọ nkwadebe zuru oke na nlebara anya na ihu igwe.

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
    + Nzukọ mgbanwe azụmahịa
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

## koodu

### Koodu Inline

Na nnukwu ụwa nke asụsụ mmemme, `Rust` , `Python` , `JavaScript` na `Go` nke ọ bụla nwere ọnọdụ pụrụ iche.

### Ọtụtụ Ahịrị Koodu

```rust
fn main() {
  let x = 10;
  println!("Hello, world! {}", x);
}
```