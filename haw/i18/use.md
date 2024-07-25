# E Hoʻouka a Hoʻohana

## Hoʻokomo Mua ʻo windows I Ka git bash

windows [`git bash`](https://git-scm.com/download/win)

Holo i na hana ma hope ma `git bash`

## Hoʻokomo

```sh
bash <(curl -sS https://i.i18n.site) i18
```

### Hoʻonohonoho I Ka Hōʻailona Unuhi

E kipa i ka [i18n.site/token](//i18n.site/token)

<img src="https://p.3ti.site/1719911689.avif" style="max-width:400px">

E hana `~/.config/i18n.site.yml` e hoʻopili i ka maʻiʻo i kope ʻia i loko, penei ka ʻike:

```
token: YOUR_API_TOKEN
```

Eia hou, pono ʻoe [i18n.site/payBill](//i18n.site/payBill) hoʻopaʻa i kahi kāleka hōʻaiʻē no ka uku (ʻaʻole koi ʻia ka uku hou ʻana, e unuhi ʻokoʻa ka pūnaewele i nā uku e like me ka hoʻohana ʻana, [e ʻike i ka ʻaoʻao home no ke kumu kūʻai](/#price) ).

## Hoʻohana

### Papahana Demo

E ʻoluʻolu e nānā i ka papahana demo [github.com/i18n-site/demo.i18](//github.com/i18n-site/demo.i18) aʻo i ka hoʻonohonoho ʻana o ka unuhi `i18`

Hiki i nā mea hoʻohana ma Kina ke clone [atomgit.com/i18n/demo.i18](//atomgit.com/i18n/demo.i18)

Ma hope o ka hoʻopili ʻana, e hoʻokomo i ka papa kuhikuhi a holo i ka unuhi `i18`

### Papa Kuhikuhi

ʻO ke ʻano o ka papa kuhikuhi hale waihona hoʻohālike penei

```
┌── .i18n
│  └── conf.yml
└── en
   ├── _IgnoreDemoFile.md
   ├── i18n.yml
   └── README.md
```

Aia ma ka papa kuhikuhi `en`

### Holo I Ka Unuhi

E komo i ka papa kuhikuhi a holo i ka unuhi `i18`

### Hoʻohui I Nā Faila I Ka Waihona

Ma waho aʻe o ka unuhi ʻana, e hoʻopuka pū ka polokalamu i kēia mau faila, e ʻoluʻolu e hoʻohui iā lākou i ka waihona.

```
.i18n/hash
.i18n/cache/.gitignore
```

Mawaena o lakou, penei : `.i18n/cache/.gitignore`

```
**/*
!**/.gitignore
```

`.i18n/cache/.gitignore` O ia ho'i, e ha'alele i nā faila a pau ma ka papa kuhikuhi `.i18n/cache/`

Inā ʻaʻole kāu polokalamu hoʻokele mana `git` , e ʻoluʻolu e haʻalele iā ia e like me kēia hoʻonohonoho.

## Faila Hoʻonohonoho

`.i18n/conf.yml` `i18`

Penei ka maʻiʻo:

```
i18n:
  fromTo:
    en: zh ja ko de fr
    # en:

ignore:
  - _*
```

### ʻŌlelo Kumu &

Ma ka waihona hoʻonohonoho, nā mea i lalo o `fromTo`

`zh ja ko de fr` `en`

ʻIke ʻōlelo code [i18n.site/i18/LANG_CODE](https://i18n.site/i18/LANG_CODE)

No ka laʻana, inā makemake ʻoe e unuhi i ka Pākē i ka ʻōlelo Pelekania, e kākau hou i kēia laina `zh: en`

Inā makemake ʻoe e unuhi i nā ʻōlelo i kākoʻo ʻia, e ʻoluʻolu e waiho hakahaka ma hope o `:` ʻo kahi laʻana

```
i18n:
  fromTo:
    en:
```

### Haʻalele I Ka Faila

Ma ka paʻamau, e unuhi ʻia nā faila a pau me ka `.md` a me `.yml` ma ka papa kuhikuhi ʻōlelo kumu.

Inā makemake ʻoe e haʻalele i kekahi mau faila a ʻaʻole e unuhi iā lākou (e like me nā kikoʻī i hoʻopau ʻole ʻia), hiki iā ʻoe ke hoʻohana i ka `ignore`

`ignore` `.gitignore` [globset](https://docs.rs/globset/latest/globset/#syntax)

No ka laʻana, ma ka waihona hoʻonohonoho ma luna nei `_* ` ʻaʻole e unuhi ʻia nā faila e hoʻomaka ana me `_` .

## Nā Lula Unuhi

### ʻAʻole Pono Nā Mea Hoʻoponopono Unuhi E Hoʻohui a Holoi Paha I Nā Laina

Hiki ke hoʻoponopono ʻia ka unuhi. Hoʻololi i ka kikokikona kumu a me ka mīkini-unuhi hou, ʻaʻole e hoʻololi ʻia nā hoʻololi lima i ka unuhi (inā ʻaʻole i hoʻololi ʻia kēia paukū o ka kikokikona kumu).

Akā, e ʻoluʻolu e hoʻomaopopo pono nā laina o ka unuhi a me ka kikokikona kumu i hoʻokahi i hoʻokahi. ʻO ia hoʻi, mai hoʻohui a holoi paha i nā laina i ka wā e hui pū ai i ka unuhi. A i ʻole, e huikau ia ma ka waihona hoʻoponopono unuhi.

Inā hewa kekahi mea, e ʻoluʻolu e nānā i [ka FAQ no nā hoʻonā.](/i18/qa#H1)

### `YAML` Unuhi

E ʻike ka mea hana laina kauoha i nā faila a pau e pau ana me ka `.yml`

* E hoʻomanaʻo ʻo ka suffix o ka faila he `.yml` (ʻaʻole `.yaml` ).

Unuhi wale ka mea hana i nā waiwai puke wehewehe ʻōlelo ma `.yml`

ʻo kahi laʻana `i18n/en/i18n.yml`

```
apiToken: API Token
defaultToken: Default Token
```

e unuhiia e like me `i18n/zh/i18n.yml`

```
apiToken: 接口令牌
defaultToken: 默认令牌
```

Hiki ke hoʻololi ʻia ka unuhi ʻana o ka `YAML`

Ma muli o ka unuhi `YAML` , hiki iā ʻoe ke kūkulu maʻalahi i nā hoʻonā honua no nā ʻōlelo papahana like ʻole.

## Hoʻohana Kiʻekiʻe

### Papa Kuhikuhi Unuhi

I ka lōʻihi o kāu hana ʻana i ka `.i18n/conf.yml` (ʻaʻole pono e hoʻomaka mai ka papahana papahana demo i kēlā me kēia manawa), `i18` e hana maikaʻi.

E ʻike ka mea hana laina kauoha i ka `.i18n/conf.yml`

Hiki i nā papahana e ho'ohana ana i ka [monorepo](//monorepo.tools)

<img alt="" src="https://p.3ti.site/1719910016.avif">

### Papa Kuhikuhi Hoʻonohonoho Maʻamau

E hoʻokomo ʻia i ka `/usr/local/bin`

`/usr/local/bin` ʻaʻohe ʻae kākau e hoʻokomo ʻia i `~/.bin` .

E hoʻonohonoho : nā ʻano like ʻole `TO`

```sh
TO=/bin sudo bash <(curl -sS https://i.i18n.site) i18
```
