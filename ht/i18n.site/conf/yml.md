# .i18n/conf.yml

`i18n.site` Fichye konfigirasyon an se `.i18n/conf.yml` .

Eksepte paramèt `ignore:` ak `i18n:` nan [`i18`](/i18) fichye konfigirasyon an se jan sa a:

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

Pami yo, `ext:` konfigirasyon atik la `upload` di ke sèlman `.md` yo pral telechaje lè yo pibliye.

## Top Navigasyon nav

`nav:` konfigirasyon, ki koresponn ak meni navigasyon ki anlè paj dakèy la.

<img src="//p.3ti.site/1721051426.avif" style="width:320px">

Pami yo, `i18n: home` koresponn ak `en/i18n.yml`中`home: Home` .

`en/i18n.yml` yo pral tradui nan plizyè lang, tankou `zh/i18n.yml` .

<img src="//p.3ti.site/1721051689.avif" style="width:320px">

Apre tradiksyon an fini, ou ka modifye valè `yml` nan tradiksyon an, men pa ajoute oswa efase kle nan tradiksyon `yml` .

### `use: Toc` , Yon Sèl Modèl Dosye (Ak Deskripsyon)

`nav` Konfigirasyon :

```
  - i18n: home
    use: Toc
    url: /
```

vle `use: Toc` itilize `Toc` rann, ki se rann yon sèl `Markdown` modèl.

`TOC` se Abreviyasyon `Table of Contents` `Markdown`

`url:` reprezante chemen fichye a nan `Markdown` ( `/` koresponn ak anyè rasin lan `/README.md` , non fichye sa a mande pou yon prefiks majiskil ak yon sifiks miniskil).

### `use: Md` Modèl Dosye Sèl (Pa Gen Okenn Deskripsyon)

`Md` se menm jan ak `Toc` , tou de yo itilize pou rann yon sèl `Markdown` fichye. Sepandan `Md` modèl la pa montre deskripsyon an nan ankadre a.

Ou ka `use: Toc` nan konfigirasyon ki anwo a nan `use: Md` , kouri `i18n.site` nan anyè `md` a ankò, epi ale nan URL preview devlopman an pou obsève chanjman yo sou paj dakèy la.

### Default Chaje San Chemen Konfigirasyon

Si prefiks chemen an nan yon sèten chemen ke yo jwenn aksè pa konfigirasyon nan `nav:` `MarkDown` fichye a ki koresponn ak chemen an pral chaje pa default epi rann lè l sèvi avèk `Md` modèl.

Pa egzanp, si w vizite `/test` , epi `nav:` se konfigirasyon san chemen sa a, epi lang paj la se angle (kòd `en` ), modèl la pral chaje `/en/test.md` epi rann lè l sèvi avèk `Md` pa default.

`/en/test.md` fichye sa a pa egziste, y ap parèt `404` paj la.

<img src="https://p.3ti.site/1721184299.avif" style="width:360px">

### `use: Doc` , Modèl Milti-Fichye

Nan dosye konfigirasyon an:

```
  - i18n: blog
    use: Doc
```

Endike lè l sèvi avèk `Doc`

`Doc` sipòte entegre plizyè `MarkDown` pou jenere plan dokiman pou pwojè sèl oswa plizyè.

#### Pwojè Sèl (Plizyè Fichye)

`blog` nan pi wo a se mòd nan yon sèl-pwojè nan `Doc` .

```
  - i18n: blog
    url: blog
    use: Doc
```

##### Lè url Vid, Li Par Défaut Pou Valè i18n

Si ou pa ekri `url` `url` nan valè `i18n` sa a tou ap aplike pou lòt modèl.

Metòd ekri pi wo a ekivalan a gen `url: blog` ak dosye korespondan li a se `en/blog/TOC` .

#### Plizyè Pwojè

`.i18n/conf.yml` Konfigirasyon an nan `i18n:doc` se mòd milti-pwojè.

```
  - i18n: doc
    menu: NB demo1,demo2
    use: Doc
```

<img src="https://p.3ti.site/1721275191.avif" width="320px">

Isit la, `menu: NB demo1,demo2` vle di itilize `NB` pou rann meni dewoulman an.

`NB` , se Abreviyasyon `Name Breif` , ki endike ke meni an ka montre non ak eslogan pwojè a.

`NB` se swiv pa paramèt `demo1,demo2` pase li.
Remake `demo1,demo2` ke pa ta dwe gen espas ** anvan ak apre vigil `,` nan : **

Pou paramèt ki anwo yo, fichye endèks anyè ki koresponn lan se:

* `en/demo1/TOC`
* `en/demo2/TOC`

#### TOC Endèks Tab La

`i18n.site` egzekite `js` plugin `.i18n/hook/after.tran/TOC.js` nan depo demonstrasyon an pou li fichye endèks anyè a `doc` ki koresponn ak konfigirasyon modèl la `TOC` pou jenere `json` deskripsyon anyè a.

Si w itilize modèl `doc` , ou dwe genyen plug-in sa a.

Si w inisyalize `i18n.site` a nan yon katab vid, sonje pou w kopye `.i18n` nan pwojè demo a nan anyè w la.

`Doc` Modèl la pral rann deskripsyon tab la ki baze sou `json` .

##### Eksplikasyon Detaye Sou Kontni

`en/blog/TOC` Kontni an se jan sa a :

```
README.md

news/README.md
  news/begin.md
```

##### Sèvi Ak Endentasyon Pou Endike Nivo Yo

`en/blog/TOC` `README.md` nan premye liy lan koresponn ak `i18n.site` nan foto ki anba a, ki se non pwojè a.

De pwochen liy yo jan yo montre nan ekran ki anba a.

<img src="https://p.3ti.site/1721097381.avif" style="width:320px">

`news/README.md` koresponn ak `News` ,
`news/begin.md` koresponn ak `Our Product is Online !`

`TOC` Fichye a endentasyon pou endike relasyon yerarchize deskripsyon an epi li sipòte plizyè nivo.

##### Nivo Paran an Sèlman Ekri Tit La, Pa Kontni An.

Lè gen plizyè nivo endentasyon, nivo paran an sèlman ekri tit la epi li pa kontni an. Sinon, tipografi yo pral dezòd.

##### Pwojè README.md 

`README.md` nan pwojè a, pou egzanp, ou ka ekri kontni nan `en/demo2/README.md` .

Remake byen ke kontni an nan dosye sa a pa montre yon deskripsyon tab la, kidonk li rekòmande pou limite longè a epi ekri yon ti entwodiksyon.

###### Eslogan Pwojè

Kòm ou ka wè `Deme Two` anba meni deroule a ak non pwojè katalòg la, gen eslogan pwojè li `Your Project slogan` :

<img alt="" src="https://p.3ti.site/1721276842.avif">

: koresponn ak premye liy lan `en/demo2/README.md`

```
# Demo Two : Your Project slogan
```

Pwojè `README.md` Kontni ki apre premye kolon `:` nan tit premye nivo a pral konsidere kòm eslogan pwojè a.

Itilizatè ki soti nan Lachin, Japon ak Kore, tanpri sonje ke ou dwe itilize kolon mwatye lajè olye de kolon plen lajè `:`

##### Ki Jan Yo Deplase TOC an Esansyèl?

`TOC` Fichye a dwe plase nan anyè lang sous la.

Pa egzanp, si lang sous la se Chinwa, anlè `TOC` se `zh/blog/TOC` .

Si lang sous la modifye, ou bezwen pakèt deplase `TOC` nan yon sèten lang nan pwojè a nan yon lòt lang.

Ou ka fè referans a kòmandman sa yo:

```
rsync -av --remove-source-files --include='*/' \
--include='TOC' --exclude='*' en/ zh/
```

Tanpri modifye `en/` ak `zh/` nan kòmandman an pi wo a nan kòd lang ou a.


