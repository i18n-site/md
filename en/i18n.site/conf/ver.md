# Project Version

Take the demo project as an example:

In `en/demo2/v` lies the current version number of the project, which will be shown on the right side of the project name in the sidebar outline.

<img src="https://p.3ti.site/1721290486.avif" width="320px">

Here, `en/` is the language code corresponding to the source language for translation configured in `.i18n/conf.yml`.

If your source language is not English, then the `v` file should be placed in the project directory of your source language.

The function of browsing historical versions of documents is under development.

It is advisable to modify the version number of the document only when major updates are released (such as `v1`, `v2`), so as to avoid having too many version numbers and causing the pages indexed by search engines to be in a mess.

## Use Empty `v` Files to Split File Indexes of Different Projects

In the demo project, apart from `en/demo2/v`, you can also find that there are empty `v` files in the `en/blog` and `en/demo1` directories.

An empty `v` will not be displayed in the sidebar outline, but as long as there is a `v` file, an independent index will be generated for the files in this directory and its sub - directories.

By splitting the indexes of different projects, the slow access caused by loading the indexes of all files on the whole site at once can be avoided.

For example, the index file corresponding to `blog` in the demo project is: [https://unpkg.com/i18n.site/en/blog.json](https://unpkg.com/i18n.site/en/blog.json)