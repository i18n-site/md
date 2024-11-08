# .i18n/conf.yml

Nsiesiei fael a ɛwɔ `i18n.site` no yɛ `.i18n/conf.yml` na emu nsɛm no te sɛ nea edidi so yi :

```yaml
i18n:
  fromTo:
    en:
upload:
  ext:
    - md
nav:
  - i18n: home
    use: Toc
    url: /
  - i18n: doc
    menu: NB demo1,demo2
    use: Doc
  - i18n: blog
    use: Blog
addon:
  - i18n.addon/toc
```

Wɔn mu no, `upload` kosi `ext:` nhyehyɛe ade kyerɛ sɛ `.md` pɛ na wɔde bɛto so bere a wɔretintim no.

## Soro Akwantuo nav

`nav:` nhyehyeɛ a wɔpaw, a ɛne akwantuo menu a ɛwɔ homepage no atifi no hyia.

<img src="//p.3ti.site/1721051426.avif" style="width:320px">

Wɔn mu no, `i18n: home` ne `home: Home` wɔ `en/i18n.yml` mu (beae a `en` yɛ adwuma no nkyerɛaseɛ kasa fibea).

`en/i18n.yml` content yɛ nkyerɛwee a wɔda no adi wɔ navigation menu no mu, a wɔbɛkyerɛ ase sɛnea `fromTo` te wɔ nhyehyɛe no mu, sɛ nhwɛso no, wɔakyerɛ ase akɔ `zh/i18n.yml` .

<img src="//p.3ti.site/1721051689.avif" style="width:320px">

Sɛ wowie nkyerɛaseɛ no a, wobɛtumi asesa nkyerɛaseɛ `yml` boɔ, nanso mfa nkyerɛaseɛ `yml` safoa no nka ho anaa mpopa.

### `use: Toc` Template a Ɛwɔ Outline

`nav` :

```
  - i18n: home
    use: Toc
    url: /
```

`use: Toc` kyerɛ sɛ wɔde `Toc` template bedi dwuma, a ɛyɛ `Markdown` template biako a wɔde render.

`TOC` yɛ `Table of Contents` tiawa.Sɛ wɔkyerɛ saa nsusuwso yi ase a, wɔbɛda fael `Markdown` yi nsusuwii adi wɔ nkyɛnkyɛn no mu.

`url:` gyina hɔ ma fael kwan a ɛyɛ `Markdown` ( `/` ne root directory `/README.md` hyia, fael din yi hwehwɛ sɛ wɔde nkyerɛwde akɛse a edi kan ne nkyerɛwde nketewa a wɔde di akyi).

### `use: Md` Nsusuwso a Enni Nkyerɛkyerɛmu

`Md` template ne `Toc` template no yɛ pɛ na wɔde abien no nyinaa di dwuma de kyerɛ `Markdown` fael biako. Nanso `Md` template no nkyerɛ outline no wɔ sidebar no mu.

Wubetumi asesa `use: Toc` wɔ atifi hɔ nhyehyeɛ no mu akɔ `use: Md` , ayɛ `i18n.site` wɔ `md` daerekta no mu bio, na afei woakɔ nkɔsoɔ nhwɛsoɔ URL no so akɔhwɛ nsakraeɛ a ɛwɔ homepage no so.

### `use: Blog` Blog Nhwɛsode Ahorow

Blog nsusuwso no kyerɛ nsɛm a wɔahyehyɛ (asɛmti ne nsɛm a wɔabɔ no mua) nnidiso nnidiso sɛnea bere a wɔde tintimii no te.

[→ Klik ha na sua nhyehyɛe pɔtee no ho ade](/i18n.site/conf/blog)

### 0Fael Nkrataa Nsusuwso `use: Doc`

Wɔ nhyehyɛe fael no mu no:

```
  - i18n: doc
    menu: NB demo1,demo2
    use: Doc
```

Kyerɛ sɛ wode `Doc` redi dwuma ama template rendering.

`Doc` template boa sɛ wɔde `MarkDown` pii bɛka abom de ayɛ nkrataa nkyerɛkyerɛmu ama nnwuma biako anaa pii.

#### Nnwuma Pii Ne Fael Ahorow Pii

Nsiesiei a ɛwɔ `.i18n/conf.yml` wɔ `i18n:doc` mu no yɛ multi-project multi-file rendering mode.

Ɛha yi, `menu: NB demo1,demo2` , kyerɛ sɛ wode `NB` template no bedi dwuma de akyerɛ drop-down menu no.

<img src="//p.3ti.site/1721275191.avif" width="320px">

`NB` , a ɛyɛ `Name Breif` tiawa no kyerɛ sɛ menu a ɛba fam no betumi akyerɛ adwuma no din ne asɛmti.

`NB` akyi no, parameter `demo1,demo2` a wɔde kɔ no.

Hyɛ no : ** Ɛnsɛ sɛ ahunmu ** biara wɔ hɔ ansa na koma `,` wɔ `demo1,demo2` mu ne akyi .

Directory index fael a ɛne no hyia ma atifi hɔ parameters no ne:

* `en/demo1/TOC`
* `en/demo2/TOC`

#### Single Project Fael Ahorow Pii

Sɛ wowɔ adwuma biako pɛ a, wubetumi asiesie no sɛnea edidi so yi.

```
  - i18n: doc
    url: flashduty
    use: Doc
```

> [!WARN]
> Project baako a fael pii wom no ntumi nhyehyɛ `url` sɛ ntini kwan `/`
> Sɛ __conf.yml → nav:__ Wɔanhyehyɛ ntini kwan biara a, sɛ worekɔ wɛbsaet no homepage no so a, wɔbɛsan akyerɛw no ankasa akɔ URL a edi kan no so wɔ `nav:` nhyehyɛe no ase.
> Saa nhyehyeɛ yi ne sɛ ɛbɛma nsonsonoeɛ a ɛda adwuma no ho nkrataa, blog ne nneɛma foforɔ ntam yie denam directories so.
> Wɔkamfo kyerɛ sɛ wode fael biako ne kratafa biako bedi dwuma sɛ home page.

> [!TIP]
> Sɛ wɔankyerɛw `url` a, `url` default to the value of `i18n` Saa mmara yi nso di dwuma ma template afoforo.

#### TOC Nsɛm a Ɛwɔ Pon So Index

Sɛ wɔma template `use: Doc` yɛ adwuma wɔ nhyehyeɛ no mu a, yɛsrɛ wo ma plug-in `i18n.addon/toc` yɛ adwuma wɔ `.i18n/conf.yml` Nsiesiei no te sɛ deɛ ɛdidi soɔ yi :

```yml
addon:
  - i18n.addon/toc
```

`i18n.site` bɛ instɔl na ayɛ saa plug-in yi ankasa, akenkan `TOC` directory index fael no, na ayɛ `json` directory outline no.

Sɛ ɛyɛ adwuma baako a fael pii wom a, ntini daerekta `TOC` yɛ daerekta a ɛne `url:` hyia wɔ kasa fibea kyerɛwtohɔ no mu Sɛ nhwɛso no, sɛ fibea kasa no yɛ China kasa a: fael a ɛne `url: flashduty` hyia no yɛ `zh/flashduty/TOC` .

Sɛ ɛyɛ nnwuma pii ne fael pii a, ɛho nhia sɛ wobɛhyehyɛ `url:` Ntini daerekta a ɛwɔ `TOC` no yɛ daerekta a ɛne bo a ɛsom `i18n` hyia.

##### Nsɛm a Ɛwɔ Mu Ho Nkyerɛkyerɛmu a Ɛkɔ Akyiri

`en/blog/TOC` a ɛwɔ mu no te sɛ nea edidi so yi :

```
README.md

news/README.md
  news/begin.md
```

##### Fa Indentation Kyerɛ Levels

`README.md` a ɛwɔ `en/blog/TOC` a ɛwɔ soro no fã a edi kan no ne `i18n.site` a ɛwɔ mfonini a ɛwɔ ase ha no mu no hyia, a ɛyɛ adwuma no din.

Ntrɛwmu abien a edi hɔ no te sɛ nea wɔakyerɛ wɔ screenshot a ɛwɔ ase ha no mu.

<img src="https://p.3ti.site/1721097381.avif" style="width:320px">

`news/README.md` ne `News` , .
`news/begin.md` ne `Our Product is Online !` hyia

Wɔde fael `TOC` ahyɛ mu de akyerɛ abusuabɔ a ɛwɔ nkyerɛwde no mu, ɛboa nkyerɛwde a ɛwɔ sorosoro pii, ne nkyerɛwde a wɔde `# ` fi ase.

##### Ɔwofoɔ Level No Kyerɛw Asɛmti No Nko Ara, Na Ɛnyɛ Emu Nsɛm No.

Sɛ indentation level ahodoɔ pii wɔ hɔ a, ɔwofoɔ level no kyerɛw asɛmti no nko ara na ɛnyɛ emu nsɛm no. Sɛ ɛnte saa a, typography bɛyɛ basaa.

##### Dwumadie No README.md

Wobetumi akyerɛw emu nsɛm no wɔ ade `README.md` te sɛ `en/demo2/README.md` mu .

Hyɛ no nsow sɛ fael yi mu nsɛm nkyerɛ emu nsɛm a wɔahyehyɛ, enti wɔkamfo kyerɛ sɛ wobɛto ne tenten ano hye na woakyerɛw nnianim asɛm tiawa.

###### Dwumadie No Asɛmti

Wubetumi ahu sɛ `Deme Two` wɔ ne project tagline wɔ drop-down menu ne catalog outline project din `Your Project slogan` ase :

![](https://p.3ti.site/1721276842.avif)

Eyi ne `en/demo2/README.md` row a edi kan no hyia :

```
# Demo Two : Your Project slogan
```

Wɔbɛbu nsɛm a ɛwɔ adwuma `README.md` no asɛmti a ɛdi kan no akyi kɔla `:` a ɛdi kan no sɛ adwuma no asɛmti.

Wɔn a wɔde di dwuma a wofi China, Japan ne Korea, yɛsrɛ sɛ hyɛ no nsow sɛ ɛsɛ sɛ wode colon `:` a ne trɛw yɛ fã di dwuma sen sɛ wode colon a ne trɛw nyinaa bedi dwuma.

##### Ɔkwan Bɛn So Na Wobetumi De TOC Akɔ Baabi Foforo Wɔ Dodow Mu?

`TOC` fael hia sɛ wɔde gu fibea kasa no directory mu.

Sɛ nhwɛso no, sɛ kasa a wɔde fi mu no yɛ China kasa a, ɛnde `TOC` a ɛwɔ atifi hɔ no yɛ `zh/blog/TOC` .

Sɛ wɔsesa kasa a ɛfiri mu ba a, ɛhia sɛ wo batch move fael `TOC` a ɛwɔ kasa pɔtee bi mu wɔ adwuma no mu kɔ kasa foforɔ mu.

Wubetumi ahwɛ ahyɛde ahorow a edidi so yi so:

```
rsync -av --remove-source-files --include='*/' \
--include='TOC' --exclude='*' en/ zh/
```

Yɛsrɛ wo sesa `en/` ne `zh/` wɔ atifi hɔ ahyɛde no mu ma ɛnyɛ wo kasa koodu.

### Default Loading a Enni Nhyehyɛe Kwan

Wɔ ɔkwan pɔtee bi a wɔrekɔ so no, sɛ wɔanhyehyɛ ɔkwan no anim asɛm no wɔ `nav:` mu a, wɔde fael `MarkDown` a ɛne ɔkwan no hyia no bɛhyɛ mu default na wɔde `Md` template no akyerɛ ase.

Sɛ nhwɛsoɔ no, sɛ wɔkɔ `/test` na wɔhyehyɛ `nav:` a wɔmfa saa kwan yi anim nni dwuma, na mprempren browsing kasa no yɛ Borɔfo (code `en` ), `/en/test.md` bɛ load default na wɔde template `Md` akyerɛ ase.

Sɛ `/en/test.md` fael yi nni hɔ a, wɔbɛda kratafa `404` a wɔahyɛ da ayɛ no adi.

<img src="//p.3ti.site/1721184299.avif" style="width:360px">