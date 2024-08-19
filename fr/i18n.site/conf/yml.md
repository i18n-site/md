# .i18n/conf.yml

Le fichier de configuration pour `i18n.site` est `.i18n/conf.yml`.

À l'exception des paramètres [`i18`](/i18) , `ignore:` et `i18n:` , le fichier de configuration est le suivant :

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

Entre autres, la configuration `upload` avec `ext:` signifie que seuls les fichiers `.md` seront téléchargés lors de la publication.

## Navigation supérieure

Les options de configuration `nav:` correspondent au menu de navigation en haut de la page d'accueil.

<img src="//p.3ti.site/1721051426.avif" style="width:320px">

Parmi eux, `i18n: home` correspond à `home: Home` dans `en/i18n.yml`.

`en/i18n.yml` sera traduit en plusieurs langues, comme `zh/i18n.yml`.

<img src="//p.3ti.site/1721051689.avif" style="width:320px">

Après la traduction, vous pouvez modifier les valeurs des traductions `yml`, mais ne pas ajouter ou supprimer les clés des traductions `yml`.

### `use: Toc`, modèle de fichier unique (avec sommaire)

Dans la configuration `nav` :

```
  - i18n: home
    use: Toc
    url: /
```

`use: Toc` signifie utiliser le modèle `Toc` pour le rendu, ce qui correspond au rendu d'un seul fichier `Markdown`.

`TOC` est l'abréviation de `Table of Contents`. Lorsque ce modèle est rendu, le sommaire du fichier `Markdown` s'affiche dans la barre latérale.

`url:` représente le chemin du fichier `Markdown` ( `/` correspond au répertoire racine `/README.md`, ce nom de fichier doit être en majuscules pour le préfixe et en minuscules pour le suffixe).

### `use: Md`, modèle de fichier unique (sans sommaire)

Le modèle `Md` est similaire au modèle `Toc`, tous deux sont utilisés pour le rendu d'un seul fichier `Markdown`. Mais le modèle `Md` n'affiche pas le sommaire dans la barre latérale.

Vous pouvez remplacer `use: Toc` par `use: Md` dans la configuration ci-dessus, puis exécuter à nouveau `i18n.site` dans le répertoire `md`, et enfin visiter l'URL de prévisualisation du développement pour observer les changements sur la page d'accueil.

### Chargement par défaut sans chemin de configuration

Si un chemin est accédé et que son préfixe n'est pas configuré dans `nav:`, le fichier `Markdown` correspondant au chemin est chargé par défaut et rendu avec le modèle `Md`.

Par exemple, si on accède à `/test` et que `nav:` n'a pas de configuration pour ce chemin, et que la langue de la page est l'anglais (code `en`), alors `/en/test.md` est chargé par défaut et rendu avec le modèle `Md`.

Si `/en/test.md` n'existe pas, une page `404` par défaut est affichée.

<img src="https://p.3ti.site/1721184299.avif" style="width:360px">

### `use: Doc`, modèle multi-fichiers

Dans le fichier de configuration :

```
  - i18n: blog
    use: Doc
```

Cela indique d'utiliser `Doc` pour le rendu du modèle.

Le modèle `Doc` prend en charge l'intégration de plusieurs fichiers `Markdown` pour générer un sommaire de document pour un ou plusieurs projets.

#### Projet unique (multi-fichiers)

`blog` mentionné précédemment est le mode unique de `Doc`.

```
  - i18n: blog
    url: blog
    use: Doc
```

##### Lorsque l'URL Est Vide, La Valeur Par Défaut Est i18n

Si `url` n'est pas spécifié, `url` prend par défaut la valeur `i18n`. Cette règle s'applique également aux autres modèles.

La syntaxe ci-dessus est équivalente à `url: blog`, et le fichier correspondant est `en/blog/TOC`.

#### Projets multiples

La configuration `i18n:doc` dans `.i18n/conf.yml` est en mode multi-projets.

```
  - i18n: doc
    menu: NB demo1,demo2
    use: Doc
```

<img src="https://p.3ti.site/1721275191.avif" width="320px">

Ici, `menu: NB demo1,demo2` signifie utiliser le modèle `NB` pour le menu déroulant.

`NB` est l'abréviation de `Name Brief`, ce qui signifie que le menu déroulant peut afficher le nom et le slogan du projet.

`NB` est suivi des paramètres `demo1,demo2`.
Remarque : ** Il ne doit y avoir aucun espace ** avant et après la virgule `,` dans `demo1,demo2`.

Les fichiers d'index de répertoire correspondants pour les paramètres ci-dessus sont :

* `en/demo1/TOC`
* `en/demo2/TOC`

#### Index du sommaire du document

`i18n.site` exécute le plugin `js` `.i18n/hook/after.tran/TOC.js` dans le dépôt de démonstration pour lire les fichiers d'index `TOC` correspondant à la configuration des modèles `doc` pour générer le sommaire `json`.

Si vous utilisez le modèle `doc`, vous devez avoir ce plugin.

Si vous initialisez un projet `i18n.site` à partir d'un dossier vide, n'oubliez pas de copier le dossier `.i18n` du projet de démonstration dans votre répertoire.

Le modèle `Doc` rend le sommaire de la table des matières en fonction du `json` généré.

##### Explication détaillée du contenu

Le contenu de `en/blog/TOC` est comme suit :

```
README.md

news/README.md
  news/begin.md
```

##### Utilisez l'indentation pour indiquer les niveaux

La première ligne de `en/blog/TOC`, `README.md`, correspond à `i18n.site` dans l'image ci-dessous, c'est-à-dire le nom du projet.

Les deux lignes suivantes sont comme indiqué dans la capture d'écran ci-dessous.

<img src="https://p.3ti.site/1721097381.avif" style="width:320px">

`news/README.md` correspond à `News`
`news/begin.md` correspond à `Our Product is Online !`

Le fichier `TOC` utilise l'indentation pour indiquer la relation hiérarchique du sommaire et prend en charge plusieurs niveaux d'indentation.

##### Le niveau parent n'écrit que le titre, pas le contenu

Lorsqu'il y a plusieurs niveaux d'indentation, le niveau parent n'écrit que le titre, sinon la mise en page sera perturbée.

##### Projet README.md

Le contenu peut être écrit dans le fichier `README.md` du projet, comme dans `en/demo2/README.md`.

Notez que le contenu de ce fichier ne présente pas de sommaire, il est donc recommandé de le garder bref et de rédiger une introduction concise.

###### Slogan du projet

Vous pouvez voir que `Deme Two` a son slogan de projet sous le menu déroulant et le nom du projet dans le sommaire `Your Project slogan`.

![](https://p.3ti.site/1721276842.avif)

Cela correspond à la première ligne de `en/demo2/README.md` :

```
# Demo Two : Your Project slogan
```

Le contenu après le premier deux-points `:` du titre de premier niveau dans le fichier `README.md` du projet est considéré comme le slogan du projet.

Les utilisateurs de Chine, du Japon et de Corée doivent noter qu'ils doivent utiliser des deux-points demi-chasse `:` plutôt que des deux-points pleine chasse.

##### Comment Déplacer La TOC en Masse ?

Les fichiers `TOC` doivent être placés dans le répertoire de la langue source.

Par exemple, si la langue source est le chinois, alors le `TOC` ci-dessus est `zh/blog/TOC`.

Si la langue source change, vous devez déplacer en masse les fichiers `TOC` d'une langue du projet à une autre.

Vous pouvez vous référer aux commandes suivantes :

```
rsync -av --remove-source-files --include='*/' \
--include='TOC' --exclude='*' en/ zh/
```

Veuillez remplacer `en/` et `zh/` dans la commande ci-dessus par votre code de langue.