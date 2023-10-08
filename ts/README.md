# I18N.SITE · Matsalwa Lama Nga Riki Na Mindzilakano<img Src="//ok0.pw/5l" Style="float:right;width:42px;margin-Top:6px">

I18N.SITE, jeneretara ya sayiti leyi nga cinciki leyi seketelaka vuhundzuluxeri bya otomatiki eka [tindzimi ta 133 to hambana](https://github.com/i18n-site/node/blob/main/lang/src/index.js) .

![](https://i-01.eu.org/2023/09/O0Tee_m.webp)

Vanhu van’wana va nga ha lava ku vutisa, sweswi leswi ti- browser ti nga ni mintirho yo hundzuluxela leyi akiweke endzeni, xana a swi bohi ku endla leswaku webusayiti yi va ya matiko hinkwawo?

Ndzi lava ku vula leswaku **hi ku endla leswaku sayiti hinkwayo yi va ya matiko hinkwawo ntsena laha hi nga seketelaka ku lavisisa matsalwa hinkwawo ya le ndzeni ka sayiti ya tindzimi to tala ni ku antswisiwa ka njhini yo lavisisa** .

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
