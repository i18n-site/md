# .i18n/conf.yml

`i18n.site`的配置文件是`.i18n/conf.yml`，内容如下:

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

其中，`upload`的`ext:`配置项，表示发布时只上传`.md`。

## 顶部导航 nav

`nav:`的配置选项，对应首页顶部的导航菜单。

<img src="//p.3ti.site/1721051426.avif" style="width:320px">

其中，`i18n: home`对应着`en/i18n.yml`中`home: Home` (这里`en`是项目翻译的源语言)。

`en/i18n.yml` 内容是导航菜单中显示的文本，会根据配置中的`fromTo`翻译，比如翻译到`zh/i18n.yml`。

<img src="//p.3ti.site/1721051689.avif" style="width:320px">

翻译完成后，可以修改译文的`yml`的值，但不要增删译文`yml`的键。

### `use: Toc`, 有大纲的单文件模板

`nav`配置中:

```
  - i18n: home
    use: Toc
    url: /
```

`use: Toc`表示使用`Toc`模板渲染，这是渲染单个`Markdown`模板。

`TOC`是`Table of Contents`的缩写，此模板渲染时会在侧栏显示此`Markdown`文件的大纲。

`url:`表示`Markdown`的文件路径（`/`对应的是根目录`/README.md`，此文件名需前缀大写、后缀小写）。

### `use: Md`, 无大纲的单文件模板

`Md`模板和`Toc`模板相同，都用于渲染单个`Markdown`文件。但是`Md`模板不会在侧栏显示大纲。

你可以修改上面配置中的`use: Toc`为`use: Md`，再次在`md`目录下运行`i18n.site`，然后访问开发预览的网址，观察首页的变化。

### `use: Blog` 博客模板

博客模板会按发布时间的顺序显示文章列表(标题和摘要)。

[→ 点此了解具体配置](/i18n.site/conf/blog)

### `use: Doc`, 多文件文档模板

配置文件中:

```
  - i18n: doc
    menu: NB demo1,demo2
    use: Doc
```

表示使用`Doc`进行模板渲染。

`Doc`模板支持集成多个`MarkDown`来生成单个或多个项目的文档大纲。

#### 多项目多文件

`.i18n/conf.yml`中`i18n:doc`的配置是多项目多文件渲染模式。

这里，`menu: NB demo1,demo2`，表示用`NB`模板渲染下拉菜单。

<img src="//p.3ti.site/1721275191.avif" width="320px">

`NB`,是`Name Breif`的缩写，表示下拉菜单可以显示项目的名称和标语。

`NB`后面是传给它的参数`demo1,demo2`。

注意: ** `demo1,demo2`中的逗号`,`前后不要有空格**。

以上参数，对应的目录索引文件是:

* `en/demo1/TOC`
* `en/demo2/TOC`

#### 单项目多文件

如果你只有一个项目，那么可以配置如下。

```
  - i18n: xxx
    use: Doc
```

##### url 为空时，默认等于 i18n 的值

若不写`url`，`url`默认为`i18n`的值，此规则对于其他模板同样生效。

上面写法等价于有`url: xxx`，其对应的文件是`en/xxx/TOC`。

#### TOC 目录索引

`i18n.site`会执行演示仓库中`js`插件`.i18n/hook/after.tran/TOC.js`来读取`doc`模板配置对应`TOC`目录索引文件，来生成目录大纲的`json`。

如果用`doc`模板，必须要有此插件。

如果你是从空文件夹初始化`i18n.site`项目，记得复制演示项目中的`.i18n`到您的目录下。

`Doc`模板会基于生成的`json`来渲染目录大纲。

##### 内容详解

`en/blog/TOC`内容如下:

```
README.md

news/README.md
  news/begin.md
```

##### 用缩进表示层级

上面`en/blog/TOC`第一行的`README.md`对应的是下图中的`i18n.site`，也就是项目名称。

后续的两行，如下面截图所示。

<img src="https://p.3ti.site/1721097381.avif" style="width:320px">

`news/README.md`对应的是`News`，
`news/begin.md`对应的是`Our Product is Online !`

`TOC`文件通过缩进，表示大纲层级关系，支持多层缩进, 以`#`开头的行为注释。

##### 父层级只写标题，不写内容

有多层缩进的情况下，父层级只写标题，不写内容。否则会导致排版错乱。

##### 项目 README.md

项目的`README.md`，比如`en/demo2/README.md`中可以写内容。

注意，此文件的内容不显示目录大纲，所以建议控制篇幅，写一些简短的介绍即可。

###### 项目标语

可以看到，`Deme Two`在下拉菜单和目录大纲项目名的下方，有它的项目标语:`Your Project slogan`。

![](https://p.3ti.site/1721276842.avif)

这对应的是`en/demo2/README.md`第一行:

```
# Demo Two : Your Project slogan
```

项目`README.md`一级标题首个冒号`:`后面的内容，会被视为项目标语。

中日韩用户请注意，要用半角冒号`:`而不是全角冒号。

##### 如何批量移动 TOC ？

`TOC`文件需要放在源语言的目录下。

比如，源语言是中文，那么上面`TOC`就是`zh/blog/TOC`。

如果修改了源语言，就需要批量移动项目中的某语种的`TOC`文件到另一语种。

可以参考如下命令：

```
rsync -av --remove-source-files --include='*/' \
--include='TOC' --exclude='*' en/ zh/
```

请修改上面命令中的`en/`和`zh/`为您的语种代码。

### 无配置路径的默认加载

访问的某个路径，如果路径前缀没有在`nav:`中配置，则默认加载路径对应的`MarkDown`文件，并用`Md`模板渲染。

比如，访问`/test`， 同时`nav:`配置未此路径的前缀，当前浏览语言是英文（代码`en`），则默认会加载`/en/test.md`，并使用`Md`模板渲染。

如果`/en/test.md`此文件不存在，则会显示默认的`404`页面。

<img src="//p.3ti.site/1721184299.avif" style="width:360px">
