# 定制頁腳

還是以演示項目為例，`md`目錄中`.i18n/htm/foot.pug`定義了網站的頁腳。

![](https://p.3ti.site/1721286077.avif)

## 頁腳樣式

演示項目中`md/.i18n/htm`下面有3個`css`文件。

* `foot.css`: 頁腳樣式
* `import.css`:`i18n.site`全站的默認樣式
* `conf.css`: 頁腳的圖標、字體

### 圖標字體

頁腳圖標是通過 iconfont.cn ( [英文版](https://www.iconfont.cn/?lang=en-us) /  [中文版](https://www.iconfont.cn/?lang=zh) ) 創建名為`F`的字體生成的。

請您按需創建自己的圖標字體，并替換`conf.css`中的以下配置 :

```
@font-face {
  font-family: "F";
  src: url(//p.3ti.site/ico1.woff2) format("woff2");
}

#Ft>b>a.site {
  background: url("//p.3ti.site/i18n.svg") 0 0 / cover;
  display: block;
  height: 24px;
  opacity: 0.8;
  width: 115px;
  flex-shrink: 0;
}
```

請不要直接引用 iconfont.cn 的字體文件，因為它在 safari 瀏覽器上無法加載。

## 網頁組件

`foot.pug`中不能寫`js`，如果需要交互，請自定義網頁組件。

可以在`md/.i18n/htm/index.js`中定義[網頁組件](https://www.freecodecamp.org/news/build-your-first-web-component/)，然后在`foot.pug`使用該組件。

創建網頁組件很簡單, 比如自定義標签`<x-img>`。

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

## 頁腳的多語言

`.i18n/htm/foot.pug`中有代碼如下:

```
#Ft
  b
    a.site(href="/")
    b ${I18N.C}
```

這里`${I18N.C}`對應的就是`en/i18n.yml`中的:

```
C: Power By <a class="a" href="https://i18n.site">i18n.site</a>
```

使用`${I18N.xxx}`類似這樣的寫法，配合`i18n.yml`，就能實現頁腳的多語言國際化。

給鏈接加上`class="a"`，是為了避免鏈接被轉為`MarkDown`的寫法，參見:
 [➔`YAML`: 如何避免鏈接的`HTML`被轉為`Markdown`](/i18/qa#H2)。