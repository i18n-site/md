# Instaliraj &

## Instalirati

```sh
bash <(curl -sS https://i.i18n.site) i18n.site
```

## Konfiguracijski Token

`i18n.site` ima ugrađeni `i18` alat za prevođenje [Kliknite ovdje kako biste pogledali `i18` dokument za konfiguraciju tokena za pristup](/i18/use) .

## Demo Projekt

Počnimo s demo projektom da naučimo kako koristiti `i18n.site` .

Prvo kloniramo demo repozitorij i izvodimo naredbu na sljedeći način:

```
git clone https://github.com/i18n-site/demo.i18n.site.git md
git clone https://github.com/i18n-site/demo.i18n.site.docker.git docker
```

Korisnici u kontinentalnoj Kini mogu:

```
git clone https://atomgit.com/i18n/demo.i18n.site.git md
git clone https://atomgit.com/i18n/demo.i18n.site.docker.git docker
```

Naziv direktorija klona baze koda `demo.i18n.site` mora biti `md` kako bi se olakšao lokalni pregled s `docker` .

### Prevesti

Prvo unesite direktorij `md` i pokrenite `i18n.site` , što će `en` prevesti u `zh` .

<img src="https://p.3ti.site/1721114619.avif" style="width:350px">

Nakon pokretanja, datoteke prijevoda i predmemorije bit će generirane. Ne zaboravite ih dodati u spremište u `git add . ` `md` .

### Lokalni Pregled

Instalirajte i pokrenite `docker` ( `MAC` korisnik preporučuje korištenje [orbstack](https://orbstack.dev) kao runtime za `docker` ).

Zatim unesite direktorij `docker` i pokrenite `./up.sh` , a zatim posjetite lokalno [https://127.0.0.1](https://127.0.0.1)

<img src="//p.3ti.site/1721104238.avif" style="width:360px">