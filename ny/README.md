# I18N.SITE · Chinenero Chopanda Malire<img Src="//i-01.eu.org/i18n/logo.svg" Style="float:right;width:42px;margin-Top:6px">

I18N.SITE, jenereta ya webusayiti yamitundu yambiri, imatha kumasulira zokha Markdown [m&#39;zilankhulo zoposa zana](https://github.com/i18n-site/node/blob/main/lang/src/index.js) .

<img src="//i-01.eu.org/i18n/lang.webp" alt="" />

Anthu ena angafune kufunsa, popeza asakatuli ali ndi ntchito zomasulira zomangidwira, kodi sikofunikira kuyika webusayiti padziko lonse lapansi?

Ndikufuna kunena kuti **popanga tsamba lonselo kuti tithandizire kusaka ndi kukhathamiritsa kwa injini zosaka ndi zilankhulo zambiri m&#39;masamba** .

## Maphunziro

## Chiyambi Cha Ntchito

### Sungani Mawonekedwe A Markdown

### Sinthani Zomasulira

Mukasintha zomasulira, muyenera kuthamanganso `./i18n.sh` kuti musinthe posungira.

### Zomasulira Zomasulira

Ndemanga zomasulira ziyenera kuwonetsa chilankhulo pambuyo pa \```, monga ` ```rust` .

Pakadali pano imathandizira kumasulira kwa ndemanga za dzimbiri, c, cpp, java, js, khofi, python, ndi bash.

Sinthani [tran_md/src/comment.coffee](https://github.com/i18n-site/node/blob/main/tran_md/src/comment.coffee) kuti muwonjezere thandizo la kumasulira kwa ndemanga m&#39;zinenero zambiri.

### Konzani Proxy

Kukhazikitsa zosintha zotsatirazi kumalola ma foni a Google Translate API kuti adutse pa proxy.

```bash
export https_proxy=http://127.0.0.1:7890
```

### Kusintha Kosintha

```
test: 测试变量<br 0>嵌入
```

### Chotsani Cache

```bash
rm -rf .i18n/.cache
```
