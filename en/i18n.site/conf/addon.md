# Plug-In

Configuration for plugins can be set in `.i18n/conf.yml`, for example:

```yml
addon:
  - i18n.addon/toc
```

## Official Plugins

* `i18n.addon/toc`: Table of contents
  The `json` for the table of contents is generated based on `TOC` and is enabled by default

* `i18n.addon/mouse`: Mouse Effects

## File Naming Convention

Plugins are all `npm` packages.

The package corresponding to `i18n.addon/toc` above is [https://www.npmjs.com/package/@i18n.addon/toc](https://www.npmjs.com/package/@i18n.addon/toc).

Plugins use the latest version by default and check for updates weekly.

If a specific version needs to be locked, you can specify it as `i18n.addon/toc@0.1.3`.

The `i18n.site` translation command will install the plugin package's conventional files and then execute them.

The conventional file names are as follows:

### htmIndex.js

`htmIndex.js` will be injected at the end of `.i18n/htm/index.js`.

`__CONF__` will be replaced with the name of the current configuration (e.g., `dev` or `ol`).

### afterTran.js

It will be invoked after translation is complete, with the following parameters passed in.

* `lang_li`: List of languages, with the first language being the source language
* `changed`: List of modified files
* `root`: The root directory of the project

The return value is a dictionary, for instance:

```json
{
  file:{
    //  path: txt, for example :
    // "_.json": "[]"
  }
}
```

`file` refers to the output file list, `path` is the file path, and `txt` is the content of the file.

## Built-in Functions

The built-in `js` runtime is based on secondary development of [boa](https://github.com/boa-dev/boa) , and the built-in functions are as follows :

* `wPath(path, txt)`: Writes to a file
* `rTxt(path)`: Reads a text file
* `rBin(path)`: Reads a binary file
* `rDir(dirpath)`: Read a directory, returning an array: directory list, file list

## Development Guidelines

Plugin development can refer to [https://github.com/i18n-site/addon](https://github.com/i18n-site/addon)