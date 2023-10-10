<h1 style="justify-content:space-between">3Ti.Siza · Cinga ngaphandle kwemida<img src="//i-01.eu.org/i18n/logo.svg" style="margin-top:-1px;width:42px"></h1>

I-3Ti.Site, isiza sokuvelisa esineelwimi ezininzi, singatolika iMarkdown ngokuzenzekelayo kwiilwimi [ezingaphezu kwekhulu ezahlukeneyo](https://github.com/i18n-site/node/blob/main/lang/src/index.js) .

<img src="//i-01.eu.org/i18n/lang.webp" alt="" />

Abanye abantu banokufuna ukubuza, ngoku ekubeni izikhangeli zinemisebenzi yoguqulo eyakhelwe-ngaphakathi, ngaba akuyomfuneko ukwenza iwebhusayithi ibe yeyamazwe ngamazwe?

Ndifuna ukuthi **kuphela ngokwazisa isayithi xa iyonke apho sinokuthi sixhase uphendlo lweelwimi ezininzi ezikwisayithi nokubhaliweyo okugcweleyo kunye nokwandisa injini yokukhangela** .

## Ulandelelwano

"IBhayibhile · Genesis":

> Abantu bamandulo babengahluli phakathi kweelwimi. Bazalwa benekratshi yaye bafuna ukwakha inqaba ende encopho ifikelela esibhakabhakeni.
> <blockquote><p>UThixo ke wakruquka kukukhukhumala komntu, wachithachitha yonke imiphefumlo ephilileyo ezindaweni ngeendawo, ukuba zingakwazi ukuqondana.</p></blockquote>
> <blockquote><p>Ukususela ngoko, bekunzima ukuba abantu banxibelelane, iingxabano ziye zaqhubeka, yaye ayikho iNqaba yeBhabheli ehlabathini.</p></blockquote>

Inoveli yentsomi yenzululwazi &quot;Imizimba emithathu&quot; (iphinyiso lesiTshayina: `3Ti` ) ivelisa impucuko yasemzini enxibelelana ngamaza ombane wombane, ayinamiqobo yolwimi, kwaye inempumelelo kubuchwepheshe.

Ndiyathemba ukuba ngoncedo lwesi sixhobo, abantu bomhlaba baya kuba njengabantu abanemizimba emithathu, unxibelelwano aluyi kuthintelwa lulwimi, kwaye lonke uluntu luya kumanyana kwakhona.

## Isifundo

## Umsebenzi Intshayelelo

### Gcina IFomati YeMarkdown

### Guqula Inguqulelo

Emva kokuguqula uguqulelo, kufuneka uphinde uqhube `./i18n.sh` ukuze uhlaziye i-cache.

### Amanqaku Enguqulelo

Izimvo zoguqulelo kufuneka zibonise ulwimi emva \```, njena ` ```rust` .

Okwangoku ixhasa ukuguqulelwa kwezimvo kumhlwa, c, cpp, java, js, ikofu, ipithon, kunye nebash.

Hlela i [-tran_md/src/comment.coffee](https://github.com/i18n-site/node/blob/main/tran_md/src/comment.coffee) ukongeza inkxaso yokuguqulela kumagqabantshintshi ngeelwimi ezininzi.

### Qwalasela Ummeli

Ukuseta okuguquguqukayo kwemo engqongileyo kuvumela iminxeba ye-API yeToliki kaGoogle ukuba idlule kummeli.

```bash
export https_proxy=http://127.0.0.1:7890
```

### Ukufakela Okuguquguqukayo

```
test: 测试变量<br 0>嵌入
```

### Khulula ICache

```bash
rm -rf .i18n/.cache
```
