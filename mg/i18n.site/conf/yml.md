# .i18n/conf.yml

Ny mombamomba ny `i18n.site` dia `.i18n/conf.yml` .

Afa-tsy ny firafitry ny [`i18`](/i18) , `ignore:` ary `i18n:` , dia toy izao manaraka izao ny fichier configuration:

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
addon:
  - i18n.addon/toc
```

Amin'izy ireo, `upload` hatramin'ny `ext:` ny singa fanamafisana dia midika fa `.md` ihany no halefa rehefa mamoaka.

## Top Navigation nav

`nav:` , mifanandrify amin'ny menio fitetezana eo an-tampon'ny pejy fandraisana.

<img src="//p.3ti.site/1721051426.avif" style="width:320px">

Amin'izy ireo, `i18n: home` dia mifanitsy amin'ny `home: Home` amin'ny `en/i18n.yml` .

`en/i18n.yml` dia hadika amin'ny fiteny maro, toy ny `zh/i18n.yml` .

<img src="//p.3ti.site/1721051689.avif" style="width:320px">

Rehefa vita ny fandikan-teny dia azonao ovaina ny sandan'ny fandikan-teny `yml` , fa aza ampiana na mamafa ny fanalahidin'ny fandikan-teny `yml` .

### `use: Toc` , Môdely Rakitra Tokana (Miaraka Amin'ny Drafitra)

`nav` :

```
  - i18n: home
    use: Toc
    url: /
```

`use: Toc` dia midika hoe mandika mampiasa môdely `Toc` , izay mamadika môdely `Markdown` tokana.

`TOC` dia fanafohezana ny `Table of Contents` Rehefa adika ity môdely ity dia hiseho eo amin'ny sisiny ny rindran'ity rakitra `Markdown` ity.

`url:` dia maneho ny lalan'ny rakitra `Markdown` ( `/` mifanitsy amin'ny lahatahiry faka `/README.md` , ity anaran'ny rakitra ity dia mila prefix lehibe sy tovana kely).

### `use: Md` , Môdely Rakitra Tokana (Tsy Misy Drafitra)

Mitovy ny môdely `Md` sy ny môdely `Toc` ary samy ampiasaina hamerenana rakitra `Markdown` tokana. Saingy ny môdely `Md` dia tsy mampiseho ny drafitra ao amin'ny sidebar.

Azonao atao ny manova `use: Toc` amin'ny config etsy ambony ho `use: Md` , mandehana `i18n.site` ao amin'ny lahatahiry `md` indray, ary avy eo dia tsidiho ny URL momba ny fampivoarana mba hijerena ireo fiovana ao amin'ny pejy fandraisana.

### Fampidirana Default Tsy Misy Lalan'ny Fanamboarana

Raha misy lalana azo idirana ary tsy voarindra ao amin'ny `nav:` ny tovan'ny lalany, ny rakitra `MarkDown` mifanandrify amin'ilay lalana dia hapetraka amin'ny alàlan'ny default ary adika amin'ny alàlan'ny môdely `Md` .

Ohatra, raha `/test` no idirana, ary `nav:` dia amboarina tsy misy an'io lalana io, ary ny fitenin'ny pejy amin'ny teny anglisy (code `en` ), `/en/test.md` dia hapetraka amin'ny alàlan'ny default ary adika amin'ny alàlan'ny môdely `Md` .

Raha `/en/test.md` tsy misy ity rakitra ity dia hiseho ny pejy `404` default.

<img src="https://p.3ti.site/1721184299.avif" style="width:360px">

### `use: Doc` , Môdely Rakitra Marobe

Ao amin'ny fichier configuration:

```
  - i18n: blog
    use: Doc
```

Manondro ny fampiasana `Doc` ho an'ny famandrihana môdely.

Ny môdely `Doc` dia manohana ny fampidirana `MarkDown` maromaro mba hamoronana drafitra ho an'ny tetikasa tokana na maromaro.

#### Tetikasa Tokana (Rakitra Maromaro)

`blog` etsy ambony dia ny fomba singa tokana an'ny `Doc` .

```
  - i18n: blog
    url: blog
    use: Doc
```

##### Rehefa Banga Ny url Dia Mivadika Amin'ny Sandan'ny i18n Izany

Raha tsy voasoratra `url` , dia `url` ny sandan'ny `i18n` Mihatra amin'ny maodely hafa koa io fitsipika io.

Ny fomba fanoratana etsy ambony dia mitovy amin'ny `url: blog` , ary ny rakitra mifanaraka aminy dia `en/blog/TOC` .

#### Tetikasa Maro

Ny fandrindrana ny `i18n:doc` amin'ny `.i18n/conf.yml` dia maodely tetikasa marobe.

```
  - i18n: doc
    menu: NB demo1,demo2
    use: Doc
```

<img src="https://p.3ti.site/1721275191.avif" width="320px">

Eto, `menu: NB demo1,demo2` , dia midika hoe mampiasa ny môdely `NB` hamerenana ny menio midina.

`NB` , izay fanafohezana ny `Name Breif` , dia midika fa ny menio midina dia afaka mampiseho ny anarana sy ny teny filamatry ny tetikasa.

`NB` dia arahin'ny paramètre `demo1,demo2` alefa aminy.
Fanamarihana : ** Tsy tokony hisy toerana ** alohan'ny sy aorian'ny faingo `,` amin'ny `demo1,demo2` .

Ho an'ireo masontsivana etsy ambony, ny rakitra fanondroana lahatahiry mifanaraka amin'izany dia:

* `en/demo1/TOC`
* `en/demo2/TOC`

#### TOC Lisitry Ny Atiny Index

`i18n.site` dia hanatanteraka `js` plug-in `.i18n/hook/after.tran/TOC.js` ao amin'ny trano fanatobiana demo mba hamakiana ny fisie index directory `doc` mifanaraka amin'ny configuration template `TOC` mba hamoronana ny drafitra `json` directory.

Raha mampiasa môdely `doc` ianao dia tsy maintsy manana ity plug-in ity.

Raha manomboka tetikasa `i18n.site` amin'ny lahatahiry tsy misy na inona na inona ianao, dia tadidio ny mandika ny tetikasa demo `.i18n` amin'ny lahatahiry.

Ny môdely `Doc` dia hanome ny lisitry ny votoatiny mifototra amin'ny `json` novokarina.

##### Fanazavana Votoaty Amin'ny Antsipiriany

`en/blog/TOC` izao ny votoatiny :

```
README.md

news/README.md
  news/begin.md
```

##### Mampiasà Indentation Hanondro Ambaratonga

`README.md` amin'ny laharana voalohany amin'ny `en/blog/TOC` etsy ambony dia mifanitsy amin'ny `i18n.site` amin'ny sary etsy ambany, izay ny anaran'ny tetikasa.

Ny andalana roa manaraka dia aseho amin'ny pikantsary etsy ambany.

<img src="https://p.3ti.site/1721097381.avif" style="width:320px">

`news/README.md` mifanitsy amin'ny `News` ,
`news/begin.md` mifanandrify amin'ny `Our Product is Online !`

`TOC` ny rakitra dia apetaka mba hanondroana ny fifandraisana ara-jeografika amin'ny drafitra, hanohanana indentation ambaratonga maro, ary fanehoan-kevitra andalana manomboka amin'ny `#` .

##### Ny Lohatenin'ny Ray Aman-Dreny Ihany No Manoratra Fa Tsy Ny Atiny.

Rehefa misy ambaratonga maromaro ny indentation dia ny lohatenin'ny ray aman-dreny ihany no manoratra fa tsy ny atiny. Raha tsy izany dia hikorontana ny typography.

##### Tetikasa README.md

Ny votoatiny dia azo soratana amin'ny singa `README.md` , toy ny `en/demo2/README.md` .

Mariho fa ny votoatin'ity rakitra ity dia tsy mampiseho lisitry ny votoatiny, noho izany dia ilaina ny mametra ny halavany ary manoratra teny fampidirana fohy.

###### Teny Filamatra Tetikasa

Azonao atao ny mahita fa ny `Deme Two` dia manana ny tenifototra momba ny tetikasa eo ambanin'ny menio midina sy ny : tetikasa katalaogy `Your Project slogan` .

![](https://p.3ti.site/1721276842.avif)

Mifanaraka amin'ny laharana voalohany `en/demo2/README.md` izany :

```
# Demo Two : Your Project slogan
```

Ny atiny aorian'ny teboka `:` voalohany amin'ny lohatenin'ny tetikasa `README.md` dia raisina ho toy ny teny filamatra tetikasa.

Ireo mpampiasa avy any Shina, Japon ary Korea, azafady, mariho fa tokony hampiasa zana-tsipìka `:` ny sakan'ny antsasaky ny sakan'ny tsirairay ianao, fa tsy ny zana-tsipìka feno sakany.

##### Ahoana No Hamindra TOC Amin'ny Ampahany?

`TOC` dia mila apetraka ao amin'ny lahatahiry amin'ny fiteny loharano.

Ohatra, raha Sinoa ny teny loharano, dia `zh/blog/TOC` ny `TOC` etsy ambony.

Raha ovaina ny fiteny loharano dia mila mamindra ny rakitra `TOC` amin'ny fiteny iray ao amin'ny tetikasa mankany amin'ny fiteny hafa ianao.

Azonao atao ny manondro ireto baiko manaraka ireto:

```
rsync -av --remove-source-files --include='*/' \
--include='TOC' --exclude='*' en/ zh/
```

Ovao azafady `en/` sy `zh/` amin'ity baiko etsy ambony ity ho kaody fiteninao.