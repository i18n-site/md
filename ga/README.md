<h1 style="justify-content:space-between">3Ti.Site · Ná Smaoinigh ar Teorainneacha<img src="//i-01.eu.org/i18n/logo.svg" style="margin-top:-1px;width:42px"></h1>

Is féidir le 3Ti.Site, gineadóir suímh statach iltheangacha, Markdown a aistriú go huathoibríoch go [níos mó ná céad teanga éagsúla](https://github.com/i18n-site/node/blob/main/lang/src/index.js) .

<img src="//i-01.eu.org/i18n/lang.webp" alt="" />

B'fhéidir gur mhaith le roinnt daoine a fhiafraí, anois go bhfuil feidhmeanna aistriúcháin ionsuite ag brabhsálaithe, nach bhfuil gá leis an suíomh Gréasáin a idirnáisiúnú?

Ba mhaith liom a rá gur **trí idirnáisiúnú a dhéanamh ar an suíomh iomlán amháin is féidir linn tacaíocht a thabhairt do chuardaigh lán-théacs ilteangach ar an láthair agus leas iomlán a bhaint as inneall cuardaigh** .

## Seicheamh

"Bíobla·Genesis":

> Ní dhearna na seanóirí idirdhealú idir teangacha. Thóg siad túir a shroicheann an spéir chun geata Dé a bhaint amach chun gradam an chine dhaonna a chothú.
>
> Dúirt an Dia gur treibh dá gcuid féin iad daoine, leis an gcultúr agus na speicis chéanna. Níl ann ach túr a thógáil. Anois is féidir leat a chur i gcrích cibé rud is mian leat, agus ní bheidh ort a eagla.
>
> Ansin tháinig Dia agus scaip sé na daoine in áiteanna éagsúla, gan a bheith in ann a chéile a thuiscint.
>
> As sin amach, bhí an cine daonna ag streachailt le cumarsáid a dhéanamh, d'eascair coinbhleachtaí gan stad, agus ní fhaca an domhan túr a shroich na spéartha níos mó.

Déanann an t-úrscéal ficsean eolaíochta &quot;Three-Body&quot; (fuaimniú Síneach: `3Ti` ) sibhialtacht choimhthíoch a dhéanann cumarsáid trí thonnta leictreamaighnéadacha, nach bhfuil aon bhacainní teanga aici, agus atá rathúil ó thaobh na teicneolaíochta de.

Tá súil agam, le cabhair ón uirlis seo, go mbeidh daoine an domhain cosúil le daoine trí chorp, ní bheidh cumarsáid srianta ag teanga, agus beidh an cine daonna uile aontaithe arís.

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
