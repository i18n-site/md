# 產品特性

`i18`是翻譯 Markdown & Yaml 的命令行工具。

## 能完美保持 Markdown 的格式

支持翻譯 Markdown 表格，不破坏格式；不翻譯數學公式、鏈接中的單詞。

支持翻譯混雜 HTML 的 Markdown，`MarkDown`中內嵌的 HTML 中`<pre>`和`<code>`標签中的內容不翻譯

## 能識别數學公式，并跳過翻譯

數學公式會被識别，并跳過翻譯。

數學公式的寫法請參考 [《Github 關于編寫數學表達式》](https://docs.github.com/get-started/writing-on-github/working-with-advanced-formatting/writing-mathematical-expressions#about-writing-mathematical-expressions)。

## 能翻譯代碼段中的注釋

不翻譯行內代碼、代碼段，但能翻譯代碼中的注釋。

翻譯注釋，需要在` ``` `之后表明語言， 比如:` ```rust `。

目前支持`toml`、`yaml`、`json5`、`go`、`rust`、`c`、`cpp`、`java`、`js`、`coffee`、`python`、`bash`、`php`[等語言](https://github.com/i18n-site/rust/blob/main/getc/src/style.rs#L14) 的注釋翻譯。

如想翻譯代碼中所有的非英文字符，可將代碼段標注為 ` ```i18n `。

如果沒有你需要的編程語言，請 [聯系我們](https://groups.google.com/g/i18n-site)。

## 命令行友好

很多[重量級的工具](https://www.capterra.com/translation-management-software)都可以管理翻譯文檔。

對于用熟了`git`、`vim`、`vscode`的程序員們來說，用這些工具去編輯文檔、管理版本,無疑增加了學習成本。

`KISS`(`Keep It Simple, Stupid`）原則信仰者中，企業級解決方案，就是笨重低效難用的代名詞。

翻譯，應該就是輸入命令、一鍵搞定，不應該有复雜的環境依賴。

如無必要，勿增實體。

## 無修改，不翻譯

也有一些命令行翻譯的工具, 如 [translate-shell](https://github.com/soimort/translate-shell)。

但是, 它們不支持識别文件的修改，只翻譯有改過文件來降本增效。

## 譯文可編輯，再次機器翻譯不覆蓋已有修改

譯文可編輯。

修改原文，再次機器翻譯時，不會覆蓋譯文的人工修改(如果原文此段未修改)。

## 質量最好的機器翻譯

我們研发了新一代翻譯技術，融合傳統機器翻譯模型和大語言模型的技術優勢，讓譯文准確、流暢、優雅。

盲測表明，與同類服務相比，我們的翻譯質量顯著更好。

想要達到同樣的質量，谷歌翻譯和`ChatGPT`所需的的人工編輯量，分别是我們的`2.67`倍和`3.15`倍。

## <a rel=id href="#price" id="price"></a> 極具競爭力的定價

|                                                                                   | 美元 / 百萬字 |
| --------------------------------------------------------------------------------- | ------------- |
| [i18n.site](https://i18n.site)                                                    | 9             |
| [微軟](https://azure.microsoft.com/pricing/details/cognitive-services/translator) | 10            |
| [亞馬遜](https://aws.amazon.com/translate/pricing)                                | 15            |
| [谷歌](https://cloud.google.com/translate/pricing)                                | 20            |
| [DeepL](https://www.deepl.com/zh/pro#developer)                                  | 25            |

[➤ 點此授權自動關注 i18n.site 的 github 開源代碼庫](https://github.com/login/oauth/authorize?client_id=Ov23liuGAmK0plc9FgB3&scope=user:email,user:follow,public_repo), **可获贈金 $50**。

注：計費字符數 = 源文件的 [unicode 字符數](https://en.wikipedia.org/wiki/Unicode) × 譯文的語種數

## 支持翻譯`YAML`

工具只翻譯`YAML`中字典的值，不會翻譯字典的鍵。

基于`YAML`翻譯，你可以方便地構建各種編程語言的國際化解決方案。

## 支持翻譯`HOGO`的文首配置

支持  [HOGO](https://github.com/gohugoio/hugo) 類型靜態博客的文首配置，只其中翻譯`title`、`summary`、`brief`、`description`字段。

## 不翻譯變量名

`Markdown`用來做郵件模板，`YAML`作為語言文件配置，都會有變量參數（比如： 充值`${amount}`已到賬 ）。

`${varname}`這種變量名，不會被当成英文翻譯。

## 針對中日韓的翻譯優化

### 翻譯為英文時，標題自動首字母大寫

中日韓沒有大小寫，而英文標題慣例會把首字母大寫。

`i18`能識别`MarkDown`中的標題，在翻譯為區分大小寫語種時，會自動把首字母大寫。

比如`為閱讀體驗而優化`會翻譯為`Optimized for Reading Experience`。

### 不翻譯中日韓中的英文術語

中日韓的文檔，常常夾雜了很多英文術語。

機器翻譯中日韓成為非英文的語種，經常會將術語也一起翻譯，比如下面這句中文：

`Falcon 得分超 Llama ？Hugging Face 排名引发爭議`

如果用 谷歌 或者 DeepL ，它們都錯誤地翻譯了本應保持原文的英文術語（以日語和法語為例）。

### 谷歌翻譯

譯為日語 :`ファルコンがラマを上回る？ハグ顔ランキングが論爭を巻き起こす`

![](//p.3ti.site/1720199391.avif)

譯為法語 :`Le faucon surpasse le lama ? Le classement Hugging Face suscite la polémique`

`Falcon`譯為`faucon`，`Llama`譯為`lama`。而它們作為專有名詞，都不應該被翻譯 。

![](//p.3ti.site/1720199451.avif)

### DeepL  翻譯

譯為日語 :`ファルコンがラマに勝利、ハグ顔ランキングが物議を醸す`

![](//p.3ti.site/1720199550.avif)

DeepL 翻譯上文為法語（同樣改寫了專有名稱，還添加了奇怪的`... `）：

`Un faucon marque un point sur un lama... Le classement des visages étreints suscite la controverse. `

![](//p.3ti.site/1720199603.avif)

### i18n.site 翻譯

`i18`的翻譯會識别出中日韓文檔中的英文術語，并讓術語保持原樣。

比如上文的日語翻譯結果是 :

`Falcon のスコアが Llama よりも高かったですか ? Hugging Face ランキングが論爭を引き起こす`

法語的翻譯結果是 :

`Falcon a obtenu un score supérieur à Llama ? Hugging Face Le classement suscite la controverse`

只有当英文單詞和中日韓文本存在空格 或者 英文長度大于 1 的時候，才會將此單詞視為術語。

比如：`C羅`會被翻譯為`Cristiano Ronaldo`。

## 可結合`i18n.site`多語言建站

`i18`被集成到了多語言建站的命令行工具 [`i18n.site`](/i18n.site)。

詳見 [`i18n.site`](/i18n.site) 的文檔。

## 代碼開源

客戶端完全開源，服務器端 90% 的代碼開源，[點此查看源代碼](/i18n.site/c/src)。

我們正在尋找志愿者，參與開源代碼的開发和翻譯文本的校對。

如果您有興趣，請先[→ 點此填寫個人簡介](https://ggl.link/i18n)，然后加入 [郵件列表](https://groups.google.com/u/2/g/i18n-site) 交流。

## 保持聯系

請 <button onclick="mailsub()">點此郵件訂閱產品更新</button> 并 <button onclick="webpush()">開啟瀏覽器推送</button>，我們將在產品更新時通知您。

也歡迎關注我們的社交賬號 [X.COM: @i18nSite](https://x.com/i18nSite) / [i18n-site.bsky.social](https://bsky.app/profile/i18n-site.bsky.social)。