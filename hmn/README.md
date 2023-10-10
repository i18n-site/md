<h1 style="justify-content:space-between">3Ti.Site · Xav Tsis Muaj Ciam Teb<img src="//i-01.eu.org/i18n/logo.svg" style="margin-top:-1px;width:42px"></h1>

3Ti.Site, lub tshuab hluav taws xob ntau hom lus zoo li qub, tuaj yeem txhais Markdown rau [ntau tshaj li ib puas hom lus](https://github.com/i18n-site/node/blob/main/lang/src/index.js) .

<img src="//i-01.eu.org/i18n/lang.webp" alt="" />

Qee tus neeg yuav nug, tam sim no tias browsers muaj cov haujlwm txhais lus ua haujlwm, puas yog qhov tsis tsim nyog rau kev nthuav tawm lub vev xaib?

Kuv xav hais tias **tsuas yog los ntawm kev nthuav dav thoob ntiaj teb tag nrho lub xaib tuaj yeem pab txhawb ntau hom lus hauv qhov chaw tshawb nrhiav thiab tshawb xyuas lub cav optimization** .

## Taw Qhia

Bible · Chiv Keeb :

> Nyob rau hauv ancient sij hawm, thaum hom lus yog ib tug, tib neeg tsim ib tug pej thuam mus txog saum ntuj ceeb tsheej, lub portal rau Vajtswv lub teb chaws, tshaj tawm lub hwj chim ntawm noob neej.
>
> Vajtswv hais tias, "Cov txiv neej sib sau ua ib pab neeg, nrog ib tus nplaig sib koom, thiab lub pej thuam no tsuas yog hais lus, tam sim no lawv ua tiav lawv lub siab nyiam, thiab yuav tsis muaj kev ntshai ntxiv lawm."
>
> Yog li ntawd, Tswv Ntuj tau nqis los, faib neeg mus rau lwm qhov chaw, siv ntau hom lus.
>
> Txij thaum ntawd los, tib neeg kev sib txuas lus tau dhau los ua nyuaj, kev sib cav tsis sib haum, thiab tsis muaj ib tug pej thuam uas kov saum ntuj ntxiv lawm.

Cov ntawv tseeb tshiab &quot;Three-Lub Cev&quot; (Suav hais: `3Ti` ) fictionalizes ib tug neeg txawv teb chaws kev vam meej uas sib txuas lus los ntawm electromagnetic nthwv dej, tsis muaj lus teeb meem, thiab yog technologically vam meej.

Kuv vam tias yuav tsim ib lub cuab yeej uas yuav pab kom cov neeg hauv ntiaj teb zoo li peb lub cev, sib txuas lus yam tsis muaj kev khi lus, thiab sib sau ua ke tag nrho noob neej dua.

## Kev Qhia

## Muaj Nuj Nqi Taw Qhia

### Khaws Markdown Format

### Hloov Kho Kev Txhais Lus

Tom qab hloov kho cov lus txhais, koj yuav tsum rov ua haujlwm `./i18n.sh` los hloov kho lub cache.

### Lus Txhais

Cov lus txhais lus yuav tsum qhia cov lus tom qab ``, xws li ` ```rust` .

Tam sim no txhawb cov lus txhais lus rau xeb, c, cpp, java, js, kas fes, python, thiab bash.

Kho kom raug [tran_md/src/comment.coffee](https://github.com/i18n-site/node/blob/main/tran_md/src/comment.coffee) ntxiv kev txhawb pab txhais lus rau cov lus hauv ntau hom lus.

### Configure Proxy

Teem cov kev hloov pauv ib puag ncig hauv qab no tso cai rau Google Txhais API hu mus dhau lub npe.

```bash
export https_proxy=http://127.0.0.1:7890
```

### Variable Embedding

```
test: 测试变量<br 0>嵌入
```

### Empty Lub Cache

```bash
rm -rf .i18n/.cache
```
