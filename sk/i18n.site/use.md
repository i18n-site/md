# Inštalovať &

## Inštalovať

```sh
bash <(curl -sS https://i.i18n.site) i18n.site
```

## Konfiguračný Token

`i18n.site` má vstavaný nástroj na preklad `i18` , [kliknite sem a pozrite si dokument `i18` na konfiguráciu prístupového tokenu](/i18/use) .

## Demo Projekt

Začnime s demo projektom, aby sme sa naučili používať `i18n.site` .

Najprv naklonujeme demo úložisko a spustíme príkaz takto:

```
git clone https://github.com/i18n-site/demo.i18n.site.git md
git clone https://github.com/i18n-site/demo.i18n.site.docker.git docker
```

Používatelia v pevninskej Číne môžu:

```
git clone https://atomgit.com/i18n/demo.i18n.site.git md
git clone https://atomgit.com/i18n/demo.i18n.site.docker.git docker
```

Názov adresára základného klonu kódu `demo.i18n.site` musí byť `md` aby sa uľahčil lokálny náhľad s `docker` .

### Preložiť

Najprv zadajte adresár `md` a spustite `i18n.site` , čím sa preloží `en` na `zh` .

<img src="https://p.3ti.site/1721114619.avif" style="width:350px">

Po spustení sa vygenerujú súbory prekladu a vyrovnávacej pamäte, nezabudnite ich pridať do úložiska v `git add . ` `md` .

### Lokálny Náhľad

Nainštalujte a spustite `docker` ( `MAC` používateľ odporúča použiť [orbstack](https://orbstack.dev) ako runtime pre `docker` ).

Potom zadajte adresár `docker` a spustite `./up.sh` a potom navštívte [https://127.0.0.1](https://127.0.0.1)

<img src="//p.3ti.site/1721104238.avif" style="width:360px">