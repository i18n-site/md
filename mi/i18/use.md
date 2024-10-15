# Tāuta Me Te Whakamahi

## Matapihi Tuatahi Te Whakauru I Te git bash

windows Pūnaha, [paatohia ki konei ki te tango me te whakauru i `git bash` tuatahi](https://git-scm.com/download/win) .

Whakahaerehia nga mahi o muri mai i `git bash` .

## Tāuta

```sh
bash <(curl -sS https://i.i18n.site) i18
```

### Whirihorahia Te Tohu Whakamaori

Tirohia [i18n.site/token](//i18n.site/token)

<img src="https://p.3ti.site/1719911689.avif" style="width:400px">

Waihangahia `~/.config/i18n.site.yml` , whakapiri i nga ihirangi kua kapehia ki roto, ko nga korero e whai ake nei:

```
token: YOUR_API_TOKEN
```

I [i18n.site/payBill](//i18n.site/payBill) , me herea e koe he kaari nama mo te utu (kaore he utu e hiahiatia ana, ka tangohia aunoa e te paetukutuku nga utu i runga i te whakamahinga, [tirohia te whaarangi mo te utu](/#price) ).

## Whakamahi

### Kaupapa Demo

[github.com/i18n-site/demo.i18](//github.com/i18n-site/demo.i18) tirohia te kaupapa demo hei ako i te whirihoranga o te whakamaoritanga `i18` .

Ka taea e nga kaiwhakamahi i Haina te kii [atomgit.com/i18n/demo.i18](//atomgit.com/i18n/demo.i18)

Whai muri i te whakamaoritanga, tomohia te whaiaronga ka oma `i18` hei whakaoti i te whakamaoritanga.

### Te Hanganga Whaiaronga

Ko te hanganga whaiaronga whare putunga tauira e whai ake nei

```
┌── .i18n
│  └── conf.yml
└── en
   ├── _IgnoreDemoFile.md
   ├── i18n.yml
   └── README.md
```

Ko nga konae demo kua whakamaoritia i te raarangi `en` he tauira noa ka taea te whakakore.

### Whakahaere Whakamaoritanga

Whakauruhia te whaiaronga ka rere `i18` ki te whakamaori.

I tua atu i te whakamaoritanga, ka whakaputahia e te papatono te kōpaki `.i18n/data` , tēnā tāpirihia ki te putunga.

I muri i te whakamaoritanga i te konae hou, ka puta he konae raraunga hou ki tenei raarangi mahara ki te taapiri `git add . ` .

## Kōnae Whirihoranga

Ko `.i18n/conf.yml` te konae whirihoranga o te taputapu whakamaori raina whakahau `i18`

Ko nga korero e whai ake nei:

```
i18n:
  fromTo:
    en: zh ja ko de fr
    # en:

ignore:
  - _*
```

### Te Reo Taketake &

I roto i te konae whirihoranga, ko te raro o te `fromTo` :

Ko `en` te reo taketake, ko `zh ja ko de fr` te reo matua o te whakamaoritanga.

Tirohia te waehere reo [i18n.site/i18/LANG_CODE](https://i18n.site/i18/LANG_CODE)

Hei tauira, ki te hiahia koe ki te whakamaori i te reo Hainamana ki te reo Ingarihi, tuhia ano tenei rarangi `zh: en` .

Mena kei te pirangi koe ki te whakamaori ki nga reo tautoko katoa, waiho koa kia watea i muri i `:` . hei tauira

```
i18n:
  fromTo:
    en:
```

Ka taea te whirihora `fromTo` : mo nga konae iti /

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

I tenei ripanga whirihoranga, ko te reo puna mo te whakamaoritanga whaiaronga `blog` he `zh` , ko te reo puna mo te whakamaoritanga whaiaronga `blog/your_file_name.md` he `ja` .

### Waihotia Te Kōnae

Ma te taunoa, ka whakamaoritia nga konae katoa e timata ana i te `.md` me `.yml` i te raarangi reo puna.

Mena kei te pirangi koe ki te wareware i etahi konae me te kore e whakamaori (penei i nga tauira kaore ano kia oti), ka taea e koe te whakamahi i te whirihoranga mara `ignore` .

`ignore` e whakamahi ana i te [globset](https://docs.rs/globset/latest/globset/#syntax) rite ki te konae `.gitignore` .

Hei tauira, `_* ` i roto i te konae whirihoranga i runga ake nei ko te tikanga ko nga konae timata mai i `_` kaore e whakamaoritia.

## Nga Ture Whakamaori

### Ko Nga Kaiwhakatika Whakamaori Kaua E Taapiri, E Muku Ranei Nga Raina

Ko te whakamaoritanga ka taea te whakatika. Whakarerekehia te tuhinga taketake me te miihini-whakamaori ano, ko nga whakarereketanga a-ringa ki te whakamaoritanga e kore e tuhia (mehemea kaore i whakarereketia tenei waahanga o te tuhinga taketake).

Engari kia mahara ko nga rarangi o te whakamaoritanga me te tuhinga taketake me hono tetahi ki tetahi. Arā, kaua e tāpiri, e mukua rānei ngā rārangi i te wā e whakahiato ana i te whakamāoritanga. Ki te kore, ka raruraru i te keteroki whakatika whakamaori.

Ki te he tetahi, tirohia [te FAQ mo nga otinga.](/i18/qa#H1)

### `YAML` Whakamaoritanga

Ka kitea e te taputapu raina whakahau nga konae katoa ka mutu ki te `.yml` i roto i te raarangi konae reo taketake ka whakamaoritia.

* Kia mahara me `.yml` te pimuri ingoa kōnae (kaua ko `.yaml` ).

Ko te taputapu anake ka whakamaori i nga uara papakupu i roto i `.yml` , kaua ko nga taviri papakupu.

Hei tauira `i18n/en/i18n.yml`

```
apiToken: API Token
defaultToken: Default Token
```

ka whakamaoritia hei `i18n/zh/i18n.yml`

```
apiToken: 接口令牌
defaultToken: 默认令牌
```

Ko te whakamaoritanga o te `YAML` ka taea te whakarereke a-ringa (engari kaua e taapiri, e muku ranei nga taviri me nga raina i roto i te whakamaoritanga).

I runga i te whakamaoritanga `YAML` , ka taea e koe te hanga otinga o te ao mo nga momo reo hootaka.

## Te Whakamahinga Matatau

### Whaiarongaroto Whakamaoritanga

I te mea ka hangaia `.i18n/conf.yml` (kaore e tika kia timata mai i te tauira kaupapa demo i ia wa), ka pai te mahi `i18` .

Ka kitea e te taputapu raina whakahau nga whirihoranga `.i18n/conf.yml` i roto i nga raarangiroto katoa ka whakamaoritia.

Ka taea e nga kaupapa e whakamahi ana i te hoahoanga [monorepo](//monorepo.tools)

![](https://p.3ti.site/1719910016.avif)

### Whaiaronga Whakaurunga Ritenga

Ka whakauruhia ki `/usr/local/bin` ma te taunoa.

Mena `/usr/local/bin` he whakaaetanga tuhi ka whakauruhia ki `~/.bin` .

Ko te taurangi taiao `TO` ka taea te tautuhi i te raarangi whakaurunga, hei tauira :

```sh
TO=/bin sudo bash <(curl -sS https://i.i18n.site) i18
```