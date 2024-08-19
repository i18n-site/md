# I-Install Ken Usaren

## Umuna Nga I-Install Ti windows Ti git bash

windows Sistema, pangngaasiyo ta [i-click ditoy tapno i-download ken i-install nga umuna `git bash`](https://git-scm.com/download/win) .

Ipataray dagiti sumaganad nga operasion iti `git bash` .

## Ikabil

```sh
bash <(curl -sS https://i.i18n.site) i18
```

### Ikonfigura Ti Token Ti Panagipatarus

Bisitaen ti [i18n.site/token](//i18n.site/token)

<img src="https://p.3ti.site/1719911689.avif" style="width:400px">

Mangaramid ti `~/.config/i18n.site.yml` , i-paste ti nakopia a linaon iti daytoy, ti linaon ket kastoy:

```
token: YOUR_API_TOKEN
```

Mainayon pay, kasapulam [i18n.site/payBill](//i18n.site/payBill) i-bind ti credit card para iti panagbayad (awan ti kasapulan a recharge, automatiko nga ibaba ti website dagiti bayad sigun iti pannakausar, [kitaen ti homepage para iti panagpresyo](/#price) ).

## Usaren

### Proyekto Ti Demo

Pangngaasi a kitaen ti proyekto ti [github.com/i18n-site/demo.i18](//github.com/i18n-site/demo.i18) tapno maammuan ti panagisaad ti `i18` a panagipatarus.

Mabalin nga ag-clone dagiti agus-usar idiay China [atomgit.com/i18n/demo.i18](//atomgit.com/i18n/demo.i18)

Kalpasan ti panagklona, iserrek ti direktorio ken tarayen `i18` tapno makompleto ti panagipatarus.

### Estruktura Ti Direktorio

Ti estruktura ti direktorio ti bodega ti plantilia ket kas ti sumaganad

```
┌── .i18n
│  └── conf.yml
└── en
   ├── _IgnoreDemoFile.md
   ├── i18n.yml
   └── README.md
```

Dagiti naipatarus a demo file iti `en` a direktorio ket maysa laeng a pagarigan ken mabalin a maikkat.

### Ipataray Ti Panagipatarus

Iserrek ti direktorio ken tarayen `i18` tapno maipatarus.

### Manginayon Kadagiti File Iti Pagidulinan

Malaksid iti panagipatarus, ti programa ket mangpataud pay kadagiti sumaganad a file, pangngaasi nga inayon dagitoy iti pagidulinan.

```
.i18n/hash
.i18n/cache/.gitignore
```

Karaman kadagitoy, ti linaon ti `.i18n/cache/.gitignore` ket kastoy :

```
**/*
!**/.gitignore
```

Kayatna a sawen nga amin a papeles iti direktorio `.i18n/cache/` (malaksid `.i18n/cache/.gitignore` ) ket saan a maikankano.

No ti software ti panangtengngel ti bersionmo ket saan a `git` , pangngaasi a di ikankano daytoy segun iti daytoy a panagisaad.

## File Ti Konfigurasion

`.i18n/conf.yml` ket ti file ti panagisaad ti `i18` ramit ti panagipatarus ti linia ti bilin

Kastoy ti linaonna:

```
i18n:
  fromTo:
    en: zh ja ko de fr
    # en:

ignore:
  - _*
```

### Pagsasao a Pagtaudan &

Iti file ti panagisaad, ti subordinado ti `fromTo` :

`en` ti taudan a pagsasao, `zh ja ko de fr` ti target a pagsasao ti patarus.

Kodigo ti pagsasao kitaenyo [i18n.site/i18/LANG_CODE](https://i18n.site/i18/LANG_CODE)

Kas pagarigan, no kayatmo nga ipatarus ti Insik iti Ingles, isuratmo manen daytoy a linia `zh: en` .

No kayatmo ti agipatarus kadagiti amin a nasuportaran a pagsasao, pangngaasim ta bay-am a blangko kalpasan `:` . Kas pangarigan

```
i18n:
  fromTo:
    en:
```

Mabalinmo nga ikonfigura ti nadumaduma a `fromTo` para / nadumaduma a subdirektorio Ti maysa a demostrasion ket naisurat a kas ti sumaganad :

```
i18n:
  fromTo:
    en:
  path:
    blog:
      fromTo:
        zh:
    blog/your_file_name.md:
      fromTo:
        ja:
```

Iti daytoy a lamisaan ti panagisaad, ti taudan a pagsasao ti panagipatarus ti katalogo `blog` ket `zh` , ken ti taudan a pagsasao ti panagipatarus `blog/your_file_name.md` ket `ja` .

### Di Ikankano Ti File

Babaen ti kasisigud, amin a papeles a mangrugi iti `.md` ken `.yml` iti direktorio ti taudan a pagsasao ket maipatarus.

No kayatmo a di ikankano dagiti sumagmamano a papeles ken saan nga ipatarus dagitoy (kas dagiti saan a nalpas a draft), mabalinmo nga ikonfigura daytoy babaen ti `ignore` a tay-ak.

`ignore` ket agus-usar ti isu met [globset](https://docs.rs/globset/latest/globset/#syntax) a sintaksis a kas ti `.gitignore` a papeles.

Kas pagarigan, `_* ` iti ngato a papeles ti panagisaad ket kayatna a sawen a dagiti papeles a mangrugi iti `_` ket saan a maipatarus.

## Paglintegan Ti Panagipatarus

### Dagiti Editor Ti Panagipatarus Ket Saan Koma a Mangnayon Wenno Mangikkat Kadagiti Linia

Mabalin nga i-edit ti patarus. Baliwan ti orihinal a teksto ken ipatarus manen babaen ti makina, dagiti manual a panagbalbaliw iti patarus ket saan a maisurat (no daytoy a parapo ti orihinal a teksto ket saan a nabaliwan).

Ngem pangngaasiyo ta laglagipenyo a dagiti linia ti patarus ken ti orihinal a teksto masapul nga agtunos iti maysa iti maysa. Kayatna a sawen, saan a mangnayon wenno mangikkat kadagiti linia no agtipon ti patarus. Ta no saan, mangpataud daytoy iti pannakariro iti cache ti panag-edit ti panagipatarus.

No adda di umiso, pangngaasiyo ta kitaenyo [ti FAQ para kadagiti solusion.](/i18/qa#H1)

### `YAML` Nga Patarus

Ti ramit ti linia ti bilin ket makasarak kadagiti amin a papeles nga agpatingga iti `.yml` iti direktorio ti papeles ti taudan a pagsasao ken ipatarusna dagitoy.

* Panunoten a ti suffix ti nagan ti papeles ket masapul a `.yml` (saan a `.yaml` ).

Ti ramit ket mangipatarus laeng kadagiti pateg ti diksionario iti `.yml` , saan a dagiti tulbek ti diksionario.

Kas pagarigan `i18n/en/i18n.yml`

```
apiToken: API Token
defaultToken: Default Token
```

maipatarusto a kas `i18n/zh/i18n.yml`

```
apiToken: 接口令牌
defaultToken: 默认令牌
```

Ti patarus ti `YAML` ket mabalin pay a mabaliwan a manual (ngem saan a manginayon wenno mangikkat kadagiti tulbek wenno linia iti patarus).

Maibatay iti `YAML` a panagipatarus, nalaka laeng ti mangbangon kadagiti internasional a solusion para kadagiti nadumaduma a pagsasao ti panagprograma.

## Narang-Ay a Panagusar

### Subdirektorio Ti Panagipatarus

No la ketdi `.i18n/conf.yml` ket naparsua (saan a kasapulan a mangrugi manipud iti plantilia ti proyekto ti demo iti tunggal maysa a gundaway), `i18` ket agtrabaho a nasayaat.

Ti ramit ti linia ti bilin ket makasarak kadagiti `.i18n/conf.yml` a panagisaad kadagiti amin a subdirektorio ken ipatarus dagitoy.

Dagiti proyekto nga agus-usar ti arkitektura ti [monorepo](//monorepo.tools)

![](https://p.3ti.site/1719910016.avif)

### Kostumbre a Direktorio Ti Panagipasdek

Daytoy ket mai-install iti `/usr/local/bin` babaen ti default.

No `/usr/local/bin` ket awan ti pammalubos ti panagsurat daytoy ket mai-install iti `~/.bin` .

Ti panangisaad ti aglawlaw a variable `TO` ket mabalin a mangikeddeng ti direktorio ti panagipasdek, kas pagarigan :

```sh
TO=/bin sudo bash <(curl -sS https://i.i18n.site) i18
```