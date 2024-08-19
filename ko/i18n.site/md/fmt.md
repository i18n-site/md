# MarkDown 형식 약관

## 앵커

전통적인 `MarkDown`의 앵커는 텍스트 콘텐츠를 기반으로 생성되지만, 다중 언어 환경에서는 이 방법이 적용되지 않습니다.

`i18n.site`에서 약속한 앵커 방식은 `MarkDown`에 `<a rel=id href="#xxx" id="xxx"></a>`와 같은 텍스트를 삽입하여 수동으로 정의된 위치 앵커를 생성하는 것입니다.

`<a rel=id href="#xxx" id="xxx"></a>`에서 `rel=id`는 앵커의 페이지 스타일을 정의하며, `xxx`는 실제 앵커의 영어 약자로 변경해야 합니다.

앵커는 일반적으로 제목에 추가됩니다. 예를 들어:

```md
### <a rel=id href="#i18" id="i18"></a>i18 : MarkDown Command Line Translation Tool
```

화면에 표시되는 결과는 다음과 같습니다:

<img src="//p.3ti.site/1721381136.avif" width="350">

## `MarkDown`에서 `HTML`을 작성합니다

`pug` 코드 내에 `HTML`을 포함할 수 있습니다.

`<pre>` 요소 내의 내용은 번역되지 않습니다.

이 두 가지를 결합하여 `MarkDown`에서 `HTML`을 쉽게 작성하여 다양한 표시 효과를 얻을 수 있습니다.

[github.com/i18n-site/md/en/README.md](https://raw.githubusercontent.com/i18n-site/md/main/en/README.md)에서의 구현을 참조하세요. 코드는 다음과 같습니다:

```html
<h1 style="display:flex;justify-content:space-between">i18n.site ⋅ International Solutions<img src="//p.3ti.site/logo.svg" style="user-select:none;margin-top:-1px;width:42px"></h1>
<pre class="langli" style="display:flex;flex-wrap:wrap;background:transparent;border:1px solid #eee;font-size:12px;box-shadow:0 0 3px inset #eee;padding:12px 5px 4px 12px;justify-content:space-between;"><style>pre.langli i{font-weight:300;font-family:s;margin-right:2px;margin-bottom:8px;font-style:normal;color:#666;border-bottom:1px dashed #ccc;}</style><i>English</i><i>简体中文</i><i>Deutsch</i> … …</pre>
```

`<pre>` 태그 내에 `<style>`가 정의되어 있습니다.