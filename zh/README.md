<h1 style="display:flex;justify-content:space-between">i18n.site ⋅ 国际化解决方案 <img src="//p.3ti.site/logo.svg" style="user-select:none;margin-top:-1px;width:42px"></h1>

命令行 Markdown 、 Yaml 翻译工具，帮您构建国际化的文档站，支持 [上百种语言](/i18/LANG_CODE)  …

<pre class="langli" style="display:flex;flex-wrap:wrap;background:transparent;border:1px solid #eee;font-size:12px;box-shadow:0 0 3px inset #eee;padding:12px 5px 4px 12px;justify-content:space-between;"><style>pre.langli i{font-weight:300;font-family:s;margin-right:2px;margin-bottom:8px;font-style:normal;color:#666;border-bottom:1px dashed #ccc;}</style><i>English</i><i>简体中文</i><i>Deutsch</i><i>Français</i><i>Español</i><i>Italiano</i><i>日本語</i><i>Polski</i><i>Português(Brasil)</i><i>Русский</i><i>Nederlands</i><i>Türkçe</i><i>Svenska</i><i>Čeština</i><i>Українська</i><i>Magyar</i><i>Indonesia</i><i>한국어</i><i>Română</i><i>Norsk</i><i>Slovenčina</i><i>Suomi</i><i>العربية</i><i>Català</i><i>Dansk</i><i>فارسی</i><i>Tiếng Việt</i><i>Lietuvių</i><i>Hrvatski</i><i>עברית</i><i>Slovenščina</i><i>српски језик</i><i>Esperanto</i><i>Ελληνικά</i><i>Eesti</i><i>Български</i><i>ไทย</i><i>Haitian Creole</i><i>Íslenska</i><i>नेपाली</i><i>తెలుగు</i><i>Latine</i><i>Galego</i><i>हिन्दी</i><i>Cebuano</i><i>Melayu</i><i>Euskara</i><i>Bosnian</i><i>Letzeburgesch</i><i>Latviešu</i><i>ქართული</i><i>Shqip</i><i>मराठी</i><i>Azərbaycan</i><i>Македонски</i><i>Wikang Tagalog</i><i>Cymraeg</i><i>বাংলা</i><i>தமிழ்</i><i>Basa Jawa</i><i>Basa Sunda</i><i>Беларуская</i><i>Kurdî(Navîn)</i><i>Afrikaans</i><i>Frysk</i><i>Toğikī</i><i>اردو</i><i>Kichwa</i><i>മലയാളം</i><i>Kiswahili</i><i>Gaeilge</i><i>Uzbek(Latin)</i><i>Te Reo Māori</i><i>Èdè Yorùbá</i><i>ಕನ್ನಡ</i><i>አማርኛ</i><i>Հայերեն</i><i>অসমীয়া</i><i>Aymar Aru</i><i>Bamanankan</i><i>Bhojpuri</i><i>正體中文</i><i>Corsu</i><i>ދިވެހިބަސް</i><i>Eʋegbe</i><i>Filipino</i><i>Guarani</i><i>ગુજરાતી</i><i>Hausa</i><i>Hawaiian</i><i>Hmong</i><i>Ásụ̀sụ́ Ìgbò</i><i>Iloko</i><i>Қазақ Тілі</i><i>ខ្មែរ</i><i>Kinyarwanda</i><i>سۆرانی</i><i>Кыргызча</i><i>ລາວ</i><i>Lingála</i><i>Ganda</i><i>Maithili</i><i>Malagasy</i><i>Malti</i><i>монгол</i><i>မြန်မာ</i><i>ChiCheŵa</i><i>ଓଡ଼ିଆ</i><i>Afaan Oromoo</i><i>پښتو</i><i>ਪੰਜਾਬੀ</i><i>Gagana Sāmoa</i><i>Sanskrit</i><i>Sesotho sa Leboa</i><i>Sesotho</i><i>chiShona</i><i>سنڌي</i><i>සිංහල</i><i>Soomaali</i><i>Татар</i><i>ትግር</i><i>Xitsonga</i><i>Türkmen Dili</i><i>Akan</i><i>isiXhosa</i><i>ייִדיש</i><i>Isi-Zulu</i></pre>

## 序言

网络消亡了物理空间的距离，可语言差异依然阻碍着人类团结。

虽然浏览器已经自带了翻译，但是搜索引擎依然无法跨语言查询。

社交媒体、电子邮件，大众习惯把目光焦距各自母语的信息源上。

信息爆炸，全球市场，为了争抢稀缺的注意力，**支持多语言，是基本功**。

即使是个人开源项目，想去影响更广泛的受众， 也应该一开始就做好国际化的技术选型。

## <a rel=id href="#project" id="project"></a> 项目简介

本站目前提供两个开源的命令行工具:

* [i18 : MarkDown 命令行翻译工具](/i18/feature)
* [i18n.site : 多语言静态站生成器](/i18n.site)

### <a rel=id href="#i18" id="i18"></a> i18 : MarkDown 命令行翻译工具

将`Markdown`、`YAML`翻译为多国语言的命令行工具 ( [源代码](https://github.com/i18n-site/rust/tree/main/i18) )。

能完美保持`Markdown`的格式。能识别文件修改，只翻译改动过的文件。

译文可编辑。

修改原文，再次机器翻译时，不会覆盖译文的人工修改(如果原文此段未修改)。

你可以用最熟悉的工具去编辑`Markdown`译文（但不能添加或删除段落），用最熟悉的方式去做版本控制。

可以为语言文件的创建一个代码库开源，借助`Pull Request`的流程，让全球用户都参与译文的持续优化。无缝衔接 [github](//github.com) 等开源社区。

> [!TIP]
> 我们认同 UNIX 的哲学 "一切都是文件" ，无需引入复杂笨重的企业级解决方案即可管理上百种语言的翻译。

[→ 使用指南，请阅读项目文档](/i18)。

## 质量最好的机器翻译

我们研发了新一代翻译技术，融合传统机器翻译模型和大语言模型的技术优势，让译文准确、流畅、优雅。

盲测表明，与同类服务相比，我们的翻译质量显著更好。

想要达到同样的质量，谷歌翻译和`ChatGPT`所需的的人工编辑量，分别是我们的`2.67`倍和`3.15`倍。

#### <a rel=id href="#price" id="price"></a> 极具竞争力的定价

|                                                                                   | 美元 / 百万字 |
| --------------------------------------------------------------------------------- | ------------- |
| [i18n.site](https://i18n.site)                                                    | 9             |
| [微软](https://azure.microsoft.com/pricing/details/cognitive-services/translator) | 10            |
| [亚马逊](https://aws.amazon.com/translate/pricing)                                | 15            |
| [谷歌](https://cloud.google.com/translate/pricing)                                | 20            |
| [DeepL](https://www.deepl.com/zh/pro#developer)                                  | 25            |

[➤ 点此授权自动关注 i18n.site 的 github 开源代码库](https://github.com/login/oauth/authorize?client_id=Ov23liuGAmK0plc9FgB3&scope=user:email,user:follow,public_repo), **可获赠金 $50**。

注：计费字符数 = 源文件的 [unicode 字符数](https://en.wikipedia.org/wiki/Unicode) × 译文的语种数

### i18n.site : 多语言静态站生成器

生成多语言静态站的命令行工具 ( [源代码](https://github.com/i18n-site/rust/tree/main/i18n-site) )。

纯静态, 为阅读体验而优化，集成了 [i18](#i18) 的翻译，是搭建项目文档站的不二选择。

底层前端框架采用全插件架构，易于二次开发，如有需要，可以整合后端功能。

本站即基于此框架开发，包含了用户、支付等功能([源码](/i18n.site/c/src))， 稍后将撰写详细的教程。

[→ 使用指南，请阅读项目文档](/i18n.site)。

## 保持联系

请 <button onclick="mailsub()">点此邮件订阅产品更新</button> 并 <button onclick="webpush()">开启浏览器推送</button>，我们将在产品更新时通知您。

也欢迎关注我们的社交账号 [X.COM: @i18nSite](https://x.com/i18nSite) / [i18n-site.bsky.social](https://bsky.app/profile/i18n-site.bsky.social)。

如果您遇到了问题，[→ 请在用户论坛发帖](https://groups.google.com/u/1/g/i18n)。

## 关于我们

> 他们说: 来吧，筑通天高塔，扬人族之威名。
>
> 耶和华看见了，曰: 人族同文同种，今此事成，将无不可为。
>
> 遂降临，让人类言语不通，分散各地。

<p style="text-align:right">── 圣经·创世记</p>

我们希望构建没有语言交流隔离的互联网。
我们希望全人类因共同的梦想走到一起来。

Markdown翻译和文档站只是开始。
同步内容发布到社交媒体；
支持双语显示的评论、聊天室；
可以支付悬赏的多语言工单系统；
国际化前端组件的贩卖市场；
我们想做的还有很多很多。

我们信仰开源热爱分享，
欢迎一起共创无国界的未来。

> [!NOTE]
> 我们期待与志同道合的你能在茫茫人海中彼此相遇。
> 我们正在寻找志愿者，参与开源代码的开发和翻译文本的校对。
> 如果您有兴趣，请先[→ 点此填写个人简介](https://ggl.link/i18n)，然后加入 [邮件列表](https://groups.google.com/u/2/g/i18n-site) 交流。
