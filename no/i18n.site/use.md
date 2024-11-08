# & Forhåndsvisning

## Installer

```sh
bash <(curl -sS https://i.i18n.site) i18n.site
```

## Konfigurasjonstoken

`i18n.site` har et innebygd `i18` oversettelsesverktøy [Klikk her for å referere til `i18` -dokumentet for å konfigurere tilgangstoken](/i18/use) .

## Demoprosjekt

La oss starte med et demoprosjekt for å lære hvordan du bruker `i18n.site` .

Vi kloner først demolageret og kjører kommandoen som følger:

```
git clone https://github.com/i18n-site/demo.i18n.site.git md
git clone https://github.com/i18n-site/demo.i18n.site.docker.git docker
```

Brukere i fastlands-Kina kan:

```
git clone https://atomgit.com/i18n/demo.i18n.site.git md
git clone https://atomgit.com/i18n/demo.i18n.site.docker.git docker
```

Katalognavnet til `demo.i18n.site` -kodebaseklonen må være `md` for å lette lokal forhåndsvisning med `docker` .

### Oversette

Skriv først inn `md` katalogen og kjør `i18n.site` , som vil oversette `en` til `zh` .

<img src="https://p.3ti.site/1721114619.avif" style="width:350px">

Etter kjøring vil oversettelses- og hurtigbufferfiler bli generert. Husk å legge dem til depotet i `md` `git add . ` .

### Lokal Forhåndsvisning

Installer og start `docker` ( `MAC` bruker anbefaler å bruke [orbstack](https://orbstack.dev) som kjøretid for `docker` ).

Gå deretter inn i `docker` katalogen og kjør `./up.sh` , og gå deretter [https://127.0.0.1](https://127.0.0.1) for å forhåndsvise lokalt.

<img src="//p.3ti.site/1721104238.avif" style="width:360px">