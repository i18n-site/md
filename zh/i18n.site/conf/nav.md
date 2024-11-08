# 定制导航

我们以演示站点 [i18n-demo.github.io](//i18n-demo.github.io) 为例，讲解如何定制导航。

![](https://p.3ti.site/1731036697.avif)

上图数字编号的区域对应的文件如下 :

1. 左侧 [`.i18n/htm/t1.pug`](https://github.com/i18n-site/demo.i18n.site/blob/main/.i18n/htm/t1.pug)
2. 右侧 [`.i18n/htm/t2.pug`](https://github.com/i18n-site/demo.i18n.site/blob/main/.i18n/htm/t2.pug)

[`pug`](https://pugjs.org)是一种生成`HTML`的模板语言。

[➔ 点此学习 pug 的语法](https://pugjs.org)

文件中用 `${I18N.sponsor}` 这种格式字符串来实现国际化，其内容会被替换为源语言目录下 [i18n.yml](https://github.com/i18n-site/demo.i18n.site/blob/main/en/i18n.yml) 中对应的文本。

导航栏的样式对应的文件是: [`.i18n/htm/topbar.css`](https://github.com/i18n-site/demo.i18n.site/blob/main/.i18n/htm/topbar.css)。

> [!WARN]
> **不要在`pug`中写`css`和`js`**，否则会有错误。

## 网页组件

`pug`中不能写`js`，如需交互，可通过创建网页组件来实现。

组件可在 [`md/.i18n/htm/index.js`](https://github.com/i18n-site/demo.i18n.site/blob/main/.i18n/htm/index.js) 中定义[网页组件](https://www.freecodecamp.org/news/build-your-first-web-component/)，然后在`foot.pug`使用该组件。

创建网页组件很简单, 比如自定义标签`<x-img>`。

```js
customElements.define(
  'x-img',
  class extends HTMLElement {
    constructor() {
      super();
      var img = document.createElement('img');
      img.src = '//p.3ti.site/i18n.svg';
      img.style = "height:99px;width:99px;";
      this.append(img);
    }
  }
)
```

目前 `md/.i18n/htm/index.js` 中引用了`x/i-h.js`，这是用于导航和页脚定制内容文本国际化的网页组件，源代码见 [18x/src/i-h.js](https://github.com/i18n-site/18x/blob/main/src/i-h.js)。
