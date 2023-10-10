<h1 style="justify-content:space-between">3Ti.Site · Ukucinga Ngaphandle kwemida<img src="//i-01.eu.org/i18n/logo.svg" style="margin-top:-1px;width:42px"></h1>

I-3Ti.Site, isiza sokuvelisa esineelwimi ezininzi, singatolika iMarkdown ngokuzenzekelayo kwiilwimi [ezingaphezu kwekhulu ezahlukeneyo](https://github.com/i18n-site/node/blob/main/lang/src/index.js) .

<img src="//i-01.eu.org/i18n/lang.webp" alt="" />

Abanye abantu banokufuna ukubuza, ngoku ekubeni izikhangeli zinemisebenzi yoguqulo eyakhelwe-ngaphakathi, ngaba akuyomfuneko ukwenza iwebhusayithi ibe yeyamazwe ngamazwe?

Ndifuna ukuthi **kuphela ngokwazisa isayithi xa iyonke apho sinokuthi sixhase uphendlo lweelwimi ezininzi ezikwisayithi nokubhaliweyo okugcweleyo kunye nokwandisa injini yokukhangela** .

## Intshayelelo

IBhayibhile · Genesis :

> Mandulo, xa iilwimi zazinye, abantu babesakha inqaba efikelela emazulwini, isango lolawulo lukaThixo, bevakalisa amandla oluntu.
>
> UThixo wathi, “Abantu bamanyene njengesizwe esinye, bethetha ulwimi olumanyeneyo, yaye le nqaba iyintshayelelo. Ngoku bayawufeza umnqweno wabo, yaye akusayi kubakho loyiko.”
>
> Ngaloo ndlela, uThixo wehla, wabachithachitha abantu kwiimbombo ezahlukahlukeneyo, esebenzisa iilwimi ezahlukahlukeneyo.
>
> Ukususela ngoko, unxibelelwano lwabantu lwaba lucelomngeni, iingxabano azipheli, yaye akuzange kuphinde kubekho nqaba ichukumisa isibhakabhaka.

Inoveli yentsomi yenzululwazi &quot;Imizimba emithathu&quot; (iphinyiso lesiTshayina: `3Ti` ) ivelisa impucuko yasemzini enxibelelana ngamaza ombane wombane, ayinamiqobo yolwimi, kwaye inempumelelo kubuchwepheshe.

Ndinethemba lokudala isixhobo esiya kwenza ukuba abantu bomhlaba babe njengabantu abanemizimba emithathu, banxibelelane ngaphandle kokubotshwa lulwimi, baze baphinde bamanyanise lonke uluntu.

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
