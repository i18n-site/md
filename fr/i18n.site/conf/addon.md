# Plug-In

Les plug-ins peuvent être configurés en `.i18n/conf.yml` , tels que :

```yml
addon:
  - i18n.addon/toc
```

## Plugin Officiel

* `i18n.addon/toc` :
  Générer un index de répertoire de `json` basé sur `TOC` , activé par défaut

* `i18n.addon/mouse` : Effets de souris

## Convention De Nom De Fichier

Les plug-ins sont tous des packages `npm` .

Le package correspondant à `i18n.addon/toc` ci-dessus est [https://www.npmjs.com/package/@i18n.addon/toc](https://www.npmjs.com/package/@i18n.addon/toc)

Le plugin utilise la dernière version par défaut et vérifie les mises à jour chaque semaine.

Si vous souhaitez corriger la version, vous pouvez écrire `i18n.addon/toc@0.1.3` .

La ligne de commande de traduction `i18n.site` installera le fichier de convention du package de plug-in, puis l'exécutera.

Les noms de fichiers convenus sont les suivants

### htmIndex.js

`htmIndex.js` sera injecté à la fin de `.i18n/htm/index.js` .

Où `__CONF__` sera remplacé par le nom de la configuration actuelle (comme `dev` ou `ol` ).

### afterTran.js

Il sera appelé une fois la traduction terminée et les paramètres transmis sont les suivants.

* `lang_li` : Liste des langues, la première langue est la langue source
* `changed` : Fichiers modifiés
* `root` : Répertoire racine du projet

La valeur de retour est un dictionnaire, tel que

```json
{
  file:{
    //  path: txt, for example :
    // "_.json": "[]"
  }
}
```

`file` est la liste des fichiers de sortie, `path` est le chemin du fichier et `txt` est le contenu du fichier.

## Fonctions Intégrées

Le runtime `js` intégré est basé sur le développement secondaire de [boa](https://github.com/boa-dev/boa) , et les fonctions intégrées sont les suivantes :

* `wPath(path, txt)` : Écrire dans un fichier
* `rTxt(path)` : Lire le fichier texte
* `rBin(path)` : Lire le fichier binaire
* `rDir(dirpath)` : Lit le répertoire, la valeur de retour est un tableau : de répertoires, liste de fichiers

## Guide De Développement

Le développement de plug-ins peut être une référence [https://github.com/i18n-site/addon](https://github.com/i18n-site/addon)