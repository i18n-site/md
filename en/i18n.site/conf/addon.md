# Plug - in

Plug - ins can be configured in `.i18n/conf.yml`, for example:

```yml
addon:
  - i18n.addon/toc
```

## Official Plug - ins

* `i18n.addon/toc` : Table of Contents
  Generate a `json` TOC index based on `TOC`, which is enabled by default

* `i18n.addon/mouse`: Mouse Effects

## File Naming Convention

All plug - ins are `npm` packages.

The package corresponding to the above `i18n.addon/toc` is [https://www.npmjs.com/package/@i18n.addon/toc](https://www.npmjs.com/package/@i18n.addon/toc).

By default, the plug - in uses the latest version and checks for updates weekly.

If you want to fix the version, you can write `i18n.addon/toc@0.1.3`.

The translation command line `i18n.site` will install the convention file of the plug - in package and then execute it.

The agreed - upon file names are as follows:

### htmIndex.js

`htmIndex.js` will be injected at the end of `.i18n/htm/index.js`.

Here, `__CONF__` will be replaced with the name of the current configuration (such as `dev` or `ol`).

### afterTran.js

It will be called after the translation is completed, and the passed - in parameters are as follows:

* `lang_li`: Language list, with the first language being the source language
* `changed`: Modified files
* `root`: Project root directory

The return value is a dictionary, for example:

```json
{
  file:{
    //  path: txt, for example :
    // "_.json": "[]"
  }
}
```

`file` represents the output file list, `path` represents the file path, and `txt` represents the file content.

## Built - in Functions

The built - in `js` runtime is secondarily developed based on [boa](https://github.com/boa-dev/boa), and the built - in functions are as follows:

* `wPath(path, txt)`: Write to a file
* `rTxt(path)`: Read a text file
* `rBin(path)`: Read a binary file
* `rDir(dirpath)`: Read a directory, and the return value is an array: directory list, file list

## Development Guide

Plug - in development can refer to [https://github.com/i18n - site/addon](https://github.com/i18n-site/addon)