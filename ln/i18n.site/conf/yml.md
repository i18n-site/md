# .i18n/conf.yml

Profil mpo na `i18n.site` ezali `.i18n/conf.yml` .

Longola kaka ba paramètres ya [`i18`](/i18) , `ignore:` na `i18n:` , fichier ya configuration ezali boye:

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

Parmi bango, `upload` à `ext:` élément ya configuration elakisi que kaka `.md` nde eko uploader tango ya publier.

## Likolo Ya Navigation nav

`nav:` options ya configuration, oyo ekokani na menu ya navigation na likolo ya page d’accueil.

<img src="//p.3ti.site/1721051426.avif" style="width:320px">

Kati na yango, `i18n: home` ekokani na `home: Home` kati na `en/i18n.yml` .

`en/i18n.yml` ekobongola na minoko ebele, lokola `zh/i18n.yml` .

<img src="//p.3ti.site/1721051689.avif" style="width:320px">

Nsima ya kosilisa kobongola, okoki kobongola motuya ya libongoli `yml` , kasi kobakisa to kolongola fungola ya libongoli `yml` .

### `use: Toc` , Modèle Ya Fichier Moko (Na Plan) .

`nav` :

```
  - i18n: home
    use: Toc
    url: /
```

`use: Toc` elakisi kosala na kosalelaka modèle `Toc` , oyo ezali kosala modèle moko ya `Markdown` .

`TOC` ezali mokuse ya `Table of Contents` Tango modèle oyo eko rendu, plan ya fichier `Markdown` oyo ekolakisama na barre latérale.

`url:` ezali komonisa nzela ya fisyé ya `Markdown` ( `/` ekokani na répertoire ya misisa `/README.md` , kombo ya fisyé oyo esengi liboso ya makomi minene mpe sima ya makomi mike).

### `use: Md` , Modèle Ya Fichier Moko (Contour Te) .

Modèle `Md` na modèle `Toc` ezali ndenge moko mpe nyonso mibale esalelamaka mpo na kosala fichier moko `Markdown` . Kasi modèle ya `Md` elakisaka plan te na barre latérale.

Okoki kobongola `use: Toc` na configuration oyo ezali likolo na `use: Md` , kosala `i18n.site` na répertoire `md` lisusu, mpe na sima kotala URL ya aperçu ya développement mpo na kotala mbongwana na page d’accueil.

### Chargement Par Défaut Sans Nzela Ya Configuration

Soki nzela moko boye ezwami mpe liboso ya nzela na yango ebongisami te na `nav:` , fisyé `MarkDown` oyo ekokani na nzela ekozwama na ndenge ya libela mpe ekopesama na kosalelaka modèle `Md` .

Ndakisa, soki `/test` ezwami, mpe `nav:` ebongisi kozanga nzela oyo, mpe monoko ya lokasa ezali Lingelesi (code `en` ), `/en/test.md` ekozwama na ndenge ya libela mpe ekopesama na kosalelaka modèle `Md` .

Soki `/en/test.md` fisyé oyo ezali te, lokasa `404` ya liboso ekolakisama.

<img src="https://p.3ti.site/1721184299.avif" style="width:360px">

### `use: Doc` , Modèle Ya Ba Fichiers Ebele

Na fichier ya configuration:

```
  - i18n: blog
    use: Doc
```

Ezali kolakisa kosalela `Doc` mpo na botalisi ya modèle.

`Doc` modèle esungaka kosangisa `MarkDown` ebele pona kobimisa ba plans ya mikanda pona ba projets moko to ebele.

#### Projet Moko (Ba Fichiers Ebele) .

`blog` oyo ezali likolo ezali mode ya eloko moko ya `Doc` .

```
  - i18n: blog
    url: blog
    use: Doc
```

##### Tango url Ezali Vide, Ezo Défaut Na Valeur Ya i18n

Soki `url` ekomami te, `url` ekomi na motuya ya `i18n` Mobeko oyo ekozwa mpe nguya mpo na ba modèles mosusu.

Lolenge ya kokoma oyo ezali likolo ekokani na `url: blog` , mpe fichier na yango oyo ekokani na yango ezali `en/blog/TOC` .

#### Ba Projets Ebele

Configuration ya `i18n:doc` sur `.i18n/conf.yml` ezali mode multi-projet.

```
  - i18n: doc
    menu: NB demo1,demo2
    use: Doc
```

<img src="https://p.3ti.site/1721275191.avif" width="320px">

Awa, `menu: NB demo1,demo2` , elakisi kosalela modèle `NB` mpo na kosala menu oyo ezali kokita.

`NB` , oyo ezali mokuse ya `Name Breif` , elakisi ete menu oyo ezali kokita ekoki kolakisa nkombo mpe slogan ya mosala.

`NB` elandi na paramètre `demo1,demo2` oyo elekisami na yango.
: ** Esengeli kozala na bisika te ** liboso mpe nsima ya virgule `,` na `demo1,demo2` .

Fisyé index ya répertoire oyo ekokani mpo na ba paramètres oyo ezali likolo ezali:

* `en/demo1/TOC`
* `en/demo2/TOC`

#### Index Ya Tableau Ya Contenus Ya TOC

`i18n.site` ekosala `js` plug-in `.i18n/hook/after.tran/TOC.js` na entrepôt ya démonstration pona kotanga fichier index ya `doc` répertoire oyo ekokani na configuration ya modèle `TOC` pona ko générer contour ya `json` répertoire.

Soki osaleli modèle `doc` , esengeli ozala na plug-in oyo.

Soki o initialiser projet `i18n.site` na dossier ya pamba, kobosana te ko copier projet ya démonstration `.i18n` na répertoire na yo.

Modèle `Doc` ekosala plan ya tableau ya contenus na kotalela `json` oyo esalemi.

##### Ndimbola Ya Makambo Oyo Ezali Na Kati Ya Sikisiki

`en/blog/TOC` oyo ezali na kati ezali boye :

```
README.md

news/README.md
  news/begin.md
```

##### Salelá Indentation Mpo Na Kolakisa Ba Niveaux

`README.md` ezali na molɔngɔ ya liboso ya `en/blog/TOC` oyo ezali likoló ekokani na `i18n.site` oyo ezali na elilingi oyo ezali awa na nse, oyo ezali nkombo ya mosala.

Milɔngɔ́ mibale oyo elandi ezali ndenge emonisami na capture d’écran oyo ezali awa na nse.

<img src="https://p.3ti.site/1721097381.avif" style="width:320px">

`news/README.md` ekokani na `News` , .
`news/begin.md` ekokani na `Our Product is Online !`

`TOC` fichiers ezali indentés pona kolakisa relation hiérarchique ya plan pe ko soutenir indentation multi-niveau.

##### Niveau Ya Parent Ekomaka Kaka Titre, Contenus Te.

Tango ezali na ba niveaux ebele ya indentation, niveau ya parent ekomaka kaka titre et non contenus. Soki te, typographie ekozala mobulu.

##### Projet README.md

Makambo oyo ezali na kati ekoki kokomama na eloko `README.md` , lokola `en/demo2/README.md` .

Simbá ete makambo oyo ezali na fisyé oyo ezali komonisa te plan ya makambo oyo ezali na kati, yango wana ezali malamu kotya ndelo na bolai mpe kokoma maloba ya ebandeli mokuse.

###### Slogan Ya Projet

Okoki komona ete `Deme Two` ezali na tagline ya projet na yango na se ya menu déroulant mpe kombo ya projet ya plan ya catalogue `Your Project slogan` :

![](https://p.3ti.site/1721276842.avif)

Yango ekokani na molongo ya liboso `en/demo2/README.md` :

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

Svp bobongola `en/` na `zh/` na commande oyo ezali likolo na code ya monoko na bino.