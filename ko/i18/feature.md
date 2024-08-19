# 제품 특징

`i18`는 Markdown & Yaml 번역을 위한 명령줄 도구입니다.

## Markdown의 형식을 완벽하게 유지합니다

Markdown 테이블을 번역할 수 있으며, 형식을 훼손하지 않습니다. 수학 공식이나 링크 내의 단어는 번역하지 않습니다.

혼합 HTML Markdown를 번역할 수 있으며, `Markdown`에 포함된 HTML의 `<pre>`와 `<code>` 태그 내용은 번역되지 않습니다

## 수학 공식을 인식하여 번역을 건너뜁니다

수학 공식이 인식되며 번역을 건너뜁니다.

수학 수식의 작성 방법은 [Github에서 수식 작성에 대한 안내](https://docs.github.com/get-started/writing-on-github/working-with-advanced-formatting/writing-mathematical-expressions#about-writing-mathematical-expressions)을 참고하세요.

## 코드 조각의 주석을 번역할 수 있습니다

인라인 코드와 코드 조각은 번역되지 않지만, 코드의 주석은 번역됩니다.

주석 번역 시 ````` 뒤에 언어를 명시해야 합니다. 예를 들어: ````rust`

현재 `toml` , `yaml` , `json5` , `go` , `rust` , `c` , `cpp` , `java` , `js` , `coffee` , `python` , `bash` , `php` [및 기타 언어](https://github.com/i18n-site/rust/blob/main/getc/src/style.rs#L14) 로 주석 번역을 지원합니다.

필요한 프로그래밍 언어가 없다면 [연락 주세요](https://groups.google.com/g/i18n-site) 하십시오.

## 명령줄 친화적입니다

번역 문서 관리에 사용할 수 있는 [강력한 도구가](https://www.capterra.com/translation-management-software) 많이 있습니다.

`git`, `vim`, `vscode`에 익숙한 프로그래머라면, 이러한 도구를 사용하여 문서를 편집하고 버전을 관리하는 것은 학습 비용을 크게 증가시킬 수 있습니다.

`KISS`(`Keep It Simple, Stupid`) 원칙을 따르는 사람들에게는, 엔터프라이즈 수준의 솔루션은 복잡하고 비효율적이며 사용하기 어려운 대명사입니다.

번역은 명령을 입력하고 한 번의 클릭으로 완료되어야 하며, 복잡한 환경 종속성이 없어야 합니다.

필요하지 않다면, 추가적인 요소를 포함하지 마십시오.

## 수정 없음, 번역 없음

[translate-shell](https://github.com/soimort/translate-shell)와 같은 일부 명령줄 번역 도구도 있습니다.

그러나 파일 수정 사항을 인식하지 않으며, 수정된 파일만을 번역하여 비용을 절감하고 효율성을 높입니다.

## 번역은 편집 가능하며, 기계 번역은 기존 수정 사항을 덮어쓰지 않습니다

번역은 편집 가능합니다.

원본 텍스트를 수정하고 다시 기계 번역하면, 번역에 대한 수동 수정 사항이 덮어쓰여지지 않습니다(원문의 이 단락이 수정되지 않은 경우).

## 최고 품질의 기계 번역

우리는 전통적인 기계 번역 모델과 대규모 언어 모델의 기술적 장점을 통합하여, 정확하고 매끄럽고 우아한 번역을 제공합니다.

블라인드 테스트에서 우리의 번역 품질이 유사한 서비스에 비해 훨씬 더 높은 것으로 나타났습니다.

동일한 품질을 달성하기 위해 Google 번역과 `ChatGPT` 에서 필요한 수동 편집 양은 각각 당사의 `2.67` 배와 `3.15` 배입니다.

## <a rel=id href="#price" id="price"></a> 매우 경쟁력 있는 가격

|                                                                                   | USD/백만 단어 |
| --------------------------------------------------------------------------------- | ------------- |
| [i18n.site](https://i18n.site)                                                    | 9             |
| [마이크로소프트](https://azure.microsoft.com/pricing/details/cognitive-services/translator) | 10            |
| [아마존](https://aws.amazon.com/translate/pricing)                                | 15            |
| [Google](https://cloud.google.com/translate/pricing)                                | 20            |
| [DeepL](https://www.deepl.com/zh/pro#developer)                                  | 25            |

[여기를 클릭하여 i18n.site 의 github 승인하고 자동으로 팔로우](https://github.com/login/oauth/authorize?client_id=Ov23liuGAmK0plc9FgB3&amp;scope=user:email,user:follow,public_repo) 하고 **보너스 $50 받으세요** .

*참고: 청구 가능한 문자 수 = 원본 파일의 [unicode 문자 수](https://en.wikipedia.org/wiki/Unicode) × 번역 언어 수

## `YAML` 번역을 지원합니다

이 도구는 사전의 키가 아닌 `YAML`의 사전 값만을 번역합니다.

`YAML` 번역을 기반으로 다양한 프로그래밍 언어의 국제화 솔루션을 쉽게 구축할 수 있습니다.

## `HOGO`의 문서 헤더 구성을 번역할 수 있습니다

`title`, `summary`, `description` 필드만을 번역하는 [HOGO](https://github.com/gohugoio/hugo) 유형 정적 블로그의 문서 헤더 구성을 지원합니다.

## 변수 이름을 번역하지 마십시오

`Markdown` 이메일 템플릿이나 `YAML` 언어 파일 구성에서는 변수 매개변수가 있습니다(예: 충전 `${amount}` 완료).

`${varname}`과 같은 변수 이름은 영어 번역으로 간주되지 않습니다.

## 중국어, 일본어, 한국어에 대한 번역 최적화

### 영어로 번역될 때, 제목의 첫 글자가 자동으로 대문자로 표시됩니다

중국어, 일본어, 한국어는 대문자와 소문자를 구분하지 않지만, 영문 제목의 경우 첫 글자를 대문자로 표기하는 것이 관례입니다.

`i18`는 `MarkDown`의 제목을 인식하여 대소문자를 구분하는 언어로 번역할 때 자동으로 첫 글자를 대문자로 표시합니다.

예를 들어, `为阅读体验而优化`은 `Optimized for Reading Experience`로 번역됩니다.

### 중국어, 일본어, 한국어의 영어 용어는 번역되지 않습니다

중국어, 일본어, 한국어의 문서에는 영어 용어가 많이 포함되어 있습니다.

중국어, 일본어, 한국어의 기계 번역은 이제 비영어권으로 전환되었으며, 다음과 같은 중국어 문장과 같이 용어를 함께 번역하는 경우가 많습니다

`Falcon 得分超 Llama ？Hugging Face 排名引发争议`

Google이나 DeepL을 사용할 때, 둘 다 원본을 유지해야 하는 영어 용어를 잘못 번역합니다(예: 일본어와 프랑스어 사용).

### 구글 번역

일본어로 번역됨: `ファルコンがラマを上回る？ハグ顔ランキングが論争を巻き起こす`

![](//p.3ti.site/1720199391.avif)

프랑스어로 번역됨: `Le faucon surpasse le lama ? Le classement Hugging Face suscite la polémique`

`Falcon`은 `faucon`으로, `Llama`는 `lama`로 번역됩니다. 고유명사로서 번역되지 않습니다.

![](//p.3ti.site/1720199451.avif)

### DeepL 번역

일본어로 번역됨: `ファルコンがラマに勝利、ハグ顔ランキングが物議を醸す`

![](//p.3ti.site/1720199550.avif)

DeepL은 위의 내용을 프랑스어로 번역합니다(고유명사를 다시 작성하고 홀수 `... ` 추가)

`Un faucon marque un point sur un lama... Le classement des visages étreints suscite la controverse. `

![](//p.3ti.site/1720199603.avif)

### i18n.site 번역

`i18`의 번역은 중국어, 일본어, 한국어 문서에서 영어 용어를 인식하고 그대로 유지합니다.

예를 들어, 위의 일본어 번역 결과는 다음과 같습니다

`Falcon のスコアが Llama よりも高かったですか ? Hugging Face ランキングが論争を引き起こす`

프랑스어 번역은 다음과 같습니다

`Falcon a obtenu un score supérieur à Llama ? Hugging Face Le classement suscite la controverse`

영어 단어와 중국어, 일본어, 한국어 텍스트 사이에 공백이 있거나 영어 길이가 1보다 큰 경우에만 해당 단어를 용어로 간주합니다.

예를 들어, `C罗`는 `Cristiano Ronaldo`로 번역됩니다.

## `i18n.site`과 결합하여 다국어 웹사이트를 구축할 수 있습니다

`i18` 다국어 웹사이트 구축 명령줄 도구 [`i18n.site`](/i18n.site) 에 통합되었습니다.

자세한 내용은 [`i18n.site`](/i18n.site) 문서를 참조하세요.

## 코드 오픈 소스

클라이언트는 완전히 오픈 소스이며, 서버 측 코드도 오픈 소스입니다 90 [소스 코드를 보려면 여기를 클릭하세요](/i18n.site/src) .

오픈 소스 코드 개발 및 번역본 교정에 참여할 자원봉사자를 모집합니다.

관심이 있으시면 [→ 여기를 클릭하여 프로필을 작성한](https://ggl.link/i18n) 후 [메일링 리스트에](https://groups.google.com/u/2/g/i18n-site) 가입하여 커뮤니케이션하세요.

## 계속 연락하다

<button onclick="mailsub()">제품 업데이트를 구독</button> 하고 <button onclick="webpush()">브라우저 푸시를 활성화하려면</button> 이 이메일을 클릭하세요. 제품 업데이트가 완료되면 알려드리겠습니다.

[i18n-site.bsky.social](https://bsky.app/profile/i18n-site.bsky.social) 우리의 소셜 계정을 팔로우하는 것을 환영 / [X.COM: @i18nSite](https://x.com/i18nSite)