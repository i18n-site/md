<h1 style="justify-content:space-between">3Ti.Site · Tink gjin grinzen<img src="//i-01.eu.org/i18n/logo.svg" style="margin-top:-1px;width:42px"></h1>

3Ti.Site, in meartalige statyske sidegenerator, kin Markdown automatysk oersette yn [mear as hûndert ferskillende talen](https://github.com/i18n-site/node/blob/main/lang/src/index.js) .

<img src="//i-01.eu.org/i18n/lang.webp" alt="" />

Guon minsken wolle freegje, no't browsers ynboude oersettingsfunksjes hawwe, is it net nedich om de webside te ynternasjonalisearjen?

Ik wol sizze dat **allinich troch ynternasjonalisearjen fan 'e heule side wy meartalige yn-side folsleine tekstsykjen en sykmasino-optimisaasje kinne stypje** .

## Folchoarder

"Bibel · Genesis":

> De âlden makken gjin ûnderskied tusken talen. Se bouden tuorren dy't de himel berikke om de poarte fan God te berikken om it prestiizje fan it minsklik ras te befoarderjen.
>
> De God sei dat minsken in eigen stam binne, mei deselde kultuer en soarte. It bouwen fan in toer is mar in opmaat. No kinne jo berikke wat jo wolle, en do silst hawwe neat te bang.
>
> Doe kaam God en ferspriede de minsken op ferskate plakken, net yn steat om inoar te begripen.
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
