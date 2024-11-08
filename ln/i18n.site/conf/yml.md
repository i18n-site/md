# .i18n/conf.yml

Fichier ya configuration pona `i18n.site` ezali `.i18n/conf.yml` pe contenus ezali boye :

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

Parmi bango, `upload` à `ext:` élément ya configuration elakisi que kaka `.md` nde eko uploader tango ya publier.

## Likolo Ya Navigation nav

`nav:` options ya configuration, oyo ekokani na menu ya navigation na likolo ya page d'accueil.

<img src="//p.3ti.site/1721051426.avif" style="width:320px">

Na kati na yango, `i18n: home` ekokani na `home: Home` na `en/i18n.yml` (esika `en` ezali monoko ya source ya libongoli ya projet).

`en/i18n.yml` contenus ezali texte oyo elakisami na menu ya navigation, oyo ekobongola selon `fromTo` na configuration, par exemple, ebongolami na `zh/i18n.yml` .

<img src="//p.3ti.site/1721051689.avif" style="width:320px">

Nsima ya kosilisa kobongola, okoki kobongola motuya ya libongoli `yml` , kasi kobakisa to kolongola fungola ya libongoli `yml` te.

### `use: Toc` Na Plan

`nav` :

```
  - i18n: home
    use: Toc
    url: /
```

`use: Toc` elakisi kosala na kosalelaka modèle `Toc` , oyo ezali kosala modèle moko `Markdown` .

`TOC` ezali mokuse ya `Table of Contents` Tango modèle oyo eko rendu, plan ya fichier `Markdown` oyo ekolakisama na barre latérale.

`url:` ezali komonisa nzela ya fisyé ya `Markdown` ( `/` ekokani na répertoire ya misisa `/README.md` , kombo ya fisyé oyo esengi liboso ya makomi minene mpe sima ya makomi mike).

### `use: Md` Ya Mokanda Moko Sans Plan

Modèle `Md` na modèle `Toc` ezali ndenge moko mpe nyonso mibale esalelamaka mpo na kosala fichier moko `Markdown` . Kasi modèle `Md` elakisaka plan te na barre latérale.

Okoki kobongola `use: Toc` na configuration oyo ezali likolo na `use: Md` , kosala `i18n.site` na répertoire `md` lisusu, mpe na sima kotala URL ya aperçu ya développement mpo na kotala mbongwana na page d’accueil.

### `use: Blog` Modèles Ya Blog

Modèle ya blog elakisaka liste ya ba articles (ba titres na ba abstraits) na ordre ya temps ya publication.

[→ Finá awa mpo na koyeba makambo etali configuration spécifique](/i18n.site/conf/blog)

### 0Ba Modèles Ya Mikanda Ya Fichier `use: Doc`

Na fichier ya configuration:

```
  - i18n: doc
    menu: NB demo1,demo2
    use: Doc
```

Ezali kolakisa kosalela `Doc` mpo na botalisi ya modèle.

`Doc` modèle esungaka kosangisa `MarkDown` ebele pona kobimisa ba plans ya mikanda pona ba projets moko to ebele.

#### Ba Projets Ebele Na Ba Fichiers Ebele

Configuration ya `.i18n/conf.yml` na `i18n:doc` ezali mode ya rendu ya ba fichiers ebele ya ba projets ebele.

Awa, `menu: NB demo1,demo2` , elakisi kosalela modèle `NB` mpo na kosala menu oyo ezali kokita.

<img src="//p.3ti.site/1721275191.avif" width="320px">

`NB` , oyo ezali mokuse ya `Name Breif` , elakisi ete menu oyo ezali kokita ekoki kolakisa nkombo mpe slogan ya mosala.

`NB` elandi na paramètre `demo1,demo2` oyo elekisami na yango.

: ** Esengeli kozala na bisika te ** liboso mpe nsima ya virgule `,` na `demo1,demo2` .

Fisyé index ya répertoire oyo ekokani mpo na ba paramètres oyo ezali likolo ezali:

* `en/demo1/TOC`
* `en/demo2/TOC`

#### Projet Moko Ba Fichiers Ebele

Soki ozali kaka na projet moko, okoki ko configurer yango ndenge elandi.

```
  - i18n: doc
    url: flashduty
    use: Doc
```

> [!WARN]
> Projet moko na ba fichiers ebele esalisaka te ko configurer `url` lokola nzela ya misisa `/`
> Soki __conf.yml → nav:__ Nzela ya misisa ebongisami te, tango ya kokota na lokasa ya ebandeli ya site internet, ekokomama lisusu automatiquement na URL ya liboso na se ya configuration `nav:` .
> Conception oyo ezali pona kokesenisa malamu mikanda ya projet, ba blogs pe ba contenus misusu na nzela ya ba répertoires.
> Ezali malamu kosalela fisyé moko mpe lokasa moko lokola lokasa ya ebandeli.

> [!TIP]
> Soki `url` ekomami te, `url` ekomi na motuya ya `i18n` Mobeko oyo ekozwa mpe nguya mpo na ba modèles mosusu.

#### Index Ya Tableau Ya Contenus Ya TOC

Soki modèle `use: Doc` ezali activé na configuration, activer plug-in `i18n.addon/toc` na `.i18n/conf.yml` Configuration ezali boye :

```yml
addon:
  - i18n.addon/toc
```

`i18n.site` eko installer automatiquement pe e exécuter plug-in oyo, ekotanga `TOC` fichier index ya répertoire, pe eko produire `json` plan ya répertoire.

Soki ezali projet moko na ba fichiers ebele, répertoire ya misisa `TOC` ezali répertoire oyo ekokani na `url:` na répertoire ya langue source Ndakisa, soki langue source ezali chinoise : fichier oyo ekokani na `url: flashduty` ezali `zh/flashduty/TOC` .

Soki ezali ba projets ebele na ba fichiers ebele, esengeli te ko configurer `url:` Répertoire ya misisa ya `TOC` ezali répertoire oyo ekokani na valeur ya `i18n` .

##### Ndimbola Ya Makambo Oyo Ezali Na Kati Ya Sikisiki

`en/blog/TOC` oyo ezali na kati ezali boye :

```
README.md

news/README.md
  news/begin.md
```

##### Salelá Indentation Mpo Na Kolakisa Ba Niveaux

`README.md` oyo ezali na molɔngɔ ya liboso ya `en/blog/TOC` oyo ezali likoló ekokani na `i18n.site` oyo ezali na elilingi oyo ezali awa na nse, oyo ezali nkombo ya mosala.

Milɔngɔ́ mibale oyo elandi ezali ndenge emonisami na capture d’écran oyo ezali awa na nse.

<img src="https://p.3ti.site/1721097381.avif" style="width:320px">

`news/README.md` ekokani na `News` , .
`news/begin.md` ekokani na `Our Product is Online !`

`TOC` fichiers ezali indentés mpo na kolakisa relation hiérarchique ya plan, ko soutenir indentation multi-niveau, mpe ba commentaires ya ligne kobanda na `# ` .

##### Niveau Ya Parent Ekomaka Kaka Titre, Contenus Te.

Tango ezali na ba niveaux ebele ya indentation, niveau ya parent ekomaka kaka titre et non contenus. Soki te, typographie ekozala mobulu.

##### Projet README.md

Makambo oyo ezali na kati ekoki kokomama na eloko `README.md` , lokola `en/demo2/README.md` .

Simbá ete makambo oyo ezali na fisyé oyo ezali komonisa te plan ya makambo oyo ezali na kati, yango wana ezali malamu kotya ndelo na bolai mpe kokoma maloba ya ebandeli mokuse.

###### Slogan Ya Projet

Okoki komona ete `Deme Two` ezali na tagline ya projet na yango na se ya menu déroulant mpe kombo ya projet ya plan ya catalogue `Your Project slogan` :

![](https://p.3ti.site/1721276842.avif)

Yango ekokani na molongo ya liboso ya `en/demo2/README.md` :

```
# Demo Two : Your Project slogan
```

Makambo oyo ezali sima ya colonne `:` ya liboso ya titre ya niveau ya liboso ya projet `README.md` ekotalelama lokola slogan ya projet.

Ba usagers oyo bawutaka na Chine, Japon na Corée, bo yeba que esengeli bosalela colon ya demi-largeur `:` na esika ya colon ya largeur mobimba.

##### Ndenge Nini Ko Déplacer TOC en Gros?

Esengeli kotia ba fichiers `TOC` na répertoire ya monoko ya source.

Na ndakisa, soki monɔkɔ oyo euti na yango ezali Chinois, boye `TOC` oyo ezali likoló ezali `zh/blog/TOC` .

Soki monoko ya source ebongwani, esengeli o batch ko déplacer ba `TOC` fichiers ya langue moko boye na projet na langue mosusu.

Okoki kotala mitindo oyo elandi:

```
rsync -av --remove-source-files --include='*/' \
--include='TOC' --exclude='*' en/ zh/
```

Svp bobongola `en/` na `zh/` na commande oyo ezali likolo na code ya monoko na yo.

### Chargement Par Défaut Sans Nzela Ya Configuration

Mpo na nzela moko boye oyo ezali kozwama, soki liboso ya nzela ebongisami te na `nav:` , fisyé `MarkDown` oyo ekokani na nzela ekozwama na ndenge ya libela mpe ekopesama na kosalelaka modèle `Md` .

Ndakisa, soki `/test` ezwami mpe `nav:` ebongisami kozanga liboso ya nzela oyo, mpe monoko ya botali ya lelo ezali Lingelesi (code `en` ), `/en/test.md` ekozwama na ndenge ya libela mpe ekopesama na kosalelaka modèle `Md` .

Soki `/en/test.md` fisyé oyo ezali te, lokasa `404` ya liboso ekolakisama.

<img src="//p.3ti.site/1721184299.avif" style="width:360px">