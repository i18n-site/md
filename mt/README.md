<h1 style="justify-content:space-between">3Ti.Site · Aħseb Nru Fruntieri<img src="//i-01.eu.org/i18n/logo.svg" style="margin-top:-1px;width:42px"></h1>

3Ti.Site, ġeneratur ta 'sit statiku b'ħafna lingwi, jista' jittraduċi Markdown awtomatikament [f'aktar minn mitt lingwa differenti](https://github.com/i18n-site/node/blob/main/lang/src/index.js) .

<img src="//i-01.eu.org/i18n/lang.webp" alt="" />

Xi nies jistgħu jixtiequ jistaqsu, issa li l-browsers għandhom funzjonijiet ta 'traduzzjoni inkorporati, mhuwiex meħtieġ li tiġi internazzjonalizzata l-websajt?

Irrid ngħid li **biss billi ninternazzjonalizzaw is-sit kollu nistgħu nappoġġaw it-tfittxija b'test sħiħ fuq il-post b'ħafna lingwi u l-ottimizzazzjoni tal-magni tat-tiftix** .

## Sekwenza

"Bibbja·Ġenesi":

> Il-qedem ma kinux jiddistingwu bejn il-lingwi. Huma bnew torrijiet li jilħqu s-sema biex jilħqu l-bieb ta 'Alla biex jippromwovu l-prestiġju tar-razza umana.
>
> Alla qal li n-nies huma tribù tagħhom stess, bl-istess kultura u speċi. Il-bini ta’ torri huwa biss preludju. Issa tista 'twettaq dak kollu li trid, u ma jkollok xejn minn xiex tibża'.
>
> Imbagħad Alla ġie u xerred lill-poplu f’diversi postijiet, ma setgħux jifhmu lil xulxin.
>
> Minn dak iż-żmien 'il quddiem, l-umanità tħabtu biex tikkomunika, il-kunflitti qamu bla tarf, u d-dinja ma ratx aktar torri li laħaq is-smewwiet.

Ir-rumanz tal-fantaxjenza &quot;Three-Body&quot; (pronunzja Ċiniża: `3Ti` ) jimbotta ċiviltà aljena li tikkomunika permezz ta 'mewġ elettromanjetiku, m'għandha l-ebda ostakli tal-lingwa, u hija teknoloġikament prospera.

Nittama li bl-għajnuna ta 'din l-għodda, in-nies tad-dinja jkunu bħal nies bi tliet korpi, il-komunikazzjoni ma tkunx ristretta mill-lingwa, u l-umanità kollha terġa' tkun magħquda.

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
