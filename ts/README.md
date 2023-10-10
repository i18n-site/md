<h1 style="justify-content:space-between">3Ti.Site · Ehleketa handle ka mindzilakano<img src="//i-01.eu.org/i18n/logo.svg" style="margin-top:-1px;width:42px"></h1>

3Ti.Site, jeneretara ya sayiti leyi nga cinciki ya tindzimi to tala, yi nga hundzuluxela hi ku tisungulela Markdown hi [tindzimi to tlula dzana to hambana](https://github.com/i18n-site/node/blob/main/lang/src/index.js) .

<img src="//i-01.eu.org/i18n/lang.webp" alt="" />

Vanhu van’wana va nga ha lava ku vutisa, sweswi leswi ti- browser ti nga ni mintirho yo hundzuluxela leyi akiweke endzeni, xana a swi bohi ku endla leswaku webusayiti yi va ya matiko hinkwawo?

Ndzi lava ku vula leswaku **hi ku endla leswaku sayiti hinkwayo yi va ya matiko hinkwawo ntsena laha hi nga seketelaka ku lavisisa matsalwa hinkwawo ya le ndzeni ka sayiti ya tindzimi to tala ni ku antswisiwa ka njhini yo lavisisa** .

## Xaxamela

"Bibele·Genesa".:

> Vanhu va khale a va nga hambanisi tindzimi. Va velekiwe va tikukumuxa naswona a va lava ku aka xihondzo xo leha lexi nhlohlorhi ya xona yi fikaka empfhukeni.
> <blockquote><p>Xikwembu a xi nga tsakeriwi hi ku tikukumuxa ka munhu, kutani xi hangalase swivumbiwa hinkwaswo leswi hanyaka etindhawini to hambana-hambana, swi nga swi koti ku twisisana.</p></blockquote>
> <blockquote><p>Ku sukela kwalaho, a swi tika eka vanhu ku vulavurisana, timholovo ti ye emahlweni naswona a ku na Xihondzo xa Babele emisaveni.</p></blockquote>

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
