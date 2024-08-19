# FAQ

## Adding or deleting lines of the translation, resulting in disorder of the translation

Remember, **the number of lines of the translation must exactly match the lines of the original text**.

That is to say, when manually adjusting the translation, **do not add or delete lines of the translation**, otherwise it will lead to the disorder of the mapping relationship between the translation and the original text.

If you accidentally add or delete a line, causing confusion, please restore the translation to the version before the modification, run the `i18` translation again, and re-cache the correct mapping.

The mapping between the translation and the original text is bound to the token. Create a new token at [i18n.site/token](//i18n.site/token), delete `.i18h/hash`, and translate again to clear the confusing mapping (but this will cause all manual adjustments to the translation to be lost).

## `YAML`: How to Avoid the `HTML` of Links from Being Converted to `Markdown`

The value of `YAML` is regarded as `MarkDown` for translation.

Sometimes the conversion from `HTML` → `MarkDown` is not what we want, such as `<a href="/">Home</a>` being converted to `[Home](/)`.

Adding any attribute other than `href` to the `a` tag, such as `<a class="A" href="/">Home</a>`, can avoid this conversion.

## File Conflicts under `./i18n/hash`

Delete the conflicting files and re-run the `i18` translation.