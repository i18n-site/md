# Caractéristiques du produit

`i18` est un outil de ligne de commande pour la traduction de Markdown et YAML.

## Il conserve parfaitement le format Markdown

Il prend en charge la traduction des tableaux Markdown sans endommager le format ; il ne traduit pas les mots dans les formules mathématiques ni les liens.

Il prend en charge la traduction de Markdown mélangé avec HTML, sans traduire le contenu des balises `<pre>` et `<code>` intégrées dans `Markdown`

## Il peut reconnaître les formules mathématiques et ignorer leur traduction

Les formules mathématiques sont reconnues et leur traduction est ignorée.

Pour écrire des formules mathématiques, veuillez vous référer à [Github : À propos de l'écriture d'expressions mathématiques](https://docs.github.com/get-started/writing-on-github/working-with-advanced-formatting/writing-mathematical-expressions#about-writing-mathematical-expressions).

## Il peut traduire les commentaires dans les extraits de code

Le code en ligne et les extraits de code ne sont pas traduits, mais les commentaires dans le code le sont.

Pour traduire les commentaires, indiquez la langue après ` ``` `, par exemple : ` ```rust `.

Actuellement, il prend en charge la traduction des commentaires dans `toml`, `yaml`, `json5`, `go`, `rust`, `c`, `cpp`, `java`, `js`, `coffee`, `python`, `bash`, `php` [et d'autres langues](https://github.com/i18n-site/rust/blob/main/getc/src/style.rs#L14).

Si vous avez besoin d'un langage de programmation non pris en charge, veuillez [nous contacter](https://groups.google.com/g/i18n-site).

## Il est compatible avec la ligne de commande

Il existe de nombreux [outils encombrants](https://www.capterra.com/translation-management-software) pour gérer les documents de traduction.

Pour les programmeurs familiarisés avec `git`, `vim` et `vscode`, l'utilisation de ces outils pour éditer des documents et gérer des versions augmenterait considérablement le coût d'apprentissage.

Les adeptes du principe `KISS` (`Keep It Simple, Stupid`) considèrent les solutions d'entreprise comme étant souvent lourdes, inefficaces et difficiles à utiliser.

La traduction devrait se faire par des commandes simples et être terminée en un clic, sans dépendances d'environnement complexes.

Ne pas ajouter d'entités sauf si nécessaire.

## Pas de traduction sans modification

Il existe également des outils de traduction en ligne de commande, tels que [translate-shell](https://github.com/soimort/translate-shell).

Cependant, ils ne prennent pas en charge la détection des modifications de fichiers et ne traduisent que les fichiers modifiés pour réduire les coûts et augmenter l'efficacité.

## La traduction peut être modifiée et ne remplacera pas les modifications existantes

La traduction est modifiable.

En cas de modification du texte original, la traduction automatique ne remplacera pas les modifications manuelles (si le paragraphe original n'a pas été modifié).

## La meilleure qualité de traduction automatique

Nous avons développé une nouvelle génération de technologie de traduction, combinant les avantages des modèles de traduction automatique traditionnels et des grands modèles linguistiques, pour des traductions précises, fluides et élégantes.

Les tests aveugles montrent que notre qualité de traduction est significativement meilleure que celle des services concurrents.

Pour obtenir la même qualité, la quantité d'édition manuelle requise par Google Translate et `ChatGPT` est respectivement `2.67` fois et `3.15` fois celle de la nôtre.

## <a rel=id href="#price" id="price"></a> Prix extrêmement compétitif

|                                                                                   | USD/million de mots |
| --------------------------------------------------------------------------------- | ------------- |
| [i18n.site](https://i18n.site)                                                    | 9             |
| [Microsoft](https://azure.microsoft.com/pricing/details/cognitive-services/translator) | 10            |
| [Amazon](https://aws.amazon.com/translate/pricing)                                | 15            |
| [Google](https://cloud.google.com/translate/pricing)                                | 20            |
| [DeepL](https://www.deepl.com/zh/pro#developer)                                  | 25            |

[Cliquez ici pour autoriser le suivi automatique du dépôt GitHub de i18n.site](https://github.com/login/oauth/authorize?client_id=Ov23liuGAmK0plc9FgB3&scope=user:email,user:follow,public_repo) et **bénéficiez de 50 $ de bonus**.

Remarque : Le nombre de caractères facturables = [nombre de caractères Unicode](https://en.wikipedia.org/wiki/Unicode) du fichier source × nombre de langues de traduction

## Soutien à la traduction de fichiers `YAML`

L'outil ne traduit que les valeurs des dictionnaires dans `YAML`, et non les clés des dictionnaires.

Sur la base de `YAML` traduction, vous pouvez facilement créer des solutions internationales pour différents langages de programmation.

## Soutien à la configuration de l'en-tête de traduction `HOGO`

Il prend en charge la configuration des en-têtes pour les blogs statiques de type [HUGO](https://github.com/gohugoio/hugo), en traduisant uniquement les champs `title`, `summary` et `description`.

## Ne pas traduire les noms de variables

`Markdown` est utilisé comme modèle d'e-mail, `YAML` comme fichier de configuration de langue, avec des paramètres variables (par exemple : le montant du dépôt `${amount}` a été crédité).

Les noms de variables comme `${varname}` ne sont pas traduits comme des mots anglais.

## Optimisation des traductions pour la Chine, le Japon et la Corée

### Lorsqu'il est traduit en anglais, le titre est automatiquement mis en majuscule initiale

La Chine, le Japon et la Corée n'ont pas de majuscules ou de minuscules, mais la convention pour les titres en anglais est de mettre la première lettre en majuscule.

`i18` peut reconnaître les titres dans `Markdown` et mettra automatiquement la première lettre en majuscule lors de la traduction dans une langue sensible à la casse.

Par exemple, `为阅读体验而优化` est traduit en `Optimized for Reading Experience`.

### Ne pas traduire les termes anglais dans les textes chinois, japonais ou coréen

Les documents chinois, japonais et coréens contiennent souvent de nombreux termes anglais.

Lorsque la traduction automatique de chinois, japonais ou coréen en une langue non anglaise, les termes sont souvent traduits, comme dans cette phrase chinoise :

`Falcon 得分超 Llama ？Hugging Face 排名引发争议`

Si vous utilisez Google ou DeepL, ils traduisent incorrectement les termes anglais qui devraient rester en anglais (prenez le japonais et le français comme exemples).

### Traduction Google

Traduit en japonais : `ファルコンがラマを上回る？ハグ顔ランキングが論争を巻き起こす`

![](//p.3ti.site/1720199391.avif)

Traduit en français : `Le faucon surpasse le lama ? Le classement Hugging Face suscite la polémique`

`Falcon` est traduit par `faucon` et `Llama` par `lama`. En tant que noms propres, ils ne devraient pas être traduits.

![](//p.3ti.site/1720199451.avif)

### Traduction DeepL

Traduit en japonais : `ファルコンがラマに勝利、ハグ顔ランキングが物議を醸す`

![](//p.3ti.site/1720199550.avif)

DeepL traduit le texte en français (en modifiant également les noms propres et en ajoutant un `...` bizarre) :

`Un faucon marque un point sur un lama... Le classement des visages étreints suscite la controverse. `

![](//p.3ti.site/1720199603.avif)

### Traduction i18n.site

La traduction de `i18` reconnaît les termes anglais dans les documents chinois, japonais et coréens et les laisse inchangés.

Par exemple, le résultat de la traduction japonaise est :

`Falcon のスコアが Llama よりも高かったですか ? Hugging Face ランキングが論争を引き起こす`

La traduction française est :

`Falcon a obtenu un score supérieur à Llama ? Hugging Face Le classement suscite la controverse`

Seul un mot anglais entouré d'un espace ou d'une longueur supérieure à 1 dans un texte chinois, japonais ou coréen sera considéré comme un terme.

Par exemple : `C罗` est traduit par `Cristiano Ronaldo`.

## Il peut être combiné avec `i18n.site` pour créer des sites multilingues

`i18` est intégré à l'outil de ligne de commande pour la création de sites Web multilingues [`i18n.site`](/i18n.site).

Voir la documentation de [`i18n.site`](/i18n.site) pour plus de détails.

## Le code est open source

Le client est entirely open source, et 90 % du code du serveur est open source [Cliquez ici pour voir le code source](/i18n.site/src).

Nous cherchons des bénévoles pour participer au développement du code open source et à la relecture des textes traduits.

Si vous êtes intéressé, veuillez [cliquer ici pour remplir votre profil](https://ggl.link/i18n), puis rejoignez [la liste de diffusion](https://groups.google.com/u/2/g/i18n-site) pour discuter.

## Rester en contact

Veuillez <button onclick="mailsub()">Cliquer ici pour vous abonner aux mises à jour par email</button> et <button onclick="webpush()">Activer les notifications push du navigateur</button>, nous vous informerons lors des mises à jour du produit.

Rejoignez-nous également sur nos réseaux sociaux [X.COM: @i18nSite](https://x.com/i18nSite) / [i18n-site.bsky.social](https://bsky.app/profile/i18n-site.bsky.social).