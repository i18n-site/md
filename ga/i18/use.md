# Suiteáil Agus Úsáid

## Suiteáil windows Ar Dtús git bash

windows [`git bash`](https://git-scm.com/download/win)

Déan oibríochtaí ina dhiaidh sin i `git bash` .

## Suiteáil

```sh
bash <(curl -sS https://i.i18n.site) i18
```

### Cumraigh Comhartha Aistriúcháin

Tabhair cuairt ar [i18n.site/token](//i18n.site/token) Cliceáil chun an comhartha a chóipeáil

<img src="https://p.3ti.site/1719911689.avif" style="width:400px">

Cruthaigh `~/.config/i18n.site.yml` , greamaigh an t-ábhar cóipeáilte isteach ann, is é seo a leanas an t-ábhar:

```
token: YOUR_API_TOKEN
```

Ina theannta [sin](/#price) , ní mór duit cárta creidmheasa íocaíochta a cheangal i [i18n.site/payBill](//i18n.site/payBill)

## Úsáid

### Tionscadal Taispeána

Féach ar an tionscadal taispeána [github.com/i18n-site/demo.i18](//github.com/i18n-site/demo.i18) do thoil chun cumraíocht `i18` aistriúchán a fhoghlaim.

Is féidir le húsáideoirí sa tSín Clón [atomgit.com/i18n/demo.i18](//atomgit.com/i18n/demo.i18)

Tar éis clónáil, cuir isteach an t-eolaire agus rith `i18` chun an t-aistriúchán a chríochnú.

### Struchtúr Eolaire

Seo a leanas struchtúr eolaire an stórais teimpléid

```
┌── .i18n
│  └── conf.yml
└── en
   ├── _IgnoreDemoFile.md
   ├── i18n.yml
   └── README.md
```

Níl sna comhaid taispeána aistrithe san eolaire `en` ach sampla agus is féidir iad a scriosadh.

### Rith Aistriúcháin

Cuir isteach an t-eolaire agus rith `i18` le haistriú.

Chomh maith leis an aistriúchán, ginfidh an clár an fillteán `.i18n/data` freisin, le do thoil é a chur leis an stór.

Tar éis duit an comhad nua a aistriú, ginfear comhad sonraí nua san eolaire seo Cuimhnigh `git add . ` .

## Comhad Cumraíochta

Is é `.i18n/conf.yml` an comhad cumraíochta den uirlis aistriúcháin `i18` ordú

Seo a leanas an t-ábhar:

```
i18n:
  fromTo:
    en: zh ja ko de fr
    # en:

ignore:
  - _*
```

### Teanga Fhoinseach &

Sa chomhad cumraíochta, tá fo-riachtanas `fromTo` :

Is é `en` an teanga foinseach, is é `zh ja ko de fr` sprioctheanga an aistriúcháin.

Cód teanga féach [i18n.site/i18/LANG_CODE](https://i18n.site/i18/LANG_CODE)

Mar shampla, más mian leat Sínis a aistriú go Béarla, athscríobh an líne seo `zh: en` .

Más mian leat aistriú go dtí gach teanga a dtacaítear leis, fág bán é tar éis `:` . mar shampla

```
i18n:
  fromTo:
    en:
```

Is féidir leat `fromTo` difriúil a chumrú le haghaidh : éagsúla /

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

Sa tábla cumraíochta seo, is é `zh` an teanga fhoinseach d’aistriúchán catalóg `blog` , agus is é `ja` teanga foinse aistriúcháin chatalóg `blog/your_file_name.md` .

### Íomhánna/Naisc Ilteangacha

Nuair a bheidh na URLanna sna pictiúir agus naisc in `replace:` agus `MarkDown` (agus tréithe `src` agus `href` leabaithe `HTML` ) cumraithe i `.i18n/conf.yml` leis an réimír seo, cuirfear cód teanga an aistriúcháin ( [teanga liosta cód](/i18/LANG_CODE) ).

Mar shampla, tá do chumraíocht mar seo a leanas:

```yml
i18n:
  fromTo:
    fr: ko de en zh zh-TW uk ru ja
  replace:
    https://fcdoc.github.io/img/ : ko de uk>ru zh-TW>zh >en
```

Is foclóir é `replace: ` , is é an eochair an réimír URL atá le hathsholáthar, agus is é an luach an riail athsholáthair.

Is é an bhrí atá le riail `ko de uk>ru zh-TW>zh >en` thuas a athsholáthar ná go n-úsáideann `ko de` an pictiúr dá chód teanga féin, úsáideann `zh-TW` agus `zh` pictiúr `zh` , úsáideann `uk` pictiúr `ru` , agus úsáideann teangacha eile (ar nós `ja` ) an pictiúr de `en` de réir réamhshocraithe.

Mar shampla, is é seo a leanas an comhad foinse Fraincis ( `fr` ) de `MarkDown` :

```md
![xx](https://i18n-img.github.io/fr/1.avif)
<video src="https://i18n-img.github.io/fr/1.mp4"></video>
[xx](https://i18n-img.github.io/fr/README.md)
<a style="color:red" href="https://i18n-img.github.io/fr/i18n.site.gz">xx</a>
```

Seo a leanas an comhad Béarla ( `en` ) aistrithe agus ginte :

```md
![xx](https://i18n-img.github.io/en/1.avif)
<video src="https://i18n-img.github.io/en/1.mp4"></video>
[xx](https://i18n-img.github.io/en/README.md)
<a style="color:red" href="https://i18n-img.github.io/en/i18n.site.gz">xx</a>
```

Anseo, cuirtear `/zh/` sa sprioctheanga in ionad `/en/` sa chód foinseach.

Tabhair faoi deara : Ní mór `/` a bheith ann roimh chód teanga an téacs athsholáthair san URL agus ina dhiaidh.

> [!TIP]
> Má tá `- /` cumraithe i `url:` , ní dhéanfar ach cosáin choibhneasta a mheaitseáil, ach ní dhéanfar URLanna a thosaíonn le `//` a mheaitseáil.
>
> Más mian le naisc áirithe ainm fearainn a chur in ionad agus nach bhfuil cuid acu ag iarraidh iad a athsholáthar, is féidir leat réimíreanna éagsúla a úsáid mar `[x](//x.com/en/)` agus `[x](https://x.com/en/)` chun iad a idirdhealú.

### Neamhaird a Dhéanamh Ar Chomhad

De réir réamhshocraithe, aistreofar gach comhad a thosaíonn le `.md` agus `.yml` san eolaire teanga foinse.

Más mian leat neamhaird a dhéanamh ar chomhaid áirithe agus gan iad a aistriú (cosúil le dréachtaí neamhchríochnaithe), is féidir leat é a chumrú leis an réimse `ignore` .

Úsáideann `ignore` an chomhréir [globset](https://docs.rs/globset/latest/globset/#syntax) leis an gcomhad `.gitignore` .

Mar shampla, ciallaíonn `_* ` sa chomhad cumraíochta thuas nach n-aistreofar comhaid a thosaíonn le `_` .

## Rialacha Aistriúcháin

### Níor Cheart D’eagarthóirí Aistriúcháin Línte a Chur Leis Nó a Scriosadh

Is féidir an t-aistriúchán a chur in eagar. Déan an buntéacs a mhodhnú agus meaisín-aistrithe arís é, ní dhéanfar na modhnuithe láimhe ar an aistriúchán a fhorscríobh (mura bhfuil an mhír seo den bhuntéacs athraithe).

> [!WARN]
> Ní mór comhfhreagras duine le duine a bheith idir línte an aistriúcháin agus an buntéacs. Is é sin, ná cuir nó scrios línte agus an t-aistriúchán á chur le chéile. Seachas sin, beidh sé ina chúis le mearbhall sa taisce eagarthóireacht aistriúcháin.

Má théann rud éigin mícheart, féach le do thoil do [na Ceisteanna Coitianta le haghaidh réitigh.](/i18/qa#H1)

### `YAML` Aistriúchán

Gheobhaidh an uirlis líne ordaithe gach comhad a chríochnaíonn le `.yml` san eolaire comhaid teanga foinse agus aistreoidh sé iad.

* Tabhair faoi deara go gcaithfidh iarmhír an chomhaid a bheith `.yml` (ní `.yaml` ).

Ní aistríonn an uirlis ach na luachanna foclóir i `.yml` , ní na heochracha foclóir.

Mar shampla `i18n/en/i18n.yml`

```
apiToken: API Token
defaultToken: Default Token
```

aistreofar é mar `i18n/zh/i18n.yml`

```
apiToken: 接口令牌
defaultToken: 默认令牌
```

Is féidir aistriúchán `YAML` a mhodhnú de láimh freisin (ach ná cuir nó scrios eochracha nó línte san aistriúchán).

Bunaithe ar `YAML` aistriúchán, is féidir leat réitigh idirnáisiúnta a thógáil go héasca do theangacha ríomhchlárúcháin éagsúla.

## Ardúsáid

### Fochomhadlann Aistriúcháin

Chomh fada agus a chruthaítear `.i18n/conf.yml` (ní gá tosú ó theimpléad tionscadail taispeána gach uair), oibreoidh `i18` go breá.

Gheobhaidh an uirlis líne ordaithe `.i18n/conf.yml` cumraíocht i ngach fochomhadlann agus aistreoidh sé iad.

Is féidir le tionscadail a úsáideann an ailtireacht [monorepo](//monorepo.tools) comhaid teanga a roinnt ina bhfochomhadlanna.

![](https://p.3ti.site/1719910016.avif)

### Eolaire Suiteála Saincheaptha

Déanfar é a shuiteáil go `/usr/local/bin` de réir réamhshocraithe.

Mura bhfuil cead scríofa ag `/usr/local/bin` déanfar é a shuiteáil in `~/.bin` .

Is féidir le hathróg timpeallacht socraithe `TO` an t-eolaire suiteála a shainiú, mar shampla :

```sh
TO=/bin sudo bash <(curl -sS https://i.i18n.site) i18
```