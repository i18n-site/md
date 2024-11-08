# .i18n/conf.yml

Le fichier de configuration pour `i18n.site` est `.i18n/conf.yml` et le contenu est le suivant :

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

Parmi eux, `upload` à `ext:` élément de configuration signifie que seulement `.md` seront téléchargés lors de la publication.

## Navigation Supérieure

`nav:` options de configuration, correspondant au menu de navigation en haut de la page d'accueil.

<img src="//p.3ti.site/1721051426.avif" style="width:320px">

Parmi eux, `i18n: home` correspond à `home: Home` en `en/i18n.yml` (où `en` est la langue source de la traduction du projet).

Le contenu `en/i18n.yml` est le texte affiché dans le menu de navigation, qui sera traduit selon `fromTo` dans la configuration, par exemple traduit en `zh/i18n.yml` .

<img src="//p.3ti.site/1721051689.avif" style="width:320px">

Une fois la traduction terminée, vous pouvez modifier la valeur de la traduction `yml` , mais n'ajoutez ni ne supprimez pas la clé de la traduction `yml` .

### 0Modèle De Document `use: Toc` Avec Contour

`nav` :

```
  - i18n: home
    use: Toc
    url: /
```

`use: Toc` signifie le rendu à l'aide d'un modèle `Toc` , ce qui correspond au rendu d'un seul modèle `Markdown` .

`TOC` est l'abréviation de `Table of Contents` Lorsque ce modèle est rendu, le contour de ce `Markdown` fichier sera affiché dans la barre latérale.

`url:` représente le chemin du fichier `Markdown` ( `/` correspond au répertoire racine `/README.md` , ce nom de fichier nécessite un préfixe majuscule et un suffixe minuscule).

### 0Modèle De Document `use: Md` Sans Plan

Le modèle `Md` et le modèle `Toc` sont identiques et les deux sont utilisés pour restituer un seul fichier `Markdown` . Mais le modèle `Md` n’affiche pas le contour dans la barre latérale.

Vous pouvez modifier `use: Toc` dans la configuration ci-dessus en `use: Md` , exécuter à nouveau `i18n.site` dans le répertoire `md` , puis visiter l'URL d'aperçu du développement pour observer les modifications sur la page d'accueil.

### `use: Blog` Modèles De Blogs

Le modèle de blog affiche une liste d'articles (titres et résumés) par ordre d'heure de publication.

[→ Cliquez ici pour en savoir plus sur la configuration spécifique](/i18n.site/conf/blog)

### 0Modèles De Documents À Fichiers `use: Doc`

Dans le fichier de configuration :

```
  - i18n: doc
    menu: NB demo1,demo2
    use: Doc
```

Indique l'utilisation de `Doc` pour le rendu du modèle.

Le modèle `Doc` prend en charge l'intégration de plusieurs `MarkDown` pour générer des plans de document pour un ou plusieurs projets.

#### Plusieurs Projets Et Plusieurs Fichiers

La configuration de `.i18n/conf.yml` en `i18n:doc` est le mode de rendu multi-projets multi-fichiers.

Ici, `menu: NB demo1,demo2` signifie utiliser le modèle `NB` pour afficher le menu déroulant.

<img src="//p.3ti.site/1721275191.avif" width="320px">

`NB` , qui est l'abréviation de `Name Breif` , signifie que le menu déroulant peut afficher le nom et le slogan du projet.

`NB` est suivi du paramètre `demo1,demo2` qui lui est transmis.

Remarque : ** Il ne doit y avoir aucun espace ** avant et après la virgule `,` dans `demo1,demo2` .

Le fichier d'index de répertoire correspondant pour les paramètres ci-dessus est :

* `en/demo1/TOC`
* `en/demo2/TOC`

#### Projet Unique, Plusieurs Fichiers

Si vous n'avez qu'un seul projet, vous pouvez le configurer comme suit.

```
  - i18n: doc
    url: flashduty
    use: Doc
```

> [!WARN]
> Un seul projet avec plusieurs fichiers ne prend pas en charge la configuration `url` comme chemin racine `/`
> Si __conf.yml → nav:__ Aucun chemin racine n'est configuré, lors de l'accès à la page d'accueil du site Web, il sera automatiquement réécrit à la première URL sous la configuration `nav:` .
> Cette conception vise à mieux distinguer les documents de projet, les blogs et autres contenus via des répertoires.
> Il est recommandé d'utiliser un seul fichier et une seule page comme page d'accueil.

> [!TIP]
> Si `url` n'est pas écrit, `url` prend par défaut la valeur `i18n` Cette règle s'applique également aux autres modèles.

#### Index De La Table Des Matières De La Table Des Matières

Si le modèle `use: Doc` est activé dans la configuration, veuillez activer le plug-in `i18n.addon/toc` en `.i18n/conf.yml` La configuration est la suivante :

```yml
addon:
  - i18n.addon/toc
```

`i18n.site` installera et exécutera automatiquement ce plug-in, lira `TOC` le fichier d'index du répertoire et générera `json` le plan du répertoire.

S'il s'agit d'un seul projet avec plusieurs fichiers, le répertoire racine `TOC` est le répertoire correspondant à `url:` dans le répertoire de la langue source. Par exemple, si la langue source est le chinois : le fichier correspondant à `url: flashduty` est `zh/flashduty/TOC` .

S'il s'agit de plusieurs projets et de plusieurs fichiers, il n'est pas nécessaire de configurer `url:` Le répertoire racine de `TOC` est le répertoire correspondant à la valeur de `i18n` .

##### Explication Détaillée Du Contenu

`en/blog/TOC` contenu est le suivant :

```
README.md

news/README.md
  news/begin.md
```

##### Utiliser L'indentation Pour Indiquer Les Niveaux

`README.md` dans la première ligne de `en/blog/TOC` ci-dessus correspond au `i18n.site` dans l'image ci-dessous, qui est le nom du projet.

Les deux lignes suivantes sont telles qu'indiquées dans la capture d'écran ci-dessous.

<img src="https://p.3ti.site/1721097381.avif" style="width:320px">

`news/README.md` correspond à `News` ,
`news/begin.md` correspond à `Our Product is Online !`

Les fichiers `TOC` sont indentés pour indiquer la relation hiérarchique du plan, prennent en charge l'indentation à plusieurs niveaux et les commentaires de ligne commençant par `# ` .

##### Le Niveau Parent Écrit Uniquement Le Titre, Pas Le Contenu.

Lorsqu'il existe plusieurs niveaux d'indentation, le niveau parent écrit uniquement le titre et non le contenu. Sinon, la typographie sera gâchée.

##### Projet README.md

Le contenu peut être écrit dans l'élément `README.md` , tel que `en/demo2/README.md` .

Notez que le contenu de ce fichier ne présente pas de plan de table des matières, il est donc recommandé de limiter la longueur et de rédiger une courte introduction.

###### Slogan Du Projet

Vous pouvez voir que `Deme Two` a son slogan de projet sous le menu déroulant et le nom du projet du catalogue `Your Project slogan` :

![](https://p.3ti.site/1721276842.avif)

Cela correspond à la première ligne de `en/demo2/README.md` :

```
# Demo Two : Your Project slogan
```

Le contenu après le premier deux-points `:` du titre de premier niveau du projet `README.md` sera considéré comme le slogan du projet.

Utilisateurs de Chine, du Japon et de Corée, veuillez noter que vous devez utiliser les deux-points demi-chasse `:` au lieu des deux-points pleine chasse.

##### Comment Déplacer La TOC en Masse ?

`TOC` fichiers doivent être placés dans le répertoire de la langue source.

Par exemple, si la langue source est le chinois, alors `TOC` ci-dessus vaut `zh/blog/TOC` .

Si la langue source est modifiée, vous devez déplacer par lots les fichiers `TOC` d'une certaine langue du projet vers une autre langue.

Vous pouvez vous référer aux commandes suivantes :

```
rsync -av --remove-source-files --include='*/' \
--include='TOC' --exclude='*' en/ zh/
```

Veuillez modifier `en/` et `zh/` dans la commande ci-dessus avec votre code de langue.

### Chargement Par Défaut Sans Chemin De Configuration

Pour un certain chemin accessible, si le préfixe du chemin n'est pas configuré en `nav:` , le `MarkDown` fichier correspondant au chemin sera chargé par défaut et rendu à l'aide du modèle `Md` .

Par exemple, si l'on accède à `/test` et `nav:` est configuré sans le préfixe de ce chemin, et que la langue de navigation actuelle est l'anglais (code `en` ), `/en/test.md` sera chargé par défaut et rendu à l'aide du modèle `Md` .

Si `/en/test.md` ce fichier n'existe pas, la page par défaut `404` sera affichée.

<img src="//p.3ti.site/1721184299.avif" style="width:360px">