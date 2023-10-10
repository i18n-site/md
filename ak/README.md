<h1 style="justify-content:space-between">3Ti.Site · Susuw sɛ Ahye biara nni hɔ<img src="//i-01.eu.org/i18n/logo.svg" style="margin-top:-1px;width:42px"></h1>

3Ti.Site, kasa ahorow pii static site generator, betumi akyerɛ Markdown ase ankasa akɔ [kasa ahorow bɛboro ɔha mu](https://github.com/i18n-site/node/blob/main/lang/src/index.js) .

<img src="//i-01.eu.org/i18n/lang.webp" alt="" />

Ebia nnipa binom bɛpɛ sɛ wobisa sɛ, afei a browser ahorow no wɔ nkyerɛase dwumadi ahorow a wɔde ahyɛ mu no, so ɛho nhia sɛ wɔde wɛbsaet no bɛyɛ amanaman ntam?

Mepɛ sɛ meka sɛ **ɛdenam amanaman ntam wɛbsaet no nyinaa a yɛde bɛyɛ amanaman ntam nkutoo so na yebetumi aboa kasa horow pii wɔ wɛbsaet no mu nsɛm nyinaa a wɔhwehwɛ ne nhwehwɛmu engine optimization** .

## Ntoasoɔ

"Bible·Genesis":

> Tetefo no anhu nsonsonoe a ɛda kasa ahorow ntam. Wosisii abantenten a ɛkɔ soro kodu Onyankopɔn pon ano de hyɛɛ adesamma abusua no anuonyam ho nkuran.
>
> Onyankopɔn kae sɛ nnipa yɛ wɔn ankasa abusuakuw, a wɔn amammerɛ ne wɔn su koro. Abantenten a wobesi no yɛ nnianim asɛm ara kwa. Seesei wubetumi ayɛ nea wopɛ biara, na worensuro hwee.
>
> Afei Onyankopɔn baa hɔ bɛbɔɔ nnipa no apete mmeae ahorow, na wɔantumi ante wɔn ho wɔn ho ase.
>
> Efi saa bere no, adesamma bɔɔ mmɔden sɛ wɔbɛbɔ nkɔmmɔ, ntawntawdi sɔree a enni awiei, na wiase no anhu abantenten a ɛkɔ soro bio.

Nyansahu mu ayɛsɛm ayɛsɛm &quot;Three-Body&quot; (China kasa mu nsɛmfua din: `3Ti` ) yɛ ahɔho anibuei a ɛnam anyinam ahoɔden asorɔkye so di nkitaho, enni kasa mu akwanside biara, na ɛwɔ mfiridwuma mu yiyedi.

Mewɔ anidaso sɛ ɛdenam adwinnade yi mmoa so no, asase so nnipa bɛyɛ sɛ nnipa a wɔwɔ nipadua abiɛsa, kasa rensiw nkitahodi ano, na adesamma nyinaa ayɛ biako bio.

## Nkyerɛkyerɛmu

## Dwumadie Nnianim Asɛm

### Fa Markdown Format No Sie

### Sesa Nkyerɛase No

Sɛ wo sesa nkyerɛase no wie a, ɛsɛ sɛ wosan yɛ `./i18n.sh` na ama woayɛ cache no foforo.

### Nkyerɛaseɛ Nsɛm A Wɔakyerɛw

Ɛsɛ sɛ nkyerɛaseɛ nsɛm kyerɛ kasa a ɛwɔ \``` akyi, te sɛ ` ```rust` .

Mprempren ɛboa nsɛm nkyerɛase ma rust, c, cpp, java, js, kɔfe, python, ne bash.

Sesa [tran_md/src/comment.coffee](https://github.com/i18n-site/node/blob/main/tran_md/src/comment.coffee) na fa nkyerɛaseɛ mmoa ka ho ma nsɛm a wɔka wɔ kasa pii mu.

### Hyehyɛ Proxy No

Sɛ wohyehyɛ nneɛma a atwa yɛn ho ahyia a edidi so yi a, ɛma Google Translate API frɛ no fa proxy no mu.

```bash
export https_proxy=http://127.0.0.1:7890
```

### Nsakraeɛ A Wɔde Hyehyɛ Mu

```
test: 测试变量<br 0>嵌入
```

### Empty The Cache No Yɛ Nea Ɛda Mpan

```bash
rm -rf .i18n/.cache
```
