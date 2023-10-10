<h1 style="justify-content:space-between">3Ti.Site · Think No Borders<img src="//i-01.eu.org/i18n/logo.svg" style="margin-top:-1px;width:42px"></h1>

3Ti.Site, jenereta ya webusayiti ya zinenero zambiri, imatha kumasulira Markdown [m'zilankhulo zoposa zana](https://github.com/i18n-site/node/blob/main/lang/src/index.js) .

<img src="//i-01.eu.org/i18n/lang.webp" alt="" />

Anthu ena angafune kufunsa, popeza asakatuli ali ndi ntchito zomasulira zomangidwira, kodi sikofunikira kuyika webusayiti padziko lonse lapansi?

Ndikufuna kunena kuti **popanga tsamba lonselo kuti tithandizire kusaka ndi kukhathamiritsa kwa injini zosaka ndi zilankhulo zambiri m'masamba** .

## Kutsatizana

Baibulo · Genesis :

> M’nthaŵi zakale, pamene zinenero zinali chimodzi, anthu anamanga nsanja yofika kumwamba, khomo lolowera ku ulamuliro wa Mulungu, yolengeza mphamvu za anthu.
>
> Mulungu anati: “Anthu amalumikizana ngati fuko limodzi ndi lilime logawana, ndipo nsanja iyi ndi mawu oyambira.
>
> Chotero, Mulungu anatsika, nabalalitsa anthu kumakona osiyanasiyana, akugwiritsa ntchito zilankhulo zosiyanasiyana.
>
> Kuyambira pamenepo, kulankhulana kwa anthu kunakhala kovutirapo, mikangano yosatha, ndipo panalibenso nsanja yokhudza thambo.

Buku lopeka la sayansi &quot;Matupi Atatu&quot; (matchulidwe achi China: `3Ti` ) amapeka chitukuko chachilendo chomwe chimalumikizana ndi mafunde amagetsi, sichikhala ndi zolepheretsa chilankhulo, komanso chikuyenda bwino paukadaulo.

Ndikuyembekeza kupanga chida chimene chidzathandiza anthu padziko lapansi kukhala ngati anthu atatu, kulankhulana popanda kumangidwa ndi chinenero, ndi kugwirizanitsanso anthu onse.

## Maphunziro

## Chiyambi Cha Ntchito

### Sungani Mawonekedwe A Markdown

### Sinthani Zomasulira

Mukasintha zomasulira, muyenera kuthamanganso `./i18n.sh` kuti musinthe posungira.

### Zomasulira Zomasulira

Ndemanga zomasulira ziyenera kuwonetsa chilankhulo pambuyo pa \```, monga ` ```rust` .

Pakadali pano imathandizira kumasulira kwa ndemanga za dzimbiri, c, cpp, java, js, khofi, python, ndi bash.

Sinthani [tran_md/src/comment.coffee](https://github.com/i18n-site/node/blob/main/tran_md/src/comment.coffee) kuti muwonjezere thandizo la kumasulira kwa ndemanga m'zinenero zambiri.

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
