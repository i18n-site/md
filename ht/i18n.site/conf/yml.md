# .i18n/conf.yml

Pwofil pou `i18n.site` se `.i18n/conf.yml` .

Eksepte paramèt [`i18`](/i18) , `ignore:` ak `i18n:` , fichye konfigirasyon an se jan sa a:

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

Pami yo, `upload` a `ext:` atik konfigirasyon vle di ke sèlman `.md` yo pral Uploaded lè pibliye.

## Top Navigasyon nav

`nav:` opsyon konfigirasyon, ki koresponn ak meni navigasyon ki anlè paj lakay la.

<img src="//p.3ti.site/1721051426.avif" style="width:320px">

Pami yo, `i18n: home` koresponn ak `home: Home` nan `en/i18n.yml` .

`en/i18n.yml` pral tradui nan plizyè lang, tankou `zh/i18n.yml` .

<img src="//p.3ti.site/1721051689.avif" style="width:320px">

Apre tradiksyon an fini, ou ka modifye valè tradiksyon `yml` , men pa ajoute oswa efase kle tradiksyon `yml` la.

### `use: Toc` , Yon Sèl Modèl Dosye (Avèk Deskripsyon)

`nav` :

```
  - i18n: home
    use: Toc
    url: /
```

`use: Toc` vle di rann lè l sèvi avèk yon modèl `Toc` , ki se rann yon sèl modèl `Markdown` .

`TOC` se Abreviyasyon `Table of Contents` Lè modèl sa a rann, deskripsyon `Markdown` fichye sa a pral parèt nan ankadre a.

`url:` reprezante chemen fichye a nan `Markdown` ( `/` koresponn ak anyè rasin `/README.md` , non fichye sa a mande pou yon prefiks majiskil ak yon sifiks miniskil).

### `use: Md` , Yon Sèl Modèl Dosye (Pa Gen Deskripsyon)

Modèl `Md` a ak modèl `Toc` a se menm bagay la epi tou de yo itilize pou rann yon sèl fichye `Markdown` . Men, `Md` modèl la pa montre deskripsyon an nan ankadre a.

Ou ka modifye `use: Toc` nan konfigirasyon ki anwo a a `use: Md` , kouri `i18n.site` nan anyè a `md` ankò, epi Lè sa a, vizite URL la preview devlopman yo obsève chanjman yo sou paj dakèy la.

### Default Chaje San Chemen Konfigirasyon

Si yo jwenn aksè nan yon sèten chemen epi prefiks chemen li yo pa konfigirasyon nan `nav:` , `MarkDown` fichye ki koresponn ak chemen an pral chaje pa default epi rann lè l sèvi avèk modèl la `Md` .

Pa egzanp, si `/test` jwenn aksè, epi `nav:` konfigirasyon san chemen sa a, ak lang paj la se angle (kòd `en` ), `/en/test.md` pral chaje pa default epi rann lè l sèvi avèk modèl `Md` .

Si `/en/test.md` fichye sa a pa egziste, paj `404` defo a ap parèt.

<img src="https://p.3ti.site/1721184299.avif" style="width:360px">

### `use: Doc` , Modèl Milti-Fichye

Nan dosye konfigirasyon an:

```
  - i18n: blog
    use: Doc
```

Endike itilize `Doc` pou rann modèl.

`Doc` modèl sipòte entegre miltip `MarkDown` pou jenere plan dokiman pou pwojè sèl oswa miltip.

#### Pwojè Sèl (Plizyè Fichye)

`blog` pi wo a se mòd yon sèl atik nan `Doc` .

```
  - i18n: blog
    url: blog
    use: Doc
```

##### Lè url Vid, Li Par Défaut Pou Valè i18n

Si `url` pa ekri, `url` pa defo a valè `i18n` Règ sa a pran efè tou pou lòt modèl.

Metòd ekri pi wo a ekivalan a `url: blog` , ak dosye korespondan li a se `en/blog/TOC` .

#### Plizyè Pwojè

Konfigirasyon `i18n:doc` soti nan `.i18n/conf.yml` se mòd milti-pwojè.

```
  - i18n: doc
    menu: NB demo1,demo2
    use: Doc
```

<img src="https://p.3ti.site/1721275191.avif" width="320px">

Isit la, `menu: NB demo1,demo2` , vle di lè l sèvi avèk modèl la `NB` pou rann meni an dewoule.

`NB` , ki se abrevyasyon nan `Name Breif` , vle di ke meni an drop-down ka montre non an ak eslogan nan pwojè a.

`NB` swiv pa paramèt `demo1,demo2` ki pase nan li.
: ** pa ta dwe gen espas ** anvan ak apre vigil `,` nan `demo1,demo2` .

Pou paramèt ki anwo yo, fichye endèks anyè ki koresponn lan se:

* `en/demo1/TOC`
* `en/demo2/TOC`

#### TOC Endèks Tab La

`i18n.site` pral egzekite `js` plug-in `.i18n/hook/after.tran/TOC.js` nan depo Demo a pou li `doc` fichye endèks anyè ki koresponn ak `TOC` konfigirasyon modèl la pou jenere deskripsyon anyè `json` la.

Si w itilize `doc` modèl, ou dwe genyen plug-in sa a.

Si w inisyalize pwojè `i18n.site` nan yon katab vid, sonje pou w kopye pwojè demo `.i18n` nan anyè w la.

Modèl `Doc` a pral rann deskripsyon tab la ki baze sou `json` ki te pwodwi a.

##### Eksplikasyon Detaye Sou Kontni

`en/blog/TOC` Kontni an se jan sa a :

```
README.md

news/README.md
  news/begin.md
```

##### Sèvi Ak Endentasyon Pou Endike Nivo Yo

`README.md` nan premye ranje `en/blog/TOC` anlè a koresponn ak `i18n.site` nan foto ki anba a, ki se non pwojè a.

De pwochen liy yo jan yo montre nan ekran ki anba a.

<img src="https://p.3ti.site/1721097381.avif" style="width:320px">

`news/README.md` koresponn ak `News` ,
`news/begin.md` koresponn ak `Our Product is Online !`

`TOC` fichye yo endentasyon pou endike relasyon yerarchize deskripsyon an, sipòte endentasyon milti-nivo, ak kòmantè liy ki kòmanse ak `#` .

##### Nivo Paran an Sèlman Ekri Tit La, Pa Kontni An.

Lè gen plizyè nivo endentasyon, nivo paran an sèlman ekri tit la epi pa kontni an. Sinon, tipografi yo pral dezòd.

##### Pwojè README.md

Kontni yo ka ekri nan atik `README.md` , tankou `en/demo2/README.md` .

Remake byen ke kontni an nan dosye sa a pa montre yon deskripsyon tab la, kidonk li rekòmande pou limite longè a epi ekri yon ti entwodiksyon.

###### Eslogan Pwojè

Ou ka wè ke `Deme Two` gen eslogan pwojè li `Your Project slogan` :

![](https://p.3ti.site/1721276842.avif)

Sa a koresponn ak premye ranje a `en/demo2/README.md` :

```
# Demo Two : Your Project slogan
```

Kontni ki apre premye kolon `:` nan tit premye nivo pwojè `README.md` pral konsidere kòm eslogan pwojè a.

Itilizatè ki soti nan Lachin, Japon ak Kore di, tanpri sonje ke ou ta dwe itilize kolon mwatye lajè `:` olye de kolon plen lajè.

##### Ki Jan Yo Deplase TOC an Esansyèl?

`TOC` fichye yo bezwen mete nan anyè lang sous la.

Pou egzanp, si lang sous la se Chinwa, Lè sa a, `TOC` pi wo a se `zh/blog/TOC` .

Si lang sous la modifye, ou bezwen pakèt deplase `TOC` fichye yo nan yon lang sèten nan pwojè a nan yon lòt lang.

Ou ka fè referans a kòmandman sa yo:

```
rsync -av --remove-source-files --include='*/' \
--include='TOC' --exclude='*' en/ zh/
```

Tanpri modifye `en/` ak `zh/` nan kòmandman ki anwo a nan kòd lang ou a.