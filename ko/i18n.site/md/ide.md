# 편집자 추천

모두가 자신의 편집기를 써 오는 습관이 있으며, 여기서는 우리의 `Markdown` 최선의 실천 사례를 공유하고자 합니다.

[vscode](https://code.visualstudio.com/)를 사용하여 `Markdown`을 작성하며, 플러그인 [Markdown Preview Enhanced](https://marketplace.visualstudio.com/items?itemName=shd101wyy.markdown-preview-enhanced)을 설치하여 실시간으로 미리보기를 할 수 있습니다.

다음과 같이 편집기에서 우클릭하여 미리보기 창을 열 수 있습니다.

![](https://p.3ti.site/1720775216.avif)
![](https://p.3ti.site/1720775043.avif)

`code xxx.md` 명령어를 터미널에 입력하여 `vscode`를 호출하여 `Markdown` 파일을 엽니다.

[PicList](https://github.com/Kuingsmile/PicList)를 사용하여 이미지를 업로드하고, 업로드에 대한 단축키를 설정하여 캡처 후 일键 업로드할 수 있습니다.

업로드 후 자동으로 파일 이름을 `Markdown` 형식으로 복사하는 기능을 지원하여, 매우 효율성을 높입니다.

또한 아래의 설정을 참조하여 파일을 수정하여 업로드된 파일을 자동으로 `avif` 형식으로 압축하여 이미지 크기를 줄일 수 있습니다.

```json
"buildIn": {
  "compress": {
    "quality": 99,
    "isConvert": true,
    "convertFormat": "avif",
    "isReSize": false,
    "reSizeWidth": 0,
    "reSizeHeight": 0,
    "skipReSizeOfSmallImg": false,
    "isReSizeByPercent": false,
    "reSizePercent": 50,
    "isRotate": false,
    "rotateDegree": 0,
    "isRemoveExif": true,
    "isFlip": false,
    "isFlop": false,
    "formatConvertObj": {}
  },
  … …
```