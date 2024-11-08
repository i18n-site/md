<h1 style="display:flex;justify-content:space-between">i18n.site ⋅ 國際化解決方案 <img src="//p.3ti.site/logo.svg" style="user-select:none;margin-top:-1px;width:42px"></h1>

命令行 Markdown 、 Yaml 翻譯工具，幫您構建國際化的文檔站，支持 [上百種語言](/i18/LANG_CODE)  …

<pre class="langli" style="display:flex;flex-wrap:wrap;background:transparent;border:1px solid #eee;font-size:12px;box-shadow:0 0 3px inset #eee;padding:12px 5px 4px 12px;justify-content:space-between;"><style>pre.langli i{font-weight:300;font-family:s;margin-right:2px;margin-bottom:8px;font-style:normal;color:#666;border-bottom:1px dashed #ccc;}</style><i>English</i><i>簡體中文</i><i>Deutsch</i><i>Français</i><i>Español</i><i>Italiano</i><i>日本語</i><i>Polski</i><i>Português(Brasil)</i><i>Русский</i><i>Nederlands</i><i>Türkçe</i><i>Svenska</i><i>Čeština</i><i>Українська</i><i>Magyar</i><i>Indonesia</i><i>한국어</i><i>Română</i><i>Norsk</i><i>Slovenčina</i><i>Suomi</i><i>العربية</i><i>Català</i><i>Dansk</i><i>فارسی</i><i>Tiếng Việt</i><i>Lietuvių</i><i>Hrvatski</i><i>עברית</i><i>Slovenščina</i><i>српски језик</i><i>Esperanto</i><i>Ελληνικά</i><i>Eesti</i><i>Български</i><i>ไทย</i><i>Haitian Creole</i><i>Íslenska</i><i>नेपाली</i><i>తెలుగు</i><i>Latine</i><i>Galego</i><i>हिन्दी</i><i>Cebuano</i><i>Melayu</i><i>Euskara</i><i>Bosnian</i><i>Letzeburgesch</i><i>Latviešu</i><i>ქართული</i><i>Shqip</i><i>मराठी</i><i>Azərbaycan</i><i>Македонски</i><i>Wikang Tagalog</i><i>Cymraeg</i><i>বাংলা</i><i>தமிழ்</i><i>Basa Jawa</i><i>Basa Sunda</i><i>Беларуская</i><i>Kurdî(Navîn)</i><i>Afrikaans</i><i>Frysk</i><i>Toğikī</i><i>اردو</i><i>Kichwa</i><i>മലയാളം</i><i>Kiswahili</i><i>Gaeilge</i><i>Uzbek(Latin)</i><i>Te Reo Māori</i><i>Èdè Yorùbá</i><i>ಕನ್ನಡ</i><i>አማርኛ</i><i>Հայերեն</i><i>অসমীয়া</i><i>Aymar Aru</i><i>Bamanankan</i><i>Bhojpuri</i><i>正體中文</i><i>Corsu</i><i>ދިވެހިބަސް</i><i>Eʋegbe</i><i>Filipino</i><i>Guarani</i><i>ગુજરાતી</i><i>Hausa</i><i>Hawaiian</i><i>Hmong</i><i>Ásụ̀sụ́ Ìgbò</i><i>Iloko</i><i>Қазақ Тілі</i><i>ខ្មែរ</i><i>Kinyarwanda</i><i>سۆرانی</i><i>Кыргызча</i><i>ລາວ</i><i>Lingála</i><i>Ganda</i><i>Maithili</i><i>Malagasy</i><i>Malti</i><i>монгол</i><i>မြန်မာ</i><i>ChiCheŵa</i><i>ଓଡ଼ିଆ</i><i>Afaan Oromoo</i><i>پښتو</i><i>ਪੰਜਾਬੀ</i><i>Gagana Sāmoa</i><i>Sanskrit</i><i>Sesotho sa Leboa</i><i>Sesotho</i><i>chiShona</i><i>سنڌي</i><i>සිංහල</i><i>Soomaali</i><i>Татар</i><i>ትግር</i><i>Xitsonga</i><i>Türkmen Dili</i><i>Akan</i><i>isiXhosa</i><i>ייִדיש</i><i>Isi-Zulu</i></pre>

## 序言

網絡消亡了物理空間的距離，可語言差異依然阻礙着人類團結。

雖然瀏覽器已經自帶了翻譯，但是搜索引擎依然無法跨語言查詢。

社交媒體、電子郵件，大眾習慣把目光焦距各自母語的信息源上。

信息爆炸，全球市場，為了爭搶稀缺的注意力，**支持多語言，是基本功**。

即使是個人開源項目，想去影響更廣泛的受眾， 也應該一開始就做好國際化的技術選型。

## <a rel=id href="#project" id="project"></a> 項目簡介

本站目前提供兩個開源的命令行工具:

* [i18 : MarkDown 命令行翻譯工具](/i18/feature)
* [i18n.site : 多語言靜態站生成器](/i18n.site)

### <a rel=id href="#i18" id="i18"></a> i18 : MarkDown 命令行翻譯工具

將`Markdown`、`YAML`翻譯為多國語言的命令行工具 ( [源代碼](https://github.com/i18n-site/rust/tree/main/i18) )。

能完美保持`Markdown`的格式。能識别文件修改，只翻譯改動過的文件。

譯文可編輯。

修改原文，再次機器翻譯時，不會覆蓋譯文的人工修改(如果原文此段未修改)。

你可以用最熟悉的工具去編輯`Markdown`譯文（但不能添加或刪除段落），用最熟悉的方式去做版本控制。

可以為語言文件的創建一個代碼庫開源，借助`Pull Request`的流程，讓全球用戶都參與譯文的持續優化。無縫衔接 [github](//github.com) 等開源社區。

> [!TIP]
> 我們認同 UNIX 的哲學 "一切都是文件" ，無需引入复雜笨重的企業級解決方案即可管理上百種語言的翻譯。

[→ 使用指南，請閱讀項目文檔](/i18)。

## 質量最好的機器翻譯

我們研发了新一代翻譯技術，融合傳統機器翻譯模型和大語言模型的技術優勢，讓譯文准確、流暢、優雅。

盲測表明，與同類服務相比，我們的翻譯質量顯著更好。

想要達到同樣的質量，谷歌翻譯和`ChatGPT`所需的的人工編輯量，分别是我們的`2.67`倍和`3.15`倍。

#### <a rel=id href="#price" id="price"></a> 極具競爭力的定價

|                                                                                   | 美元 / 百萬字 |
| --------------------------------------------------------------------------------- | ------------- |
| [i18n.site](https://i18n.site)                                                    | 9             |
| [微軟](https://azure.microsoft.com/pricing/details/cognitive-services/translator) | 10            |
| [亞馬遜](https://aws.amazon.com/translate/pricing)                                | 15            |
| [谷歌](https://cloud.google.com/translate/pricing)                                | 20            |
| [DeepL](https://www.deepl.com/zh/pro#developer)                                  | 25            |

[➤ 點此授權自動關注 i18n.site 的 github 開源代碼庫](https://github.com/login/oauth/authorize?client_id=Ov23liuGAmK0plc9FgB3&scope=user:email,user:follow,public_repo), **可获贈金 $50**。

注：計費字符數 = 源文件的 [unicode 字符數](https://en.wikipedia.org/wiki/Unicode) × 譯文的語種數

### i18n.site : 多語言靜態站生成器

生成多語言靜態站的命令行工具 ( [源代碼](https://github.com/i18n-site/rust/tree/main/i18n-site) )。

純靜態, 為閱讀體驗而優化，集成了 [i18](#i18) 的翻譯，是搭建項目文檔站的不二選擇。

底層前端框架采用全插件架構，易于二次開发，如有需要，可以整合后端功能。

本站即基于此框架開发，包含了用戶、支付等功能([源碼](/i18n.site/c/src))， 稍后將撰寫詳細的教程。

[→ 使用指南，請閱讀項目文檔](/i18n.site)。

## 保持聯系

請 <button onclick="mailsub()">點此郵件訂閱產品更新</button> 并 <button onclick="webpush()">開啟瀏覽器推送</button>，我們將在產品更新時通知您。

也歡迎關注我們的社交賬號 [X.COM: @i18nSite](https://x.com/i18nSite) / [i18n-site.bsky.social](https://bsky.app/profile/i18n-site.bsky.social)。

如果您遇到了問題，[→ 請在用戶論坛发帖](https://groups.google.com/u/1/g/i18n)。

## 關于我們

> 他們說: 來吧，築通天高塔，揚人族之威名。
>
> 耶和華看見了，曰: 人族同文同種，今此事成，將無不可為。
>
> 遂降臨，讓人類言語不通，分散各地。

<p style="text-align:right">── 聖經·創世記</p>

我們希望構建沒有語言交流隔離的互聯網。
我們希望全人類因共同的夢想走到一起來。

Markdown翻譯和文檔站只是開始。
同步內容发布到社交媒體；
支持雙語顯示的評論、聊天室；
可以支付懸賞的多語言工單系統；
國際化前端組件的販賣市場；
我們想做的還有很多很多。

我們信仰開源熱愛分享，
歡迎一起共創無國界的未來。

> [!NOTE]
> 我們期待與志同道合的你能在茫茫人海中彼此相遇。
> 我們正在尋找志愿者，參與開源代碼的開发和翻譯文本的校對。
> 如果您有興趣，請先[→ 點此填寫個人簡介](https://ggl.link/i18n)，然后加入 [郵件列表](https://groups.google.com/u/2/g/i18n-site) 交流。