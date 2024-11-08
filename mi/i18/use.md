# Tāuta Me Te Whakamahi

## I Te Tuatahi Ka Whakauruhia E windows Te git bash

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

Hei taapiri, me herea e koe he kaari nama utu i roto i [te](/#price) [i18n.site/payBill](//i18n.site/payBill)

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

Ko te ihirangi e whai ake nei:

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

Ka taea e koe te whirihora i `fromTo` rereke mo nga konae / ka tuhia he whakaaturanga e whai ake nei :

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

I roto i tenei ripanga whirihoranga, ko te reo puna o te whakamaoritanga `blog` he `zh` , ko te reo taketake o te whakamaoritanga `blog/your_file_name.md` he `ja` .

### He Whakaahua/Hononga Reo Maha

Ina whirihorahia nga URL i roto i nga pikitia me nga hononga i roto i `replace:` me `MarkDown` (me nga huanga `src` me `href` o `HTML` kua whakauruhia) ki te `.i18n/conf.yml` me tenei prefix, ka whakakapihia te waehere reo puna i roto i te URL e te waehere reo o te whakamaoritanga ( [reo rarangi waehere](/i18/LANG_CODE) ).

Hei tauira, ko to whirihoranga he penei:

```yml
i18n:
  fromTo:
    fr: ko de en zh zh-TW uk ru ja
  replace:
    https://fcdoc.github.io/img/ : ko de uk>ru zh-TW>zh >en
```

Ko `replace: ` he papakupu, ko te matua ko te URL prefix hei whakakapi, ko te uara ko te ture whakakapi.

Ko te tikanga o te whakakapi i te ture `ko de uk>ru zh-TW>zh >en` i runga ake nei ko te whakamahi `ko de` i te pikitia o tana ake waehere reo, ka whakamahia e `zh-TW` me `zh` te pikitia o `zh` , ka whakamahi `uk` i te pikitia o `ru` , me etahi atu reo (penei i te `ja` ) whakamahi i te pikitia o `en` ma te taunoa.

Hei tauira, ko te konae puna Wīwī ( `fr` ) o `MarkDown` e whai ake nei :

```md
![xx](https://i18n-img.github.io/fr/1.avif)
<video src="https://i18n-img.github.io/fr/1.mp4"></video>
[xx](https://i18n-img.github.io/fr/README.md)
<a style="color:red" href="https://i18n-img.github.io/fr/i18n.site.gz">xx</a>
```

Ko te konae kua whakamaoritia me te reo Ingarihi ( `en` ) e whai ake nei :

```md
![xx](https://i18n-img.github.io/en/1.avif)
<video src="https://i18n-img.github.io/en/1.mp4"></video>
[xx](https://i18n-img.github.io/en/README.md)
<a style="color:red" href="https://i18n-img.github.io/en/i18n.site.gz">xx</a>
```

I konei, ka whakakapihia `/en/` o te waehere reo puna ki te `/zh/` i roto i te reo whaainga.

Kia mahara : Me whai `/` i mua me muri i te waehere reo o te kuputuhi kua whakakapia i te URL.

> [!TIP]
> Mena ka whirihorahia `- /` ki `url:` , ko nga ara whanaunga anake ka rite, engari ko nga URL e timata ana i `//` ka kore e rite.
>
> Mena kei te pirangi etahi hononga o te ingoa rohe ki te whakakapi me etahi karekau e hiahia ki te whakakapi, ka taea e koe te whakamahi i nga tohu tuatahi penei i te `[x](//x.com/en/)` me te `[x](https://x.com/en/)` hei wehewehe i a raatau.

### Waihotia Te Kōnae

Ma te taunoa, ka whakamaoritia nga konae katoa e timata ana i te `.md` me `.yml` i te raarangi reo puna.

Mena kei te pirangi koe ki te wareware i etahi konae me te kore e whakamaori (penei i nga tauira kaore ano kia oti), ka taea e koe te whirihora ki te mara `ignore` .

`ignore` e whakamahi ana i te [globset](https://docs.rs/globset/latest/globset/#syntax) rite ki te konae `.gitignore` .

Hei tauira, `_* ` i roto i te konae whirihoranga i runga ake nei ko te tikanga ko nga konae timata mai i `_` kare e whakamaoritia.

## Nga Ture Whakamaori

### Kaua Nga Kaiwhakatikatika Whakamaori E Taapiri, E Whakakore Ranei I Nga Raina

Ko te whakamaoritanga ka taea te whakatika. Whakarerekehia te tuhinga taketake me te miihini-whakamaori ano, ko nga whakarereketanga a-ringa ki te whakamaoritanga ka kore e tuhirua (mehemea kaore i whakarereketia tenei waahanga o te tuhinga taketake).

> [!WARN]
> Me noho he reta kotahi-ki-tetahi i waenga i nga rarangi o te whakamaoritanga me te tuhinga taketake. Arā, kaua e tāpiri, e mukua rānei ngā rārangi i te wā e whakahiato ana i te whakamāoritanga. Ki te kore, ka raruraru i te keteroki whakatika whakamaori.

Ki te he tetahi, tirohia [te FAQ mo nga otinga.](/i18/qa#H1)

### `YAML` Whakamaoritanga

Ka kitea e te taputapu raina whakahau nga konae katoa ka mutu ki te `.yml` i roto i te raarangi konae reo taketake ka whakamaoritia.

* Kia mahara ko te pimuri ingoa kōnae me `.yml` (kaua ko `.yaml` ).

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

Ko te whakamaoritanga o te `YAML` ka taea hoki te whakarereke-a-ringa (engari kaua e taapiri, e whakakore ranei i nga taviri, raina ranei i roto i te whakamaoritanga).

I runga i te whakamaoritanga `YAML` , ka taea e koe te hanga otinga o te ao mo nga momo reo hotaka.

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