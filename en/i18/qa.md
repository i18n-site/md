# Common Problem

## Adding or Deleting Lines of the Translation, Resulting in Confusion in the Translation

Remember, **the number of lines in the translation must correspond to the lines in the original text** .

That is to say, when manually adjusting the translation, **do not add or delete lines of the translation** , otherwise the mapping relationship between the translation and the original text will be disordered.

If you accidentally add or delete a line, causing confusion, please restore the translation to the version before the modification, run the translation `i18` , and re-cache the correct mapping.

The mapping between the translation and the original text is bound to the token. Create a new token in [i18n.site/token](//i18n.site/token) , delete `.i18h/hash` and translate again to clear the confusing mapping (but this will cause all manual adjustments to the translation to be lost).

## `YAML` : To Prevent `HTML` of the Link From Being Converted to `Markdown`

The value of `YAML` will be treated as `MarkDown` for translation.

Sometimes the conversion of `HTML` → `MarkDown` is not what we want, such as `<a href="/">Home</a>` being converted to `[Home](/)` .

Add any attribute other than `href` to the `a` tag, such as `<a class="A" href="/">Home</a>` , to avoid this conversion.

## `./I18n/Hash` the Following Files Conflict

Delete the conflicting files and re-run `i18` Translate.
