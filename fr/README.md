<h1 style="justify-content:space-between">I18N.SITE · Langue sans frontières<img src="//i-01.eu.org/i18n/logo.svg" style="width:42px;margin-top:-1px"></h1>

I18N.SITE, un générateur de sites statiques multilingues, peut traduire automatiquement Markdown dans [plus d&#39;une centaine de langues différentes](https://github.com/i18n-site/node/blob/main/lang/src/index.js) .

<img src="//i-01.eu.org/i18n/lang.webp" alt="" />

Certains voudront peut-être se demander : maintenant que les navigateurs disposent de fonctions de traduction intégrées, est-il inutile d’internationaliser le site Web ?

Je tiens à dire que **ce n&#39;est qu&#39;en internationalisant l&#39;ensemble du site que nous pourrons prendre en charge la recherche multilingue en texte intégral sur le site et l&#39;optimisation des moteurs de recherche** .

## Didacticiel

## Présentation De La Fonction

### Conserver Le Format Markdown

### Modifier La Traduction

Après avoir modifié la traduction, vous devez réexécuter `./i18n.sh` pour mettre à jour le cache.

### Notes De Traduction

Les commentaires de traduction doivent indiquer la langue après \```, comme ` ```rust` .

Prend actuellement en charge la traduction des commentaires pour rust, c, cpp, java, js, coffee, python et bash.

Modifiez [tran_md/src/comment.coffee](https://github.com/i18n-site/node/blob/main/tran_md/src/comment.coffee) pour ajouter la prise en charge de la traduction des commentaires dans plus de langues.

### Configurer Le Proxy

La définition des variables d'environnement suivantes permet aux appels de l'API Google Translate de passer par le proxy.

```bash
export https_proxy=http://127.0.0.1:7890
```

### Incorporation De Variables

```
test: 测试变量<br 0>嵌入
```

### Vider Le Cache

```bash
rm -rf .i18n/.cache
```
