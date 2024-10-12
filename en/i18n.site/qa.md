# Frequently Asked Questions

## Accidentally deleting `.i18n/v` will lead to the failure of publishing the `npm` package

The historical versions of the `npm` package releases are saved in `.i18n/v/ol/v.hash`.

If you accidentally delete `.i18n/v/ol`, the `npm` package cannot be published.

At this time, first find the version number of the last release of your project at [npmjs.com](//npmjs.com), for example, `0.1.9`.

Then refer to the following `bash` to create the file.

```bash
mkdir -p .i18n/v/ol
echo @0.1.9 > .i18n/v/ol/v.hash
```

Note that using this method to fix the problem will cause the loss of file history, making it impossible to perform an incremental update during the next release. All content will be repackaged and uploaded all over again.