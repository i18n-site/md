# FAQs

## Adding or deleting lines in the translation, leading to disarray

> [!WARN]
> Remember, **the translation lines must match the original text line by line**.
> This means that when manually adjusting the translation, **do not add or remove lines**, as this will disrupt the mapping between the translation and the original text.

If lines are accidentally added or deleted, causing disarray, please revert the translation to the version before changes, run `i18` translation again, and recache the correct mapping.

The mapping between the translation and the original text is token-bound. Create a new token on [i18n.site/token](//i18n.site/token), delete `.i18h/hash`, and translate again to clear the disarrayed mapping (though this will result in the loss of all manual adjustments to the translation).

## `YAML`: How to Prevent `HTML` Links from Being Converted to `Markdown`

`YAML` values are considered for translation as `Markdown`.

Sometimes the conversion from `HTML` to `Markdown` is not desired, for instance, `<a href="/">Home</a>` being transformed into `[Home](/)`.

Add any attribute other than `href` to the `a` tag, such as `<a class="A" href="/">Home</a>`, to prevent this conversion.

## Conflicts in Files Under `./i18n/hash`

Delete the conflicting files and rerun the `i18` translation process.