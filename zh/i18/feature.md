# 产品特性

`i18`是翻译 Markdown & Yaml 的命令行工具。

## 能完美保持 Markdown 的格式

支持翻译 Markdown 表格，不破坏格式；不翻译数学公式、链接中的单词。

支持翻译混杂 HTML 的 Markdown，`MarkDown`中内嵌的 HTML 中`<pre>`和`<code>`标签中的内容不翻译

## 能识别数学公式，并跳过翻译

数学公式会被识别，并跳过翻译。

数学公式的写法请参考 [《Github 关于编写数学表达式》](https://docs.github.com/get-started/writing-on-github/working-with-advanced-formatting/writing-mathematical-expressions#about-writing-mathematical-expressions)。

## 能翻译代码段中的注释

不翻译行内代码、代码段，但能翻译代码中的注释。

翻译注释，需要在` ``` `之后表明语言， 比如:` ```rust `。

目前支持`toml`、`yaml`、`json5`、`go`、`rust`、`c`、`cpp`、`java`、`js`、`coffee`、`python`、`bash`、`php`[等语言](https://github.com/i18n-site/rust/blob/main/getc/src/style.rs#L14) 的注释翻译。

如想翻译代码中所有的非英文字符，可将代码段标注为 ` ```i18n `。

如果没有你需要的编程语言，请 [联系我们](https://groups.google.com/g/i18n-site)。

## 命令行友好

很多[重量级的工具](https://www.capterra.com/translation-management-software)都可以管理翻译文档。

对于用熟了`git`、`vim`、`vscode`的程序员们来说，用这些工具去编辑文档、管理版本,无疑增加了学习成本。

`KISS`(`Keep It Simple, Stupid`）原则信仰者中，企业级解决方案，就是笨重低效难用的代名词。

翻译，应该就是输入命令、一键搞定，不应该有复杂的环境依赖。

如无必要，勿增实体。

## 无修改，不翻译

也有一些命令行翻译的工具, 如 [translate-shell](https://github.com/soimort/translate-shell)。

但是, 它们不支持识别文件的修改，只翻译有改过文件来降本增效。

## 译文可编辑，再次机器翻译不覆盖已有修改

译文可编辑。

修改原文，再次机器翻译时，不会覆盖译文的人工修改(如果原文此段未修改)。

## 质量最好的机器翻译

我们研发了新一代翻译技术，融合传统机器翻译模型和大语言模型的技术优势，让译文准确、流畅、优雅。

盲测表明，与同类服务相比，我们的翻译质量显著更好。

想要达到同样的质量，谷歌翻译和`ChatGPT`所需的的人工编辑量，分别是我们的`2.67`倍和`3.15`倍。

## <a rel=id href="#price" id="price"></a> 极具竞争力的定价

|                                                                                   | 美元 / 百万字 |
| --------------------------------------------------------------------------------- | ------------- |
| [i18n.site](https://i18n.site)                                                    | 9             |
| [微软](https://azure.microsoft.com/pricing/details/cognitive-services/translator) | 10            |
| [亚马逊](https://aws.amazon.com/translate/pricing)                                | 15            |
| [谷歌](https://cloud.google.com/translate/pricing)                                | 20            |
| [DeepL](https://www.deepl.com/zh/pro#developer)                                  | 25            |

[➤ 点此授权自动关注 i18n.site 的 github 开源代码库](https://github.com/login/oauth/authorize?client_id=Ov23liuGAmK0plc9FgB3&scope=user:email,user:follow,public_repo), **可获赠金 $50**。

注：计费字符数 = 源文件的 [unicode 字符数](https://en.wikipedia.org/wiki/Unicode) × 译文的语种数

## 支持翻译`YAML`

工具只翻译`YAML`中字典的值，不会翻译字典的键。

基于`YAML`翻译，你可以方便地构建各种编程语言的国际化解决方案。

## 支持翻译`HOGO`的文首配置

支持  [HOGO](https://github.com/gohugoio/hugo) 类型静态博客的文首配置，只其中翻译`title`、`summary`、`brief`、`description`字段。

## 不翻译变量名

`Markdown`用来做邮件模板，`YAML`作为语言文件配置，都会有变量参数（比如： 充值`${amount}`已到账 ）。

`${varname}`这种变量名，不会被当成英文翻译。

## 针对中日韩的翻译优化

### 翻译为英文时，标题自动首字母大写

中日韩没有大小写，而英文标题惯例会把首字母大写。

`i18`能识别`MarkDown`中的标题，在翻译为区分大小写语种时，会自动把首字母大写。

比如`为阅读体验而优化`会翻译为`Optimized for Reading Experience`。

### 不翻译中日韩中的英文术语

中日韩的文档，常常夹杂了很多英文术语。

机器翻译中日韩成为非英文的语种，经常会将术语也一起翻译，比如下面这句中文：

`Falcon 得分超 Llama ？Hugging Face 排名引发争议`

如果用 谷歌 或者 DeepL ，它们都错误地翻译了本应保持原文的英文术语（以日语和法语为例）。

### 谷歌翻译

译为日语 :`ファルコンがラマを上回る？ハグ顔ランキングが論争を巻き起こす`

![](//p.3ti.site/1720199391.avif)

译为法语 :`Le faucon surpasse le lama ? Le classement Hugging Face suscite la polémique`

`Falcon`译为`faucon`，`Llama`译为`lama`。而它们作为专有名词，都不应该被翻译 。

![](//p.3ti.site/1720199451.avif)

### DeepL  翻译

译为日语 :`ファルコンがラマに勝利、ハグ顔ランキングが物議を醸す`

![](//p.3ti.site/1720199550.avif)

DeepL 翻译上文为法语（同样改写了专有名称，还添加了奇怪的`... `）：

`Un faucon marque un point sur un lama... Le classement des visages étreints suscite la controverse. `

![](//p.3ti.site/1720199603.avif)

### i18n.site 翻译

`i18`的翻译会识别出中日韩文档中的英文术语，并让术语保持原样。

比如上文的日语翻译结果是 :

`Falcon のスコアが Llama よりも高かったですか ? Hugging Face ランキングが論争を引き起こす`

法语的翻译结果是 :

`Falcon a obtenu un score supérieur à Llama ? Hugging Face Le classement suscite la controverse`

只有当英文单词和中日韩文本存在空格 或者 英文长度大于 1 的时候，才会将此单词视为术语。

比如：`C罗`会被翻译为`Cristiano Ronaldo`。

## 可结合`i18n.site`多语言建站

`i18`被集成到了多语言建站的命令行工具 [`i18n.site`](/i18n.site)。

详见 [`i18n.site`](/i18n.site) 的文档。

## 代码开源

客户端完全开源，服务器端 90% 的代码开源，[点此查看源代码](/i18n.site/c/src)。

我们正在寻找志愿者，参与开源代码的开发和翻译文本的校对。

如果您有兴趣，请先[→ 点此填写个人简介](https://ggl.link/i18n)，然后加入 [邮件列表](https://groups.google.com/u/2/g/i18n-site) 交流。

## 保持联系

请 <button onclick="mailsub()">点此邮件订阅产品更新</button> 并 <button onclick="webpush()">开启浏览器推送</button>，我们将在产品更新时通知您。

也欢迎关注我们的社交账号 [X.COM: @i18nSite](https://x.com/i18nSite) / [i18n-site.bsky.social](https://bsky.app/profile/i18n-site.bsky.social)。
