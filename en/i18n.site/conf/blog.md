# Blog Template

In `i18n/conf.yml`, `use: Blog` indicates that the blog template is used for rendering.

The `markdown` file of a blog post needs to be configured with meta - information.

Meta - information must be at the start of the file, beginning with `---` and ending with `---`. The format of the configuration information in between is `YAML`.

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

`brief` represents the content summary and will be shown on the blog index page.

With the help of `YMAL` '|`Syntax, multi - line summaries can be written.

The configuration of the directory tree on the right side of the blog is also the `TOC` file (see the previous chapter). Only articles listed in the `TOC` will appear in the blog homepage index.

Articles without meta - information will not be shown on the blog homepage but can be present in the right - side directory tree.

If you need to pin an article to the top, please run `i18n.site` and then edit the `xxx.yml` file under `.i18n/data/blog`, and change the timestamp to a negative number (multiple negative numbers will be sorted in ascending order of their absolute values).