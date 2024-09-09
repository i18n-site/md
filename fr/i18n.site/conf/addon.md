# Plug-in

Les plug-ins peuvent être configurés dans `.i18n/conf.yml`, par exemple :

```yml
addon:
  - i18n.addon/toc
```

## Plug-in officiel

* `i18n.addon/toc` : Index du sommaire
  Générer un index de sommaire en `json` à partir du `TOC`, activation par défaut

* `i18n.addon/mouse` : Effets de souris

## Convention de nom de fichier

Les plug-ins sont tous des paquets `npm`.

Le paquet correspondant à `i18n.addon/toc` est [https://www.npmjs.com/package/@i18n.addon/toc](https://www.npmjs.com/package/@i18n.addon/toc).

Le plug-in utilise par défaut la dernière version et vérifie les mises à jour une fois par semaine.

Si vous souhaitez figer une version, vous pouvez écrire `i18n.addon/toc@0.1.3`.

La commande de traduction `i18n.site` installe le fichier conventionnel du package de plugin, puis l'exécute.

Les noms de fichiers conventionnels sont les suivants

### htmIndex.js

`htmIndex.js` sera injecté à la fin de `.i18n/htm/index.js`.

Dont `__CONF__` sera remplacé par le nom de la configuration actuelle (par exemple `dev` ou `ol`).

### afterTran.js

Ce qui sera appelé après la traduction, avec les paramètres suivants.

* `lang_li` : Liste des langues, la première langue étant la langue source
* `changed` : Fichiers modifiés
* `root` : Répertoire racine du projet

La valeur de retour est un dictionnaire, par exemple

```json
{
  file:{
    //  path: txt, for example :
    // "_.json": "[]"
  }
}
```

`file` pour la liste des fichiers exportés, `path` pour le chemin du fichier et `txt` pour le contenu du fichier.

## Fonctions intégrées

Le runtime `js` intégré est basé sur un développement secondaire de [boa](https://github.com/boa-dev/boa), et les fonctions intégrées se présentent comme suit :

* `wPath(path, txt)` : Écrire dans un fichier
* `rTxt(path)` : Lire un fichier texte
* `rBin(path)` : Lire un fichier binaire
* `rDir(dirpath)` : Lire un répertoire, valeur de retour : tableau des listes de répertoires et de fichiers

## Guide de développement

Le développement de plugins peut se référer à [https://github.com/i18n-site/addon](https://github.com/i18n-site/addon)