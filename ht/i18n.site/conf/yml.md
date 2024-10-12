# .i18n/conf.yml

Fichye a konfigirasyon pou `i18n.site` se `.i18n/conf.yml` ak kontni an se jan sa a :

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

Pami yo, `upload` a `ext:` atik konfigirasyon vle di ke sèlman `.md` yo pral Uploaded lè pibliye.

## Top Navigasyon nav

`nav:` opsyon konfigirasyon, ki koresponn ak meni navigasyon ki anlè paj lakay la.

<img src="//p.3ti.site/1721051426.avif" style="width:320px">

Pami yo, `i18n: home` koresponn ak `home: Home` nan `en/i18n.yml` (kote `en` se lang sous tradiksyon pwojè a).

`en/i18n.yml` kontni se tèks ki parèt nan meni navigasyon an, ki pral tradui dapre `fromTo` nan konfigirasyon an, pou egzanp, tradui nan `zh/i18n.yml` .

<img src="//p.3ti.site/1721051689.avif" style="width:320px">

Apre tradiksyon an fini, ou ka modifye valè tradiksyon `yml` , men pa ajoute oswa efase kle tradiksyon `yml` la.

### `use: Toc` , Modèl Dosye Sèl Ak Deskripsyon

`nav` :

```
  - i18n: home
    use: Toc
    url: /
```

`use: Toc` vle di rann lè l sèvi avèk yon modèl `Toc` , ki se rann yon sèl modèl `Markdown` .

`TOC` se Abreviyasyon `Table of Contents` Lè modèl sa a rann, deskripsyon `Markdown` fichye sa a pral parèt nan ankadre a.

`url:` reprezante chemen fichye a nan `Markdown` ( `/` koresponn ak anyè rasin `/README.md` , non fichye sa a mande pou yon prefiks majiskil ak yon sifiks miniskil).

### `use: Md` , Modèl Dosye Sèl San Deskripsyon

Modèl `Md` a ak modèl `Toc` a se menm bagay la epi tou de yo itilize pou rann yon sèl fichye `Markdown` . Men, `Md` modèl la pa montre deskripsyon an nan ankadre a.

Ou ka modifye `use: Toc` nan konfigirasyon ki anwo a a `use: Md` , kouri `i18n.site` nan anyè a `md` ankò, epi Lè sa a, vizite URL la preview devlopman yo obsève chanjman yo sou paj dakèy la.

### `use: Blog` Modèl Blog

Modèl blog la montre yon lis atik (tit ak rezime) nan lòd lè piblikasyon an.

[→ Klike la a pou aprann sou konfigirasyon espesifik la](/i18n.site/conf/blog)

### `use: Doc` , Modèl Dokiman Milti-Dosye

Nan dosye konfigirasyon an:

```
  - i18n: doc
    menu: NB demo1,demo2
    use: Doc
```

Endike itilize `Doc` pou rann modèl.

`Doc` modèl sipòte entegre miltip `MarkDown` pou jenere plan dokiman pou pwojè sèl oswa miltip.

#### Plizyè Pwojè Ak Plizyè Fichye

Konfigirasyon `.i18n/conf.yml` nan `i18n:doc` se mòd rann milti-pwojè.

Isit la, `menu: NB demo1,demo2` , vle di lè l sèvi avèk modèl la `NB` pou rann meni an dewoule.

<img src="//p.3ti.site/1721275191.avif" width="320px">

`NB` , ki se abrevyasyon nan `Name Breif` , vle di ke meni an drop-down ka montre non an ak eslogan nan pwojè a.

`NB` swiv pa paramèt `demo1,demo2` ki pase nan li.

: ** pa ta dwe gen espas ** anvan ak apre vigil `,` nan `demo1,demo2` .

Pou paramèt ki anwo yo, fichye endèks anyè ki koresponn lan se:

* `en/demo1/TOC`
* `en/demo2/TOC`

#### Single Pwojè Plizyè Dosye

Si ou gen sèlman yon pwojè, ou ka configured li jan sa a.

```
  - i18n: xxx
    use: Doc
```

##### Lè url Vid, Li Par Défaut Pou Valè i18n

Si `url` pa ekri, `url` pa defo a valè `i18n` Règ sa a pran efè tou pou lòt modèl.

Metòd ekri pi wo a ekivalan a `url: xxx` , ak dosye korespondan li a se `en/xxx/TOC` .

#### TOC Endèks Tab La

`i18n.site` pral egzekite `js` plug-in `.i18n/hook/after.tran/TOC.js` nan depo Demo a pou li `TOC` fichye endèks anyè ki koresponn ak `doc` konfigirasyon modèl la pou jenere deskripsyon anyè `json` la.

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

Lè gen plizyè nivo endentasyon, nivo paran an sèlman ekri tit la epi li pa kontni an. Sinon, tipografi yo pral dezòd.

##### Pwojè README.md

Kontni yo ka ekri nan atik `README.md` , tankou `en/demo2/README.md` .

Remake byen ke kontni an nan dosye sa a pa montre yon deskripsyon tab la, kidonk li rekòmande pou limite longè a epi ekri yon ti entwodiksyon.

###### Eslogan Pwojè

Ou ka wè ke `Deme Two` gen eslogan `Your Project slogan` :

![](https://p.3ti.site/1721276842.avif)

Sa a koresponn ak premye ranje a nan `en/demo2/README.md` :

```
# Demo Two : Your Project slogan
```

Kontni ki apre premye kolon `:` nan tit premye nivo pwojè `README.md` a pral konsidere kòm eslogan pwojè a.

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

### Default Chaje San Chemen Konfigirasyon

Pou yon sèten chemen yo jwenn aksè, si prefiks chemen an pa configuré nan `nav:` , `MarkDown` fichye ki koresponn ak chemen an pral chaje pa default epi rann lè l sèvi avèk modèl la `Md` .

Pou egzanp, si yo jwenn aksè nan `/test` , epi `nav:` konfigirasyon san prefiks chemen sa a, ak lang nan Navigasyon aktyèl la se angle (kòd `en` ), `/en/test.md` pral chaje pa default epi rann lè l sèvi avèk modèl `Md` .

Si `/en/test.md` fichye sa a pa egziste, paj `404` defo a ap parèt.

<img src="//p.3ti.site/1721184299.avif" style="width:360px">