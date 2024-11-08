# Installi &

## Installige

```sh
bash <(curl -sS https://i.i18n.site) i18n.site
```

## Konfiguratsioonimärk

`i18n.site` on sisseehitatud `i18` tõlketööriist. [`i18` konfigureerimiseks klõpsake siin](/i18/use) .

## Demoprojekt

Alustame demoprojektiga, et õppida, kuidas `i18n.site` kasutada.

Esmalt kloonime demohoidla ja käivitame käsu järgmiselt:

```
git clone https://github.com/i18n-site/demo.i18n.site.git md
git clone https://github.com/i18n-site/demo.i18n.site.docker.git docker
```

Mandri-Hiina kasutajad saavad:

```
git clone https://atomgit.com/i18n/demo.i18n.site.git md
git clone https://atomgit.com/i18n/demo.i18n.site.docker.git docker
```

`demo.i18n.site` koodi baasklooni katalooginimi peab olema `md` et hõlbustada `docker` ga kohalikku eelvaadet.

### Tõlkida

Esmalt sisestage `md` kataloog ja käivitage `i18n.site` , mis tõlgib `en` kuni `zh` .

<img src="https://p.3ti.site/1721114619.avif" style="width:350px">

Pärast käivitamist genereeritakse tõlke- ja vahemälufailid. Ärge unustage lisada need hoidlasse `md` `git add . ` .

### Kohalik Eelvaade

Installige ja käivitage `docker` ( `MAC` kasutaja soovitab `docker` käitusajaks kasutada [orbstack](https://orbstack.dev) ).

Seejärel sisestage kataloog `docker` ja käivitage `./up.sh` ning seejärel külastage kohaliku eelvaate kuvamiseks [https://127.0.0.1](https://127.0.0.1)

<img src="//p.3ti.site/1721104238.avif" style="width:360px">