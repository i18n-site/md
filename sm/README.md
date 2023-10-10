<h1 style="justify-content:space-between">3Ti.Site · Mafaufau Leai Tuaoi<img src="//i-01.eu.org/i18n/logo.svg" style="margin-top:-1px;width:42px"></h1>

3Ti.Site, o le tele-gagana static site generator, e mafai ona otometi ona faaliliuina Markdown i [le silia ma le selau gagana eseese](https://github.com/i18n-site/node/blob/main/lang/src/index.js) .

<img src="//i-01.eu.org/i18n/lang.webp" alt="" />

Atonu e fia fesili nisi tagata, o lea ua i ai i tagata suʻesuʻe ni galuega faaliliu, e le manaʻomia ea le faʻavaomaloina o le upega tafaʻilagi?

Ou te fia fai atu **e naʻo le faʻasalalauina o le upega tafaʻilagi atoa e mafai ai ona matou lagolagoina le tele-gagana i totonu o le upega tafaʻilagi suʻesuʻega atoa ma suʻesuʻega afi suʻesuʻe** .

## Fa'asologa

“Tusi Paia·Kenese”:

> I aso anamua, a o tasi le gagana, na fanau mai ai le tagata e mitamita. Sa latou saili e fausia se fale maualuluga, o se olo e paʻi atu i le lagi.
>
> Ae peitai, o le Atua, na le fiafia i lo latou faasausili, na mafua ai ona faataapeapeina tagata i le lalolagi atoa, ma le malamalama ai o latou laulaufaiva i le tasi ma le isi.
>
> Talu mai lenā taimi, na tauivi ai tagata e fesootaʻi, na tulaʻi mai feteenaʻiga e lē gata, ma e leʻi toe vaaia e le lalolagi se ʻolo e oo atu i le lagi.

O le tala fa'asaienisi talafatu &quot;Three-Body&quot; (Saina fa'auiga: `3Ti` ) fa'ata'oto se tagata mai fafo e feso'ota'i e ala i galu electromagnetic, e leai ni pa puipui o le gagana, ma o lo'o manuia fa'atekonolosi.

Ou te faamoemoe o le fesoasoani a lenei meafaigaluega, o le a avea ai tagata o le lalolagi e pei o ni tagata tino-tolu, o le a le faatapulaaina fesootaiga e le gagana, ma o le a toe tuufaatasia tagata uma.

## A'oa'oga

## Folasaga Galuega

### Taofi Le Fa'ailoga Fa'ailoga

### Suia Faaliliuga

A maeʻa ona suia le faʻaliliuga, e tatau ona e toe tamoʻe `./i18n.sh` e faʻafou le cache.

### Fa'aliliuga Fa'amatalaga

E mana'omia e fa'amatalaga fa'aliliuga le gagana pe a uma le \```, pei o le ` ```rust` .

O lo'o lagolagoina nei fa'aliliuga fa'amatalaga mo le 'ele, c, cpp, java, js, kofe, python, ma le bash.

Fa'asa'o [tran_md/src/comment.coffee](https://github.com/i18n-site/node/blob/main/tran_md/src/comment.coffee) e fa'aopoopo le lagolago fa'aliliu mo fa'amatalaga i le tele o gagana.

### Fa'atonu Le Sui

O le fa'atulagaina o suiga o le si'osi'omaga o lo'o mulimuli mai e fa'ataga ai le Google Translate API telefoni e alu i le sui sui.

```bash
export https_proxy=http://127.0.0.1:7890
```

### Fuafua Fa'apipi'i

```
test: 测试变量<br 0>嵌入
```

### Aveese Le Cache

```bash
rm -rf .i18n/.cache
```
