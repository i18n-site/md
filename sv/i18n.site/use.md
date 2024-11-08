# Installera &

## Installera

```sh
bash <(curl -sS https://i.i18n.site) i18n.site
```

## Konfigurationstoken

`i18n.site` har ett inbyggt `i18` översättningsverktyg [Klicka här för att hänvisa till `i18` dokumentet för att konfigurera åtkomsttoken](/i18/use) .

## Demoprojekt

Låt oss börja med ett demoprojekt för att lära oss hur man använder `i18n.site` .

Vi klonar först demoförvaret och kör kommandot enligt följande:

```
git clone https://github.com/i18n-site/demo.i18n.site.git md
git clone https://github.com/i18n-site/demo.i18n.site.docker.git docker
```

Användare på det kinesiska fastlandet kan:

```
git clone https://atomgit.com/i18n/demo.i18n.site.git md
git clone https://atomgit.com/i18n/demo.i18n.site.docker.git docker
```

Katalognamnet för `demo.i18n.site` -kodbasklonen måste vara `md` för att underlätta lokal förhandsgranskning med `docker` .

### Översätta

Ange först katalogen `md` och kör `i18n.site` , vilket kommer att översätta `en` till `zh` .

<img src="https://p.3ti.site/1721114619.avif" style="width:350px">

Efter körning kommer översättnings- och cachefiler att genereras. Kom ihåg att lägga till dem i arkivet i `md` `git add . ` .

### Lokal Förhandsvisning

Installera och starta `docker` ( `MAC` användare rekommenderar att du använder [orbstack](https://orbstack.dev) som körtid för `docker` ).

Gå sedan in i katalogen `docker` och kör `./up.sh` och [https://127.0.0.1](https://127.0.0.1) sedan för att förhandsgranska lokalt.

<img src="//p.3ti.site/1721104238.avif" style="width:360px">