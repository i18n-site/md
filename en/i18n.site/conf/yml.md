# .i18n/conf.yml

The configuration file for `i18n.site` is `.i18n/conf.yml`, with the following content:

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

Among them, the `upload` configuration item under `ext:` indicates that only `.md` files will be uploaded during publication.

## Top Navigation: nav

`nav:` configuration options correspond to the top navigation menu on the homepage.

<img src="//p.3ti.site/1721051426.avif" style="width:320px">

Among them, the `i18n: home` key aligns with the `home: Home` entry in the `en/i18n.yml` file (with `en` denoting the source language for the project's translations).

The content of `en/i18n.yml` represents the text displayed in the navigation menu, which will be translated in accordance with the `fromTo` configuration, such as translating to `zh/i18n.yml`.

<img src="//p.3ti.site/1721051689.avif" style="width:320px">

After the translation is complete, you may alter the `yml` value for translations, but refrain from adding or removing keys from the translation `yml`.

### `use: Toc` indicates a single-file template with an outline

In the `nav` configuration:

```
  - i18n: home
    use: Toc
    url: /
```

`use: Toc` signifies using the `Toc` template for rendering, which is for rendering a single `Markdown` file.

`TOC` is an abbreviation for `Table of Contents`; this template will display the outline of the `Markdown` file in the sidebar when rendered.

`url:` represents the `Markdown` file path (where `/` corresponds to the root directory `/README.md`, and the file name should have an uppercase prefix and a lowercase suffix).

### `use: Md` indicates a single-file template without an outline

The `Md` template is similar to the `Toc` template, both used for rendering a single `Markdown` file, but the `Md` template does not display the outline in the sidebar.

You can change the `use: Toc` in the configuration above to `use: Md`, then run `i18n.site` again in the `md` directory and visit the development preview URL to observe the changes on the homepage.

### `use: Blog` refers to the blog template

The blog template displays a list of articles (titles and summaries) in the order of their publication date.

[→ Click here to learn about specific configurations](/i18n.site/conf/blog)

### `use: Doc` indicates a multi-file document template

In the configuration file:

```
  - i18n: doc
    menu: NB demo1,demo2
    use: Doc
```

It indicates using `Doc` for template rendering.

The `Doc` template supports integrating multiple `Markdown` files to generate a single or multiple project document outlines.

#### Multiple Projects and Multiple Files

The `i18n:doc` configuration in `.i18n/conf.yml` is for the multi-project multi-file rendering mode.

Here, `menu: NB demo1,demo2` means rendering the drop-down menu using the `NB` template.

<img src="//p.3ti.site/1721275191.avif" width="320px">

`NB` is an abbreviation for `Name Brief`, indicating that the drop-down menu can display the project's name and slogan.

`NB` is followed by the parameters `demo1,demo2`.

Note: **Do not leave spaces** before and after the comma `,` in `demo1,demo2`.

For the above parameters, the corresponding directory index file is:

* `en/demo1/TOC`
* `en/demo2/TOC`

#### Single Project Multiple Files

If you have only one project, you can configure it as follows.

```
  - i18n: xxx
    use: Doc
```

##### When url Is Empty, It Defaults to the Value of i18n

If `url` is not written, `url` defaults to the value of `i18n` This rule also takes effect for other templates.

The above syntax is equivalent to having `url: xxx`, with the corresponding file being `en/xxx/TOC`.

#### TOC Directory Index

`i18n.site` will execute the `js` plugin `.i18n/hook/after.tran/TOC.js` in the demo repository to read the `TOC` directory index file corresponding to the `doc` template configuration and generate the `json` for the directory outline.

If you use the `doc` template, this plugin is essential.

If you initialize the `i18n.site` project from an empty directory, remember to copy the `.i18n` folder from the demo project to your directory.

The `Doc` template will render the directory outline based on the generated `json`.

##### Content Details

The content of `en/blog/TOC` is as follows:

```
README.md

news/README.md
  news/begin.md
```

##### Use indentation to represent hierarchy levels

The first line of `en/blog/TOC`, `README.md`, corresponds to `i18n.site` in the image below, which is the project name.

The following two lines are as shown in the screenshot below.

<img src="https://p.3ti.site/1721097381.avif" style="width:320px">

`news/README.md` corresponds to `News`
`news/begin.md` corresponds to `Our Product is Online!`

`TOC` files utilize indentation to represent the hierarchical structure of the outline, supporting multiple levels of indentation, with lines starting with `# ` serving as comments.

##### In multi-level indentation, only the title is written for the parent level, not the content, to avoid layout issues

In cases of multiple levels of indentation, only the title should be written at the parent level, not the content. Failure to do so may result in disarray in the layout.

##### Project README.md

Content may be included within the project's `README.md`, for instance, in `en/demo2/README.md`.

Project Slogan

###### Project Slogan

As can be observed, beneath the dropdown menu and the catalog outline project name `Deme Two`, there is its project tagline: `Your Project slogan`.

![](https://p.3ti.site/1721276842.avif)

This corresponds to the first line of `en/demo2/README.md`:

```
# Demo Two : Your Project slogan
```

The content following the first colon `:` of the first-level title in the project's `README.md` is considered the project slogan.

How to Batch Move `TOC`?

##### How to Move TOC in Bulk?

`TOC` files must be placed within the directory of the source language.

For example, if the source language is Chinese, the `TOC` would be located at `zh/blog/TOC`.

Should the source language be altered, it will be necessary to batch relocate the `TOC` files of one language within the project to another language.

You may refer to the following commands:

```
rsync -av --remove-source-files --include='*/' \
--include='TOC' --exclude='*' en/ zh/
```

Please replace `en/` and `zh/` in the command above with your respective language codes.

### Default Loading Without Configuration Path

For a specific path accessed, if the path prefix is not configured under `nav:`, the corresponding `Markdown` file will be loaded by default and rendered using the `Md` template.

For instance, if `/test` is accessed and the `nav:` configuration does not include this path prefix, and the current browsing language is English (code `en`), the default would be to load `/en/test.md` and render it using the `Md` template.

If `/en/test.md` does not exist, the default `404` page will be displayed.

<img src="//p.3ti.site/1721184299.avif" style="width:360px">