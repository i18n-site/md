# 어휘

용어집 파일 `.i18n/term.yml` 을 생성할 수 있습니다. 다음은 소스 언어가 중국어인 용어집의 예입니다 :

```yml
zh:
  快猫星云: Flashcat

zh>en:
  告警: alert
  故障: incident
```

그 중 `zh:` 원어의 기본 중국어 용어집을 나타냅니다 : 즉, 어떤 언어로 번역하든 중국어 `快猫星云` `Flashcat` 로 번역됩니다.

`zh>en:` 중국어를 영어로 번역할 때 `告警` 은 `alert` 로, `故障` `incident` 로 번역된다는 의미입니다.

여기서 `zh>` 이후에는 여러 개의 타겟 언어를 쓸 수 있어 유사한 언어의 용어 구성을 단순화할 수 있습니다.

예를 들어 `zh>sk>cs` 중국어가 슬로바키아어와 체코어로 번역될 때 이 용어 목록이 공유된다는 의미입니다.

> [!TIP]
> 다중 목표 용어집과 단일 반대 용어집은 결합 사용을 지원합니다. 예를 들어 3개의 용어집 `zh>sk>cs` , `zh>sk` `zh>cs` 동시에 정의할 수 있습니다.