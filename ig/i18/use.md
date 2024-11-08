# Wụnye Ma Jiri

## windows Buru Ụzọ Tinye git bash

windows , biko [pịa ebe a ka ibudata na wụnye `git bash` mbụ](https://git-scm.com/download/win) .

Gbaa ọrụ ndị na-esote na `git bash` .

## Wụnye

```sh
bash <(curl -sS https://i.i18n.site) i18
```

### Hazie Akara Ntụgharị Asụsụ

Gaa [i18n.site/token](//i18n.site/token) Pịa ka idetuo token

<img src="https://p.3ti.site/1719911689.avif" style="width:400px">

Mepụta `~/.config/i18n.site.yml` , mado ọdịnaya e depụtaghachiri n'ime ya, ọdịnaya dị ka ndị a:

```
token: YOUR_API_TOKEN
```

Na mgbakwunye [,](/#price) ịkwesịrị ijikọ kaadị kredit ịkwụ ụgwọ na [i18n.site/payBill](//i18n.site/payBill)

## Jiri

### Ihe Ngosi Ngosi

Biko rụtụ aka na ngosi [github.com/i18n-site/demo.i18](//github.com/i18n-site/demo.i18) iji mụta nhazi ntụgharị asụsụ `i18` .

Ndị ọrụ na China nwere ike mechie [atomgit.com/i18n/demo.i18](//atomgit.com/i18n/demo.i18)

Mgbe ịmechara, tinye ndekọ ma mee `i18` iji mechaa ntụgharị asụsụ ahụ.

### Ọdịdị Ndekọ

Usoro ndekọ ụlọ nkwakọba ihe nke template bụ nke a

```
┌── .i18n
│  └── conf.yml
└── en
   ├── _IgnoreDemoFile.md
   ├── i18n.yml
   └── README.md
```

Faịlụ ngosi atụgharịrị na ndekọ ndekọ `en` bụ naanị ihe atụ na enwere ike ihichapụ.

### Gbaa Ntụgharị Asụsụ

Tinye akwụkwọ ndekọ aha wee mee `i18` iji tụgharịa asụsụ.

Na mgbakwunye na ntụgharị asụsụ, mmemme ahụ ga-ewepụta folda `.i18n/data` , biko tinye ya na ebe nchekwa.

Mgbe ịsụgharịchara faịlụ ọhụrụ ahụ, a ga-emepụta faịlụ data ọhụrụ na ndekọ a. Cheta itinye `git add . ` .

## Faịlụ Nhazi

`.i18n/conf.yml` bụ faịlụ nhazi nke ngwa ntụgharị asụsụ ahịrị iwu `i18`

Ọdịnaya dị ka ndị a:

```
i18n:
  fromTo:
    en: zh ja ko de fr
    # en:

ignore:
  - _*
```

### Asụsụ Ntụgharị & Isi Mmalite

Na faịlụ nhazi, onye nọ n'okpuru `fromTo` :

`en` bụ asụsụ isi mmalite, `zh ja ko de fr` bụ asụsụ ebumnuche ntụgharị asụsụ.

Koodu asụsụ hụ [i18n.site/i18/LANG_CODE](https://i18n.site/i18/LANG_CODE)

Dịka ọmụmaatụ, ọ bụrụ na ịchọrọ ịsụgharị Chinese gaa na Bekee, degharịa ahịrị `zh: en` a.

Ọ bụrụ na ịchọrọ ịtụgharị asụsụ n'asụsụ niile akwadoro, biko hapụ oghere ka `:` gachara. ọmụmaatụ

```
i18n:
  fromTo:
    en:
```

Ị nwere ike hazie `fromTo` dị iche iche maka faịlụ subdirectories dị / iche edere dị ka ndị a :

```
i18n:
  fromTo:
    en:
  path:
    blog:
      fromTo:
        zh:
    blog/your_file_name.md:
      fromTo:
        ja:
```

Na tebụl nhazi a, asụsụ isi mmalite nke ntụgharị asụsụ katalọgụ `blog` bụ `zh` , na asụsụ isi mmalite nke ntụgharị asụsụ katalọgụ `blog/your_file_name.md` bụ `ja` .

### Onyonyo/Njikọ Ọtụtụ Asụsụ

Mgbe URL ndị dị na foto na njikọ dị na `replace:` na `MarkDown` (na `src` na àgwà `href` nke agbakwunyere `HTML` ) na-ahazi na `.i18n/conf.yml` na prefix a, koodu asụsụ nke dị na URL ga-eji koodu ntụgharị asụsụ dochie ya ( [asụsụ)](/i18/LANG_CODE) . [ndepụta koodu](/i18/LANG_CODE) ).

Dịka ọmụmaatụ, nhazi gị bụ nke a:

```yml
i18n:
  fromTo:
    fr: ko de en zh zh-TW uk ru ja
  replace:
    https://fcdoc.github.io/img/ : ko de uk>ru zh-TW>zh >en
```

`replace: ` bụ akwụkwọ ọkọwa okwu, isi ihe bụ prefix URL ga-edochi ya, uru ya bụ iwu nnọchi.

Ihe iji dochie iwu `ko de uk>ru zh-TW>zh >en` dị n'elu bụ na `ko de` na-eji foto nke koodu asụsụ nke ha, `zh-TW` na `zh` na-eji foto nke `zh` , `uk` na-eji foto nke `ru` , na asụsụ ndị ọzọ (dị ka `ja` ) na-eji foto a. nke `en` na ndabara.

Dịka ọmụmaatụ, faịlụ isi mmalite French ( `fr` ) nke `MarkDown` bụ nke a :

```md
![xx](https://i18n-img.github.io/fr/1.avif)
<video src="https://i18n-img.github.io/fr/1.mp4"></video>
[xx](https://i18n-img.github.io/fr/README.md)
<a style="color:red" href="https://i18n-img.github.io/fr/i18n.site.gz">xx</a>
```

Faịlụ Bekee ( `en` ) atụgharịrị ma mepụta ya bụ nke a :

```md
![xx](https://i18n-img.github.io/en/1.avif)
<video src="https://i18n-img.github.io/en/1.mp4"></video>
[xx](https://i18n-img.github.io/en/README.md)
<a style="color:red" href="https://i18n-img.github.io/en/i18n.site.gz">xx</a>
```

N'ebe a, `/en/` dị na koodu asụsụ isi mmalite ka ejiri `/zh/` dochie ya n'asụsụ ebumnuche.

Rịba ama : A ghaghị inwe `/` tupu na mgbe koodu asụsụ nke ederede edochiri na URL.

> [!TIP]
> Ọ bụrụ na ahazi `- /` na `url:` , ọ bụ naanị ụzọ ndị ikwu ka a ga-ejikọta, mana URL ndị na-amalite na `//` agaghị adabara.
>
> Ọ bụrụ na ụfọdụ njikọ nke ngalaba aha chọrọ ka edochie ma ụfọdụ achọghị ka edochie ya, ị nwere ike iji prefixes dị iche iche dị ka `[x](//x.com/en/)` na `[x](https://x.com/en/)` iji mata ọdịiche ha.

### Leghara Faịlụ Anya

Site na ndabara, a ga-atụgharị asụsụ faịlụ niile malite na `.md` na `.yml` na akwụkwọ ndekọ aha isi mmalite.

Ọ bụrụ na ịchọrọ ileghara ụfọdụ faịlụ anya ma ghara ịtụgharị ha (dị ka akwụkwọ emechabeghị), ị nwere ike hazie ya na mpaghara `ignore` .

`ignore` na-eji [globset](https://docs.rs/globset/latest/globset/#syntax) okwu ahụ dị ka faịlụ `.gitignore` .

Dịka ọmụmaatụ, `_* ` na faịlụ nhazi dị n'elu pụtara na faịlụ ndị na-amalite na `_` agaghị atụgharịa ya.

## Iwu Ntụgharị Asụsụ

### Ndị Ndezi Ntụgharị Asụsụ Ekwesịghị Ịgbakwunye Ma Ọ Bụ Hichapụ Ahịrị

Enwere ike idezi ntụgharị asụsụ ahụ. Gbanwee ederede izizi na igwe-sụgharịa ya ọzọ, agaghị edegharị mgbanwe akwụkwọ ntuziaka na ntụgharị asụsụ (ọ bụrụ na agbanwebeghị paragraf a nke ederede izizi).

> [!WARN]
> A ga-enwerịrị nzikọrịta ozi otu na otu n'etiti ahịrị ntụgharị asụsụ na ederede izizi. Ya bụ, etinyela ma ọ bụ hichapụ ahịrị mgbe ị na-achịkọta ntụgharị asụsụ. Ma ọ bụghị ya, ọ ga-ebute ọgba aghara na cache ndezi ntụgharị asụsụ.

Ọ bụrụ na ihe adịghị mma, biko rụtụ aka na [FAQ maka azịza.](/i18/qa#H1)

### `YAML` Ntụgharị Asụsụ

Ngwá ọrụ ahịrị iwu ga-ahụ faịlụ niile na-ejedebe na `.yml` n'ime ndekọ faịlụ asụsụ isi wee tụgharịa asụsụ ha.

* Rịba ama na ntinye aha faịlụ ga-abụrịrị `.yml` (ọ bụghị `.yaml` ).

Ngwa a na-atụgharị naanị ụkpụrụ ọkọwa okwu na `.yml` , ọ bụghị igodo ọkọwa okwu.

Dịka ọmụmaatụ `i18n/en/i18n.yml`

```
apiToken: API Token
defaultToken: Default Token
```

a ga-atụgharị ya ka `i18n/zh/i18n.yml`

```
apiToken: 接口令牌
defaultToken: 默认令牌
```

Enwere ike iji aka gbanwee ntụgharị asụsụ `YAML` (mana etinyekwala ma ọ bụ hichapụ igodo ma ọ bụ ahịrị na ntụgharị asụsụ).

Dabere na ntụgharị asụsụ `YAML` , ị nwere ike wulite ihe ngwọta mba ụwa maka asụsụ mmemme dị iche iche.

## Ojiji Dị Elu

### Ndekọ Ntụgharị Asụsụ

Ọ bụrụhaala na emepụtara `.i18n/conf.yml` (ọ dịghị mkpa ịmalite site na ndebiri ngosi ngosi oge ọ bụla), `i18` ga-arụ ọrụ nke ọma.

Ngwá ọrụ ahịrị iwu ga-ahụ nhazi `.i18n/conf.yml` n'ime akwụkwọ ndekọ aha niile wee tụgharịa asụsụ ha.

Ọrụ ndị na-eji [monorepo](//monorepo.tools) ụlọ nwere ike kewaa faịlụ asụsụ n'ime akwụkwọ ndekọ aha.

![](https://p.3ti.site/1719910016.avif)

### Ndekọ Nwụnye Omenala

A ga-etinye ya na `/usr/local/bin` na ndabara.

Ọ bụrụ na `/usr/local/bin` enweghị ikike ide, a ga-etinye ya na `~/.bin` .

Ịtọ ntọala gburugburu ebe obibi `TO` nwere ike ịkọwa ndekọ nwụnye, dịka ọmụmaatụ :

```sh
TO=/bin sudo bash <(curl -sS https://i.i18n.site) i18
```