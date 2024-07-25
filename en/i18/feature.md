# Product Features

`i18` is a command line tool for translating Markdown & Yaml .

## Can Perfectly Maintain the Format of Markdown

Supports translation of Markdown tables without damaging the format; does not translate words in mathematical formulas or links.

Supports translation of Markdown in mixed HTML `<pre>` HTML in `MarkDown` and content in `<code>` tags are not translated

## Can Recognize Mathematical Formulas and Skip Translation

Mathematical formulas are recognized and translation is skipped.

For how to write mathematical formulas, please refer to [" Github About Writing Mathematical Expressions"](https://docs.github.com/get-started/writing-on-github/working-with-advanced-formatting/writing-mathematical-expressions#about-writing-mathematical-expressions) .

## Ability to Translate Comments in Code Snippets

Inline code and code snippets are not translated, but comments in the code can be translated.

Translation comments need to indicate the language after ` ``` ` , such as : ` ```rust ` .

Currently supports translation of comments `toml` , `yaml` , `json5` , `go` , `rust` , `c` , `cpp` , `java` `js` , `coffee` , `python` , `bash` , `php` [and other languages](https://github.com/i18n-site/rust/blob/main/getc/src/style.rs#L14) .

If the programming language you need is not available, please [contact us](https://groups.google.com/g/i18n-site) .

## Command Line Friendly

There are many [heavyweight tools](https://www.capterra.com/translation-management-software) available for managing translation documents.

For programmers who are familiar with `git` , `vim` , `vscode` , using these tools to edit documents and manage versions will undoubtedly increase the learning cost.

`KISS` ( `Keep It Simple, Stupid` ) Among believers in the principle, enterprise-level solutions are synonymous with being cumbersome, inefficient and difficult to use.

Translation should be done by inputting commands and completing it with one click. There should be no complex environment dependencies.

Do not add entities unless necessary.

## No Modification, No Translation

There are also some command line translation tools, such as [translate-shell](https://github.com/soimort/translate-shell) .

However, they do not support identifying file modifications and only translate modified files to reduce costs and increase efficiency.

## The Translation Can Be Edited, and Machine Translation Will Not Overwrite Existing Modifications.

The translation is editable.

Modify the original text and machine-translate it again, the manual modifications to the translation will not be overwritten (if this paragraph of the original text has not been modified).

## Xindaya’s High-Quality Translation

We have developed a new generation of translation technology that integrates the technical advantages of traditional machine translation models and large language models to make translations accurate, smooth and elegant.

Blind tests show that our translation quality is significantly better compared to similar services.

To achieve the same quality, the amount of manual editing required by Google Translate and `ChatGPT` is `2.67` times and `3.15` times ours respectively.

## <a rel=id href="#price" id="price"></a> Extremely competitive pricing

|                                                                                   | USD/million words |
| --------------------------------------------------------------------------------- | ------------- |
| [i18n.site](https://i18n.site)                                                    | 9             |
| [Microsoft](https://azure.microsoft.com/pricing/details/cognitive-services/translator) | 10            |
| [Amazon](https://aws.amazon.com/translate/pricing)                                | 15            |
| [Google](https://cloud.google.com/translate/pricing)                                | 20            |
| [DeepL](https://www.deepl.com/zh/pro#developer)                                  | 25            |

Note: The number of billable characters = [the number of unicode](https://en.wikipedia.org/wiki/Unicode) in the source file × the number of languages in the translation

## Support Translation `YAML`

The tool only translates the dictionary values in `YAML` , not the dictionary keys.

Based on `YAML` Translation, you can easily build international solutions for various programming languages.

## Support Translation `HOGO` Header Configuration

Supports the header configuration of [HOGO](https://github.com/gohugoio/hugo) type static blog, only the `title` , `summary` and `description` fields are translated.

## Do Not Translate Variable Names

`Markdown` Used as an email template, `YAML` as a language file configuration, there will be variable parameters (for example: recharge `${amount}` has been received).

`${varname}` This kind of variable name will not be regarded as English translation.

## Translation Optimization for China, Japan and Korea

### When Translated Into English, the First Letter of the Title Is Automatically Capitalized.

China, Japan, and Korea do not have uppercase or lowercase letters, but English titles generally capitalize the first letter.

`i18` can recognize titles in `MarkDown` , and will automatically capitalize the first letter when translating into a case-sensitive language.

For example `为阅读体验而优化` will be translated as `Optimized for Reading Experience` .

### English Terms in Chinese, Japanese, Korean and Chinese Are Not Translated

Documents from China, Japan and Korea often contain many English terms.

Machine translation of Chinese, Japanese and Korean languages has become a non-English language, and terms are often translated together, such as the following Chinese sentence:

`Falcon 得分超 Llama ？Hugging Face 排名引发争议`

If you use Google or DeepL, they both incorrectly translate English terms that should remain original (take Japanese and French as examples).

### Google Translate

Translated into `ファルコンがラマを上回る？ハグ顔ランキングが論争を巻き起こす` :

<img alt="" src="//p.3ti.site/1720199391.avif">

Translated into `Le faucon surpasse le lama ? Le classement Hugging Face suscite la polémique` :

`Falcon` is translated as `faucon` and `Llama` is translated as `lama` . As proper nouns, they should not be translated.

<img alt="" src="//p.3ti.site/1720199451.avif">

### DeepL Translation

Translated into `ファルコンがラマに勝利、ハグ顔ランキングが物議を醸す` :

<img alt="" src="//p.3ti.site/1720199550.avif">

DeepL Translation of the above into French (also rewriting the proper names and adding the odd `... ` ):

`Un faucon marque un point sur un lama... Le classement des visages étreints suscite la controverse. `

<img alt="" src="//p.3ti.site/1720199603.avif">

### i18n.site Translation

`i18` 's translation will recognize English terms in Chinese, Japanese and Korean documents and leave the terms intact.

For example, the Japanese translation result above is:

`Falcon のスコアが Llama よりも高かったですか ? Hugging Face ランキングが論争を引き起こす`

The French translation is:

`Falcon a obtenu un score supérieur à Llama ? Hugging Face Le classement suscite la controverse`

Only when there is a space between the English word and the Chinese, Japanese and Korean text or the English length is greater than 1, the word will be regarded as a term.

For example: `C罗` will be translated as `Cristiano Ronaldo` .

## Can Be Combined `i18n.site` Multi-Language Website Building

`i18` Is integrated into the command line tool for multi-language website building [`i18n.site`](/i18n.site) .

See the documentation of [`i18n.site`](/i18n.site) for details.

## Code Open Source

The client is completely open source, and the server side 90 % of the code is open source. [Click here to view the source code](/i18n.site/src) .

We are looking for volunteers to participate in the development of open source code and proofreading of translated texts.

If you are interested, please [→ Click here to fill in your profile](https://ggl.link/i18n) and then join [the mailing list](https://groups.google.com/u/2/g/i18n-site) for communication.

## Keep in Touch

Please <button onclick="mailsub()">click this email to subscribe to product updates</button> and <button onclick="webpush()">enable browser push</button> . We will notify you when product updates are made.

Also welcome to follow our social accounts [X.COM: @i18nSite](https://x.com/i18nSite) / [i18n-site.bsky.social](https://bsky.app/profile/i18n-site.bsky.social) .
