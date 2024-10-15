# FAQs

## Accidentally deleting `.i18n/v` can prevent the `npm` package from being published

`.i18n/v/ol/v.hash` contains the history of published versions for the `npm` package.

If you inadvertently delete `.i18n/v/ol`, the `npm` package will not be able to be published.

First, locate the version number of your project's latest release on [npmjs.com](//npmjs.com), for example, `0.1.9`.

Then, follow the `bash` commands below to create the file.

```bash
mkdir -p .i18n/v/ol
echo @0.1.9 > .i18n/v/ol/v.hash
```

Please note that using this method to fix the issue will result in the loss of file history, which means that the next release will not be able to update incrementally; all content will need to be repackaged and uploaded again.