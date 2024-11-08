# .i18n/conf.yml

Ko te konae whirihoranga mo `i18n.site` he `.i18n/conf.yml` me nga mea e whai ake nei :

```yaml
i18n:
  fromTo:
    en:
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
    use: Blog
addon:
  - i18n.addon/toc
```

I roto i a raatau, `upload` ki `ext:` te mea whirihoranga ko te tikanga ko `.md` anake ka tukuna ina whakaputa.

## Runga Whakatere nav

`nav:` nga whiringa whirihoranga, e rite ana ki te tahua whakatere kei runga ake o te wharangi kaainga.

<img src="//p.3ti.site/1721051426.avif" style="width:320px">

I roto ia ratou, `i18n: home` e rite ana ki `home: Home` i roto i `en/i18n.yml` (kei te `en` te reo taketake o te whakamaoritanga kaupapa).

Ko te ihirangi `en/i18n.yml` te tuhinga e whakaatuhia ana i te tahua whakatere, ka whakamaoritia kia rite ki `fromTo` i roto i te whirihoranga, hei tauira, i whakamaoritia ki `zh/i18n.yml` .

<img src="//p.3ti.site/1721051689.avif" style="width:320px">

I muri i te otinga o te whakamaoritanga, ka taea e koe te whakarereke i te uara o te whakamaoritanga `yml` , engari kaua e taapiri, e whakakore ranei i te ki o te whakamaoritanga `yml` .

### `use: Toc` Tuhinga Kotahi Me Te Whakahuahua

`nav` :

```
  - i18n: home
    use: Toc
    url: /
```

Ko te tikanga o `use: Toc` ko te whakaputa ma te whakamahi i te tauira `Toc` , e whakaatu ana i te tauira `Markdown` kotahi.

Ko `TOC` te whakapotonga o te `Table of Contents` Ina tukuna tenei tauira, ka whakaatuhia te whakahuahua o tenei konae `Markdown` ki te paetaha.

Ko `url:` e tohu ana i te ara konae o `Markdown` ( `/` e rite ana ki te whaiaronga pakiaka `/README.md` , ko tenei ingoa konae me whai tohu matua me tetahi pimuri iti).

### `use: Md` Tuhinga Kotahi Kaore He Whakahuahua

He rite te tauira `Md` me te tauira `Toc` ka whakamahia nga mea e rua hei whakaputa i te konae `Markdown` kotahi. Engari kaore te tauira `Md` e whakaatu i te whakahuahua i te paetaha.

Ka taea e koe te whakarereke i `use: Toc` i te whirihoranga i runga ake nei ki `use: Md` , ka whakahaere ano i `i18n.site` ki te raarangi `md` , ka toro atu ki te URL arokite whanaketanga ki te mataki i nga huringa i te whaarangi.

### `use: Blog` Tauira Blog

Ka whakaatu te tauira rangitaki i te rarangi o nga tuhinga (taitara me nga waahanga) i runga i te raupapa o te waa whakaputa.

[→ Paatohia a konei ki te ako mo te whirihoranga motuhake](/i18n.site/conf/blog)

### `use: Doc` Tuhinga Tuhinga Maha

I roto i te kōnae whirihoranga:

```
  - i18n: doc
    menu: NB demo1,demo2
    use: Doc
```

Ka tohu te whakamahi i `Doc` mo te whakaputa tauira.

E tautoko ana te tauira tauira `Doc` ki te whakauru i `MarkDown` maha ki te whakaputa whakahuahua tuhinga mo nga kaupapa kotahi, maha ranei.

#### He Maha Nga Kaupapa Me Nga Konae Maha

Ko te whirihoranga o `.i18n/conf.yml` i roto i `i18n:doc` he aratau whakaputa maha-kaupapa maha.

I konei, `menu: NB demo1,demo2` , ko te whakamahi i te tauira `NB` hei whakaatu i te tahua taka-iho.

<img src="//p.3ti.site/1721275191.avif" width="320px">

`NB` , ko te whakapoto o `Name Breif` , ko te tikanga ka taea e te tahua taka-iho te whakaatu i te ingoa me te pepeha o te kaupapa.

Ko `NB` ka whai i te tawhā `demo1,demo2` ka tukuna ki a ia.

: ** mahara kia kaua he mokowā ** i mua me muri i te piko `,` i te `demo1,demo2` .

Ko te konae taurangi whaiaronga mo nga tawhā o runga ake ko:

* `en/demo1/TOC`
* `en/demo2/TOC`

#### Kaupapa Kotahi Te Maha O Nga Konae

Mena kotahi noa to kaupapa, ka taea e koe te whirihora penei.

```
  - i18n: doc
    url: flashduty
    use: Doc
```

> [!WARN]
> Ko te kaupapa kotahi me nga konae maha e kore e tautoko i te whirihora i `url` hei ara pakiaka `/`
> Mena __conf.yml → nav:__ Karekau he ara putake i whirihorahia, ka uru atu ki te wharangi kaainga o te paetukutuku, ka tuhia ano ki te URL tuatahi i raro i te whirihoranga `nav:` .
> Ko tenei hoahoa he pai ake te wehewehe i nga tuhinga kaupapa, blogs me etahi atu korero ma roto i nga raarangi.
> E taunaki ana kia whakamahia he konae kotahi me te wharangi kotahi hei wharangi kainga.

> [!TIP]
> Ki te kore e tuhia `url` , ka taka `url` ki te uara o `i18n` Ka whai mana ano tenei ture mo etahi atu tauira.

#### TOC Ripanga Ihirangi Taupū

Ki te whakahohea te tauira `use: Doc` i roto i te whirihoranga, whakahoahia te mono-i roto i `i18n.addon/toc` ki `.i18n/conf.yml` Ko te whirihoranga e whai ake nei :

```yml
addon:
  - i18n.addon/toc
```

`i18n.site` ka whakauru aunoa me te mahi i tenei mono-mai, panuihia `TOC` te konae taurangi whaiaronga, ka whakaputa `json` te whakahuahua whaiaronga.

Mena he kaupapa kotahi me te maha o nga konae, ko te raarangi pakiaka `TOC` te raarangi e pa ana ki `url:` i roto i te raarangi reo puna Hei tauira, mena he Hainamana te reo taketake: ko te konae e pa ana ki `url: flashduty` he `zh/flashduty/TOC` .

Mena he maha nga kaupapa me nga konae maha, kaore he take ki te whirihora i `url:` Ko te whaiaronga pakiaka o te `TOC` ko te whaiaronga e pa ana ki te uara o `i18n` .

##### Te Whakamaarama I Nga Korero Taipitopito

`en/blog/TOC` nga korero e whai ake nei :

```
README.md

news/README.md
  news/begin.md
```

##### Whakamahia Te Nuku Hei Tohu Taumata

`README.md` kei te rarangi tuatahi o te `en/blog/TOC` i runga ake nei e rite ana ki `i18n.site` i te pikitia i raro nei, ko te ingoa kaupapa tenei.

Ko nga rarangi e rua e whai ake nei e whakaatuhia ana i te Whakaahuamata i raro nei.

<img src="https://p.3ti.site/1721097381.avif" style="width:320px">

`news/README.md` he rite ki `News` ,
`news/begin.md` e rite ana ki `Our Product is Online !`

`TOC` kua nukuhia nga konae hei tohu i te hononga aroraatanga o te whakahuahua, hei tautoko i te nuku taumata-maha, me nga korero rarangi timata mai i te `# ` .

##### Ko Te Taumata Matua Ka Tuhi I Te Taitara Anake, Kaua Ko Nga Korero.

Ina he maha nga taumata o te nuku, ko te taumata matua anake te tuhi i te taitara, kaua ko te ihirangi. Ki te kore, ka raru te tuhi tuhi.

##### Kaupapa README.md

Ka taea te tuhi i te ihirangi ki te nama `README.md` , penei i te `en/demo2/README.md` .

Kia mahara ko nga ihirangi o tenei konae karekau e whakaatu ana i te raarangi korero, na reira ka tūtohu kia whakawhāitihia te roa me te tuhi kupu whakataki poto.

###### Peha Kaupapa

Ka kite koe kei a `Deme Two` tana tohu tohu `Your Project slogan` :

![](https://p.3ti.site/1721276842.avif)

He rite tenei ki te rarangi tuatahi o te `en/demo2/README.md` :

```
# Demo Two : Your Project slogan
```

Ko nga korero i muri i te kopirua tuatahi `:` o te taitara taumata tuatahi o te kaupapa `README.md` ka kiia ko te pepeha kaupapa.

Ko nga kaiwhakamahi mai i Haina, Hapani me Korea, kia mohio koe me whakamahi koe i te kopirua haurua-whanui `:` hei utu mo te kopirua whanui-katoa.

##### Me Pehea Te Neke I Te TOC I Te Nuinga?

`TOC` nga konae me tuu ki te raarangi o te reo puna.

Hei tauira, mena he Hainamana te reo taketake, ko te `TOC` kei runga ake ko `zh/blog/TOC` .

Mena ka whakarereketia te reo puna, me whakanekehia nga konae `TOC` o tetahi reo i roto i te kaupapa ki tetahi atu reo.

Ka taea e koe te korero ki nga whakahau e whai ake nei:

```
rsync -av --remove-source-files --include='*/' \
--include='TOC' --exclude='*' en/ zh/
```

Whakakētia `en/` me `zh/` i roto i te whakahau i runga ake nei ki to waehere reo.

### Uta Taunoa Me Te Kore Ara Whirihoranga

Mo tetahi ara e uru atu ana, ki te kore e whirihorahia te mua o te ara ki `nav:` , ko te konae `MarkDown` e rite ana ki te ara ka utaina ma te taunoa ka tukuna ma te tauira `Md` .

Hei tauira, ki te uru atu ki `/test` ka whirihorahia `nav:` me te kore o mua o tenei ara, a ko te reo tirotiro o naianei ko te reo Ingarihi (waehere `en` ), ka utaina `/en/test.md` ma te taunoa ka whakaputa ma te tauira `Md` .

Ki te `/en/test.md` karekau tenei konae, ka whakaatuhia te wharangi `404` taunoa.

<img src="//p.3ti.site/1721184299.avif" style="width:360px">