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

### 0Plantilla De Documento `use: Toc` Con Esquema

`nav` :

```
  - i18n: home
    use: Toc
    url: /
```

`use: Toc` nisqaqa `Toc` plantilla llamk'achispa ruwaymi, chaytaq huklla `Markdown` plantillata ruwaymi.

`TOC` nisqaqa `Table of Contents` nisqap pisichasqanmi `Markdown`

`url:` `Markdown` kaqpa willañiqi ñannintam rikuchin ( `/` `/README.md` sapsi willañiqimanmi tupan, kay willañiqi sutiqa hatun qillqap ñawpaq siminta, huch'uy qillqap k'askaqnintapas munan).

### 0Plantilla De Documento `use: Md` Sin Esquema

`Md` plantillawan `Toc` plantillawan kaqlla kanku, iskayninkutaq huk `Markdown` archivollata ruwanapaq llamk'achinku. Ichaqa `Md` plantillaqa manan rikuchinchu chay contornota barra lateral nisqapi.

`use: Toc` pata ruwanakunapi `use: Md` kaqman tikrayta atikunki, `i18n.site` `md` willañiqipi wakmanta purichiyta atikunki, chaymanta wiñachiy ñawpaq qhaway URL watukuy qallariy p'anqapi tikraykunata qhawanaykipaq.

### `use: Blog` Plantillas De Blog

Blog plantillaqa huk lista qillqasqakunatam (titulokunata hinaspa resumenkunata) qawachin, qillqa lluqsinan pachaman hina.

[→ Kaypi ñit’iy chay específico configuración nisqamanta yachanaykipaq](/i18n.site/conf/blog)

### `use: Doc` Willañiqi Qillqa Plantillakuna

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

Hawa parametrokunapaq tupaq directorio indis willañiqiqa kaymi:

* `en/demo1/TOC`
* `en/demo2/TOC`

#### Huklla Proyecto Achka Archivokuna

Huk proyectollayuq kaspaqa kayhinatam ruwayta atinki.

```
  - i18n: doc
    url: flashduty
    use: Doc
```

> [!WARN]
> Achka willañiqiyuq sapalla llamk'ayqa manam `url` sapsi ñan `/` hina wakichiyta yanapanchu
> Sichus __conf.yml → nav:__ Mana sapsi ñan wakichisqachu, web kitip qallariy p'anqanman yaykuspa, kikillanmanta ñawpaq URL kaqman `nav:` wakichisqa urapi musuqmanta qillqasqa kanqa.
> Kay ruwayqa aswan allinta t'aqanapaqmi proyecto qillqakunata, blogs nisqakunata huk contenidokunatapas directoriokuna nisqawan.
> Huk willañiqillata, huk p'anqata qallariy p'anqa hina llamk'achiyqa allinmi.

> [!TIP]
> `url` mana qillqasqa kaptinqa, `url` `i18n` kaqpa chaninmanmi churakun.Kay kamachiyqa huk plantillakunapaqpas llamk'achinmi.

#### TOC Tabla De Contenidos Nisqamanta Indice

Sichus plantilla `use: Doc` wakichiypi atichisqa kachkan, ama hina kaspa, `i18n.addon/toc` kaq plugin `.i18n/conf.yml` kaqpi atichiy.. Wakichiyqa kayhinam :

```yml
addon:
  - i18n.addon/toc
```

`i18n.site` kikinmanta kay plugin churanqa chaymanta ruwanqa, `TOC` directorio indis willañiqita ñawirinqa, chaymanta `json` directorio esquemata paqarichinqa.

Sichus huklla llamk'ay achka willañiqiyuq kaptinqa, `TOC` sapsi willañiqiqa `url:` nisqawan tupaq willañiqim, pukyuta simip qillqana mayt'unpi Ejemplopaq, pukyuta simi chino kaptinqa: `url: flashduty` nisqawan tupaq willañiqiqa `zh/flashduty/TOC` .

Sichus achka llamk'anakuna achka willañiqikuna kaptinqa, manam `url:` wakichinapaq kanchu.1 `TOC` sapsi willañiqinqa `i18n` kaqpa chaninwan tupaq willañiqim.

##### Contenidomanta Sut’inchay

`en/blog/TOC` kayhinam :

```
README.md

news/README.md
  news/begin.md
```

##### Niveles Nisqakunata Qawachinapaqmi Indentación Nisqawan Yanapachikuy

Hawa `en/blog/TOC` punta kaq filapi `README.md` uray siqipi `i18n.site` tupan, chaymi proyectopa sutin.

Qatiqnin iskay chirukunaqa uraypi pantallapi qawasqa hinam.

<img src="https://p.3ti.site/1721097381.avif" style="width:320px">

`news/README.md` `News` nisqawanmi tupan.
`news/begin.md` `Our Product is Online !` nisqawanmi tupan

`TOC` willañiqikunam k'uyusqa kachkan, chirupa hierárquico nisqa tinkiyninta rikuchinapaq, achka pata indentación nisqa yanapanapaq, `# ` nisqawan qallarispa chiru rimaykunata.

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

Ama hina kaspa, hawa kamachiypi `en/` , `zh/` simiykip chiqanchakuyninman tikray.

### Mana Wakichiy Ñanniyuq Ñawpaqmanta Churasqa Karga

Huk ñanman yaykunapaq, sichus ñan ñawpaq simi mana `nav:` kaqpi ruwasqachu, ñanman tupaq `MarkDown` willañiqiqa ñawpaqmanta kargasqa kanqa, `Md` plantillawan ruwasqa kanqa.

Ejemplopaq, sichus `/test` yaykusqa chaymanta `nav:` mana kay ñanpa ñawpaqninwan ruwasqa, chaymanta kunan maskana simi inglés (código `en` ), `/en/test.md` ñawpaqmanta cargasqa kanqa chaymanta plantilla `Md` llamk'achispa ruwasqa kanqa.

`/en/test.md` kay willañiqi mana kaptinqa, ñawpaqmanta churasqa `404` p'anqa rikuchikunqa.

<img src="//p.3ti.site/1721184299.avif" style="width:360px">