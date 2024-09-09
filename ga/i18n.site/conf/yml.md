# .i18n/conf.yml

Is é `.i18n/conf.yml` an phróifíl do `i18n.site` .

Seachas na socruithe [`i18`](/i18) , `ignore:` agus `i18n:` , is é seo a leanas an comhad cumraíochta:

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

Ina measc, ciallaíonn `upload` go `ext:` mhír chumraíochta nach n-uaslódálfar ach `.md` cheann agus iad á bhfoilsiú.

## Barr Nascleanúint nav

`nav:` rogha cumraíochta, a fhreagraíonn don roghchlár nascleanúna ag barr an leathanaigh baile.

<img src="//p.3ti.site/1721051426.avif" style="width:320px">

Ina measc, comhfhreagraíonn `i18n: home` do `home: Home` in `en/i18n.yml` .

Aistreofar `en/i18n.yml` go teangacha iolracha, mar shampla `zh/i18n.yml` .

<img src="//p.3ti.site/1721051689.avif" style="width:320px">

Nuair a bheidh an t-aistriúchán críochnaithe, is féidir leat luach an aistriúcháin `yml` a mhionathrú, ach ná cuir nó scrios eochair an aistriúcháin `yml` .

### `use: Toc` , Teimpléad Comhaid Singil (Le Imlíne)

`nav` :

```
  - i18n: home
    use: Toc
    url: /
```

Ciallaíonn `use: Toc` rindreáil ag baint úsáide as teimpléad `Toc` , atá ag déanamh rindreála ar theimpléad `Markdown` amháin.

Is é `TOC` an giorrúchán de `Table of Contents` Nuair a bheidh an teimpléad seo rindreáilte, taispeánfar imlíne an chomhaid `Markdown` seo sa bharra taoibh.

Seasann `url:` do chonair an chomhaid `Markdown` (comhfhreagraíonn `/` don fhréamh-eolaire `/README.md` , tá réimír i gcás uachtair agus iarmhír litreacha beaga ag teastáil ón ainm comhaid seo).

### `use: Md` , Teimpléad Comhaid Singil (Gan Imlíne)

Tá an teimpléad `Md` agus an teimpléad `Toc` mar an gcéanna agus úsáidtear an dá cheann chun comhad `Markdown` amháin a sholáthar. Ach ní thaispeánann an teimpléad `Md` an imlíne sa bharra taobh.

Is féidir leat `use: Toc` a mhionathrú go `use: Md` sa chumraíocht thuas, `i18n.site` a rith san eolaire `md` arís, agus ansin cuairt a thabhairt ar an URL réamhamharc forbartha chun na hathruithe ar an leathanach baile a fheiceáil.

### Luchtú Réamhshocraithe Gan Cosán Cumraíochta

Má dhéantar rochtain ar chonair áirithe agus mura bhfuil a réimír cosáin cumraithe in `nav:` , déanfar an comhad `MarkDown` a fhreagraíonn don chosán a luchtú de réir réamhshocraithe agus a rindreáil ag baint úsáide as an teimpléad `Md` .

Mar shampla, má fhaightear rochtain ar `/test` , agus má tá `nav:` cumraithe gan an cosán seo, agus más é Béarla teanga an leathanaigh (cód `en` ), déanfar `/en/test.md` a luchtú de réir réamhshocraithe agus a rindreáil ag baint úsáide as teimpléad `Md` .

Mura bhfuil `/en/test.md` an comhad seo ann, taispeánfar an leathanach réamhshocraithe `404` .

<img src="https://p.3ti.site/1721184299.avif" style="width:360px">

### `use: Doc` , Teimpléad Ilchomhad

Sa chomhad cumraíochta:

```
  - i18n: blog
    use: Doc
```

Léiríonn úsáid `Doc` le haghaidh rindreála teimpléid.

Tacaíonn `Doc` teimpléad le comhtháthú iolrach `MarkDown` chun imlíne doiciméad a ghiniúint do thionscadail aonair nó iolracha.

#### Tionscadal Aonair (Ilchomhaid)

Is é `blog` thuas an modh aon-mhír de `Doc` .

```
  - i18n: blog
    url: blog
    use: Doc
```

##### Nuair a Bhíonn url Folamh, Mainneachtainíonn Sé Luach i18n

Mura scríobhtar `url` , mainneachtainíonn `url` luach `i18n` Tá feidhm ag an riail seo freisin do theimpléid eile.

Is ionann an modh scríbhneoireachta thuas agus `url: blog` , agus is é `en/blog/TOC` an comhad comhfhreagrach.

#### Tionscadail Iolracha

Is mód ilthionscadail é cumraíocht `i18n:doc` as `.i18n/conf.yml` .

```
  - i18n: doc
    menu: NB demo1,demo2
    use: Doc
```

<img src="https://p.3ti.site/1721275191.avif" width="320px">

Anseo, ciallaíonn `menu: NB demo1,demo2` , teimpléad `NB` a úsáid chun an roghchlár anuas a sholáthar.

Ciallaíonn `NB` , arb é an giorrúchán é `Name Breif` , gur féidir leis an roghchlár anuas ainm agus mana an tionscadail a thaispeáint.

`NB` ina dhiaidh sin cuirtear an paraiméadar `demo1,demo2` ar aghaidh chuige.
Tabhair faoi deara : ** Níor cheart go mbeadh spásanna ** roimh agus tar éis an camóg `,` in `demo1,demo2` .

Maidir leis na paraiméadair thuas, is é an comhad innéacs eolaire comhfhreagrach:

* `en/demo1/TOC`
* `en/demo2/TOC`

#### Innéacs Tábla Ábhar TOC

Déanfaidh `i18n.site` `js` plug-in `.i18n/hook/after.tran/TOC.js` a fhorghníomhú sa stóras taispeána chun an comhad innéacs `doc` eolaire a fhreagraíonn don chumraíocht `TOC` teimpléad a léamh chun an imlíne eolaire `json` a ghiniúint.

Má úsáideann tú `doc` teimpléad, ní mór duit an breiseán seo a bheith agat.

Má chuireann tú tús le tionscadal `i18n.site` ó fhillteán folamh, cuimhnigh ar thionscadal taispeána `.i18n` a chóipeáil chuig do eolaire.

Déanfaidh an teimpléad `Doc` imlíne ar an gclár ábhar bunaithe ar an `json` ginte.

##### Míniú Mionsonraithe Ar an Ábhar

`en/blog/TOC` Seo a leanas an t-ábhar :

```
README.md

news/README.md
  news/begin.md
```

##### Úsáid Eangú Chun Leibhéil a Léiriú

Freagraíonn `README.md` sa chéad sraith de `en/blog/TOC` thuas do `i18n.site` sa phictiúr thíos, arb é ainm an tionscadail é.

Tá an chéad dá líne eile mar a thaispeántar sa screenshot thíos.

<img src="https://p.3ti.site/1721097381.avif" style="width:320px">

Freagraíonn `news/README.md` do `News` ,
Freagraíonn `news/begin.md` do `Our Product is Online !`

`TOC` comhad atá eangaithe chun gaol ordlathach an imlíne a léiriú, chun tacú le eangú il-leibhéil, agus tráchtanna líne ag tosú le `#` .

##### Ní Scríobhann Leibhéal Na Dtuismitheoirí Ach an Teideal, Ní an T-Ábhar.

Nuair a bhíonn leibhéil iolracha eangaithe ann, ní scríobhann leibhéal na dtuismitheoirí ach an teideal agus ní an t-ábhar. Seachas sin, beidh an clóghrafaíocht trína chéile.

##### Tionscadal README.md

Is féidir ábhar a scríobh i mír `README.md` , mar shampla `en/demo2/README.md` .

Tabhair faoi deara nach léiríonn ábhar an chomhaid seo imlíne tábla na n-ábhar, mar sin moltar an fad a theorannú agus réamhrá gearr a scríobh.

###### Mana Tionscadail

Is féidir leat a fheiceáil go bhfuil a chliblíne tionscadail `Your Project slogan` `Deme Two` faoin roghchlár anuas agus imlíne catalóige ainm an tionscadail : .

![](https://p.3ti.site/1721276842.avif)

Freagraíonn sé seo don chéad sraith `en/demo2/README.md` :

```
# Demo Two : Your Project slogan
```

Breathnófar ar an ábhar tar éis an chéad idirstad `:` de theideal an chéad leibhéal de thionscadal `README.md` mar mana an tionscadail.

Úsáideoirí ón tSín, ón tSeapáin agus ón gCóiré, tabhair faoi deara le do thoil gur chóir duit colon leathleithead `:` a úsáid in ionad idirstad lánleithead.

##### Conas TOC a Bhogadh Ar an Mórchóir?

Ní mór `TOC` comhad a chur in eolaire na teanga foinse.

Mar shampla, más Sínis an teanga fhoinseach, is é `TOC` thuas ná `zh/blog/TOC` .

Má athraítear an teanga foinse, ní mór duit na `TOC` gcomhad de theanga áirithe sa tionscadal a bhogadh go teanga eile sa bhaisc.

Is féidir leat tagairt a dhéanamh do na horduithe seo a leanas:

```
rsync -av --remove-source-files --include='*/' \
--include='TOC' --exclude='*' en/ zh/
```

Mionathraigh `en/` agus `zh/` san ordú thuas chuig do chód teanga.