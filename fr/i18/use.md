# Installer Et Utiliser

## windows Installe D'abord git bash

windows Système, veuillez [d'abord cliquer ici pour télécharger et installer `git bash`](https://git-scm.com/download/win)

Exécutez les opérations suivantes dans `git bash`

## Installer

```sh
bash <(curl -sS https://i.i18n.site) i18
```

### Configurer Le Jeton De Traduction

Visitez [i18n.site/token](//i18n.site/token) Cliquez pour copier le jeton

<img src="https://p.3ti.site/1719911689.avif" style="max-width:400px">

Créez `~/.config/i18n.site.yml` collez-y le contenu copié, le contenu est le suivant :

```
token: YOUR_API_TOKEN
```

De plus, vous devez [i18n.site/payBill](//i18n.site/payBill) une carte de crédit pour le paiement (aucune recharge n'est requise, le site déduira automatiquement les frais en fonction de l'utilisation, [voir la page d'accueil pour les tarifs](/#price) ).

## Utiliser

### Projet De Démonstration

Veuillez vous référer au projet de démonstration [github.com/i18n-site/demo.i18](//github.com/i18n-site/demo.i18) apprendre la configuration de la traduction `i18`

Les utilisateurs en Chine peuvent cloner [atomgit.com/i18n/demo.i18](//atomgit.com/i18n/demo.i18)

Après le clonage, entrez dans le répertoire et exécutez `i18` pour terminer la traduction.

### Structure Du Répertoire

La structure du répertoire de l'entrepôt de modèles est la suivante

```
┌── .i18n
│  └── conf.yml
└── en
   ├── _IgnoreDemoFile.md
   ├── i18n.yml
   └── README.md
```

Le répertoire `en` contient les fichiers de démonstration traduits, qui ne sont qu'un exemple et peuvent être supprimés.

### Exécuter La Traduction

Entrez dans le répertoire et exécutez `i18`

### Ajouter Des Fichiers Au Référentiel

En plus de la traduction, le programme générera également les fichiers suivants, veuillez les ajouter au référentiel.

```
.i18n/hash
.i18n/cache/.gitignore
```

Parmi : , le contenu de `.i18n/cache/.gitignore`

```
**/*
!**/.gitignore
```

Cela signifie ignorer tous les fichiers du répertoire `.i18n/cache/` (sauf `.i18n/cache/.gitignore` ).

Si votre logiciel de contrôle de version ne l'est pas `git` veuillez l'ignorer selon cette configuration.

## Fichier De Configuration

`.i18n/conf.yml` C'est le fichier de configuration de l'outil de traduction en ligne `i18`

Le contenu est le suivant :

```
i18n:
  fromTo:
    en: zh ja ko de fr
    # en:

ignore:
  - _*
```

### Langue Source & Langue De Traduction

Dans le fichier de configuration, les subordonnés de `fromTo`

`en` est la langue source, `zh ja ko de fr` est la langue cible de la traduction.

Code de langue voir [i18n.site/i18/LANG_CODE](https://i18n.site/i18/LANG_CODE)

Par exemple, si vous souhaitez traduire le chinois vers l'anglais, réécrivez cette ligne `zh: en`

Si vous souhaitez traduire dans toutes les langues prises en charge, veuillez laisser vide après `:` Par exemple

```
i18n:
  fromTo:
    en:
```

### Ignorer Le Fichier

Par défaut, tous les fichiers commençant par `.md` et `.yml` dans le répertoire de la langue source seront traduits.

Si vous souhaitez ignorer certains fichiers et ne pas les traduire (comme les brouillons inachevés), vous pouvez utiliser la configuration du champ `ignore`

`ignore` Utilise une syntaxe similaire à `.gitignore` [globset](https://docs.rs/globset/latest/globset/#syntax)

Par exemple, dans le fichier de configuration ci-dessus `_* ` signifie que les fichiers commençant par `_` ne seront pas traduits.

## Règles De Traduction

### Les Éditeurs De Traduction Ne Doivent Pas Ajouter Ou Supprimer De Lignes

La traduction est modifiable. Modifiez le texte original et traduisez-le automatiquement, les modifications manuelles de la traduction ne seront pas écrasées (si ce paragraphe du texte original n'a pas été modifié).

Mais veuillez noter que les lignes de la traduction et le texte original doivent correspondre les uns aux autres. Autrement dit, n'ajoutez ni ne supprimez de lignes lors de la compilation de la traduction. Sinon, cela entraînerait une confusion dans le cache d'édition de traduction.

Si quelque chose ne va pas, veuillez vous référer à [la FAQ pour trouver des solutions.](/i18/qa#H1)

### `YAML` Traduire

L'outil de ligne de commande trouvera tous les fichiers se terminant par `.yml` dans le répertoire des fichiers de langue source et les traduira.

* Notez que le suffixe du nom de fichier doit être `.yml` (et non `.yaml` ).

L'outil traduit uniquement les valeurs du dictionnaire dans `.yml` , pas les clés du dictionnaire.

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

Basé sur `YAML` Translation, vous pouvez facilement créer des solutions internationales pour différents langages de programmation.

## Utilisation Avancée

### Sous-Répertoire De Traduction

Tant que vous créez `.i18n/conf.yml` (pas besoin de démarrer à partir du modèle de projet de démonstration à chaque fois), `i18` fonctionnera correctement.

L'outil de ligne de commande trouvera la configuration `.i18n/conf.yml` dans tous les sous-répertoires et la traduira.

Les projets qui utilisent l'architecture [monorepo](//monorepo.tools) peuvent diviser les fichiers de langue en sous-répertoires.

<img alt="" src="https://p.3ti.site/1719910016.avif">

### Répertoire D'installation Personnalisé

Il sera installé sur `/usr/local/bin`

Si `/usr/local/bin` n'a pas l'autorisation d'écriture, il sera installé sur `~/.bin` .

Définir les variables d'environnement `TO` Vous pouvez définir le répertoire d'installation, par exemple :

```sh
TO=/bin sudo bash <(curl -sS https://i.i18n.site) i18
```
