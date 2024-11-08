# 博客模板

`i18n/conf.yml`中`use: Blog`表示使用博客模板进行渲染。

博客文章的`markdown`文件需要配置元信息。

元信息必须文件的开头，以`---`开始并以`---`结尾，中间的配置信息的格式是`YAML`。

一个演示文件的配置如下:

```yml
---

brief: |
  this is a demo brief
  you can write multiline

---

# title

… …
```

`brief`表示内容摘要，会显示在博客索引页面上。

借助`YMAL`的` | `语法，可以写多行摘要。

博客右侧目录树的配置同样为`TOC`文件(参见上一章)，只有`TOC`列出了的文章才会出现在博客首页索引中。

不包含元信息的文章不会出现在博客首页上，但是可以出现在右侧目录树中。

## 作者信息

文章的元信息中可以写作者信息，比如:

```yml
author: marlowe
```

然后编辑源语言目录下的`author.yml`，添加作者信息，比如:

```yml
marlowe:
  name: Eleanor Marlowe
  title: Senior Translator
  url: https://github.com/i18n-site
```

`name`、`url`和`title`都是可选的。若未设置`name`，将使用键名(这里是`marlowe`)作为`name`。

参见演示项目的 [`begin.md`](https://github.com/i18n-site/demo.i18n.site/blob/main/en/blog/news/begin.md?plain=1) 和 [`author.yml`](https://github.com/i18n-site/demo.i18n.site/blob/main/en/author.yml)

## 置顶文章

如果需置顶文章，请运行`i18n.site`后编辑`.i18n/data/blog`下面的`xxx.yml`文件，将时间戳改为负数(多个负数会按从大到小排序)。