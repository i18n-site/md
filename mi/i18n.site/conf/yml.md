# .i18n/conf.yml

Ko te kōnae whirihoranga he `.i18n/conf.yml` `i18n.site`

Hāunga ngā tautuhinga `ignore:` `i18n:` o [`i18`](/i18)

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
```

I roto i era, `.md` te mea `ext:` whirihoranga o `upload`

## Runga Whakatere nav

`nav:` nga whiringa whirihoranga, e rite ana ki te tahua whakatere kei runga o te wharangi kaainga.

<img src="//p.3ti.site/1721051426.avif" style="width:320px">

I roto i a raatau `i18n: home` he rite ki `en/i18n.yml`中`home: Home` .

`en/i18n.yml` ka whakamaoritia ki nga reo maha, penei i te `zh/i18n.yml` .

<img src="//p.3ti.site/1721051689.avif" style="width:320px">

Ka oti te whakamaoritanga, ka taea e koe te whakarereke i te uara o `yml` `yml`

### `use: Toc` , Tauira Kōnae Kotahi (Me Te Whakahuahua)

: `nav`

```
  - i18n: home
    use: Toc
    url: /
```

`use: Toc` te tikanga ko te whakamahi i `Toc` rendering, e whakaatu ana i te tauira `Markdown` kotahi.

`TOC` Ko te whakapototanga o `Table of Contents` `Markdown`

`url:` e tohu ana i te ara kōnae o `Markdown` ( `/` e rite ana ki te whaiaronga pakiaka `/README.md` , me whai tohu tuatahi me te pumuri iti o tenei ingoa kōnae).

### `use: Md` , Tauira Kōnae Kotahi (Kaore He Whakahuahua)

He rite `Md` te tauira ki `Toc` , ka whakamahia nga mea e rua ki te whakaputa i te konae `Markdown` kotahi. Heoi `Md` karekau te tauira e whakaatu i te whakahuahua i te paetaha.

Ka taea e koe te `use: Toc` i te whirihoranga i runga ake nei ki te `use: Md` , rere `i18n.site` i roto i te whaiaronga `md` , ka toro atu ki te URL arokite whanaketanga ki te mataki i nga huringa i te whaarangi.

### Uta Taunoa Me Te Kore Ara Whirihoranga

Mena karekau i whirihorahia te tohumua ara o tetahi ara e uru atu ana ki te `nav:` ka utaina te kōnae `MarkDown` e rite ana ki te ara ma te taunoa ka whakaputa ma te tauira `Md` .

Hei tauira, ki te toro koe ki `/test` , ka whirihorahia `nav:` me te kore tenei ara, a ko te reo o te wharangi he reo Ingarihi (waehere `en` ), ka utaina te tauira `/en/test.md` ka tukuna ma te whakamahi `Md` ma te taunoa.

`/en/test.md` karekau tenei konae, ka whakaatuhia te `404` taunoa.

<img src="https://p.3ti.site/1721184299.avif" style="width:360px">

### `use: Doc` , Tauira Maha-Kōnae

I roto i te kōnae whirihoranga:

```
  - i18n: blog
    use: Doc
```

E tohu ana i te whakamahi `Doc`

`Doc` E tautoko ana te tauira i te whakauru i `MarkDown` maha ki te whakaputa whakahuahua tuhinga mo nga kaupapa kotahi, maha ranei.

#### Kaupapa Kotahi (He Maha Nga Konae)

`blog` kei runga ake nei ko te aratau kaupapa kotahi o `Doc` .

```
  - i18n: blog
    url: blog
    use: Doc
```

##### Ina He Putua Te Url, Ka Taunoa Ki Te Uara O i18n

Ki te kore koe e tuhi `url` , `url` ki te uara o `i18n` .

Ko te tikanga tuhi i runga ake nei he rite ki te whai `url: blog` a ko tana konae he `en/blog/TOC` .

#### Kaupapa Maha

`.i18n/conf.yml` Ko te whirihoranga i `i18n:doc` he aratau kaupapa-maha.

```
  - i18n: doc
    menu: NB demo1,demo2
    use: Doc
```

<img src="https://p.3ti.site/1721275191.avif" width="320px">

Anei, `menu: NB demo1,demo2` te tikanga ko te whakamahi i `NB` hei whakaputa i te tahua taka-iho.

`NB` , ko te whakapototanga o `Name Breif` , e tohu ana ka taea e te tahua taka-iho te whakaatu i te ingoa me te pepeha o te kaupapa.

ka whai i te tawhā `demo1,demo2` kua tukuna ki a `NB` .
Kia mahara kia kaua `demo1,demo2` mokowā ** i mua me muri i te piko `,` i roto : **

Mo nga tawhā o runga ake nei, ko te konae taupū whaiaronga e tika ana ko:

* `en/demo1/TOC`
* `en/demo2/TOC`

#### TOC Ripanga Ihirangi Taupū

`i18n.site` Ka mahia te `js` mono `.i18n/hook/after.tran/TOC.js` i roto i te whare putunga whakaatu hei panui i te konae taurangi whaiaronga `doc` e rite ana ki te whirihoranga tauira `TOC` hei whakaputa `json` o te raarangi whaiaronga.

Mena ka whakamahi koe i te tauira `doc` , me whai koe i tenei mono-mai.

Mena ka arawhiti koe i te kaupapa `i18n.site` mai i te kōpaki putua, mahara ki te kape `.i18n` i roto i te kaupapa demo ki to whaiaronga.

`Doc` te tauira e whakaatu te raarangi ihirangi i runga i te `json` i hangaia.

##### Te Whakamaarama I Nga Korero Taipitopito

Ko nga korero e whai ake : `en/blog/TOC`

```
README.md

news/README.md
  news/begin.md
```

##### Whakamahia Te Nuku Hei Tohu Taumata

Kei runga `en/blog/TOC` `README.md` kei te rarangi tuatahi e rite ana ki `i18n.site` i te pikitia i raro nei, ko te ingoa kaupapa.

Ko nga rarangi e rua e whai ake nei e whakaatuhia ana i te Whakaahuamata i raro nei.

<img src="https://p.3ti.site/1721097381.avif" style="width:320px">

e rite ana ki `News` `news/README.md`
`news/begin.md` rite ana ki `Our Product is Online !`

`TOC` Kua nukuhia te konae hei tohu i te hononga aroraa o te whakahuahua me te tautoko i te nuku taumata-maha.

##### Ko Te Taumata Matua Ka Tuhi I Te Taitara Anake, Kaua Ko Nga Korero.

Ina he maha nga taumata o te nuku, ko te taumata matua anake te tuhi i te taitara, kaua ko te ihirangi. Ki te kore, ka raru te tuhi tuhi.

##### Kaupapa README.md 

`README.md` o te kaupapa, hei tauira, ka taea e koe te tuhi ihirangi ki `en/demo2/README.md` .

Kia mahara ko nga ihirangi o tenei konae karekau e whakaatu ana i te raarangi korero, na reira ka tūtohu kia whakawhāitihia te roa me te tuhi kupu whakataki poto.

###### Te Pepeha Kaupapa

Kei te kite koe `Deme Two` kei raro iho i te tahua taka-iho me te whakahuahua ingoa kaupapa, kei reira tana pepeha kaupapa : `Your Project slogan`

<img alt="" src="https://p.3ti.site/1721276842.avif">

He rite : ki te rarangi tuatahi `en/demo2/README.md`

```
# Demo Two : Your Project slogan
```

Kaupapa `README.md` Ko nga korero i muri i te kopirua tuatahi `:` i te taitara taumata tuatahi ka kiia ko te pepeha kaupapa.

Ko nga kaiwhakamahi mai i Haina, Hapani me Korea, kia mohio koe me whakamahi koe i te kopirua haurua-whanui hei utu mo te koroni whanui-katoa `:`

##### Me Pehea Te Neke I Te TOC I Te Nuinga?

`TOC` Me whakatakoto te konae ki te raarangi o te reo puna.

Hei tauira, ki te mea he Hainamana te reo taketake, `TOC` ko `zh/blog/TOC` .

Mena kua whakarereketia te reo puna, me whakanekehia e koe `TOC` ki tetahi reo i roto i te kaupapa ki tetahi atu reo.

Ka taea e koe te korero ki nga whakahau e whai ake nei:

```
rsync -av --remove-source-files --include='*/' \
--include='TOC' --exclude='*' en/ zh/
```

Whakakētia `en/` me `zh/` i te whakahau i runga ake nei ki to waehere reo.


