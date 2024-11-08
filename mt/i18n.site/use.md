# Installa &

## Installa

```sh
bash <(curl -sS https://i.i18n.site) i18n.site
```

## Token Tal-Konfigurazzjoni

`i18n.site` għandu għodda ta' traduzzjoni `i18` integrata. Jekk jogħġbok [ikklikkja hawn biex tirreferi għad-dokument `i18` biex tikkonfigura t-token tal-aċċess](/i18/use) .

## Proġett Demo

Nibdew bi proġett demo biex titgħallem kif tuża `i18n.site` .

L-ewwel nikklonajna r-repożitorju tad-demo u nħaddmu l-kmand kif ġej:

```
git clone https://github.com/i18n-site/demo.i18n.site.git md
git clone https://github.com/i18n-site/demo.i18n.site.docker.git docker
```

Utenti fiċ-Ċina kontinentali jistgħu:

```
git clone https://atomgit.com/i18n/demo.i18n.site.git md
git clone https://atomgit.com/i18n/demo.i18n.site.docker.git docker
```

L-isem tad-direttorju tal-klonu tal-bażi tal-kodiċi `demo.i18n.site` għandu jkun `md` biex jiffaċilita preview lokali `docker` .

### Tittraduċi

L-ewwel, daħħal id-direttorju `md` u mexxi `i18n.site` , li se jittraduċi `en` sa `zh` .

<img src="https://p.3ti.site/1721114619.avif" style="width:350px">

Wara t-tħaddim, il-fajls tat-traduzzjoni u l-cache jiġu ġġenerati. Jekk jogħġbok ftakar li żżidhom fir-repożitorju fid- `git add . ` `md` .

### Preview Lokali

Installa u ibda `docker` (utent `MAC` jirrakkomanda li tuża [orbstack](https://orbstack.dev) bħala l-runtime għal `docker` ).

Imbagħad, daħħal id-direttorju `docker` u mexxi `./up.sh` , u mbagħad [https://127.0.0.1](https://127.0.0.1) biex tipprevedi lokalment.

<img src="//p.3ti.site/1721104238.avif" style="width:360px">