# .i18n/conf.yml a Wɔde Kyerɛw Nsɛm

Nsiesiei fael no ne `.i18n/conf.yml` `i18n.site`

Gye sɛ `ignore:` ne `i18n:` nhyehyɛe a ɛwɔ [`i18`](/i18) , nhyehyɛe fael no te sɛ nea edidi so yi:

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

Wɔn mu no, `ext:` nhyehyeɛ adeɛ a ɛwɔ `upload` no kyerɛ sɛ `.md` nko ara na wɔde bɛto so berɛ a wɔretintim.

## Soro Akwantuo nav

`nav:`

<img src="//p.3ti.site/1721051426.avif" style="width:320px">

`home: Home` mu `en/i18n.yml` , `i18n: home`

Wɔbɛkyerɛ ase akɔ kasa ahorow pii mu, te sɛ `zh/i18n.yml` `en/i18n.yml`

<img src="//p.3ti.site/1721051689.avif" style="width:320px">

Sɛ wowie nkyerɛaseɛ `yml` a, wobɛtumi asesa `yml`

### `use: Toc` , Fael Biako Nsusuwso (A Nkyerɛkyerɛmu Wom)

: `nav`

```
  - i18n: home
    use: Toc
    url: /
```

`use: Toc` kyerɛ sɛ wode `Toc` rendering bedi dwuma, a ɛyɛ `Markdown` template biako a wobɛkyerɛ.

`TOC` `Table of Contents` `Markdown`

`url:` gyina hɔ ma fael kwan a `Markdown` ( `/` ne root directory no hyia `/README.md` , fael din yi hwehwɛ sɛ wɔde nkyerɛwde akɛse a edi kan ne nkyerɛwde nketewa a wɔde di akyi).

### `use: Md`

`Md` Template ne `Toc` yɛ pɛ, wɔde abien no nyinaa di dwuma de kyerɛ `Markdown` fael biako. Nanso `Md` template no nkyerɛ outline no wɔ sidebar no mu.

Wubetumi asesa `use: Toc` wɔ atifi hɔ nhyehyeɛ no mu akɔ `use: Md` , run `i18n.site` wɔ `md` directory no mu bio, na afei kɔ nkɔsoɔ nhwɛsoɔ URL no mu kɔhwɛ nsakraeɛ a ɛwɔ homepage no so.

### Default Loading a Enni Nhyehyɛe Kwan

Sɛ wɔanhyehyɛ ɔkwan pɔtee bi a wɔrekɔ so no kwan anim asɛm wɔ `nav:` wɔde `MarkDown` fael a ɛne ɔkwan no hyia no bɛhyɛ mu default na wɔde `Md` template akyerɛ.

`/en/test.md` nhwɛsoɔ `nav:` , `Md` `en` `/test`

Sɛ `/en/test.md` saa fael yi nni hɔ a, wɔbɛda default `404` krataafa no adi.

<img src="https://p.3ti.site/1721184299.avif" style="width:360px">

### `use: Doc` , Fael Ahorow Pii Nsusuwso

Wɔ nhyehyɛe fael no mu no:

```
  - i18n: blog
    use: Doc
```

Kyerɛ sɛ wode `Doc`

`Doc` `MarkDown`

#### Dwumadi Biako (Fael Ahorow Pii) .

wɔ atifi hɔ no yɛ adwuma biako mode a `Doc` `blog`

```
  - i18n: blog
    url: blog
    use: Doc
```

##### Sɛ url Yɛ Hunu a, Ɛyɛ Default Sɛ Ɛyɛ i18n Boɔ

Sɛ woankyerɛw `url` , `url` to the value of `i18n` Saa mmara yi nso di dwuma ma nsusuwso afoforo.

Ɔkwan a wɔfa so kyerɛw wɔ atifi hɔ no ne `url: blog` na ne fael a ɛne no hyia no yɛ `en/blog/TOC` .

#### Nnwuma Pii a Wɔyɛ

`.i18n/conf.yml` Nsiesiei a ɛwɔ `i18n:doc` mu no yɛ multi-project mode.

```
  - i18n: doc
    menu: NB demo1,demo2
    use: Doc
```

<img src="https://p.3ti.site/1721275191.avif" width="320px">

Ɛha yi, `menu: NB demo1,demo2` kyerɛ sɛ wode `NB` bedi dwuma de akyerɛ drop-down menu no.

`NB` `Name Breif`

`NB` `demo1,demo2`
Hyɛ no nsow sɛ ɛnsɛ sɛ ntam kwan ** wɔ koma `,` no anim ne : ** `demo1,demo2`

Wɔ atifi hɔ parameters no ho no, directory index fael a ɛne no hyia no ne:

* `en/demo1/TOC`
* `en/demo2/TOC`

#### TOC Nsɛm a Ɛwɔ Mu No Ho Nkyerɛkyerɛmu

`i18n.site` Ɛbɛyɛ `js` plugin `.i18n/hook/after.tran/TOC.js` wɔ demo warehouse no mu de akenkan directory index fael `doc` a ɛne template nhyehyeɛ no hyia `TOC` de ayɛ `json` directory outline no.

Sɛ wode `doc` template di dwuma a, ɛsɛ sɛ wunya saa plug-in yi.

`.i18n` wohyɛ `i18n.site`

`Doc` no bɛkyerɛ nsɛm a ɛwɔ mu no nkyerɛkyerɛmu a egyina `json` a wɔayɛ no so.

##### Nsɛm a Ɛwɔ Mu Ho Nkyerɛkyerɛmu a Ɛkɔ Akyiri

`en/blog/TOC` Nsɛm a ɛwɔ mu no te sɛ nea edidi so yi :

```
README.md

news/README.md
  news/begin.md
```

##### Fa Indentation Kyerɛ Levels

Atifi hɔ `en/blog/TOC` `README.md` a ɛwɔ nkyerɛwde a edi kan no mu no ne `i18n.site` a ɛwɔ mfonini a ɛwɔ ase ha no mu no hyia, a ɛyɛ adwuma no din.

Ntrɛwmu abien a edi hɔ no te sɛ nea wɔakyerɛ wɔ screenshot a ɛwɔ ase ha no mu.

<img src="https://p.3ti.site/1721097381.avif" style="width:320px">

ɛne `News` , hyia `news/README.md`
ɛne `Our Product is Online !` `news/begin.md`

`TOC` Wɔde fael no ahyɛ mu de akyerɛ abusuabɔ a ɛwɔ nkyerɛwde no mu na ɛboa nkyerɛwde a ɛwɔ sorosoro pii.

##### Ɔwofoɔ Level No Kyerɛw Asɛmti No Nko Ara, Na Ɛnyɛ Emu Nsɛm No.

Sɛ indentation level ahodoɔ pii wɔ hɔ a, ɔwofoɔ level no kyerɛw asɛmti no nko ara na ɛnyɛ emu nsɛm no. Sɛ ɛnte saa a, typography bɛyɛ basaa.

##### Dwumadie No README.md 

adwuma no mu, sɛ nhwɛso no, wubetumi akyerɛw nsɛm wɔ `en/demo2/README.md` `README.md`

Hyɛ no nsow sɛ fael yi mu nsɛm nkyerɛ emu nsɛm a wɔahyehyɛ, enti wɔkamfo kyerɛ sɛ wobɛto ne tenten ano hye na woakyerɛw nnianim asɛm tiawa.

###### Dwumadie No Asɛmti

`Your Project slogan` wubetumi ahu : , `Deme Two`

<img alt="" src="https://p.3ti.site/1721276842.avif">

: ne nkyerɛwde a edi kan no hyia `en/demo2/README.md`

```
# Demo Two : Your Project slogan
```

Dwumadie `README.md` Nneɛma a ɛwɔ nkyerɛwdeɛ a ɛdi kan `:` akyi wɔ asɛmti a ɛdi kan no mu no, wɔbɛbu no sɛ adwuma no asɛmti.

Wɔn a wɔde di dwuma a wofi China, Japan ne Korea, yɛsrɛ sɛ hyɛ no nsow sɛ ɛsɛ sɛ wode colon a ne trɛw yɛ fã di dwuma sen sɛ wode colon a ne trɛw nyinaa bedi dwuma `:`

##### Ɔkwan Bɛn So Na Wobetumi De TOC Akɔ Baabi Foforo Wɔ Dodow Mu?

`TOC` Ɛsɛ sɛ wɔde fael no to kasa a wɔde fibea no daerekta no mu.

Sɛ nhwɛso no, sɛ kasa a wɔde fi mu no yɛ China `zh/blog/TOC` a, ɛnde `TOC`

Sɛ wɔasesa kasa a wɔde fibea no a, ɛsɛ sɛ wode batch move `TOC` a ɛwɔ kasa pɔtee bi mu wɔ adwuma no mu kɔ kasa foforo mu.

Wubetumi ahwɛ ahyɛde ahorow a edidi so yi so:

```
rsync -av --remove-source-files --include='*/' \
--include='TOC' --exclude='*' en/ zh/
```

Yɛsrɛ wo sesa `en/` ne `zh/` wɔ atifi hɔ ahyɛde no mu ma ɛnyɛ wo kasa koodu.


