<h1 style="justify-content:space-between">3Ti.Site · Ná Smaoinigh ar Teorainneacha<img src="//i-01.eu.org/i18n/logo.svg" style="margin-top:-1px;width:42px"></h1>

Is féidir le 3Ti.Site, gineadóir suímh statach iltheangacha, Markdown a aistriú go huathoibríoch go [níos mó ná céad teanga éagsúla](https://github.com/i18n-site/node/blob/main/lang/src/index.js) .

<img src="//i-01.eu.org/i18n/lang.webp" alt="" />

B'fhéidir gur mhaith le roinnt daoine a fhiafraí, anois go bhfuil feidhmeanna aistriúcháin ionsuite ag brabhsálaithe, nach bhfuil gá leis an suíomh Gréasáin a idirnáisiúnú?

Ba mhaith liom a rá gur **trí idirnáisiúnú a dhéanamh ar an suíomh iomlán amháin is féidir linn tacaíocht a thabhairt do chuardaigh lán-théacs ilteangach ar an láthair agus leas iomlán a bhaint as inneall cuardaigh** .

## Seicheamh

Bíobla · Geineasas :

> Sa tseanaimsir, nuair a bhí teangacha ina gceann, thóg an chine daonna túr a shroich na flaithis, tairseach chuig fearann ​​Dé, ag fógairt neart an chine daonna.
>
> Dhearbhaigh Dia, "Aontaíonn fir mar aon treibh amháin, le teanga roinnte, agus níl sa túr seo ach réamhrá. Anois baineann siad a mhian amach, agus ní bheidh aon urraim fós."
>
> Mar sin, shliocht Dia, daoine a scaipeadh go coirnéil éagsúla, úsáid teangacha éagsúla.
>
> As sin amach, d’éirigh an chumarsáid dhaonna dúshlánach, níor tháinig deireadh le díospóidí, agus ní raibh túr a bhain leis an spéir níos mó.

Déanann an t-úrscéal ficsean eolaíochta &quot;Three-Body&quot; (fuaimniú Síneach: `3Ti` ) sibhialtacht choimhthíoch a dhéanann cumarsáid trí thonnta leictreamaighnéadacha, nach bhfuil aon bhacainní teanga aici, agus atá rathúil ó thaobh na teicneolaíochta de.

Tá súil agam uirlis a chruthú a chuirfidh ar chumas mhuintir an domhain a bheith cosúil le daoine trí chorp, cumarsáid a dhéanamh gan a bheith faoi cheangal teanga, agus an cine daonna go léir a aontú arís.

## Teagaisc

## Feidhm Réamhrá

### Coinnigh Formáid Markdown

### Athraigh Aistriúchán

Tar éis an t-aistriúchán a mhodhnú, ní mór duit `./i18n.sh` a ath-reáchtáil chun an taisce a nuashonrú.

### Nótaí Aistriúcháin

Ní mór do thuairimí aistriúcháin an teanga a chur in iúl i ndiaidh \```, mar shampla ` ```rust` .

Faoi láthair tacaíonn aistriúchán tráchta le meirge, c, cpp, java, js, caife, python, agus bash.

Cuir [tran_md/src/comment.coffee](https://github.com/i18n-site/node/blob/main/tran_md/src/comment.coffee) in eagar chun tacaíocht aistriúcháin a chur leis le haghaidh tuairimí i níos mó teangacha.

### Cumraigh Seachfhreastalaí

Má shocraítear na hathróga timpeallachta seo a leanas, is féidir le glaonna API Google Translate dul tríd an seachfhreastalaí.

```bash
export https_proxy=http://127.0.0.1:7890
```

### Leabú Athróg

```
test: 测试变量<br 0>嵌入
```

### Folmhaigh An Taisce

```bash
rm -rf .i18n/.cache
```
