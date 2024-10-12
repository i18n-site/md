# .i18n/conf.yml

`i18n.site` kaqpaq wakichiy willañiqiqa `.i18n/conf.yml` kaq, chaymanta imaynachus kayninqa kayhina :

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

Paykuna ukhupi, `upload` `ext:` wakichiy elemento niyta munan `.md` churasqa kanqa lluqsichiypi.

## Pata Puriy nav

`nav:` wakichiy akllanakuna, qallariy p'anqap hawanpi purina menú kaqwan tupaq.

<img src="//p.3ti.site/1721051426.avif" style="width:320px">

Chaykuna ukhupiqa, `i18n: home` `en/i18n.yml` `home: Home` tupan (maypichus `en` proyecto tikraypa pukyuta rimaynin).

`en/i18n.yml` contenido nisqaqa purina menú nisqapi rikuchisqa qillqam, chaymi `fromTo` nisqaman hina tikrasqa kanqa configuración nisqapi, ahinataq, `zh/i18n.yml` nisqaman tikrasqa.

<img src="//p.3ti.site/1721051689.avif" style="width:320px">

Tikray tukusqaña kaptinqa, tikraypa chaninnintam tikrayta atinki `yml` , ichaqa ama tikraypa llaventa yapaychu nitaq qulluychu `yml` .

### `use: Toc` , Huklla Willañiqi Plantilla Contornoyuq

`nav` :

```
  - i18n: home
    use: Toc
    url: /
```

`use: Toc` nisqaqa `Toc` plantilla llamk'achispa ruwaymi, chaytaq huklla `Markdown` plantillata ruwaymi.

`TOC` nisqaqa `Table of Contents` nisqap pisichasqanmi `Markdown`

`url:` `Markdown` kaqpa willañiqi ñannintam rikuchin ( `/` `/README.md` sapsi willañiqimanmi tupan, kay willañiqi sutiqa hatun qillqap ñawpaq siminta, huch'uy qillqap k'askaqnintapas munan).

### `use: Md` , Huklla Willañiqi Plantilla Mana Esquemayuq

`Md` plantillawan `Toc` plantillawan kaqlla kanku, iskayninkutaq huk `Markdown` archivollata ruwanapaq llamk'achinku. Ichaqa `Md` plantillaqa manan rikuchinchu chay contornota barra lateral nisqapi.

`use: Toc` pata ruwanakunapi `use: Md` kaqman tikrayta atikunki, `i18n.site` `md` willañiqipi wakmanta purichiyta atikunki, chaymanta wiñachiy ñawpaq qhaway URL watukuy qallariy p'anqapi tikraykunata qhawanaykipaq.

### `use: Blog` Plantillas De Blog

Blog plantillaqa huk lista qillqasqakunatam (titulokunata hinaspa resumenkunata) qawachin, qillqa lluqsinan pachaman hina.

[→ Kaypi ñit’iy chay específico configuración nisqamanta yachanaykipaq](/i18n.site/conf/blog)

### `use: Doc` , Achka Willañiqiyuq Qillqap Plantilla

Wakichiy willañiqipi:

```
  - i18n: doc
    menu: NB demo1,demo2
    use: Doc
```

Plantilla ruwanapaq `Doc` llamk'achiyta rikuchin.

`Doc` plantilla yanapan achka `MarkDown` tinkiyta documentokuna esquemakuna sapalla utaq achka proyectokunapaq ruwanapaq.

#### Achka Proyectokuna Hinaspa Achka Archivokuna

`.i18n/conf.yml` `i18n:doc` kaqpi wakichiyqa achka proyecto achka willañiqi ruway ñanmi.

Kaypiqa, `menu: NB demo1,demo2` , `NB` plantillata llamk'achiyta munan, menú desplegableta ruwanapaq.

<img src="//p.3ti.site/1721275191.avif" width="320px">

`NB` , chaymi `Name Breif` pisichasqan, chaymi nin, urayk’aq menú nisqapiqa proyectopa sutinta, lema nisqatapas qawachiyta atinmi.

`NB` qatiqninpiqa `demo1,demo2` kaq parámetro nisqa chayman pasasqa.

`demo1,demo2` : ** `,` **

Hawa parametrokunapaq, tupaq directorio indis willañiqiqa kaymi:

* `en/demo1/TOC`
* `en/demo2/TOC`

#### Huklla Proyecto Achka Archivokuna

Huk proyectollayuq kaspaqa kayhinatam ruwayta atinki.

```
  - i18n: xxx
    use: Doc
```

##### url Ch'usaq Kaptin, i18n Chaniman Ñawpaqmanta Churan

`url` mana qillqasqa kaptinqa, `url` `i18n` kaqpa chaninmanmi churakun.Kay kamachiyqa huk plantillakunapaqpas llamk'achinmi.

Hawa qillqana ñanqa `url: xxx` nisqayuq kayninwanmi tupan , tupaqnin willañiqitaq `en/xxx/TOC` .

#### TOC Tabla De Contenidos Nisqamanta Indice

`i18n.site` `js` plug-in `.i18n/hook/after.tran/TOC.js` demo almacén kaqpi ruwanqa `TOC` directorio índice archivota ñawirinanpaq `doc` plantilla configuración kaqwan tupaq `json` directorio esquemata paqarichinanpaq.

Sichus `doc` plantillata llamk'achkanki, kay plugin nisqayuq kanayki tiyan.

Sichus `i18n.site` proyectota ch'usaq qillqana mayt'umanta qallarichinki, yuyariy `.i18n` demo proyectota directorioykiman copiayta.

Chay `Doc` plantillaqa tabla de contenidos nisqa esquema nisqatam ruwanqa chay generado `json` nisqapi hapipakuspa.

##### Contenidomanta Sut’inchay

`en/blog/TOC` kayhinam :

```
README.md

news/README.md
  news/begin.md
```

##### Niveles Nisqakunata Qawachinapaqmi Indentación Nisqawan Yanapachikuy

Hawa `en/blog/TOC` punta kaq filapi `README.md` uray siqipi `i18n.site` tupan, chaymi proyectopa sutin.

Qatiqnin iskay chirukunaqa uraypi pantallapi qawasqanchikman hinam.

<img src="https://p.3ti.site/1721097381.avif" style="width:320px">

`news/README.md` `News` nisqawanmi tupan.
`news/begin.md` `Our Product is Online !` nisqawanmi tupan

`TOC` willañiqikunam k'uyusqa kachkan, chirupa hierárquico nisqa tinkiyninta rikuchinapaq, achka pata indentación nisqa yanapanapaq, `#` nisqawan qallarispa chiru rimaykunata.

##### Tayta-Mama Nivelqa Titulollatam Qillqan, Manam Contenidotachu.

Askha patakuna indentación kaqtin, tayta mama pataqa titulollata qillqan manataq contenidotachu. Mana chayqa, tipografía nisqa ch’aqwasqa kanqa.

##### Proyecto README.md Nisqa

Contenido nisqataqa `README.md` kaqpi qillqachwanmi, ahinataq `en/demo2/README.md` kaqpi.

Reparay kay willañiqip contenidonqa manam tabla de contenidos nisqa esquematachu rikuchin, chayraykum allin kanman largonta limitanaykipaq hinaspa pisi riqsichiyta qillqanaykipaq.

###### Proyectopa Rimaynin

Qawakuwaqmi `Deme Two` proyectopa etiquetan uraypi menú desplegable nisqapi hinaspa catálogo esquema proyecto suti `Your Project slogan` :

![](https://p.3ti.site/1721276842.avif)

Kayqa `en/demo2/README.md` kaqpa ñawpaq kaq filawanmi tupan :

```
# Demo Two : Your Project slogan
```

Proyecto `README.md` nisqapa punta kaq nivelninpa punta kaq colon `:` nisqapa qipanpi kaq contenidoqa proyectopa consigna nisqa hinam qawasqa kanqa.

China, Japón chaymanta Corea kaqmanta llamk'aqkuna, ama hina kaspa, kuskan ancho colon `:` llamk'achinayki tiyan, tukuy ancho colon kaqmanta ranti.

##### ¿Imaynatataq TOC Nisqataqa Achkanpi Kuyuchina?

`TOC` willañiqikunatam pukyu simip qillqana mayt'unpi churana.

Ejemplopaq, pukyu simi chino kaptinqa, hanaqpi `TOC` `zh/blog/TOC` .

Pukyu simi hukchasqa kaptinqa, llamk'anapi huk simip `TOC` willañiqinkunata huk simiman huñupi kuyuchinayki tiyan.

Kay kamachiykunata qhawayta atinki:

```
rsync -av --remove-source-files --include='*/' \
--include='TOC' --exclude='*' en/ zh/
```

Ama hina kaspa, hanaq kamachiypi `en/` , `zh/` simiykip chiqanchakuyninman tikray.

### Mana Wakichiy Ñanniyuq Ñawpaqmanta Churasqa Karga

Huk ñanman yaykunapaq, sichus ñan ñawpaq simi mana `nav:` kaqpi ruwasqachu, ñanman tupaq `MarkDown` willañiqiqa ñawpaqmanta kargasqa kanqa, `Md` plantillawan ruwasqa kanqa.

Ejemplopaq, sichus `/test` yaykusqa chaymanta `nav:` mana kay ñanpa ñawpaqninwan ruwasqa, chaymanta kunan maskana simi inglés (código `en` ), `/en/test.md` ñawpaqmanta cargasqa kanqa chaymanta plantilla `Md` llamk'achispa ruwasqa kanqa.

`/en/test.md` kay willañiqi mana kaptinqa, ñawpaqmanta churasqa `404` p'anqa rikuchikunqa.

<img src="//p.3ti.site/1721184299.avif" style="width:360px">