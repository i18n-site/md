# FAQ

## Accidentally deleted the `.i18n/v` directory, resulting in the failure to publish the `npm` package

Historical versions of the `npm` package release are stored in `.i18n/v/ol/v.hash`.

Should you inadvertently delete the `.i18n/v/ol` directory, it will prevent the `npm` package from being published.

At this time, first locate the version number of the last released version of your project on [npmjs.com](//npmjs.com), for example, `0.1.9`.

Then, refer to the following `bash` commands to recreate the file.

```bash
mkdir -p .i18n/v/ol
echo @0.1.9 > .i18n/v/ol/v.hash
```

Note that using this method to repair will result in the loss of file history, which will make it impossible to perform incremental updates for the next release. All content will need to be repackaged and uploaded in its entirety.