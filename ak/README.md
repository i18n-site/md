<h1 style="justify-content:space-between">3Ti.Site · Susuw sɛ Ahye biara nni hɔ<img src="//i-01.eu.org/i18n/logo.svg" style="margin-top:-1px;width:42px"></h1>

3Ti.Site, kasa ahorow pii static site generator, betumi akyerɛ Markdown ase ankasa akɔ [kasa ahorow bɛboro ɔha mu](https://github.com/i18n-site/node/blob/main/lang/src/index.js) .

<img src="//i-01.eu.org/i18n/lang.webp" alt="" />

Ebia nnipa binom bɛpɛ sɛ wobisa sɛ, afei a browser ahorow no wɔ nkyerɛase dwumadi ahorow a wɔde ahyɛ mu no, so ɛho nhia sɛ wɔde wɛbsaet no bɛyɛ amanaman ntam?

Mepɛ sɛ meka sɛ **ɛdenam amanaman ntam wɛbsaet no nyinaa a yɛde bɛyɛ amanaman ntam nkutoo so na yebetumi aboa kasa horow pii wɔ wɛbsaet no mu nsɛm nyinaa a wɔhwehwɛ ne nhwehwɛmu engine optimization** .

## Nnianimu

Bible · Genesis :

> Tete mmere mu, bere a na kasa horow yɛ biako no, adesamma sii abantenten bi a ɛkɔ soro, ɔpon a ɛkɔ Onyankopɔn ahenni mu, na wɔbɔɔ adesamma tumi ho dawuru.
>
> Onyankopɔn paee mu kae sɛ, "Mmarima ka bom sɛ abusuakuw biako, a wɔde tɛkrɛma a wɔkyɛ, na abantenten yi yɛ nnianim asɛm ara kwa. Afei wodu wɔn akɔnnɔ ho, na ehu biara nni hɔ bio."
>
> Enti, Onyankopɔn siane, ɔbɔɔ nnipa hwetee kɔɔ mmeae ahorow, de kasa ahorow dii dwuma.
>
> Efi saa bere no, nnipa nkitahodi bɛyɛɛ den, akasakasa nni awiei, na na abantenten biara nni hɔ a ɛka wim bio.

Nyansahu mu ayɛsɛm ayɛsɛm &quot;Three-Body&quot; (China kasa mu nsɛmfua din: `3Ti` ) yɛ ahɔho anibuei a ɛnam anyinam ahoɔden asorɔkye so di nkitaho, enni kasa mu akwanside biara, na ɛwɔ mfiridwuma mu yiyedi.

Mewɔ anidaso sɛ mɛbɔ adwinnade bi a ɛbɛma asase so nnipa atumi ayɛ sɛ nnipa a wɔwɔ nipadua abiɛsa, adi nkitaho a kasa nkyekyere wɔn, na ɛka adesamma nyinaa abom bio.

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
