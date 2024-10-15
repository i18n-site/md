# Project Version

Take the demo project as an example:

`en/demo2/v` represents the current version number of the project, and it will be displayed on the right side of the project name within the sidebar outline.

<img src="https://p.3ti.site/1721290486.avif" width="320px">

Here, `en/` represents the language code corresponding to the source language translation as configured in `.i18n/conf.yml`.

If your source language is not English, the `v` file should be placed within the directory of your source language project.

The feature to browse document history versions is currently being developed.

It is recommended to update the document version number only for major releases (such as `v1`, `v2`) to prevent an excessive number of versions from causing disarray in search engine indexing.

## Use empty `v` files to separate the file indexes of different projects

In the demo project, aside from `en/demo2/v`, you will also find empty `v` files in the `en/blog` and `en/demo1` directories.

Empty `v` files will not be displayed in the sidebar outline, but the presence of a `v` file will generate a separate index for the files in that directory and its subdirectories.

By separating the indexes of different projects, this prevents the slow loading of indexes for all files on the entire site at once.

For example, the index file for the `blog` section in the demo project is: [https://unpkg.com/i18n.site/en/blog.json](https://unpkg.com/i18n.site/en/blog.json)