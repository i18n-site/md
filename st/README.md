<h1 style="justify-content:space-between">3Ti.Site · Nahana Ha ho Meeli<img src="//i-01.eu.org/i18n/logo.svg" style="margin-top:-1px;width:42px"></h1>

3Ti.Site, jenereithara ea sebaka se sa fetoheng sa lipuo tse ngata, e ka fetolela Markdown [lipuong tse fetang lekholo tse fapaneng](https://github.com/i18n-site/node/blob/main/lang/src/index.js) .

<img src="//i-01.eu.org/i18n/lang.webp" alt="" />

Batho ba bang ba kanna ba batla ho botsa, kaha joale libatli li na le mesebetsi ea ho fetolela e hahelletsoeng, na ha ho hlokahale ho etsa webosaete ea machabeng?

Ke batla ho bolela hore **ke feela ka ho etsa hore sebaka sohle sa marang-rang se be se macha, re ka ts'ehetsa ho batla ka mongolo o felletseng ka lipuo tse ngata sebakeng sa marang-rang le ho ntlafatsa enjine ea ho batla** .

## Tatelano

"Bibele Genese":

> Batho ba boholo-holo ba ne ba sa khetholle lipuo. Ba ile ba haha ​​litora tse fihlang leholimong ho fihla hekeng ea Molimo ho ntšetsa pele botumo ba moloko oa batho.
>
> Molimo o ile a re batho ke moloko oa bona, ba nang le setso le mefuta e tšoanang. Ho haha ​​tora ke selelekela feela. Hona joale u ka finyella eng kapa eng eo ue batlang, 'me u ke ke ua tšaba letho.
>
> Ke moka Modimo a tla a gašanya batho mafelong a fapa-fapanego, ba sa kgone go kwešišana.
>
> Ho tloha ka nako eo ho ea pele, moloko oa batho o ile oa thatafalloa ke ho buisana, likhohlano tsa hlaha ka ho sa feleng, ’me lefatše ha lea ka la hlola le bona tora e fihlang leholimong.

Pale ea tšōmo ea mahlale &quot;Mele e Meraro&quot; (polelo ea Sechaena: `3Ti` ) e iqapetse tsoelopele esele e buisanang ka maqhubu a motlakase, e senang litšitiso tsa puo, 'me e atlehile ho tsa theknoloji.

Ke tšepa hore ka thuso ea sesebelisoa sena, batho ba lefatše ba tla tšoana le batho ba ’mele e meraro, puisano e ke ke ea thibeloa ka puo, ’me moloko oohle oa batho o tla boela o kopane.

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
