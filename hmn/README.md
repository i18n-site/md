<h1 style="justify-content:space-between">3Ti.Site · Xav Tsis Muaj Ciam Teb<img src="//i-01.eu.org/i18n/logo.svg" style="margin-top:-1px;width:42px"></h1>

3Ti.Site, lub tshuab hluav taws xob ntau hom lus zoo li qub, tuaj yeem txhais Markdown rau [ntau tshaj li ib puas hom lus](https://github.com/i18n-site/node/blob/main/lang/src/index.js) .

<img src="//i-01.eu.org/i18n/lang.webp" alt="" />

Qee tus neeg yuav xav nug, tam sim no tias browsers muaj kev ua haujlwm hauv kev txhais lus, nws puas tsim nyog rau thoob ntiaj teb lub vev xaib?

Kuv xav hais tias **tsuas yog los ntawm kev nthuav dav thoob ntiaj teb tag nrho lub xaib tuaj yeem pab txhawb ntau hom lus hauv qhov chaw tshawb nrhiav thiab tshawb xyuas lub cav optimization** .

## Ib Ntus

"Bible · Chiv Keeb":

> Cov ancients tsis paub qhov txawv ntawm cov lus. Lawv yug los nrog kev khav theeb thiab xav ua ib tug pej thuam siab nrog rau saum ntuj.
>
> <blockquote><p>Vajtswv tsis txaus siab rau tus txiv neej txoj kev khav theeb, yog li ntawd nws thiaj ua rau txhua tus muaj sia nyob hauv ntau qhov chaw, tsis tuaj yeem nkag siab ib leeg.</p></blockquote>
>
> <blockquote><p>Txij thaum ntawd los, nws nyuaj rau tib neeg sib txuas lus, kev tsis sib haum xeeb tau txuas ntxiv mus, thiab tsis muaj Ntauwd ntawm Babel hauv ntiaj teb.</p></blockquote>

Cov ntawv tseeb tshiab &quot;Three-Lub Cev&quot; (Suav hais: `3Ti` ) fictionalizes ib tug neeg txawv teb chaws kev vam meej uas sib txuas lus los ntawm electromagnetic nthwv dej, tsis muaj lus teeb meem, thiab yog technologically vam meej.

Kuv vam tias nrog kev pab ntawm cov cuab yeej no, cov neeg hauv ntiaj teb yuav zoo li peb lub cev, kev sib txuas lus yuav tsis txwv los ntawm cov lus, thiab tag nrho cov noob neej yuav koom ua ke dua.

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
