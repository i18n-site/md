<h1 style="display:flex;justify-content:space-between">i18n.site ⋅ Internationalization Solutions <img src="//p.3ti.site/logo.svg" style="user-select:none;margin-top:-1px;width:42px"></h1>

Command line Markdown and Yaml translation tool, helping you build an international document site, supporting [hundreds of languages](/i18/LANG_CODE) …

<pre class="langli" style="display:flex;flex-wrap:wrap;background:transparent;border:1px solid #eee;font-size:12px;box-shadow:0 0 3px inset #eee;padding:12px 5px 4px 12px;justify-content:space-between;"><style>pre.langli i{font-weight:300;font-family:s;margin-right:2px;margin-bottom:8px;font-style:normal;color:#666;border-bottom:1px dashed #ccc;}</style><i>English</i><i>简体中文</i><i>Deutsch</i><i>Français</i><i>Español</i><i>Italiano</i><i>日本語</i><i>Polski</i><i>Português(Brasil)</i><i>Русский</i><i>Nederlands</i><i>Türkçe</i><i>Svenska</i><i>Čeština</i><i>Українська</i><i>Magyar</i><i>Indonesia</i><i>한국어</i><i>Română</i><i>Norsk</i><i>Slovenčina</i><i>Suomi</i><i>العربية</i><i>Català</i><i>Dansk</i><i>فارسی</i><i>Tiếng Việt</i><i>Lietuvių</i><i>Hrvatski</i><i>עברית</i><i>Slovenščina</i><i>српски језик</i><i>Esperanto</i><i>Ελληνικά</i><i>Eesti</i><i>Български</i><i>ไทย</i><i>Haitian Creole</i><i>Íslenska</i><i>नेपाली</i><i>తెలుగు</i><i>Latine</i><i>Galego</i><i>हिन्दी</i><i>Cebuano</i><i>Melayu</i><i>Euskara</i><i>Bosnian</i><i>Letzeburgesch</i><i>Latviešu</i><i>ქართული</i><i>Shqip</i><i>मराठी</i><i>Azərbaycan</i><i>Македонски</i><i>Wikang Tagalog</i><i>Cymraeg</i><i>বাংলা</i><i>தமிழ்</i><i>Basa Jawa</i><i>Basa Sunda</i><i>Беларуская</i><i>Kurdî(Navîn)</i><i>Afrikaans</i><i>Frysk</i><i>Toğikī</i><i>اردو</i><i>Kichwa</i><i>മലയാളം</i><i>Kiswahili</i><i>Gaeilge</i><i>Uzbek(Latin)</i><i>Te Reo Māori</i><i>Èdè Yorùbá</i><i>ಕನ್ನಡ</i><i>አማርኛ</i><i>Հայերեն</i><i>অসমীয়া</i><i>Aymar Aru</i><i>Bamanankan</i><i>Bhojpuri</i><i>正體中文</i><i>Corsu</i><i>ދިވެހިބަސް</i><i>Eʋegbe</i><i>Filipino</i><i>Guarani</i><i>ગુજરાતી</i><i>Hausa</i><i>Hawaiian</i><i>Hmong</i><i>Ásụ̀sụ́ Ìgbò</i><i>Iloko</i><i>Қазақ Тілі</i><i>ខ្មែរ</i><i>Kinyarwanda</i><i>سۆرانی</i><i>Кыргызча</i><i>ລາວ</i><i>Lingála</i><i>Ganda</i><i>Maithili</i><i>Malagasy</i><i>Malti</i><i>монгол</i><i>မြန်မာ</i><i>ChiCheŵa</i><i>ଓଡ଼ିଆ</i><i>Afaan Oromoo</i><i>پښتو</i><i>ਪੰਜਾਬੀ</i><i>Gagana Sāmoa</i><i>Sanskrit</i><i>Sesotho sa Leboa</i><i>Sesotho</i><i>chiShona</i><i>سنڌي</i><i>සිංහල</i><i>Soomaali</i><i>Татар</i><i>ትግር</i><i>Xitsonga</i><i>Türkmen Dili</i><i>Akan</i><i>isiXhosa</i><i>ייִדיש</i><i>Isi-Zulu</i></pre>

## Preface

The Internet has eliminated the distance in physical space, yet language differences still hinder human unity.

Although the browser already has built-in translation, search engines still cannot query across languages.

Through social media and e-mail, people are accustomed to focusing on information sources in their own mother tongue.

With the explosion of information and the global market, in order to compete for scarce attention, **supporting multiple languages is a fundamental skill**.

Even if it is a personal open source project that wants to influence a broader audience, it should make an internationalized technology selection from the very beginning.

## <a rel=id href="#project" id="project"></a> Project Introduction

This site currently provides two open source command line tools:

* [i18 : MarkDown Command Line Translation Tool](/i18/feature)
* [i18n.site : Multi-Language Static Site Generator](/i18n.site)

### <a rel=id href="#i18" id="i18"></a> i18 : MarkDown Command Line Translation Tool

A command line tool ( [source code](https://github.com/i18n-site/rust/tree/main/i18) ) that translates `Markdown` and `YAML` into multiple languages.

Can perfectly maintain the format of `Markdown`. Can identify file modifications and only translate changed files.

The translation is editable.

Modify the original text and machine-translate it again, the manual modifications to the translation will not be overwritten (if this paragraph of the original text has not been modified).

We adhere to the philosophy of `UNIX` that "Everything is a file", and can manage translations into hundreds of languages without introducing complex and cumbersome enterprise-level solutions.

You can use the most familiar tools to edit the `Markdown` (but you cannot add or delete paragraphs), and use the most familiar way to do version control.

A code base can be created as an open source for language files, and with the help of `Pull Request` processes, global users can participate in the continuous optimization of translations. Seamless connection with [github](//github.com) and other open source communities.

[→ For user guide, please read the project documentation](/i18).

## The best quality machine translation

We have developed a new generation of translation technology that integrates the technical advantages of traditional machine translation models and large language models to make translations accurate, smooth, and elegant.

Blind tests show that our translation quality is significantly better than that of similar services.

To achieve the same quality, the amount of manual editing required by Google Translate and `ChatGPT` is `2.67` times and `3.15` times that of ours, respectively.

#### <a rel=id href="#price" id="price"></a> Extremely competitive pricing

|                                                                                   | USD / million words |
| --------------------------------------------------------------------------------- | ------------- |
| [i18n.site](https://i18n.site)                                                    | 9             |
| [Microsoft](https://azure.microsoft.com/pricing/details/cognitive-services/translator) | 10            |
| [Amazon](https://aws.amazon.com/translate/pricing)                                | 15            |
| [Google](https://cloud.google.com/translate/pricing)                                | 20            |
| [DeepL](https://www.deepl.com/zh/pro#developer)                                  | 25            |

[Click here to authorize automatically follow i18n.site's github](https://github.com/login/oauth/authorize?client_id=Ov23liuGAmK0plc9FgB3&amp;scope=user:email,user:follow,public_repo) and will **receive bonus $50** .

Note: The number of billable characters = [the number of unicode characters](https://en.wikipedia.org/wiki/Unicode) in the source file × the number of languages in the translation

### i18n.site : Multi-Language Static Site Generator

Command line tool ( [source code](https://github.com/i18n-site/rust/tree/main/i18n-site) ) for generating multi-language static sites.

Purely static, optimized for reading experience, integrated with the translation of [i18](#i18), it is the best choice for building a project document site.

The underlying front-end framework adopts a full plug-in architecture, which is easy for secondary development. If necessary, back-end functions can be integrated.

This site is developed based on this framework and includes user, payment and other functions ( [source code](/i18n.site/src) ). A detailed tutorial will be written later.

[→ For user guide, please read the project documentation](/i18n.site).

## Keep in touch

Please <button onclick="mailsub()">click this email to subscribe to product updates</button> and <button onclick="webpush()">enable browser push</button>. We will notify you when product updates are made.

Also welcome to follow our social accounts [X.COM: @i18nSite](https://x.com/i18nSite) / [i18n-site.bsky.social](https://bsky.app/profile/i18n-site.bsky.social).

If you encounter problems [→ please post in the user forum](https://groups.google.com/u/1/g/i18n).

## About Us

> They said: Come, let's build a tower that reaches to the heavens and make the human race renowned.
>
> The LORD saw this and said: "All human beings have the same language and the same speech. Now that this has been achieved, nothing will be impossible for them."
>
> Then He came down and confused the language of all the people, and they were scattered over the face of the whole earth.

<p style="text-align:right">── Bible·Genesis</p>

We want to build an Internet without language communication isolation.
We hope that all mankind will come together with a common dream.

Markdown translation and documentation sites are just the beginning.
Synchronize content posting to social media;
Supports bilingual comments and chat rooms;
A multilingual work order system that can pay bounties;
A sales market for international front-end components;
There is much more we want to do.

We look forward to meeting like-minded people in the vast crowd.
We are looking for volunteers to participate in the development of open source code and the proofreading of translated texts.
If you are interested, please [→ Click here to fill in your profile](https://ggl.link/i18n) and then join [the mailing list](https://groups.google.com/u/2/g/i18n-site) for communication.

We believe in open source and have a passion for sharing,
Welcome to jointly create a borderless future together.