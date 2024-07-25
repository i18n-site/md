# Suiteáil Agus Úsáid

## Suiteáil windows Ar Dtús git bash

windows [`git bash`](https://git-scm.com/download/win)

Rith oibríochtaí ina dhiaidh sin i `git bash`

## Suiteáil

```sh
bash <(curl -sS https://i.i18n.site) i18
```

### Cumraigh Comhartha Aistriúcháin

Tabhair cuairt ar [i18n.site/token](//i18n.site/token) Cliceáil chun an comhartha a chóipeáil

<img src="https://p.3ti.site/1719911689.avif" style="max-width:400px">

Cruthaigh `~/.config/i18n.site.yml` greamaigh an t-ábhar cóipeáilte isteach ann, is é seo a leanas an t-ábhar:

```
token: YOUR_API_TOKEN
```

Ina theannta sin, ní mór duit cárta creidmheasa [i18n.site/payBill](//i18n.site/payBill) cheangal le haghaidh íocaíochta (níl aon athmhuirear ag teastáil, asbhainfidh an láithreán gréasáin táillí go huathoibríoch de réir úsáide, [féach ar an leathanach baile le haghaidh praghsála](/#price) ).

## Úsáid

### Tionscadal Taispeána

`i18` tagairt le do thoil don tionscadal taispeána chun cumraíocht an aistriúcháin a fhoghlaim [github.com/i18n-site/demo.i18](//github.com/i18n-site/demo.i18)

Is féidir le húsáideoirí sa tSín Clón [atomgit.com/i18n/demo.i18](//atomgit.com/i18n/demo.i18)

Tar éis clónáil, cuir isteach an t-eolaire agus rith `i18` chun an t-aistriúchán a chríochnú.

### Struchtúr Eolaire

Seo a leanas an struchtúr eolaire stórais teimpléid

```
┌── .i18n
│  └── conf.yml
└── en
   ├── _IgnoreDemoFile.md
   ├── i18n.yml
   └── README.md
```

Tá na comhaid taispeána aistrithe san eolaire `en`

### Rith Aistriúcháin

Cuir isteach an t-eolaire agus rith `i18`

### Cuir Comhaid Leis an Stór

Chomh maith le haistriúchán, ginfidh an clár na comhaid seo a leanas freisin, le do thoil iad a chur leis an stór.

```
.i18n/hash
.i18n/cache/.gitignore
```

Ina measc , : é an t-ábhar `.i18n/cache/.gitignore`

```
**/*
!**/.gitignore
```

Ciallaíonn sé seo neamhaird a dhéanamh ar gach comhad san `.i18n/cache/` (seachas `.i18n/cache/.gitignore` ).

Mura bhfuil do bhogearraí rialaithe leagan `git` déan neamhaird de de réir na cumraíochta seo.

## Comhad Cumraíochta

`.i18n/conf.yml` Is é an comhad cumraíochta den uirlis aistriúcháin `i18` line

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

Sa chomhad cumraíochta, tá na fo-ailt de `fromTo`

Is í `en` an teanga foinseach, is í `zh ja ko de fr` sprioctheanga an aistriúcháin.

Cód teanga féach [i18n.site/i18/LANG_CODE](https://i18n.site/i18/LANG_CODE)

Mar shampla, más mian leat Sínis a aistriú go Béarla, athscríobh an líne seo `zh: en`

Más mian leat aistriú go dtí na teangacha go léir a dtacaítear leo, fág bán i ndiaidh `:` mar shampla

```
i18n:
  fromTo:
    en:
```

### Neamhaird a Dhéanamh Ar Chomhad

De réir réamhshocraithe, aistreofar gach comhad a thosaíonn le `.md` agus `.yml` san eolaire teanga foinse.

Más mian leat neamhaird a dhéanamh ar chomhaid áirithe agus gan iad a aistriú (ar nós dréachtaí neamhchríochnaithe), is féidir leat cumraíocht an réimse `ignore`

Úsáideann `ignore` comhréir cosúil le `.gitignore` [globset](https://docs.rs/globset/latest/globset/#syntax)

Mar shampla, sa chomhad cumraíochta thuas `_* ` ciallaíonn sé nach mbeidh comhaid ag tosú le `_` a aistriú.

## Rialacha Aistriúcháin

### Níor Cheart D’eagarthóirí Aistriúcháin Línte a Chur Leis Nó a Scriosadh

Is féidir an t-aistriúchán a chur in eagar. Athraigh an buntéacs agus meaisín-aistrithe arís é, ní dhéanfar na modhnuithe láimhe ar an aistriúchán a fhorscríobh (mura bhfuil an mhír seo den bhuntéacs athraithe).

Ach tabhair faoi deara, le do thoil, go gcaithfidh línte an aistriúcháin agus an buntéacs freagairt duine le duine. Is é sin, ná cuir nó scrios línte agus an t-aistriúchán á chur le chéile. Seachas sin, beidh sé ina chúis le mearbhall sa taisce eagarthóireacht aistriúcháin.

Má théann rud éigin mícheart, féach le do thoil do [na Ceisteanna Coitianta le haghaidh réitigh.](/i18/qa#H1)

### `Yaml`

Gheobhaidh an uirlis líne ordaithe gach comhad a chríochnaíonn le `.yml` san eolaire comhad teanga foinse agus aistreoidh sé iad.

* Tabhair faoi deara go gcaithfidh iarmhír an chomhaid a bheith `.yml` ( ní `.yaml` ).

Ní aistríonn an uirlis ach luachanna an fhoclóra i `.yml`

mar shampla `i18n/en/i18n.yml`

```
apiToken: API Token
defaultToken: Default Token
```

aistreofar mar `i18n/zh/i18n.yml`

```
apiToken: 接口令牌
defaultToken: 默认令牌
```

Is féidir an t-aistriúchán ar `YAML` a mhodhnú de láimh freisin (ach ná cuir nó scrios eochracha nó línte san aistriúchán).

Bunaithe ar `YAML` Aistriúchán, is féidir leat réitigh idirnáisiúnta a thógáil go héasca do theangacha éagsúla ríomhchlárúcháin.

## Ardúsáid

### Fochomhadlann Aistriúcháin

Chomh fada agus a chruthaíonn tú `.i18n/conf.yml` (ní gá tosú ó theimpléad an tionscadail taispeána gach uair), oibreoidh `i18` go breá.

Gheobhaidh an uirlis líne ordaithe cumraíocht `.i18n/conf.yml` i ngach fochomhadlann agus aistreoidh sí é.

Is féidir le tionscadail a úsáideann an ailtireacht [monorepo](//monorepo.tools) comhaid teanga a roinnt ina bhfochomhadlanna.

<img alt="" src="https://p.3ti.site/1719910016.avif">

### Eolaire Suiteála Saincheaptha

Déanfar é a shuiteáil go `/usr/local/bin`

`/usr/local/bin` bhfuil cead scríofa agat déanfar é a shuiteáil chuig `~/.bin` .

Socraigh athróga timpeallachta `TO` Is féidir leat an t-eolaire suiteála a shainiú, mar shampla :

```sh
TO=/bin sudo bash <(curl -sS https://i.i18n.site) i18
```
