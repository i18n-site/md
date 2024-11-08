# .i18n/conf.yml

Ti file ti panagisaad para iti `i18n.site` ket `.i18n/conf.yml` ken ti linaon ket kas ti sumaganad :

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

Karaman kadagitoy, `upload` agingga iti `ext:` a configuration item ket kayatna a sawen a `.md` laeng ti mai-upload no agipablaak.

## Ngato Nga Nabigasyon nav

`nav:` a pagpilian ti panagisaad, a maitunos iti menu ti nabigasion iti ngato ti homepage.

<img src="//p.3ti.site/1721051426.avif" style="width:320px">

Kadagitoy, `i18n: home` ket katupag ti `home: Home` iti `en/i18n.yml` (a ti `en` ket isu ti taudan a pagsasao ti patarus ti proyekto).

Ti linaon `en/i18n.yml` ket ti teksto a maiparang iti menu ti nabigasion, a maipatarus segun ti `fromTo` iti panagisaad, kas pagarigan, maipatarus iti `zh/i18n.yml` .

<img src="//p.3ti.site/1721051689.avif" style="width:320px">

Kalpasan a malpas ti panagipatarus, mabalinmo a baliwan ti pateg ti patarus `yml` , ngem dimo inayon wenno burasen ti tulbek ti patarus `yml` .

### `use: Toc` a Plantilia Ti Dokumento Nga Addaan Iti Balabala

`nav` :

```
  - i18n: home
    use: Toc
    url: /
```

`use: Toc` ket kayatna a sawen ti panagiparang babaen ti panagusar ti `Toc` a plantilia, nga isu daytoy ket panagiparang ti maymaysa a `Markdown` a plantilia.

`TOC` ket ti abbreviation ti `Table of Contents` No daytoy a plantilia ket maiparang, ti balabala daytoy a `Markdown` a papeles ket maiparangto iti sidebar.

`url:` ket mangibagi ti dalan ti papeles ti `Markdown` ( `/` ket katupag ti ramut a direktorio `/README.md` , daytoy a nagan ti papeles ket agkasapulan ti dadakkel a letra a pangrugian ken ti babassit a letra a suffix).

### `use: Md` a Plantilia Ti Dokumento Nga Awan Ti Balabala

Ti plantilia `Md` ken ti plantilia `Toc` ket agpada ken agpada a maus-usar a mangiparang ti maymaysa a `Markdown` a papeles. Ngem ti `Md` a plantilia ket saan nga ipakita ti balabala iti sidebar.

Mabalinmo a baliwan `use: Toc` iti konfigurasion iti ngato iti `use: Md` , tarayen manen `i18n.site` iti `md` a direktorio, ken kalpasanna bisitaem ti URL ti preview ti panagrang-ay tapno mapaliiw dagiti panagbalbaliw iti homepage.

### `use: Blog` Dagiti Plantilia Ti Blog

Ti plantilia ti blog ket mangipakita ti listaan dagiti artikulo (paulo ken abstrakto) iti panagsasaruno ti oras ti pannakaipablaak.

[→ I-click ditoy tapno maammuan ti maipapan iti espesipiko a konfigurasion](/i18n.site/conf/blog)

### `use: Doc` a Plantilia Ti Dokumento Ti File

Iti file ti panagisaad:

```
  - i18n: doc
    menu: NB demo1,demo2
    use: Doc
```

Ipamatmatna ti panagusar ti `Doc` para iti panagiparang ti plantilia.

`Doc` a plantilia ket mangsuporta ti panagtipon ti adu `MarkDown` tapno mangpataud kadagiti balabala ti dokumento para iti maymaysa wenno adu a proyekto.

#### Adu a Proyekto Ken Adu a File

Ti panagisaad ti `.i18n/conf.yml` iti `i18n:doc` ket multi-proyekto a multi-file a wagas ti panagiparang.

Ditoy, `menu: NB demo1,demo2` , ket kayatna a sawen ti panagusar ti plantilia `NB` tapno mangiparang ti drop-down a menu.

<img src="//p.3ti.site/1721275191.avif" width="320px">

`NB` , nga isu ti abbreviation ti `Name Breif` , ket kayatna a sawen a ti drop-down menu ket mabalinna nga ipakita ti nagan ken islogan ti proyekto.

`NB` ket sarunuen ti parametro `demo1,demo2` a naipasa iti daytoy.

: ** Awan koma dagiti espasyo ** sakbay ken kalpasan ti koma `,` iti `demo1,demo2` .

Ti maitunos a file ti indeks ti direktorio para kadagiti parametro iti ngato ket:

* `en/demo1/TOC`
* `en/demo2/TOC`

#### Maymaysa a Proyekto Ti Adu a File

No maysa laeng ti proyektom, mabalinmo nga i-configure daytoy kas iti sumaganad.

```
  - i18n: doc
    url: flashduty
    use: Doc
```

> [!WARN]
> Ti maymaysa a proyekto nga addaan kadagiti adu a papeles ket saan a mangsuporta ti panagikumpigar ti `url` a kas ti ramut a dalan `/`
> No __conf.yml → nav:__ Awan ti ramut a dalan a naikonfigura, no makastrek iti homepage ti website, automatiko a maisurat manen daytoy iti umuna nga URL iti baba ti `nav:` a panagisaad.
> Daytoy a disenio ket tapno nasaysayaat a mailasin dagiti dokumento ti proyekto, blog ken dadduma pay a linaon babaen kadagiti direktorio.
> Mairekomendar ti panagusar ti maymaysa a file ken maymaysa a panid a kas ti home page.

> [!TIP]
> No `url` ket saan a naisurat, `url` ket agdefault iti pateg ti `i18n` Daytoy a pagannurotan ket ag-epekto pay para kadagiti sabali a plantilia.

#### TOC Nga Indeks Ti Lamisaan Ti Linaon

No ti plantilia `use: Doc` ket napalubosan iti panagisaad, pangngaasi a pagayatan ti plug-in `i18n.addon/toc` iti `.i18n/conf.yml` Ti panagisaad ket kas ti sumaganad :

```yml
addon:
  - i18n.addon/toc
```

`i18n.site` ket automatiko nga i-install ken ipatungpalna daytoy a plug-in, basaenna `TOC` ti file ti indeks ti direktorio, ken mangpataud `json` ti balabala ti direktorio.

No daytoy ket maymaysa a proyekto nga addaan kadagiti adu a papeles, ti ramut a direktorio `TOC` ket isu ti direktorio a maitunos iti `url:` iti direktorio ti taudan a pagsasao Kas pagarigan, no ti taudan a pagsasao ket Insik: ti papeles a katupag ti `url: flashduty` ket `zh/flashduty/TOC` .

No daytoy ket adu a proyekto ken adu a papeles, saan a kasapulan ti panangikonfigura `url:` Ti ramut a direktorio ti `TOC` ket isu ti direktorio a maitunos iti pateg ti `i18n` .

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

Dagiti `TOC` a papeles ket nai-indent tapno mangipakita ti hirarkikal a relasion ti balabala, mangsuporta ti adu nga antas a panag-indent, ken dagiti komento ti linia a mangrugi iti `# ` .

##### Ti Parent Level Ket Isuratna Laeng Ti Paulo, Saan a Ti Linaon.

No adda dagiti adu a lebel ti indentation, ti parent level ket isuratna laeng ti paulo ken saan a ti linaon. Ta no saan, magulo ti tipograpia.

##### Proyekto README.md

Mabalin nga isurat ti linaon iti item `README.md` , kas iti `en/demo2/README.md` .

Imutektekanyo a ti linaon daytoy a papeles ket saan a mangipakita ti balabala ti linaon, isu a mairekomendar a limitaran ti kaatiddog ken agsurat ti ababa nga introduksion.

###### Islogan Ti Proyekto

Makitam a ti `Deme Two` ket addaan iti tagline ti proyektona iti baba ti drop-down menu ken ti balabala ti katalogo ti nagan ti proyekto `Your Project slogan` :

![](https://p.3ti.site/1721276842.avif)

Daytoy ket katupag ti umuna a linia ti `en/demo2/README.md` :

```
# Demo Two : Your Project slogan
```

Ti linaon kalpasan ti umuna a colon `:` ti umuna nga tukad a paulo ti proyekto `README.md` ket maibilangto a kas ti islogan ti proyekto.

Dagiti agar-aramat manipud iti China, Japan ken Korea, pangngaasiyo ta laglagipenyo a rumbeng nga agusarkayo iti kagudua ti kalawana a colon `:` imbes a ti naan-anay a kalawa ti colon.

##### Kasano Nga Iyakar Ti TOC Iti Bulk?

`TOC` a papeles ket kasapulan a maikabil iti direktorio ti taudan a pagsasao.

Kas pagarigan, no ti taudan a pagsasao ket Insik, ngarud ti `TOC` iti ngato ket `zh/blog/TOC` .

No ti taudan a pagsasao ket nabaliwan, kasapulam nga iyakar ti batch dagiti `TOC` a papeles ti maysa a naikeddeng a pagsasao iti proyekto iti sabali a pagsasao.

Mabalinmo a kitaen dagiti sumaganad a bilin:

```
rsync -av --remove-source-files --include='*/' \
--include='TOC' --exclude='*' en/ zh/
```

Pangngaasi a baliwam `en/` ken `zh/` iti bilin iti ngato iti kodigo ti pagsasaom.

### Default a Panagkarga Nga Awan Ti Dalan Ti Panagisaad

Para iti maysa a naikeddeng a dalan a maawat, no ti pangrugian ti dalan ket saan a naikonfigura iti `nav:` , ti `MarkDown` a papeles a maitunos iti dalan ket maikarga babaen ti kasisigud ken maiparang babaen ti panagusar ti plantilia `Md` .

Kas pagarigan, no ti `/test` ket maawat ken `nav:` ket naikonfigura nga awan ti pangrugian daytoy a dalan, ken ti agdama a pagsasao ti panag-browse ket Ingles (kodigo `en` ), `/en/test.md` ket maikarga babaen ti kasisigud ken maiparang babaen ti panagusar ti plantilia `Md` .

No `/en/test.md` daytoy a papeles ket awan, ti default `404` a panid ket maiparang.

<img src="//p.3ti.site/1721184299.avif" style="width:360px">