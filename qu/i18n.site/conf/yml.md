# .i18n/conf.yml Nisqa

`i18n.site` `.i18n/conf.yml`

[`i18`](/i18) -pa `ignore:` wan `i18n:` churanakunamantaqa, wakichiy willañiqiqa kayhinam:

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

Paykuna ukhupi, `upload` kaqpa `ext:` wakichiy elemento niyta munan `.md` lla lluqsichisqa kanqa.

## Pata Puriy nav

`nav:`

<img src="//p.3ti.site/1721051426.avif" style="width:320px">

Paykuna ukhupiqa, `i18n: home`中`home: Home` `en/i18n.yml` tupan.

`en/i18n.yml` `zh/i18n.yml`

<img src="//p.3ti.site/1721051689.avif" style="width:320px">

Tikray tukusqa kaptin, `yml` `yml`

### `use: Toc` , Plantilla De Archivo Único (Con Esquema)

`nav` :

```
  - i18n: home
    use: Toc
    url: /
```

`use: Toc` niyta munan `Toc` ruwayta llamk'achiyta, chaytaq huklla `Markdown` plantillata ruway kachkan.

`TOC` `Table of Contents` `Markdown`

`url:` `Markdown` ( `/` sapsi qillqana mayt'uman rikch'akun `/README.md` , kay willañiqi sutiqa hatun qillqap ñawpaq simita, huch'uy qillqap k'askaqninta ima munan).

### `use: Md` , Plantilla De Archivo Único (Mana Esquema)

`Md` `Toc` `Markdown` Ichaqa `Md` plantillaqa manam barra lateral nisqapi contornota qawachinchu.

`use: Toc` `use: Md` `md` `i18n.site`

### Mana Wakichiy Ñanniyuq Ñawpaqmanta Churasqa Karga

Sichus huk ñan yaykusqa ñanpa ñawpaqnin mana `nav:` ñanman tupaq `MarkDown` willañiqiqa ñawpaqmanta kargasqa kanqa, `Md` plantillawan ruwasqa kanqa.

`en` `nav:` `/test` `/en/test.md` `Md`

`/en/test.md` `404`

<img src="https://p.3ti.site/1721184299.avif" style="width:360px">

### `use: Doc` , Achka Archivoyuq Plantilla

Wakichiy willañiqipi:

```
  - i18n: blog
    use: Doc
```

Plantilla ruwanapaq `Doc`

`Doc` `MarkDown`

#### Huklla Llamk'ay (Achka Willañiqikuna) .

`blog` Hanaypi kaqpiqa `Doc` .

```
  - i18n: blog
    url: blog
    use: Doc
```

##### url Ch'usaq Kaptin, i18n Chaniman Ñawpaqmanta Churan

`url` `url` `i18n`

Hawa qillqana ñanqa `url: blog` chaymanta tupaqnin willañiqiqa `en/blog/TOC` .

#### Achka Proyectokuna

`.i18n/conf.yml` `i18n:doc` nisqapi wakichiyqa achka proyectokunayuqmi.

```
  - i18n: doc
    menu: NB demo1,demo2
    use: Doc
```

<img src="https://p.3ti.site/1721275191.avif" width="320px">

Kaypi, `menu: NB demo1,demo2` niyta munan `NB` llamk'achiyta urayk'aq menúta ruwanapaq.

`NB` `Name Breif`

`NB` `demo1,demo2`
Reparay `demo1,demo2` manan kanchu ch'usaqkuna ** coma `,` in : **

Hawa parametrokunapaq, tupaq directorio indis willañiqiqa kaymi:

* `en/demo1/TOC`
* `en/demo2/TOC`

#### TOC Tabla De Contenidos Nisqamanta Indice

`i18n.site` Demo almacén nisqapi `js` plugin `.i18n/hook/after.tran/TOC.js` nisqatam ruranqa, directorio nisqap indisyun willañiqita ñawirinanpaq `doc` plantilla nisqap wakichiyninwan tupaq `TOC` qillqana mayt'upa esquema nisqap `json` paqarichinanpaq.

Sichus plantilla `doc`

`.i18n` `i18n.site`

`Doc` `json`

##### Detallada Contenido Nisqamanta Sut’inchaynin

`en/blog/TOC` :

```
README.md

news/README.md
  news/begin.md
```

##### Nivelkunata Qawachinapaqmi Indentación Nisqawan Yanapachikuy

Wichaypi `en/blog/TOC` Ñawpaq chirupi `README.md` nisqaqa uraypi siq'ipi `i18n.site` nisqawanmi tupan, chaymi proyectopa sutin.

Qatiqnin iskay chirukunaqa uraypi pantallapi qawasqa hinam.

<img src="https://p.3ti.site/1721097381.avif" style="width:320px">

`news/README.md` `News` , nisqawanmi tupan !
`news/begin.md` `Our Product is Online !` nisqawanmi tupan !

`TOC` Willañiqiqa esquemapa jerárquico nisqa tinkiyninta qawachinapaqmi indentado kachkan, achka pata indentación nisqatam yanapan.

##### Tayta-Mama Nivelqa Titulollatam Qillqan, Manam Contenidotachu.

Askha patakuna indentación kaqtin, tayta mama pataqa titulollata qillqan manataq contenidotachu. Mana chayqa, tipografía nisqa ch’aqwasqa kanqa.

##### Proyecto README.md Nisqa 

`README.md` , huk rikch'anapaq, `en/demo2/README.md` nisqapi contenidota qillqayta atinki.

Reparay kay willañiqip contenidonqa manam tabla de contenidos nisqa esquematachu rikuchin, chayraykum allin kanman largonta limitanaykipaq hinaspa pisi riqsichiyta qillqanaykipaq.

###### Proyectopa Rimaynin

Rikusqayki `Your Project slogan` : `Deme Two`

<img alt="" src="https://p.3ti.site/1721276842.avif">

: ñawpaq chiruwanmi tupan `en/demo2/README.md`

```
# Demo Two : Your Project slogan
```

Proyecto `README.md` Ñawpaq kaq pata titulupi ñawpaq iskayniyuq `:` qhipanpi kaq contenidoqa proyectopa rimaynin hina qhawasqa kanqa.

China, Japón chaymanta Corea kaqmanta llamk'aqkuna, ama hina kaspa, kuskan anchoyuq iskayniyuqta llamk'achinayki tiyan, tukuy anchoyuq iskayniyuqpa rantinpi `:`

##### ¿Imaynatataq TOC Nisqataqa Achkanpi Kuyuchina?

`TOC` Willañiqitaqa pukyu simip qillqana mayt'unpi churana tiyan.

Ejemplopaq, sichus pukyuta simi `zh/blog/TOC` , chaymanta `TOC`

Pukyu simi hukchasqa kaptinqa, llamk'anapi huk simipi `TOC` huk simiman huñusqa kuyuchinayki tiyan.

Kay kamachiykunata qhawayta atinki:

```
rsync -av --remove-source-files --include='*/' \
--include='TOC' --exclude='*' en/ zh/
```

Ama `zh/` kaspa `en/`


