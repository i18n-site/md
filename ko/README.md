<h1 style="display:flex;justify-content:space-between">i18n.site 국제 솔루션<img src="//p.3ti.site/logo.svg" style="user-select:none;margin-top:-1px;width:42px"></h1>

명령줄 Markdown Yaml 도구는 [수백 가지 언어를](/i18/LANG_CODE) 지원하는 국제 문서 사이트를 구축하는 데 도움이 됩니다.

<pre class="langli" style="display:flex;flex-wrap:wrap;background:transparent;border:1px solid #eee;font-size:12px;box-shadow:0 0 3px inset #eee;padding:12px 5px 4px 12px;justify-content:space-between;"><style>pre.langli i{font-weight:300;font-family:s;margin-right:2px;margin-bottom:8px;font-style:normal;color:#666;border-bottom:1px dashed #ccc;}</style><i>English</i><i>简体中文</i><i>Deutsch</i><i>Français</i><i>Español</i><i>Italiano</i><i>日本語</i><i>Polski</i><i>Português(Brasil)</i><i>Русский</i><i>Nederlands</i><i>Türkçe</i><i>Svenska</i><i>Čeština</i><i>Українська</i><i>Magyar</i><i>Indonesia</i><i>한국어</i><i>Română</i><i>Norsk</i><i>Slovenčina</i><i>Suomi</i><i>العربية</i><i>Català</i><i>Dansk</i><i>فارسی</i><i>Tiếng Việt</i><i>Lietuvių</i><i>Hrvatski</i><i>עברית</i><i>Slovenščina</i><i>српски језик</i><i>Esperanto</i><i>Ελληνικά</i><i>Eesti</i><i>Български</i><i>ไทย</i><i>Haitian Creole</i><i>Íslenska</i><i>नेपाली</i><i>తెలుగు</i><i>Latine</i><i>Galego</i><i>हिन्दी</i><i>Cebuano</i><i>Melayu</i><i>Euskara</i><i>Bosnian</i><i>Letzeburgesch</i><i>Latviešu</i><i>ქართული</i><i>Shqip</i><i>मराठी</i><i>Azərbaycan</i><i>Македонски</i><i>Wikang Tagalog</i><i>Cymraeg</i><i>বাংলা</i><i>தமிழ்</i><i>Basa Jawa</i><i>Basa Sunda</i><i>Беларуская</i><i>Kurdî(Navîn)</i><i>Afrikaans</i><i>Frysk</i><i>Toğikī</i><i>اردو</i><i>Kichwa</i><i>മലയാളം</i><i>Kiswahili</i><i>Gaeilge</i><i>Uzbek(Latin)</i><i>Te Reo Māori</i><i>Èdè Yorùbá</i><i>ಕನ್ನಡ</i><i>አማርኛ</i><i>Հայերեն</i><i>অসমীয়া</i><i>Aymar Aru</i><i>Bamanankan</i><i>Bhojpuri</i><i>正體中文</i><i>Corsu</i><i>ދިވެހިބަސް</i><i>Eʋegbe</i><i>Filipino</i><i>Guarani</i><i>ગુજરાતી</i><i>Hausa</i><i>Hawaiian</i><i>Hmong</i><i>Ásụ̀sụ́ Ìgbò</i><i>Iloko</i><i>Қазақ Тілі</i><i>ខ្មែរ</i><i>Kinyarwanda</i><i>سۆرانی</i><i>Кыргызча</i><i>ລາວ</i><i>Lingála</i><i>Ganda</i><i>Maithili</i><i>Malagasy</i><i>Malti</i><i>монгол</i><i>မြန်မာ</i><i>ChiCheŵa</i><i>ଓଡ଼ିଆ</i><i>Afaan Oromoo</i><i>پښتو</i><i>ਪੰਜਾਬੀ</i><i>Gagana Sāmoa</i><i>Sanskrit</i><i>Sesotho sa Leboa</i><i>Sesotho</i><i>chiShona</i><i>سنڌي</i><i>සිංහල</i><i>Soomaali</i><i>Татар</i><i>ትግር</i><i>Xitsonga</i><i>Türkmen Dili</i><i>Akan</i><i>isiXhosa</i><i>ייִדיש</i><i>Isi-Zulu</i></pre>

## 머리말

인터넷은 물리적 공간의 거리를 없앴지만, 언어의 차이는 여전히 인간의 화합을 방해합니다.

브라우저에 번역 기능이 내장되어 있지만 검색 엔진은 여전히 여러 언어로 쿼리할 수 없습니다.

소셜 미디어와 이메일을 통해 사람들은 자신의 모국어로 된 정보 소스에 집중하는 데 익숙합니다.

정보의 폭발과 글로벌 시장에서 부족한 관심을 두고 경쟁하기 위해서는 **다국어를 지원하는 것이 기본 기술이다** .

더 많은 청중에게 영향을 미치고 싶은 개인 오픈소스 프로젝트라 할지라도 처음부터 국제적인 기술을 선택해야 합니다.

## <a rel=id href="#project" id="project"></a> 프로젝트 소개

이 사이트는 현재 두 가지 오픈 소스 명령줄 도구를 제공합니다.

* [i18 : MarkDown 줄 번역 도구](/i18/feature)
* [i18n.site : 다국어 정적 웹사이트 생성기](/i18n.site)

### <a rel=id href="#i18" id="i18"></a> i18: MarkDown 명령줄 번역 도구

`Markdown` 과 `YAML` 여러 언어로 번역하는 명령줄 도구( [소스 코드](https://github.com/i18n-site/rust/tree/main/i18) )입니다.

`Markdown` 의 형식을 완벽하게 유지할 수 있습니다. 파일 수정 사항을 식별하고 변경된 파일만 번역할 수 있습니다.

번역은 편집 가능합니다.

원본 텍스트를 수정하고 다시 기계 번역하면 번역에 대한 수동 수정 사항이 덮어쓰여지지 않습니다(원문의 이 단락이 수정되지 않은 경우).

가장 친숙한 도구를 사용하여 `Markdown` 을 편집할 수 있으며(단락을 추가하거나 삭제할 수는 없음) 버전 제어를 수행하는 데 가장 친숙한 방법을 사용할 수 있습니다.

코드 베이스는 언어 파일의 오픈 소스로 생성될 수 있으며, `Pull Request` 프로세스의 도움으로 글로벌 사용자는 지속적인 번역 최적화에 참여할 수 있습니다. 원활한 연결 [github](//github.com) 그리고 기타 오픈 소스 커뮤니티.

> [!TIP]
> 우리는 "모든 것이 파일이다"라는 UNIX 철학을 수용하며 복잡하고 번거로운 엔터프라이즈 솔루션을 도입하지 않고도 수백 가지 언어로의 번역을 관리할 수 있습니다.

[→ 사용 지침은 프로젝트 문서를 읽어보세요](/i18) .

## 최고 품질의 기계 번역

우리는 전통적인 기계 번역 모델과 대규모 언어 모델의 기술적 장점을 결합하여 번역을 정확하고 매끄럽고 우아하게 만드는 차세대 번역 기술을 개발했습니다.

블라인드 테스트를 통해 당사의 번역 품질이 유사한 서비스에 비해 훨씬 더 나은 것으로 나타났습니다.

동일한 품질을 달성하기 위해 Google 번역과 `ChatGPT` 에서 요구하는 수동 편집의 양은 각각 당사의 `2.67` 배와 `3.15` 배입니다.

#### <a rel=id href="#price" id="price"></a> 매우 경쟁력 있는 가격

|                                                                                   | USD/백만 단어 |
| --------------------------------------------------------------------------------- | ------------- |
| [i18n.site](https://i18n.site)                                                    | 9             |
| [마이크로소프트](https://azure.microsoft.com/pricing/details/cognitive-services/translator) | 10            |
| [아마존](https://aws.amazon.com/translate/pricing)                                | 15            |
| [Google](https://cloud.google.com/translate/pricing)                                | 20            |
| [DeepL](https://www.deepl.com/zh/pro#developer)                                  | 25            |

[➤ 의 github 라이브러리를 승인하고 자동 i18n.site 팔로우](https://github.com/login/oauth/authorize?client_id=Ov23liuGAmK0plc9FgB3&amp;scope=user:email,user:follow,public_repo) 하고 **보너스 $50 받으려면** 여기를 클릭하세요.

참고: 청구 가능한 문자 수 = 원본 파일의 [unicode 수](https://en.wikipedia.org/wiki/Unicode) × 번역 언어 수

### i18n.site: 다국어 정적 사이트 생성기

다국어 정적 사이트를 생성하는 명령줄 도구( [소스 코드](https://github.com/i18n-site/rust/tree/main/i18n-site) )입니다.

순전히 정적이고 읽기 경험에 최적화되었으며 [i18](#i18) 번역과 통합되어 프로젝트 문서 사이트 구축을 위한 최고의 선택입니다.

기본 프런트엔드 프레임워크는 전체 플러그인 아키텍처를 채택하므로 필요한 경우 백엔드 기능을 통합할 수 있습니다.

이 웹사이트는 이 프레임워크를 기반으로 개발되었으며 사용자, 결제 및 기타 기능( [소스 코드](/i18n.site/c/src) )을 포함합니다. 자세한 튜토리얼은 나중에 작성됩니다.

[→ 사용 지침은 프로젝트 문서를 읽어보세요](/i18n.site) .

## 계속 연락하다

<button onclick="mailsub()">제품 업데이트를 구독</button> 하고 <button onclick="webpush()">브라우저 푸시를 활성화하려면</button> 이 이메일을 클릭하세요. 제품 업데이트가 완료되면 알려드리겠습니다.

또한 / 의 소셜 계정을 팔로우하는 것을 환영 [i18n-site.bsky.social](https://bsky.app/profile/i18n-site.bsky.social) [X.COM: @i18nSite](https://x.com/i18nSite)

문제가 발생하면 [→ 사용자 포럼에 게시하세요](https://groups.google.com/u/1/g/i18n) .

## 회사 소개

> 그들은 “와서 하늘에 닿는 탑을 쌓아 인류를 유명하게 하라”고 말했습니다.
>
> 여호와께서 이것을 보시고 이르시되 사람의 언어와 종족은 다 같으니 이제 이 일이 이루어졌으니 모든 일이 다 이루리라.
>
> 그러다가 인류가 서로의 언어를 이해할 수 없게 되어 여러 곳으로 흩어지게 되었습니다.

<p style="text-align:right">──성경·창세기</p>

우리는 언어소통이 분리되지 않은 인터넷을 구축하고 싶습니다.
인류 모두가 공통의 꿈을 가지고 함께 하길 바랍니다.

마크다운 번역 및 문서 사이트는 시작에 불과합니다.
콘텐츠 게시를 소셜 미디어에 동기화합니다.
이중 언어 댓글 및 채팅방을 지원합니다.
현상금을 지불할 수 있는 다국어 티켓 시스템.
국제 프론트엔드 구성 요소 판매 시장
우리가 하고 싶은 일이 훨씬 더 많습니다.

우리는 오픈 소스와 사랑의 공유를 믿습니다.
국경 없는 미래를 함께 만들어가는 것을 환영합니다.

> [!NOTE]
> 드넓은 인파의 바다 속에서 같은 생각을 가진 사람들의 만남을 기대합니다.
> 오픈소스 코드 개발 및 번역본 교정에 참여할 자원봉사자를 모집합니다.
> 관심이 있으시면 [→ 여기를 클릭하여 프로필을 작성한](https://ggl.link/i18n) 후 [메일링 리스트](https://groups.google.com/u/2/g/i18n-site) 에 가입하여 커뮤니케이션하세요.