# .i18n/conf.yml

Ny rakitra fikirakirana dia `.i18n/conf.yml` `i18n.site`

Afa-tsy `ignore:` sy `i18n:` an'ny [`i18`](/i18)

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

Anisan'izany, `.md` singa `ext:` configuration an'ny `upload`

## Top Navigation nav

`nav:` , mifanandrify amin'ny menio fitetezana eo an-tampon'ny pejy fandraisana.

<img src="//p.3ti.site/1721051426.avif" style="width:320px">

Anisan'ireny, `i18n: home` mifanandrify amin'ny `en/i18n.yml`中`home: Home` .

`en/i18n.yml` dia hadika amin'ny fiteny maro, toy ny `zh/i18n.yml` .

<img src="//p.3ti.site/1721051689.avif" style="width:320px">

Rehefa vita ny `yml` dia azonao ovaina ny sandan'ny `yml`

### `use: Toc` , Môdely Rakitra Tokana (Miaraka Amin'ny Drafitra)

`nav` :

```
  - i18n: home
    use: Toc
    url: /
```

`use: Toc` dia midika hoe mampiasa `Toc` rendering, izay manome modely `Markdown` tokana.

`TOC` dia ny fanafohezana ny `Table of Contents` `Markdown`

`url:` dia maneho ny lalan'ny rakitra `Markdown` ( `/` mifanandrify amin'ny lahatahiry fototra `/README.md` , ity anaran'ny rakitra ity dia mila tovana lehibe sy tovana kely).

### `use: Md` , Môdely Rakitra Tokana (Tsy Misy Drafitra)

`Md` `Toc` `Markdown` Na izany aza `Md` ny môdely dia tsy mampiseho ny drafitra ao amin'ny sidebar.

Azonao atao ny manova `use: Toc` ao amin'ny config etsy ambony ho `use: Md` , mandehana `i18n.site` ao amin'ny lahatahiry `md` indray, ary avy eo tsidiho ny URL momba ny fampandrosoana mba hijerena ny fiovana ao amin'ny pejy fandraisana.

### Fampidirana Default Tsy Misy Lalan'ny Fanamboarana

Raha toa ka tsy voarindra ao amin'ny `nav:` ny rakitra `MarkDown` mifanandrify amin'ilay lalana dia hapetraka amin'ny alàlan'ny default ary adika amin'ny `Md` template.

Ohatra, raha mitsidika an'i `/test` , ary `nav:` dia amboarina tsy misy an'io lalana io, ary ny fiteny amin'ny pejy dia amin'ny teny anglisy (code `en` ), ny môdely dia hapetraka `/en/test.md` ary adika amin'ny fampiasana `Md` amin'ny alàlan'ny default.

`/en/test.md` tsy misy ity rakitra ity dia hiseho ny pejy `404` default.

<img src="https://p.3ti.site/1721184299.avif" style="width:360px">

### `use: Doc` , Môdely Misy Rakitra Maro

Ao amin'ny fichier configuration:

```
  - i18n: blog
    use: Doc
```

Manondro ny fampiasana `Doc`

`Doc` Ny maodely dia manohana ny fampidirana `MarkDown` maro mba hamoronana drafitra ho an'ny tetikasa tokana na maromaro.

#### Tetikasa Tokana (Rakitra Maromaro)

`blog` `Doc`

```
  - i18n: blog
    url: blog
    use: Doc
```

##### Rehefa Banga Ny url Dia Mivadika Amin'ny Sandan'ny i18n Izany

Raha tsy manoratra `url` , `url` amin'ny sandan'ny `i18n` .

Ny fomba fanoratana etsy ambony dia mitovy amin'ny fananana `url: blog` ary ny rakitra mifanaraka aminy dia `en/blog/TOC` .

#### Tetikasa Maro

`.i18n/conf.yml` `i18n:doc`

```
  - i18n: doc
    menu: NB demo1,demo2
    use: Doc
```

<img src="https://p.3ti.site/1721275191.avif" width="320px">

Eto, `menu: NB demo1,demo2` dia midika hoe mampiasa `NB` hamerenana ny menio midina.

`NB` , dia fanafohezana ny `Name Breif` , izay manondro fa afaka mampiseho ny anarana sy ny teny filamatra ny tetikasa.

`NB` `demo1,demo2`
Mariho fa tsy tokony hisy toerana ** alohan'ny sy aorian'ny faingo `,` `demo1,demo2` : **

Ny rakitra fanondroana lahatahiry mifanaraka amin'ireo masontsivana etsy ambony dia:

* `en/demo1/TOC`
* `en/demo2/TOC`

#### TOC Lisitry Ny Atiny Index

`i18n.site` ny `js` plugin `.i18n/hook/after.tran/TOC.js` ao amin'ny trano fitehirizam-boky mba hamakiana ny rakitra fanondroana lahatahiry `doc` mifanandrify amin'ny firafitry ny môdely `TOC` mba hamoronana `json` ny rindran-drakitra.

Raha mampiasa `doc` môdely ianao dia tsy maintsy manana ity plug-in ity.

Raha manomboka amin'ny lahatahiry tsy misy `i18n.site` inona na inona ianao, dia tadidio ny mandika `.i18n` ao amin'ny tetikasa demo amin'ny lahatahinao

`Doc` `json`

##### Fanazavana Votoaty Amin'ny Antsipiriany

Toy izao : votoatiny `en/blog/TOC`

```
README.md

news/README.md
  news/begin.md
```

##### Mampiasà Indentation Hanondro Ambaratonga

Ambony `en/blog/TOC` `README.md` amin'ny andalana voalohany dia mifanandrify amin'ny `i18n.site` eo amin'ny sary etsy ambany, izay ny anaran'ny tetikasa.

Ny andalana roa manaraka dia aseho amin'ny pikantsary etsy ambany.

<img src="https://p.3ti.site/1721097381.avif" style="width:320px">

mifanitsy amin'ny `News` `news/README.md`
`news/begin.md` amin'ny `Our Product is Online !`

`TOC`

##### Ny Lohatenin'ny Ray Aman-Dreny Ihany No Manoratra Fa Tsy Ny Votoatiny.

Rehefa misy ambaratonga maromaro ny indentation dia ny lohatenin'ny ray aman-dreny ihany no manoratra fa tsy ny atiny. Raha tsy izany dia hikorontana ny typography.

##### Tetikasa README.md 

`README.md` amin'ny tetikasa, ohatra, azonao atao ny manoratra votoaty amin'ny `en/demo2/README.md` .

Mariho fa ny votoatin'ity rakitra ity dia tsy mampiseho lisitry ny votoatiny, noho izany dia ilaina ny mametra ny halavany ary manoratra teny fampidirana fohy.

###### Teny Filamatra Tetikasa

Araka ny hitanao `Deme Two` eo ambanin'ny menio midina sy ny anaran'ny tetikasa dia misy `Your Project slogan` :

<img alt="" src="https://p.3ti.site/1721276842.avif">

Mifanaraka amin'ny andalana voalohany : `en/demo2/README.md`

```
# Demo Two : Your Project slogan
```

`:` `README.md`

Ireo mpampiasa avy any Shina, Japon ary Korea, azafady `:` mariho fa tsy maintsy mampiasa zana-tsipìka antsasaky ny sakany ianao fa tsy zana-tsipìka feno sakany.

##### Ahoana No Hamindra TOC Amin'ny Ampahany?

`TOC`

Ohatra, raha `TOC` sinoa ny teny loharano dia `zh/blog/TOC` .

Raha ovaina ny fiteny loharano dia mila mamindra `TOC` amin'ny fiteny iray ao amin'ny tetikasa mankany amin'ny fiteny hafa ianao.

Azonao atao ny manondro ireto baiko manaraka ireto:

```
rsync -av --remove-source-files --include='*/' \
--include='TOC' --exclude='*' en/ zh/
```

Ovao azafady `en/` sy `zh/` ao amin'ny baiko etsy ambony ny kaody fiteninao.


