<h1 style="justify-content:space-between">3Ti.Site · Pensez sans frontières<img src="//i-01.eu.org/i18n/logo.svg" style="margin-top:-1px;width:42px"></h1>

3Ti.Site, un générateur de sites statiques, peut traduire automatiquement Markdown dans [plus d&#39;une centaine de langues différentes](https://github.com/i18n-site/node/blob/main/lang/src/index.js) .

<img src="//i-01.eu.org/i18n/lang.webp" alt="" />

Certains se demanderont peut-être que, puisque tous les navigateurs ont des fonctions de traduction, est-il inutile d’internationaliser le site Web ?

Je voudrais dire que **seuls les sites Web qui génèrent des traductions statiques peuvent prendre en charge la recherche multilingue en texte intégral sur site et l&#39;optimisation des moteurs de recherche** .

## Introduction

Bible · Genèse :

> Dans les temps anciens, lorsque les langues n'en faisaient qu'une, l'humanité construisait une tour atteignant les cieux, un portail vers le domaine de Dieu, proclamant la puissance de l'humanité.
>
> Dieu a déclaré : « Les hommes s'unissent en une seule tribu, avec une langue commune, et cette tour n'est qu'un prologue. Maintenant, ils réalisent leur désir et il n'y aura plus de peur. »
>
> Ainsi, Dieu est descendu, dispersant les gens dans différents coins et utilisant différentes langues.
>
> À partir de ce moment-là, la communication humaine est devenue difficile, les disputes interminables et il n’y avait plus de tour touchant le ciel.

Le roman de science-fiction « Trois corps » (prononciation chinoise : `3Ti` ) met en scène une civilisation extraterrestre qui communique par ondes électromagnétiques, n'a pas de barrières linguistiques et est technologiquement prospère.

J'espère créer un outil qui permettra aux habitants de la Terre d'être comme des personnes à trois corps, de communiquer sans être liés par le langage et d'unir à nouveau toute l'humanité.

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
