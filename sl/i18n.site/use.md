# Namesti & Predogled

## Namestite

```sh
bash <(curl -sS https://i.i18n.site) i18n.site
```

## Konfiguracijski Žeton

`i18n.site` ima vgrajeno `i18` orodje za prevajanje [Kliknite tukaj, da se obrnete na `i18` dokument za konfiguracijo žetona za dostop](/i18/use) .

## Demo Projekt

Začnimo s predstavitvenim projektom, da se naučimo uporabljati `i18n.site` .

Najprej kloniramo demo repozitorij in zaženemo ukaz na naslednji način:

```
git clone https://github.com/i18n-site/demo.i18n.site.git md
git clone https://github.com/i18n-site/demo.i18n.site.docker.git docker
```

Uporabniki v celinski Kitajski lahko:

```
git clone https://atomgit.com/i18n/demo.i18n.site.git md
git clone https://atomgit.com/i18n/demo.i18n.site.docker.git docker
```

Ime imenika klona osnovne kode `demo.i18n.site` mora biti `md` da omogočite lokalni predogled z `docker` .

### Prevajati

Najprej vnesite imenik `md` in zaženite `i18n.site` , kar bo `en` prevedlo v `zh` .

<img src="https://p.3ti.site/1721114619.avif" style="width:350px">

Po zagonu bodo ustvarjene prevodne in predpomnilniške datoteke. Ne pozabite jih dodati v repozitorij v `git add . ` `md` .

### Lokalni Predogled

Namestite in zaženite `docker` ( `MAC` uporabnik priporoča uporabo [orbstack](https://orbstack.dev) kot izvajalnega okolja za `docker` ).

Nato vnesite imenik `docker` in zaženite `./up.sh` ter obiščite lokalno predogled [https://127.0.0.1](https://127.0.0.1)

<img src="//p.3ti.site/1721104238.avif" style="width:360px">