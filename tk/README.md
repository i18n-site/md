<h1 style="justify-content:space-between">3Ti.Saýt · Serhetsiz pikir ediň<img src="//i-01.eu.org/i18n/logo.svg" style="margin-top:-1px;width:42px"></h1>

Köp dilli statiki saýt generatory 3Ti.Site Markdown-dan [ýüzden gowrak dürli dile](https://github.com/i18n-site/node/blob/main/lang/src/index.js) terjime edip biler.

<img src="//i-01.eu.org/i18n/lang.webp" alt="" />

Käbir adamlar soramak isläp bilerler, indi brauzerlerde içerki terjime funksiýalary bar, web sahypasyny halkaralaşdyrmak zerur dälmi?

**Diňe tutuş sahypany halkaralaşdyrmak arkaly köp dilli saýtda doly tekstli gözleg we gözleg motory optimizasiýasyny goldap boljakdygyny** aýtmak isleýärin.

## Yzygiderlilik

"Injil · Gelip çykyş":

> Gadymy döwürde dil bir bolanda adamzat buýsanç bilen dünýä inipdir. Olar beýik binany, asmana degen diň gurmaga synanyşdylar.
>
> Şeýle-de bolsa, tekepbirliklerinden göwnüne degen Taňry, adamlaryň ýer ýüzüne ýaýramagyna sebäp boldy we dillerini biri-birine düşünip bilmedi.
>
> Şondan bäri adamzat aragatnaşyk gurmak üçin göreşdi, gapma-garşylyklar tükeniksiz ýüze çykdy we dünýä asmana ýetýän diň görmedi.

Ylmy fantastika romany &quot;Üç beden&quot; (hytaýça aýdylyşy: `3Ti` ) elektromagnit tolkunlar arkaly aragatnaşyk saklaýan, dil päsgelçilikleri bolmadyk we tehnologiki taýdan gülläp ösýän keseki siwilizasiýany toslaýar.

Bu guralyň kömegi bilen ýer ýüzündäki adamlar üç bedenli adamlar ýaly bolar, aragatnaşyk dil bilen çäklendirilmez we bütin adamzat ýene birleşer diýip umyt edýärin.

## Tutorial

## Funksiýa Giriş

### Markdown Formatyny Saklaň

### Terjimäni Üýtgediň

Terjimäni üýtgedeniňizden soň, keş keşini täzelemek üçin `./i18n.sh` täzeden işlemeli.

### Terjime Bellikleri

Terjime düşündirişleri &quot; ` ```rust` &quot;-den soň dili görkezmeli.

Häzirki wagtda pos, c, cpp, java, js, kofe, piton we baş üçin düşündiriş terjimesini goldaýar.

Has köp dilde düşündirişler üçin terjime goldawyny goşmak üçin [tran_md / src / comment.coffee](https://github.com/i18n-site/node/blob/main/tran_md/src/comment.coffee) redaktirläň.

### Proksi Sazlaň

Aşakdaky gurşaw üýtgeýjilerini bellemek, Google Translate API jaňlaryna proksi arkaly geçmäge mümkinçilik berýär.

```bash
export https_proxy=http://127.0.0.1:7890
```

### Üýtgeýän Ornaşdyrmak

```
test: 测试变量<br 0>嵌入
```

### Keş Boş

```bash
rm -rf .i18n/.cache
```
