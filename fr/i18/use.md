# Installation et utilisation

## Sur Windows, installer d'abord Git Bash

1	windows Système, veuillez d'abord [cliquer ici pour télécharger et installer `git bash`](https://git-scm.com/download/win) .

2	Exécutez les opérations suivantes dans `git bash` .

## Installation

```sh
bash <(curl -sS https://i.i18n.site) i18
```

### Configuration du jeton de traduction

Visiter [i18n.site/token](//i18n.site/token) et cliquer pour copier le jeton

<img src="https://p.3ti.site/1719911689.avif" style="width:400px">

Créer un fichier `~/.config/i18n.site.yml` et y coller le contenu copié, comme suit :

```
token: YOUR_API_TOKEN
```

De plus, vous devez [i18n.site/payBill](//i18n.site/payBill) une carte de crédit pour le paiement (aucune recharge n'est requise, le site déduira automatiquement les frais en fonction de l'utilisation, [voir la page d'accueil pour les tarifs](/#price) ).

## Utilisation

### Projet de démonstration

Veuillez vous référer au projet de démonstration [github.com/i18n-site/demo.i18](//github.com/i18n-site/demo.i18) pour apprendre la configuration de la traduction avec `i18`.

Les utilisateurs de la Chine continentale peuvent cloner [atomgit.com/i18n/demo.i18](//atomgit.com/i18n/demo.i18)

Après le clonage, naviguez dans le répertoire et exécutez `i18` pour terminer la traduction.

### Structure du répertoire

La structure du répertoire du dépôt de modèle est comme suit :

```
┌── .i18n
│  └── conf.yml
└── en
   ├── _IgnoreDemoFile.md
   ├── i18n.yml
   └── README.md
```

Les fichiers de démonstration situés dans le répertoire `en` sont des exemples et peuvent être supprimés.

### Exécuter la traduction

Naviguez dans le répertoire et exécutez `i18` pour effectuer la traduction.

### Ajouter des fichiers au dépôt

Outre la traduction, le programme générera également les fichiers suivants, veuillez les ajouter au dépôt.

```
.i18n/hash
.i18n/cache/.gitignore
```

Parmi eux, le contenu de `.i18n/cache/.gitignore` est le suivant :

```
**/*
!**/.gitignore
```

Cela signifie ignorer tous les fichiers du répertoire `.i18n/cache/` (sauf `.i18n/cache/.gitignore`).

4	Si votre outil de gestion de versions n'est pas `git`, veuillez suivre cette configuration pour l'ignorer.

## Fichier de configuration

`.i18n/conf.yml` est le fichier de configuration de l'outil de traduction en ligne de commande `i18`

Le contenu est comme suit :

```
i18n:
  fromTo:
    en: zh ja ko de fr
    # en:

ignore:
  - _*
```

### Langue source et langue de traduction

Dans le fichier de configuration, les sous-éléments de `fromTo` sont :

`en` est la langue source, et `zh ja ko de fr` sont les langues cibles de la traduction.

Les codes de langues sont disponibles sur [i18n.site/i18/LANG_CODE](https://i18n.site/i18/LANG_CODE).

Par exemple, pour traduire le chinois en anglais, modifiez cette ligne en `zh: en`.

Si vous souhaitez traduire vers toutes les langues prises en charge, laissez vide après `:`. Par exemple :

```
i18n:
  fromTo:
    en:
```

Vous pouvez configurer différents `fromTo` pour différents sous-répertoires / Une démonstration est écrite comme suit :

```
i18n:
  fromTo:
    en:
  path:
    blog:
      fromTo:
        zh:
    blog/your_file_name.md:
      fromTo:
        ja:
```

Dans ce tableau de configuration, la langue source pour la traduction du répertoire `blog` est `zh`, tandis que pour `blog/your_file_name.md`, la langue source est `ja`.

### Ignorer des fichiers

Par défaut, tous les fichiers avec les extensions `.md` et `.yml` dans le répertoire de la langue source seront traduits.

Si vous souhaitez ignorer certains fichiers pour ne pas les traduire (comme les brouillons incomplets), vous pouvez utiliser le champ `ignore`.

`ignore` utilise une syntaxe similaire à celle de `.gitignore`, à savoir [globset](https://docs.rs/globset/latest/globset/#syntax).

Par exemple, `_*` dans le fichier de configuration signifie ignorer tous les fichiers commençant par `_`.

## Règles de traduction

### Les éditeurs de traduction ne doivent pas ajouter ou supprimer de lignes

La traduction est modifiable. Après avoir modifié le texte original et avoir effectué une nouvelle traduction automatique, les modifications manuelles de la traduction ne seront pas écrasées (sauf si le texte original n'a pas été modifié).

Mais attention, ne pas ajouter ou supprimer de lignes dans la traduction, sinon cela pourrait entraîner une confusion dans le cache de la traduction.

En cas de problème, veuillez vous référer aux solutions dans la section des questions fréquentes [FAQ](/i18/qa#H1)

### `YAML` Traductions

L'outil de ligne de commande trouvera tous les fichiers se terminant par `.yml` dans le répertoire de la langue source et les traduira.

* Notez que l'extension du fichier doit être `.yml` (et non `.yaml`).

L'outil ne traduira que les valeurs des dictionnaires dans `.yml`, pas les clés.

Par exemple `i18n/en/i18n.yml`

```
apiToken: API Token
defaultToken: Default Token
```

sera traduit par `i18n/zh/i18n.yml`

```
apiToken: 接口令牌
defaultToken: 默认令牌
```

La traduction de `YAML` peut également être modifiée manuellement (mais n'ajoutez ni ne supprimez de clés ou de lignes dans la traduction).

Sur la base de `YAML` traduction, vous pouvez facilement créer des solutions internationales pour différents langages de programmation.

## Traduction de sous-répertoires

### Sous-Répertoire De Traduction

Tant que `.i18n/conf.yml` est créé (pas besoin de démarrer à partir du modèle de projet de démonstration à chaque fois), `i18` fonctionnera correctement.

L'outil de ligne de commande trouvera `.i18n/conf.yml` configuration dans tous les sous-répertoires et les traduira.

Les projets qui utilisent l'architecture [monorepo](//monorepo.tools) peuvent diviser les fichiers de langue en sous-répertoires.

![](https://p.3ti.site/1719910016.avif)

### Répertoire D'installation Personnalisé

Il sera installé à `/usr/local/bin` par défaut.

Si `/usr/local/bin` n'a pas d'autorisation d'écriture, il sera installé sur `~/.bin` .

La définition de la variable d'environnement `TO` peut définir le répertoire d'installation, par exemple :

```sh
TO=/bin sudo bash <(curl -sS https://i.i18n.site) i18
```