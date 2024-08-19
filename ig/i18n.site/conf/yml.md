# .i18n/conf.yml

Profaịlụ maka `i18n.site` bụ `.i18n/conf.yml` .

Ewezuga ntọala nke [`i18`](/i18) , `ignore:` na `i18n:` , faịlụ nhazi bụ nke a:

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

N'ime ha, ihe nhazi `upload` ruo `ext:` pụtara na naanị `.md` ga-ebugo mgbe a na-ebipụta ya.

## N'elu Igodo Igodo

Nhọrọ nhazi `nav:` , kwekọrọ na menu nsoroụzọ dị n'elu ibe mbụ.

<img src="//p.3ti.site/1721051426.avif" style="width:320px">

N'ime ha, `i18n: home` kwekọrọ na `home: Home` na `en/i18n.yml` .

`en/i18n.yml` ka a ga-atụgharị gaa n'ọtụtụ asụsụ, dị ka `zh/i18n.yml` .

<img src="//p.3ti.site/1721051689.avif" style="width:320px">

Ka emechara ntụgharị asụsụ, ị nwere ike gbanwee uru ntụgharị asụsụ `yml` mana etinyekwala ma ọ bụ hichapụ igodo ntụgharị asụsụ `yml` .

### `use: Toc` , Otu Faịlụ Ndebiri (Ya Na Ndepụta)

`nav` :

```
  - i18n: home
    use: Toc
    url: /
```

`use: Toc` pụtara nsụgharị site na iji template `Toc` , nke na-enye otu ndebiri `Markdown` .

`TOC` bụ mkpirisi nke `Table of Contents` Mgbe emegharịrị template a, a ga-egosipụta ndepụta nke faịlụ `Markdown` a na sidebar.

`url:` na-anọchi anya ụzọ faịlụ nke `Markdown` ( `/` kwekọrọ na ndekọ mgbọrọgwụ `/README.md` , aha faịlụ a chọrọ prefix ukwu na obere suffix).

### `use: Md` , Otu Faịlụ Ndebiri (Enweghị Nkọwa)

Ihe ndebiri `Md` na ndebiri `Toc` bụ otu ma ejiri ha abụọ mee otu faịlụ `Markdown` . Mana ndebiri `Md` egosighi ihe ndeputa na sidebar.

Ị nwere ike gbanwee `use: Toc` na nhazi dị n'elu ka ọ bụrụ `use: Md` , mee `i18n.site` na ndekọ `md` ọzọ, wee gaa na URL nlele mmepe iji hụ mgbanwe na ibe mbụ.

### Nbudata Akpaghị Aka Na-Enweghị Ụzọ Nhazi

Ọ bụrụ na enwetara otu ụzọ na ahazighị prefix ụzọ ya na `nav:` , faịlụ `MarkDown` kwekọrọ na ụzọ ahụ ga-ebu ya na ndabara wee jiri template `Md` mee ya.

Dịka ọmụmaatụ, ọ bụrụ na ịnweta `/test` , na `nav:` na-ahazi na-enweghị ụzọ a, na asụsụ ibe bụ Bekee (koodu `en` ), `/en/test.md` ga-ebu ya na ndabara ma mee ya site na iji template `Md` .

Ọ bụrụ `/en/test.md` faịlụ a adịghị, ibe `404` ndabara ga-egosipụta.

<img src="https://p.3ti.site/1721184299.avif" style="width:360px">

### `use: Doc` , Ndebiri Ọtụtụ Faịlụ

Na faịlụ nhazi:

```
  - i18n: blog
    use: Doc
```

Na-egosi iji `Doc` maka ndebiri.

`Doc` template na-akwado ijikọ ọtụtụ `MarkDown` iji mepụta ndepụta akwụkwọ maka otu ma ọ bụ ọtụtụ ọrụ.

#### Otu Oru Ngo (Ọtụtụ Faịlụ)

`blog` dị n'elu bụ ụdị otu ihe nke `Doc` .

```
  - i18n: blog
    url: blog
    use: Doc
```

##### Mgbe url Efu, Ọ Na-Adaba Na Uru Nke i18n

Ọ bụrụ na edeghị `url` , `url` na-adabara uru nke `i18n` Iwu a na-arụkwa ọrụ maka ndebiri ndị ọzọ.

Usoro ederede nke dị n'elu bụ `url: blog` , na faịlụ ya kwekọrọ bụ `en/blog/TOC` .

#### Otutu Oru Ngo

Nhazi nke `i18n:doc` n'ime `.i18n/conf.yml` bụ ụdị ọrụ ọtụtụ.

```
  - i18n: doc
    menu: NB demo1,demo2
    use: Doc
```

<img src="https://p.3ti.site/1721275191.avif" width="320px">

Ebe a, `menu: NB demo1,demo2` , pụtara iji template `NB` iji nye menu ndọda.

`NB` , nke bụ ndebiri nke `Name Breif` , pụtara na menu ndọpụta nwere ike igosipụta aha na okwu nke ọrụ ahụ.

`NB` na-esochi oke `demo1,demo2` gafere ya.
`demo1,demo2` : ** `,` **

Faịlụ ndekọ ndekọ aha kwekọrọ maka paramita ndị a dị n'elu bụ:

* `en/demo1/TOC`
* `en/demo2/TOC`

#### Ndepụta Ọdịnaya Nke TOC

`i18n.site` ga-eme ihe nkwụnye `js` `.i18n/hook/after.tran/TOC.js` na ụlọ nkwakọba ihe ngosi iji gụọ faịlụ ndekọ ndekọ aha `doc` kwekọrọ na nhazi template `TOC` iji mepụta ndepụta ndekọ ndekọ `json` .

Ọ bụrụ na ị na-eji template `doc` , ị ga-enwerịrị nkwụnye ihe a.

Ọ bụrụ na ibido oru ngo `i18n.site` site na folda efu, cheta na i detuo ihe ngosi ngosi `.i18n` na ndekọ gị.

Ihe ndebiri `Doc` ga-enye ndepụta ndepụta ọdịnaya dabere na `json` emepụtara.

##### Nkọwa Ọdịnaya Zuru Ezu

`en/blog/TOC` dị ka ndị a :

```
README.md

news/README.md
  news/begin.md
```

##### Jiri Nbanye Iji Gosi Ọkwa

`README.md` n'ahịrị mbụ nke `en/blog/TOC` dị n'elu kwekọrọ na `i18n.site` na foto dị n'okpuru, nke bụ aha ọrụ.

Ahịrị abụọ na-esote dị ka egosiri na nseta ihuenyo dị n'okpuru.

<img src="https://p.3ti.site/1721097381.avif" style="width:320px">

`news/README.md` dabara na `News` ,
`news/begin.md` dabara na `Our Product is Online !`

etinyere faịlụ `TOC` iji gosi njikọ nhazi ọkwa nke ndepụta ma kwado ntinye ọkwa ọtụtụ.

##### Ọkwa Nne Na Nna Na-Ede Aha Naanị, Ọ Bụghị Ọdịnaya.

Mgbe enwere ọtụtụ ọkwa nbanye, ọkwa nne na nna na-ede aha naanị ọ bụghị ọdịnaya. Ma ọ bụghị ya, typography ga-emebi emebi.

##### Ọrụ README.md

Enwere ike dee ọdịnaya na ihe `README.md` , dị ka `en/demo2/README.md` .

Rịba ama na ọdịnaya nke faịlụ a adịghị egosi tebụl nke ọdịnaya, ya mere a na-atụ aro ka ịbelata ogologo ma dee obere okwu mmeghe.

###### Okwu Oru Ngo

Ị nwere ike ịhụ na `Deme Two` nwere mkpado `Your Project slogan` ya n'okpuru menu ndọpụta na aha ndepụta ndepụta katalọgụ :

![](https://p.3ti.site/1721276842.avif)

Nke a dabara na ahịrị mbụ `en/demo2/README.md` :

```
# Demo Two : Your Project slogan
```

A ga-ewere ọdịnaya dị na colon mbụ `:` nke ọkwa ọkwa mbụ nke oru ngo `README.md` dị ka isiokwu ọrụ.

Ndị ọrụ si China, Japan na Korea, biko mara na ị kwesịrị iji colon `:` ọkara obosara kama iji eriri obosara zuru oke.

##### Otu Esi Ebufe TOC N'oke?

Ekwesịrị idowe faịlụ `TOC` n'ime ndekọ aha nke asụsụ isi mmalite.

Dịka ọmụmaatụ, ọ bụrụ na asụsụ isi mmalite bụ Chinese, mgbe ahụ `TOC` dị n'elu bụ `zh/blog/TOC` .

Ọ bụrụ na agbanweela asụsụ isi mmalite, ịkwesịrị ịkwaga faịlụ `TOC` nke otu asụsụ n'ime ọrụ ahụ gaa n'asụsụ ọzọ.

Ị nwere ike rụtụ aka na iwu ndị a:

```
rsync -av --remove-source-files --include='*/' \
--include='TOC' --exclude='*' en/ zh/
```

Biko gbanwee `en/` na `zh/` n'iwu dị n'elu na koodu asụsụ gị.