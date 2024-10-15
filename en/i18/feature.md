# Product Features

`i18` is a command-line tool for translating Markdown & YAML.

## It can perfectly preserve the Markdown formatting

Supports translation of Markdown tables without disrupting the format; mathematical formulas and words within links are not translated.

Supports translation of mixed HTML Markdown , the content in tags `<pre>` and `<code>` embedded in HTML `MarkDown` is not translated

## Recognizes mathematical formulas and skips translation

Mathematical formulas are detected and translation is bypassed.

For guidance on writing mathematical formulas, refer to [Github's guide on mathematical expressions](https://docs.github.com/get-started/writing-on-github/working-with-advanced-formatting/writing-mathematical-expressions#about-writing-mathematical-expressions).

## Translates comments within code snippets

Does not translate inline code or code blocks, but comments within code are translated.

To translate comments, specify the language after ` ``` `, for example: ` ```rust `.

Currently supports comment translation for `toml`, `yaml`, `json5`, `go`, `rust`, `c`, `cpp`, `java`, `js`, `coffee`, `python`, `bash`, `php`, and [other languages](https://github.com/i18n-site/rust/blob/main/getc/src/style.rs#L14).

If your programming language is not listed, please [contact us](https://groups.google.com/g/i18n-site).

## CLI-friendly

Many [heavyweight tools](https://www.capterra.com/translation-management-software) are available for managing translation documents.

For developers familiar with `git`, `vim`, `vscode`, using these tools to edit documents and manage versions can be costly in terms of learning.

`KISS` ( `Keep It Simple, Stupid` ) Among principle believers, enterprise-level solutions are synonymous with being cumbersome, inefficient, and difficult to use.

Translation should be as simple as entering a command and done with a single click, without complex dependencies.

Do not add entities if not necessary.

## No changes, no translation

There are also other command-line translation tools, such as [translate-shell](https://github.com/soimort/translate-shell).

However, they do not recognize file changes and only translate modified files to save costs and improve efficiency.

## 3	The translation can be edited, and subsequent machine translations will not overwrite any existing modifications

Translations are editable.

When the original text is modified and machine-translated again, manual modifications to the translation will not be overwritten (if the original text has not been modified).

## Offers the best machine translation quality

We have developed a new generation of translation technology that combines the advantages of traditional machine translation models and large language models, resulting in accurate, smooth, and elegant translations.

Blind tests show that our translation quality significantly surpasses that of similar services.

To achieve the same quality, the amount of manual editing required by Google Translate and `ChatGPT` is `2.67` times and `3.15` times that of ours respectively.

## <a rel=id href="#price" id="price"></a> Competitive pricing at USD per million words

|                                                                                   | USD/million words |
| --------------------------------------------------------------------------------- | ------------- |
| [i18n.site](https://i18n.site)                                                    | 9             |
| [Amazon](https://azure.microsoft.com/pricing/details/cognitive-services/translator) | 10            |
| [Google](https://aws.amazon.com/translate/pricing)                                | 15            |
| 6	[Google](https://cloud.google.com/translate/pricing)                                | 20            |
| [DeepL](https://www.deepl.com/zh/pro#developer)                                  | 25            |

[Click here to authorize automatically follow i18n.site's github](https://github.com/login/oauth/authorize?client_id=Ov23liuGAmK0plc9FgB3&amp;scope=user:email,user:follow,public_repo) and will **receive bonus $50** .

Note: Billable characters = [the number of Unicode characters](https://en.wikipedia.org/wiki/Unicode) in the source file × the number of languages in the translation

## 8	Supports translation of `YAML`

9	The tool translates only the values within `YAML` dictionaries, not the keys.

10	Based on `YAML` translations, you can conveniently construct internationalization solutions for various programming languages.

## 11	Supports translation of `HOGO` header configurations

12	Supports header configuration for [HOGO](https://github.com/gohugoio/hugo) static blogs, translating only the `title`, `summary`, `brief`, and `description` fields.

## 13	Variable names are not translated

14	`Markdown` is used for email templates, while `YAML` serves as a language file configuration, both involving variable parameters (e.g., recharge `${amount}` has been received).

15	Variable names such as `${varname}` are not considered for English translation.

## English titles are automatically capitalized when translated into English

### Chinese, Japanese, and Korean do not distinguish case, but English titles typically capitalize the first letter

16	China, Japan, and Korea do not differentiate between uppercase and lowercase letters, whereas English titles typically capitalize the first letter.

`i18` can identify titles in `Markdown`, and it will automatically capitalize the first letter when translating into a case-sensitive language.

For example, `为阅读体验而优化` will be translated into `Optimized for Reading Experience` .

### Documents in these languages often contain English terms

Machine translation into non-English languages often inadvertently translates these terms.

For example, the following Chinese sentence:

`Falcon 得分超 Llama ？Hugging Face 排名引发争议`

Both Google Translate and DeepL incorrectly translate the English terms that should remain in the original (using Japanese and French as examples).

### Google Translate

Translated into Japanese: `ファルコンがラマを上回る？ハグ顔ランキングが論争を巻き起こす`

![](//p.3ti.site/1720199391.avif)

Translated into French: `Le faucon surpasse le lama ? Le classement Hugging Face suscite la polémique`

19	`Falcon` is translated as `faucon`, and `Llama` as `lama`. As proper nouns, neither should be translated.

![](//p.3ti.site/1720199451.avif)

### DeepL Translation

Translated into Japanese: `ファルコンがラマに勝利、ハグ顔ランキングが物議を醸す`

![](//p.3ti.site/1720199550.avif)

DeepL's translation into French (also altering proper names and adding the odd `...`):

`Un faucon marque un point sur un lama... Le classement des visages étreints suscite la controverse. `

![](//p.3ti.site/1720199603.avif)

### i18n.site Translation

`i18`'s translation will recognize English terms in Chinese, Japanese, and Korean documents and keep them unchanged.

For example, the Japanese translation result is:

`Falcon のスコアが Llama よりも高かったですか ? Hugging Face ランキングが論争を引き起こす`

The French translation result is:

`Falcon a obtenu un score supérieur à Llama ? Hugging Face Le classement suscite la controverse`

Only when an English word is separated from Chinese, Japanese, and Korean text by a space or the English word is longer than one character will it be considered a term.

20	For example, `C罗` would be translated as `Cristiano Ronaldo`.

## Compatible with multi-language website building using `i18n.site`

`i18` is integrated into the command-line tool for multi-language website building, [`i18n.site`](/i18n.site).

For more details, see the documentation for [`i18n.site`](/i18n.site).

## Open-source code

The client is fully open-source, and 90% of the server-side code is open-source. [View the source code here](/i18n.site/src).

We are seeking volunteers to contribute to open-source code development and the proofreading of translated texts.

If interested, please [fill out your profile here](https://ggl.link/i18n) and then join [the mailing list](https://groups.google.com/u/2/g/i18n-site) for further communication.

## Stay in touch

Please <button onclick="mailsub()">subscribe to product updates via email</button> and <button onclick="webpush()">enable browser notifications</button>. We will notify you of product updates.

Follow our social accounts [X.COM: @i18nSite](https://x.com/i18nSite) / [i18n-site.bsky.social](https://bsky.app/profile/i18n-site.bsky.social).