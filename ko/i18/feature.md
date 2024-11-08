# 제품특징

`i18` 은 번역을 위한 명령줄 도구입니다 Markdown & Yaml

## Markdown 형식을 완벽하게 유지할 수 있습니다.

형식을 손상시키지 않고 Markdown 테이블 번역을 지원합니다. 수학 공식이나 링크의 단어는 번역하지 않습니다.

혼합 HTML Markdown 번역을 지원합니다. HTML `MarkDown` 에 포함된 태그 `<pre>` 과 `<code>` 의 내용은 번역되지 않습니다.

## 수학 공식을 인식하고 번역을 건너뛸 수 있습니다.

수학 공식이 인식되고 번역이 건너뜁니다.

수학 수식 작성 방법은 [" Github 수식 작성에 대하여"](https://docs.github.com/get-started/writing-on-github/working-with-advanced-formatting/writing-mathematical-expressions#about-writing-mathematical-expressions) 를 참고하세요.

## 코드 조각의 주석을 번역하는 기능

인라인 코드와 코드 조각은 번역되지 않지만 코드의 주석은 번역될 수 있습니다.

번역 주석은 : 과 같이 ` ``` ` 뒤에 언어 ` ```rust ` 표시해야 합니다.

현재 `toml` , `yaml` , `json5` , `go` , `rust` , `c` , `cpp` , `java` , `js` , `coffee` , `python` , `bash` , `php` [및 기타 언어](https://github.com/i18n-site/rust/blob/main/getc/src/style.rs#L14) 로 주석 번역을 지원합니다.

코드에서 영어가 아닌 모든 문자를 번역하려면 코드 세그먼트를 ` ```i18n ` 으로 표시하세요.

필요한 프로그래밍 언어를 사용할 수 없는 경우 [당사에 문의](https://groups.google.com/g/i18n-site) 하십시오.

## 명령줄 친화적

번역 문서 관리에 사용할 수 있는 [강력한 도구가](https://www.capterra.com/translation-management-software) 많이 있습니다.

`git` , `vim` , `vscode` 에 익숙한 프로그래머의 경우 이러한 도구를 사용하여 문서를 편집하고 버전을 관리하면 학습 비용이 확실히 증가합니다.

`KISS` ( `Keep It Simple, Stupid` ) 원칙을 믿는 사람들 사이에서 엔터프라이즈 수준 솔루션은 번거롭고 비효율적이며 사용하기 어렵다는 것과 동의어입니다.

번역은 명령을 입력하고 한 번의 클릭으로 완료해야 하며 복잡한 환경 종속성이 없어야 합니다.

필요한 경우가 아니면 엔터티를 추가하지 마세요.

## 수정 없음, 번역 없음

[translate-shell](https://github.com/soimort/translate-shell) 와 같은 일부 명령줄 번역 도구도 있습니다.

그러나 파일 수정 사항 식별을 지원하지 않으며 수정된 파일만 변환하여 비용을 절감하고 효율성을 높입니다.

## 번역은 편집될 수 있으며 기계 번역은 기존 수정 사항을 덮어쓰지 않습니다.

번역은 편집 가능합니다.

원본 텍스트를 수정하고 다시 기계 번역하면 번역에 대한 수동 수정 사항이 덮어쓰여지지 않습니다(원문의 이 단락이 수정되지 않은 경우).

## 최고 품질의 기계 번역

우리는 전통적인 기계 번역 모델과 대규모 언어 모델의 기술적 장점을 결합하여 번역을 정확하고 매끄럽고 우아하게 만드는 차세대 번역 기술을 개발했습니다.

블라인드 테스트를 통해 당사의 번역 품질이 유사한 서비스에 비해 훨씬 더 나은 것으로 나타났습니다.

동일한 품질을 달성하기 위해 Google 번역과 `ChatGPT` 에서 요구하는 수동 편집의 양은 각각 당사의 `2.67` 배와 `3.15` 배입니다.

## <a rel=id href="#price" id="price"></a> 매우 경쟁력 있는 가격

|                                                                                   | USD/백만 단어 |
| --------------------------------------------------------------------------------- | ------------- |
| [i18n.site](https://i18n.site)                                                    | 9             |
| [마이크로소프트](https://azure.microsoft.com/pricing/details/cognitive-services/translator) | 10            |
| [아마존](https://aws.amazon.com/translate/pricing)                                | 15            |
| [Google](https://cloud.google.com/translate/pricing)                                | 20            |
| [DeepL](https://www.deepl.com/zh/pro#developer)                                  | 25            |

[➤ 의 github 라이브러리를 승인하고 자동 i18n.site 팔로우](https://github.com/login/oauth/authorize?client_id=Ov23liuGAmK0plc9FgB3&amp;scope=user:email,user:follow,public_repo) 하고 **보너스 $50 받으려면** 여기를 클릭하세요.

참고: 청구 가능한 문자 수 = 원본 파일의 [unicode 수](https://en.wikipedia.org/wiki/Unicode) × 번역 언어 수

## 번역 지원 `YAML`

이 도구는 사전 키가 아닌 `YAML` 의 사전 값만 변환합니다.

`YAML` 번역을 기반으로 다양한 프로그래밍 언어에 대한 국제 솔루션을 쉽게 구축할 수 있습니다.

## 번역 `HOGO` 헤더 구성 지원

[HOGO](https://github.com/gohugoio/hugo) 유형의 정적 블로그의 헤더 구성을 지원하며 `title` , `summary` , `brief` 및 `description` 필드만 번역합니다.

## 변수 이름을 번역하지 마세요

`Markdown` 이메일 템플릿으로 사용되고, `YAML` 언어 파일 구성으로 사용되며, 가변 매개변수가 있습니다(예: 재충전 `${amount}` 수신되었습니다).

`${varname}` 과 같은 변수 이름은 영어 번역으로 간주되지 않습니다.

## 중국, 일본, 한국에 대한 번역 최적화

### 영어로 번역하면 제목의 첫 글자가 자동으로 대문자로 표시됩니다.

중국, 일본, 한국은 대문자와 소문자를 구분하지 않지만, 영문 제목의 경우 첫 글자를 대문자로 표기하는 것이 관례입니다.

`i18` `MarkDown` 의 제목을 인식할 수 있으며 대소문자를 구분하는 언어로 번역할 때 자동으로 첫 글자를 대문자로 표시합니다.

예를 들어 `为阅读体验而优化` `Optimized for Reading Experience` 로 변환됩니다.

### 중국어, 일본어, 한국어, 중국어의 영어 용어는 번역되지 않습니다.

중국, 일본, 한국의 문서에는 영어 용어가 많이 포함되어 있는 경우가 많습니다.

중국어, 일본어, 한국어의 기계번역은 이제 비영어권이 되었고, 다음 중국어 문장과 같이 용어를 함께 번역하는 경우가 많습니다.

`Falcon 得分超 Llama ？Hugging Face 排名引发争议`

Google이나 DeepL을 사용하는 경우 둘 다 원본을 유지해야 하는 영어 용어를 잘못 번역합니다(예: 일본어와 프랑스어 사용).

### 구글 번역

일본어로 번역됨 `ファルコンがラマを上回る？ハグ顔ランキングが論争を巻き起こす` :

![](//p.3ti.site/1720199391.avif)

프랑스어로 번역됨 `Le faucon surpasse le lama ? Le classement Hugging Face suscite la polémique` :

`Falcon` 은 `faucon` 로 변환되고 `Llama` `lama` 으로 변환됩니다. 고유명사이므로 번역하면 안 됩니다.

![](//p.3ti.site/1720199451.avif)

### DeepL 번역

일본어로 번역됨 `ファルコンがラマに勝利、ハグ顔ランキングが物議を醸す` :

![](//p.3ti.site/1720199550.avif)

DeepL 위의 내용을 프랑스어로 번역합니다(또한 고유명사를 다시 작성하고 홀수 `... ` 추가).

`Un faucon marque un point sur un lama... Le classement des visages étreints suscite la controverse. `

![](//p.3ti.site/1720199603.avif)

### i18n.site 번역

`i18` 의 번역은 중국어, 일본어, 한국어 문서에서 영어 용어를 인식하고 용어를 그대로 유지합니다.

예를 들어 위의 일본어 번역 결과는 다음과 같습니다.

`Falcon のスコアが Llama よりも高かったですか ? Hugging Face ランキングが論争を引き起こす`

프랑스어 번역은 다음과 같습니다.

`Falcon a obtenu un score supérieur à Llama ? Hugging Face Le classement suscite la controverse`

영어 단어와 중국어, 일본어, 한국어 텍스트 사이에 공백이 있거나 영어 길이가 1보다 큰 경우에만 해당 단어를 용어로 간주합니다.

예를 들어 `C罗` `Cristiano Ronaldo` 로 번역됩니다.

## `i18n.site` 이상의 언어와 결합하여 웹사이트 구축 가능

`i18` 다국어 웹사이트 구축 명령줄 도구 [`i18n.site`](/i18n.site) 에 통합되었습니다.

자세한 내용은 [`i18n.site`](/i18n.site) 문서를 참조하세요.

## 코드 오픈 소스

클라이언트는 완전히 오픈 소스이며, 서버 측 코드도 오픈 소스입니다 90 [소스 코드를 보려면 여기를 클릭하세요](/i18n.site/c/src) .

오픈소스 코드 개발 및 번역본 교정에 참여할 자원봉사자를 모집합니다.

관심이 있으시면 [→ 여기를 클릭하여 프로필을 작성한](https://ggl.link/i18n) 후 [메일링 리스트](https://groups.google.com/u/2/g/i18n-site) 에 가입하여 커뮤니케이션하세요.

## 계속 연락하다

<button onclick="mailsub()">제품 업데이트를 구독</button> 하고 <button onclick="webpush()">브라우저 푸시를 활성화하려면</button> 이 이메일을 클릭하세요. 제품 업데이트가 완료되면 알려드리겠습니다.

또한 / 의 소셜 계정을 팔로우하는 것을 환영 [i18n-site.bsky.social](https://bsky.app/profile/i18n-site.bsky.social) [X.COM: @i18nSite](https://x.com/i18nSite)