# .i18n/conf.yml Oyo Ezali Na Kati

Fisyé ya configuration ezali `.i18n/conf.yml` `i18n.site`

Longola se ba paramètres `ignore:` na `i18n:` ya [`i18`](/i18) , fichier ya configuration ezali boye:

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

Kati na yango, eloko ya `ext:` configuration ya `upload` elakisi ete kaka `.md` nde ekozala uploaded tango ya publier.

## Likolo Ya Navigation nav

`nav:`

<img src="//p.3ti.site/1721051426.avif" style="width:320px">

Kati `home: Home` `en/i18n.yml` , `i18n: home`

ekobongola na minoko ebele, lokola `zh/i18n.yml` `en/i18n.yml`

<img src="//p.3ti.site/1721051689.avif" style="width:320px">

Nsima ya kosilisa libongoli, okoki kobongola motuya ya `yml` na libongoli, kasi kobakisa to kolongola fungola ya libongoli `yml` .

### `use: Toc` , Modèle Ya Fichier Moko (Na Contour)

Kobongisa : `nav`

```
  - i18n: home
    use: Toc
    url: /
```

`use: Toc` `Toc` `Markdown`

`TOC` `Table of Contents` `Markdown`

`url:` ezali komonisa nzela ya fisyé ya `Markdown` ( `/` ekokani na répertoire ya misisa `/README.md` , kombo ya fisyé oyo esengi liboso ya makomi minene mpe makomi mike).

### `use: Md` , Modèle Ya Fichier Moko (Contour Te)

`Md` Modèle ezali ndenge moko na `Toc` , nyonso mibale esalelamaka mpo na kosala fisyé moko `Markdown` . Kasi `Md` modèle elakisaka plan te na barre latérale.

Okoki kobongola `use: Toc` na configuration oyo ezali likolo na `use: Md` , kosala `i18n.site` na répertoire `md` lisusu, mpe sima kotala URL ya aperçu ya développement mpo na kotala mbongwana na lokasa ya ebandeli.

### Chargement Par Défaut Sans Nzela Ya Configuration

Soki préfixe ya nzela ya nzela moko boye oyo ezali ko accéder e configuré te na `nav:` fichier `MarkDown` oyo ekokani na nzela ekozala chargé par défaut mpe eko rendre na nzela ya modèle `Md` .

`Md` , `nav:` `en` `/en/test.md` `/test`

Soki `/en/test.md` fisyé oyo ezali te, lokasa `404` ya liboso ekolakisama.

<img src="https://p.3ti.site/1721184299.avif" style="width:360px">

### `use: Doc` , Modèle Ya Ba Fichiers Ebele

Na fichier ya configuration:

```
  - i18n: blog
    use: Doc
```

Ezali kolakisa kosalela `Doc`

`Doc` Modèle esungaka kosangisa `MarkDown` ebele mpo na kobimisa ba plans ya mikanda mpo na ba projets moko to ebele.

#### Projet Moko (Ba Fichiers Ebele) .

na `blog` ezali likolo ezali mode ya projet unique ya `Doc` .

```
  - i18n: blog
    url: blog
    use: Doc
```

##### Tango url Ezali Vide, Ezo Défaut Na Valeur Ya i18n

`url` okomi `i18n` `url`

Méthode ya kokoma oyo ezali likolo ekokani na kozala na `url: blog` mpe fichier na yango oyo ekokani ezali `en/blog/TOC` .

#### Ba Projets Ebele

`.i18n/conf.yml` Configuration na `i18n:doc` ezali mode multi-projet.

```
  - i18n: doc
    menu: NB demo1,demo2
    use: Doc
```

<img src="https://p.3ti.site/1721275191.avif" width="320px">

Awa, `menu: NB demo1,demo2` elakisi kosalela `NB` mpo na kosala menu ya kokita.

`NB` `Name Breif`

`NB` elandami na paramètre `demo1,demo2` oyo elekisami na yango.
Yeba ete esengeli kozala `demo1,demo2` bisika te ** liboso mpe nsima ya virgule `,` na : **

Mpo na ba paramètres oyo ezali likolo, fichier index ya répertoire oyo ekokani ezali:

* `en/demo1/TOC`
* `en/demo2/TOC`

#### Index Ya Tableau Ya Contenus Ya TOC

`i18n.site` Ekosala `js` plugin `.i18n/hook/after.tran/TOC.js` na entrepôt ya démonstration mpo na kotanga fichier index ya répertoire `doc` oyo ekokani na configuration ya modèle `TOC` mpo na kobimisa `json` ya plan ya répertoire.

Soki osaleli `doc` modèle, esengeli ozala na plug-in oyo.

Soki o initialiser projet `i18n.site` à partir ya dossier vide, kobosana te ko copier `.i18n` na projet ya démonstration na répertoire na yo.

`Doc` ekosala plan ya tableau ya contenus na kotalela `json` oyo esalemi.

##### Ndimbola Ya Makambo Oyo Ezali Na Kati Ya Sikisiki

Contenu ezali : `en/blog/TOC`

```
README.md

news/README.md
  news/begin.md
```

##### Salelá Indentation Mpo Na Kolakisa Ba Niveaux

Likolo `en/blog/TOC` `README.md` ezali na molongo ya liboso ekokani na `i18n.site` oyo ezali na elilingi oyo ezali awa na nse, oyo ezali nkombo ya mosala.

Milɔngɔ́ mibale oyo elandi ezali ndenge emonisami na capture d’écran oyo ezali awa na nse.

<img src="https://p.3ti.site/1721097381.avif" style="width:320px">

ekokani na `News` , `news/README.md`
ekokani na `Our Product is Online !` `news/begin.md`

`TOC` Fisyé ekangami mpo na kolakisa boyokani ya hiérarchie ya plan mpe esungaka indentation ya niveau ebele.

##### Niveau Ya Parent Ekomaka Kaka Titre, Contenus Te.

Tango ezali na ba niveaux ebele ya indentation, niveau ya parent ekomaka kaka titre et non contenus. Soki te, typographie ekozala mobulu.

##### Projet README.md 

ya `README.md` , ndakisa, okoki kokoma contenus na `en/demo2/README.md` .

Simbá ete makambo oyo ezali na fisyé oyo ezali komonisa te plan ya makambo oyo ezali na kati, yango wana ezali malamu kotya ndelo na bolai mpe kokoma maloba ya ebandeli mokuse.

###### Slogan Ya Projet

: bokoki `Your Project slogan` , `Deme Two`

<img alt="" src="https://p.3ti.site/1721276842.avif">

: ekokani na ligne ya liboso `en/demo2/README.md`

```
# Demo Two : Your Project slogan
```

Projet `README.md` Makambo oyo ezali sima ya colonne `:` ya liboso na titre ya niveau ya liboso ekotalelama lokola slogan ya projet.

Ba usagers ya Chine, Japon na Corée, bo yeba que esengeli bosalela colon ya demi largeur `:` esika ya colon ya largeur mobimba.

##### Ndenge Nini Ko Déplacer TOC en Gros?

`TOC` Esengeli kotia fisyé na répertoire ya monoko ya source.

Ndakisa, soki monoko ya source ezali `zh/blog/TOC` , alors `TOC`

Soki monoko ya source ebongwani, esengeli o batch move `TOC` na monoko moko boye na projet na monoko mosusu.

Okoki kotala mitindo oyo elandi:

```
rsync -av --remove-source-files --include='*/' \
--include='TOC' --exclude='*' en/ zh/
```

Svp modifier `en/` na `zh/` na commande oyo ezali likolo na code ya langue na yo.


