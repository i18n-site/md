# Navigation Personnalisée

Prenons le site de [i18n-demo.github.io](//i18n-demo.github.io) comme exemple pour expliquer comment personnaliser la navigation.

![](https://p.3ti.site/1731036697.avif)

Les fichiers correspondant aux zones numérotées dans la figure ci-dessus sont les suivants :

1. Gauche [`.i18n/htm/t1.pug`](https://github.com/i18n-site/demo.i18n.site/blob/main/.i18n/htm/t1.pug)
2. Droite [`.i18n/htm/t2.pug`](https://github.com/i18n-site/demo.i18n.site/blob/main/.i18n/htm/t2.pug)

[`pug`](https://pugjs.org) est un langage de modèle qui génère `HTML` .

[➔ Cliquez ici pour apprendre la grammaire de pug](https://pugjs.org)

La chaîne de format `${I18N.sponsor}` est utilisée dans le fichier pour implémenter l'internationalisation, et son contenu sera remplacé par le texte correspondant dans [i18n.yml](https://github.com/i18n-site/demo.i18n.site/blob/main/en/i18n.yml) dans le répertoire de la langue source.

**N'écrivez pas `css` et `js` dans `pug`** , sinon il y aura une erreur.

Les styles sont écrits en `css` et l'interaction est obtenue en créant des composants Web.

Ici, le fichier correspondant au style de la barre de [i18n/htm/topbar.css](https://github.com/i18n-site/demo.i18n.site/blob/main/.i18n/htm/topbar.css) est :