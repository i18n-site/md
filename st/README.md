<h1 style="justify-content:space-between">3Ti.Site · Nahana Ha ho Meeli<img src="//i-01.eu.org/i18n/logo.svg" style="margin-top:-1px;width:42px"></h1>

3Ti.Site, jenereithara ea sebaka se sa fetoheng sa lipuo tse ngata, e ka fetolela Markdown [lipuong tse fetang lekholo tse fapaneng](https://github.com/i18n-site/node/blob/main/lang/src/index.js) .

<img src="//i-01.eu.org/i18n/lang.webp" alt="" />

Batho ba bang ba kanna ba batla ho botsa, kaha joale libatli li na le mesebetsi ea ho fetolela e hahelletsoeng, na ha ho hlokahale ho etsa webosaete ea machabeng?

Ke batla ho bolela hore **ke feela ka ho etsa hore sebaka sohle sa marang-rang se be se macha, re ka ts&#39;ehetsa ho batla ka mongolo o felletseng ka lipuo tse ngata sebakeng sa marang-rang le ho ntlafatsa enjine ea ho batla** .

## Tatelano

"Bibele Genese":

> Batho ba boholo-holo ba ne ba sa khetholle lipuo. Ba tsoetsoe ba le boikhohomoso ’me ba batla ho haha ​​tora e telele eo tlhōrō e fihlang leholimong.
> <blockquote><p>Molimo ha aa ka a khahlisoa ke boikakaso ba motho, kahoo a hasanya libōpuoa tsohle tse phelang libakeng tse fapaneng, li sitoa ho utloisisana.</p></blockquote>
> <blockquote><p>Ho tloha ka nako eo, ho ’nile ha e-ba thata hore batho ba buisane, likhohlano li ’nile tsa tsoela pele, ’me ha ho na Tora ea Babele lefatšeng.</p></blockquote>

Pale ea tšōmo ea mahlale &quot;Mele e Meraro&quot; (polelo ea Sechaena: `3Ti` ) e iqapetse tsoelopele esele e buisanang ka maqhubu a motlakase, e senang litšitiso tsa puo, &#39;me e atlehile ho tsa theknoloji.

Ke tšepa hore ka thuso ea sesebelisoa sena, batho ba lefatše ba tla tšoana le batho ba ’mele e meraro, puisano e ke ke ea thibeloa ka puo, ’me moloko oohle oa batho o tla boela o kopane.

## Thuto

## Selelekela Sa Mosebetsi

### Boloka Sebopeho Sa Markdown

### Fetola Phetolelo

Ka mor&#39;a ho fetola phetolelo, u hloka ho sebelisa hape `./i18n.sh` ho nchafatsa cache.

### Lintlha Tsa Phetolelo

Maikutlo a phetolelo a hloka ho bontša puo ka mor&#39;a \```, joalo ka ` ```rust` .

Hajoale e tšehetsa phetolelo ea maikutlo bakeng sa rust, c, cpp, java, js, coffee, python, le bash.

Fetola [tran_md/src/comment.coffee](https://github.com/i18n-site/node/blob/main/tran_md/src/comment.coffee) ho kenya tšehetso ea phetolelo bakeng sa maikutlo ka lipuo tse ling.

### Hlophisa Proxy

Ho beha maemo a latelang a tikoloho ho lumella li-call tsa Google Translate API ho sebelisa moemeli.

```bash
export https_proxy=http://127.0.0.1:7890
```

### Embedding E Feto-Fetohang

```
test: 测试变量<br 0>嵌入
```

### Tlosa Cache

```bash
rm -rf .i18n/.cache
```
