# Project Version

Taking the demo project as an example:

`en/demo2/v` contains the current version number of the project, which will be displayed to the right of the project name in the sidebar outline.

<img src="https://p.3ti.site/1721290486.avif" width="320px">

Here, `en/` is the language code corresponding to the source language configured in `.i18n/conf.yml`.

If your source language is not English, the `v` file should be placed in the project directory of your source language.

The feature to browse historical versions of documents is under development.

It is recommended to update the document version number only when major updates are released (e.g., `v1`, `v2`) to avoid cluttering search engine indexes with too many version numbers.

## Use Empty `v` Files to Split File Indexes of Different Projects

In the demo project, in addition to `en/demo2/v`, you can also see empty `v` files in the `en/blog` and `en/demo1` directories.

An empty `v` will not be displayed in the sidebar outline, but as long as there is a `v` file, an independent index will be generated for the files in the directory and subdirectories.

By splitting the indexes of different projects, you can prevent slow access caused by loading the index of all files on the entire site at once.

For example, the index file corresponding to `blog` in the demo project is: [https://unpkg.com/i18n.site/en/blog.json](https://unpkg.com/i18n.site/en/blog.json)