# Installer Et Utiliser

## windows Installe D'abord git bash

windows Système, veuillez [d'abord cliquer ici pour télécharger et installer `git bash`](https://git-scm.com/download/win) .

Exécutez les opérations suivantes dans `git bash` .

## Installer

```sh
bash <(curl -sS https://i.i18n.site) i18
```

### Configurer Le Jeton De Traduction

Visitez [i18n.site/token](//i18n.site/token) Cliquez pour copier le jeton

<img src="https://p.3ti.site/1719911689.avif" style="width:400px">

Créez `~/.config/i18n.site.yml` , collez-y le contenu copié, le contenu est le suivant :

```
token: YOUR_API_TOKEN
```

De [i18n.site/payBill](//i18n.site/payBill) , vous devez lier une carte de crédit pour le paiement (aucune recharge n'est requise, le site Web déduira automatiquement les frais en fonction de l'utilisation, [voir la page d'accueil pour les tarifs](/#price) ).

## Utiliser

### Projet De Démonstration

Veuillez vous référer au projet de démonstration [github.com/i18n-site/demo.i18](//github.com/i18n-site/demo.i18) apprendre la configuration de `i18` traduction.

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

Les fichiers de démonstration traduits dans le répertoire `en` ne sont qu'un exemple et peuvent être supprimés.

### Exécuter La Traduction

Entrez dans le répertoire et exécutez `i18` pour traduire.

En plus de la traduction, le programme générera également le dossier `.i18n/data` , veuillez l'ajouter au référentiel.

Après avoir traduit le nouveau fichier, un nouveau fichier de données sera généré dans ce répertoire. N'oubliez pas d'ajouter `git add . ` .

## Fichier De Configuration

`.i18n/conf.yml` est le fichier de configuration de l'outil de traduction en ligne de commande `i18`

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

Dans le fichier de configuration, le subordonné de `fromTo` :

`en` est la langue source, `zh ja ko de fr` est la langue cible de la traduction.

Code de langue voir [i18n.site/i18/LANG_CODE](https://i18n.site/i18/LANG_CODE)

Par exemple, si vous souhaitez traduire le chinois vers l'anglais, réécrivez cette ligne `zh: en` .

Si vous souhaitez traduire dans toutes les langues prises en charge, veuillez laisser vide après `:` . Par exemple

```
i18n:
  fromTo:
    en:
```

Différents `fromTo` peuvent être configurés pour différents sous-répertoires / Une démonstration est écrite comme suit :

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

Dans ce tableau de configuration, la langue source pour la traduction du répertoire `blog` est `zh` et la langue source pour la traduction du répertoire `blog/your_file_name.md` est `ja` .

### Ignorer Le Fichier

Par défaut, tous les fichiers commençant par `.md` et `.yml` dans le répertoire de la langue source seront traduits.

Si vous souhaitez ignorer certains fichiers et ne pas les traduire (comme les brouillons inachevés), vous pouvez utiliser la configuration du champ `ignore` .

`ignore` utilise la même syntaxe [globset](https://docs.rs/globset/latest/globset/#syntax) que le fichier `.gitignore` .

Par exemple, `_* ` dans le fichier de configuration ci-dessus signifie que les fichiers commençant par `_` ne seront pas traduits.

## Règles De Traduction

### Les Éditeurs De Traduction Ne Doivent Pas Ajouter Ou Supprimer De Lignes

La traduction est modifiable. Modifiez le texte original et traduisez-le à nouveau automatiquement, les modifications manuelles de la traduction ne seront pas écrasées (si ce paragraphe du texte original n'a pas été modifié).

Mais veuillez noter que les lignes de la traduction et le texte original doivent correspondre les uns aux autres. Autrement dit, n'ajoutez ni ne supprimez de lignes lors de la compilation de la traduction. Sinon, cela entraînerait une confusion dans le cache d'édition de traduction.

Si quelque chose ne va pas, veuillez vous référer à [la FAQ pour trouver des solutions.](/i18/qa#H1)

### `YAML` Traductions

L'outil de ligne de commande trouvera tous les fichiers se terminant par `.yml` dans le répertoire des fichiers de langue source et les traduira.

* Notez que le suffixe du nom de fichier doit être `.yml` (et non `.yaml` ).

L'outil traduit uniquement les valeurs du dictionnaire en `.yml` , pas les clés du dictionnaire.

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

## Utilisation Avancée

### Sous-Répertoire De Traduction

Tant que `.i18n/conf.yml` est créé (pas besoin de démarrer à partir du modèle de projet de démonstration à chaque fois), `i18` fonctionnera correctement.

L'outil de ligne de commande trouvera `.i18n/conf.yml` configuration dans tous les sous-répertoires et les traduira.

Les projets qui utilisent l'architecture [monorepo](//monorepo.tools) peuvent diviser les fichiers de langue en sous-répertoires.

![](https://p.3ti.site/1719910016.avif)

### Répertoire D'installation Personnalisé

Il sera installé à `/usr/local/bin` par défaut.

Si `/usr/local/bin` n'a pas l'autorisation d'écriture, il sera installé sur `~/.bin` .

La définition de la variable d'environnement `TO` peut définir le répertoire d'installation, par exemple :

```sh
TO=/bin sudo bash <(curl -sS https://i.i18n.site) i18
```