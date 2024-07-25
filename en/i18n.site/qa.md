# Common Problem

## Accidentally Deleted `.i18n/V` , Causing the `Npm` Package to Fail to Be Published

`.i18n/v/ol/v.hash` The historical version of `npm` package release is saved in !

If you accidentally delete `.i18n/v/ol` the `npm` package will not be published.

At this time, first find the version number of the last release version of your project in [npmjs.com](//npmjs.com) , for example `0.1.9`

Then refer to the `bash` Create file below.

```bash
mkdir -p .i18n/v/ol
echo @0.1.9 > .i18n/v/ol/v.hash
```

Note that repairing in this way will lose the file history, making it impossible to incrementally update the next release, and all content will be repackaged and uploaded once.

