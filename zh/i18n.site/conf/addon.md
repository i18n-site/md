# 插件

`.i18n/conf.yml`中可以配置插件，如：

```yml
addon:
  - i18n.addon/toc
```

## 官方插件

* `i18n.addon/toc`: 目录索引
  根据`TOC`生成目录索引的`json`，默认启用

* `i18n.addon/mouse`: 鼠标特效

## 文件名约定

插件都是`npm`的包。

上面`i18n.addon/toc`对应的包是 [https://www.npmjs.com/package/@i18n.addon/toc](https://www.npmjs.com/package/@i18n.addon/toc)。

插件默认使用最新版本，并每周检查更新。

如果想固定版本, 可以写`i18n.addon/toc@0.1.3`。

翻译命令行`i18n.site`会安装插件包的约定文件，然后执行。

约定的文件名如下

### htmIndex.js

`htmIndex.js`会注入到`.i18n/htm/index.js`结尾。

其中`__CONF__`会被替换为当前配置的名字(比如`dev`或者`ol`)。

### afterTran.js

会在翻译完成之后调用，传入的参数如下。

* `lang_li`: 语言列表，第一个语言为源语言
* `changed`: 修改过的文件
* `root`: 项目根目录

返回值为一个字典，比如

```json
{
  file:{
    //  path: txt, for example :
    // "_.json": "[]"
  }
}
```

`file`为输出的文件清单，`path`为文件路径，`txt`为文件内容。

## 内置函数

内置的`js`运行时基于 [boa](https://github.com/boa-dev/boa) 二次开发，内置函数如下 :

* `wPath(path, txt)`: 写入文件
* `rTxt(path)`: 读取文本文件
* `rBin(path)`: 读取二进制文件
* `rDir(dirpath)`: 读取目录，返回值为一个数组 : 目录列表, 文件列表

## 开发指南

插件开发可以参考 [https://github.com/i18n-site/addon](https://github.com/i18n-site/addon)
