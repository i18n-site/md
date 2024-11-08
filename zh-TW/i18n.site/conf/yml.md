# .i18n/conf.yml

`i18n.site`的配置文件是`.i18n/conf.yml`，內容如下:

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

其中，`upload`的`ext:`配置項，表示发布時只上傳`.md`。

## 頂部導航 nav

`nav:`的配置選項，對應首頁頂部的導航菜單。

<img src="//p.3ti.site/1721051426.avif" style="width:320px">

其中，`i18n: home`對應着`en/i18n.yml`中`home: Home`(這里`en`是項目翻譯的源語言)。

`en/i18n.yml`內容是導航菜單中顯示的文本，會根據配置中的`fromTo`翻譯，比如翻譯到`zh/i18n.yml`。

<img src="//p.3ti.site/1721051689.avif" style="width:320px">

翻譯完成后，可以修改譯文的`yml`的值，但不要增刪譯文`yml`的鍵。

### `use: Toc` 有大綱的單文件模板

`nav`配置中:

```
  - i18n: home
    use: Toc
    url: /
```

`use: Toc`表示使用`Toc`模板渲染，這是渲染單個`Markdown`模板。

`TOC`是`Table of Contents`的縮寫，此模板渲染時會在側欄顯示此`Markdown`文件的大綱。

`url:`表示`Markdown`的文件路徑（`/`對應的是根目錄`/README.md`，此文件名需前綴大寫、后綴小寫）。

### `use: Md` 無大綱的單文件模板

`Md`模板和`Toc`模板相同，都用于渲染單個`Markdown`文件。但是`Md`模板不會在側欄顯示大綱。

你可以修改上面配置中的`use: Toc`為`use: Md`，再次在`md`目錄下運行`i18n.site`，然后訪問開发預覽的網址，观察首頁的變化。

### `use: Blog` 博客模板

博客模板會按发布時間的順序顯示文章列表(標題和摘要)。

[→ 點此了解具體配置](/i18n.site/conf/blog)

### `use: Doc` 多文件文檔模板

配置文件中:

```
  - i18n: doc
    menu: NB demo1,demo2
    use: Doc
```

表示使用`Doc`進行模板渲染。

`Doc`模板支持集成多個`MarkDown`來生成單個或多個項目的文檔大綱。

#### 多項目多文件

`.i18n/conf.yml`中`i18n:doc`的配置是多項目多文件渲染模式。

這里，`menu: NB demo1,demo2`，表示用`NB`模板渲染下拉菜單。

<img src="//p.3ti.site/1721275191.avif" width="320px">

`NB`,是`Name Breif`的縮寫，表示下拉菜單可以顯示項目的名稱和標語。

`NB`后面是傳給它的參數`demo1,demo2`。

注意: ** `demo1,demo2`中的逗號`,`前后不要有空格**。

以上參數，對應的目錄索引文件是:

* `en/demo1/TOC`
* `en/demo2/TOC`

#### 單項目多文件

如果你只有一個項目，那么可以配置如下。

```
  - i18n: doc
    url: flashduty
    use: Doc
```

> [!WARN]
> 單項目多文件不支持配置 `url` 為根路徑 `/`
> 如果__conf.yml → nav:__沒有配置根路徑，訪問網站首頁時，會自動重寫到`nav:`配置下的第一個網址。
> 這樣設計是為了通過目錄，更好地區分項目文檔、博客等內容。
> 建議用單文件單頁面作為首頁。

> [!TIP]
> 若不寫`url`，`url`默認為`i18n`的值，此規則對于其他模板同樣生效。

#### TOC 目錄索引

如果配置中啟用`use: Doc`模板，就請在`.i18n/conf.yml`中啟用插件`i18n.addon/toc`，配置如下:

```yml
addon:
  - i18n.addon/toc
```

`i18n.site`會自動安裝執行此插件，讀取`TOC`目錄索引文件，來生成目錄大綱的`json`。

如果是單項目多文件，`TOC`根目錄是源語言目錄下`url:`對應的目錄，比如源語言是中文：`url: flashduty`對應的文件是`zh/flashduty/TOC`。

如果是多項目多文件，不需要配置`url:`，`TOC`根目錄是`i18n`的值對應的目錄，

##### 內容詳解

`en/blog/TOC`內容如下:

```
README.md

news/README.md
  news/begin.md
```

##### 用縮進表示層級

上面`en/blog/TOC`第一行的`README.md`對應的是下圖中的`i18n.site`，也就是項目名稱。

后續的兩行，如下面截圖所示。

<img src="https://p.3ti.site/1721097381.avif" style="width:320px">

`news/README.md`對應的是`News`，
`news/begin.md`對應的是`Our Product is Online !`

`TOC`文件通過縮進，表示大綱層級關系，支持多層縮進, 以`# `開頭的行為注釋。

##### 父層級只寫標題，不寫內容

有多層縮進的情況下，父層級只寫標題，不寫內容。否則會導致排版錯亂。

##### 項目 README.md

項目的`README.md`，比如`en/demo2/README.md`中可以寫內容。

注意，此文件的內容不顯示目錄大綱，所以建議控制篇幅，寫一些簡短的介紹即可。

###### 項目標語

可以看到，`Deme Two`在下拉菜單和目錄大綱項目名的下方，有它的項目標語:`Your Project slogan`。

![](https://p.3ti.site/1721276842.avif)

這對應的是`en/demo2/README.md`第一行:

```
# Demo Two : Your Project slogan
```

項目`README.md`一級標題首個冒號`:`后面的內容，會被視為項目標語。

中日韓用戶請注意，要用半角冒號`:`而不是全角冒號。

##### 如何批量移動 TOC ？

`TOC`文件需要放在源語言的目錄下。

比如，源語言是中文，那么上面`TOC`就是`zh/blog/TOC`。

如果修改了源語言，就需要批量移動項目中的某語種的`TOC`文件到另一語種。

可以參考如下命令：

```
rsync -av --remove-source-files --include='*/' \
--include='TOC' --exclude='*' en/ zh/
```

請修改上面命令中的`en/`和`zh/`為您的語種代碼。

### 無配置路徑的默認加載

訪問的某個路徑，如果路徑前綴沒有在`nav:`中配置，則默認加載路徑對應的`MarkDown`文件，并用`Md`模板渲染。

比如，訪問`/test`， 同時`nav:`配置未此路徑的前綴，当前瀏覽語言是英文（代碼`en`），則默認會加載`/en/test.md`，并使用`Md`模板渲染。

如果`/en/test.md`此文件不存在，則會顯示默認的`404`頁面。

<img src="//p.3ti.site/1721184299.avif" style="width:360px">