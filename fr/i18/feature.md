# Caractéristiques Du Produit

`i18` est un outil en ligne de commande pour traduire Markdown & Yaml

## Peut Parfaitement Conserver Le Format De Markdown

Prend en charge la traduction des tableaux Markdown sans endommager le format ; ne traduit pas les mots dans les formules mathématiques ou les liens.

Prend en charge la traduction de Markdown en mixte HTML `<pre>` HTML dans `MarkDown` et le contenu dans les balises `<code>` ne sont pas traduits

## Peut Reconnaître Des Formules Mathématiques Et Ignorer La Traduction

Les formules mathématiques sont reconnues et la traduction est ignorée.

Pour savoir comment écrire des formules mathématiques, veuillez vous référer à [" Github À propos de l'écriture d'expressions mathématiques"](https://docs.github.com/get-started/writing-on-github/working-with-advanced-formatting/writing-mathematical-expressions#about-writing-mathematical-expressions) .

## Possibilité De Traduire Les Commentaires en Extraits De Code

Le code en ligne et les extraits de code ne sont pas traduits, mais les commentaires dans le code peuvent être traduits.

Les commentaires de traduction doivent indiquer la langue après ` ``` ` , par ` ```rust ` :

Prend actuellement en charge la traduction des commentaires `toml` , `yaml` , `json5` , `go` , `rust` , `c` , `cpp` , `java` `js` , `coffee` `python` , `bash` , `php` [et d'autres langues](https://github.com/i18n-site/rust/blob/main/getc/src/style.rs#L14) .

Si le langage de programmation dont vous avez besoin n'est pas disponible, veuillez [nous contacter](https://groups.google.com/g/i18n-site) .

## Compatible Avec La Ligne De Commande

Il existe de nombreux [outils lourds](https://www.capterra.com/translation-management-software) disponibles pour gérer les documents de traduction.

Pour les programmeurs familiers avec `git` `vim` , `vscode` , l'utilisation de ces outils pour éditer des documents et gérer des versions augmentera sans aucun doute le coût d'apprentissage.

`KISS` ( `Keep It Simple, Stupid` ) Parmi les partisans de ce principe, les solutions au niveau de l'entreprise sont synonymes de lourdeur, d'inefficacité et de difficulté à utiliser.

La traduction doit être effectuée en saisissant des commandes et en la complétant en un seul clic. Il ne doit pas y avoir de dépendances d'environnement complexes.

N'ajoutez pas d'entités sauf si nécessaire.

## Aucune Modification, Aucune Traduction

Il existe également des outils de traduction en ligne de commande, tels que [translate-shell](https://github.com/soimort/translate-shell)

Cependant, ils ne prennent pas en charge l'identification des modifications de fichiers et traduisent uniquement les fichiers modifiés pour réduire les coûts et augmenter l'efficacité.

## La Traduction Peut Être Modifiée Et La Traduction Automatique N'écrasera Pas Les Modifications Existantes.

La traduction est modifiable.

Modifiez le texte original et traduisez-le automatiquement, les modifications manuelles de la traduction ne seront pas écrasées (si ce paragraphe du texte original n'a pas été modifié).

## La Traduction De Haute Qualité De Xindaya

Nous avons développé une nouvelle génération de technologie de traduction qui combine les avantages techniques des modèles de traduction automatique traditionnels et des grands modèles linguistiques pour rendre les traductions précises, fluides et élégantes.

Les tests aveugles montrent que la qualité de nos traductions est nettement meilleure que celle de services similaires.

Pour obtenir la même qualité, la quantité de modifications manuelles requise par Google Translate et `ChatGPT` est respectivement de `2.67` fois et `3.15` fois la nôtre.

## <a rel=id href="#price" id="price"></a> Prix extrêmement compétitif

|                                                                                   | USD/million de mots |
| --------------------------------------------------------------------------------- | ------------- |
| [i18n.site](https://i18n.site)                                                    | 9             |
| [Microsoft](https://azure.microsoft.com/pricing/details/cognitive-services/translator) | 10            |
| [Amazone](https://aws.amazon.com/translate/pricing)                                | 15            |
| [Google](https://cloud.google.com/translate/pricing)                                | 20            |
| [DeepL](https://www.deepl.com/zh/pro#developer)                                  | 25            |

Remarque : Le nombre de caractères facturables = [le nombre de unicode](https://en.wikipedia.org/wiki/Unicode) dans le fichier source × le nombre de langues dans la traduction

## Soutenez La Traduction `YAML`

L'outil traduit uniquement les valeurs du dictionnaire dans `YAML` , pas les clés du dictionnaire.

Basé sur `YAML` Translation, vous pouvez facilement créer des solutions internationales pour différents langages de programmation.

## Prise en Charge De La Traduction `HOGO`

Prend en charge la configuration d'en-tête du blog statique de type [HOGO](https://github.com/gohugoio/hugo) , seuls les champs `title` , `summary` et `description` sont traduits.

## Ne Traduisez Pas Les Noms De Variables

`Markdown` Utilisé comme modèle d'email, `YAML` comme configuration de fichier de langue, il y aura des paramètres variables (par exemple : la recharge `${amount}` a été reçue).

`${varname}` Ce type de nom de variable ne sera pas considéré comme une traduction anglaise.

## Optimisation Des Traductions Pour La Chine, Le Japon Et La Corée

### Lorsqu'elle Est Traduite en Anglais, La Première Lettre Du Titre Est Automatiquement en Majuscule.

La Chine, le Japon et la Corée n'utilisent pas de lettres majuscules ou minuscules, mais les titres anglais mettent généralement la première lettre en majuscule.

`i18` peut reconnaître les titres en `MarkDown` et mettra automatiquement la première lettre en majuscule lors de la traduction dans une langue sensible à la casse.

Par exemple `为阅读体验而优化` sera traduit par `Optimized for Reading Experience` .

### Les Termes Anglais en Chinois, Japonais, Coréen Et Chinois Ne Sont Pas Traduits

Les documents provenant de Chine, du Japon et de Corée contiennent souvent de nombreux termes anglais.

La traduction automatique des langues chinoise, japonaise et coréenne est devenue une langue autre que l'anglais, et les termes sont souvent traduits ensemble, comme la phrase chinoise suivante :

`Falcon 得分超 Llama ？Hugging Face 排名引发争议`

Si vous utilisez Google ou DeepL, ils traduisent tous deux de manière incorrecte des termes anglais qui devraient rester originaux (prenez le japonais et le français comme exemples).

### Google Traduction

Traduit en `ファルコンがラマを上回る？ハグ顔ランキングが論争を巻き起こす` :

<img alt="" src="//p.3ti.site/1720199391.avif">

Traduit en `Le faucon surpasse le lama ? Le classement Hugging Face suscite la polémique` :

`Falcon` est traduit par `faucon` et `Llama` est traduit par `lama` . En tant que noms propres, ils ne doivent pas être traduits.

<img alt="" src="//p.3ti.site/1720199451.avif">

### Traduction DeepL

Traduit en `ファルコンがラマに勝利、ハグ顔ランキングが物議を醸す` :

<img alt="" src="//p.3ti.site/1720199550.avif">

DeepL Traduction de ce qui précède en français (réécriture également des noms propres et ajout de l'impair `... ` ) :

`Un faucon marque un point sur un lama... Le classement des visages étreints suscite la controverse. `

<img alt="" src="//p.3ti.site/1720199603.avif">

### Traduction i18n.site

La traduction de `i18` reconnaîtra les termes anglais dans les documents chinois, japonais et coréens et laissera les termes intacts.

Par exemple, le résultat de la traduction japonaise ci-dessus est :

`Falcon のスコアが Llama よりも高かったですか ? Hugging Face ランキングが論争を引き起こす`

La traduction française est :

`Falcon a obtenu un score supérieur à Llama ? Hugging Face Le classement suscite la controverse`

Ce n'est que lorsqu'il y a un espace entre le mot anglais et le texte chinois, japonais et coréen ou que la longueur anglaise est supérieure à 1 que le mot sera considéré comme un terme.

Par exemple : `C罗` sera traduit par `Cristiano Ronaldo` .

## Peut Être Combiné `i18n.site`

`i18` Est intégré à l'outil de ligne de commande pour la création de sites Web multilingues [`i18n.site`](/i18n.site) .

Voir la documentation de [`i18n.site`](/i18n.site) pour plus de détails.

## Codes Open Source

Le client est entièrement open source, et le 90 serveur % du code est open source [Cliquez ici pour voir le code source](/i18n.site/src) .

Nous recherchons des bénévoles pour participer au développement de code open source et à la relecture de textes traduits.

Si vous êtes intéressé, veuillez [→ Cliquez ici pour remplir votre profil](https://ggl.link/i18n) , puis rejoignez [la liste de diffusion](https://groups.google.com/u/2/g/i18n-site) pour communiquer.

## Rester en Contact

Veuillez <button onclick="mailsub()">cliquer sur cet e-mail pour vous abonner aux mises à jour du produit</button> et <button onclick="webpush()">activer le push du navigateur</button> . Nous vous informerons lorsque des mises à jour du produit seront effectuées.

/ également à suivre nos comptes [i18n-site.bsky.social](https://bsky.app/profile/i18n-site.bsky.social) [X.COM: @i18nSite](https://x.com/i18nSite)
