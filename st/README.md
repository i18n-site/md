<h1 style="justify-content:space-between">3Ti.Site · Ho Nahana Ntle le Meeli<img src="//i-01.eu.org/i18n/logo.svg" style="margin-top:-1px;width:42px"></h1>

3Ti.Site, jenereithara ea sebaka se sa fetoheng, e ka fetolela Markdown [lipuong tse fetang lekholo tse fapaneng](https://github.com/i18n-site/node/blob/main/lang/src/index.js) .

<img src="//i-01.eu.org/i18n/lang.webp" alt="" />

Batho ba bang ba ka 'na ba botsa, kaha joale libatli li na le mesebetsi ea phetolelo e hahelletsoeng, na ha ho hlokahale ho etsa webosaete ea machabeng?

Ke batla ho bolela hore **ke feela ka ho etsa hore sebaka sohle sa marang-rang se be se macha, re ka ts'ehetsa ho batla ka mongolo o felletseng ka lipuo tse ngata sebakeng sa marang-rang le ho ntlafatsa enjine ea ho batla** .

## Selelekela

Bibele · Genese :

> Mehleng ea boholo-holo, ha lipuo e ne e le ntho e le ’ngoe, batho ba ile ba haha ​​tora e fihlang maholimong, monyako oa sebaka sa puso ea Molimo, e phatlalatsang matla a moloko oa batho.
>
> Modimo o boletse, "Batho ba kopana jwalo ka morabe o le mong, ka leleme le le leng, mme tora ena ke selelekela. Jwale ba fihlela takatso ya bona, mme ha ho sa tla ba le tshabo."
>
> Kahoo, Molimo o ile a theoha, a hasanya batho likhutlong tse fapaneng, a sebelisa lipuo tse fapaneng.
>
> Ho tloha ka nako eo ho ea pele, puisano ea batho e ile ea e-ba phephetso, likhohlano tse sa feleng, ’me ha hoa ka ha hlola ho e-ba le tora e amang leholimo.

Pale ea tšōmo ea mahlale &quot;Mele e Meraro&quot; (polelo ea Sechaena: `3Ti` ) e iqapetse tsoelopele esele e buisanang ka maqhubu a motlakase, e senang litšitiso tsa puo, 'me e atlehile ho tsa theknoloji.

Ke tšepa hore ke tla etsa kofuto e tla nolofalletsa batho ba lefatše ho tšoana le batho ba nang le ’mele e meraro, ba buisane ba sa tlangoe ke puo, ’me ba boele ba momahane batho bohle.

## Thuto

## Selelekela Sa Mosebetsi

### Boloka Sebopeho Sa Markdown

### Fetola Phetolelo

Ka mor'a ho fetola phetolelo, u hloka ho sebelisa hape `./i18n.sh` ho nchafatsa cache.

### Lintlha Tsa Phetolelo

Maikutlo a phetolelo a hloka ho bontša puo ka mor'a \```, joalo ka ` ```rust` .

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
