# Wụnye Ma Jiri

## windows Buru Ụzọ Tinye git bash

windows , biko [pịa ebe a ka ibudata na wụnye `git bash`](https://git-scm.com/download/win) .

Gbaa ọrụ ndị ọzọ na `git bash`

## Wụnye

```sh
bash <(curl -sS https://i.i18n.site) i18
```

### Hazie Akara Ntụgharị Asụsụ

Gaa [i18n.site/token](//i18n.site/token) Pịa ka idetuo token

<img src="https://p.3ti.site/1719911689.avif" style="max-width:400px">

Mepụta `~/.config/i18n.site.yml` mado ọdịnaya e depụtaghachiri n'ime ya, ọdịnaya dị ka ndị a:

```
token: YOUR_API_TOKEN
```

Na mgbakwunye, ịkwesịrị [i18n.site/payBill](//i18n.site/payBill) kaadị kredit maka ịkwụ ụgwọ (ọ dịghị ụgwọ a chọrọ, weebụsaịtị ga-ewepụ ụgwọ ozugbo dabere na ojiji, [lee ebe obibi maka ịnye ọnụahịa](/#price) ).

## Jiri

### Ihe Ngosi Ngosi

Biko rụtụ aka na ngosi [github.com/i18n-site/demo.i18](//github.com/i18n-site/demo.i18) ka ịmụta nhazi ntụgharị asụsụ `i18`

Ndị ọrụ na China nwere ike mechie [atomgit.com/i18n/demo.i18](//atomgit.com/i18n/demo.i18)

Mgbe ịmechara, tinye ndekọ ma `i18` ka ịtụgharị asụsụ ahụ mechaa.

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

Akwụkwọ ndekọ `en` nwere faịlụ ngosi atụgharịrị, nke bụ naanị ihe atụ ma nwee ike ihichapụ.

### Gbaa Ntụgharị Asụsụ

Tinye ndekọ ma gbaa `i18` ka ịsụgharị.

### Tinye Faịlụ Na Ebe Nchekwa

Na mgbakwunye na ntụgharị asụsụ, mmemme ahụ ga-ewepụtakwa faịlụ ndị a, biko tinye ha na ebe nchekwa.

```
.i18n/hash
.i18n/cache/.gitignore
```

N'ime ha, ọdịnaya : `.i18n/cache/.gitignore`

```
**/*
!**/.gitignore
```

Nke a pụtara ileghara faịlụ niile dị na ndekọ `.i18n/cache/` (ma e wezụga `.i18n/cache/.gitignore` ).

Ọ bụrụ na ngwanrọ njikwa ụdị gị abụghị `git` biko leghara ya anya dịka nhazi a si dị.

## Faịlụ Nhazi

Ọ `.i18n/conf.yml` faịlụ nhazi nke ngwa ntụgharị asụsụ ahịrị `i18`

Ọdịnaya dị ka ndị a:

```
i18n:
  fromTo:
    en: zh ja ko de fr
    # en:

ignore:
  - _*
```

### & Ntụgharị Asụsụ Isi Mmalite

N'ime faịlụ nhazi, ndị nọ n'okpuru `fromTo`

`en` bụ asụsụ isi mmalite, `zh ja ko de fr` bụ asụsụ ebumnuche ntụgharị.

Koodu asụsụ hụ [i18n.site/i18/LANG_CODE](https://i18n.site/i18/LANG_CODE)

Dịka ọmụmaatụ, ọ bụrụ na ịchọrọ ịsụgharị Chinese gaa na Bekee, degharịa ahịrị a `zh: en`

Ọ bụrụ na ịchọrọ ịtụgharị asụsụ n'asụsụ niile akwadoro, biko hapụ oghere ma emechaa `:` ọmụmaatụ

```
i18n:
  fromTo:
    en:
```

### Leghara Faịlụ Anya

Site na ndabara, a ga `.yml` atụgharị asụsụ faịlụ niile malite na `.md`

Ọ bụrụ na ịchọrọ ileghara ụfọdụ faịlụ anya ma ghara ịtụgharị ha (dị ka ihe ndị na-emechabeghị), ị nwere ike iji nhazi `ignore` .

Na `ignore` eji syntax yiri `.gitignore` [globset](https://docs.rs/globset/latest/globset/#syntax)

Dịka ọmụmaatụ, na faịlụ nhazi dị n'elu `_* ` na faịlụ ndị na-amalite na `_` agaghị atụgharị ya.

## Iwu Ntụgharị Asụsụ

### Ndị Ndezi Ntụgharị Asụsụ Ekwesịghị Ịgbakwunye Ma Ọ Bụ Hichapụ Ahịrị

Enwere ike idezi ntụgharị asụsụ ahụ. Gbanwee ederede izizi na igwe-sụgharịa ya ọzọ, a gaghị edegharị mgbanwe akwụkwọ ntuziaka na ntụgharị asụsụ (ọ bụrụ na agbanwebeghị paragraf a nke ederede izizi).

Mana biko mara na ahịrị ntụgharị asụsụ na ederede izizi ga-adarịrị otu na otu. Ya bụ, etinyela ma ọ bụ hichapụ ahịrị mgbe ị na-achịkọta ntụgharị asụsụ. Ma ọ bụghị ya, ọ ga-ebute ọgba aghara na cache ndezi ntụgharị asụsụ.

Ọ bụrụ na ihe adịghị mma, biko rụtụ aka na [FAQ maka azịza.](/i18/qa#H1)

### `Yaml`

Ngwá ọrụ ahịrị iwu ga-ahụ faịlụ niile na-ejedebe na faịlụ `.yml`

* Rịba ama na suffix aha faịlụ ga `.yaml` abụrịrị `.yml`

Ngwa a na-atụgharị naanị ụkpụrụ ọkọwa okwu `.yml` , ọ bụghị igodo ọkọwa okwu.

ọmụmaatụ `i18n/en/i18n.yml`

```
apiToken: API Token
defaultToken: Default Token
```

a ga-atụgharị ya ka `i18n/zh/i18n.yml`

```
apiToken: 接口令牌
defaultToken: 默认令牌
```

Enwere ike iji aka gbanwee ntụgharị asụsụ nke `YAML`

Dabere na ntụgharị `YAML` , ị nwere ike wulite ihe ngwọta mba ụwa maka asụsụ mmemme dị iche iche.

## Ojiji Dị Elu

### Ndekọ Ntụgharị Asụsụ

Ọ bụrụhaala na ị `.i18n/conf.yml` (ọ dịghị mkpa ịmalite site na ndebiri ngosi ngosi oge ọ bụla), `i18` ga-arụ ọrụ nke ọma.

Ngwá ọrụ ahịrị iwu ga-achọta nhazi `.i18n/conf.yml`

Ọrụ ndị na-eji [monorepo](//monorepo.tools) ụlọ nwere ike kewaa faịlụ asụsụ n'ime akwụkwọ ndekọ aha.

<img alt="" src="https://p.3ti.site/1719910016.avif">

### Ndekọ Nwụnye Omenala

A ga-etinye `/usr/local/bin` na ndabara.

Ọ bụrụ `/usr/local/bin` enweghị ikike ide, a ga-etinye ya na `~/.bin` .

Tọọ mgbanwe gburugburu ebe `TO` Ị nwere ike ịkọwa ndekọ nwụnye, dịka ọmụmaatụ :

```sh
TO=/bin sudo bash <(curl -sS https://i.i18n.site) i18
```
