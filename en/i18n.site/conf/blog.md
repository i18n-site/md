# Blog Template

In `i18n/conf.yml`, `use: Blog` indicates that the blog template is used for rendering.

The `markdown` file for a blog post needs to include meta information.

Meta information must be at the beginning of the file, starting with `---` and ending with `---` The format of the configuration information in the middle is `YAML` .

The configuration of a demo file is as follows:

```yml
---

brief: |
  this is a demo brief
  you can write multiline

---

# title

… …
```

`brief` indicates the content summary, which will be displayed on the blog index page.

With the help of `YMAL` ' | `Syntax, you can write multi-line summaries.

The configuration of the directory tree on the right side of the blog is also `TOC` files (see the previous chapter). Only articles listed in `TOC` will appear in the blog homepage index.

Author Information

## Author Information

Author information can be written in the meta information of the article, such as:

```yml
author: marlowe
```

Then edit `author.yml` in the source language directory and add author information, such as :

```yml
marlowe:
  name: Eleanor Marlowe
  title: Senior Translator
  url: https://github.com/i18n-site
```

`name` , `url` and `title` are all optional. If `name` is not set, the key name (here `marlowe` ) will be used as `name` .

See demo project [`begin.md`](https://github.com/i18n-site/demo.i18n.site/blob/main/en/blog/news/begin.md?plain=1) and [`author.yml`](https://github.com/i18n-site/demo.i18n.site/blob/main/en/author.yml)

## Pinned Article

If you need to pin the article to the top, please run `i18n.site` and edit the `xxx.yml` files below `.i18n/data/blog` , and change the timestamp to a negative number (multiple negative numbers will be sorted from largest to smallest).