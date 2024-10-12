# .i18n/conf.yml

The configuration file of `i18n.site` is `.i18n/conf.yml`, and the content is as follows:

```yaml
i18n:
  fromTo:
    en:
upload:
  ext:
    - md
nav:
  - i18n: home
    use: Toc
    url: /
  - i18n: doc
    menu: NB demo1,demo2
    use: Doc
  - i18n: blog
    use: Blog
addon:
  - i18n.addon/toc
```

Among them, the `upload`'s `ext:` configuration item indicates that only `.md` will be uploaded when publishing.

## Top Navigation nav

The `nav:` configuration options correspond to the navigation menu at the top of the homepage.

<img src="//p.3ti.site/1721051426.avif" style="width:320px">

Among them, `i18n: home` corresponds to `home: Home` in `en/i18n.yml` (where `en` is the source language for the project translation).

The content of `en/i18n.yml` is the text displayed in the navigation menu, which will be translated according to `fromTo` in the configuration, for example, translated to `zh/i18n.yml`.

<img src="//p.3ti.site/1721051689.avif" style="width:320px">

After the translation is completed, you can modify the value of the translated `yml`, but do not add or delete the key of the translated `yml`.

### `use: Toc`, A single-file template with an outline

In `nav`:

```
  - i18n: home
    use: Toc
    url: /
```

`use: Toc` means using the `Toc` template for rendering, which is to render a single `Markdown` template.

`TOC` is the abbreviation of `Table of Contents`. When this template is rendered, the outline of this `Markdown` file will be displayed in the sidebar.

`url:` represents the file path of `Markdown` ( `/` corresponds to the root directory `/README.md`, and this file name requires an uppercase prefix and a lowercase suffix).

### `use: Md`, A single-file template without an outline

The `Md` template and the `Toc` template are the same and both are used to render a single `Markdown` file. But the `Md` template does not show the outline in the sidebar.

You can modify `use: Toc` in the above configuration to `use: Md`, run `i18n.site` again in the `md` directory, and then visit the development preview URL to observe the changes on the homepage.

### `use: Blog` Blog Template

The blog template will display a list of articles (titles and abstracts) in the order of publication time.

[→ Click here for detailed configuration](/i18n.site/conf/blog)

### `use: Doc`, Multi-file Document Template

In the configuration file:

```
  - i18n: doc
    menu: NB demo1,demo2
    use: Doc
```

Indicates using the `Doc` template for rendering.

The `Doc` template supports integrating multiple `MarkDown` to generate document outlines for single or multiple projects.

#### Multiple projects and multiple files

The configuration of `i18n:doc` in `.i18n/conf.yml` is the multi-project multi-file rendering mode.

Here, `menu: NB demo1,demo2`, means using the `NB` template to render the dropdown menu.

<img src="//p.3ti.site/1721275191.avif" width="320px">

`NB`, which is the abbreviation of `Name Breif`, means that the dropdown menu can display the name and slogan of the project.

`NB` is followed by the parameter `demo1,demo2` passed to it.

Note: ** There should be no spaces ** before and after the comma `,` in `demo1,demo2`.

For the above parameters, the corresponding directory index file is:

* `en/demo1/TOC`
* `en/demo2/TOC`

#### Single project and multiple files

If you have only one project, then it can be configured as follows.

```
  - i18n: xxx
    use: Doc
```

##### When the URL is empty, it defaults to the i18n value

If `url` is not written, `url` defaults to the value of `i18n`. This rule also applies to other templates.

The above writing is equivalent to having `url: xxx`, and its corresponding file is `en/xxx/TOC`.

#### TOC Table of Contents Index

`i18n.site` will execute the `js` plugin `.i18n/hook/after.tran/TOC.js` in the demo warehouse to read the `TOC` directory index file corresponding to the `doc` template configuration to generate the `json` directory outline.

If you use the `doc` template, you must have this plugin.

If you initialize the `i18n.site` project from an empty folder, remember to copy the `.i18n` of the demo project to your directory.

The `Doc` template will render the table of contents outline based on the generated `json`.

##### Detailed Content Explanation

The content of `en/blog/TOC` is as follows:

```
README.md

news/README.md
  news/begin.md
```

##### Use indentation to indicate levels

The `README.md` in the first row of `en/blog/TOC` above corresponds to `i18n.site` in the figure below, which is the project name.

The next two lines are as shown in the screenshot below.

<img src="https://p.3ti.site/1721097381.avif" style="width:320px">

`news/README.md` corresponds to `News`,
`news/begin.md` corresponds to `Our Product is Online!`

The `TOC` files are indented to indicate the hierarchical relationship of the outline, support multiple levels of indentation, and lines starting with `#` are comments.

##### The parent level only writes the title and not the content

When there are multiple levels of indentation, the parent level only writes the title and not the content. Otherwise, typesetting will be messed up.

##### Project README.md

Content can be written in the item `README.md`, such as `en/demo2/README.md`.

Note that the content of this file does not display a table of contents outline, so it is recommended to control the length and just write some brief introductions.

###### Project Slogan

It can be seen that `Deme Two` has its project slogan below the drop-down menu and the project name in the table of contents outline: `Your Project slogan`.

![](https://p.3ti.site/1721276842.avif)

This corresponds to the first line of `en/demo2/README.md`:

```
# Demo Two : Your Project slogan
```

The content after the first colon `:` of the first-level title of the project `README.md` will be regarded as the project slogan.

Users from China, Japan, and Korea, please note that the half-width colon `:` should be used instead of the full-width colon.

##### How to batch move the TOC?

The `TOC` file needs to be placed in the directory of the source language.

For example, if the source language is Chinese, then the above `TOC` is `zh/blog/TOC`.

If the source language is modified, it is necessary to batch move the `TOC` file of a certain language in the project to another language.

You can refer to the following commands:

```
rsync -av --remove-source-files --include='*/' \
--include='TOC' --exclude='*' en/ zh/
```

Please modify `en/` and `zh/` in the above command to your language code.

### Default Loading Without Configuration Path

For a certain accessed path, if the path prefix is not configured in `nav:`, the `MarkDown` file corresponding to the path will be loaded by default and rendered using the `Md` template.

For example, when accessing `/test`, and `nav:` is not configured with the prefix of this path, and the current browsing language is English (code `en`), `/en/test.md` will be loaded by default and rendered using the `Md` template.

If `/en/test.md` this file does not exist, the default `404` page will be displayed.

<img src="//p.3ti.site/1721184299.avif" style="width:360px">