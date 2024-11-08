# 定制页脚

还是以演示项目为例，`md`目录中`.i18n/htm/foot.pug`定义了网站的页脚。

![](https://p.3ti.site/1721286077.avif)

## 页脚样式

演示项目中`md/.i18n/htm`下面有3个`css`文件。

* `foot.css`: 页脚样式
* `import.css`:`i18n.site`全站的默认样式
* `conf.css`: 页脚的图标、字体

### 图标字体

页脚图标是通过 iconfont.cn ( [英文版](https://www.iconfont.cn/?lang=en-us) /  [中文版](https://www.iconfont.cn/?lang=zh) ) 创建名为`F`的字体生成的。

请您创建自己的图标字体后，替换掉 `conf.css` 中配置中的图标字体 :

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

请不要直接引用 iconfont.cn 的字体文件，因为它在 safari 浏览器上无法加载。

## 页脚的多语言

`.i18n/htm/foot.pug`中有代码如下:

```
#Ft
  b
    a.site(href="/")
    b ${I18N.C}
```

这里`${I18N.C}`对应的就是`en/i18n.yml`中的:

```
C: Power By <a class="a" href="https://i18n.site">i18n.site</a>
```

使用`${I18N.xxx}`类似这样的写法，配合`i18n.yml`，就能实现页脚的多语言国际化。

给链接加上`class="a"`，是为了避免链接被转为`MarkDown`的写法，参见:
 [➔`YAML`: 如何避免链接的`HTML`被转为`Markdown`](/i18/qa#H2)。
