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

De plus, vous devez lier une carte de crédit de paiement dans [i18n.site/payBill](//i18n.site/payBill) (Aucune recharge n'est requise, le site déduira automatiquement les frais en fonction de l'utilisation, [voir la page d'accueil pour les tarifs](/#price) ).

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

Dans ce tableau de configuration, la langue source de la traduction du catalogue `blog` est `zh` et la langue source de la traduction du catalogue `blog/your_file_name.md` est `ja` .

### Images/Liens Multilingues

Lorsque les URL des images et liens en `replace:` et `MarkDown` (et les attributs `src` et `href` du `HTML` intégré) sont configurées en `.i18n/conf.yml` avec ce préfixe, le code de langue source dans l'URL sera remplacé par le code de langue de la traduction ( [langue liste de codes](/i18/LANG_CODE) ).

Par exemple, votre configuration est la suivante :

```yml
i18n:
  fromTo:
    fr: ko de en zh zh-TW uk ru ja
  replace:
    https://fcdoc.github.io/img/ : ko de uk>ru zh-TW>zh >en
```

`replace: ` est un dictionnaire, la clé est le préfixe de l'URL à remplacer et la valeur est la règle de remplacement.

La signification du remplacement de la règle `ko de uk>ru zh-TW>zh >en` ci-dessus est que `ko de` utilise l'image de son propre code de langue, `zh-TW` et `zh` utilisent l'image de `zh` , `uk` utilise l'image de `ru` et d'autres langues (telles que `ja` ) utilisent l'image de `en` par défaut.

Par exemple, le fichier source français ( `fr` ) de `MarkDown` est le suivant :

```md
![xx](https://i18n-img.github.io/fr/1.avif)
<video src="https://i18n-img.github.io/fr/1.mp4"></video>
[xx](https://i18n-img.github.io/fr/README.md)
<a style="color:red" href="https://i18n-img.github.io/fr/i18n.site.gz">xx</a>
```

Le fichier anglais ( `en` ) traduit et généré est le suivant :

```md
![xx](https://i18n-img.github.io/en/1.avif)
<video src="https://i18n-img.github.io/en/1.mp4"></video>
[xx](https://i18n-img.github.io/en/README.md)
<a style="color:red" href="https://i18n-img.github.io/en/i18n.site.gz">xx</a>
```

Ici, `/en/` dans le code de la langue source sont remplacés par `/zh/` dans la langue cible.

Remarque : Il doit y avoir `/` avant et après le code de langue du texte remplacé dans l'URL.

> [!TIP]
> Si `- /` est configuré dans `url:` , seuls les chemins relatifs seront mis en correspondance, mais les URL commençant par `//` ne seront pas mises en correspondance.
>
> Si certains liens d'un nom de domaine souhaitent être remplacés et d'autres non, vous pouvez utiliser différents préfixes tels que `[x](//x.com/en/)` et `[x](https://x.com/en/)` pour les distinguer.

### Ignorer Le Fichier

Par défaut, tous les fichiers commençant par `.md` et `.yml` dans le répertoire de la langue source seront traduits.

Si vous souhaitez ignorer certains fichiers et ne pas les traduire (comme les brouillons inachevés), vous pouvez le configurer avec le champ `ignore` .

`ignore` utilise la même syntaxe [globset](https://docs.rs/globset/latest/globset/#syntax) que le fichier `.gitignore` .

Par exemple, `_* ` dans le fichier de configuration ci-dessus signifie que les fichiers commençant par `_` ne seront pas traduits.

## Règles De Traduction

### Les Éditeurs De Traduction Ne Doivent Pas Ajouter Ou Supprimer De Lignes

La traduction est modifiable. Modifiez le texte original et traduisez-le automatiquement, les modifications manuelles de la traduction ne seront pas écrasées (si ce paragraphe du texte original n'a pas été modifié).

> [!WARN]
> Il doit y avoir une correspondance biunivoque entre les lignes de la traduction et le texte original. Autrement dit, n'ajoutez ni ne supprimez de lignes lors de la compilation de la traduction. Sinon, cela entraînerait une confusion dans le cache d'édition de traduction.

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