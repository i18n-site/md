# FAQ

## Confusion Arising from Adding or Deleting Lines in the Translation

Be mindful that **the line count of the translation must match exactly with that of the original text**.

That is, when manually adjusting the translation, **avoid adding or removing lines** from the translation, as this may disrupt the mapping relationship between the translation and the original text.

Should you inadvertently add or delete lines, leading to confusion, please revert the translation to its previous version, rerun the `i18` translation, and re-cache the correct mapping.

The mapping between the translation and the original text is token-bound. To create a new token, visit [i18n.site/token](//i18n.site/token), delete the `.i18h/hash`, and translate again to clear the erroneous mapping (though this will result in the loss of all manual adjustments to the translation).

## `YAML`: How to Prevent Linked `HTML` from Being Converted to `Markdown`

The value in `YAML` is treated as `Markdown` for translation purposes.

Occasionally, the conversion from `HTML` to `Markdown` may not be desired, for instance, `<a href="/">Home</a>` being transformed into `[Home](/)`.

To avoid such conversions, add any attribute other than `href` to the `a` tag, such as `<a class="A" href="/">Home</a>`.

## File Conflicts Below in `./i18n/hash`

Delete the conflicting files and then rerun the `i18` translation.