<h1 style="justify-content:space-between">3Ti.Site · Aħseb Borderless<img src="//i-01.eu.org/i18n/logo.svg" style="margin-top:-1px;width:42px"></h1>

3Ti.Site, ġeneratur ta &#39;sit statiku, jista&#39; awtomatikament jittraduċi Markdown [f&#39;aktar minn mitt lingwa differenti](https://github.com/i18n-site/node/blob/main/lang/src/index.js) .

<img src="//i-01.eu.org/i18n/lang.webp" alt="" />

Xi nies jistgħu jistaqsu, peress li l-browsers kollha għandhom funzjonijiet ta' traduzzjoni, mhuwiex meħtieġ li tiġi internazzjonalizzata l-websajt?

Nixtieq ngħid li **huma biss il-websajts li jiġġeneraw traduzzjonijiet statiċi li jistgħu jappoġġaw it-tfittxija multilingwi fuq il-post bit-test sħiħ u l-ottimizzazzjoni tal-magni tat-tiftix** .

## Introduzzjoni

Bibbja · Ġenesi :

> Fi żminijiet tal-qedem, meta l-lingwi kienu ħaġa waħda, l-umanità bniet torri li jilħaq is-smewwiet, portal għad-dominju t’Alla, u pproklama l-qawwa tal-umanità.
>
> Alla ddikjara, "L-irġiel jingħaqdu bħala tribù wieħed, b'ilsien komuni, u dan it-torri huwa biss prologu. Issa jilħqu x-xewqa tagħhom, u ma jkunx hemm aktar biża '."
>
> Għalhekk, Alla niżel, ixerred lin-nies lejn irkejjen differenti, juża lingwi differenti.
>
> Minn dak iż-żmien 'il quddiem, il-komunikazzjoni umana saret ta' sfida, it-tilwim bla tmiem, u ma kienx hemm aktar torri li mess is-sema.

Ir-rumanz tal-fantaxjenza &quot;Three-Body&quot; (pronunzja Ċiniża: `3Ti` ) jimbotta ċiviltà aljena li tikkomunika permezz ta 'mewġ elettromanjetiku, m'għandha l-ebda ostakli tal-lingwa, u hija teknoloġikament prospera.

Nittama li noħloq għodda li tippermetti lin-nies tad-dinja jkunu bħal nies bi tliet iġsma, jikkomunikaw mingħajr ma jkunu marbuta bil-lingwa, u jerġgħu jgħaqqdu l-umanità kollha.

## Tutorja

## Funzjoni Introduzzjoni

### Żomm Markdown Format

### Immodifika Traduzzjoni

Wara li timmodifika t-traduzzjoni, trid terġa' tħaddem `./i18n.sh` biex taġġorna l-cache.

### Noti Tat-Traduzzjoni

Il-kummenti tat-traduzzjoni jeħtieġ li jindikaw il-lingwa wara \```, bħal ` ```rust` .

Bħalissa jappoġġja t-traduzzjoni tal-kummenti għal rust, c, cpp, java, js, coffee, python, u bash.

Editja [tran_md/src/comment.coffee](https://github.com/i18n-site/node/blob/main/tran_md/src/comment.coffee) biex iżżid l-appoġġ tat-traduzzjoni għall-kummenti f'aktar lingwi.

### Ikkonfigura L-Prokura

L-issettjar tal-varjabbli ambjentali li ġejjin jippermetti li sejħiet tal-API ta' Google Translate jgħaddu mill-prokura.

```bash
export https_proxy=http://127.0.0.1:7890
```

### Inkorporazzjoni Varjabbli

```
test: 测试变量<br 0>嵌入
```

### Battal Il-Cache

```bash
rm -rf .i18n/.cache
```
