# .i18n/conf.yml

Ko te tohu mo `i18n.site` he `.i18n/conf.yml` .

Haunga nga tautuhinga o [`i18`](/i18) , `ignore:` me `i18n:` , ko te konae whirihora e whai ake nei:

```yaml
upload:
  ext:
    - md
nav:
  - i18n: home
    use: Toc
    url: /
  - i18n: doc
    menu: NB demo1,demo2
    use: Doc
  - i18n: blog
    use: Doc
addon:
  - i18n.addon/toc
```

I roto i a raatau, `upload` ki `ext:` te mea whirihoranga ko te tikanga ko `.md` anake ka tukuna ina whakaputa.

## Runga Whakatere nav

`nav:` nga whiringa whirihoranga, e rite ana ki te tahua whakatere kei te tihi o te wharangi kaainga.

<img src="//p.3ti.site/1721051426.avif" style="width:320px">

I roto ia ratou, `i18n: home` e rite ana ki `home: Home` i roto i `en/i18n.yml` .

`en/i18n.yml` ka whakamaoritia ki nga reo maha, penei i te `zh/i18n.yml` .

<img src="//p.3ti.site/1721051689.avif" style="width:320px">

I muri i te otinga o te whakamaoritanga, ka taea e koe te whakarereke i te uara o te whakamaoritanga `yml` , engari kaua e taapiri, e whakakore ranei i te ki o te whakamaoritanga `yml` .

### `use: Toc` , Tauira Kōnae Kotahi (Me Te Whakahuahua)

`nav` :

```
  - i18n: home
    use: Toc
    url: /
```

Ko te tikanga o `use: Toc` ko te whakaputa ma te whakamahi i te tauira `Toc` , e whakaatu ana i te tauira `Markdown` kotahi.

Ko `TOC` te whakapotonga o te `Table of Contents` Ina tukuna tenei tauira, ka whakaatuhia te whakahuahua o tenei konae `Markdown` ki te paetaha.

Ko `url:` e tohu ana i te ara konae o `Markdown` ( `/` e rite ana ki te whaiaronga pakiaka `/README.md` , ko tenei ingoa konae me whai tohu matua me tetahi pimuri iti).

### `use: Md` , Tauira Kōnae Kotahi (Kaore He Whakahuahua)

He rite te tauira `Md` me te tauira `Toc` ka whakamahia nga mea e rua hei whakaputa i te konae `Markdown` kotahi. Engari kaore te tauira `Md` e whakaatu i te whakahuahua i te paetaha.

Ka taea e koe te whakarereke i `use: Toc` i te whirihoranga i runga ake nei ki `use: Md` , ka whakahaere ano i `i18n.site` ki te raarangi `md` , ka toro atu ki te URL arokite whanaketanga ki te mataki i nga huringa i te whaarangi.

### Uta Taunoa Me Te Kore Ara Whirihoranga

Mena ka uru atu ki tetahi ara, karekau i whirihorahia tona mua ara ki te `nav:` , ko te konae `MarkDown` e rite ana ki te ara ka utaina ma te taunoa ka whakaputa ma te tauira `Md` .

Hei tauira, ki te uru atu ki `/test` , ka whirihorahia `nav:` me te kore tenei ara, a ko te reo o te wharangi he reo Ingarihi (waehere `en` ), ka utaina `/en/test.md` ma te taunoa ka whakaputa ma te tauira `Md` .

Ki `/en/test.md` karekau tenei konae, ka whakaatuhia te wharangi `404` taunoa.

<img src="https://p.3ti.site/1721184299.avif" style="width:360px">

### `use: Doc` , Tauira Maha-Kōnae

I roto i te kōnae whirihoranga:

```
  - i18n: blog
    use: Doc
```

Ka tohu te whakamahi i `Doc` mo te whakaputa tauira.

E tautoko ana te tauira tauira `Doc` ki te whakauru i te `MarkDown` maha ki te whakaputa whakahuahua tuhinga mo nga kaupapa kotahi, maha ranei.

#### Kaupapa Kotahi (He Maha Nga Konae)

`blog` i runga ake nei ko te aratau tuemi kotahi o `Doc` .

```
  - i18n: blog
    url: blog
    use: Doc
```

##### Ina He Putua Te Url, Ka Taunoa Ki Te Uara O i18n

Ki te kore e tuhia `url` , ka taka `url` ki te uara o `i18n` Ka whai mana ano tenei ture mo etahi atu tauira.

Ko te tikanga tuhi i runga ake nei he rite ki `url: blog` , a ko tana konae he `en/blog/TOC` .

#### Kaupapa Maha

Ko te whirihoranga o `i18n:doc` o te `.i18n/conf.yml` he aratau kaupapa-maha.

```
  - i18n: doc
    menu: NB demo1,demo2
    use: Doc
```

<img src="https://p.3ti.site/1721275191.avif" width="320px">

I konei, `menu: NB demo1,demo2` , ko te whakamahi i te tauira `NB` hei whakaatu i te tahua taka-iho.

`NB` , ko te whakapoto o `Name Breif` , ko te tikanga ka taea e te tahua taka-iho te whakaatu i te ingoa me te pepeha o te kaupapa.

Ko `NB` ka whai i te tawhā `demo1,demo2` ka tukuna ki a ia.
Kia : ** kia kaua he mokowā ** i mua me muri i te piko `,` i `demo1,demo2` .

Mo nga tawhā o runga ake nei, ko te konae taupū whaiaronga e tika ana ko:

* `en/demo1/TOC`
* `en/demo2/TOC`

#### TOC Ripanga Ihirangi Taupū

`i18n.site` ka mahia `js` mono-i `.i18n/hook/after.tran/TOC.js` i roto i te whare putunga demo ki te panui i te konae taurangi whaiaronga `doc` e rite ana ki te whirihoranga tauira `TOC` hei whakaputa i te raarangi whaiaronga `json` .

Mena ka whakamahi koe i te tauira `doc` , me whai koe i tenei mono-mai.

Mena ka arawhiti koe i te kaupapa `i18n.site` mai i te kōpaki putua, mahara ki te kape i te kaupapa demo `.i18n` ki to whaiaronga.

Ko te tauira `Doc` ka whakaatu i te raarangi ihirangi i runga i te `json` kua hangaia.

##### Te Whakamaarama I Nga Korero Taipitopito

`en/blog/TOC` nga korero e whai ake nei :

```
README.md

news/README.md
  news/begin.md
```

##### Whakamahia Te Nuku Hei Tohu Taumata

`README.md` kei te rarangi tuatahi o `en/blog/TOC` i runga ake nei e rite ana ki `i18n.site` i te pikitia i raro nei, ko te ingoa kaupapa tenei.

Ko nga rarangi e rua e whai ake nei e whakaatuhia ana i te Whakaahuamata i raro nei.

<img src="https://p.3ti.site/1721097381.avif" style="width:320px">

`news/README.md` he rite ki `News` ,
`news/begin.md` e rite ana ki `Our Product is Online !`

`TOC` kua nukuhia nga konae hei tohu i te hononga aroraatanga o te whakahuahua, hei tautoko i te nuku taumata-maha, me nga korero rarangi timata mai i te `#` .

##### Ko Te Taumata Matua Ka Tuhi I Te Taitara Anake, Kaua Ko Nga Korero.

Ina he maha nga taumata o te nuku, ko te taumata matua anake te tuhi i te taitara, kaua ko te ihirangi. Ki te kore, ka raru te tuhi tuhi.

##### Kaupapa README.md

Ka taea te tuhi i te ihirangi ki te nama `README.md` , penei i `en/demo2/README.md` .

Kia mahara ko nga ihirangi o tenei konae karekau e whakaatu ana i te raarangi korero, na reira ka tūtohu kia whakawhāitihia te roa me te tuhi kupu whakataki poto.

###### Te Pepeha Kaupapa

Ka kite koe kei a `Deme Two` tana tohu tohu kaupapa i raro `Your Project slogan` :

![](https://p.3ti.site/1721276842.avif)

He rite tenei ki te rarangi tuatahi `en/demo2/README.md` :

```
# Demo Two : Your Project slogan
```

Ko nga korero i muri i te kopirua tuatahi `:` o te taitara taumata tuatahi o te kaupapa `README.md` ka kiia ko te pepeha kaupapa.

Ko nga kaiwhakamahi mai i Haina, Hapani me Korea, kia mohio koe me whakamahi koe i te kopirua haurua-whanui `:` hei utu mo te kopirua whanui-katoa.

##### Me Pehea Te Neke I Te TOC I Te Nuinga?

`TOC` nga konae me tuu ki te raarangi o te reo puna.

Hei tauira, mena he Hainamana te reo taketake, ko `TOC` kei runga ake ko `zh/blog/TOC` .

Mena ka whakarereketia te reo puna, me whakanekehia nga konae `TOC` o tetahi reo i roto i te kaupapa ki tetahi atu reo.

Ka taea e koe te korero ki nga whakahau e whai ake nei:

```
rsync -av --remove-source-files --include='*/' \
--include='TOC' --exclude='*' en/ zh/
```

Whakakētia `en/` me `zh/` i roto i te whakahau i runga ake nei ki to waehere reo.