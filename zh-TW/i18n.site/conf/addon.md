# 插件

`.i18n/conf.yml`中可以配置插件，如：

```yml
addon:
  - i18n.addon/toc
```

## 官方插件

* `i18n.addon/toc`: 目錄索引
  根據`TOC`生成目錄索引的`json`，默認啟用

* `i18n.addon/mouse`: 鼠標特效

## 文件名約定

插件都是`npm`的包。

上面`i18n.addon/toc`對應的包是 [https://www.npmjs.com/package/@i18n.addon/toc](https://www.npmjs.com/package/@i18n.addon/toc)。

插件默認使用最新版本，并每周檢查更新。

如果想固定版本, 可以寫`i18n.addon/toc@0.1.3`。

翻譯命令行`i18n.site`會安裝插件包的約定文件，然后執行。

約定的文件名如下

### htmIndex.js

`htmIndex.js`會注入到`.i18n/htm/index.js`結尾。

其中`__CONF__`會被替換為当前配置的名字(比如`dev`或者`ol`)。

### afterTran.js

會在翻譯完成之后調用，傳入的參數如下。

* `lang_li`: 語言列表，第一個語言為源語言
* `changed`: 修改過的文件
* `root`: 項目根目錄

返回值為一個字典，比如

```json
{
  file:{
    //  path: txt, for example :
    // "_.json": "[]"
  }
}
```

`file`為輸出的文件清單，`path`為文件路徑，`txt`為文件內容。

## 內置函數

內置的`js`運行時基于 [boa](https://github.com/boa-dev/boa) 二次開发，內置函數如下 :

* `wPath(path, txt)`: 寫入文件
* `rTxt(path)`: 讀取文本文件
* `rBin(path)`: 讀取二進制文件
* `rDir(dirpath)`: 讀取目錄，返回值為一個數組 : 目錄列表, 文件列表

## 開发指南

插件開发可以參考 [https://github.com/i18n-site/addon](https://github.com/i18n-site/addon)