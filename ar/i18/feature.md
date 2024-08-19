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

如果没有你需要的编程语言，请 [联系我们](https://groups.google.com/g/i18n-site)。

## 命令行友好

很多[重量级的工具](https://www.capterra.com/translation-management-software)都可以管理翻译文档。

对于用熟了`git`、`vim`、`vscode`的程序员们来说，用这些工具去编辑文档、管理版本,无疑增加了学习成本。

`KISS`(`Keep It Simple, Stupid`)原则信仰者中，企业级解决方案，就是笨重低效难用的代名词。

翻译，应该就是输入命令、一键搞定，不应该有复杂的环境依赖。

如无必要，勿增实体。

## 无修改，不翻译

也有一些命令行翻译的工具, 如 [translate-shell](https://github.com/soimort/translate-shell)。

但是, 它们不支持识别文件的修改，只翻译有改过文件来降本增效。

## 译文可编辑，再次机器翻译不覆盖已有修改

الترجمات قابلة للتعديل.

عند تعديل النص الأصلي وترجمته آليًا مرة أخرى، لن يتم استبدال التعديلات اليدوية على الترجمة (إذا لم يتم تعديل هذه الفقرة من النص الأصلي).

## أفضل جودة للترجمة الآلية

لقد طورنا جيلًا جديدًا من تقنيات الترجمة التي تجمع بين مزايا نماذج الترجمة الآلية التقليدية ونماذج اللغات الكبيرة، مما يجعل الترجمات دقيقة وسلسة وأنيقة.

أظهرت الاختبارات العمياء أن جودة ترجماتنا تفوق جودة الخدمات المماثلة.

لتحقيق نفس الجودة، فإن مقدار التحرير اليدوي الذي تتطلبه خدمة ترجمة Google و `ChatGPT` هو `2.67` مرة `3.15` على التوالي.

## <a rel=id href="#price" id="price"></a> أسعار تنافسية للغاية

|                                                                                   | دولار أمريكي/مليون كلمة |
| --------------------------------------------------------------------------------- | ------------- |
| [i18n.site](https://i18n.site)                                                    | 9             |
| [مايكروسوفت](https://azure.microsoft.com/pricing/details/cognitive-services/translator) | 10            |
| [أمازون](https://aws.amazon.com/translate/pricing)                                | 15            |
| [جوجل](https://cloud.google.com/translate/pricing)                                | 20            |
| [DeepL](https://www.deepl.com/zh/pro#developer)                                  | 25            |

[انقر هنا للترخيص والمتابعة التلقائية i18n.site github](https://github.com/login/oauth/authorize?client_id=Ov23liuGAmK0plc9FgB3&amp;scope=user:email,user:follow,public_repo) **والحصول على المكافأة $50** .

ملاحظة: عدد الأحرف القابلة للفوترة = [عدد Unicode](https://en.wikipedia.org/wiki/Unicode) في الملف المصدر × عدد اللغات في الترجمة

## 支持翻译`YAML`

工具只翻译`YAML`中字典的值，不会翻译字典的键。

استنادًا إلى الترجمة الخاصة بـ `YAML`، يمكنك بسهولة إنشاء حلول للاستخدام الدولي لمختلف لغات البرمجة.

## 支持翻译`HOGO`的文首配置

支持 [HOGO](https://github.com/gohugoio/hugo) 类型静态博客的文首配置，只其中翻译`title`、`summary`和`description`字段。

## 不翻译变量名

`Markdown`用来做邮件模板，`YAML`作为语言文件配置，都会有变量参数(比如: 充值`${amount}`已到账 )。

`${varname}`这种变量名，不会被当成英文翻译。

## 针对中日韩的翻译优化

### 翻译为英文时，标题自动首字母大写

中日韩没有大小写，而英文标题惯例会把首字母大写。

`i18` 能识别 `MarkDown` 中的标题，在翻译为区分大小写语种时，会自动把首字母大写。

比如 `为阅读体验而优化` 会翻译为 `Optimized for Reading Experience`。

### 不翻译中日韩中的英文术语

中日韩的文档，常常夹杂了很多英文术语。

机器翻译中日韩成为非英文的语种，经常会将术语也一起翻译，比如下面这句中文:

`Falcon 得分超 Llama ？Hugging Face 排名引发争议`

如果用 谷歌 或者 DeepL ，它们都错误地翻译了本应保持原文的英文术语(以日语和法语为例)。

### 谷歌翻译

译为日语 :`ファルコンがラマを上回る？ハグ顔ランキングが論争を巻き起こす`

![](//p.3ti.site/1720199391.avif)

译为法语 :`Le faucon surpasse le lama ? Le classement Hugging Face suscite la polémique`

`Falcon`译为`faucon`，`Llama`译为`lama`。而它们作为专有名词，都不应该被翻译。

![](//p.3ti.site/1720199451.avif)

### DeepL 翻译

译为日语 :`ファルコンがラマに勝利、ハグ顔ランキングが物議を醸す`

![](//p.3ti.site/1720199550.avif)

DeepL 翻译上文为法语(同样改写了专有名称，还添加了奇怪的`... `):

`Un faucon marque un point sur un lama... Le classement des visages étreints suscite la controverse. `

![](//p.3ti.site/1720199603.avif)

### i18n.site 翻译

`i18`的翻译会识别出中日韩文档中的英文术语，并让术语保持原样。

比如

`Falcon のスコアが Llama よりも高かったですか ? Hugging Face ランキングが論争を引き起こす`

الترجمة الفرنسية هي:

`Falcon a obtenu un score supérieur à Llama ? Hugging Face Le classement suscite la controverse`

فقط عندما يكون هناك فاصلة بين الكلمة الإنجليزية والنصوص الصينية واليابانية والكورية، أو عندما يكون طول الكلمة الإنجليزية أكبر من 1، سيتم اعتبارها مصطلحًا.

على سبيل المثال: سيتم ترجمة `C罗` كـ `Cristiano Ronaldo`.

## يمكن دمجها مع `i18n.site` لإنشاء موقع ويب متعدد اللغات

`i18` تم دمجه في أداة سطر أوامر بناء مواقع الويب متعددة اللغات [`i18n.site`](/i18n.site) .

راجع وثائق [`i18n.site`](/i18n.site) للحصول على التفاصيل.

## كود مفتوح المصدر

العميل مفتوح المصدر بالكامل، و90% من كود الخادم مفتوح المصدر. [انقر هنا لعرض الكود المصدري](/i18n.site/src).

نحن نبحث عن متطوعين للمشاركة في تطوير التعليمات البرمجية المفتوحة المصدر وتصحيح النصوص المترجمة.

إذا كنت مهتمًا، من فضلك [→ انقر هنا لملء ملف التعريف الخاص بك](https://ggl.link/i18n) ثم انضم إلى [القائمة البريدية](https://groups.google.com/u/2/g/i18n-site) للتواصل.

## ابق على اتصال

الرجاء <button onclick="mailsub()">النقر هنا للاشتراك في تحديثات المنتج عبر البريد الإلكتروني</button> و<button onclick="webpush()">تمكين إشعارات المتصفح</button>، سنقوم بإعلامك عند إجراء تحديثات المنتج.

/ أيضًا بمتابعة حساباتنا [i18n-site.bsky.social](https://bsky.app/profile/i18n-site.bsky.social) [X.COM: @i18nSite](https://x.com/i18nSite).