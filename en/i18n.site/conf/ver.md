# Project version

Taking the demo project as an example:

In `en/demo2/v`, it is the current version number of the project, which will be displayed on the right side of the project name in the sidebar outline.

<img src="https://p.3ti.site/1721290486.avif" width="320px">

Here, `en/` is the language code corresponding to the translation source language configured in `.i18n/conf.yml`.

If your source language is not English, then the `v` file should be placed in the project directory of your source language.

The function of browsing historical versions of documents is under development.

It is recommended to only modify the version number of the document when major updates are released (such as `v1`, `v2`), to avoid excessive version numbers causing clutter in the pages indexed by search engines.

## Use empty `v` files to split the file indexes of different projects

In the demo project, in addition to `en/demo2/v`, you can also see that there are empty `v` files in the `en/blog` and `en/demo1` directories.

An empty `v` will not be displayed in the sidebar outline, but as long as there is a `v` file, an independent index will be generated for the files in the directory and subdirectories.

By splitting the indexes of different projects, it is possible to avoid slow access caused by loading the index of all files in the entire site at once.

For example, the index file corresponding to `blog` in the demo project is: [https://unpkg.com/i18n.site/en/blog.json](https://unpkg.com/i18n.site/en/blog.json)