# Tāuta Me Te Whakamahi

## I Te Tuatahi Ka Whakauruhia E windows Te git bash

windows [`git bash`](https://git-scm.com/download/win)

Whakahaerehia nga mahi o muri mai i `git bash`

## Tāuta

```sh
bash <(curl -sS https://i.i18n.site) i18
```

### Whirihorahia Te Tohu Whakamaori

Tirohia [i18n.site/token](//i18n.site/token)

<img src="https://p.3ti.site/1719911689.avif" style="max-width:400px">

Waihanga `~/.config/i18n.site.yml` whakapirihia nga ihirangi kua kapehia ki roto, ko nga korero e whai ake nei:

```
token: YOUR_API_TOKEN
```

I tua atu, [i18n.site/payBill](//i18n.site/payBill) herea e koe he kaari nama mo te utu (kaore he utu e hiahiatia ana, ka tangohia aunoa e te paetukutuku nga utu i runga i te whakamahinga, [tirohia te whaarangi mo te utu](/#price) ).

## Whakamahi

### Kaupapa Demo

[github.com/i18n-site/demo.i18](//github.com/i18n-site/demo.i18) tirohia te kaupapa demo ki te ako i te whirihoranga o te whakamaoritanga `i18`

Ka taea e nga kaiwhakamahi i Haina te kii [atomgit.com/i18n/demo.i18](//atomgit.com/i18n/demo.i18)

Whai muri i te whakamaoritanga, uruhia te raarangi ka oma `i18`

### Hanganga Whaiaronga

Ko te hanganga whaiaronga whare putunga tauira e whai ake nei

```
┌── .i18n
│  └── conf.yml
└── en
   ├── _IgnoreDemoFile.md
   ├── i18n.yml
   └── README.md
```

Kei roto i te `en`

### Whakahaere Whakamaoritanga

Whakauruhia te whaiaronga ka rere `i18`

### Tāpirihia Nga Konae Ki Te Putunga

I tua atu i te whakamaoritanga, ka mahia ano e te papatono nga konae e whai ake nei, tena koa taapirihia ki te putunga.

```
.i18n/hash
.i18n/cache/.gitignore
```

I roto : ratou, ko nga korero o `.i18n/cache/.gitignore`

```
**/*
!**/.gitignore
```

Ko te tikanga `.i18n/cache/.gitignore` warewarehia nga konae katoa i te raarangi `.i18n/cache/`

Mena karekau to rorohiko whakahaere putanga `git` , kaua e warewarehia kia rite ki tenei whirihoranga.

## Kōnae Whirihoranga

`.i18n/conf.yml` Ko te konae whirihora o te taputapu whakamaori raina `i18`

Ko te ihirangi e whai ake nei:

```
i18n:
  fromTo:
    en: zh ja ko de fr
    # en:

ignore:
  - _*
```

### Te Reo Whakamaori &

I roto i te konae whirihoranga, ko nga tangata o raro o `fromTo`

`en` ko te reo taketake, ko `zh ja ko de fr` te reo e whai ana ki te whakamaori.

Tirohia te waehere reo [i18n.site/i18/LANG_CODE](https://i18n.site/i18/LANG_CODE)

Hei tauira, ki te hiahia koe ki te whakamaori i te Hainamana ki te reo Ingarihi, tuhia ano tenei rarangi `zh: en`

Mena kei te pirangi koe ki te whakamaori ki nga reo e tautokohia ana, waiho kia watea i muri `:` hei tauira

```
i18n:
  fromTo:
    en:
```

### Waihotia Te Kōnae

Ma te taunoa, ka whakamaoritia nga konae katoa `.yml` timata ana i te `.md`

Mena kei te pirangi koe ki te wareware i etahi konae me te kore e whakamaori (penei i nga tauira kaore ano kia oti), ka taea e koe te whakamahi i te whirihoranga mara `ignore` .

Ka whakamahi [globset](https://docs.rs/globset/latest/globset/#syntax) te wetereo rite ki `.gitignore` `ignore`

Hei tauira, i roto i te konae whirihoranga i runga ake nei `_* ` te tikanga ko nga konae ka timata i te `_` kaore e whakamaoritia.

## Nga Ture Whakamaori

### Ko Nga Kaiwhakatika Whakamaori Kaua E Taapiri, E Muku Ranei Nga Raina

Ko te whakamaoritanga ka taea te whakatika. Whakarerekehia te tuhinga taketake me te miihini-whakamaori ano, ko nga whakarereketanga a-ringa ki te whakamaoritanga e kore e tuhia (mehemea kaore i whakarereketia tenei waahanga o te tuhinga taketake).

Engari kia mahara ko nga rarangi o te whakamaoritanga me te tuhinga taketake me hono tetahi ki tetahi. Arā, kaua e tāpiri, e mukua rānei ngā rārangi i te wā e whakahiato ana i te whakamāoritanga. Ki te kore, ka raruraru i te keteroki whakatika whakamaori.

Ki te he tetahi, tirohia [te FAQ mo nga otinga.](/i18/qa#H1)

### `Yaml`

Ka kitea e te taputapu raina whakahau nga konae katoa ka mutu ki te `.yml`

* Kia mahara ko te pimuri ingoa kōnae `.yaml` `.yml`

Ko te taputapu anake e whakamaori ana i nga uara papakupu i roto `.yml`

hei tauira `i18n/en/i18n.yml`

```
apiToken: API Token
defaultToken: Default Token
```

ka whakamaoritia hei `i18n/zh/i18n.yml`

```
apiToken: 接口令牌
defaultToken: 默认令牌
```

Ko te whakamaoritanga o `YAML` ka taea hoki te whakarereke a-ringa (engari kaua e taapiri, e whakakore ranei i nga taviri me nga raina i roto i te whakamaoritanga).

I runga i `YAML` Whakamaoritanga, ka taea e koe te hanga otinga o te ao mo nga momo reo hotaka.

## Te Whakamahinga Matatau

### Whaiarongaroto Whakamaoritanga

I te mea ka hanga e koe `.i18n/conf.yml` (kaore e tika kia timata mai i te tauira kaupapa demo i nga wa katoa), `i18` ka pai te mahi.

Ka kitea e te taputapu raina te `.i18n/conf.yml`

Ka taea e nga kaupapa e whakamahi ana i te [monorepo](//monorepo.tools)

<img alt="" src="https://p.3ti.site/1719910016.avif">

### Whaiaronga Whakaurunga Ritenga

Ka whakauruhia ki te `/usr/local/bin`

`/usr/local/bin` karekau he whakaaetanga tuhi ka whakauruhia ki `~/.bin` .

Tautuhia nga taurangi taiao `TO` Ka taea e koe te tautuhi i te raarangi whakaurunga, hei tauira :

```sh
TO=/bin sudo bash <(curl -sS https://i.i18n.site) i18
```
