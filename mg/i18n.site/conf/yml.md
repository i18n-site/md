# .i18n/conf.yml

Ny rakitra fanamafisana ho an'ny `i18n.site` dia `.i18n/conf.yml` ary ny atiny dia toy izao manaraka izao :

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

Amin'izy ireo, `upload` hatramin'ny `ext:` ny singa fanamafisana dia midika fa `.md` ihany no halefa rehefa mamoaka.

## Top Navigation nav

`nav:` , mifanandrify amin'ny menio fitetezana eo an-tampon'ny pejy fandraisana.

<img src="//p.3ti.site/1721051426.avif" style="width:320px">

Amin'izy ireo, `i18n: home` dia mifanitsy amin'ny `home: Home` amin'ny `en/i18n.yml` (izay `en` no fiteny loharanon'ny fandikana tetikasa).

Ny votoatiny `en/i18n.yml` dia ny lahatsoratra aseho ao amin'ny menio fitetezana, izay hadika araka ny `fromTo` amin'ny fanitsiana, ohatra, nadika ho `zh/i18n.yml` .

<img src="//p.3ti.site/1721051689.avif" style="width:320px">

Rehefa vita ny fandikan-teny dia azonao ovaina ny sandan'ny fandikan-teny `yml` , fa aza ampiana na mamafa ny fanalahidin'ny fandikan-teny `yml` .

### `use: Toc` Antontan-Taratasy Tokana Misy Drafitra

`nav` :

```
  - i18n: home
    use: Toc
    url: /
```

`use: Toc` dia midika hoe mandika mampiasa môdely `Toc` , izay mamadika môdely `Markdown` tokana.

`TOC` dia fanafohezana ny `Table of Contents` Rehefa adika ity môdely ity dia hiseho eo amin'ny sisiny ny rindran'ity rakitra `Markdown` ity.

`url:` dia maneho ny lalan'ny rakitra `Markdown` ( `/` mifanitsy amin'ny lahatahiry faka `/README.md` , ity anaran'ny rakitra ity dia mila prefix lehibe sy tovana kely).

### `use: Md` Antontan-Taratasy Tokana Tsy Misy Drafitra

Mitovy ny môdely `Md` sy ny môdely `Toc` ary samy ampiasaina handikana rakitra `Markdown` tokana. Saingy ny môdely `Md` dia tsy mampiseho ny drafitra ao amin'ny sidebar.

Azonao atao ny manova `use: Toc` amin'ny config etsy ambony ho `use: Md` , mandehana `i18n.site` ao amin'ny lahatahiry `md` indray, ary avy eo dia tsidiho ny URL momba ny fampivoarana mba hijerena ireo fiovana ao amin'ny pejy fandraisana.

### `use: Blog` Blog Templates

Ny môdelin'ny bilaogy dia mampiseho lisitr'ireo lahatsoratra (lohateny sy sariitatra) araka ny filaharan'ny fotoana famoahana.

[→ Kitiho eto raha te hianatra momba ny fanitsiana manokana](/i18n.site/conf/blog)

### `use: Doc`

Ao amin'ny fichier configuration:

```
  - i18n: doc
    menu: NB demo1,demo2
    use: Doc
```

Manondro ny fampiasana `Doc` ho an'ny famandrihana môdely.

Ny môdely `Doc` dia manohana ny fampidirana `MarkDown` maromaro mba hamoronana drafitra ho an'ny tetikasa tokana na maromaro.

#### Tetikasa Marobe Sy Rakitra Marobe

Ny fanamafisam-peo `.i18n/conf.yml` amin'ny `i18n:doc` dia maodely famandrihana rakitra marobe marobe.

Eto, `menu: NB demo1,demo2` , dia midika hoe mampiasa ny môdely `NB` hamerenana ny menio midina.

<img src="//p.3ti.site/1721275191.avif" width="320px">

`NB` , izay fanafohezana ny `Name Breif` , dia midika fa ny menio midina dia afaka mampiseho ny anarana sy ny teny filamatra ny tetikasa.

`NB` dia arahin'ny paramètre `demo1,demo2` alefa aminy.

Fanamarihana : ** Tsy tokony hisy toerana ** alohan'ny sy aorian'ny faingo `,` amin'ny `demo1,demo2` .

Ny rakitra fanondroana lahatahiry mifanaraka amin'ireo masontsivana etsy ambony dia:

* `en/demo1/TOC`
* `en/demo2/TOC`

#### Tetikasa Tokana Rakitra Maromaro

Raha manana tetikasa iray ihany ianao dia azonao atao ny manamboatra azy toy izao manaraka izao.

```
  - i18n: doc
    url: flashduty
    use: Doc
```

> [!WARN]
> Tetikasa tokana misy rakitra marobe dia tsy manohana ny fanamboarana `url` ho lalan'ny faka `/`
> Raha __conf.yml → nav:__ Tsy misy lalan'ny fakany voarindra, rehefa miditra amin'ny pejy fandraisana ny tranokala, dia haverina ho azy amin'ny URL voalohany eo ambanin'ny config `nav:` .
> Ity famolavolana ity dia mba hanavahana tsara kokoa ny antontan-taratasy momba ny tetikasa, bilaogy ary votoaty hafa amin'ny alàlan'ny lahatahiry.
> Aroso ny mampiasa rakitra tokana sy pejy tokana ho pejy fandraisana.

> [!TIP]
> Raha tsy voasoratra `url` , dia `url` ny sandan'ny `i18n` Mihatra amin'ny maodely hafa koa io fitsipika io.

#### TOC Lisitry Ny Atiny Index

Raha toa ka alefa ao amin'ny configuration ny môdely `use: Doc` dia avelao ny plug-in `i18n.addon/toc` in `.i18n/conf.yml` :

```yml
addon:
  - i18n.addon/toc
```

`i18n.site` dia hametraka sy hanatanteraka ity plug-in ity ho azy, mamaky `TOC` ny rakitra fanondroana lahatahiry, ary mamorona `json` ny lisitry ny lahatahiry.

Raha tetikasa tokana misy rakitra maromaro izy io, ny lahatahiry fototra `TOC` dia ny lahatahiry mifanandrify amin'ny `url:` ao amin'ny lahatahiry fiteny loharano Ohatra, raha Sinoa ny fiteny loharano: ny rakitra mifanaraka amin'ny `url: flashduty` dia `zh/flashduty/TOC` .

Raha tetik'asa maro sy rakitra maro dia tsy ilaina ny manamboatra `url:` Ny lahatahiry fototry ny `TOC` dia ny lahatahiry mifanaraka amin'ny sandan'ny `i18n` .

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

`TOC` ny rakitra dia apetaka mba hanondroana ny fifandraisana ara-jeografika amin'ny drafitra, hanohanana indentation ambaratonga maro, ary fanehoan-kevitra andalana manomboka amin'ny `# ` .

##### Ny Lohatenin'ny Ray Aman-Dreny Ihany No Manoratra Fa Tsy Ny Votoatiny.

Rehefa misy ambaratonga maromaro ny indentation dia ny lohatenin'ny ray aman-dreny ihany no manoratra fa tsy ny atiny. Raha tsy izany dia hikorontana ny typography.

##### Tetikasa README.md

Ny votoatiny dia azo soratana amin'ny singa `README.md` , toy ny `en/demo2/README.md` .

Mariho fa ny votoatin'ity rakitra ity dia tsy mampiseho lisitry ny votoatiny, noho izany dia ilaina ny mametra ny halavany ary manoratra teny fampidirana fohy.

###### Teny Filamatra Tetikasa

Azonao atao ny mahita fa ny `Deme Two` dia manana ny tenifototra momba ny `Your Project slogan` :

![](https://p.3ti.site/1721276842.avif)

Mifanaraka amin'ny laharana voalohany amin'ny `en/demo2/README.md` izany :

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

### Fampidirana Default Tsy Misy Lalan'ny Fanamboarana

Ho an'ny lalana iray idirana, raha toa ka tsy voarindra ao amin'ny `nav:` ny prefix lalana, ny rakitra `MarkDown` mifanaraka amin'ny lalana dia hapetraka amin'ny alàlan'ny default ary adika amin'ny alàlan'ny môdely `Md` .

Ohatra, raha `/test` no idirana ary `nav:` no amboarina tsy misy tovan'ity lalana ity, ary ny fiteny fitetezana amin'izao fotoana izao dia anglisy (code `en` ), `/en/test.md` dia hapetraka amin'ny alàlan'ny default ary adika amin'ny alàlan'ny môdely `Md` .

Raha `/en/test.md` tsy misy ity rakitra ity dia hiseho ny pejy `404` default.

<img src="//p.3ti.site/1721184299.avif" style="width:360px">