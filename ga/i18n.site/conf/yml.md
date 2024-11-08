# .i18n/conf.yml

Is é `.i18n/conf.yml` an comhad cumraíochta do `i18n.site` agus is é seo a leanas an t-ábhar :

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

Ina measc, ciallaíonn `upload` go `ext:` mhír chumraíochta nach n-uaslódálfar ach `.md` agus iad á bhfoilsiú.

## Barr Nascleanúint nav

`nav:` rogha cumraíochta, a fhreagraíonn don roghchlár nascleanúna ag barr an leathanaigh baile.

<img src="//p.3ti.site/1721051426.avif" style="width:320px">

Ina measc, comhfhreagraíonn `i18n: home` do `home: Home` in `en/i18n.yml` (áit arb é `en` teanga foinse an aistriúcháin tionscadail).

Is é `en/i18n.yml` ábhar an téacs a thaispeántar sa roghchlár nascleanúna, a aistreofar de réir `fromTo` sa chumraíocht, mar shampla, aistrithe go `zh/i18n.yml` .

<img src="//p.3ti.site/1721051689.avif" style="width:320px">

Nuair a bheidh an t-aistriúchán críochnaithe, is féidir leat luach an aistriúcháin `yml` a mhionathrú, ach ná cuir nó scrios eochair an aistriúcháin `yml` .

### `use: Toc` Le Breac-Chuntas

`nav` :

```
  - i18n: home
    use: Toc
    url: /
```

Ciallaíonn `use: Toc` rindreáil ag baint úsáide as teimpléad `Toc` , atá ag déanamh rindreála ar theimpléad `Markdown` amháin.

Is é `TOC` an giorrúchán de `Table of Contents` Nuair a bheidh an teimpléad seo rindreáilte, taispeánfar imlíne an chomhaid `Markdown` seo sa bharra taoibh.

Seasann `url:` do chonair an chomhaid `Markdown` (comhfhreagraíonn `/` don fhréamh-eolaire `/README.md` , tá réimír i gcás uachtair agus iarmhír litreacha beaga ag teastáil ón ainm comhaid seo).

### `use: Md` Teimpléad Doiciméad Singil Gan Imlíne

Tá an teimpléad `Md` agus an teimpléad `Toc` mar an gcéanna agus úsáidtear an dá cheann chun comhad `Markdown` amháin a sholáthar. Ach ní thaispeánann an teimpléad `Md` an imlíne sa bharra taobh.

Is féidir leat `use: Toc` a mhionathrú go `use: Md` sa chumraíocht thuas, `i18n.site` a rith san eolaire `md` arís, agus ansin cuairt a thabhairt ar an URL réamhamharc forbartha chun na hathruithe ar an leathanach baile a fheiceáil.

### `use: Blog` Teimpléid Blag

Taispeánann teimpléad an bhlag liosta alt (teidil agus achoimrí) in ord am foilsithe.

[→ Cliceáil anseo chun foghlaim faoin gcumraíocht shonrach](/i18n.site/conf/blog)

### `use: Doc` Teimpléid Doiciméad Comhaid Iolracha

Sa chomhad cumraíochta:

```
  - i18n: doc
    menu: NB demo1,demo2
    use: Doc
```

Léiríonn úsáid `Doc` le haghaidh rindreála teimpléid.

Tacaíonn `Doc` teimpléad le comhtháthú iolrach `MarkDown` chun imlíne doiciméad a ghiniúint do thionscadail aonair nó iolracha.

#### Tionscadail Iolracha Agus Comhaid Iolracha

Is modh rindreála ilthionscadail ilchomhad é cumraíocht `.i18n/conf.yml` in `i18n:doc` .

Anseo, ciallaíonn `menu: NB demo1,demo2` , teimpléad `NB` a úsáid chun an roghchlár anuas a sholáthar.

<img src="//p.3ti.site/1721275191.avif" width="320px">

Ciallaíonn `NB` , arb é an giorrúchán é `Name Breif` , gur féidir leis an roghchlár anuas ainm agus mana an tionscadail a thaispeáint.

`NB` ina dhiaidh sin cuirtear an paraiméadar `demo1,demo2` ar aghaidh chuige.

Tabhair faoi deara : ** Níor cheart go mbeadh spásanna ** roimh agus tar éis an camóg `,` in `demo1,demo2` .

Is é an comhad innéacs eolaire comhfhreagrach do na paraiméadair thuas:

* `en/demo1/TOC`
* `en/demo2/TOC`

#### Comhaid Iolracha Tionscadal Aonair

Mura bhfuil ach tionscadal amháin agat, is féidir leat é a chumrú mar seo a leanas.

```
  - i18n: doc
    url: flashduty
    use: Doc
```

> [!WARN]
> Ní thacaíonn tionscadal aonair le comhaid iolracha le `url` a chumrú mar bhunchosán `/`
> Más rud é __conf.yml → nav:__ Níl cosán fréimhe cumraithe, nuair a bheidh tú ag rochtain ar leathanach baile an láithreáin ghréasáin, déanfar é a athscríobh go huathoibríoch chuig an gcéad URL faoin gcumraíocht `nav:` .
> Is é an dearadh seo ná idirdhealú níos fearr a dhéanamh ar dhoiciméid tionscadail, blaganna agus ábhar eile trí eolairí.
> Moltar comhad amháin agus leathanach amháin a úsáid mar leathanach baile.

> [!TIP]
> Mura scríobhtar `url` , mainneachtainíonn `url` luach `i18n` Tá feidhm ag an riail seo freisin do theimpléid eile.

#### Innéacs Tábla Ábhar TOC

Má tá teimpléad `use: Doc` cumasaithe sa chumraíocht, cumasaigh plug-in `i18n.addon/toc` in `.i18n/conf.yml` le do thoil. Seo a leanas an chumraíocht :

```yml
addon:
  - i18n.addon/toc
```

Déanfaidh `i18n.site` an breiseán seo a shuiteáil agus a fhorghníomhú go huathoibríoch, léigh `TOC` an comhad innéacs eolaire, agus ginfidh `json` imlíne an eolaire.

Más tionscadal aonair é le comhaid iolracha, is é an fhréamh-eolaire `TOC` an t-eolaire a fhreagraíonn do `url:` san eolaire teanga foinse Mar shampla, más Sínis an teanga fhoinseach: is é `zh/flashduty/TOC` an comhad a fhreagraíonn do `url: flashduty` .

Más tionscadail iolracha agus comhaid iolracha é, ní gá `url:` a chumrú. Is é bun-eolaire `TOC` an t-eolaire a fhreagraíonn do luach `i18n` .

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

`TOC` comhad atá eangaithe chun gaol ordlathach an imlíne a léiriú, chun tacú le eangú il-leibhéil, agus tráchtanna líne ag tosú le `# ` .

##### Ní Scríobhann Leibhéal Na Dtuismitheoirí Ach an Teideal, Ní an T-Ábhar.

Nuair a bhíonn leibhéil iolracha eangaithe ann, ní scríobhann leibhéal na dtuismitheoirí ach an teideal agus ní an t-ábhar. Seachas sin, beidh an clóghrafaíocht trína chéile.

##### Tionscadal README.md

Is féidir ábhar a scríobh i mír `README.md` , mar shampla `en/demo2/README.md` .

Tabhair faoi deara nach léiríonn ábhar an chomhaid seo imlíne tábla na n-ábhar, mar sin moltar an fad a theorannú agus réamhrá gearr a scríobh.

###### Mana Tionscadail

Is féidir leat a fheiceáil go bhfuil a chliblíne `Your Project slogan` ag `Deme Two` faoin roghchlár anuas agus imlíne catalóige an tionscadail : .

![](https://p.3ti.site/1721276842.avif)

Freagraíonn sé seo don chéad sraith de `en/demo2/README.md` :

```
# Demo Two : Your Project slogan
```

Breathnófar ar an ábhar tar éis an chéad idirstad `:` de theideal an chéad leibhéal de thionscadal `README.md` mar mana an tionscadail.

Úsáideoirí ón tSín, ón tSeapáin agus ón gCóiré, tabhair faoi deara le do thoil gur chóir duit colon leathleithead `:` a úsáid in ionad idirstad lánleithead.

##### Conas TOC a Bhogadh Ar an Mórchóir?

Ní mór `TOC` comhad a chur in eolaire na teanga foinse.

Mar shampla, más Sínis an teanga fhoinseach, is é `TOC` thuas ná `zh/blog/TOC` .

Má athraítear an teanga foinse, ní mór duit na `TOC` gcomhad i dteanga áirithe sa tionscadal a bhogadh go teanga eile i mbaisceanna.

Is féidir leat tagairt a dhéanamh do na horduithe seo a leanas:

```
rsync -av --remove-source-files --include='*/' \
--include='TOC' --exclude='*' en/ zh/
```

Mionathraigh `en/` agus `zh/` san ordú thuas chuig do chód teanga.

### Luchtú Réamhshocraithe Gan Cosán Cumraíochta

Chun conair áirithe a rochtain, mura bhfuil an réimír conaire cumraithe in `nav:` , déanfar an comhad `MarkDown` a fhreagraíonn don chosán a luchtú de réir réamhshocraithe agus a rindreáil ag baint úsáide as an teimpléad `Md` .

Mar shampla, má fhaightear rochtain ar `/test` agus má tá `nav:` cumraithe gan réimír an chonair seo, agus más é an Béarla an teanga brabhsála reatha (cód `en` ), déanfar `/en/test.md` a luchtú de réir réamhshocraithe agus a rindreáil ag baint úsáide as teimpléad `Md` .

Mura bhfuil `/en/test.md` an comhad seo ann, taispeánfar an leathanach réamhshocraithe `404` .

<img src="//p.3ti.site/1721184299.avif" style="width:360px">