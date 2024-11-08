# Instalu &

## Instali

```sh
bash <(curl -sS https://i.i18n.site) i18n.site
```

## Agorda Ĵetono

`i18n.site` havas enkonstruitan `i18` tradukilon Bonvolu [klaki ĉi tie por raporti al la `i18` dokumento por agordi la alirĵetonon](/i18/use) .

## Demoprojekto

Ni komencu per demo-projekto por lerni kiel uzi `i18n.site` .

Ni unue klonas la deponejon kaj rulas la komandon jene:

```
git clone https://github.com/i18n-site/demo.i18n.site.git md
git clone https://github.com/i18n-site/demo.i18n.site.docker.git docker
```

Uzantoj en kontinenta Ĉinio povas:

```
git clone https://atomgit.com/i18n/demo.i18n.site.git md
git clone https://atomgit.com/i18n/demo.i18n.site.docker.git docker
```

La dosieruja nomo de la `demo.i18n.site` kodbaza klono devas esti `md` por faciligi lokan antaŭrigardon kun `docker` .

### Traduki

Unue, enigu la `md` dosierujon kaj rulu `i18n.site` , kiu tradukos `en` al `zh` .

<img src="https://p.3ti.site/1721114619.avif" style="width:350px">

Post funkciado, tradukado kaj kaŝmemoro dosieroj estos generitaj. Bonvolu memori aldoni ilin al la deponejo en la `git add . ` `md` .

### Loka Antaŭrigardo

Instalu kaj komencu `docker` ( `MAC` uzanto rekomendas uzi [orbstack](https://orbstack.dev) kiel rultempon por `docker` ).

Poste, enigu la `docker` dosierujon kaj rulu `./up.sh` , kaj poste [https://127.0.0.1](https://127.0.0.1) por antaŭrigardi loke.

<img src="//p.3ti.site/1721104238.avif" style="width:360px">