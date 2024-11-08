# Frequently Asked Questions

## Accidentally Deleted `.i18n/v`, Causing the `npm` Package to Fail to Publish

The historical versions of the `npm` package are stored in `.i18n/v/ol/v.hash`.

If you accidentally delete `.i18n/v/ol`, the `npm` package will fail to publish.

In this case, first find the version number of the last published version of your project on [npmjs.com](//npmjs.com), for example, `0.1.9`.

Then refer to the following `bash` script to create the file.

```bash
mkdir -p .i18n/v/ol
echo @0.1.9 > .i18n/v/ol/v.hash
```

Note that using this method to repair will result in the loss of file history, making it impossible to incrementally update the next release. All content will need to be repackaged and uploaded again.