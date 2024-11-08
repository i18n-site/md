<h1 style="display:flex;justify-content:space-between">i18n.site ⋅ Internationalization Solutions <img src="//p.3ti.site/logo.svg" style="user-select:none;margin-top:-1px;width:42px"></h1>

Command-line Markdown and Yaml translation tool, helping you build an international documentation site, supporting [hundreds of languages](/i18/LANG_CODE) ..

<pre class="langli" style="display:flex;flex-wrap:wrap;background:transparent;border:1px solid #eee;font-size:12px;box-shadow:0 0 3px inset #eee;padding:12px 5px 4px 12px;justify-content:space-between;"><style>pre.langli i{font-weight:300;font-family:s;margin-right:2px;margin-bottom:8px;font-style:normal;color:#666;border-bottom:1px dashed #ccc;}</style><i>English</i><i>简体中文</i><i>Deutsch</i><i>Français</i><i>Español</i><i>Italiano</i><i>日本語</i><i>Polski</i><i>Português(Brasil)</i><i>Русский</i><i>Nederlands</i><i>Türkçe</i><i>Svenska</i><i>Čeština</i><i>Українська</i><i>Magyar</i><i>Indonesia</i><i>한국어</i><i>Română</i><i>Norsk</i><i>Slovenčina</i><i>Suomi</i><i>العربية</i><i>Català</i><i>Dansk</i><i>فارسی</i><i>Tiếng Việt</i><i>Lietuvių</i><i>Hrvatski</i><i>עברית</i><i>Slovenščina</i><i>српски језик</i><i>Esperanto</i><i>Ελληνικά</i><i>Eesti</i><i>Български</i><i>ไทย</i><i>Haitian Creole</i><i>Íslenska</i><i>नेपाली</i><i>తెలుగు</i><i>Latine</i><i>Galego</i><i>हिन्दी</i><i>Cebuano</i><i>Melayu</i><i>Euskara</i><i>Bosnian</i><i>Letzeburgesch</i><i>Latviešu</i><i>ქართული</i><i>Shqip</i><i>मराठी</i><i>Azərbaycan</i><i>Македонски</i><i>Wikang Tagalog</i><i>Cymraeg</i><i>বাংলা</i><i>தமிழ்</i><i>Basa Jawa</i><i>Basa Sunda</i><i>Беларуская</i><i>Kurdî(Navîn)</i><i>Afrikaans</i><i>Frysk</i><i>Toğikī</i><i>اردو</i><i>Kichwa</i><i>മലയാളം</i><i>Kiswahili</i><i>Gaeilge</i><i>Uzbek(Latin)</i><i>Te Reo Māori</i><i>Èdè Yorùbá</i><i>ಕನ್ನಡ</i><i>አማርኛ</i><i>Հայերեն</i><i>অসমীয়া</i><i>Aymar Aru</i><i>Bamanankan</i><i>Bhojpuri</i><i>正體中文</i><i>Corsu</i><i>ދިވެހިބަސް</i><i>Eʋegbe</i><i>Filipino</i><i>Guarani</i><i>ગુજરાતી</i><i>Hausa</i><i>Hawaiian</i><i>Hmong</i><i>Ásụ̀sụ́ Ìgbò</i><i>Iloko</i><i>Қазақ Тілі</i><i>ខ្មែរ</i><i>Kinyarwanda</i><i>سۆرانی</i><i>Кыргызча</i><i>ລາວ</i><i>Lingála</i><i>Ganda</i><i>Maithili</i><i>Malagasy</i><i>Malti</i><i>монгол</i><i>မြန်မာ</i><i>ChiCheŵa</i><i>ଓଡ଼ିଆ</i><i>Afaan Oromoo</i><i>پښتو</i><i>ਪੰਜਾਬੀ</i><i>Gagana Sāmoa</i><i>Sanskrit</i><i>Sesotho sa Leboa</i><i>Sesotho</i><i>chiShona</i><i>سنڌي</i><i>සිංහල</i><i>Soomaali</i><i>Татар</i><i>ትግር</i><i>Xitsonga</i><i>Türkmen Dili</i><i>Akan</i><i>isiXhosa</i><i>ייִדיש</i><i>Isi-Zulu</i></pre>

## Preface

The Internet has eliminated the physical distance between people, but language differences still hinder human unity.

Although browsers have built-in translation, search engines still cannot perform cross-language queries.

Social media and email have led people to focus on information sources in their native languages.

With the information explosion and global market, to compete for scarce attention, **supporting multiple languages is a fundamental skill**.

Even for personal open-source projects that aim to influence a broader audience, it is essential to make internationalization technology choices from the beginning.

## <a rel=id href="#project" id="project"></a> Project Introduction

This site currently provides two open-source command-line tools:

* [i18 : Markdown Command-line Translation Tool](/i18/feature)
* [i18n.site : Multi-language Static Site Generator](/i18n.site)

### <a rel=id href="#i18" id="i18"></a> i18: Markdown Command-line Translation Tool

A command-line tool ( [source code](https://github.com/i18n-site/rust/tree/main/i18) ) that translates `Markdown` and `YAML` into multiple languages.

It perfectly preserves the format of `Markdown` and can identify file modifications, translating only the changed files.

The translations are editable.

When you modify the original text and run the machine translation again, the manual edits to the translations will not be overwritten (if the corresponding section of the original text has not been modified).

You can use your most familiar tools to edit the `Markdown` translations (but you cannot add or delete paragraphs) and perform version control in the most familiar way.

You can create an open-source codebase for language files and use the `Pull Request` process to engage global users in the continuous optimization of translations. This seamlessly integrates with [GitHub](//github.com) and other open-source communities.

> [!TIP]
> We embrace the UNIX philosophy of "everything is a file" and can manage translations into hundreds of languages without introducing complex and cumbersome enterprise solutions.

[→ For usage instructions, please read the project documentation](/i18).

## Best Quality Machine Translation

We have developed a new generation of translation technology that combines the advantages of traditional machine translation models and large language models, making translations accurate, smooth, and elegant.

Blind tests show that our translation quality is significantly better compared to similar services.

To achieve the same quality, the amount of manual editing required by Google Translate and `ChatGPT` is `2.67` times and `3.15` times that of ours, respectively.

#### <a rel=id href="#price" id="price"></a> Extremely Competitive Pricing

|                                                                                   | USD/million words |
| --------------------------------------------------------------------------------- | ------------- |
| [i18n.site](https://i18n.site)                                                    | 9             |
| [Microsoft](https://azure.microsoft.com/pricing/details/cognitive-services/translator) | 10            |
| [Amazon](https://aws.amazon.com/translate/pricing)                                | 15            |
| [Google](https://cloud.google.com/translate/pricing)                                | 20            |
| [DeepL](https://www.deepl.com/zh/pro#developer)                                  | 25            |

[➤ Click here to authorize and automatically follow i18n.site's GitHub repository](https://github.com/login/oauth/authorize?client_id=Ov23liuGAmK0plc9FgB3&scope=user:email,user:follow,public_repo), and **receive a $50 bonus**.

Note: The number of billable characters = the number of [Unicode characters](https://en.wikipedia.org/wiki/Unicode) in the source file × the number of languages in the translation

### i18n.site: Multi-Language Static Site Generator

A command-line tool ( [source code](https://github.com/i18n-site/rust/tree/main/i18n-site) ) for generating multi-language static sites.

Purely static, optimized for reading experience, and integrated with the translation capabilities of [i18](#i18), it is the ideal choice for building project documentation sites.

The underlying front-end framework uses a fully plugin-based architecture, making it easy to customize. If needed, back-end functionalities can be integrated.

This site is built using this framework and includes user, payment, and other features ( [source code](/i18n.site/c/src) ). A detailed tutorial will be written soon.

[→ For usage instructions, please read the project documentation](/i18n.site).

## Stay in Touch

Please <button onclick="mailsub()">click here to subscribe to product updates via email</button> and <button onclick="webpush()">enable browser push notifications</button>. We will notify you when product updates are made.

Also, follow our social accounts: [X.COM: @i18nSite](https://x.com/i18nSite) / [i18n-site.bsky.social](https://bsky.app/profile/i18n-site.bsky.social).

If you encounter any issues, [→ please post in the user forum](https://groups.google.com/u/1/g/i18n).

## About Us

> They said: Come, let us build a tower that reaches the sky and make the human race famous.
>
> The LORD saw this and said, "All human beings have the same language and the same race. Now that this has been accomplished, everything will be possible."
>
> Then He came down and confused their language, so that they could not understand each other, and He scattered them across the earth.

<p style="text-align:right">──Bible·Genesis</p>

We aim to build an Internet without language barriers.
We hope that all humanity will come together with a shared dream.

Markdown translation and documentation sites are just the beginning.
Synchronize content posting to social media;
Support bilingual comments and chat rooms;
A multilingual ticket system that can pay bounties;
A marketplace for international front-end components;
There is much more we want to achieve.

We believe in open source and love sharing,
Welcome to join us in creating a borderless future.

> [!NOTE]
> We look forward to meeting like-minded individuals in the vast sea of people.
> We are looking for volunteers to participate in the development of open-source code and proofreading of translated texts.
> If you are interested, please [→ click here to fill in your profile](https://ggl.link/i18n) and then join [the mailing list](https://groups.google.com/u/2/g/i18n-site) for communication.