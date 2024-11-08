# i18n.site MarkDown 작성 규칙

## 앵커 포인트

기존의 `MarkDown` 앵커 포인트는 텍스트 콘텐츠를 기반으로 생성됩니다. 다중 언어의 경우 이 솔루션은 실현 가능하지 않습니다.

`i18n.site` 과 일치하는 앵커 포인트 솔루션은 `<a rel=id href="#xxx" id="xxx"></a>` in `MarkDown` 과 유사한 텍스트를 삽입하여 위치 앵커 포인트를 수동으로 생성하는 것입니다.

`<a rel=id href="#xxx" id="xxx"></a>` , 여기서 `rel=id` 앵커 포인트의 페이지 스타일을 정의합니다. `xxx` 실제 앵커 영어 약어로 바꾸십시오.

앵커는 일반적으로 다음과 같이 제목에 추가됩니다.

```md
### <a rel=id href="#i18" id="i18"></a>i18 : MarkDown Command Line Translation Tool
```

디스플레이 효과는 다음과 같습니다.

<img src="//p.3ti.site/1721381136.avif" width="350">

## `MarkDown` 에 `HTML` 쓰세요

`HTML` `pug` 코드에 포함될 수 있습니다.

`<pre>` 요소의 콘텐츠는 번역되지 않습니다.

이 두 가지 점을 결합하면 `HTML` `MarkDown` 으로 쉽게 작성하여 다양한 디스플레이 효과를 얻을 수 있습니다.

[참고로 여기를 클릭하세요 i18n.site 홈페이지에 HTML 언어코드 목록이 적혀 있는데](//raw.githubusercontent.com/i18n-site/md/main/zh/README.md) , 코드는 다음과 같습니다 :

```html
<h1 style="display:flex;justify-content:space-between">i18n.site ⋅ International Solutions<img src="//p.3ti.site/logo.svg" style="user-select:none;margin-top:-1px;width:42px"></h1>
<pre class="langli" style="display:flex;flex-wrap:wrap;background:transparent;border:1px solid #eee;font-size:12px;box-shadow:0 0 3px inset #eee;padding:12px 5px 4px 12px;justify-content:space-between;"><style>pre.langli i{font-weight:300;font-family:s;margin-right:2px;margin-bottom:8px;font-style:normal;color:#666;border-bottom:1px dashed #ccc;}</style><i>English</i><i>简体中文</i><i>Deutsch</i> … …</pre>
```

`<style>` 위의 `<pre>` 에도 정의되어 있습니다.