# 安裝使用

## windows 先安裝 git bash

windows 系統，請先 [點此下載并安裝`git bash`](https://git-scm.com/download/win)。

在`git bash`中運行后續操作。

## 安裝

```sh
bash <(curl -sS https://i.i18n.site) i18
```

### 配置翻譯令牌

訪問 [i18n.site/token](//i18n.site/token) 點擊复制令牌

<img src="https://p.3ti.site/1719911689.avif" style="width:400px">

創建`~/.config/i18n.site.yml`, 把复制內容的粘貼進去，內容如 ：

```
token: YOUR_API_TOKEN
```

此外，還需在 [i18n.site/payBill](//i18n.site/payBill) 綁定付款信用卡（無需充值，網站會按用量自動扣費，[定價見首頁](/#price)）。

## 使用

### 演示項目

請參考演示項目 [github.com/i18n-site/demo.i18](//github.com/i18n-site/demo.i18) 來學習`i18`翻譯的配置。

中國區用戶可以克隆 [atomgit.com/i18n/demo.i18](//atomgit.com/i18n/demo.i18)

克隆后進入目錄，運行`i18`即可完成翻譯。

### 目錄結構

模板倉庫目錄結構如下

```
┌── .i18n
│  └── conf.yml
└── en
   ├── _IgnoreDemoFile.md
   ├── i18n.yml
   └── README.md
```

`en`目錄下是翻譯的演示文件，只是一個示例，可以都刪除。

### 運行翻譯

進入目錄，運行`i18`即可翻譯。

程序除了譯文還會生成`.i18n/data`文件夾，請添加它到版本庫中。

翻譯新的文件后，此目錄下會生成新的數據文件，記得`git add . `追加。

## 配置文件

`.i18n/conf.yml`就是`i18`命令行翻譯工具的配置文件

內容如下：

```
i18n:
  fromTo:
    en: zh ja ko de fr
    # en:

ignore:
  - _*
```

### 源語言 & 譯文語言

配置文件中，`fromTo`的下級：

`en`是源語言，`zh ja ko de fr`是翻譯的目標語言。

語言代碼見 [i18n.site/i18/LANG_CODE](https://i18n.site/i18/LANG_CODE)。

比如，想把中文翻譯為英文，改寫此行`zh: en`。

如果想翻譯為所有支持的語種，請在`:`后面留空。比如

```
i18n:
  fromTo:
    en:
```

可以為不同的子目錄/文件配置不同的`fromTo`, 一個演示的寫法如下:

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

此配置表中,`blog`目錄翻譯的源語言是`zh`，`blog/your_file_name.md`翻譯的源語言是`ja`。

### 圖片/鏈接的多語言

在`.i18n/conf.yml`中配置`replace:`，`MarkDown`中圖片、鏈接(以及內嵌`HTML`的`src`和`href`屬性)中的網址以此為前綴時，會替換網址中源語言的代碼為譯文的語言代碼([語言代碼一覽](/i18/LANG_CODE))。

比如，您的配置如下:

```yml
i18n:
  fromTo:
    fr: ko de en zh zh-TW uk ru ja
  replace:
    https://fcdoc.github.io/img/ : ko de uk>ru zh-TW>zh >en
```

`replace: `是一個字典，鍵是待替換的網址前綴，值是替換規則。

上面替換規則 `ko de uk>ru zh-TW>zh >en` 的含義是，`ko de`使用它們自己語言代碼的配圖，`zh-TW`和`zh`使用`zh`的配圖，`uk`使用`ru`的配圖，其他語種(如`ja`)默認使用`en`的配圖。

比如，`MarkDown`的法語(`fr`)源文件如下:

```md
![xx](https://i18n-img.github.io/fr/1.avif)
<video src="https://i18n-img.github.io/fr/1.mp4"></video>
[xx](https://i18n-img.github.io/fr/README.md)
<a style="color:red" href="https://i18n-img.github.io/fr/i18n.site.gz">xx</a>
```

翻譯后的生成的英文(`en`)文件如下:

```md
![xx](https://i18n-img.github.io/en/1.avif)
<video src="https://i18n-img.github.io/en/1.mp4"></video>
[xx](https://i18n-img.github.io/en/README.md)
<a style="color:red" href="https://i18n-img.github.io/en/i18n.site.gz">xx</a>
```

這里，源語言代碼的`/en/`被替換為了譯文語言的`/zh/`。

注意: 網址中被替換文本的語言代碼前后都必须要有`/`。

> [!TIP]
> 如果 `url:` 中配置的了`- /`，只會匹配相對路徑，而不會匹配以`//`開頭的網址。
>
> 如果某域名，部分鏈接想替換，部分不想被替換，可以用 `[x](//x.com/en/)` 和 `[x](https://x.com/en/)` 這樣不同的前綴來區分。

### 忽略文件

默認會翻譯源語言目錄下所有以`.md`和`.yml`的文件。

如果想忽略某些文件不翻譯（比如還沒寫完的草稿），可以用`ignore`字段配置。

`ignore`采用了和`.gitignore`文件類似的 [globset](https://docs.rs/globset/latest/globset/#syntax) 語法。

比如，上面配置文件中`_* `表示`_`開頭的文件都不翻譯。

## 翻譯規則

### 譯文編輯不要增刪行

譯文可編輯。修改原文，再次機器翻譯時，不會覆蓋譯文的人工修改(如果原文此段未修改)。

> [!WARN]
> 譯文和原文的行必须一一對應。也就是編譯譯文切勿增加或刪除行。否則會造成譯文編輯緩存的錯亂。

如果出現了錯亂，請參考 [常見問題中的解決方案](/i18/qa#H1)

### `YAML`翻譯

命令行工具會找到源語言文件目錄下所有以`.yml`結尾的文件，并翻譯。

* 注意，文件名后綴必须是`.yml`( 而不是`.yaml`)。

工具只翻譯`.yml`中字典的值，不會翻譯字典的鍵。

比如`i18n/en/i18n.yml`

```
apiToken: API Token
defaultToken: Default Token
```

會被翻譯為`i18n/zh/i18n.yml`

```
apiToken: 接口令牌
defaultToken: 默認令牌
```

`YAML`的譯文同樣可以人工修改（但不要在譯文中增刪鍵、增刪行）。

基于`YAML`翻譯，你可以方便地構建各種編程語言的國際化解決方案。

## 進階用法

### 翻譯子目錄

只要創建了`.i18n/conf.yml`(無需每次都從演示項目模板開始)，`i18`就能正常工作。

命令行工具會找到所有子目錄下的`.i18n/conf.yml`配置，并對其翻譯。

采用了 [monorepo](//monorepo.tools) 架構的項目，可以把語言文件拆分到子目錄中去。

![](https://p.3ti.site/1719910016.avif)

### 自定義安裝目錄

默認會安裝到`/usr/local/bin`。

如果`/usr/local/bin`沒有寫權限會安裝到`~/.bin`。

設置環境變量`TO`可以定義安裝目錄, 比如 :

```sh
TO=/bin sudo bash <(curl -sS https://i.i18n.site) i18
```