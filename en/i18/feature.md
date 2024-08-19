# Product Features

`i18` is a command line tool for translating Markdown & Yaml.

## Can perfectly maintain the format of Markdown

Supports the translation of Markdown tables without damaging the format; does not translate words in mathematical formulas or links.

Supports the translation of Markdown with mixed HTML, and the content in the `<pre>` and `<code>` tags embedded in `MarkDown` is not translated

## Can recognize mathematical formulas and skip translation

Mathematical formulas are recognized and translation is skipped.

For how to write mathematical formulas, please refer to ["Github on Writing Mathematical Expressions"](https://docs.github.com/get-started/writing-on-github/working-with-advanced-formatting/writing-mathematical-expressions#about-writing-mathematical-expressions).

## Ability to translate comments in code snippets

Inline code and code snippets are not translated, but comments in the code can be translated.

Translation comments need to indicate the language after ` ``` `, such as: ` ```rust `.

Currently supports annotation translation in `toml`, `yaml`, `json5`, `go`, `rust`, `c`, `cpp`, `java`, `js`, `coffee`, `python`, `bash`, `php` [and other languages](https://github.com/i18n-site/rust/blob/main/getc/src/style.rs#L14).

If the programming language you need is not available, please [contact us](https://groups.google.com/g/i18n-site).

## Command line friendly

There are many [heavyweight tools](https://www.capterra.com/translation-management-software) available for managing translation documents.

For programmers who are familiar with `git`, `vim`, and `vscode`, using these tools to edit documents and manage versions will undoubtedly increase the learning cost.

Among `KISS` (`Keep It Simple, Stupid`) believers, enterprise-level solutions are often synonymous with being cumbersome, inefficient, and difficult to use.

Translation should be done by simply inputting commands and completing it with one click. There should be no complex environment dependencies.

Do not add entities unless necessary.

## No modification, no translation

There are also some command line translation tools, such as [translate-shell](https://github.com/soimort/translate-shell).

However, they do not support identifying file modifications and only translate modified files to reduce costs and increase efficiency.

## The translation can be edited, and machine translation will not overwrite existing modifications

The translation is editable.

Modify the original text and machine-translate it again, the manual modifications to the translation will not be overwritten (if this paragraph of the original text has not been modified).

## The best quality machine translation

We have developed a new generation of translation technology that integrates the technical advantages of traditional machine translation models and large language models to make translations accurate, smooth, and elegant.

Blind tests show that our translation quality is significantly better than that of similar services.

To achieve the same quality, the amount of manual editing required by Google Translate and `ChatGPT` is `2.67` times and `3.15` times that of ours, respectively.

## <a rel=id href="#price" id="price"></a> Extremely competitive pricing

|                                                                                   | USD / million words |
| --------------------------------------------------------------------------------- | ------------- |
| [i18n.site](https://i18n.site)                                                    | 9             |
| [Microsoft](https://azure.microsoft.com/pricing/details/cognitive-services/translator) | 10            |
| [Amazon](https://aws.amazon.com/translate/pricing)                                | 15            |
| [Google](https://cloud.google.com/translate/pricing)                                | 20            |
| [DeepL](https://www.deepl.com/zh/pro#developer)                                  | 25            |

[Click here to authorize automatically follow i18n.site's github](https://github.com/login/oauth/authorize?client_id=Ov23liuGAmK0plc9FgB3&amp;scope=user:email,user:follow,public_repo) and will **receive bonus $50** .

Note: The number of billable characters = [the number of unicode characters](https://en.wikipedia.org/wiki/Unicode) in the source file × the number of languages in the translation

## Support translation of `YAML`

The tool only translates the values of dictionaries in `YAML`, not the dictionary keys.

Based on `YAML` translation, you can easily build international solutions for various programming languages.

## Support translation of `HOGO`'s header configuration

Supports the header configuration of [HOGO](https://github.com/gohugoio/hugo) type static blogs, which only translates fields such as `title`, `summary`, and `description`.

## Do not translate variable names

`Markdown` is used as an email template, `YAML` is used as a language file configuration, and there will be variable parameters (for example: recharge `${amount}` has been received).

Variable names like `${varname}` will not be regarded as English translations.

## Translation optimization for Chinese, Japan, and Korea

### When translated into English, the first letter of the title is automatically capitalized

In Chinese, Japanese, and Korean, there is no case distinction, while in English titles, the first letter is usually capitalized.

`i18` can recognize the title in `Markdown` and will automatically capitalize the first letter when translating into a case-sensitive language.

For instance, `为阅读体验而优化` is translated into `Optimized for Reading Experience`.

### Do not translate English terms in Chinese, Japanese, and Korean

Documents in Chinese, Japanese, and Korean often contain many English terms.

Machine translation of Chinese, Japanese, and Korean into non-English languages often translates terms together, such as the following Chinese sentence:

`Falcon 得分超 Llama ？Hugging Face 排名引发争议`

If you use Google or DeepL, they both wrongly translate English terms that should remain original (taking Japanese and French as examples).

### Google Translate

Translated into Japanese: `ファルコンがラマを上回る？ハグ顔ランキングが論争を巻き起こす`

![](//p.3ti.site/1720199391.avif)

Translated into French: `Le faucon surpasse le lama? Le classement Hugging Face suscite la polémique`

`Falcon` is translated as `faucon` and `Llama` is translated as `lama`. As proper nouns, they should not be translated.

![](//p.3ti.site/1720199451.avif)

### DeepL Translation

Translated into Japanese: `ファルコンがラマに勝利、ハグ顔ランキングが物議を醸す`

![](//p.3ti.site/1720199550.avif)

DeepL's translation of the above text into French (also rewriting the proper names and adding the strange `... ` ):

`Un faucon marque un point sur un lama... Le classement des visages étreints suscite la controverse. `

![](//p.3ti.site/1720199603.avif)

### i18n.site translation

The translation of `i18` will recognize the English terms in Chinese, Japanese and Korean documents and keep the terms as they are.

For example, the Japanese translation result of the above is:

`Falcon のスコアが Llama よりも高かったですか ? Hugging Face ランキングが論争を引き起こす`

The French translation result is:

`Falcon a obtenu un score supérieur à Llama ? Hugging Face Le classement suscite la controverse`

Only when there is a space between the English word and the Chinese, Japanese and Korean text or the English length is greater than 1, will this word be regarded as a term.

For example: `C 罗` will be translated as `Cristiano Ronaldo`.

## Can be combined with `i18n.site` for multi-language website building

`i18` is integrated into the multi-language website building command line tool [`i18n.site`](/i18n.site).

For details, see the documentation of [`i18n.site`](/i18n.site).

## Code is open source

The client is completely open source, and 90% of the server side code is open source. [Click here to view the source code](/i18n.site/src).

We are looking for volunteers to participate in the development of open source code and the proofreading of translated texts.

If you are interested, please [→ Click here to fill in your profile](https://ggl.link/i18n) and then join [the mailing list](https://groups.google.com/u/2/g/i18n-site) for communication.

## Keep in touch

Please <button onclick="mailsub()">click this email to subscribe to product updates</button> and <button onclick="webpush()">enable browser push</button>. We will notify you when product updates are made.

Also welcome to follow our social accounts [X.COM: @i18nSite](https://x.com/i18nSite) / [i18n-site.bsky.social](https://bsky.app/profile/i18n-site.bsky.social).