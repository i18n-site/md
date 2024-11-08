# Installeer &

## Installeren

```sh
bash <(curl -sS https://i.i18n.site) i18n.site
```

## Configuratietoken

`i18n.site` heeft een ingebouwde `i18` vertaaltool. [Klik hier om naar het `i18` document te verwijzen om het toegangstoken te configureren](/i18/use) .

## Demoproject

Laten we beginnen met een demoproject om te leren hoe u `i18n.site` kunt gebruiken.

We klonen eerst de demo-repository en voeren de opdracht als volgt uit:

```
git clone https://github.com/i18n-site/demo.i18n.site.git md
git clone https://github.com/i18n-site/demo.i18n.site.docker.git docker
```

Gebruikers op het Chinese vasteland kunnen:

```
git clone https://atomgit.com/i18n/demo.i18n.site.git md
git clone https://atomgit.com/i18n/demo.i18n.site.docker.git docker
```

De mapnaam van de basiskloon met code `demo.i18n.site` moet `md` zijn om lokale preview met `docker` mogelijk te maken.

### Vertalen

Voer eerst de map `md` in en voer `i18n.site` uit, wat `en` naar `zh` vertaalt.

<img src="https://p.3ti.site/1721114619.avif" style="width:350px">

Na het uitvoeren worden vertaal- en cachebestanden gegenereerd. Vergeet niet om deze toe te voegen aan de repository in de `git add . ` `md` .

### Lokaal Voorbeeld

Installeer en start `docker` ( `MAC` gebruiker raadt aan om [orbstack](https://orbstack.dev) te gebruiken als runtime voor `docker` ).

Voer vervolgens de map `docker` in en voer `./up.sh` uit, en bezoek vervolgens lokaal [https://127.0.0.1](https://127.0.0.1) voorbeeld.

<img src="//p.3ti.site/1721104238.avif" style="width:360px">