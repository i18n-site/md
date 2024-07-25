# Shyiramo Kandi Ukoreshe

## windows Banza Ushyire git bash

windows , nyamuneka [kanda hano kugirango ukuremo kandi ushyireho `git bash`](https://git-scm.com/download/win)

Koresha ibikorwa byakurikiyeho muri `git bash`

## Shyiramo

```sh
bash <(curl -sS https://i.i18n.site) i18
```

### Shiraho Ikimenyetso Cyo Guhindura

Sura Kanda kugirango wandukure ikimenyetso [i18n.site/token](//i18n.site/token)

<img src="https://p.3ti.site/1719911689.avif" style="max-width:400px">

Kurema `~/.config/i18n.site.yml` Shyiramo ibyimuwe muri byo, ibirimo nibi bikurikira:

```
token: YOUR_API_TOKEN
```

Byongeye kandi, ugomba [i18n.site/payBill](//i18n.site/payBill) ikarita yinguzanyo kugirango wishyure (nta remarge isabwa, urubuga ruzahita rukuramo amafaranga ukurikije imikoreshereze, [reba urupapuro rwibiciro](/#price) ).

## Koresha

### Umushinga Wa Demo

`i18` ohereza umushinga wa demo [github.com/i18n-site/demo.i18](//github.com/i18n-site/demo.i18)

Abakoresha mubushinwa barashobora gukoroniza [atomgit.com/i18n/demo.i18](//atomgit.com/i18n/demo.i18)

Nyuma yo gukoroniza, andika ububiko hanyuma ukore kugirango urangize ibisobanuro `i18`

### Imiterere y'Ubuyobozi

Inyandikorugero yububiko bwububiko nuburyo bukurikira

```
┌── .i18n
│  └── conf.yml
└── en
   ├── _IgnoreDemoFile.md
   ├── i18n.yml
   └── README.md
```

`en` burimo dosiye ya demo yahinduwe, ni urugero gusa kandi irashobora gusibwa.

### Koresha Ibisobanuro

Injira ububiko hanyuma ukore `i18`

### Ongeraho Dosiye Mububiko

Usibye guhindurwa, porogaramu izanatanga amadosiye akurikira, nyamuneka uyongereze mububiko.

```
.i18n/hash
.i18n/cache/.gitignore
```

Muri : , ibikubiye muri `.i18n/cache/.gitignore`

```
**/*
!**/.gitignore
```

Ibi bivuze kwirengagiza dosiye zose mububiko (usibye `.i18n/cache/.gitignore` ) `.i18n/cache/`

Niba verisiyo yo kugenzura verisiyo itariyo `git` nyamuneka wirengagize ukurikije iyi miterere!

## Idosiye

Ni dosiye iboneza ya `i18` umurongo wigikoresho cyo guhindura `.i18n/conf.yml`

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

Muri dosiye iboneza, abayoborwa na `fromTo`

ni ururimi rwinkomoko `en` `zh ja ko de fr` ni ururimi rugenewe ubusemuzi!

Kode y'ururimi reba [i18n.site/i18/LANG_CODE](https://i18n.site/i18/LANG_CODE)

Kurugero, niba ushaka guhindura Igishinwa mucyongereza, andika uyu murongo `zh: en`

Niba ushaka guhindura indimi zose zishyigikiwe, nyamuneka usige ubusa `:` urugero

```
i18n:
  fromTo:
    en:
```

### Kwirengagiza Dosiye

Mburabuzi, dosiye zose zitangirira hamwe `.yml` `.md` byururimi rwibanze bizahindurwa!

Niba ushaka kwirengagiza amadosiye amwe kandi ntuyahindure (nkibishushanyo bitarangiye), urashobora gukoresha ibibanza byumurima `ignore`

Koresha Koresha syntax isa [globset](https://docs.rs/globset/latest/globset/#syntax) `.gitignore` `ignore`

Kurugero, muri dosiye iboneza yavuzwe haruguru bivuze ko dosiye zitangirana na `_` zitazahindurwa `_* `

## Amategeko Yo Guhindura

### Abanditsi B'ubuhinduzi Ntibagomba Kongera Cyangwa Gusiba Imirongo

Ubusobanuro burashobora guhinduka. Hindura umwandiko wumwimerere hanyuma wongere uhindure imashini, guhindura intoki kubisobanuro ntibishobora kwandikwa (niba iki gika cyumwandiko wumwimerere kitarahinduwe).

Ariko nyamuneka menya ko imirongo yubusobanuro hamwe ninyandiko yumwimerere igomba guhuza imwe kumurongo. Nukuvuga, ntukongere cyangwa gusiba imirongo mugihe utegura ibisobanuro. Bitabaye ibyo, bizatera urujijo muri cache yo guhindura.

Niba hari ibitagenda neza, nyamuneka reba [ibisubizo kugirango ubone ibisubizo.](/i18/qa#H1)

### Guhindura `YAML`

Igikoresho cyumurongo uzasanga dosiye zose zirangirana nububiko bwururimi rwamadosiye kandi uhindure `.yml`

* Menya ko izina rya dosiye rigomba kuba (ntabwo `.yaml` ) `.yml`

Igikoresho gisobanura gusa inkoranyamagambo indangagaciro muri `.yml` ntabwo ari urufunguzo rwamagambo.

urugero `i18n/en/i18n.yml`

```
apiToken: API Token
defaultToken: Default Token
```

Byahinduwe nka `i18n/zh/i18n.yml`

```
apiToken: 接口令牌
defaultToken: 默认令牌
```

Ubusobanuro bwa `YAML` Bushobora kandi guhindurwa intoki (ariko ntukongere cyangwa gusiba urufunguzo cyangwa imirongo mubisobanuro).

Ukurikije `YAML` , urashobora kubaka byoroshye ibisubizo mpuzamahanga byindimi zitandukanye.

## Imikoreshereze Yambere

### Ubuhinduzi

Igihe cyose `.i18n/conf.yml` (nta mpamvu yo guhera kuri demo umushinga wigihe cyose), `i18` izakora neza.

Igikoresho cyumurongo uzabona iboneza mubisobanuro byose hanyuma ubisobanure `.i18n/conf.yml`

Imishinga ikoresha [monorepo](//monorepo.tools) irashobora kugabanya amadosiye yindimi mubuyobozi.

<img alt="" src="https://p.3ti.site/1719910016.avif">

### Ububiko Bwihariye

Bizashyirwaho kuri byanze bikunze `/usr/local/bin`

Niba `/usr/local/bin` Idafite uburenganzira bwo kwandika bizashyirwa kuri `~/.bin` .

Shiraho ibidukikije `TO` Urashobora gusobanura ububiko bwubushakashatsi, kurugero :

```sh
TO=/bin sudo bash <(curl -sS https://i.i18n.site) i18
```
