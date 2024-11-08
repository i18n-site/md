# 보행인

데모 프로젝트를 예로 들면, `md` 디렉토리의 `.i18n/htm/foot.pug` 웹사이트의 바닥글을 정의합니다.

![](https://p.3ti.site/1721286077.avif)

[`pug`](https://pugjs.org) `HTML` 을 생성하는 템플릿 언어입니다.

[➔ 의 문법을 배우려면 여기를 클릭하세요 pug](https://pugjs.org)

**`foot.pug` 에 `css` 과 `js` 쓰지 마십시오** . 그렇지 않으면 오류가 발생합니다.

다음을 참고하세요. 스타일은 해당 `.css` 에 기록되며 웹 구성 요소를 생성하여 상호 작용이 이루어집니다.

## 바닥글 스타일

데모 프로젝트에는 `md/.i18n/htm` 아래에 3개의 `css` 파일이 있습니다.

* `foot.css` : 바닥글 스타일
* `import.css` : 1전체 사이트의 `i18n.site` 스타일
* `conf.css` : 바닥글 아이콘 및 글꼴

### 아이콘 글꼴

바닥글 아이콘은 `F` iconfont.cn ( [영어 버전](https://www.iconfont.cn/?lang=en-us) /[中文版](https://www.iconfont.cn/?lang=zh))이라는 글꼴을 생성하여 생성됩니다.

필요에 따라 고유한 아이콘 글꼴을 만들고 `conf.css` 에서 다음 구성을 바꾸십시오 :

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

iconfont.cn의 글꼴 파일은 사파리 브라우저에서 불러올 수 없으므로 직접 참조하지 마세요.

## 웹 구성 요소

`js` `foot.pug` 으로 쓸 수 없습니다. 상호 작용이 필요한 경우 웹 구성 요소를 사용자 정의하십시오.

[웹 구성 요소는](https://www.freecodecamp.org/news/build-your-first-web-component/) `md/.i18n/htm/index.js` 에서 정의한 다음 `foot.pug` 에서 사용할 수 있습니다.

사용자 정의 `<x-img>` 과 같은 웹 구성 요소를 만드는 것은 쉽습니다.

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

## 다국어 바닥글

`.i18n/htm/foot.pug` 의 코드는 다음과 같습니다 :

```
#Ft
  b
    a.site(href="/")
    b ${I18N.C}
```

여기서 `${I18N.C}` `en/i18n.yml` 에 해당합니다 :

```
C: Power By <a class="a" href="https://i18n.site">i18n.site</a>
```

이 작성 방법과 유사한 `${I18N.xxx}` `i18n.yml` 과 결합하여 사용하면 바닥글의 다국어 국제화를 달성할 수 있습니다.

링크에 `class="a"` 추가하면 링크가 `MarkDown` 로 변환되는 것을 방지할 수 있습니다. 참조 :
 [➔ `YAML` : 링크 `HTML` `Markdown` 로 변환되는 것을 방지하는 방법](/i18/qa#H2) .