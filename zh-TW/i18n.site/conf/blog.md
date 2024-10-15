# 博客模板

`i18n/conf.yml`中`use: Blog`表示使用博客模板進行渲染。

博客文章的`markdown`文件需要配置元信息。

元信息必须文件的開頭，以`---`開始并以`---`結尾，中間的配置信息的格式是`YAML`。

一個演示文件的配置如下:

```yml
---

brief: |
  this is a demo brief
  you can write multiline

---

# title

… …
```

`brief`表示內容摘要，會顯示在博客索引頁面上。

借助`YMAL`的` | `語法，可以寫多行摘要。

博客右側目錄樹的配置同樣為`TOC`文件(參見上一章)，只有`TOC`列出了的文章才會出現在博客首頁索引中。

不包含元信息的文章不會出現在博客首頁上，但是可以出現在右側目錄樹中。

## 作者信息

文章的元信息中可以寫作者信息，比如:

```yml
author: marlowe
```

然后編輯源語言目錄下的`author.yml`，添加作者信息，比如:

```yml
marlowe:
  name: Eleanor Marlowe
  title: Senior Translator
  url: https://github.com/i18n-site
```

`name`、`url`和`title`都是可選的。若未設置`name`，將使用鍵名(這里是`marlowe`)作為`name`。

參見演示項目的 [`begin.md`](https://github.com/i18n-site/demo.i18n.site/blob/main/en/blog/news/begin.md?plain=1) 和 [`author.yml`](https://github.com/i18n-site/demo.i18n.site/blob/main/en/author.yml)

## 置頂文章

如果需置頂文章，請運行`i18n.site`后編輯`.i18n/data/blog`下面的`xxx.yml`文件，將時間戳改為負數(多個負數會按從大到小排序)。