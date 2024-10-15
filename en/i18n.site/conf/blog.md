# Blog Template

`i18n/conf.yml` configuration file with `use: Blog` indicates that the blog template is being utilized for rendering.

The `markdown` file for a blog post requires the configuration of metadata.

The metadata must be at the beginning of the file, starting with `---` and ending with `---`. The format for the configuration information in between is `YAML`.

An example of a configuration file is as follows:

```yml
---

brief: |
  this is a demo brief
  you can write multiline

---

# title

… …
```

`brief` refers to the content abstract, which will be shown on the blog index page.

With the help of `YMAL` ' | `Syntax, you can write multi-line summaries.

The configuration of the directory tree on the right side of the blog is also a `TOC` file (refer to the previous chapter). Only articles listed in the `TOC` will appear in the blog's homepage index.

Articles without metadata will not appear on the blog homepage, but they can be included in the directory tree on the right.

## Author Information

Author information can be included in the metadata of the article, for example:

```yml
author: marlowe
```

Then, edit the `author.yml` file under the source language directory and add the author's information, for instance:

```yml
marlowe:
  name: Eleanor Marlowe
  title: Senior Translator
  url: https://github.com/i18n-site
```

`name`, `url`, and `title` are all optional parameters. If `name` is not specified, the key name (in this case, `marlowe`) will be used as the `name`.

Refer to the demo project's [`begin.md`](https://github.com/i18n-site/demo.i18n.site/blob/main/en/blog/news/begin.md?plain=1) and [`author.yml`](https://github.com/i18n-site/demo.i18n.site/blob/main/en/author.yml)

## Pinned Article

Should you wish to feature an article at the top, execute `i18n.site` and then edit the `xxx.yml` file located under `.i18n/data/blog`, changing the timestamp to a negative value (with multiple negative timestamps sorted in descending order).