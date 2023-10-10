<h1 style="justify-content:space-between">3Ti.Site · Tinken sûnder grinzen<img src="//i-01.eu.org/i18n/logo.svg" style="margin-top:-1px;width:42px"></h1>

3Ti.Site, in meartalige statyske sidegenerator, kin Markdown automatysk oersette yn [mear as hûndert ferskillende talen](https://github.com/i18n-site/node/blob/main/lang/src/index.js) .

<img src="//i-01.eu.org/i18n/lang.webp" alt="" />

Guon minsken wolle freegje, no't browsers ynboude oersettingsfunksjes hawwe, is it net nedich om de webside te ynternasjonalisearjen?

Ik wol sizze dat **allinich troch ynternasjonalisearjen fan 'e heule side wy meartalige yn-side folsleine tekstsykjen en sykmasino-optimisaasje kinne stypje** .

## Ynlieding

Bibel · Genesis :

> Yn âlde tiden, doe't talen ien wiene, boude it minskdom in toer dy't nei de himel berikte, in poarte nei Gods domein, dy't de macht fan 'e minske ferkundige.
>
> God ferklearre: "Minsken ferienigje as ien stam, mei in dielde tonge, en dizze toer is mar in prolooch. No berikke se har winsk, en der sil gjin eangst mear wêze."
>
> Sa kaam God del, ferspriede minsken nei ferskate hoeken, brûke ferskate talen.
>
> Fan doe ôf waard minsklike kommunikaasje útdaagjend, konflikten einleaze, en net mear wie der in toer dy't de himel rekke.

De science fiction-roman &quot;Three-Body&quot; (Sineeske útspraak: `3Ti` ) fiksjonalisearret in frjemde beskaving dy't kommunisearret fia elektromagnetyske weagen, gjin taalbarriêres hat en technologysk foarspoedich is.

Ik hoopje in ark te meitsjen dat de minsken fan 'e ierde mooglik makket om as trije-lichem minsken te wêzen, te kommunisearjen sûnder bûn te wurden troch taal, en it hiele minskdom wer te ferienigjen.

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
