# Plug-In

You can configure plugins in `.i18n/conf.yml`, such as:

```yml
addon:
  - i18n.addon/toc
```

## Official Plugins

* `i18n.addon/toc`: Table of Contents
  Generates a `json` table of contents based on `TOC`, enabled by default

* `i18n.addon/mouse`: Mouse Effects

## File Naming Convention

All plugins are `npm` packages.

The package corresponding to `i18n.addon/toc` above is [https://www.npmjs.com/package/@i18n.addon/toc](https://www.npmjs.com/package/@i18n.addon/toc).

The plugin uses the latest version by default and checks for updates weekly.

If you want to fix the version, you can write `i18n.addon/toc@0.1.3`.

The translation command `i18n.site` will install the plugin package's convention file and then execute it.

The agreed file names are as follows:

### htmIndex.js

`htmIndex.js` will be injected at the end of `.i18n/htm/index.js`.

The `__CONF__` placeholder will be replaced with the name of the current configuration (e.g., `dev` or `ol`).

### afterTran.js

It will be called after the translation is completed, and the parameters passed in are as follows:

* `lang_li`: List of languages, with the first language being the source language
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

`file`: List of output files, `path`: File path, `txt`: File content.

## Built-in Functions

The built-in `js` runtime is based on [boa](https://github.com/boa-dev/boa) and includes the following functions:

* `wPath(path, txt)`: Write to file
* `rTxt(path)`: Read text file
* `rBin(path)`: Read binary file
* `rDir(dirpath)`: Read directory, returns an array: list of directories, list of files

## Development Guide

For plugin development, refer to [https://github.com/i18n-site/addon](https://github.com/i18n-site/addon)