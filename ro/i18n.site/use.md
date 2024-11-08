# Previzualizare &

## Instala

```sh
bash <(curl -sS https://i.i18n.site) i18n.site
```

## Jeton De Configurare

`i18n.site` are un instrument de traducere `i18` încorporat. Vă rugăm să [faceți clic aici pentru a consulta documentul `i18` pentru a configura simbolul de acces](/i18/use) .

## Proiect Demonstrativ

Să începem cu un proiect demonstrativ pentru a învăța cum să folosești `i18n.site` .

Mai întâi clonăm depozitul demo și rulăm comanda după cum urmează:

```
git clone https://github.com/i18n-site/demo.i18n.site.git md
git clone https://github.com/i18n-site/demo.i18n.site.docker.git docker
```

Utilizatorii din China continentală pot:

```
git clone https://atomgit.com/i18n/demo.i18n.site.git md
git clone https://atomgit.com/i18n/demo.i18n.site.docker.git docker
```

Numele directorului clonei de bază de cod `demo.i18n.site` trebuie să fie `md` pentru a facilita previzualizarea locală cu `docker` .

### Traduce

Mai întâi, introduceți directorul `md` și rulați `i18n.site` , care se va traduce de `en` la `zh` .

<img src="https://p.3ti.site/1721114619.avif" style="width:350px">

După rulare, vor fi generate fișierele de traducere și cache. Vă rugăm să nu uitați să le adăugați la depozitul din `git add . ` `md` .

### Previzualizare Locală

Instalați și porniți `docker` ( `MAC` utilizator recomandă utilizarea [orbstack](https://orbstack.dev) ca timp de rulare pentru `docker` ).

Apoi, introduceți directorul `docker` și rulați `./up.sh` , apoi vizitați [https://127.0.0.1](https://127.0.0.1)

<img src="//p.3ti.site/1721104238.avif" style="width:360px">