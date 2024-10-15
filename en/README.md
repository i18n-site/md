<h1 style="display:flex;justify-content:space-between">i18n.site ⋅ Internationalization Solutions <img src="//p.3ti.site/logo.svg" style="user-select:none;margin-top:-1px;width:42px"></h1>

The command-line Markdown and Yaml translation tool helps you build an internationalized documentation site, supporting [over a hundred languages](/i18/LANG_CODE) ..

<pre class="langli" style="display:flex;flex-wrap:wrap;background:transparent;border:1px solid #eee;font-size:12px;box-shadow:0 0 3px inset #eee;padding:12px 5px 4px 12px;justify-content:space-between;"><style>pre.langli i{font-weight:300;font-family:s;margin-right:2px;margin-bottom:8px;font-style:normal;color:#666;border-bottom:1px dashed #ccc;}</style><i>English</i><i>简体中文</i><i>Deutsch</i><i>Français</i><i>Español</i><i>Italiano</i><i>日本語</i><i>Polski</i><i>Português(Brasil)</i><i>Русский</i><i>Nederlands</i><i>Türkçe</i><i>Svenska</i><i>Čeština</i><i>Українська</i><i>Magyar</i><i>Indonesia</i><i>한국어</i><i>Română</i><i>Norsk</i><i>Slovenčina</i><i>Suomi</i><i>العربية</i><i>Català</i><i>Dansk</i><i>فارسی</i><i>Tiếng Việt</i><i>Lietuvių</i><i>Hrvatski</i><i>עברית</i><i>Slovenščina</i><i>српски језик</i><i>Esperanto</i><i>Ελληνικά</i><i>Eesti</i><i>Български</i><i>ไทย</i><i>Haitian Creole</i><i>Íslenska</i><i>नेपाली</i><i>తెలుగు</i><i>Latine</i><i>Galego</i><i>हिन्दी</i><i>Cebuano</i><i>Melayu</i><i>Euskara</i><i>Bosnian</i><i>Letzeburgesch</i><i>Latviešu</i><i>ქართული</i><i>Shqip</i><i>मराठी</i><i>Azərbaycan</i><i>Македонски</i><i>Wikang Tagalog</i><i>Cymraeg</i><i>বাংলা</i><i>தமிழ்</i><i>Basa Jawa</i><i>Basa Sunda</i><i>Беларуская</i><i>Kurdî(Navîn)</i><i>Afrikaans</i><i>Frysk</i><i>Toğikī</i><i>اردو</i><i>Kichwa</i><i>മലയാളം</i><i>Kiswahili</i><i>Gaeilge</i><i>Uzbek(Latin)</i><i>Te Reo Māori</i><i>Èdè Yorùbá</i><i>ಕನ್ನಡ</i><i>አማርኛ</i><i>Հայերեն</i><i>অসমীয়া</i><i>Aymar Aru</i><i>Bamanankan</i><i>Bhojpuri</i><i>正體中文</i><i>Corsu</i><i>ދިވެހިބަސް</i><i>Eʋegbe</i><i>Filipino</i><i>Guarani</i><i>ગુજરાતી</i><i>Hausa</i><i>Hawaiian</i><i>Hmong</i><i>Ásụ̀sụ́ Ìgbò</i><i>Iloko</i><i>Қазақ Тілі</i><i>ខ្មែរ</i><i>Kinyarwanda</i><i>سۆرانی</i><i>Кыргызча</i><i>ລາວ</i><i>Lingála</i><i>Ganda</i><i>Maithili</i><i>Malagasy</i><i>Malti</i><i>монгол</i><i>မြန်မာ</i><i>ChiCheŵa</i><i>ଓଡ଼ିଆ</i><i>Afaan Oromoo</i><i>پښتو</i><i>ਪੰਜਾਬੀ</i><i>Gagana Sāmoa</i><i>Sanskrit</i><i>Sesotho sa Leboa</i><i>Sesotho</i><i>chiShona</i><i>سنڌي</i><i>සිංහල</i><i>Soomaali</i><i>Татар</i><i>ትግር</i><i>Xitsonga</i><i>Türkmen Dili</i><i>Akan</i><i>isiXhosa</i><i>ייִדיש</i><i>Isi-Zulu</i></pre>

## Preface

The internet has eliminated the distance in physical space, yet language differences still hinder human unity.

Although browsers come with built-in translation features, search engines still cannot perform cross-language queries.

Social media, email—people are accustomed to focusing on information sources in their native languages.

In an era of information overload and the global market, to capture scarce attention, **supporting multiple languages is fundamental**.

Even for personal open-source projects aiming to reach a broader audience, international technology selection should be considered from the outset.

## <a rel=id href="#project" id="project"></a> Project Introduction

This site currently offers two open-source command-line tools:

* [i18: MarkDown Command Line Translation Tool](/i18/feature)
* [i18n.site: Multi-Language Static Site Generator](/i18n.site)

### <a rel=id href="#i18" id="i18"></a> i18: MarkDown Command Line Translation Tool

Translates `Markdown` and `YAML` into multiple languages—a command-line tool ([source code](https://github.com/i18n-site/rust/tree/main/i18)).

Preserves the `Markdown` format perfectly. Identifies file changes and translates only modified files.

Translations are editable.

When the original text is modified and machine-translated again, manual modifications to the translation will not be overwritten (if the original text has not been modified).

We adhere to the `UNIX` philosophy: "Everything is a file," eliminating the need for complex, bulky enterprise solutions to manage translations in hundreds of languages.

You can edit `Markdown` translations using your favorite tools (without adding or deleting paragraphs) and employ familiar methods for version control.

You can create an open-source code repository for language files, using the `Pull Request` process to involve global users in the continuous improvement of translations. Seamlessly integrated with [GitHub](//github.com) and other open-source communities.

[→ For the user guide, please refer to the project documentation](/i18).

## Offers the best machine translation quality

We have developed a new generation of translation technology that combines the advantages of traditional machine translation models and large language models, resulting in accurate, smooth, and elegant translations.

Blind tests show that our translation quality significantly surpasses that of similar services.

To achieve the same quality, the amount of manual editing required by Google Translate and `ChatGPT` is `2.67` times and `3.15` times that of ours respectively.

#### <a rel=id href="#price" id="price"></a> Competitive pricing at USD per million words

|                                                                                   | USD/million words |
| --------------------------------------------------------------------------------- | ------------- |
| [i18n.site](https://i18n.site)                                                    | 9             |
| [Amazon](https://azure.microsoft.com/pricing/details/cognitive-services/translator) | 10            |
| [Google](https://aws.amazon.com/translate/pricing)                                | 15            |
| 6	[Google](https://cloud.google.com/translate/pricing)                                | 20            |
| [DeepL](https://www.deepl.com/zh/pro#developer)                                  | 25            |

[Click here to authorize automatically follow i18n.site's github](https://github.com/login/oauth/authorize?client_id=Ov23liuGAmK0plc9FgB3&amp;scope=user:email,user:follow,public_repo) and will **receive bonus $50** .

Note: Billable characters = [the number of Unicode characters](https://en.wikipedia.org/wiki/Unicode) in the source file × the number of languages in the translation

### i18n.site: Multi-Language Static Site Generator

Generates multi-language static sites via command line ([source code](https://github.com/i18n-site/rust/tree/main/i18n-site)).

Purely static, optimized for reading experience, integrated with [i18](#i18) translation capabilities, making it the ideal choice for building project documentation sites.

Features a fully modular front-end framework, easy for secondary development, and can integrate back-end functions if needed.

This site is developed using this framework, incorporating features like user and payment systems ([source code](/i18n.site/src)), with detailed tutorials to follow.

[→ For the user guide, please refer to the project documentation](/i18n.site).

## Stay in touch

Please <button onclick="mailsub()">subscribe to product updates via email</button> and <button onclick="webpush()">enable browser notifications</button>. We will notify you of product updates.

Follow our social accounts [X.COM: @i18nSite](https://x.com/i18nSite) / [i18n-site.bsky.social](https://bsky.app/profile/i18n-site.bsky.social).

If you encounter any issues, [→ please post in the user forum](https://groups.google.com/u/1/g/i18n).

## About Us

> They said, "Come, let us build a tower that reaches the sky and make a name for ourselves."
>
> The LORD saw this and said, "Since the people are all of one language and one speech, this is what they have begun to do, and now nothing will be impossible for them."
>
> So He came down and confused their language, causing them to be scattered over the face of the earth.

<p style="text-align:right">—Bible, Genesis</p>

We aspire to build an internet without language barriers.
We hope that all of humanity can come together through shared dreams.

Markdown translation and documentation sites are just the beginning.
Enable content synchronization to social media;
Support bilingual comments and chat rooms;
Implement a multilingual ticketing system with bounty payments;
Create a marketplace for international front-end components;
There is much more we plan to do.

We look forward to connecting with like-minded individuals amidst the vast sea of humanity.
We are seeking volunteers to contribute to open-source code development and the proofreading of translated texts.
If interested, please [fill out your profile here](https://ggl.link/i18n) and then join [the mailing list](https://groups.google.com/u/2/g/i18n-site) for further communication.

We believe in open-source and cherish sharing,
Welcome to join us in creating a future without borders.