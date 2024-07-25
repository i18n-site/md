# .i18n/conf.yml

Faịlụ nhazi bụ `.i18n/conf.yml` `i18n.site`

Ewezuga ntọala `ignore:` na `i18n:` nke [`i18`](/i18) faịlụ nhazi bụ nke a:

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

N'ime ha, ihe nhazi `ext:` nke `upload` pụtara na naanị `.md` ga-ebugo mgbe a na-ebipụta.

## N'elu Igodo Igodo

`nav:` nhazi, kwekọrọ na menu igodo n'elu ibe mbụ.

<img src="//p.3ti.site/1721051426.avif" style="width:320px">

N'ime ha `i18n: home` kwekọrọ na `en/i18n.yml`中`home: Home` .

A ga-atụgharị asụsụ n'ọtụtụ asụsụ, dị ka `zh/i18n.yml` `en/i18n.yml`

<img src="//p.3ti.site/1721051689.avif" style="width:320px">

Mgbe ntụgharị asụsụ mechara, ị nwere ike gbanwee uru nke `yml` na ntụgharị asụsụ ahụ, mana etinyekwala ma ọ bụ hichapụ igodo ntụgharị asụsụ `yml` .

### `use: Toc` Otu Faịlụ Ndebiri (Ya Na Ndepụta)

Na- : `nav`

```
  - i18n: home
    use: Toc
    url: /
```

`use: Toc` `Toc` `Markdown`

`TOC` `Table of Contents` `Markdown`

`url:` `Markdown` `/` `/README.md`

### `use: Md` Otu Ndebiri Faịlụ (Enweghị Nkọwa)

`Md` Template bụ otu ihe ahụ dị ka `Toc` , a na-eji ha abụọ eme otu faịlụ `Markdown` . Otú ọ dị `Md` template egosighi ihe ndeputa na sidebar.

Ị nwere ike gbanwee `use: Toc` na nhazi dị n'elu ka ọ bụrụ `use: Md` , na-agba ọsọ `i18n.site` na ndekọ `md` ọzọ, wee gaa na URL nlele mmepe iji hụ mgbanwe ndị dị na ibe mbụ.

### Nbudata Akpaghị Aka Na-Enweghị Ụzọ Nhazi

Ọ bụrụ na ahaziri prefix ụzọ nke ụfọdụ ụzọ a na-enweta na `nav:` faịlụ `MarkDown` nke dabara na ụzọ ahụ ga-ebu ya na ndabara wee mee ya site na iji ndebiri `Md` .

Dịka ọmụmaatụ, ọ bụrụ na ị gaa `/test` , na `nav:` na-ahazi na-enweghị ụzọ a, na asụsụ ibe bụ Bekee (koodu `en` ), a ga-ebunye template ahụ `/en/test.md` ma jiri ya mee ihe `Md` .

Ọ bụrụ `/en/test.md` faịlụ a adịghị, ibe `404` nke ndabara ga-egosipụta.

<img src="https://p.3ti.site/1721184299.avif" style="width:360px">

### `use: Doc` , Ndebiri Ọtụtụ Faịlụ

Na faịlụ nhazi:

```
  - i18n: blog
    use: Doc
```

Na-egosi iji `Doc`

`Doc` Template na-akwado ijikọ ọtụtụ `MarkDown` iji mepụta ndepụta akwụkwọ maka otu ma ọ bụ ọtụtụ ọrụ.

#### Otu Oru Ngo (Ọtụtụ Faịlụ)

`blog` bụ otu-project mode nke `Doc` .

```
  - i18n: blog
    url: blog
    use: Doc
```

##### Mgbe url Efu, Ọ Na-Adaba Na Uru Nke i18n

Ọ bụrụ na ideghị `url` `url` na uru nke `i18n` .

Usoro ederede dị n'elu dabara na inwe `url: blog` faịlụ ya kwekọrọ bụ `en/blog/TOC` .

#### Otutu Oru Ngo

Nhazi na `i18n:doc` bụ ọtụtụ ọrụ `.i18n/conf.yml`

```
  - i18n: doc
    menu: NB demo1,demo2
    use: Doc
```

<img src="https://p.3ti.site/1721275191.avif" width="320px">

Ebe a, `menu: NB demo1,demo2` pụtara iji `NB` mee menu ndọda.

`NB` bụ mbiri nke `Name Breif` , na-egosi na menu ndọpụta nwere ike igosipụta aha na okwu nke ọrụ ahụ.

`NB` a na-esote ya na oke `demo1,demo2` a ga-enyefe ya.
Rịba ama na e kwesịghị inwe oghere ** tupu rikoma `,` : ** `demo1,demo2`

Maka paramita ndị a dị n'elu, faịlụ ndekọ ndekọ aha kwekọrọ bụ:

* `en/demo1/TOC`
* `en/demo2/TOC`

#### Ndepụta Ọdịnaya Nke TOC

Ga `i18n.site` eme ihe mgbakwunye `js` `.i18n/hook/after.tran/TOC.js` n'ụlọ nkwakọba ihe ngosi iji gụọ faịlụ ndekọ aha `doc` dabara na nhazi template `TOC` iji mepụta `json` nke ndepụta ndekọ.

Ọ bụrụ na ị na `doc` eji template, ị ga-enwerịrị nkwụnye a.

`.i18n` bụrụ na ibido ọrụ `i18n.site`

`Doc` ndebiri ahụ ga-edepụta ndepụta ọdịnaya dabere na `json` emepụtara.

##### Nkọwa Ọdịnaya Zuru Ezu

Ọdịnaya dị : ndị a `en/blog/TOC`

```
README.md

news/README.md
  news/begin.md
```

##### Jiri Nbanye Iji Gosi Ọkwa

N'elu `en/blog/TOC` `README.md` na nke mbụ ahịrị kwekọrọ na `i18n.site` na foto n'okpuru, nke bụ oru ngo aha.

Ahịrị abụọ na-esote dị ka egosiri na nseta ihuenyo dị n'okpuru.

<img src="https://p.3ti.site/1721097381.avif" style="width:320px">

kwekọrọ na `News` `news/README.md`
kwekọrọ na `Our Product is Online !` `news/begin.md`

`TOC` Etinyere faịlụ a iji gosi njikọ nhazi nke ndepụta ma na-akwado ntinye ọkwa ọtụtụ.

##### Ọkwa Nne Na Nna Na-Ede Aha Naanị, Ọ Bụghị Ọdịnaya.

Mgbe enwere ọtụtụ ọkwa nbanye, ọkwa nne na nna na-ede aha naanị ọ bụghị ọdịnaya. Ma ọ bụghị ya, typography ga-emebi emebi.

##### Ọrụ README.md 

`README.md` nke oru ngo, ọmụmaatụ, ị nwere ike dee ọdịnaya na `en/demo2/README.md` .

Rịba ama na ọdịnaya nke faịlụ a adịghị egosi tebụl nke ọdịnaya, ya mere a na-atụ aro ka ịbelata ogologo ma dee obere okwu mmeghe.

###### Okwu Oru Ngo

`Your Project slogan` : ị pụrụ ịhụ, `Deme Two`

<img alt="" src="https://p.3ti.site/1721276842.avif">

: kwekọrọ na ahịrị mbụ `en/demo2/README.md`

```
# Demo Two : Your Project slogan
```

`:` omume `README.md`

Ndị ọrụ si China, Japan na Korea, biko rịba ama na ị ga-eji eriri obosara nke ọkara karịa obosara zuru oke `:`

##### Otu Esi Ebufe TOC N'oke?

`TOC`

Dịka ọmụmaatụ, ọ bụrụ na asụsụ isi mmalite bụ Chinese, `zh/blog/TOC` `TOC`

Ọ bụrụ na emezigharịrị asụsụ isi mmalite, ịkwesịrị ịhazi `TOC` mbugharị n'otu asụsụ n'ime ọrụ ahụ gaa n'asụsụ ọzọ.

Ị nwere ike rụtụ aka na iwu ndị a:

```
rsync -av --remove-source-files --include='*/' \
--include='TOC' --exclude='*' en/ zh/
```

Biko gbanwee `en/` na `zh/` n'iwu dị n'elu na koodu asụsụ gị.


