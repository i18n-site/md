# 편집자 추천

누구나 자신이 좋아하는 편집기가 있습니다. 여기에서 모범 사례를 공유해 보겠습니다 `Markdown`

[vscode](https://code.visualstudio.com/) Write `MarkDown` 사용하고 플러그인 [Markdown Preview Enhanced](https://marketplace.visualstudio.com/items?itemName=shd101wyy.markdown-preview-enhanced) 설치하여 작성하는 동안 실시간으로 미리 봅니다.

아래와 같이 편집기에서 마우스 오른쪽 버튼을 클릭하여 미리보기 창을 엽니다.

<img alt="" src="https://p.3ti.site/1720775216.avif">
<img alt="" src="https://p.3ti.site/1720775043.avif">

`vscode` open `Markdown` 파일을 호출하려면 명령줄에 `code xxx.md` 입력합니다.

[PicList](https://github.com/Kuingsmile/PicList) 사용하여 사진을 업로드하고, 업로드 단축키를 설정하고, 한 번의 클릭으로 스크린샷을 업로드하세요.

업로드 후 파일 이름 `Markdown` 을 자동으로 복사하는 기능을 지원하므로 효율성이 크게 향상됩니다.

동시에 다음 구성을 참조하여 파일을 수정하고 업로드된 파일이 자동 `avif` 압축되도록 구성하여 이미지 크기를 줄일 수 있습니다.

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
