<h1 style="justify-content:space-between">3Ti.Site · Ehleketa Ku Nga Ri Na Mindzilakano<img src="//i-01.eu.org/i18n/logo.svg" style="margin-top:-1px;width:42px"></h1>

3Ti.Site, jeneretara ya sayiti leyi nga cinciki ya tindzimi to tala, yi nga hundzuluxela hi ku tisungulela Markdown hi [tindzimi to tlula dzana to hambana](https://github.com/i18n-site/node/blob/main/lang/src/index.js) .

<img src="//i-01.eu.org/i18n/lang.webp" alt="" />

Vanhu van’wana va nga ha lava ku vutisa, sweswi leswi ti- browser ti nga ni mintirho yo hundzuluxela leyi akiweke endzeni, xana a swi bohi ku endla leswaku webusayiti yi va ya matiko hinkwawo?

Ndzi lava ku vula leswaku **hi ku endla leswaku sayiti hinkwayo yi va ya matiko hinkwawo ntsena laha hi nga seketelaka ku lavisisa matsalwa hinkwawo ya le ndzeni ka sayiti ya tindzimi to tala ni ku antswisiwa ka njhini yo lavisisa** .

## Xaxamela

"Bibele·Genesa".:

> Vanhu va khale a va nga hambanisi tindzimi. Va ake swihondzo leswi fikaka empfhukeni leswaku va fika enyangweni ya Xikwembu leswaku va tlakusa ndhuma ya rixaka ra vanhu.
>
> Xikwembu xi vule leswaku vanhu i rixaka ra vona, leri nga ni ndhavuko ni muxaka lowu fanaka. Ku aka xihondzo i xingheniso ntsena. Sweswi u nga hetisisa xin’wana ni xin’wana lexi u xi lavaka, naswona a wu nge vi na lexi u nga xi chavaka.
>
> Kutani Xikwembu xi ta xi hangalasa vanhu etindhawini to hambana-hambana, va nga swi koti ku twisisana.
>
> Ku sukela kwalaho, vanhu va lwile hi matimba ku vulavurisana, timholovo ti pfuke hi laha ku nga heriki naswona misava a yi nga ha voni xihondzo lexi fikaka ematilweni.

Novhele ya sayense ya ntsheketo ya &quot;Three-Body&quot; (Mavitanelo ya Xichayina: `3Ti` ) yi endla nhluvuko wa le handle lowu vulavulaka hi magandlati ya gezi, lowu nga riki na swihinga swa ririmi, naswona wu humelerile hi tlhelo ra thekinoloji.

Ndzi tshemba leswaku hi ku pfuniwa hi xitirho lexi, vanhu va misava va ta fana ni vanhu va mimiri yinharhu, ku vulavurisana a ku nge siveriwi hi ririmi, naswona vanhu hinkwavo va ta tlhela va va ni vun’we.

## Dyondzo

## Ntirho Xingheniso

### Hlayisa Xivumbeko Xa Markdown

### Cinca Vuhundzuluxeri

Endzhaku ko cinca vuhundzuluxeri, u fanele ku tlhela u tirhisa `./i18n.sh` ku pfuxeta cache.

### Tinhlamuselo Ta Vuhundzuluxeri

Mavonelo ya vuhundzuluxi ya lava ku kombisa ririmi endzhaku ka \```, ku fana na ` ```rust` .

Sweswi yi seketela vuhundzuluxi bya mavonelo ya rust, c, cpp, java, js, kofi, python, na bash.

Hlela [tran_md/src/comment.coffee](https://github.com/i18n-site/node/blob/main/tran_md/src/comment.coffee) ku engetela nseketelo wa vuhundzuluxi eka mavonelo hi tindzimi to tala.

### Hlela Vuyimeri

Ku veka swilo leswi landzelaka leswi cinca-cincaka swa mbango swi pfumelela swikombelo swa Google Translate API ku hundza eka vuyimeri.

```bash
export https_proxy=http://127.0.0.1:7890
```

### Ku Nghenisiwa Ka Swilo Leswi Cinca-Cincaka

```
test: 测试变量<br 0>嵌入
```

### Empty The Cache Leyi Nga Riki Na Nchumu

```bash
rm -rf .i18n/.cache
```
