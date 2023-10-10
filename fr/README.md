<h1 style="justify-content:space-between">3Ti.Site · Ne pensez pas aux frontières<img src="//i-01.eu.org/i18n/logo.svg" style="margin-top:-1px;width:42px"></h1>

3Ti.Site, un générateur de sites statiques multilingues, peut traduire automatiquement Markdown dans [plus d'une centaine de langues différentes](https://github.com/i18n-site/node/blob/main/lang/src/index.js) .

<img src="//i-01.eu.org/i18n/lang.webp" alt="" />

Certains voudront peut-être se demander : maintenant que les navigateurs disposent de fonctions de traduction intégrées, est-il inutile d’internationaliser le site Web ?

Je tiens à dire que **ce n'est qu'en internationalisant l'ensemble du site que nous pourrons prendre en charge la recherche multilingue en texte intégral sur le site et l'optimisation des moteurs de recherche** .

## Séquence

"Bible·Genèse":

> Les anciens ne faisaient pas de distinction entre les langues. Ils sont nés avec fierté et voulaient construire une haute tour dont le sommet s'élève vers le ciel.
>
> <blockquote><p>Dieu était mécontent de l&#39;arrogance de l&#39;homme, alors il a dispersé tous les êtres vivants dans divers endroits, incapables de se comprendre.</p></blockquote>
>
> <blockquote><p>Depuis, il est difficile pour les humains de communiquer, les disputes se poursuivent et il n’y a pas de Tour de Babel au monde.</p></blockquote>

Le roman de science-fiction « Trois corps » (prononciation chinoise : `3Ti` ) met en scène une civilisation extraterrestre qui communique par ondes électromagnétiques, n'a pas de barrières linguistiques et est technologiquement prospère.

J'espère qu'avec l'aide de cet outil, les habitants de la terre seront comme des personnes à trois corps, que la communication ne sera pas limitée par la langue et que toute l'humanité sera à nouveau unie.

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
