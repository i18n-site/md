# Instaloni &

## Instaloni

```sh
bash <(curl -sS https://i.i18n.site) i18n.site
```

## Shenja E Konfigurimit

`i18n.site` ka një mjet përkthimi të integruar `i18` Ju lutemi [, klikoni këtu për t'iu referuar dokumentit `i18` për të konfiguruar kodin e hyrjes](/i18/use) .

## Projekt Demo

Le të fillojmë me një projekt demo për të mësuar se si të përdorim `i18n.site` .

Ne fillimisht klonojmë depo demo dhe ekzekutojmë komandën si më poshtë:

```
git clone https://github.com/i18n-site/demo.i18n.site.git md
git clone https://github.com/i18n-site/demo.i18n.site.docker.git docker
```

Përdoruesit në Kinën kontinentale mund të:

```
git clone https://atomgit.com/i18n/demo.i18n.site.git md
git clone https://atomgit.com/i18n/demo.i18n.site.docker.git docker
```

Emri i drejtorisë së klonit bazë të kodit `demo.i18n.site` duhet të jetë `md` për të lehtësuar pamjen paraprake lokale me `docker` .

### Përkthejnë

Fillimisht, futni direktorinë `md` dhe ekzekutoni `i18n.site` , i cili do të përkthejë `en` në `zh` .

<img src="https://p.3ti.site/1721114619.avif" style="width:350px">

Pas ekzekutimit `git add . ` skedarët `md` përkthimit dhe cache-it do të krijohen.

### Pamje Paraprake Lokale

Instaloni dhe filloni `docker` ( `MAC` përdorues rekomandon përdorimin e [orbstack](https://orbstack.dev) si kohëzgjatjeje për `docker` ).

Më pas, futni direktorinë `docker` dhe ekzekutoni `./up.sh` , dhe më pas [https://127.0.0.1](https://127.0.0.1) për të parë në nivel lokal.

<img src="//p.3ti.site/1721104238.avif" style="width:360px">