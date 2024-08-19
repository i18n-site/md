# FAQ

## Modification des lignes de traduction, entraînant un désordre dans le texte traduit

Enregistrez bien, **les lignes de traduction doivent correspondre exactly aux lignes du texte original**.

Cela signifie que lors de l'ajustement manuel de la traduction, **ne pas ajouter ou supprimer de lignes**, sinon la correspondance entre la traduction et le texte original sera perturbée.

Si, par inadvertance, vous ajoutez ou supprimez des lignes, provoquant un désordre, veuillez rétablir la version de la traduction avant modification, puis relancez la traduction `i18` pour recacher le bon mappage.

La correspondance entre la traduction et le texte original est liée aux jetons. Créez un nouveau jeton sur [i18n.site/token](//i18n.site/token), supprimez `.i18h/hash`, puis traduisez à nouveau pour effacer le mappage erroné (mais cela entraînera la perte de toutes les modifications manuelles apportées à la traduction).

## `YAML` : Comment éviter que les liens `HTML` ne soient convertis en `Markdown`

Les valeurs `YAML` sont considérées comme du `Markdown` pour la traduction.

Parfois, la conversion `HTML` → `Markdown` n'est pas souhaitée, par exemple `<a href="/">Home</a>` converti en `[Home](/)`.

Ajoutez n'importe quel attribut autre que `href` à la balise `a`, comme `<a class="A" href="/">Home</a>`, pour éviter cette conversion.

## Conflicts de fichiers sous `./i18n/hash`

Supprimez les fichiers en conflit et réexécutez la traduction `i18`.