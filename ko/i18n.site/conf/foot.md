# 푸터

또는 데모 프로젝트를 예로 들어, `md` 디렉토리의 `.i18n/htm/foot.pug` 파일이 웹사이트의 푸터를 정의하고 있습니다.

![](https://p.3ti.site/1721286077.avif)

[`pug`](https://pugjs.org)는 `HTML`을 생성하는 템플릿 언어입니다.

[➔ 여기를 클릭하여 pug 문법을 배우세요](https://pugjs.org)

**`foot.pug` 파일에 `css`와 `js`를 작성하지 마세요**, 그렇지 않으면 오류가 발생합니다.

다음을 참조하여 스타일은 해당 `.css` 파일에 작성하고, 상호작용은 웹 컴포넌트를 통해 구현하십시오.

## 푸터 스타일

데모 프로젝트의 `md/.i18n/htm` 디렉토리 아래에는 3개의 `css` 파일이 있습니다.

* `foot.css`: 푸터 스타일
* `import.css`: `i18n.site` 전체 사이트의 기본 스타일
* `conf.css`: 푸터의 아이콘과 글꼴

### 아이콘 글꼴

页脚图标是通过 iconfont.cn ( [英文版](https://www.iconfont.cn/?lang=en-us) /  [中文版](https://www.iconfont.cn/?lang=zh) ) 创建名为`F`的字体生成的。

필요에 따라 자신만의 아이콘 글꼴을 생성하고 `conf.css` 파일의 다음 설정을 변경하십시오:

```
@font-face {
  font-family: "F";
  src: url("//at.alicdn.com/t/c/font_4281991_urfar2m2zce.woff2?t=1716188208767") format("woff2");
}
```

## 웹 컴포넌트

`foot.pug` 파일에는 `js`를 작성할 수 없습니다. 상호작용이 필요하다면 커스텀 웹 컴포넌트를 정의하십시오.

[웹 컴포넌트](https://www.freecodecamp.org/news/build-your-first-web-component/)는 `md/.i18n/htm/index.js` 파일에서 정의한 후 `foot.pug` 파일에서 사용할 수 있습니다.

커스텀 태그 `<x-img>`와 같은 웹 컴포넌트를 만드는 것은 매우 간단합니다.

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

## 푸터의 다국어 지원

`.i18n/htm/foot.pug` 파일에는 다음과 같은 코드가 있습니다:

```
#Ft
  b
    a.site(href="/")
    b ${I18N.C}
```

여기서 `${I18N.C}`는 `en/i18n.yml` 파일의 내용을 가리킵니다:

```
C: Power By <a class="a" href="https://i18n.site">i18n.site</a>
```

`${I18N.xxx}`와 같은 작성 방식을 사용하고 `i18n.yml` 파일과 결합하여 푸터의 다국어화를 실현할 수 있습니다.

给链接加上`class="a"`，是为了避免链接被转为`MarkDown`的写法，参见:
 [➔ `YAML`: 링크의 `HTML`이 `Markdown`으로 변환되는 것을 방지하는 방법](/i18/qa#H2)