# Installeer &

## Installeer

```sh
bash <(curl -sS https://i.i18n.site) i18n.site
```

## Konfigurasietoken

`i18n.site` het 'n ingeboude `i18` vertaalinstrument. [Klik asseblief hier om na die `i18` dokument te verwys om die toegangsteken te konfigureer](/i18/use) .

## Demo Projek

Kom ons begin met 'n demonstrasieprojek om te leer hoe om `i18n.site` te gebruik.

Ons kloon eers die demo-bewaarplek en voer die opdrag soos volg uit:

```
git clone https://github.com/i18n-site/demo.i18n.site.git md
git clone https://github.com/i18n-site/demo.i18n.site.docker.git docker
```

Gebruikers op die vasteland van China kan:

```
git clone https://atomgit.com/i18n/demo.i18n.site.git md
git clone https://atomgit.com/i18n/demo.i18n.site.docker.git docker
```

Die gidsnaam van die `demo.i18n.site` kodebasiskloon moet `md` wees om plaaslike voorskou met `docker` te fasiliteer.

### Vertaal

Voer eers die `md` gids in en hardloop `i18n.site` , wat `en` na `zh` sal vertaal.

<img src="https://p.3ti.site/1721114619.avif" style="width:350px">

Na hardloop, sal vertaling en kaslêers gegenereer word. Onthou asseblief om dit by die bewaarplek in die `md` `git add . ` te voeg.

### Plaaslike Voorskou

Installeer en begin `docker` ( `MAC` gebruiker beveel aan om [orbstack](https://orbstack.dev) as die looptyd vir `docker` te gebruik).

Voer dan die `docker` gids in en hardloop `./up.sh` , en besoek dan [https://127.0.0.1](https://127.0.0.1)

<img src="//p.3ti.site/1721104238.avif" style="width:360px">