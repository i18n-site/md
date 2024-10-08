# 자주 묻는 질문

## 번역 문 bản의 행을 추가하거나 삭제하여 번역이 혼란스럽게 만드는 행위

**번역의 행 수는 원문의 행 수와 일치해야 합니다**.

즉, 수동으로 번역을 조정할 때 **번역의 행을 추가하거나 삭제하지 마십시오**, 그렇지 않으면 번역과 원문 간의 매핑 관계가 혼란스러워질 수 있습니다.

실수로 행을 추가하거나 삭제하여 혼란을 일으킨 경우, 번역을 수정 전의 버전으로 복원한 후 다시 `i18` 번역을 실행하여 올바른 매핑을 다시 캐시하십시오.

번역과 원문의 매핑은 토큰과 연결되어 있습니다. [i18n.site/token](//i18n.site/token)에서 새로운 토큰을 생성하고 `.i18h/hash`를 삭제한 후 다시 번역하면 혼란스러운 매핑을 지울 수 있습니다 (하지만 이는 수동으로 한 번역 조정이 모두 손실될 수 있습니다).

## `YAML`: 링크의 `HTML`이 `Markdown`으로 변환되는 것을 피하는 방법

`YAML`의 값은 변환 시 `Markdown`으로 간주됩니다.

때로는 `<a href="/">Home</a>`가 `[Home](/)`으로 변환되는 것처럼 `HTML` → `Markdown` 변환에서 원하는 결과를 얻지 못할 때도 있습니다.

`<a class="A" href="/">Home</a>`와 같이 `href` 외의 속성을 `a` 태그에 추가하면 이러한 변환을 피할 수 있습니다.

## `./i18n/hash` 하위의 파일 충돌

충돌하는 파일을 삭제하고 `i18` 번역을 다시 실행하십시오.