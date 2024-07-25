# .i18n/conf.yml

`i18n.site` Le fichier de configuration est `.i18n/conf.yml` .

À l'exception `ignore:` et `i18n:` de [`i18`](/i18) , le fichier de configuration est le suivant :

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

Parmi eux, l'élément de configuration `ext:` de `upload` signifie que seul `.md` sera téléchargé lors de la publication.

## Navigation Supérieure

`nav:` options de configuration, correspondant au menu de navigation en haut de la page d'accueil.

<img src="//p.3ti.site/1721051426.avif" style="width:320px">

Parmi eux, `i18n: home` correspond à `en/i18n.yml`中`home: Home` .

`en/i18n.yml` sera traduit en plusieurs langues, telles que `zh/i18n.yml` .

<img src="//p.3ti.site/1721051689.avif" style="width:320px">

Une fois la traduction terminée, vous pouvez modifier la valeur de `yml` dans la traduction, mais n'ajoutez ni ne supprimez la clé de traduction `yml` .

### `use: Toc` , Modèle De Fichier Unique (Avec Contour)

`nav` Configuration :

```
  - i18n: home
    use: Toc
    url: /
```

`use: Toc` signifie utiliser le rendu `Toc` , qui restitue un seul modèle `Markdown` .

`TOC` est l'abréviation de `Table of Contents` . Lorsque ce modèle est rendu, le contour de ce fichier `Markdown` sera affiché dans la barre latérale.

`url:` représente le chemin du fichier `Markdown` ( `/` correspond au répertoire racine `/README.md` , ce nom de fichier nécessite un préfixe majuscule et un suffixe minuscule).

### `use: Md` , Modèle De Fichier Unique (Pas De Plan)

`Md` Template est le même que `Toc` , les deux sont utilisés pour restituer un seul fichier `Markdown` . Cependant `Md` le modèle n'affiche pas le contour dans la barre latérale.

Vous pouvez modifier `use: Toc` dans la configuration ci-dessus en `use: Md` , exécuter `i18n.site` à nouveau dans le répertoire `md` , puis visiter l'URL d'aperçu du développement pour observer les modifications sur la page d'accueil.

### Chargement Par Défaut Sans Chemin De Configuration

Si le préfixe de chemin d'un certain chemin auquel vous accédez n'est pas configuré dans `nav:` le fichier `MarkDown` correspondant au chemin sera chargé par défaut et rendu à l'aide `Md` template.

Par exemple, si vous visitez `/test` et que `nav:` est configuré sans ce chemin et que la langue de la page est l'anglais (code `en` ), le modèle sera chargé `/en/test.md` et rendu en utilisant `Md` par défaut.

Si `/en/test.md` ce fichier n'existe pas, la page `404` par défaut sera affichée.

<img src="https://p.3ti.site/1721184299.avif" style="width:360px">

### `use: Doc` , Modèle Multi-Fichiers

Dans le fichier de configuration :

```
  - i18n: blog
    use: Doc
```

Indique l'utilisation de `Doc` pour le rendu du modèle.

`Doc` Le modèle prend en charge l'intégration de plusieurs `MarkDown` pour générer des plans de document pour un ou plusieurs projets.

#### Projet Unique (Plusieurs Fichiers)

`blog` ci-dessus est le mode projet unique de `Doc` .

```
  - i18n: blog
    url: blog
    use: Doc
```

##### Lorsque l'URL Est Vide, La Valeur Par Défaut Est i18n

Si vous n'écrivez pas `url` , `url` a la valeur `i18n` . Cette règle s'applique également aux autres modèles.

La méthode d'écriture ci-dessus équivaut à avoir `url: blog` et son fichier correspondant est `en/blog/TOC` .

#### Plusieurs Projets

`.i18n/conf.yml` La configuration en `i18n:doc` est en mode multi-projet.

```
  - i18n: doc
    menu: NB demo1,demo2
    use: Doc
```

<img src="https://p.3ti.site/1721275191.avif" width="320px">

Ici, `menu: NB demo1,demo2` signifie utiliser `NB` pour afficher le menu déroulant.

`NB` , est l'abréviation de `Name Breif` , indiquant que le menu déroulant peut afficher le nom et le slogan du projet.

`NB` est suivi du paramètre `demo1,demo2` qui lui est transmis.
Notez qu'il ne doit `demo1,demo2` avoir aucun espace ** avant et après la virgule `,` dans : **

Pour les paramètres ci-dessus, le fichier d'index de répertoire correspondant est :

* `en/demo1/TOC`
* `en/demo2/TOC`

#### Index De La Table Des Matières De La Table Des Matières

`i18n.site` Exécutera le `js` plugin `.i18n/hook/after.tran/TOC.js` dans l'entrepôt de démonstration pour lire le fichier d'index du répertoire `doc` correspondant à la configuration du modèle `TOC` afin de générer `json` du contour du répertoire.

Si vous utilisez le modèle `doc` , vous devez disposer de ce plug-in.

Si vous initialisez le projet `i18n.site` à partir d'un dossier vide, n'oubliez pas de copier `.i18n` du projet démo dans votre répertoire.

`Doc` Le modèle affichera le plan de la table des matières en fonction du `json` généré.

##### Explication Détaillée Du Contenu

`en/blog/TOC` Le contenu est le suivant :

```
README.md

news/README.md
  news/begin.md
```

##### Utiliser L'indentation Pour Indiquer Les Niveaux

Ci-dessus `en/blog/TOC` `README.md` dans la première ligne correspond au `i18n.site` dans l'image ci-dessous, qui est le nom du projet.

Les deux lignes suivantes sont telles qu'indiquées dans la capture d'écran ci-dessous.

<img src="https://p.3ti.site/1721097381.avif" style="width:320px">

`news/README.md` Correspond à `News` ,
`news/begin.md` Correspond à `Our Product is Online !`

`TOC` Le fichier est en retrait pour indiquer la relation hiérarchique du plan et prend en charge l'indentation à plusieurs niveaux.

##### Le Niveau Parent Écrit Uniquement Le Titre, Pas Le Contenu.

Lorsqu'il existe plusieurs niveaux d'indentation, le niveau parent écrit uniquement le titre et non le contenu. Sinon, la typographie sera gâchée.

##### Projet README.md 

`README.md` du projet, par exemple, vous pouvez écrire du contenu en `en/demo2/README.md` .

Notez que le contenu de ce fichier ne présente pas de plan de table des matières, il est donc recommandé de limiter la longueur et de rédiger une courte introduction.

###### Slogan Du Projet

Comme vous pouvez le voir, `Deme Two` Sous le menu déroulant et le nom du projet du catalogue, se trouve le slogan du projet : `Your Project slogan`

<img alt="" src="https://p.3ti.site/1721276842.avif">

: correspond à la première ligne `en/demo2/README.md`

```
# Demo Two : Your Project slogan
```

Projet `README.md` Le contenu après le premier deux-points `:` dans le titre de premier niveau sera considéré comme le slogan du projet.

Utilisateurs de Chine, du Japon et de Corée, veuillez noter que vous devez utiliser des deux-points demi-chasse au lieu de deux-points pleine largeur `:`

##### Comment Déplacer La TOC en Masse ?

`TOC` Le fichier doit être placé dans le répertoire de la langue source.

Par exemple, si la langue source est le chinois, alors `TOC` ci-dessus est `zh/blog/TOC` .

Si la langue source est modifiée, vous devez déplacer par lots `TOC` d'une certaine langue du projet vers une autre langue.

Vous pouvez vous référer aux commandes suivantes :

```
rsync -av --remove-source-files --include='*/' \
--include='TOC' --exclude='*' en/ zh/
```

Veuillez modifier `en/` et `zh/` dans la commande ci-dessus avec votre code de langue.


