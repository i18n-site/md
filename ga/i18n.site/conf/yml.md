# .i18n/conf.yml

Is é `.i18n/conf.yml` an comhad cumraíochta `i18n.site`

Seachas `ignore:` agus `i18n:` de [`i18`](/i18) , is é seo a leanas an comhad cumraíochta:

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

Ina measc, ciallaíonn an `ext:` mhír `.md` de `upload`

## Barr Nascleanúint nav

`nav:` roghanna cumraíochta, a fhreagraíonn don roghchlár nascleanúna ag barr an leathanaigh baile.

<img src="//p.3ti.site/1721051426.avif" style="width:320px">

`home: Home` measc, `en/i18n.yml` `i18n: home`

aistreofar go teangacha iolracha, mar shampla `zh/i18n.yml` `en/i18n.yml`

<img src="//p.3ti.site/1721051689.avif" style="width:320px">

Nuair a bheidh an t-aistriúchán críochnaithe, is féidir leat luach `yml` san aistriúchán a mhionathrú, ach ná cuir leis nó scrios eochair an aistriúcháin `yml` .

### `use: Toc` , Teimpléad Comhaid Singil (Le Breac-Chuntas)

: `nav`

```
  - i18n: home
    use: Toc
    url: /
```

`use: Toc` ciallaíonn sé rindreáil `Toc` a úsáid, atá ag déanamh aon `Markdown` teimpléad.

Is é `TOC` an giorrúchán de `Table of Contents` . Nuair a bheidh an teimpléad seo rindreáilte, taispeánfar imlíne an chomhaid `Markdown` seo sa bharra taoibh.

`Markdown` `/` `url:` `/README.md`

### `use: Md` , Teimpléad Comhaid Singil (Gan Imlíne)

Tá `Md` teimpléad mar an gcéanna le `Toc` , úsáidtear an dá cheann chun `Markdown` comhad amháin a sholáthar. Mar sin féin `Md` ní thaispeánann an teimpléad an t-imlíne sa bharra taoibh.

Is féidir leat a `use: Toc` sa chumraíocht thuas go `use: Md` , rith `i18n.site` sa chomhadlann `md` arís, agus ansin cuairt a thabhairt ar URL réamhamharc na forbartha chun na hathruithe ar an leathanach baile a fheiceáil.

### Luchtú Réamhshocraithe Gan Cosán Cumraíochta

Mura bhfuil an réimír conaire de chonair áirithe atá á rochtain cumraithe in `nav:` déanfar an comhad `MarkDown` a fhreagraíonn don chonair a luchtú de réir réamhshocraithe agus a rindreáil le `Md` template.

Mar shampla, má thugann tú cuairt ar `/test` , agus tá `nav:` cumraithe gan an cosán seo, agus is é an Béarla teanga an leathanaigh (cód `en` ), déanfar an teimpléad a luchtú `/en/test.md` agus a rindreáil le `Md` de réir réamhshocraithe.

Mura bhfuil `/en/test.md` an comhad seo ann, taispeánfar an leathanach `404` réamhshocraithe.

<img src="https://p.3ti.site/1721184299.avif" style="width:360px">

### `use: Doc` , Teimpléad Ilchomhad

Sa chomhad cumraíochta:

```
  - i18n: blog
    use: Doc
```

Léiríonn úsáid `Doc` le haghaidh rindreála teimpléid.

`Doc` `MarkDown`

#### Tionscadal Aonair (Ilchomhaid)

sa `blog` thuas tá an modh tionscadail aonair de `Doc` .

```
  - i18n: blog
    url: blog
    use: Doc
```

##### Nuair a Bhíonn url Folamh, Mainneachtainíonn Sé Luach i18n

Mura scríobhann tú `url` , `url` go dtí luach `i18n` .

Tá an modh scríbhneoireachta thuas comhionann le bhfuil `url: blog` agus is é `en/blog/TOC` . an comhad comhfhreagrach.

#### Tionscadail Iolracha

`.i18n/conf.yml` Is mód ilthionscadail é an chumraíocht i `i18n:doc` .

```
  - i18n: doc
    menu: NB demo1,demo2
    use: Doc
```

<img src="https://p.3ti.site/1721275191.avif" width="320px">

Anseo, ciallaíonn `menu: NB demo1,demo2` úsáid a bhaint as `NB` chun an roghchlár anuas a sholáthar.

`NB` , an giorrúchán de `Name Breif` , rud a thugann le fios gur féidir leis an roghchlár anuas ainm agus mana an tionscadail a thaispeáint.

`NB` an paraiméadar `demo1,demo2` á leanúint aige.
Nóta : ** Níor cheart go mbeadh spásanna ** roimh agus tar éis an camóg `,` i `demo1,demo2`

Maidir leis na paraiméadair thuas, is é an comhad innéacs eolaire comhfhreagrach:

* `en/demo1/TOC`
* `en/demo2/TOC`

#### Innéacs Tábla Ábhar TOC

`i18n.site` Rithfidh an breiseán `js` `.i18n/hook/after.tran/TOC.js` sa stóras taispeána chun an comhad innéacs eolaire a léamh `doc` a fhreagraíonn do chumraíocht an teimpléid `TOC` chun `json` imlíne an eolaire a ghiniúint.

Má úsáideann tú teimpléad `doc` , ní mór duit an breiseán seo a bheith agat.

Má chuireann tú `.i18n` leis an tionscadal `i18n.site`

Déanfaidh an teimpléad imlíne ar an tábla ábhar bunaithe ar an `json` ginte `Doc`

##### Míniú Mionsonraithe Ar an Ábhar

Seo a leanas : t-ábhar `en/blog/TOC`

```
README.md

news/README.md
  news/begin.md
```

##### Úsáid Eangú Chun Leibhéil a Léiriú

Freagraíonn `README.md` sa chéad líne don `i18n.site` sa phictiúr thíos `en/blog/TOC` arb é ainm an tionscadail é.

Tá an chéad dá líne eile mar a thaispeántar sa screenshot thíos.

<img src="https://p.3ti.site/1721097381.avif" style="width:320px">

fhreagraíonn do `News` `news/README.md`
fhreagraíonn `news/begin.md` `Our Product is Online !`

`TOC`

##### Ní Scríobhann Leibhéal Na Dtuismitheoirí Ach an Teideal, Ní an T-Ábhar.

Nuair a bhíonn leibhéil iolracha eangaithe ann, ní scríobhann leibhéal na dtuismitheoirí ach an teideal agus ní an t-ábhar. Seachas sin, beidh an clóghrafaíocht trína chéile.

##### Tionscadal README.md 

`README.md` den tionscadal, mar shampla, is féidir leat ábhar a scríobh i `en/demo2/README.md` .

Tabhair faoi deara nach léiríonn ábhar an chomhaid seo imlíne tábla na n-ábhar, mar sin moltar an fad a theorannú agus réamhrá gearr a scríobh.

###### Mana Tionscadail

Mar a fheiceann tú, `Deme Two` Thíos an roghchlár anuas agus imlíne catalóg ainm an tionscadail, tá `Your Project slogan` mana tionscadail :

<img alt="" src="https://p.3ti.site/1721276842.avif">

Freagraíonn sé : don chéad líne `en/demo2/README.md`

```
# Demo Two : Your Project slogan
```

`:` `README.md`

Úsáideoirí ón tSín, ón tSeapáin agus ón gCóiré, tabhair faoi deara go gcaithfidh tú idirstad leathleithead a úsáid in ionad idirstad lánleithead `:`

##### Conas TOC a Bhogadh Ar an Mórchóir?

`TOC` Ní mór an comhad a chur in eolaire na teanga foinse.

Mar shampla, más `TOC` an teanga fhoinseach, is é `zh/blog/TOC` .

Má athraítear an teanga foinse, ní mór duit `TOC` a bhogadh i dteanga áirithe sa tionscadal go teanga eile.

Is féidir leat tagairt a dhéanamh do na horduithe seo a leanas:

```
rsync -av --remove-source-files --include='*/' \
--include='TOC' --exclude='*' en/ zh/
```

Mionathraigh le do thoil `en/` agus `zh/` san ordú thuas chuig do chód teanga.


