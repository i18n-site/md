<h1 style="justify-content:space-between">3Ti.Site · Tink gjin grinzen<img src="//i-01.eu.org/i18n/logo.svg" style="margin-top:-1px;width:42px"></h1>

3Ti.Site, in meartalige statyske sidegenerator, kin Markdown automatysk oersette yn [mear as hûndert ferskillende talen](https://github.com/i18n-site/node/blob/main/lang/src/index.js) .

<img src="//i-01.eu.org/i18n/lang.webp" alt="" />

Guon minsken wolle freegje, no't browsers ynboude oersettingsfunksjes hawwe, is it net nedich om de webside te ynternasjonalisearjen?

Ik wol sizze dat **allinich troch ynternasjonalisearjen fan 'e heule side wy meartalige yn-side folsleine tekstsykjen en sykmasino-optimisaasje kinne stypje** .

## Folchoarder

"Bibel · Genesis":

> Yn âlde tiden, doe't taal ien wie, waard it minskdom grutsk berne. Se sochten in grut gebou te bouwen, in toer dy't de himel rekke.
>
> Lykwols, de godlike, ûntefreden mei harren arrogânsje, feroarsake de minsken ferspriede oer de ierde, rendering harren tongen ûnbegryplik foar inoar.
>
> Fan doe ôf stride it minskdom om te kommunisearjen, konflikten ûntstiene einleaze, en de wrâld seach gjin toer mear dy't de loft berikte.

De science fiction-roman &quot;Three-Body&quot; (Sineeske útspraak: `3Ti` ) fiksjonalisearret in frjemde beskaving dy't kommunisearret fia elektromagnetyske weagen, gjin taalbarriêres hat en technologysk foarspoedich is.

Ik hoopje dat mei help fan dit ark, de minsken fan 'e ierde sille wêze as trije-body minsken, kommunikaasje sil net beheind wurde troch taal, en it hiele minskdom sil wurde ferienige wer.

## Tutorial

## Funksje Yntroduksje

### Hâld Markdown Format

### Feroarje Oersetting

Nei it wizigjen fan de oersetting moatte jo `./i18n.sh` opnij útfiere om de cache te aktualisearjen.

### Translation Notes

Oersetkommentaren moatte de taal nei \``` oanjaan, lykas ` ```rust` .

Unterstützt op it stuit kommentaar oersetting foar rust, c, cpp, java, js, kofje, python en bash.

Bewurkje [tran_md/src/comment.coffee](https://github.com/i18n-site/node/blob/main/tran_md/src/comment.coffee) om oersettingsstipe ta te foegjen foar opmerkings yn mear talen.

### Proxy Ynstelle

It ynstellen fan de folgjende omjouwingsfariabelen lit Google Translate API-oproppen troch de proxy gean.

```bash
export https_proxy=http://127.0.0.1:7890
```

### Fariabele Embedding

```
test: 测试变量<br 0>嵌入
```

### De Cache Leegje

```bash
rm -rf .i18n/.cache
```
