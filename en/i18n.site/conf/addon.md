# Plugin

Plugins can be configured in `.i18n/conf.yml`, such as:

```yml
addon:
  - i18n.addon/toc
```

## Official Plugin

* `i18n.addon/toc` : The directory index
  Generate the `json` directory index based on `TOC`, and it is enabled by default

* `i18n.addon/mouse` : Mouse effects

## File Name Convention

Plugins are all `npm` packages.

The package corresponding to `i18n.addon/toc` above is [https://www.npmjs.com/package/@i18n.addon/toc](https://www.npmjs.com/package/@i18n.addon/toc).

The plugin uses the latest version by default and checks for updates weekly.

If you want to fix the version, you can write `i18n.addon/toc@0.1.3`.

The translation command line `i18n.site` will install the convention file of the plug-in package and then execute.

The agreed file names are as follows

### htmIndex.js

`htmIndex.js` will be injected to the end of `.i18n/htm/index.js`.

Where `__CONF__` will be replaced with the name of the current configuration (such as `dev` or `ol`).

### afterTran.js

It will be called after the translation is completed, and the parameters passed in are as follows.

* `lang_li` : The language list, and the first language is the source language
* `changed` : The modified files
* `root` : The project root directory

The return value is a dictionary, such as

```json
{
  file:{
    //  path: txt, for example :
    // "_.json": "[]"
  }
}
```

`file` is the output file list, `path` is the file path, and `txt` is the file content.

## Built-in Functions

The built-in `js` runtime is based on the secondary development of [boa](https://github.com/boa-dev/boa), and the built-in functions are as follows:

* `wPath(path, txt)` : Write to the file
* `rTxt(path)` : Read the text file
* `rBin(path)` : Read the binary file
* `rDir(dirpath)` : Read the directory, and the return value is an array: the list of directories, the list of files

## Development Guide

For plug-in development, you can refer to [https://github.com/i18n-site/addon](https://github.com/i18n-site/addon)