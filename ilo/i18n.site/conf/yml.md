# .i18n/konf.yml

Ti file ti panagisaad ket `.i18n/conf.yml` `i18n.site`

Malaksid `ignore:` ken `i18n:` a panagitunos ti [`i18`](/i18) , ti papeles ti panagisaad ket kas ti sumaganad:

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

Karaman kadagitoy, ti `ext:` configuration item ti `upload` ket kayatna a sawen a `.md` laeng ti mai-upload no agipablaak.

## Ngato Nga Nabigasyon nav

`nav:` dagiti pagpilian ti panagisaad, a maitunos iti menu ti nabigasion iti ngato ti panid ti pagtaengan.

<img src="//p.3ti.site/1721051426.avif" style="width:320px">

Karaman kadagitoy `i18n: home` katupag ti `en/i18n.yml`中`home: Home` .

Maipatarusto iti adu a pagsasao, kas iti `zh/i18n.yml` `en/i18n.yml`

<img src="//p.3ti.site/1721051689.avif" style="width:320px">

Kalpasan a malpas ti panagipatarus, mabalinmo a baliwan ti pateg `yml` `yml`

### `use: Toc` , Plantilia Ti Maymaysa a Papeles (Nga Addaan Iti Balabala)

`nav` :

```
  - i18n: home
    use: Toc
    url: /
```

`Toc` `use: Toc` `Markdown`

`Table of Contents` `TOC` `Markdown`

`url:` `Markdown` `/` `/README.md`

### `use: Md` , Plantilia Ti Maymaysa a Papeles (Awan Ti Balabala)

`Md` Ti Plantilia ket isu met laeng ti `Toc` , agpada a maus-usar a mangiparang ti maymaysa `Markdown` a papeles. Nupay kasta `Md` ti plantilia ket saan nga ipakita ti balabala iti sidebar.

Mabalinmo a baliwan ti `use: Toc` iti konfigurasion iti ngato iti `use: Md` , tarayen `i18n.site` iti direktorio ti `md` manen, ken kalpasanna bisitaen ti URL ti preview ti panagrang-ay tapno mapaliiw dagiti panagbalbaliw iti homepage.

### Default a Panagkarga Nga Awan Ti Dalan Ti Konfigurasion

No ti pangrugian ti dalan ti maysa a naikeddeng a dalan a maawat ket saan a naikonfigura iti `nav:` ti `MarkDown` a papeles a maitunos iti dalan ket maikarga babaen ti kasisigud ken maiparang babaen ti panagusar ti plantilia ti `Md` .

Kas `Md` , `en` `/en/test.md` `nav:` `/test`

No awan ti `/en/test.md` daytoy a papeles, ti default `404` a panid ket maiparang.

<img src="https://p.3ti.site/1721184299.avif" style="width:360px">

### `use: Doc` , Plantilia Ti Adu a File

Iti file ti panagisaad:

```
  - i18n: blog
    use: Doc
```

Ipamatmatna ti panagusar ti `Doc` para iti panagiparang ti plantilia.

`Doc` Plantilia ket mangsuporta ti panagtipon ti adu `MarkDown` tapno mangpataud kadagiti balabala ti dokumento para kadagiti maymaysa wenno adu a proyekto.

#### Maymaysa a Proyekto (Adu a File) .

iti ngato ket ti single-project mode ti `Doc` `blog`

```
  - i18n: blog
    url: blog
    use: Doc
```

##### No Awan Ti Kargana Ti Url, Ag-Default Daytoy Iti Pateg Ti i18n

No saanmo nga agsurat `url` `url` iti pateg ti `i18n` Daytoy a pagannurotan ket ag-epekto pay para kadagiti sabali a plantilia.

Ti pamay-an ti panagsurat iti ngato ket katupag ti kaadda ti `url: blog` ken ti katupagna a file ket `en/blog/TOC` .

#### Adu a Proyekto

`.i18n/conf.yml` Ti konfigurasion iti `i18n:doc` ket multi-project mode.

```
  - i18n: doc
    menu: NB demo1,demo2
    use: Doc
```

<img src="https://p.3ti.site/1721275191.avif" width="320px">

Ditoy, `menu: NB demo1,demo2` ket kayatna a sawen ti panagusar `NB` tapno mangiparang ti drop-down a menu.

`NB` , ket ti abbreviation ti `Name Breif` , a mangipakpakita a ti drop-down menu ket mabalinna nga ipakita ti nagan ken islogan ti proyekto.

`NB` ket sarunuen ti parametro `demo1,demo2` a naipasa iti daytoy.
Imutektekanyo nga awan koma dagiti espasyo ** sakbay ken kalpasan ti koma `,` `demo1,demo2` : **

Para kadagiti parametro iti ngato, ti maitunos a file ti indeks ti direktorio ket:

* `en/demo1/TOC`
* `en/demo2/TOC`

#### TOC Nga Indeks Ti Lamisaan Ti Linaon

`i18n.site` Ipatungpalna ti `js` plugin `.i18n/hook/after.tran/TOC.js` iti bodega ti demo tapno basaen ti file ti indeks ti direktorio `doc` a maitunos iti panagisaad ti plantilia `TOC` tapno mangpataud `json` ti balabala ti direktorio.

No agus-usar ka ti plantilia ti `doc` , masapul nga addaanka iti daytoy a plug-in.

No irugim ti `i18n.site` manipud iti awan kargana a folder, laglagipem a kopiaen `.i18n` iti proyekto ti demo iti direktoriom.

Ti `Doc` ket mangiparangto ti balabala ti linaon a naibatay iti napataud a `json` .

##### Detalyado a Panangilawlawag Iti Linaon

`en/blog/TOC` Ti linaonna ket kastoy :

```
README.md

news/README.md
  news/begin.md
```

##### Usaren Ti Indentation a Mangipakita Kadagiti Lebel

Iti ngato `en/blog/TOC` `README.md` iti umuna a linia ket katupag `i18n.site` iti ladawan iti baba, nga isu ti nagan ti proyekto.

Ti sumaganad a dua a linia ket kas naipakita iti screenshot iti baba.

<img src="https://p.3ti.site/1721097381.avif" style="width:320px">

katupag ti `News` , `news/README.md`
katupag ti `Our Product is Online !` `news/begin.md`

`TOC` Ti papeles ket nai-indent tapno mangipakita ti hirarkikal a relasion ti balabala ken mangsuporta ti multi-level indentation.

##### Ti Parent Level Ket Isuratna Laeng Ti Paulo, Saan a Ti Linaonna.

No adda dagiti adu a lebel ti indentation, ti parent level ket isuratna laeng ti paulo ken saan a ti linaon. Ta no saan, magulo ti tipograpia.

##### Proyekto README.md 

ti `README.md` , kas pagarigan, mabalinmo nga isurat ti linaon iti `en/demo2/README.md` .

Imutektekanyo a ti linaon daytoy a papeles ket saan a mangipakita ti balabala ti linaon, isu a mairekomendar a limitaran ti kaatiddog ​​ken agsurat ti ababa nga introduksion.

###### Islogan Ti Proyekto

Kas makitam `Deme Two` iti baba ti drop-down menu ken ti nagan ti proyekto a balabala ti katalogo, adda ti islogan ti `Your Project slogan` :

<img alt="" src="https://p.3ti.site/1721276842.avif">

Katupag : ti umuna a linia `en/demo2/README.md`

```
# Demo Two : Your Project slogan
```

Proyekto `README.md` Ti linaon kalpasan ti umuna a colon `:` iti umuna nga tukad a paulo ket maibilangto a kas ti islogan ti proyekto.

Dagiti agar-aramat manipud China, Japan ken Korea, pangngaasiyo ta laglagipenyo a masapul nga agusarkayo iti kagudua ti kalawana a colon imbes a ti naan-anay a kalawa ti colon `:`

##### Kasano Nga Iyakar Ti TOC Iti Bulk?

`TOC` Ti papeles ket kasapulan a maikabil iti direktorio ti taudan a pagsasao.

Kas pagarigan, no ti taudan a pagsasao ket Insik, ngarud `zh/blog/TOC` `TOC`

No ti taudan a pagsasao ket nabaliwan, kasapulam ti batch move `TOC` iti maysa a naikeddeng a pagsasao iti proyekto iti sabali a pagsasao.

Mabalinmo a kitaen dagiti sumaganad a bilin:

```
rsync -av --remove-source-files --include='*/' \
--include='TOC' --exclude='*' en/ zh/
```

Pangngaasi a baliwan ti `en/` ken `zh/` iti bilin iti ngato iti kodigo ti pagsasaom.


