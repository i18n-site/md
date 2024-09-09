# E Hoʻouka a Hoʻohana

## Hoʻokomo Mua ʻo windows I Ka git bash

windows [`git bash`](https://git-scm.com/download/win)

E holo i nā hana ma hope ma `git bash` .

## Hoʻokomo

```sh
bash <(curl -sS https://i.i18n.site) i18
```

### Hoʻonohonoho I Ka Hōʻailona Unuhi

E kipa i ka [i18n.site/token](//i18n.site/token)

<img src="https://p.3ti.site/1719911689.avif" style="width:400px">

E hana i `~/.config/i18n.site.yml` , e hoʻopili i ka maʻiʻo i kope ʻia i loko, penei ka ʻike:

```
token: YOUR_API_TOKEN
```

Eia hou, pono ʻoe [i18n.site/payBill](//i18n.site/payBill) hoʻopaʻa i kahi kāleka hōʻaiʻē no ka uku (ʻaʻole koi ʻia ka uku hou ʻana, e unuhi ʻokoʻa ka pūnaewele i nā uku e like me ka hoʻohana ʻana, [e ʻike i ka ʻaoʻao home no ke kumu kūʻai](/#price) ).

## Hoʻohana

### Papahana Demo

E ʻoluʻolu e nānā i ka papahana demo [github.com/i18n-site/demo.i18](//github.com/i18n-site/demo.i18) aʻo i ka hoʻonohonoho ʻana o `i18` unuhi.

Hiki i nā mea hoʻohana ma Kina ke clone [atomgit.com/i18n/demo.i18](//atomgit.com/i18n/demo.i18)

Ma hope o ka cloning, e komo i ka papa kuhikuhi a holo i `i18` e hoʻopau i ka unuhi.

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

He laʻana wale nō nā faila demo i unuhi ʻia ma ka papa kuhikuhi `en` a hiki ke holoi ʻia.

### Holo I Ka Unuhi

E komo i ka papa kuhikuhi a holo i `i18` e unuhi.

Ma waho aʻe o ka unuhi ʻana, e hoʻopuka pū ka papahana i ka waihona `.i18n/data` , e ʻoluʻolu e hoʻohui iā ia i ka waihona.

Ma hope o ka unuhi ʻana `git add .` ka faila hou, e hana ʻia kahi faila ʻikepili hou ma kēia papa kuhikuhi.

## Faila Hoʻonohonoho

`.i18n/conf.yml` ka waihona hoʻonohonoho o ka mea paahana unuhi laina kauoha `i18`

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

I ka faila hoʻonohonoho, ʻo ka subordinate o `fromTo` :

ʻO `en` ka ʻōlelo kumu, ʻo `zh ja ko de fr` ka ʻōlelo kuhi o ka unuhi.

ʻIke ʻōlelo code [i18n.site/i18/LANG_CODE](https://i18n.site/i18/LANG_CODE)

No ka laʻana, inā makemake ʻoe e unuhi i ka Pākē i ka ʻōlelo Pelekania, e kākau hou i kēia laina `zh: en` .

Inā makemake ʻoe e unuhi i nā ʻōlelo āpau i kākoʻo ʻia, e ʻoluʻolu e waiho hakahaka ma hope o `:` . ʻo kahi laʻana

```
i18n:
  fromTo:
    en:
```

Hiki iā ʻoe ke hoʻonohonoho : `fromTo` ʻokoʻa no nā waihona waihona like ʻole /

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

Ma kēia papa hoʻonohonoho, ʻo ka ʻōlelo kumu o ka unuhi `blog` he `zh` , a ʻo ka ʻōlelo kumu o `blog/your_file_name.md` ʻo `ja` .

### Haʻalele I Ka Faila

Ma ka paʻamau, e unuhi ʻia nā faila a pau e hoʻomaka ana me `.md` a me `.yml` ma ka papa kuhikuhi ʻōlelo kumu.

Inā makemake ʻoe e haʻalele i kekahi mau faila a ʻaʻole e unuhi iā lākou (e like me nā kikoʻī i hoʻopau ʻole ʻia), hiki iā ʻoe ke hoʻonohonoho me ke kahua `ignore` .

Hoʻohana ʻo `ignore` i ka syntax [globset](https://docs.rs/globset/latest/globset/#syntax) me ka faila `.gitignore` .

No ka laʻana, `_* ` ma ka faila hoʻonohonoho i luna, ʻaʻole e unuhi ʻia nā faila e hoʻomaka ana me `_` .

## Nā Lula Unuhi

### ʻAʻole Pono Nā Mea Hoʻoponopono Unuhi E Hoʻohui a Holoi Paha I Nā Laina

Hiki ke hoʻoponopono ʻia ka unuhi. Hoʻololi i ka kikokikona kumu a me ka mīkini-unuhi hou, ʻaʻole e hoʻololi ʻia nā hoʻololi lima i ka unuhi (inā ʻaʻole i hoʻololi ʻia kēia paukū o ka kikokikona kumu).

Akā, e ʻoluʻolu e hoʻomaopopo pono nā laina o ka unuhi a me ka kikokikona kumu i hoʻokahi i hoʻokahi. ʻO ia hoʻi, mai hoʻohui a holoi paha i nā laina i ka wā e hui pū ai i ka unuhi. A i ʻole, e huikau ia ma ka waihona hoʻoponopono unuhi.

Inā hewa kekahi mea, e ʻoluʻolu e nānā i [ka FAQ no nā hoʻonā.](/i18/qa#H1)

### `YAML` Unuhi

E ʻike ka mea hana laina kauoha i nā faila a pau e pau ana me `.yml` ma ka papa kuhikuhi waihona ʻōlelo kumu a unuhi iā lākou.

* E hoʻomaopopo he `.yml` ka suffix inoa file (ʻaʻole `.yaml` ).

Unuhi wale ka mea hana i nā waiwai puke wehewehe ʻōlelo ma `.yml` , ʻaʻole nā kī puke wehewehe.

No ka laʻana `i18n/en/i18n.yml`

```
apiToken: API Token
defaultToken: Default Token
```

e unuhi ʻia ʻo `i18n/zh/i18n.yml`

```
apiToken: 接口令牌
defaultToken: 默认令牌
```

Hiki ke hoʻololi lima ʻia ka unuhi ʻana o `YAML` (akā, mai hoʻohui a holoi paha i nā kī a i ʻole nā laina i ka unuhi).

Ma muli o ka unuhi `YAML` , hiki iā ʻoe ke kūkulu maʻalahi i nā hoʻonā honua no nā ʻōlelo papahana like ʻole.

## Hoʻohana Kiʻekiʻe

### Papa Kuhikuhi Unuhi

I ka wā i hana ʻia ai `.i18n/conf.yml` (ʻaʻole pono e hoʻomaka mai ka template project demo i kēlā me kēia manawa), e hana maikaʻi `i18` .

E loaʻa i ka mea hana laina kauoha `.i18n/conf.yml` hoʻonohonoho i nā subdirectories āpau a unuhi iā lākou.

Hiki i nā papahana e ho'ohana ana i ka [monorepo](//monorepo.tools)

![](https://p.3ti.site/1719910016.avif)

### Papa Kuhikuhi Hoʻonohonoho Maʻamau

E hoʻokomo ʻia i `/usr/local/bin` ma ka paʻamau.

Inā ʻaʻohe ʻae kākau ʻo `/usr/local/bin` e hoʻokomo ʻia iā `~/.bin` .

Hiki i ka hoʻonohonoho ʻana i ka ʻano hoʻololi kaiapuni `TO` ke wehewehe i ka papa kuhikuhi hoʻonohonoho, no ka laʻana :

```sh
TO=/bin sudo bash <(curl -sS https://i.i18n.site) i18
```