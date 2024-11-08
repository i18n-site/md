# Faq

## Ajout Ou Suppression De Lignes De Traduction, Entraînant Une Confusion Dans La Traduction

> [!WARN]
> N'oubliez pas que **le nombre de lignes de la traduction doit correspondre à celui du texte original** .
> C'est-à-dire que lors de l'ajustement manuel de la traduction, **n'ajoutez ni ne supprimez de lignes de traduction** , sinon la relation de mappage entre la traduction et le texte original sera désordonnée.

Si vous ajoutez ou supprimez accidentellement une ligne, provoquant une confusion, veuillez restaurer la traduction à la version avant la modification, exécutez à nouveau la traduction `i18` et remettez en cache le mappage correct.

Le mappage entre la traduction et le texte original est lié au jeton. Créez un nouveau jeton dans [i18n.site/token](//i18n.site/token) supprimez `.i18h/hash` et traduisez à nouveau pour effacer le mappage déroutant (mais cela entraînera la perte de tous les ajustements manuels de la traduction).

## `YAML` : Comment Éviter Que Le Lien `HTML` Soit Converti en `Markdown`

Une valeur de `YAML` est traitée comme `MarkDown` pour la traduction.

Parfois, la conversion de `HTML` → `MarkDown` n'est pas ce que nous souhaitons, par exemple `<a href="/">Home</a>` étant converti en `[Home](/)` .

L'ajout d'un attribut autre que `href` à la balise `a` , tel que `<a class="A" href="/">Home</a>` , peut éviter cette conversion.

## `./i18n/hash` Conflit De Fichiers Ci-Dessous

Supprimez les fichiers en conflit et réexécutez `i18` traduction.