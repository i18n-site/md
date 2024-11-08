# Frequently Asked Questions

## Adding or Deleting Lines in the Translation, Causing Misalignment

> [!WARN]
> Remember, **the number of lines in the translation must correspond one-to-one with the lines in the original text**.
> This means that when manually adjusting the translation, **do not add or delete lines in the translation**, as this will cause the mapping between the translation and the original text to become misaligned.

If you accidentally add or delete a line, causing misalignment, please restore the translation to the version before the modification, run the `i18` translation again, and re-cache the correct mapping.

The mapping between the translation and the original text is bound to the token. To clear a misaligned mapping, you can create a new token at [i18n.site/token](//i18n.site/token), delete `.i18h/hash`, and translate again (this will cause all manual adjustments to the translation to be lost).

## `YAML`: How to Avoid `HTML` Links Being Converted to `Markdown`

The values in `YAML` are treated as `Markdown` during translation.

Sometimes the conversion from `HTML` to `Markdown` is not what we want, such as `<a href="/">Home</a>` being converted to `[Home](/)`.

To avoid this conversion, add any attribute other than `href` to the `a` tag, such as `<a class="A" href="/">Home</a>`.

## Conflicts in Files Under `./i18n/hash`

Delete the conflicting files and rerun the `i18` translation.