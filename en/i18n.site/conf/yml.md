# .i18n/conf.yml

`i18n.site` The configuration file is `.i18n/conf.yml` .

Except for `ignore:` and `i18n:` settings of [`i18`](/i18) , the configuration file is as follows:

```yaml
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
    use: Doc
```

Among them, the `ext:` configuration item of `upload` means that only `.md` will be uploaded when publishing.

## Top Navigation nav

`nav:` configuration options, corresponding to the navigation menu at the top of the home page.

<img src="//p.3ti.site/1721051426.avif" style="width:320px">

Among them, `i18n: home` corresponds to `en/i18n.yml`中`home: Home` .

`en/i18n.yml` will be translated into multiple languages, such as `zh/i18n.yml` .

<img src="//p.3ti.site/1721051689.avif" style="width:320px">

After the translation is completed, you can modify the value of `yml` in the translation, but do not add or delete the key of translation `yml` .

### `use: Toc` , Single File Template (With Outline)

`nav` Configuring :

```
  - i18n: home
    use: Toc
    url: /
```

`use: Toc` means using `Toc` rendering, which is rendering a single `Markdown` template.

`TOC` is the abbreviation of `Table of Contents` . When this template is rendered, the outline of this `Markdown` file will be displayed in the sidebar.

`url:` represents the file path of `Markdown` ( `/` corresponds to the root directory `/README.md` , this file name requires an uppercase prefix and a lowercase suffix).

### `use: Md` , Single File Template (No Outline)

`Md` Template is the same as `Toc` , both are used to render a single `Markdown` file. However `Md` the template does not show the outline in the sidebar.

You can modify `use: Toc` in the above configuration to `use: Md` , run `i18n.site` in the `md` directory again, and then visit the development preview URL to observe the changes on the homepage.

### Default Loading Without Configuration Path

If the path prefix of a certain path being accessed is not configured in `nav:` the `MarkDown` file corresponding to the path will be loaded by default and rendered using `Md` template.

For example, if you visit `/test` , and `nav:` is configured without this path, and the page language is English (code `en` ), the template will be loaded `/en/test.md` and rendered using `Md` by default.

If `/en/test.md` this file does not exist, the default `404` page will be displayed.

<img src="https://p.3ti.site/1721184299.avif" style="width:360px">

### `use: Doc` , Multi-File Template

In the configuration file:

```
  - i18n: blog
    use: Doc
```

Indicates using `Doc` for template rendering.

`Doc` Template supports integrating multiple `MarkDown` to generate document outlines for single or multiple projects.

#### Single Project (Multiple Files)

`blog` in the above is the single-project mode of `Doc` .

```
  - i18n: blog
    url: blog
    use: Doc
```

##### When url Is Empty, It Defaults to the Value of i18n

If you do not write `url` , `url` to the value of `i18n` . This rule also takes effect for other templates.

The above writing method is equivalent to having `url: blog` and its corresponding file is `en/blog/TOC` .

#### Multiple Projects

`.i18n/conf.yml` The configuration in `i18n:doc` is multi-project mode.

```
  - i18n: doc
    menu: NB demo1,demo2
    use: Doc
```

<img src="https://p.3ti.site/1721275191.avif" width="320px">

Here, `menu: NB demo1,demo2` means using `NB` to render the drop-down menu.

`NB` , is the abbreviation of `Name Breif` , indicating that the drop-down menu can display the name and slogan of the project.

`NB` is followed by the parameter `demo1,demo2` passed to it.
Note that there should be no spaces ** before and after the comma `,` in : ** `demo1,demo2`

For the above parameters, the corresponding directory index file is:

* `en/demo1/TOC`
* `en/demo2/TOC`

#### TOC Table of Contents Index

`i18n.site` Will execute the `js` plugin `.i18n/hook/after.tran/TOC.js` in the demo warehouse to read the directory index file `doc` corresponding to the template configuration `TOC` to generate `json` of the directory outline.

If you use `doc` template, you must have this plug-in.

If you initialize the `i18n.site` project from an empty folder, remember to copy `.i18n` in the demo project to your directory.

`Doc` The template will render the table of contents outline based on the generated `json` .

##### Detailed Content Explanation

`en/blog/TOC` The content is as follows :

```
README.md

news/README.md
  news/begin.md
```

##### Use Indentation to Indicate Levels

Above `en/blog/TOC` `README.md` in the first line corresponds to `i18n.site` in the picture below, which is the project name.

The next two lines are as shown in the screenshot below.

<img src="https://p.3ti.site/1721097381.avif" style="width:320px">

`news/README.md` corresponds to `News` ,
`news/begin.md` corresponds to `Our Product is Online !`

`TOC` The file is indented to indicate the hierarchical relationship of the outline and supports multi-level indentation.

##### The Parent Level Only Writes the Title, Not the Content.

When there are multiple levels of indentation, the parent level only writes the title and not the content. Otherwise, typography will be messed up.

##### Project README.md 

`README.md` of the project, for example, you can write content in `en/demo2/README.md` .

Note that the content of this file does not show a table of contents outline, so it is recommended to limit the length and write a short introduction.

###### Project Slogan

As you can see, `Deme Two` Below the drop-down menu and catalog outline project name, there is its project slogan : `Your Project slogan` .

<img alt="" src="https://p.3ti.site/1721276842.avif">

: corresponds to the first line `en/demo2/README.md`

```
# Demo Two : Your Project slogan
```

Project `README.md` The content after the first colon `:` in the first-level title will be regarded as the project slogan.

Users from China, Japan and Korea, please note that you must use half-width colon `:` instead of full-width colon.

##### How to Move TOC in Bulk?

`TOC` The file needs to be placed in the directory of the source language.

For example, if the source language is Chinese, then `TOC` above is `zh/blog/TOC` .

If the source language is modified, you need to batch move `TOC` in a certain language in the project to another language.

You can refer to the following commands:

```
rsync -av --remove-source-files --include='*/' \
--include='TOC' --exclude='*' en/ zh/
```

Please modify `en/` and `zh/` in the above command to your language code.


