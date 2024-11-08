# Shyiramo Kandi Ukoreshe

## windows Banza Ushyire git bash

windows , nyamuneka [kanda hano kugirango ukuremo hanyuma ushyire `git bash` mbere](https://git-scm.com/download/win) .

Koresha ibikorwa byakurikiyeho muri `git bash` .

## Shyiramo

```sh
bash <(curl -sS https://i.i18n.site) i18
```

### Shiraho Ikimenyetso Cyo Guhindura

Sura Kanda kugirango wandukure ikimenyetso [i18n.site/token](//i18n.site/token)

<img src="https://p.3ti.site/1719911689.avif" style="width:400px">

Kora `~/.config/i18n.site.yml` , andika ibiri muri kopi, ibirimo nibi bikurikira:

```
token: YOUR_API_TOKEN
```

Byongeye kandi, ugomba guhambira ikarita yinguzanyo yo kwishyura muri [i18n.site/payBill](//i18n.site/payBill) Nta remarge isabwa, urubuga ruzahita rukuramo amafaranga ukurikije imikoreshereze, [reba urupapuro rwibanze kubiciro](/#price) ).

## Koresha

### Umushinga Wa Demo

Nyamuneka reba umushinga wa demo [github.com/i18n-site/demo.i18](//github.com/i18n-site/demo.i18) Wige iboneza rya `i18` !

Abakoresha mubushinwa barashobora gukoroniza [atomgit.com/i18n/demo.i18](//atomgit.com/i18n/demo.i18)

Nyuma yo gukoroniza, andika ububiko hanyuma ukore `i18` kugirango urangize ibisobanuro.

### Imiterere Yububiko

Inyandikorugero yububiko bwububiko nuburyo bukurikira

```
┌── .i18n
│  └── conf.yml
└── en
   ├── _IgnoreDemoFile.md
   ├── i18n.yml
   └── README.md
```

Amadosiye ya demo yahinduwe mububiko `en` ni urugero gusa kandi arashobora gusibwa.

### Koresha Ibisobanuro

Injira ububiko hanyuma ukore `i18` kugirango uhindure.

Usibye ubusobanuro, porogaramu izanatanga `.i18n/data` ububiko, nyamuneka iyongereze mububiko.

Nyuma yo guhindura dosiye nshya, dosiye nshya yamakuru izakorwa muriki gitabo. Wibuke kumugereka `git add . ` .

## Idosiye

`.i18n/conf.yml` ni iboneza rya dosiye ya `i18` command umurongo wigikoresho cyo guhindura

Ibirimo ni ibi bikurikira:

```
i18n:
  fromTo:
    en: zh ja ko de fr
    # en:

ignore:
  - _*
```

### Ururimi Inkomoko Y'ururimi &

Muri dosiye iboneza, abayoborwa na `fromTo` :

`en` nururimi rwinkomoko, `zh ja ko de fr` nururimi rugenewe ibisobanuro.

Kode y'ururimi reba [i18n.site/i18/LANG_CODE](https://i18n.site/i18/LANG_CODE)

Kurugero, niba ushaka guhindura Igishinwa mucyongereza, andika uyu murongo `zh: en` .

Niba ushaka guhindura indimi zose zishyigikiwe, nyamuneka usige ubusa nyuma ya `:` . urugero

```
i18n:
  fromTo:
    en:
```

Urashobora gushiraho `fromTo` zitandukanye : bitandukanye bya Fayili /

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

Muri iyi mbonerahamwe iboneza, ururimi rwinkomoko ya catalog `blog` ibisobanuro ni `zh` , naho ururimi rwinkomoko ya catalog `blog/your_file_name.md` ibisobanuro ni `ja` .

### Amashusho Menshi / Indimi

Iyo URL ziri mumashusho no guhuza muri `replace:` na `MarkDown` (hamwe na `src` na `href` biranga `HTML` ) byashyizwe muri `.i18n/conf.yml` hamwe niyi prefix, code yururimi rwinkomoko muri URL izasimburwa nururimi rwubuhinduzi ( [ururimi) urutonde rwa kode](/i18/LANG_CODE) ).

Kurugero, iboneza ni nkibi bikurikira:

```yml
i18n:
  fromTo:
    fr: ko de en zh zh-TW uk ru ja
  replace:
    https://fcdoc.github.io/img/ : ko de uk>ru zh-TW>zh >en
```

`replace: ` ni inkoranyamagambo, urufunguzo ni URL prefix igomba gusimburwa, kandi agaciro ni itegeko ryo gusimbuza.

Igisobanuro cyo gusimbuza amategeko `ko de uk>ru zh-TW>zh >en` hejuru nuko `ko de` ikoresha ishusho yururimi rwabo, `zh-TW` na `zh` ikoresha ishusho ya `zh` , `uk` ikoresha ishusho ya `ru` , nizindi ndimi (nka `ja` ) zikoresha ifoto ya `en` ku busanzwe.

Kurugero, dosiye yinkomoko yigifaransa ( `fr` ) ya `MarkDown` nuburyo bukurikira :

```md
![xx](https://i18n-img.github.io/fr/1.avif)
<video src="https://i18n-img.github.io/fr/1.mp4"></video>
[xx](https://i18n-img.github.io/fr/README.md)
<a style="color:red" href="https://i18n-img.github.io/fr/i18n.site.gz">xx</a>
```

Idosiye yahinduwe kandi yakozwe mucyongereza ( `en` ) niyi ikurikira :

```md
![xx](https://i18n-img.github.io/en/1.avif)
<video src="https://i18n-img.github.io/en/1.mp4"></video>
[xx](https://i18n-img.github.io/en/README.md)
<a style="color:red" href="https://i18n-img.github.io/en/i18n.site.gz">xx</a>
```

Hano, `/en/` muri code yururimi rwinkomoko isimburwa na `/zh/` mururimi rugenewe.

: Hagomba kubaho `/` mbere na nyuma yururimi rwimyandikire yasimbuwe muri URL.

> [!TIP]
> Niba `- /` igizwe muri `url:` , inzira zijyanye gusa nizo zizahuzwa, ariko URL zitangirana na `//` ntizahuza.
>
> Niba hari amahuza yizina rya domaine ashaka gusimburwa kandi bamwe ntibashaka gusimburwa, urashobora gukoresha prefixes zitandukanye nka `[x](//x.com/en/)` na `[x](https://x.com/en/)` kugirango ubatandukanye.

### Kwirengagiza Dosiye

Mburabuzi, dosiye zose zitangirana na `.md` na `.yml` mubisobanuro byururimi rwibanze bizahindurwa.

Niba ushaka kwirengagiza amadosiye amwe kandi ntuyahindure (nkimishinga itarangiye), urashobora kuyihuza numwanya `ignore` .

`ignore` ikoresha kimwe [globset](https://docs.rs/globset/latest/globset/#syntax) na dosiye `.gitignore` .

Kurugero, `_* ` muri dosiye iboneza hejuru bivuze ko dosiye zitangirana na `_` zitazahindurwa.

## Amategeko Yo Guhindura

### Abanditsi B'ubuhinduzi Ntibagomba Kongera Cyangwa Gusiba Imirongo

Ubusobanuro burahinduka. Hindura inyandiko yumwimerere hanyuma wongere uyihindure imashini, guhindura intoki kubisobanuro ntibishobora kwandikwa (niba iki gika cyumwandiko wambere kitarahinduwe).

> [!WARN]
> Hagomba kubaho inzandiko imwe-imwe hagati yumurongo wubuhinduzi ninyandiko yumwimerere. Nukuvuga, ntukongere cyangwa gusiba imirongo mugihe utegura ibisobanuro. Bitabaye ibyo, bizatera urujijo muri cache yo guhindura.

Niba hari ibitagenda neza, nyamuneka reba [ibisubizo kugirango ubone ibisubizo.](/i18/qa#H1)

### `YAML` Ibisobanuro

Igikoresho cyumurongo kizasanga dosiye zose zirangirana na `.yml` mububiko bwururimi rwamadosiye hanyuma uhindure.

* Menya ko inyito yizina igomba kuba `.yml` (ntabwo `.yaml` ).

Igikoresho gisobanura gusa inkoranyamagambo indangagaciro muri `.yml` , ntabwo urufunguzo rwamagambo.

Urugero `i18n/en/i18n.yml`

```
apiToken: API Token
defaultToken: Default Token
```

Bizahindurwa nka `i18n/zh/i18n.yml`

```
apiToken: 接口令牌
defaultToken: 默认令牌
```

Ubusobanuro bwa `YAML` burashobora kandi guhindurwa nintoki (ariko ntukongere cyangwa ngo usibe urufunguzo cyangwa imirongo mubisobanuro).

Ukurikije ibisobanuro `YAML` , urashobora kubaka byoroshye ibisubizo mpuzamahanga kururimi rutandukanye.

## Imikoreshereze Yambere

### Ubuhinduzi

Igihe cyose `.i18n/conf.yml` yaremye (nta mpamvu yo gutangirira kuri demo umushinga wicyitegererezo buri gihe), `i18` izakora neza.

Igikoresho cyumurongo uzasanga `.i18n/conf.yml` iboneza mubuyobozi bwose hanyuma ubihindure.

Imishinga ikoresha [monorepo](//monorepo.tools) irashobora kugabanya amadosiye yindimi mubuyobozi.

![](https://p.3ti.site/1719910016.avif)

### Ububiko Bwihariye

Bizashyirwa kuri `/usr/local/bin` kubisanzwe.

Niba `/usr/local/bin` idafite uruhushya rwo kwandika izashyirwa kuri `~/.bin` .

Gushiraho ibidukikije bihinduka `TO` birashobora gusobanura ububiko bwububiko, kurugero :

```sh
TO=/bin sudo bash <(curl -sS https://i.i18n.site) i18
```