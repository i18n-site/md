# Product Features

`i18` is a command-line tool for translating Markdown and YAML.

## Can Perfectly Maintain the Format of Markdown

Supports translation of Markdown tables without damaging the format; does not translate words in mathematical formulas or links.

Supports translation of Markdown with embedded HTML; content within `<pre>` and `<code>` tags in `Markdown` is not translated

## Can Recognize Mathematical Formulas and Skip Translation

Mathematical formulas are recognized and translation is skipped.

For how to write mathematical formulas, please refer to [GitHub's Guide on Writing Mathematical Expressions](https://docs.github.com/get-started/writing-on-github/working-with-advanced-formatting/writing-mathematical-expressions#about-writing-mathematical-expressions).

## Ability to Translate Comments in Code Snippets

Inline code and code snippets are not translated, but comments in the code can be translated.

To translate comments, indicate the language after ` ``` `, such as: ` ```rust `.

Currently supports annotation translation in `toml`, `yaml`, `json5`, `go`, `rust`, `c`, `cpp`, `java`, `js`, `coffee`, `python`, `bash`, `php` [and other languages](https://github.com/i18n-site/rust/blob/main/getc/src/style.rs#L14).

1	If you wish to translate all non-English characters in the code, mark the code segment with ` ```i18n ` .

If the programming language you need is not supported, please [contact us](https://groups.google.com/g/i18n-site).

## Command Line Friendly

Many [heavyweight tools](https://www.capterra.com/translation-management-software) can manage translation documents.

For programmers familiar with `git`, `vim`, and `vscode`, using these tools to edit documents and manage versions can increase the learning curve.

`KISS` ( `Keep It Simple, Stupid` ) Among principle believers, enterprise-level solutions are synonymous with being cumbersome, inefficient, and difficult to use.

Translation should be as simple as entering a command and getting it done in one click, without complex environment dependencies.

Do not add entities unless necessary.

## No Modification, No Translation

There are also some command-line translation tools, such as [translate-shell](https://github.com/soimort/translate-shell).

However, they do not support identifying file modifications and only translate modified files to reduce costs and increase efficiency.

## The Translation Can Be Edited, and Machine Translation Will Not Overwrite Existing Modifications

The translations are editable.

When you modify the original text and run the machine translation again, the manual edits to the translations will not be overwritten (if the corresponding section of the original text has not been modified).

## Best Quality Machine Translation

We have developed a new generation of translation technology that combines the advantages of traditional machine translation models and large language models, making translations accurate, smooth, and elegant.

Blind tests show that our translation quality is significantly better compared to similar services.

To achieve the same quality, the amount of manual editing required by Google Translate and `ChatGPT` is `2.67` times and `3.15` times that of ours, respectively.

## <a rel=id href="#price" id="price"></a> Extremely Competitive Pricing

|                                                                                   | USD/million words |
| --------------------------------------------------------------------------------- | ------------- |
| [i18n.site](https://i18n.site)                                                    | 9             |
| [Microsoft](https://azure.microsoft.com/pricing/details/cognitive-services/translator) | 10            |
| [Amazon](https://aws.amazon.com/translate/pricing)                                | 15            |
| [Google](https://cloud.google.com/translate/pricing)                                | 20            |
| [DeepL](https://www.deepl.com/zh/pro#developer)                                  | 25            |

[➤ Click here to authorize and automatically follow i18n.site's GitHub repository](https://github.com/login/oauth/authorize?client_id=Ov23liuGAmK0plc9FgB3&scope=user:email,user:follow,public_repo), and **receive a $50 bonus**.

Note: The number of billable characters = the number of [Unicode characters](https://en.wikipedia.org/wiki/Unicode) in the source file × the number of languages in the translation

## Supports Translation of `YAML`

The tool only translates the values in `YAML` dictionaries, not the keys.

Based on `YAML` translation, you can easily build internationalization solutions for various programming languages.

## Supports Translation of `HOGO` Header Configuration

Supports the header configuration of [HOGO](https://github.com/gohugoio/hugo) type static blogs, translating fields such as `title`, `summary`, `brief`, and `description`.

## Does Not Translate Variable Names

`Markdown` is used for email templates, and `YAML` is used for language file configurations, which often contain variable parameters (e.g., recharge `${amount}` has been received).

Variable names like `${varname}` will not be translated.

## Translation Optimization for Chinese, Japanese, and Korean

### When Translated into English, the First Letter of the Title Is Automatically Capitalized

Chinese, Japanese, and Korean do not have uppercase and lowercase letters, but English titles conventionally capitalize the first letter.

`i18` can recognize `Markdown` titles and automatically capitalize the first letter when translating into case-sensitive languages.

For example, `为阅读体验而优化` will be translated into `Optimized for Reading Experience`.

### Does Not Translate English Terms in Chinese, Japanese, and Korean

Documents in Chinese, Japanese, and Korean often contain many English terms.

Machine translation of Chinese, Japanese, and Korean into non-English languages often incorrectly translates these terms, as in the following Chinese sentence:

`Falcon 得分超 Llama ？Hugging Face 排名引发争议`

If you use Google or DeepL, they both incorrectly translate English terms that should remain original (using Japanese and French as examples).

### Google Translate

Translated into Japanese: `ファルコンがラマを上回る？ハグ顔ランキングが論争を巻き起こす`

![](//p.3ti.site/1720199391.avif)

Translated into French: `Le faucon surpasse le lama ? Le classement Hugging Face suscite la polémique`

`Falcon` is translated as `faucon` and `Llama` is translated as `lama`. As proper nouns, they should not be translated.

![](//p.3ti.site/1720199451.avif)

### DeepL Translation

Translated into Japanese: `ファルコンがラマに勝利、ハグ顔ランキングが物議を醸す`

![](//p.3ti.site/1720199550.avif)

DeepL translates the above into French (also rewriting proper names and adding the odd `... `):

`Un faucon marque un point sur un lama... Le classement des visages étreints suscite la controverse. `

![](//p.3ti.site/1720199603.avif)

### i18n.site Translation

`i18`'s translation will recognize English terms in Chinese, Japanese, and Korean documents and leave the terms intact.

For example, the Japanese translation result is:

`Falcon のスコアが Llama よりも高かったですか ? Hugging Face ランキングが論争を引き起こす`

The French translation is:

`Falcon a obtenu un score supérieur à Llama ? Hugging Face Le classement suscite la controverse`

Only when there is a space between the English word and the Chinese, Japanese, or Korean text, or the English length is greater than 1, will the word be regarded as a term.

For example: `C罗` will be translated as `Cristiano Ronaldo`.

## Can Be Combined with `i18n.site` for Multilingual Website Building

`i18` is integrated into the multi-language website building command-line tool [`i18n.site`](/i18n.site).

See the documentation of [`i18n.site`](/i18n.site) for details.

## Code Open Source

The client is completely open source, and 90% of the server-side code is open source. [Click here to view the source code](/i18n.site/c/src).

We are looking for volunteers to participate in the development of open-source code and proofreading of translated texts.

If you are interested, please [→ click here to fill in your profile](https://ggl.link/i18n) and then join [the mailing list](https://groups.google.com/u/2/g/i18n-site) for communication.

## Stay in Touch

Please <button onclick="mailsub()">click here to subscribe to product updates via email</button> and <button onclick="webpush()">enable browser push notifications</button>. We will notify you when product updates are made.

Also, follow our social accounts: [X.COM: @i18nSite](https://x.com/i18nSite) / [i18n-site.bsky.social](https://bsky.app/profile/i18n-site.bsky.social).