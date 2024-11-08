# .i18n/conf.yml

Faịlụ nhazi maka `i18n.site` bụ `.i18n/conf.yml` yana ọdịnaya dị ka ndị a :

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

N'ime ha, ihe nhazi `upload` ruo `ext:` pụtara na naanị `.md` ga-ebugo mgbe a na-ebipụta ya.

## N'elu Igodo Igodo

Nhọrọ nhazi `nav:` , kwekọrọ na menu nsoroụzọ dị n'elu ibe mbụ.

<img src="//p.3ti.site/1721051426.avif" style="width:320px">

N'ime ha, `i18n: home` kwekọrọ na `home: Home` n'ime `en/i18n.yml` (ebe `en` bụ asụsụ isi mmalite nke nsụgharị ọrụ).

`en/i18n.yml` ọdịnaya bụ ederede egosiri na menu igodo, nke a ga-atụgharị dịka `fromTo` na nhazi, dịka ọmụmaatụ, sụgharịa `zh/i18n.yml` .

<img src="//p.3ti.site/1721051689.avif" style="width:320px">

Ka emechara ntụgharị asụsụ, ị nwere ike gbanwee uru ntụgharị asụsụ `yml` mana etinyekwala ma ọ bụ hichapụ igodo ntụgharị asụsụ `yml` .

### `use: Toc` Akwụkwọ Ndebiri Nwere Ndebiri

`nav` :

```
  - i18n: home
    use: Toc
    url: /
```

`use: Toc` pụtara nsụgharị site na iji template `Toc` , nke na-enye otu ndebiri `Markdown` .

`TOC` bụ mkpirisi nke `Table of Contents` Mgbe edeputara ndebiri a, a ga-egosipụta ndepụta nke faịlụ `Markdown` a na sidebar.

`url:` na-anọchi anya ụzọ faịlụ nke `Markdown` ( `/` kwekọrọ na ndekọ mgbọrọgwụ `/README.md` , aha faịlụ a chọrọ prefix ukwu na obere suffix).

### `use: Md` Akwụkwọ Ndebiri Na-Enweghị Ndepụta

Ihe ndebiri `Md` na ndebiri `Toc` bụ otu ma ejiri ha abụọ mee otu faịlụ `Markdown` . Mana ndebiri `Md` egosighi ihe ndeputa na sidebar.

Ị nwere ike gbanwee `use: Toc` na nhazi dị n'elu ka ọ bụrụ `use: Md` , mee `i18n.site` na ndekọ `md` ọzọ, wee gaa na URL nlele mmepe iji hụ mgbanwe na ibe mbụ.

### `use: Blog` Ụdị Blọgụ

Ihe ndebiri blọgụ na-egosiputa ndepụta akụkọ (utu aha na abtracts) n'usoro oge mbipụta.

[→ Pịa ebe a ka ịmụta gbasara nhazi a kapịrị ọnụ](/i18n.site/conf/blog)

### `use: Doc` Ndebiri Akwụkwọ Faịlụ

Na faịlụ nhazi:

```
  - i18n: doc
    menu: NB demo1,demo2
    use: Doc
```

Na-egosi iji `Doc` maka ndebiri.

`Doc` template na-akwado ijikọ ọtụtụ `MarkDown` iji mepụta ndepụta akwụkwọ maka otu ma ọ bụ ọtụtụ ọrụ.

#### Otutu Oru Na Otutu Faịlụ

Nhazi nke `.i18n/conf.yml` n'ime `i18n:doc` bụ ụdị ntụgharị ọtụtụ faịlụ ọtụtụ.

Ebe a, `menu: NB demo1,demo2` , pụtara iji template `NB` iji nye menu ndọda.

<img src="//p.3ti.site/1721275191.avif" width="320px">

`NB` , nke bụ ndebiri nke `Name Breif` , pụtara na menu ndọpụta nwere ike igosipụta aha na okwu nke ọrụ ahụ.

`NB` na-esochi oke `demo1,demo2` gafere ya.

`demo1,demo2` : ** `,` **

Faịlụ ndekọ ndekọ aha kwekọrọ maka paramita ndị a dị n'elu bụ:

* `en/demo1/TOC`
* `en/demo2/TOC`

#### Otu Oru Ngo Otutu Faịlụ

Ọ bụrụ na ị nwere naanị otu oru ngo, ị nwere ike hazie ya dị ka ndị a.

```
  - i18n: doc
    url: flashduty
    use: Doc
```

> [!WARN]
> Otu oru ngo nwere otutu faịlụ anaghị akwado ịhazi `url` ka mgbọrọgwụ ụzọ `/`
> nav:__ bụrụ `nav:` __conf.yml
> Nhazi a bụ iji mara nke ọma akwụkwọ ọrụ, blọọgụ na ọdịnaya ndị ọzọ site na akwụkwọ ndekọ aha.
> A na-atụ aro ka iji otu faịlụ na otu ibe dị ka ibe mbụ.

> [!TIP]
> Ọ bụrụ na edeghị `url` , `url` na-adabara uru nke `i18n` Iwu a na-arụkwa ọrụ maka ndebiri ndị ọzọ.

#### Ndepụta Ọdịnaya Nke TOC

Ọ bụrụ na agbanyere template `use: Doc` na nhazi, biko mee ka nkwụnye `i18n.addon/toc` na `.i18n/conf.yml` Nhazi dị ka ndị a :

```yml
addon:
  - i18n.addon/toc
```

`i18n.site` ga-arụnye ngwa ngwa ma mebie nkwụnye a, gụọ `TOC` faịlụ ndekọ ndekọ aha, wee mepụta `json` ndepụta ndekọ aha.

Ọ bụrụ na ọ bụ otu ọrụ nwere ọtụtụ faịlụ, akwụkwọ ndekọ mgbọrọgwụ `TOC` bụ akwụkwọ ndekọ aha kwekọrọ na `url:` na akwụkwọ ndekọ asụsụ isi, dịka ọmụmaatụ, ọ bụrụ na asụsụ isi bụ Chinese: faịlụ kwekọrọ na `url: flashduty` bụ `zh/flashduty/TOC` .

Ọ bụrụ na ọ bụ ọtụtụ ọrụ na ọtụtụ faịlụ, ọ dịghị mkpa ịhazi `url:` Akwụkwọ ndekọ mgbọrọgwụ nke `TOC` bụ akwụkwọ ndekọ aha kwekọrọ na uru nke `i18n` .

##### Nkọwa Ọdịnaya Zuru Ezu

`en/blog/TOC` dị ka ndị a :

```
README.md

news/README.md
  news/begin.md
```

##### Jiri Nbanye Iji Gosi Ọkwa

`README.md` n'ahịrị mbụ nke `en/blog/TOC` dị n'elu kwekọrọ na `i18n.site` na foto dị n'okpuru ebe a, nke bụ aha ọrụ.

Ahịrị abụọ na-esote dị ka egosiri na nseta ihuenyo dị n'okpuru.

<img src="https://p.3ti.site/1721097381.avif" style="width:320px">

`news/README.md` dabara na `News` ,
`news/begin.md` dabara na `Our Product is Online !`

A na-etinye faịlụ `TOC` iji gosi njikọ nhazi ọkwa nke ndepụta ahụ, kwado ntinye ọkwa ọtụtụ, na nkọwa ahịrị malite na `# ` .

##### Ọkwa Nne Na Nna Na-Ede Aha Naanị, Ọ Bụghị Ọdịnaya.

Mgbe enwere ọtụtụ ọkwa nbanye, ọkwa nne na nna na-ede aha naanị ọ bụghị ọdịnaya. Ma ọ bụghị ya, typography ga-emebi emebi.

##### Ọrụ README.md

Enwere ike dee ọdịnaya na ihe `README.md` , dị ka `en/demo2/README.md` .

Rịba ama na ọdịnaya nke faịlụ a adịghị egosi tebụl nke ọdịnaya, ya mere a na-atụ aro ka ịbelata ogologo ma dee obere okwu mmeghe.

###### Okwu Oru Ngo

Ị nwere ike ịhụ na `Deme Two` nwere mkpado ọrụ ya n'okpuru menu ndọpụta na aha ndepụta ndepụta `Your Project slogan` :

![](https://p.3ti.site/1721276842.avif)

Nke a dabara na ahịrị mbụ nke `en/demo2/README.md` :

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

### Nbudata Akpaghị Aka Na-Enweghị Ụzọ Nhazi

Maka otu ụzọ a na-enweta, ọ bụrụ na ahazighị prefix ụzọ na `nav:` , faịlụ `MarkDown` kwekọrọ na ụzọ ahụ ga-ebu ya na ndabara ma mee ya site na iji template `Md` .

Dịka ọmụmaatụ, ọ bụrụ na ịnweta `/test` na `nav:` na-ahazi na-enweghị prefix nke ụzọ a, na asụsụ ihe nchọgharị ugbu a bụ Bekee (koodu `en` ), `/en/test.md` ga-ebu ya na ndabara ma mee ya site na iji template `Md` .

Ọ bụrụ `/en/test.md` faịlụ a adịghị, ibe `404` ndabara ga-egosipụta.

<img src="//p.3ti.site/1721184299.avif" style="width:360px">