# I18N.SITE · Nwoma A Ɛnni Ahyeɛ<img Src="//ok0.pw/5l" Style="float:right;width:42px;margin-Top:6px">

I18N.SITE, static site generator a ɛboa nkyerɛase a ɛyɛ adwuma ankasa kɔ [kasa ahorow 133](https://github.com/i18n-site/node/blob/main/lang/src/index.js) mu .

![](https://i-01.eu.org/2023/09/O0Tee_m.webp)

Ebia nnipa binom bɛpɛ sɛ wobisa sɛ, afei a browser ahorow no wɔ nkyerɛase dwumadi ahorow a wɔde ahyɛ mu no, so ɛho nhia sɛ wɔde wɛbsaet no bɛyɛ amanaman ntam?

Mepɛ sɛ meka sɛ **ɛdenam amanaman ntam wɛbsaet no nyinaa a yɛde bɛyɛ amanaman ntam nkutoo so na yebetumi aboa kasa horow pii wɔ wɛbsaet no mu nsɛm nyinaa a wɔhwehwɛ ne nhwehwɛmu engine optimization** .

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

### Nsakrae A Wɔde Hyehyɛ Mu

```
test: 测试变量<br 0>嵌入
```

### Empty The Cache No Yɛ Nea Ɛda Mpan

```bash
rm -rf .i18n/.cache


```
