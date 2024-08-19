# .i18n/conf.yml

Ti profile para iti `i18n.site` ket `.i18n/conf.yml` .

Malaksid kadagiti panagitunos ti [`i18`](/i18) , `ignore:` ken `i18n:` , ti file ti panagisaad ket kas ti sumaganad:

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

Karaman kadagitoy, `upload` agingga iti `ext:` a configuration item ket kayatna a sawen a `.md` laeng ti mai-upload no agipablaak.

## Ngato Nga Nabigasyon nav

`nav:` a pagpilian ti panagisaad, a maitunos iti menu ti nabigasion iti ngato ti panid ti pagtaengan.

<img src="//p.3ti.site/1721051426.avif" style="width:320px">

Kadagitoy, `i18n: home` ket katupag ti `home: Home` iti `en/i18n.yml` .

`en/i18n.yml` ket maipatarusto kadagiti adu a pagsasao, a kas ti `zh/i18n.yml` .

<img src="//p.3ti.site/1721051689.avif" style="width:320px">

Kalpasan a malpas ti panagipatarus, mabalinmo a baliwan ti pateg ti patarus `yml` , ngem dimo inayon wenno burasen ti tulbek ti patarus `yml` .

### `use: Toc` , Plantilia Ti Maymaysa a Papeles (Nga Addaan Iti Balabala) .

`nav` :

```
  - i18n: home
    use: Toc
    url: /
```

`use: Toc` ket kayatna a sawen ti panagiparang babaen ti panagusar ti `Toc` a plantilia, nga isu daytoy ket panagiparang ti maymaysa `Markdown` a plantilia.

`TOC` ket ti abbreviation ti `Table of Contents` No daytoy a plantilia ket maiparang, ti balabala daytoy a `Markdown` a papeles ket maiparangto iti sidebar.

`url:` ket mangibagi ti dalan ti papeles ti `Markdown` ( `/` ket katupag ti ramut a direktorio `/README.md` , daytoy a nagan ti papeles ket agkasapulan ti dadakkel a letra a pangrugian ken ti babassit a letra a suffix).

### `use: Md` , Plantilia Ti Maymaysa a Papeles (Awan Ti Balabala) .

Ti plantilia ti `Md` ken ti plantilia ti `Toc` ket agpada ken agpada a maus-usar a mangiparang ti maymaysa `Markdown` a papeles. Ngem ti `Md` a plantilia ket saan nga ipakita ti balabala iti sidebar.

Mabalinmo a baliwan `use: Toc` iti konfigurasion iti ngato iti `use: Md` , tarayen manen `i18n.site` iti `md` a direktorio, ken kalpasanna bisitaem ti URL ti preview ti panagrang-ay tapno mapaliiw dagiti panagbalbaliw iti homepage.

### Default a Panagkarga Nga Awan Ti Dalan Ti Konfigurasion

No ti maysa a naikeddeng a dalan ket maawat ken ti pangrugian ti dalanna ket saan a naikonfigura iti `nav:` , ti `MarkDown` a papeles a maitunos iti dalan ket maikarga babaen ti kasisigud ken maiparang babaen ti panagusar ti plantilia ti `Md` .

Kas pagarigan, no `/test` ket maawat, ken `nav:` ket naikonfigura nga awan daytoy a dalan, ken ti pagsasao ti panid ket Ingles (kodigo `en` ), `/en/test.md` ket maikarga babaen ti default ken maiparang babaen ti panagusar ti plantilia `Md` .

No `/en/test.md` daytoy a papeles ket awan, ti default a `404` a panid ket maiparang.

<img src="https://p.3ti.site/1721184299.avif" style="width:360px">

### `use: Doc` , Plantilia Ti Adu a Papeles

Iti file ti panagisaad:

```
  - i18n: blog
    use: Doc
```

Ipamatmatna ti panagusar ti `Doc` para iti panagiparang ti plantilia.

Ti `Doc` a plantilia ket mangsuporta ti panagtipon ti adu `MarkDown` tapno mangpataud kadagiti balabala ti dokumento para iti maymaysa wenno adu a proyekto.

#### Maymaysa a Proyekto (Adu a File) .

`blog` iti ngato ket ti maymaysa-a-banag a wagas ti `Doc` .

```
  - i18n: blog
    url: blog
    use: Doc
```

##### No Awan Ti Kargana Ti Url, Ag-Default Daytoy Iti Pateg Ti i18n

No `url` ket saan a naisurat, `url` ket agdefault iti pateg ti `i18n` Daytoy a pagannurotan ket ag-epekto pay para kadagiti sabali a plantilia.

Ti pamay-an ti panagsurat iti ngato ket katupag ti `url: blog` , ken ti katupagna a papeles ket `en/blog/TOC` .

#### Adu a Proyekto

Ti konfigurasion ti `i18n:doc` manipud iti `.i18n/conf.yml` ket multi-project mode.

```
  - i18n: doc
    menu: NB demo1,demo2
    use: Doc
```

<img src="https://p.3ti.site/1721275191.avif" width="320px">

Ditoy, `menu: NB demo1,demo2` , ket kayatna a sawen ti panagusar ti plantilia ti `NB` tapno mangiparang ti drop-down a menu.

`NB` , nga isu ti abbreviation ti `Name Breif` , ket kayatna a sawen a ti drop-down menu ket mabalinna nga ipakita ti nagan ken islogan ti proyekto.

`NB` ket sarunuen ti parametro `demo1,demo2` a naipasa iti daytoy.
: ** Awan koma dagiti espasyo ** sakbay ken kalpasan ti koma `,` iti `demo1,demo2` .

Ti maitunos a file ti indeks ti direktorio para kadagiti parametro iti ngato ket:

* `en/demo1/TOC`
* `en/demo2/TOC`

#### TOC Nga Indeks Ti Lamisaan Ti Linaon

`i18n.site` ket mangipatungpal `js` a plug-in `.i18n/hook/after.tran/TOC.js` iti bodega ti demo tapno basaen ti `doc` a direktorio nga indeks a papeles a maitunos iti `TOC` a panagisaad ti plantilia tapno mangpataud ti `json` a balabala ti direktorio.

No agus-usar ka ti `doc` a plantilia, masapul nga addaanka iti daytoy a plug-in.

No irugim ti proyekto `i18n.site` manipud iti empty folder, laglagipem a kopiaen ti demo project `.i18n` iti direktoriom.

Ti plantilia ti `Doc` ket mangiparangto ti balabala ti lamisaan ti linaon a naibatay iti napataud a `json` .

##### Detalyado a Panangilawlawag Iti Linaon

`en/blog/TOC` linaonna ket kastoy :

```
README.md

news/README.md
  news/begin.md
```

##### Usaren Ti Indentation a Mangipakita Kadagiti Lebel

`README.md` iti umuna a linia ti `en/blog/TOC` iti ngato ket katupag ti `i18n.site` iti ladawan iti baba, nga isu ti nagan ti proyekto.

Ti sumaganad a dua a linia ket kas naipakita iti screenshot iti baba.

<img src="https://p.3ti.site/1721097381.avif" style="width:320px">

`news/README.md` katupag ti `News` , .
`news/begin.md` ket katupag ti `Our Product is Online !`

`TOC` a papeles ket nai-indent tapno mangipakita ti hirarkikal a relasion ti balabala ken mangsuporta ti multi-level nga indentation.

##### Ti Parent Level Ket Isuratna Laeng Ti Paulo, Saan a Ti Linaon.

No adda dagiti adu a lebel ti indentation, ti parent level ket isuratna laeng ti paulo ken saan a ti linaon. Ta no saan, magulo ti tipograpia.

##### Proyekto README.md

Mabalin nga isurat ti linaon iti item `README.md` , kas iti `en/demo2/README.md` .

Imutektekanyo a ti linaon daytoy a papeles ket saan a mangipakita ti balabala ti linaon, isu a mairekomendar a limitaran ti kaatiddog ken agsurat ti ababa nga introduksion.

###### Islogan Ti Proyekto

Makitam a ti `Deme Two` ket addaan iti tagline ti proyektona iti baba ti drop-down menu ken ti balabala ti katalogo ti nagan ti proyekto `Your Project slogan` :

![](https://p.3ti.site/1721276842.avif)

Daytoy ket katupag ti umuna a linia `en/demo2/README.md` :

```
# Demo Two : Your Project slogan
```

Ti linaon kalpasan ti umuna a colon `:` ti umuna nga tukad a paulo ti proyekto `README.md` ket maibilangto a kas ti islogan ti proyekto.

Dagiti agar-aramat manipud China, Japan ken Korea, pangngaasiyo ta laglagipenyo a rumbeng nga agusarkayo iti kagudua ti kalawana a colon `:` imbes a ti naan-anay a kalawa ti colon.

##### Kasano Nga Iyakar Ti TOC Iti Bulk?

`TOC` a papeles ket kasapulan a maikabil iti direktorio ti taudan a pagsasao.

Kas pagarigan, no ti taudan a pagsasao ket Insik, ngarud `TOC` iti ngato ket `zh/blog/TOC` .

No ti taudan a pagsasao ket nabaliwan, kasapulam nga iyakar ti batch dagiti `TOC` a papeles ti maysa a naikeddeng a pagsasao iti proyekto iti sabali a pagsasao.

Mabalinmo a kitaen dagiti sumaganad a bilin:

```
rsync -av --remove-source-files --include='*/' \
--include='TOC' --exclude='*' en/ zh/
```

Pangngaasi a baliwam `en/` ken `zh/` iti bilin iti ngato iti kodigo ti pagsasaom.