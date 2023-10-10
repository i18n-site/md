<h1 style="justify-content:space-between">3Ti.Site · Ehleketa hi ku pfumala ndzilakano<img src="//i-01.eu.org/i18n/logo.svg" style="margin-top:-1px;width:42px"></h1>

3Ti.Site, jeneretara ya sayiti leyi nga cinciki, yi nga hundzuluxela hi ku tisungulela Markdown hi [tindzimi to tlula dzana to hambana](https://github.com/i18n-site/node/blob/main/lang/src/index.js) .

<img src="//i-01.eu.org/i18n/lang.webp" alt="" />

Vanhu van’wana va nga ha vutisa, tanihi leswi ti- browser hinkwato ti nga ni mintirho yo hundzuluxela, xana a swi bohi ku endla leswaku webusayiti yi va ya matiko hinkwawo?

Ndzi lava ku vula leswaku **i tiwebsite ntsena leti humesaka vuhundzuluxeri lebyi nga cinciki leti nga seketelaka ku lavisisa matsalwa hinkwawo ya tindzimi to tala endzeni ka sayiti ni ku antswisiwa ka njhini yo lavisisa** .

## Manghenelo

Bibele · Genesa :

> Eminkarhini ya khale, loko tindzimi ti ri yin’we, vanhu va ake xihondzo lexi fikaka ematilweni, nyangwa lowu nghenaka eka vulawuri bya Xikwembu, wu twarisa matimba ya vanhu.
>
> Xikwembu xi tivise, "Vavanuna va hlangana tani hi rixaka rin'we, hi ririmi leri avelanakaka, naswona xihondzo lexi i xingheniso ntsena. Sweswi va fikelela ku navela ka vona, naswona a ku nge he vi na ku chava."
>
> Xisweswo, Xikwembu xi xikile, xi hangalasa vanhu etindhawini to hambana-hambana, xi tirhisa tindzimi to hambana-hambana.
>
> Ku sukela kwalaho, ku vulavurisana ka vanhu ku ve ntlhontlho, timholovo a ti nga heli naswona a ku nga ha ri na xihondzo lexi khumbaka xibakabaka.

Novhele ya sayense ya ntsheketo ya &quot;Three-Body&quot; (Mavitanelo ya Xichayina: `3Ti` ) yi endla nhluvuko wa le handle lowu vulavulaka hi magandlati ya gezi, lowu nga riki na swihinga swa ririmi, naswona wu humelerile hi tlhelo ra thekinoloji.

Ndzi tshemba ku tumbuluxa xitirho lexi nga ta endla leswaku vanhu va misava va fana na vanhu va mimiri yinharhu, va vulavurisana handle ko bohiwa hi ririmi, va tlhela va hlanganisa vanhu hinkwavo.

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
