# Problème Commun

## Ajout Ou Suppression De Lignes De Traduction, Entraînant Une Confusion Dans La Traduction

N'oubliez pas **que le nombre de lignes de la traduction doit correspondre à celui du texte original** .

C'est-à-dire que lors de l'ajustement manuel de la traduction, **n'ajoutez ni ne supprimez de lignes de traduction** , sinon la relation de mappage entre la traduction et le texte original sera désordonnée.

Si vous ajoutez ou supprimez accidentellement une ligne, provoquant une confusion, veuillez restaurer la traduction à la version avant la modification, `i18` la traduction et remettez en cache le mappage correct.

Le mappage entre la traduction et le texte original est lié au jeton. Créez un nouveau jeton dans [i18n.site/token](//i18n.site/token) , supprimez `.i18h/hash` et traduisez à nouveau pour effacer le mappage déroutant (mais cela entraînera la perte de tous les ajustements manuels de la traduction).

## `YAML` : Empêcher La Conversion `HTML` Du Lien en `Markdown`

La valeur de `YAML` sera traitée comme `MarkDown` pour la traduction.

Parfois, la conversion de `HTML` → `MarkDown` n'est pas ce que nous voulons, comme `<a href="/">Home</a>` étant converti en `[Home](/)` .

Ajoutez n'importe quel attribut autre que `href` à la balise `a` , tel que `<a class="A" href="/">Home</a>` , pour éviter cette conversion.

## `./I18n/Hash` Les Fichiers Suivants Sont en Conflit

Supprimez les fichiers en conflit et relancez Translate `i18`
