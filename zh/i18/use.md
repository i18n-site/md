# 安装使用

## windows 先安装 git bash

windows 系统，请先 [点此下载并安装`git bash`](https://git-scm.com/download/win)。

在`git bash`中运行后续操作。

## 安装

```sh
bash <(curl -sS https://i.i18n.site) i18
```

### 配置翻译令牌

访问 [i18n.site/token](//i18n.site/token) 点击复制令牌

<img src="https://p.3ti.site/1719911689.avif" style="width:400px">

创建`~/.config/i18n.site.yml`, 把复制内容的粘贴进去，内容如 ：

```
token: YOUR_API_TOKEN
```

此外，还需在 [i18n.site/payBill](//i18n.site/payBill) 绑定付款信用卡（无需充值，网站会按用量自动扣费，[定价见首页](/#price)）。

## 使用

### 演示项目

请参考演示项目 [github.com/i18n-site/demo.i18](//github.com/i18n-site/demo.i18) 来学习`i18`翻译的配置。

中国区用户可以克隆 [atomgit.com/i18n/demo.i18](//atomgit.com/i18n/demo.i18)

克隆后进入目录，运行`i18`即可完成翻译。

### 目录结构

模板仓库目录结构如下

```
┌── .i18n
│  └── conf.yml
└── en
   ├── _IgnoreDemoFile.md
   ├── i18n.yml
   └── README.md
```

`en`目录下是翻译的演示文件，只是一个示例，可以都删除。

### 运行翻译

进入目录，运行`i18`即可翻译。

程序除了译文还会生成`.i18n/data`文件夹，请添加它到版本库中。

翻译新的文件后，此目录下会生成新的数据文件，记得`git add . `追加。

## 配置文件

`.i18n/conf.yml`就是`i18`命令行翻译工具的配置文件

内容如下：

```
i18n:
  fromTo:
    en: zh ja ko de fr
    # en:

ignore:
  - _*
```

### 源语言 & 译文语言

配置文件中，`fromTo`的下级：

`en`是源语言，`zh ja ko de fr`是翻译的目标语言。

语言代码见 [i18n.site/i18/LANG_CODE](https://i18n.site/i18/LANG_CODE)。

比如，想把中文翻译为英文，改写此行`zh: en`。

如果想翻译为所有支持的语种，请在`:`后面留空。比如

```
i18n:
  fromTo:
    en:
```

可以为不同的子目录/文件配置不同的`fromTo`, 一个演示的写法如下:

```
i18n:
  fromTo:
    en:
  path:
    blog:
      fromTo:
        zh:
    blog/your_file_name.md:
      fromTo:
        ja:
```

此配置表中,`blog`目录翻译的源语言是`zh`，`blog/your_file_name.md`翻译的源语言是`ja`。

### 图片/链接的多语言

在`.i18n/conf.yml`中配置`replace:`，`MarkDown`中图片、链接(以及内嵌`HTML`的`src`和`href`属性)中的网址以此为前缀时，会替换网址中源语言的代码为译文的语言代码([语言代码一览](/i18/LANG_CODE))。

比如，您的配置如下:

```yml
i18n:
  fromTo:
    fr: ko de en zh zh-TW uk ru ja
  replace:
    https://fcdoc.github.io/img/ : ko de uk>ru zh-TW>zh >en
```

`replace: `是一个字典，键是待替换的网址前缀，值是替换规则。

上面替换规则 `ko de uk>ru zh-TW>zh >en` 的含义是，`ko de`使用它们自己语言代码的配图，`zh-TW`和`zh`使用`zh`的配图，`uk`使用`ru`的配图，其他语种(如`ja`)默认使用`en`的配图。

比如，`MarkDown`的法语(`fr`)源文件如下:

```md
![xx](https://i18n-img.github.io/fr/1.avif)
<video src="https://i18n-img.github.io/fr/1.mp4"></video>
[xx](https://i18n-img.github.io/fr/README.md)
<a style="color:red" href="https://i18n-img.github.io/fr/i18n.site.gz">xx</a>
```

翻译后的生成的英文(`en`)文件如下:

```md
![xx](https://i18n-img.github.io/en/1.avif)
<video src="https://i18n-img.github.io/en/1.mp4"></video>
[xx](https://i18n-img.github.io/en/README.md)
<a style="color:red" href="https://i18n-img.github.io/en/i18n.site.gz">xx</a>
```

这里，源语言代码的`/en/`被替换为了译文语言的`/zh/`。

注意: 网址中被替换文本的语言代码前后都必须要有`/`。

> [!TIP]
> 如果 `url:` 中配置的了`- /`，只会匹配相对路径，而不会匹配以`//`开头的网址。
>
> 如果某域名，部分链接想替换，部分不想被替换，可以用 `[x](//x.com/en/)` 和 `[x](https://x.com/en/)` 这样不同的前缀来区分。

### 忽略文件

默认会翻译源语言目录下所有以`.md`和`.yml`的文件。

如果想忽略某些文件不翻译（比如还没写完的草稿），可以用`ignore`字段配置。

`ignore`采用了和`.gitignore`文件类似的 [globset](https://docs.rs/globset/latest/globset/#syntax) 语法。

比如，上面配置文件中`_* `表示`_`开头的文件都不翻译。

## 翻译规则

### 译文编辑不要增删行

译文可编辑。修改原文，再次机器翻译时，不会覆盖译文的人工修改(如果原文此段未修改)。

> [!WARN]
> 译文和原文的行必须一一对应。也就是编译译文切勿增加或删除行。否则会造成译文编辑缓存的错乱。

如果出现了错乱，请参考 [常见问题中的解决方案](/i18/qa#H1)

### `YAML`翻译

命令行工具会找到源语言文件目录下所有以`.yml`结尾的文件，并翻译。

* 注意，文件名后缀必须是`.yml`( 而不是`.yaml`)。

工具只翻译`.yml`中字典的值，不会翻译字典的键。

比如`i18n/en/i18n.yml`

```
apiToken: API Token
defaultToken: Default Token
```

会被翻译为`i18n/zh/i18n.yml`

```
apiToken: 接口令牌
defaultToken: 默认令牌
```

`YAML`的译文同样可以人工修改（但不要在译文中增删键、增删行）。

基于`YAML`翻译，你可以方便地构建各种编程语言的国际化解决方案。

## 进阶用法

### 翻译子目录

只要创建了`.i18n/conf.yml`(无需每次都从演示项目模板开始)，`i18`就能正常工作。

命令行工具会找到所有子目录下的`.i18n/conf.yml`配置，并对其翻译。

采用了 [monorepo](//monorepo.tools) 架构的项目，可以把语言文件拆分到子目录中去。

![](https://p.3ti.site/1719910016.avif)

### 自定义安装目录

默认会安装到`/usr/local/bin`。

如果`/usr/local/bin`没有写权限会安装到`~/.bin`。

设置环境变量`TO`可以定义安装目录, 比如 :

```sh
TO=/bin sudo bash <(curl -sS https://i.i18n.site) i18
```
