# & Forhåndsvisning

## Installere

```sh
bash <(curl -sS https://i.i18n.site) i18n.site
```

## Konfigurationstoken

`i18n.site` har et indbygget `i18` oversættelsesværktøj [Klik her for at henvise til `i18` dokumentet for at konfigurere adgangstokenet](/i18/use) .

## Demo Projekt

Lad os starte med et demoprojekt for at lære at bruge `i18n.site` .

Vi kloner først demo-lageret og kører kommandoen som følger:

```
git clone https://github.com/i18n-site/demo.i18n.site.git md
git clone https://github.com/i18n-site/demo.i18n.site.docker.git docker
```

Brugere på det kinesiske fastland kan:

```
git clone https://atomgit.com/i18n/demo.i18n.site.git md
git clone https://atomgit.com/i18n/demo.i18n.site.docker.git docker
```

Biblioteknavnet på `demo.i18n.site` -kodebaseklonen skal være `md` for at lette lokal forhåndsvisning med `docker` .

### Oversætte

Indtast først mappen `md` og kør `i18n.site` , som vil oversætte `en` til `zh` .

<img src="https://p.3ti.site/1721114619.avif" style="width:350px">

Efter kørsel vil der blive genereret oversættelses- og cachefiler. Husk at tilføje dem til depotet i `md` `git add . ` .

### Lokal Forhåndsvisning

Installer og start `docker` ( `MAC` bruger anbefaler at bruge [orbstack](https://orbstack.dev) som køretid for `docker` ).

Indtast derefter mappen `docker` og kør `./up.sh` , og besøg derefter [https://127.0.0.1](https://127.0.0.1)

<img src="//p.3ti.site/1721104238.avif" style="width:360px">