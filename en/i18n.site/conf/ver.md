# Project Version

Take the demo project as an example:

`en/demo2/v` is the current version number of the project, which will be displayed to the right of the project name in the sidebar outline.

<img src="https://p.3ti.site/1721290486.avif" width="320px">

Here `en/` is the language code corresponding to the `.i18n/conf.yml` translation source language.

If your source language is not English, then the `v` file should be placed in the project directory of your source language. 

The ability to browse historical versions of documents is under development.

It is recommended to only modify the version number of the document when releasing major updates (such as `v1` , `v2` ) to avoid cluttering the pages indexed by search engines due to too many version numbers.

## Use Empty `v` Files to Split File Indexes for Different Projects

In the demo project, in addition to `en/demo2/v` , you can also see that the contents of `en/blog` and `en/demo1` directories are empty `v` files.

Empty `v` will not be displayed in the sidebar outline, but as long as the `v` file exists, an independent index will be generated for the files in the directory and subdirectories.

By splitting the indexes of different projects, you can avoid slow access caused by loading the index of all files in the entire site at once.

For example, in the demo project `blog` the corresponding index file is : [https://unpkg.com/i18n.site/en/blog.json](https://unpkg.com/i18n.site/en/blog.json)

