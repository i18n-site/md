# .i18n/conf.yml

Profile a ɛwɔ `i18n.site` yɛ `.i18n/conf.yml` .

Gye sɛ nhyehyɛe a ɛwɔ [`i18`](/i18) , `ignore:` ne `i18n:` , nhyehyɛe fael no te sɛ nea edidi so yi:

```yaml
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
    use: Doc
```

Wɔn mu no, `upload` kosi `ext:` nhyehyɛe ade kyerɛ sɛ `.md` pɛ na wɔde bɛto so bere a wɔretintim no.

## Soro Akwantuo nav

`nav:` nhyehyeɛ a wɔpaw, a ɛne navigation menu a ɛwɔ home page no atifi no hyia.

<img src="//p.3ti.site/1721051426.avif" style="width:320px">

Wɔn mu no, `i18n: home` ne `home: Home` wɔ `en/i18n.yml` mu hyia.

`en/i18n.yml` bɛkyerɛ ase akɔ kasa ahorow pii mu, te sɛ `zh/i18n.yml` .

<img src="//p.3ti.site/1721051689.avif" style="width:320px">

Sɛ wowie nkyerɛaseɛ no a, wobɛtumi asesa nkyerɛaseɛ `yml` boɔ, nanso mfa nkyerɛaseɛ `yml` safoa no nka ho anaa mpopa.

### `use: Toc` , Fael Biako Nsusuwso (A Nkyerɛkyerɛmu Wom) .

`nav` :

```
  - i18n: home
    use: Toc
    url: /
```

`use: Toc` kyerɛ sɛ wɔde `Toc` template bedi dwuma, a ɛyɛ `Markdown` template biako a wɔde render.

`TOC` yɛ `Table of Contents` tiawa.Sɛ wɔkyerɛ saa nsusuwso yi ase a, wɔbɛda fael `Markdown` yi nsusuwii adi wɔ nkyɛnkyɛn no mu.

`url:` gyina hɔ ma fael kwan a ɛyɛ `Markdown` ( `/` ne root directory `/README.md` hyia, fael din yi hwehwɛ sɛ wɔde nkyerɛwde akɛse a edi kan ne nkyerɛwde nketewa a wɔde di akyi).

### `use: Md` , Fael Biako Nsusuwso (Nkyerɛkyerɛmu Biara Nni Hɔ) .

`Md` template ne `Toc` template no yɛ pɛ na wɔde abien no nyinaa di dwuma de kyerɛ `Markdown` fael biako. Nanso `Md` template no nkyerɛ outline no wɔ sidebar no mu.

Wubetumi asesa `use: Toc` wɔ atifi hɔ nhyehyeɛ no mu akɔ `use: Md` , ayɛ `i18n.site` wɔ `md` daerekta no mu bio, na afei woakɔ nkɔsoɔ nhwɛsoɔ URL no so akɔhwɛ nsakraeɛ a ɛwɔ homepage no so.

### Default Loading a Enni Nhyehyɛe Kwan

Sɛ wɔkɔ ɔkwan pɔtee bi so na wɔanhyehyɛ ne kwan prefix no wɔ `nav:` mu a, wɔde fael `MarkDown` a ɛne ɔkwan no hyia no bɛhyɛ default so na wɔde `Md` template no akyerɛ.

Sɛ nhwɛsoɔ no, sɛ wɔkɔ `/test` so, na wɔhyehyɛ `nav:` a saa kwan yi nni mu, na krataafa kasa no yɛ Borɔfo kasa (code `en` ), `/en/test.md` bɛ load default na wɔde template `Md` akyerɛ ase.

Sɛ `/en/test.md` fael yi nni hɔ a, wɔbɛda kratafa `404` a wɔahyɛ da ayɛ no adi.

<img src="https://p.3ti.site/1721184299.avif" style="width:360px">

### `use: Doc` , Fael Ahorow Pii Nsusuwso

Wɔ nhyehyɛe fael no mu no:

```
  - i18n: blog
    use: Doc
```

Kyerɛ sɛ wode `Doc` redi dwuma ama template rendering.

`Doc` template boa sɛ wɔde `MarkDown` pii bɛka abom de ayɛ nkrataa nkyerɛkyerɛmu ama nnwuma biako anaa pii.

#### Dwumadi Biako (Fael Ahorow Pii) .

`blog` a ɛwɔ atifi hɔ no yɛ ade biako mode a ɛyɛ `Doc` .

```
  - i18n: blog
    url: blog
    use: Doc
```

##### Sɛ url Yɛ Hunu a, Ɛyɛ Default Sɛ Ɛyɛ i18n Boɔ

Sɛ wɔankyerɛw `url` a, `url` default to the value of `i18n` Saa mmara yi nso di dwuma ma template afoforo.

Ɔkwan a wɔfa so kyerɛw wɔ atifi hɔ no ne `url: blog` yɛ pɛ , na ne fael a ɛne no hyia no yɛ `en/blog/TOC` .

#### Nnwuma Pii a Wɔyɛ

Nsiesiei a ɛwɔ `i18n:doc` fi `.i18n/conf.yml` mu no yɛ multi-project mode.

```
  - i18n: doc
    menu: NB demo1,demo2
    use: Doc
```

<img src="https://p.3ti.site/1721275191.avif" width="320px">

Ɛha yi, `menu: NB demo1,demo2` , kyerɛ sɛ wode `NB` template no bedi dwuma de akyerɛ drop-down menu no.

`NB` , a ɛyɛ `Name Breif` tiawa no kyerɛ sɛ menu a ɛba fam no betumi akyerɛ adwuma no din ne asɛmti.

`NB` akyi no, parameter `demo1,demo2` a wɔde kɔ no.
Hyɛ no : ** Ɛnsɛ sɛ ahunmu ** biara wɔ hɔ ansa na koma `,` wɔ `demo1,demo2` mu ne akyi .

Directory index fael a ɛne no hyia ma atifi hɔ parameters no ne:

* `en/demo1/TOC`
* `en/demo2/TOC`

#### TOC Nsɛm a Ɛwɔ Pon So Index

`i18n.site` bɛyɛ `js` plug-in `.i18n/hook/after.tran/TOC.js` wɔ demo warehouse no mu de akenkan `doc` directory index fael a ɛne `TOC` template nhyehyeɛ no hyia de ayɛ `json` directory outline no.

Sɛ wode `doc` template di dwuma a, ɛsɛ sɛ wonya saa plug-in yi.

Sɛ wohyɛ project `i18n.site` ase fi folda a hwee nni mu a, kae sɛ wobɛ copy demo project `.i18n` akɔ wo directory no mu.

`Doc` template no bɛkyerɛ table of contents outline no a egyina `json` a wɔayɛ no so.

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

Wɔde fael `TOC` ahyɛ mu de akyerɛ abusuabɔ a ɛwɔ nkyerɛwde no mu na ɛboa indentation a ɛwɔ gyinabea ahorow pii.

##### Ɔwofoɔ Level No Kyerɛw Asɛmti No Nko Ara, Na Ɛnyɛ Emu Nsɛm No.

Sɛ indentation level ahodoɔ pii wɔ hɔ a, ɔwofoɔ level no kyerɛw asɛmti no nko ara na ɛnyɛ emu nsɛm no. Sɛ ɛnte saa a, typography bɛyɛ basaa.

##### Dwumadie No README.md

Wobetumi akyerɛw emu nsɛm no wɔ ade `README.md` te sɛ `en/demo2/README.md` .

Hyɛ no nsow sɛ fael yi mu nsɛm nkyerɛ emu nsɛm a wɔahyehyɛ, enti wɔkamfo kyerɛ sɛ wobɛto ne tenten ano hye na woakyerɛw nnianim asɛm tiawa.

###### Dwumadie No Asɛmti

Wubetumi ahu sɛ `Deme Two` wɔ ne project tagline wɔ drop-down menu ne catalog outline project din `Your Project slogan` ase :

![](https://p.3ti.site/1721276842.avif)

Eyi ne `en/demo2/README.md` hyia :

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