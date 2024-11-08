# Pag-Instalar &

## Pag-Instalar

```sh
bash <(curl -sS https://i.i18n.site) i18n.site
```

## Token Sa Pag-Configure

`i18n.site` adunay built-in nga `i18` nga himan sa paghubad Palihog [i-klik dinhi aron i-refer ang `i18` nga dokumento aron ma-configure ang access token](/i18/use) .

## Demo Nga Proyekto

Magsugod ta sa usa ka proyekto sa demo aron makat-on unsaon paggamit `i18n.site` .

Una namong gi-clone ang demo repository ug gipadagan ang command sama sa mosunod:

```
git clone https://github.com/i18n-site/demo.i18n.site.git md
git clone https://github.com/i18n-site/demo.i18n.site.docker.git docker
```

Ang mga tiggamit sa mainland China mahimong:

```
git clone https://atomgit.com/i18n/demo.i18n.site.git md
git clone https://atomgit.com/i18n/demo.i18n.site.docker.git docker
```

Ang ngalan sa direktoryo sa `demo.i18n.site` code base clone kinahanglang `md` aron mapadali ang lokal nga preview sa `docker` .

### Paghubad

Una, pagsulod sa `md` nga direktoryo ug pagdagan `i18n.site` , nga maghubad sa `en` hangtod `zh` .

<img src="https://p.3ti.site/1721114619.avif" style="width:350px">

Human sa pagdagan, ang mga hubad ug cache nga mga file mabuhat Palihug hinumdumi nga idugang kini sa repository sa `md` `git add . ` .

### Lokal Nga Preview

I-install ug sugdi `docker` ( `MAC` user ang nagrekomendar sa paggamit [orbstack](https://orbstack.dev) isip runtime para sa `docker` ).

Dayon, pagsulod sa `docker` nga direktoryo ug pagdagan `./up.sh` , ug dayon bisitaha [https://127.0.0.1](https://127.0.0.1)

<img src="//p.3ti.site/1721104238.avif" style="width:360px">