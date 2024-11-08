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

Eia kekahi [,](/#price) pono ʻoe e hoʻopaʻa i kahi kāleka hōʻaiʻē uku i ka [i18n.site/payBill](//i18n.site/payBill)

## Hoʻohana

### Papahana Demo

E ʻoluʻolu e nānā i ka papahana demo [github.com/i18n-site/demo.i18](//github.com/i18n-site/demo.i18) aʻo i ka hoʻonohonoho ʻana o `i18` unuhi.

Hiki i nā mea hoʻohana ma Kina ke clone [atomgit.com/i18n/demo.i18](//atomgit.com/i18n/demo.i18)

Ma hope o ka cloning, e komo i ka papa kuhikuhi a holo i `i18` e hoʻopau i ka unuhi.

### Papa Kuhikuhi

ʻO ke ʻano o ka papa kuhikuhi hale waihona template penei

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

E komo i ka papa kuhikuhi a holo i ka `i18` e unuhi.

Ma waho aʻe o ka unuhi ʻana, e hoʻopuka pū ka papahana i ka waihona `.i18n/data` , e ʻoluʻolu e hoʻohui iā ia i ka waihona.

Ma hope o ka unuhi ʻana `git add . ` ka faila hou, e hana ʻia kahi faila ʻikepili hou ma kēia papa kuhikuhi.

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

Hiki iā ʻoe ke hoʻonohonoho i `fromTo` ʻokoʻa : nā waihona waihona like ʻole /

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

Ma kēia papa hoʻonohonoho, ʻo ka ʻōlelo kumu o ka unuhi `blog` he `zh` , a ʻo ka ʻōlelo kumu o ka unuhi ʻōlelo `blog/your_file_name.md` ʻo `ja` .

### Nā Kiʻi/Loulou ʻōlelo Lehulehu

Ke hoʻonohonoho ʻia nā URL ma nā kiʻi a me nā loulou ma `replace:` a me `MarkDown` (a me nā ʻano `src` a me `href` o `HTML` i hoʻopili ʻia) i `.i18n/conf.yml` me kēia prefix, e hoʻololi ʻia ke code ʻōlelo kumu ma ka URL e ke code ʻōlelo o ka unuhi ( [language papa helu helu](/i18/LANG_CODE) ).

No ka laʻana, penei kāu hoʻonohonoho:

```yml
i18n:
  fromTo:
    fr: ko de en zh zh-TW uk ru ja
  replace:
    https://fcdoc.github.io/img/ : ko de uk>ru zh-TW>zh >en
```

`replace: ` he puke wehewehe ʻōlelo, ʻo ke kī ka prefix URL e hoʻololi ʻia, a ʻo ka waiwai ka lula pani.

ʻO ke ʻano o ka hoʻololi ʻana i ka lula `ko de uk>ru zh-TW>zh >en` ma luna, ʻo ia ka hoʻohana ʻana `ko de` i ke kiʻi o kā lākou code ʻōlelo ponoʻī, hoʻohana ʻo `zh-TW` a me `zh` i ke kiʻi o `zh` , hoʻohana ʻo `uk` i ke kiʻi o `ru` , a hoʻohana nā ʻōlelo ʻē aʻe (e like me `ja` ) hoʻohana i ke kiʻi o `en` ma ka paʻamau.

No ka laʻana, ʻo ka faila kumu Farani ( `fr` ) o `MarkDown` penei :

```md
![xx](https://i18n-img.github.io/fr/1.avif)
<video src="https://i18n-img.github.io/fr/1.mp4"></video>
[xx](https://i18n-img.github.io/fr/README.md)
<a style="color:red" href="https://i18n-img.github.io/fr/i18n.site.gz">xx</a>
```

ʻO ka waihona i unuhi ʻia a hana ʻia ma ka ʻōlelo Pelekane ( `en` ) penei :

```md
![xx](https://i18n-img.github.io/en/1.avif)
<video src="https://i18n-img.github.io/en/1.mp4"></video>
[xx](https://i18n-img.github.io/en/README.md)
<a style="color:red" href="https://i18n-img.github.io/en/i18n.site.gz">xx</a>
```

Ma ʻaneʻi, hoʻololi ʻia `/en/` ma ke code ʻōlelo kumu me `/zh/` ma ka ʻōlelo i manaʻo ʻia.

E hoʻomaopopo : Pono e loaʻa ka `/` ma mua a ma hope o ke code ʻōlelo o ka kikokikona i pani ʻia ma ka URL.

> [!TIP]
> Inā hoʻonohonoho ʻia ʻo `- /` ma `url:` , ʻo nā ala pili wale nō e hoʻohālikelike ʻia, akā ʻaʻole e hoʻohālikelike ʻia nā URL e hoʻomaka ana me `//` .
>
> Inā makemake kekahi mau loulou o ka inoa kikowaena e pani ʻia a ʻaʻole makemake kekahi e pani ʻia, hiki iā ʻoe ke hoʻohana i nā prefix ʻokoʻa e like me `[x](//x.com/en/)` a me `[x](https://x.com/en/)` e hoʻokaʻawale iā lākou.

### Haʻalele I Ka Faila

Ma ka paʻamau, e unuhi ʻia nā faila a pau e hoʻomaka ana me `.md` a me `.yml` ma ka papa kuhikuhi ʻōlelo kumu.

Inā makemake ʻoe e haʻalele i kekahi mau faila a ʻaʻole e unuhi iā lākou (e like me nā kikoʻī i hoʻopau ʻole ʻia), hiki iā ʻoe ke hoʻonohonoho me ke kahua `ignore` .

Hoʻohana ʻo `ignore` i ka syntax [globset](https://docs.rs/globset/latest/globset/#syntax) me ka faila `.gitignore` .

No ka laʻana, ʻo `_* ` ma ka faila hoʻonohonoho i luna, ʻaʻole e unuhi ʻia nā faila e hoʻomaka ana me `_` .

## Nā Lula Unuhi

### ʻAʻole Pono Nā Mea Hoʻoponopono Unuhi E Hoʻohui a Holoi Paha I Nā Laina

Hiki ke hoʻoponopono ʻia ka unuhi. Hoʻololi i ka kikokikona kumu a me ka mīkini-unuhi hou ia, ʻaʻole e hoʻololi ʻia nā hoʻololi lima i ka unuhi (inā ʻaʻole i hoʻololi ʻia kēia paukū o ka kikokikona kumu).

> [!WARN]
> Pono e loaʻa kahi leka hoʻokahi a me kekahi ma waena o nā laina o ka unuhi a me ka kikokikona kumu. ʻO ia hoʻi, mai hoʻohui a holoi paha i nā laina i ka wā e hui pū ai i ka unuhi. A i ʻole, e huikau ia ma ka waihona hoʻoponopono unuhi.

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

I ka wā i hana ʻia ai `.i18n/conf.yml` (ʻaʻole pono e hoʻomaka mai ka template project demo i kēlā me kēia manawa), e hana maikaʻi ʻo `i18` .

E loaʻa i ka mea hana laina kauoha `.i18n/conf.yml` hoʻonohonoho i nā subdirectories āpau a unuhi iā lākou.

Hiki i nā papahana e ho'ohana ana i ka [monorepo](//monorepo.tools)

![](https://p.3ti.site/1719910016.avif)

### Papa Kuhikuhi Hoʻonohonoho Maʻamau

E hoʻokomo ʻia i ka `/usr/local/bin` ma ke ʻano paʻamau.

Inā ʻaʻohe ʻae kākau `/usr/local/bin` e hoʻokomo ʻia iā `~/.bin` .

ʻO ka hoʻonohonoho ʻana i ke kaiapuni `TO` hiki ke wehewehe i ka papa kuhikuhi hoʻonohonoho, no ka laʻana :

```sh
TO=/bin sudo bash <(curl -sS https://i.i18n.site) i18
```