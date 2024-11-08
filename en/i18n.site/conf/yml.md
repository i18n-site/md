# .i18n/conf.yml

The configuration file for `i18n.site` is `.i18n/conf.yml`, and its content is as follows:

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

Among them, the `ext:` configuration item under `upload` indicates that only `.md` files will be uploaded during publication.

## Top Navigation nav

The `nav:` configuration options correspond to the navigation menu at the top of the homepage.

<img src="//p.3ti.site/1721051426.avif" style="width:320px">

Here, `i18n: home` corresponds to `home: Home` in `en/i18n.yml` (where `en` is the source language of the project translation).

The content of `en/i18n.yml` is the text displayed in the navigation menu, which will be translated according to the `fromTo` configuration, for example, translated to `zh/i18n.yml`.

<img src="//p.3ti.site/1721051689.avif" style="width:320px">

After the translation is completed, you can modify the values in the translated `yml` file, but do not add or delete keys in the translated `yml` file.

### `use: Toc` Document Template with Outline

In the `nav` configuration:

```
  - i18n: home
    use: Toc
    url: /
```

`use: Toc` indicates that the `Toc` template will be used for rendering, which is for rendering a single `Markdown` file.

`TOC` is the abbreviation of `Table of Contents` When this template is rendered, the outline of this `Markdown` file will be displayed in the sidebar.

`url:` indicates the file path of the `Markdown` file ( `/` corresponds to the root directory `/README.md`, and the filename should have an uppercase prefix and a lowercase suffix).

### `use: Md` Document Template without Outline

The `Md` template is similar to the `Toc` template and is used for rendering a single `Markdown` file. However, the `Md` template does not display the outline in the sidebar.

You can change `use: Toc` to `use: Md` in the above configuration, run `i18n.site` in the `md` directory again, and then visit the development preview URL to observe the changes on the homepage.

### `use: Blog` Blog Template

The blog template displays a list of articles (titles and summaries) in the order of their publication dates.

[→ Click here to learn more about the specific configuration](/i18n.site/conf/blog)

### `use: Doc` Multi-File Document Template

In the configuration file:

```
  - i18n: doc
    menu: NB demo1,demo2
    use: Doc
```

Indicates that the `Doc` template will be used for rendering.

The `Doc` template supports integrating multiple `Markdown` files to generate a document outline for single or multiple projects.

#### Multiple Projects and Multiple Files

The `i18n:doc` configuration in `.i18n/conf.yml` is for multi-project multi-file rendering mode.

Here, `menu: NB demo1,demo2` indicates that the `NB` template will be used to render the drop-down menu.

<img src="//p.3ti.site/1721275191.avif" width="320px">

`NB` , which is the abbreviation of `Name Breif` , means that the drop-down menu can display the name and slogan of the project.

`NB` is followed by the parameters `demo1,demo2`.

Note: **There should be no spaces before or after the comma `,` in `demo1,demo2`.**

The corresponding directory index files for the above parameters are:

* `en/demo1/TOC`
* `en/demo2/TOC`

#### Single Project with Multiple Files

If you have only one project, you can configure it as follows.

```
  - i18n: doc
    url: flashduty
    use: Doc
```

> [!WARN]
> Single project with multiple files does not support configuring `url` as the root path `/`
> If the root path is not configured in __conf.yml → nav:__, when accessing the homepage of the website, it will automatically redirect to the first URL under the `nav:` configuration.
> This design is intended to better distinguish project documents, blogs, and other content through directories.
> It is recommended to use a single file and single page as the homepage.

> [!TIP]
> If `url` is not written, `url` defaults to the value of `i18n` This rule also takes effect for other templates.

#### TOC Table of Contents Index

If the `use: Doc` template is enabled in the configuration, please enable the `i18n.addon/toc` plugin in `.i18n/conf.yml`. The configuration is as follows:

```yml
addon:
  - i18n.addon/toc
```

`i18n.site` will automatically install and execute this plugin, read the `TOC` directory index file, and generate the directory outline in `json` format.

If it is a single project with multiple files, the root directory `TOC` is the directory corresponding to `url:` in the source language directory. For example, if the source language is Chinese, the file corresponding to `url: flashduty` is `zh/flashduty/TOC`.

If it is multiple projects with multiple files, there is no need to configure `url:`. The root directory of `TOC` is the directory corresponding to the value of `i18n`

##### Detailed Content Explanation

The content of `en/blog/TOC` is as follows:

```
README.md

news/README.md
  news/begin.md
```

##### Indentation is used to indicate levels

The `README.md` in the first line of `en/blog/TOC` above corresponds to `i18n.site` in the image below, which is the project name.

The next two lines are shown in the screenshot below.

<img src="https://p.3ti.site/1721097381.avif" style="width:320px">

`news/README.md` corresponds to `News`,
`news/begin.md` corresponds to `Our Product is Online!`

The `TOC` file uses indentation to indicate the hierarchical relationship of the outline, supporting multiple levels of indentation. Lines starting with `# ` are comments.

##### The Parent Level Only Writes the Title, Not the Content

When there are multiple levels of indentation, the parent level should only write the title and not the content. Otherwise, the layout may become disorganized.

##### Project README.md

The `README.md` file of the project, such as `en/demo2/README.md`, can contain content.

Note that the content of this file does not display a table of contents, so it is recommended to keep it concise and write a brief introduction.

###### Project Slogan

You can see that `Demo Two` has its project slogan below the drop-down menu and the table of contents project name: `Your Project Slogan`.

![](https://p.3ti.site/1721276842.avif)

This corresponds to the first line of `en/demo2/README.md`:

```
# Demo Two : Your Project slogan
```

The content after the first colon `:` in the first-level heading of the project `README.md` will be considered the project slogan.

Users from China, Japan, and Korea, please note that you should use a half-width colon `:` instead of a full-width colon.

##### How to Move TOC in Bulk?

`TOC` files need to be placed in the directory of the source language.

For example, if the source language is Chinese, then the `TOC` file is `zh/blog/TOC`.

If you change the source language, you need to batch move the `TOC` files of a certain language in the project to another language.

You can refer to the following command:

```
rsync -av --remove-source-files --include='*/' \
--include='TOC' --exclude='*' en/ zh/
```

Please modify `en/` and `zh/` in the above command to your language code.

### Default Loading Without Configuration Path

If a certain path is accessed and the path prefix is not configured in `nav:`, the corresponding `Markdown` file will be loaded by default and rendered using the `Md` template.

For example, if you access `/test` and `nav:` is not configured for this path, and the current browsing language is English (code `en`), then `/en/test.md` will be loaded by default and rendered using the `Md` template.

If the file `/en/test.md` does not exist, the default `404` page will be displayed.

<img src="//p.3ti.site/1721184299.avif" style="width:360px">