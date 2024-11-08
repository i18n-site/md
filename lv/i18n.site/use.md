# Instalējiet &

## Instalējiet

```sh
bash <(curl -sS https://i.i18n.site) i18n.site
```

## Konfigurācijas Marķieris

`i18n.site` ir iebūvēts `i18` tulkošanas rīks, lūdzu [, noklikšķiniet šeit, lai skatītu `i18` dokumentu, lai konfigurētu piekļuves pilnvaru](/i18/use) .

## Demo Projekts

Sāksim ar demonstrācijas projektu, lai uzzinātu, kā lietot `i18n.site` .

Vispirms mēs klonējam demonstrācijas repozitoriju un palaižam komandu šādi:

```
git clone https://github.com/i18n-site/demo.i18n.site.git md
git clone https://github.com/i18n-site/demo.i18n.site.docker.git docker
```

Lietotāji kontinentālajā Ķīnā var:

```
git clone https://atomgit.com/i18n/demo.i18n.site.git md
git clone https://atomgit.com/i18n/demo.i18n.site.docker.git docker
```

`demo.i18n.site` koda bāzes klona direktorija nosaukumam ir jābūt `md` lai atvieglotu lokālo priekšskatījumu ar `docker` .

### Tulkot

Vispirms ievadiet `md` direktoriju un palaidiet `i18n.site` , kas pārtulkos `en` uz `zh` .

<img src="https://p.3ti.site/1721114619.avif" style="width:350px">

Pēc palaišanas tiks ģenerēti tulkošanas un kešatmiņas faili. Lūdzu, atcerieties tos pievienot krātuvei `md` `git add . ` .

### Vietējais Priekšskatījums

Instalējiet un sāciet `docker` ( `MAC` lietotājs iesaka izmantot [orbstack](https://orbstack.dev) kā izpildlaiku `docker` ).

Pēc tam ievadiet `docker` direktoriju un palaidiet `./up.sh` un pēc tam apmeklējiet [https://127.0.0.1](https://127.0.0.1) lai priekšskatītu lokāli.

<img src="//p.3ti.site/1721104238.avif" style="width:360px">